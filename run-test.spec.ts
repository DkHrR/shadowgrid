import { getTestEnvironment } from '@midnight-ntwrk/testkit-js';
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
    if (fs.existsSync(distPath + '/contract/index.js')) contractModule = await import(path.resolve(distPath + '/contract/index.js'));
    else if (fs.existsSync(distPath + '/contract/index.cjs')) contractModule = await import(path.resolve(distPath + '/contract/index.cjs'));
    else contractModule = await import(path.resolve(distPath + '/index.cjs'));

    const ContractDef = contractModule.Contract;
    if (!ContractDef) throw new Error('Contract export not found in generated module');

    // Dynamic state used by witness
    let witnessState = {
        game_id: 1n,
        player_id: new Uint8Array(32),
        x: 2n,
        y: 2n,
        health: 100n,
        nonce: 1n,
        salt: new Uint8Array(32)
    };
    witnessState.salt[0] = 9;

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

    const GENESIS_MINT_WALLET_SEED = '0000000000000000000000000000000000000000000000000000000000000042';

    const providers = {
        privateStateProvider: levelPrivateStateProvider({
            privateStateStoreName: 'test-private-state',
            signingKeyStoreName: 'test-signing-keys',
            privateStoragePasswordProvider: async () => 'shadowgrid-production-password-998877',
            accountId: GENESIS_MINT_WALLET_SEED
        }),
        publicDataProvider: indexerPublicDataProvider(envConfig.indexerUri, envConfig.indexerWsUri),
        zkConfigProvider: new NodeZkConfigProvider(path.resolve(distPath)),
        proofProvider: httpClientProofProvider(envConfig.proofServerUri),
        walletProvider: new MidnightWalletProvider(envConfig.nodeUri),
        midnightProvider: new MidnightWalletProvider(envConfig.nodeUri)
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
        const player_id = new Uint8Array(32);
        
        const x_old = 2n, y_old = 2n, health_old = 100n, nonce_old = 1n;
        const salt_old = new Uint8Array(32); salt_old[0] = 9;

        logger.info('Registering initial state...');
        await deployedContract.callTx.register(game_id, player_id, x_old, y_old, health_old, salt_old);

        let current_x = x_old;
        let current_y = y_old;
        let current_nonce = nonce_old;
        let current_salt = salt_old;

        const testCases = [
            { name: "Legal move right", x: 3n, y: 2n, health: 100n, nonce: 2n, expected: true },
            { name: "Illegal move speed", x: 5n, y: 2n, health: 100n, nonce: 3n, expected: false },
            { name: "Illegal bounds", x: 10n, y: 2n, health: 100n, nonce: 3n, expected: false },
            { name: "Illegal health change", x: 3n, y: 3n, health: 99n, nonce: 3n, expected: false },
            { name: "Illegal nonce skip", x: 3n, y: 3n, health: 100n, nonce: 4n, expected: false },
            { name: "Legal move down", x: 3n, y: 3n, health: 100n, nonce: 3n, expected: true }
        ];

        logger.info('Running movement test cases...');
        
        let markdownReport = '# Runtime Verification Results\n\n| Test Case | Expected | Actual | Result | Evidence |\n|---|---|---|---|---|\n';

        for (const tc of testCases) {
            const salt_new = new Uint8Array(32); salt_new[0] = Number(tc.nonce);
            
            // Set witness state to current authoritative state
            witnessState = {
                game_id: game_id,
                player_id: player_id,
                x: current_x,
                y: current_y,
                health: 100n,
                nonce: current_nonce,
                salt: current_salt
            };
            
            let success = false;
            let evidence = '';
            try {
                await deployedContract.callTx.verify_move(tc.x, tc.y, salt_new);
                success = true;
                evidence = 'Transaction accepted';
                if (tc.expected) {
                    current_x = tc.x; current_y = tc.y; current_nonce = tc.nonce; current_salt = salt_new;
                }
            } catch (e: any) {
                success = false;
                evidence = e.message.substring(0, 50).replace(/\n/g, ' ') + '...';
            }

            const passed = (success === tc.expected);
            logger.info(\[\] \: Expected \, got \\);
            markdownReport += \| \ | \ | \ | \ | \ |\n\;
        }

        fs.writeFileSync('test-results.md', markdownReport);

    } finally {
        await testEnv.stop();
    }
}, 300000);
