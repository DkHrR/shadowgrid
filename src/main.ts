import { httpClientProofProvider } from '@midnight-ntwrk/midnight-js-http-client-proof-provider';
import { indexerPublicDataProvider } from '@midnight-ntwrk/midnight-js-indexer-public-data-provider';
import { deployContract, findDeployedContract } from '@midnight-ntwrk/midnight-js-contracts';
import { FetchZkConfigProvider } from '@midnight-ntwrk/midnight-js-node-zk-config-provider';
import { toHex, fromHex } from '@midnight-ntwrk/midnight-js-utils';
import { Transaction } from '@midnight-ntwrk/midnight-js-types';
import { levelPrivateStateProvider } from '@midnight-ntwrk/midnight-js-level-private-state-provider';

// @ts-ignore
import { contract as shadowgridContract, Contract as ShadowgridContractClass } from '../dist/contract/index.js';
// @ts-ignore
import { CompiledContract } from '@midnight-ntwrk/midnight-js-protocol/compact-js';
// @ts-ignore
import { QueryContext, CostModel, createConstructorContext, sampleContractAddress } from '@midnight-ntwrk/midnight-js-protocol/compact-runtime';

const log = (msg: string) => {
  const logs = document.getElementById('logs');
  if (logs) {
    logs.innerHTML += msg + '\n';
    logs.scrollTop = logs.scrollHeight;
  }
};

let connectedAPI: any = null;
let currentX = 2;
let currentY = 2;
let nonce = 1n;
let currentSalt = new Uint8Array(32);
let providers: any = null;
let deployedContract: any = null;
let gameId = 1n; 

document.getElementById('connect-btn')?.addEventListener('click', async () => {
  try {
    log('Connecting to Midnight Lace wallet...');
    const mw = (window as any).midnight;
    if (!mw || !mw.mnLace) {
      log('Error: Midnight Lace extension not found');
      return;
    }
    connectedAPI = await mw.mnLace.connect('testnet');
    log('Wallet connected successfully!');
    document.getElementById('status-text')!.innerText = 'Connected';
    
    const addresses = await connectedAPI.getShieldedAddresses();
    document.getElementById('wallet-addr')!.innerText = addresses.shieldedCoinPublicKey.substring(0, 16) + '...';
    
    document.getElementById('join-btn')?.removeAttribute('disabled');
  } catch (e: any) {
    log('Connection failed: ' + e.message);
  }
});

const getProviders = async () => {
  if (providers) return providers;
  const config = await connectedAPI.getConfiguration();
  const shieldedAddresses = await connectedAPI.getShieldedAddresses();
  
  const keyMaterialProvider = new FetchZkConfigProvider(window.location.origin, fetch.bind(window));
  
  providers = {
    privateStateProvider: levelPrivateStateProvider({
      privateStateStoreName: 'shadowgrid-private-state',
      privateStoragePasswordProvider: async () => 'shadowgrid-production-password-998877', 
      accountId: shieldedAddresses.shieldedCoinPublicKey
    }),
    zkConfigProvider: keyMaterialProvider,
    proofProvider: httpClientProofProvider(config.proverServerUri, keyMaterialProvider),
    publicDataProvider: indexerPublicDataProvider(config.indexerUri, config.indexerWsUri),
    walletProvider: {
      getCoinPublicKey: () => shieldedAddresses.shieldedCoinPublicKey,
      getEncryptionPublicKey: () => shieldedAddresses.shieldedEncryptionPublicKey,
      balanceTx: async (tx: any, ttl?: Date) => {
        const serializedTx = toHex(tx.serialize());
        const received = await connectedAPI.balanceUnsealedTransaction(serializedTx);
        return Transaction.deserialize('signature', 'proof', 'binding', fromHex(received.tx));
      },
    },
    midnightProvider: {
      submitTx: async (tx: any) => {
        await connectedAPI.submitTransaction(toHex(tx.serialize()));
        return tx.identifiers()[0];
      },
    }
  };
  return providers;
};

const computeHash = (game_id: bigint, player_id: Uint8Array, x: bigint, y: bigint, health: bigint, n: bigint, s: Uint8Array) => {
    const localContract = new ShadowgridContractClass({});
    const circuitContext = {
        currentPrivateState: {},
        currentZswapLocalState: {},
        costModel: CostModel.initialCostModel(),
        currentQueryContext: new QueryContext(localContract.initialState(createConstructorContext({}, '0'.repeat(64))).currentContractState.data, sampleContractAddress())
    };
    return localContract.circuits.compute_hash(circuitContext, game_id, player_id, x, y, health, n, s).result;
};

const generateGrid = () => {
  const grid = document.getElementById('game-grid')!;
  grid.innerHTML = '';
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      if (x === currentX && y === currentY) cell.classList.add('active');
      cell.addEventListener('click', () => handleMove(x, y));
      grid.appendChild(cell);
    }
  }
};

const handleMove = async (newX: number, newY: number) => {
  if (!deployedContract) {
    log('Join the game first!');
    return;
  }
  log(\Attempting to move to (\, \)...\);
  
  try {
    const newSalt = new Uint8Array(32);
    crypto.getRandomValues(newSalt);
    const playerId = new Uint8Array(32); // Using 0s as dummy player ID for MVP
    
    // We need the OLD commitment
    const C_old = computeHash(gameId, playerId, BigInt(currentX), BigInt(currentY), 100n, nonce, currentSalt);

    log('Generating ZK proof for move...');
    // verify_move: C_old, game_id, player_id, x_old, y_old, health_old, nonce_old, salt_old, x_new, y_new, health_new, nonce_new, salt_new
    const tx = await deployedContract.callTx.verify_move(
      C_old,
      gameId,
      playerId,
      BigInt(currentX),
      BigInt(currentY),
      100n,
      nonce,
      currentSalt, // Old salt
      BigInt(newX),
      BigInt(newY),
      100n,
      nonce + 1n,
      newSalt  // New salt
    );
    
    log('Transaction accepted! TxId: ' + tx.txId);
    
    currentX = newX;
    currentY = newY;
    nonce += 1n;
    currentSalt = newSalt;
    generateGrid();
  } catch (e: any) {
    log('Move failed: ' + e.message);
  }
};

document.getElementById('join-btn')?.addEventListener('click', async () => {
  if (!connectedAPI) return;
  log('Deploying contract and registering initial state...');
  
  try {
    const p = await getProviders();
    
    const CompiledShadowgridContract = CompiledContract.make('shadowgrid', ShadowgridContractClass)
      .pipe(CompiledContract.withWitnesses({}));
      
    log('Deploying new ShadowGrid contract...');
    deployedContract = await deployContract(p, {
      compiledContract: CompiledShadowgridContract,
      privateStateId: 'shadowgrid-state',
      initialPrivateState: {}
    });
    
    log('Contract deployed at: ' + deployedContract.deployTxData.public.contractAddress);
    
    const playerId = new Uint8Array(32); // dummy
    crypto.getRandomValues(currentSalt);
    
    log('Registering player...');
    const tx = await deployedContract.callTx.register(
      gameId,
      playerId,
      BigInt(currentX),
      BigInt(currentY),
      100n, // health
      nonce,
      currentSalt
    );
    
    log('Registered! TxId: ' + tx.txId);
    
  } catch(e: any) {
    log('Error: ' + e.message);
  }
});

generateGrid();
