
import { getTestEnvironment, waitForFunds } from '@midnight-ntwrk/testkit-js';
import { levelPrivateStateProvider } from '@midnight-ntwrk/midnight-js-level-private-state-provider';
import { indexerPublicDataProvider } from '@midnight-ntwrk/midnight-js-indexer-public-data-provider';
import { NodeZkConfigProvider } from '@midnight-ntwrk/midnight-js-node-zk-config-provider';
import { httpClientProofProvider } from '@midnight-ntwrk/midnight-js-http-client-proof-provider';
import { MidnightWalletProvider } from './midnight-wallet-provider';
import { deployContract } from '@midnight-ntwrk/midnight-js-contracts';
import { CompiledContract } from '@midnight-ntwrk/midnight-js-protocol/compact-js';
import * as path from 'path';
import * as fs from 'fs';
import pino from 'pino';

import { test } from 'vitest';
test('E2E Runtime verification', async () => {
    const logger = pino({ level: 'info' });

    let distPath = './dist';

    let contractModule: any;
    const contractPath = path.resolve(distPath, 'contract', 'index.js');
    if (fs.existsSync(contractPath)) {
        contractModule = await import(contractPath);
    } else {
        throw new Error(`Compiled contract not found at ${contractPath}`);
    }

    const ContractDef = contractModule.Contract;
    if (!ContractDef) throw new Error('Contract export not found in generated module');

    // --- Step 1: Create the canonical player identity and initial state upfront ---
    // These SAME values must be used for both register() and verify_move().
    const game_id = 1n;
    const player_id = crypto.getRandomValues(new Uint8Array(32));
    const x_init = 2n, y_init = 2n, health_init = 100n;
    const nonce_init = 1n;
    const salt_init = crypto.getRandomValues(new Uint8Array(32));
    salt_init[0] = 9;

    // The witness always returns the current local state.
    // Both register() and verify_move() call localState(), so persistentHash
    // is ALWAYS computed from witness-derived data in both circuits.
    let witnessState: any = {
        game_id:   game_id,
        player_id: player_id,
        x:         x_init,
        y:         y_init,
        health:    health_init,
        nonce:     nonce_init,
        salt:      salt_init
    };

    console.log('CIRCUITS:', ContractDef.circuits);
    const CompiledShadowgridContract = CompiledContract.make('shadowgrid', ContractDef).pipe(
        CompiledContract.withWitnesses({
            localState: (context) => [context.privateState, witnessState]
        }),
        CompiledContract.withCompiledFileAssets(path.resolve(distPath))
    );

    const testEnv = getTestEnvironment(logger);
    let envConfig;
    try {
      envConfig = await testEnv.start();
    } catch (e) {
      console.error(e);
      throw e;
    }

    const GENESIS_MINT_WALLET_SEED = 'test-wallet';
    const wallet = await MidnightWalletProvider.build(logger, envConfig, GENESIS_MINT_WALLET_SEED);
    await wallet.start();
    await waitForFunds(wallet.wallet, envConfig, true, wallet.unshieldedKeystore);

    const zkConfigProvider = new NodeZkConfigProvider(path.resolve(distPath));

    const providers = {
        privateStateProvider: levelPrivateStateProvider({
            privateStateStoreName: 'test-private-state',
            signingKeyStoreName: 'test-signing-keys',
            privateStoragePasswordProvider: async () => 'shadowgrid-production-password-998877',
            accountId: GENESIS_MINT_WALLET_SEED
        }),
        publicDataProvider: indexerPublicDataProvider(envConfig.indexer, envConfig.indexerWS),
        zkConfigProvider: zkConfigProvider,
        proofProvider: httpClientProofProvider(envConfig.proofServer, zkConfigProvider),
        walletProvider: wallet,
        midnightProvider: wallet
    };

    try {
        logger.info('Deploying contract...');
        const deployedContract = await deployContract(providers, {
            compiledContract: CompiledShadowgridContract,
            privateStateId: 'test-private-state',
            initialPrivateState: {}
        });

        providers.privateStateProvider.setContractAddress(deployedContract.deployTxData.public.contractAddress);
        logger.info('Contract deployed successfully at ' + deployedContract.deployTxData.public.contractAddress);

        // --- Step 2: Verify ZK infrastructure is reachable ---
        try {
            const ir = await providers.zkConfigProvider.getZKIR('register');
            console.log('Successfully read ZKIR for register, length:', ir.length);
        } catch(e) {
            console.log('Failed to read ZKIR:', e);
        }
        try {
            const prover = await providers.zkConfigProvider.getProverKey('register');
            console.log('Successfully read PROVER key for register, length:', prover.length);
        } catch(e) {
            console.log('Failed to read PROVER key:', e);
        }

        // --- Step 3: Register using localState() witness (no public args) ---
        // witnessState is already set to the initial state above.
        logger.info(`Registering initial state: player_id[0]=${player_id[0]}, x=${x_init}, y=${y_init}, nonce=${nonce_init}`);
        try {
            await deployedContract.callTx.register();
        } catch (e: any) {
            console.error("REGISTER FAILED:", e.message);
            throw e;
        }
        logger.info('Registration succeeded.');

        // --- Step 4: Track authoritative state for sequential test cases ---
        let current_x = x_init;
        let current_y = y_init;
        let current_nonce = nonce_init;
        let current_salt = salt_init;

        const testCases = [
            { name: "Legal move right",         x: 3n, y: 2n, nonce: 2n, fake_witness: false, expected: true  },
            { name: "Registration Hijacking",   register: true, x: 2n, y: 2n, expected: false },
            { name: "Public Position Desync",   x: 4n, y: 2n, nonce: 3n, fake_witness: true,  expected: false },
            { name: "Illegal move speed",       x: 5n, y: 2n, nonce: 3n, fake_witness: false, expected: false },
            { name: "Legal move down",          x: 3n, y: 3n, nonce: 3n, fake_witness: false, expected: true  }
        ];

        logger.info('Running movement test cases...');
        let markdownReport = '# Runtime Verification Results\n\n| Test Case | Expected | Actual | Result | Evidence |\n|---|---|---|---|---|\n';

        for (const tc of testCases) {
            let success = false;
            let evidence = '';

            if ((tc as any).register) {
                // Attempt duplicate registration (should fail)
                try {
                    // Use same witnessState — player already registered
                    await deployedContract.callTx.register();
                    success = true;
                    evidence = 'Transaction accepted';
                } catch (e: any) {
                    success = false;
                    evidence = String(e.message || e).replace(/\n/g, ' ');
                }
            } else {
                const salt_new = crypto.getRandomValues(new Uint8Array(32));
                salt_new[0] = Number(tc.nonce!);

                // Set witness state to current authoritative state.
                // For fake_witness tests, the attacker tries to use a wrong position.
                witnessState = {
                    game_id:   game_id,
                    player_id: player_id,
                    x:         tc.fake_witness ? tc.x : current_x,
                    y:         tc.fake_witness ? tc.y : current_y,
                    health:    health_init,
                    nonce:     current_nonce,
                    salt:      current_salt
                };

                logger.info(`[${tc.name}] witness x=${witnessState.x} y=${witnessState.y} nonce=${witnessState.nonce} → move to x=${tc.x} y=${tc.y}`);

                try {
                    await deployedContract.callTx.verify_move(tc.x, tc.y, salt_new);
                    success = true;
                    evidence = 'Transaction accepted';
                    if (tc.expected && !tc.fake_witness) {
                        // Advance authoritative state
                        current_x = tc.x;
                        current_y = tc.y;
                        current_nonce = tc.nonce!;
                        current_salt = salt_new;
                    }
                } catch (e: any) {
                    success = false;
                    evidence = String(e.message || e).replace(/\n/g, ' ');
                }
            }

            const passed = (success === tc.expected);
            logger.info(`[${passed ? 'PASS' : 'FAIL'}] ${tc.name}: Expected ${tc.expected}, got ${success}`);
            if (!passed) {
                logger.error(`Evidence: ${evidence}`);
            }
            markdownReport += `| ${tc.name} | ${tc.expected} | ${success} | ${passed ? '✅ PASS' : '❌ FAIL'} | ${evidence} |\n`;

            if (!passed) {
                throw new Error(`Test case failed: ${tc.name}. Expected ${tc.expected}, got ${success}. Evidence: ${evidence}`);
            }
        }

        fs.writeFileSync('test-results.md', markdownReport);
        logger.info('All test cases passed.');

    } finally {
        if (typeof wallet !== 'undefined') await wallet.stop();
        logger.info('Shutting down test environment...');
        await testEnv.shutdown();
    }
}, 300000);
