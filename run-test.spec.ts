
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
    if (!fs.existsSync(distPath + '/contract/index.cjs') && !fs.existsSync(distPath + '/isolated_test.cjs') && !fs.existsSync(distPath + '/index.cjs')) {
        if (fs.existsSync('./dist/isolated_test/contract/index.cjs')) distPath = './dist/isolated_test';
    }

    let contractModule: any;
    if (fs.existsSync(distPath + '/contract/index.cjs')) contractModule = require(path.resolve(distPath + '/contract/index.cjs'));
    else if (fs.existsSync(distPath + '/index.cjs')) contractModule = require(path.resolve(distPath + '/index.cjs'));
    else if (fs.existsSync(distPath + '/isolated_test.cjs')) contractModule = require(path.resolve(distPath + '/isolated_test.cjs'));
    else contractModule = require(path.resolve(distPath + '/isolated_test.js'));

    const ContractDef = contractModule.Contract;
    if (!ContractDef) throw new Error('Contract export not found in generated module');

    const CompiledIsolatedTestContract = CompiledContract.make('isolated_test', ContractDef).pipe(
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
    const envConfig = await testEnv.start();
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
        compiledContract: CompiledIsolatedTestContract,
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
        { name: 'Out of Bounds', x: 11n, y: 2n, health: 100n, nonce: 3n, expected: false }
    ];

    console.log('\n| Test | Expected | Actual | Evidence | Status |');
    console.log('|---|---|---|---|---|');

    let current_x = x_old, current_y = y_old, current_nonce = nonce_old, current_salt = salt_old;
    let current_c = c_old;

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
        } catch (e: any) {
            success = false;
            evidence = e.message ? e.message.substring(0, 40).replace(/\|/g, '') : 'Rejected';
        }
        
        const status = (success === tc.expected) ? 'PASS' : 'FAIL';
        const expectedStr = tc.expected ? 'ACCEPT' : 'REJECT';
        const actualStr = success ? 'ACCEPT' : 'REJECT';
        console.log('| ' + tc.name + ' | ' + expectedStr + ' | ' + actualStr + ' | ' + evidence + ' | ' + status + ' |');
        
        if (success !== tc.expected) {
            console.error('FATAL: Test ' + tc.name + ' failed. Stopping.');
            process.exit(1);
        }
    }
    
    await walletProvider.stop();
    await testEnv.shutdown();
});



