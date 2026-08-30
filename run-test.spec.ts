
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

    // Dynamic state used by witness
    let witnessState = {
        game_id: 1n,
        player_id: crypto.randomBytes(32),
        x: 2n,
        y: 2n,
        health: 100n,
        nonce: 1n,
        salt: crypto.randomBytes(32)
    };
    witnessState.salt[0] = 9;

    const zkirDir = path.resolve(distPath, 'zkir');
    const keysDir = path.resolve(distPath, 'keys');
    if (fs.existsSync(zkirDir)) {
        for (const file of fs.readdirSync(zkirDir)) {
            if (file === 'verify_move.bzkir' || file === 'register.bzkir') {
                const src = path.join(zkirDir, file);
                const dst = path.join(zkirDir, 'shadowgrid#' + file);
                fs.copyFileSync(src, dst);
                console.log(`Copied ${file} (size: ${fs.statSync(dst).size} bytes) to ${dst}`);
            }
        }
    }
    if (fs.existsSync(keysDir)) {
        for (const file of fs.readdirSync(keysDir)) {
            if (file === 'verify_move.verifier' || file === 'verify_move.prover' || file === 'register.verifier' || file === 'register.prover') {
                const src = path.join(keysDir, file);
                const dst = path.join(keysDir, 'shadowgrid#' + file);
                fs.copyFileSync(src, dst);
                console.log(`Copied ${file} (size: ${fs.statSync(dst).size} bytes) to ${dst}`);
            }
        }
    }

    const CompiledShadowgridContract = CompiledContract.make('shadowgrid', ContractDef).pipe(
        CompiledContract.withWitnesses({
            localState: () => witnessState
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

    const providers = {
        privateStateProvider: levelPrivateStateProvider({
            privateStateStoreName: 'test-private-state',
            signingKeyStoreName: 'test-signing-keys',
            privateStoragePasswordProvider: async () => 'shadowgrid-production-password-998877',
            accountId: GENESIS_MINT_WALLET_SEED
        }),
        publicDataProvider: indexerPublicDataProvider(envConfig.indexer, envConfig.indexerWS),
        zkConfigProvider: new NodeZkConfigProvider(path.resolve(distPath)),
        proofProvider: httpClientProofProvider(envConfig.proofServer),
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

        logger.info('Contract deployed successfully at ' + deployedContract.deployTxData.public.contractAddress);

        const game_id = 1n;
        const player_id = crypto.randomBytes(32);
        
        const x_old = 2n, y_old = 2n, health_old = 100n, nonce_old = 1n;
        const salt_old = crypto.randomBytes(32); salt_old[0] = 9;
        
        let current_x = x_old;
        let current_y = y_old;
        let current_nonce = nonce_old;
        let current_salt = salt_old;

        
        try {
            logger.info('Registering initial state...');
            
console.log('Testing ZKIR reading...');
try {
    const ir = await zkConfigProvider.getZKIR('shadowgrid#register');
    console.log('Successfully read ZKIR, length:', ir.length);
} catch(e) {
    console.log('Failed to read ZKIR:', e);
}
try {
    const prover = await zkConfigProvider.getProverKey('shadowgrid#register');
    console.log('Successfully read PROVER key, length:', prover.length);
} catch(e) {
    console.log('Failed to read PROVER key:', e);
}
await deployedContract.callTx.register(game_id, player_id, x_old, y_old, health_old, salt_old);
        } catch (e: any) {
            console.error("REGISTER FAILED:", e);
            console.error("Error message:", e.message);
            if (e.cause) console.error("Error cause:", e.cause);
            if (e.response) {
                console.error("Error response data:", e.response.data);
                console.error("Error response status:", e.response.status);
            }
            try {
                const cp = require('child_process');
                const containerId = cp.execSync("docker ps -q -f ancestor=midnightntwrk/proof-server:8.1.0").toString().trim();
                if (containerId) {
                    console.log("\n\n--- PROOF SERVER LOGS ---");
                    console.log(cp.execSync(`docker logs --tail 200 ${containerId}`).toString());
                    console.log("-------------------------\n\n");
                }
            } catch (ex) {
                console.error("Failed to fetch docker logs:", ex);
            }
            throw e;
        }
        

        const testCases = [
            { name: "Legal move right", x: 3n, y: 2n, health: 100n, nonce: 2n, fake_witness: false, expected: true },
            { name: "Registration Hijacking", register: true, x: 2n, y: 2n, health: 100n, expected: false },
            { name: "Public Position Desync", fake_witness: true, x: 4n, y: 2n, health: 100n, nonce: 3n, expected: false },
            { name: "Illegal move speed", x: 5n, y: 2n, health: 100n, nonce: 3n, fake_witness: false, expected: false },
            { name: "Legal move down", x: 3n, y: 3n, health: 100n, nonce: 3n, fake_witness: false, expected: true }
        ];

        logger.info('Running movement test cases...');
        
        let markdownReport = '# Runtime Verification Results\n\n| Test Case | Expected | Actual | Result | Evidence |\n|---|---|---|---|---|\n';

        for (const tc of testCases) {
            let success = false;
            let evidence = '';

            if (tc.register) {
                try {
                    
console.log('Testing ZKIR reading...');
try {
    const ir = await zkConfigProvider.getZKIR('shadowgrid#register');
    console.log('Successfully read ZKIR, length:', ir.length);
} catch(e) {
    console.log('Failed to read ZKIR:', e);
}
try {
    const prover = await zkConfigProvider.getProverKey('shadowgrid#register');
    console.log('Successfully read PROVER key, length:', prover.length);
} catch(e) {
    console.log('Failed to read PROVER key:', e);
}
await deployedContract.callTx.register(game_id, player_id, tc.x, tc.y, tc.health, salt_old);
                    success = true;
                    evidence = 'Transaction accepted';
                } catch (e: any) {
                    success = false;
                    evidence = e.message.substring(0, 50).replace(/\n/g, ' ') + '...';
                }
            } else {
                const salt_new = crypto.randomBytes(32); salt_new[0] = Number(tc.nonce);
                
                // Set witness state to current authoritative state
                witnessState = {
                    game_id: game_id,
                    player_id: player_id,
                    x: tc.fake_witness ? tc.x : current_x, // Attacker tries to fake their old position!
                    y: tc.fake_witness ? tc.y : current_y,
                    health: 100n,
                    nonce: current_nonce,
                    salt: current_salt
                };
                
                try {
                    await deployedContract.callTx.verify_move(tc.x, tc.y, salt_new);
                    success = true;
                    evidence = 'Transaction accepted';
                    if (tc.expected && !tc.fake_witness) {
                        current_x = tc.x; current_y = tc.y; current_nonce = tc.nonce; current_salt = salt_new;
                    }
                } catch (e: any) {
                    success = false;
                    evidence = e.message.substring(0, 50).replace(/\n/g, ' ') + '...';
                }
            }

            const passed = (success === tc.expected);
            logger.info(`[${passed ? 'PASS' : 'FAIL'}] ${tc.name}: Expected ${tc.expected}, got ${success}`);
            markdownReport += `| ${tc.name} | ${tc.expected} | ${success} | ${passed ? '? PASS' : '? FAIL'} | ${evidence} |\n`;
        }

        fs.writeFileSync('test-results.md', markdownReport);

    } finally {
        if (typeof wallet !== 'undefined') await wallet.stop();
        await testEnv.shutdown();
    }
}, 300000);
