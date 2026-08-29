import { getTestEnvironment } from '@midnight-ntwrk/testkit-js';
import { levelPrivateStateProvider } from '@midnight-ntwrk/midnight-js-level-private-state-provider';
import { indexerPublicDataProvider } from '@midnight-ntwrk/midnight-js-indexer-public-data-provider';
import { NodeZkConfigProvider } from '@midnight-ntwrk/midnight-js-node-zk-config-provider';
import { httpClientProofProvider } from '@midnight-ntwrk/midnight-js-http-client-proof-provider';
import { MidnightWalletProvider } from './midnight-wallet-provider';
import { deployContract } from '@midnight-ntwrk/midnight-js-contracts';
import { CompiledContract } from '@midnight-ntwrk/midnight-js-protocol/compact-js';
import { QueryContext, CostModel, createConstructorContext, sampleContractAddress } from '@midnight-ntwrk/midnight-js-protocol/compact-runtime';
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

    const CompiledShadowgridContract = contractModule.contract.pipe(CompiledContract.withWitnesses({}), 
        CompiledContract.withCompiledFileAssets(path.resolve(distPath))
    );

    const localContract = new ContractDef({});
    const circuitContext = {
        currentPrivateState: {},
        currentZswapLocalState: {},
        costModel: CostModel.initialCostModel(),
        currentQueryContext: new QueryContext(localContract.initialState(createConstructorContext({}, '0'.repeat(64))).currentContractState.data, sampleContractAddress())
    };

    const computeHash = (game_id: bigint, player_id: Uint8Array, x: bigint, y: bigint, health: bigint, nonce: bigint, salt: Uint8Array) => {
        return localContract.circuits.compute_hash(circuitContext, game_id, player_id, x, y, health, nonce, salt).result;
    };

    const testEnv = getTestEnvironment(logger);
    let envConfig;
    try {
      envConfig = await testEnv.start();
    } catch (e) {
      console.error(e);
      const { execSync } = require('child_process');
      console.log("=== DOCKER PS ===");
      console.log(execSync('docker ps -a').toString());
      console.log("=== DOCKER LOGS NODE ===");
      try { console.log(execSync('docker logs $(docker ps -aq --filter name=node)').toString()); } catch(e){}
      console.log("=== DOCKER LOGS INDEXER ===");
      try { console.log(execSync('docker logs $(docker ps -aq --filter name=indexer)').toString()); } catch(e){}
      throw e;
    }
    const GENESIS_MINT_WALLET_SEED = '0000000000000000000000000000000000000000000000000000000000000001';
    const walletProvider = await MidnightWalletProvider.build(logger, envConfig, GENESIS_MINT_WALLET_SEED);
    await walletProvider.start();

    await new Promise(r => setTimeout(r, 10000));

    const zkConfigProvider = new NodeZkConfigProvider(path.resolve(distPath));
    const providers = {
        privateStateProvider: levelPrivateStateProvider({
            privateStateStoreName: 'test-private-state',
            signingKeyStoreName: 'test-signing-keys',
            privateStoragePasswordProvider: () => 'test-password',
            accountId: GENESIS_MINT_WALLET_SEED
        }),
        publicDataProvider: indexerPublicDataProvider(envConfig.indexer, envConfig.indexerWS),
        zkConfigProvider,
        proofProvider: httpClientProofProvider(envConfig.proofServer, zkConfigProvider),
        walletProvider: walletProvider,
        midnightProvider: walletProvider,
    };

    const deployedContract = await deployContract(providers, {
        compiledContract: CompiledShadowgridContract,
        privateStateId: 'test-private-state',
        initialPrivateState: {}
    });

    const game_id = 1n;
    const player_id = new Uint8Array(32); player_id[0] = 1;
    const x_old = 2n, y_old = 2n, health_old = 100n, nonce_old = 1n;
    const salt_old = new Uint8Array(32); salt_old[0] = 9;

    const c_old = computeHash(game_id, player_id, x_old, y_old, health_old, nonce_old, salt_old);
    logger.info('Registering initial state...');
    await deployedContract.callTx.register(game_id, player_id, x_old, y_old, health_old, nonce_old, salt_old);

    const testCases = [
        { name: 'Valid Transition', x: 3n, y: 2n, health: 100n, nonce: 2n, expected: true },
        { name: 'Teleport', x: 9n, y: 9n, health: 100n, nonce: 3n, expected: false },
        { name: 'Wrong Old State', overrideOldNonce: 99n, x: 4n, y: 2n, health: 100n, nonce: 3n, expected: false },
        { name: 'Nonce Replay', x: 3n, y: 2n, health: 100n, nonce: 2n, expected: false },
        { name: 'Nonce Skip', x: 3n, y: 3n, health: 100n, nonce: 4n, expected: false },
        { name: 'Health Modification', x: 3n, y: 3n, health: 99n, nonce: 3n, expected: false },
        { name: 'Out of Bounds X', x: 11n, y: 2n, health: 100n, nonce: 3n, expected: false },
        { name: 'Out of Bounds Y', x: 3n, y: 11n, health: 100n, nonce: 3n, expected: false }
    ];

    console.log('\n| Test | Expected | Actual | Evidence | Status |');
    console.log('|---|---|---|---|---|');

    let current_x = x_old, current_y = y_old, current_nonce = nonce_old, current_salt = salt_old;
    let current_c = c_old;

    let markdownOutput = '| Test | Expected | Actual | Evidence | Status |\n|---|---|---|---|---|\n';

    for (const tc of testCases) {
        const salt_new = new Uint8Array(32); salt_new[0] = Number(tc.nonce);
        const test_c_old = tc.overrideOldNonce ? computeHash(game_id, player_id, current_x, current_y, 100n, tc.overrideOldNonce, current_salt) : current_c;
        
        let success = false;
        let evidence = '';
        try {
            await deployedContract.callTx.verify_move(test_c_old, game_id, player_id, current_x, current_y, 100n, tc.overrideOldNonce || current_nonce, current_salt, tc.x, tc.y, tc.health, tc.nonce, salt_new);
            success = true;
            evidence = 'Transaction accepted';
            if (tc.expected) {
                current_x = tc.x; current_y = tc.y; current_nonce = tc.nonce; current_salt = salt_new;
                current_c = computeHash(game_id, player_id, tc.x, tc.y, tc.health, tc.nonce, salt_new);
            }
        } catch (e) {
            success = false;
            evidence = e.message ? e.message.substring(0, 40).replace(/\|/g, '') : 'Rejected';
        }
        
        const status = (success === tc.expected) ? 'PASS' : 'FAIL';
        const expectedStr = tc.expected ? 'ACCEPT' : 'REJECT';
        const actualStr = success ? 'ACCEPT' : 'REJECT';
        
        const line = '| ' + tc.name + ' | ' + expectedStr + ' | ' + actualStr + ' | ' + evidence + ' | ' + status + ' |';
        console.log(line);
        markdownOutput += line + '\n';
        
        if (success !== tc.expected) {
            fs.writeFileSync('test-results.md', markdownOutput);
            console.error('FATAL: Test ' + tc.name + ' failed. Stopping.');
            process.exit(1);
        }
    }
    
    fs.writeFileSync('test-results.md', markdownOutput);
    await walletProvider.stop();
    await testEnv.shutdown();
});
