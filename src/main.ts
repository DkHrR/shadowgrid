import { httpClientProofProvider } from '@midnight-ntwrk/midnight-js-http-client-proof-provider';
import { indexerPublicDataProvider } from '@midnight-ntwrk/midnight-js-indexer-public-data-provider';
import { deployContract, findDeployedContract } from '@midnight-ntwrk/midnight-js-contracts';
import { FetchZkConfigProvider } from '@midnight-ntwrk/midnight-js-fetch-zk-config-provider';
import { toHex, fromHex } from '@midnight-ntwrk/midnight-js-utils';
import { Transaction } from '@midnight-ntwrk/midnight-js-types';
import { levelPrivateStateProvider } from '@midnight-ntwrk/midnight-js-level-private-state-provider';
import { setNetworkId } from '@midnight-ntwrk/midnight-js-network-id';

// @ts-ignore
import { contract as shadowgridContract, Contract as ShadowgridContractClass } from '../dist/contract/index.js';
// @ts-ignore
import { CompiledContract } from '@midnight-ntwrk/midnight-js-protocol/compact-js';

const log = (msg: string) => {
  const logs = document.getElementById('logs');
  if (logs) {
    logs.innerHTML += msg + '\n';
    logs.scrollTop = logs.scrollHeight;
  }
};

type PrivateState = {
    game_id: bigint;
    player_id: Uint8Array;
    x: bigint;
    y: bigint;
    health: bigint;
    nonce: bigint;
    salt: Uint8Array;
};

let connectedAPI: any = null;
let providers: any = null;
let deployedContract: any = null;
let gameId = 1n;
let shieldedAddresses: any = null;

const witnesses = {
    localState: ({ privateState }: any) => {
        return [privateState, privateState];
    }
};

const CompiledShadowgridContract = CompiledContract.make('shadowgrid', ShadowgridContractClass)
// @ts-ignore
  .pipe(CompiledContract.withWitnesses(witnesses));

document.getElementById('connect-btn')?.addEventListener('click', async () => {
  try {
    log('Connecting to Midnight Lace wallet...');
    const mw = (window as any).midnight;
    if (!mw || !mw.mnLace) {
      log('Error: Midnight Lace extension not found');
      return;
    }
    
    setNetworkId('Testnet');
    
    connectedAPI = await mw.mnLace.connect('Testnet');
    log('Wallet connected successfully!');
    document.getElementById('status-text')!.innerText = 'Connected';
    
    shieldedAddresses = await connectedAPI.getShieldedAddresses();
    document.getElementById('wallet-addr')!.innerText = shieldedAddresses.shieldedCoinPublicKey.substring(0, 16) + '...';
    
    document.getElementById('host-btn')?.removeAttribute('disabled');
    document.getElementById('join-btn')?.removeAttribute('disabled');
  } catch (e: any) {
    log('Connection failed: ' + e.message);
  }
});

const getProviders = async () => {
  if (providers) return providers;
  const config = await connectedAPI.getConfiguration();
  
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
      balanceTx: async (tx: any) => {
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

const generateGrid = async () => {
  const grid = document.getElementById('game-grid')!;
  grid.innerHTML = '';
  
  let currentX = -1;
  let currentY = -1;
  if (providers) {
      const state = await providers.privateStateProvider.get('shadowgrid-state');
      if (state) {
          currentX = Number(state.x);
          currentY = Number(state.y);
      }
  }

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
    log('Join or host a game first!');
    return;
  }
  log(`Attempting to move to (${newX}, ${newY})...`);

  try {
    const newSalt = new Uint8Array(32);
    crypto.getRandomValues(newSalt);
    
    log('Generating ZK proof for move...');
    // verify_move: x_new, y_new, new_salt
    const tx = await deployedContract.callTx.verify_move(
      BigInt(newX),
      BigInt(newY),
      newSalt
    );
    log('Transaction accepted! TxId: ' + tx.txId);
    
    // Update private state
    const p = await getProviders();
    const oldState = await p.privateStateProvider.get('shadowgrid-state');
    const newState = {
        ...oldState,
        x: BigInt(newX),
        y: BigInt(newY),
        nonce: oldState.nonce + 1n,
        salt: newSalt
    };
    await p.privateStateProvider.set('shadowgrid-state', newState);
    
    generateGrid();
  } catch (e: any) {
    log('Move failed: ' + e.message);
  }
};

document.getElementById('host-btn')?.addEventListener('click', async () => {
  if (!connectedAPI) return;
  log('Deploying contract and registering initial state...');
  
  try {
    const p = await getProviders();
    const playerId = fromHex(shieldedAddresses.shieldedCoinPublicKey).subarray(0, 32);
    const salt = new Uint8Array(32);
    crypto.getRandomValues(salt);
    
    const initialState: PrivateState = {
      game_id: gameId,
      player_id: playerId,
      x: 2n,
      y: 2n,
      health: 100n,
      nonce: 1n,
      salt: salt
    };
    
    log('Deploying new ShadowGrid contract...');
// @ts-ignore
    deployedContract = await deployContract(p, {
      compiledContract: CompiledShadowgridContract,
      privateStateId: 'shadowgrid-state',
      initialPrivateState: initialState
    });
    
    const addr = deployedContract.deployTxData.public.contractAddress;
    log('Contract deployed at: ' + addr);
    document.getElementById('contract-addr')!.innerText = addr; localStorage.setItem('shadowgrid-contract', addr);
    
    log('Registering player...');
    const tx = await deployedContract.callTx.register(
      gameId,
      playerId,
      2n,
      2n,
      100n, // health
      salt
    );
    log('Registered! TxId: ' + tx.txId);
    
    generateGrid();
  } catch(e: any) {
    log('Error: ' + e.message);
  }
});

const savedAddr = localStorage.getItem('shadowgrid-contract'); if (savedAddr) { (document.getElementById('contract-input') as HTMLInputElement).value = savedAddr; }

document.getElementById('join-btn')?.addEventListener('click', async () => {
  if (!connectedAPI) return;
  
  const addr = (document.getElementById('contract-input') as HTMLInputElement).value;
  if (!addr) {
      log('Please enter a contract address to join');
      return;
  }
  
  try {
    const p = await getProviders();
    const playerId = fromHex(shieldedAddresses.shieldedCoinPublicKey).subarray(0, 32);
    const salt = new Uint8Array(32);
    crypto.getRandomValues(salt);
    
    const initialState: PrivateState = {
      game_id: gameId,
      player_id: playerId,
      x: 8n, // Spawn at different location
      y: 8n,
      health: 100n,
      nonce: 1n,
      salt: salt
    };
    
    // Attempt to read existing private state first to survive reload
    let existingState;
    try {
        existingState = await p.privateStateProvider.get('shadowgrid-state');
    } catch(e) {}
    
    const finalInitialState = existingState || initialState;
    
    log('Connecting to ShadowGrid contract...');
// @ts-ignore
    deployedContract = await findDeployedContract(p, {
      contractAddress: addr,
      compiledContract: CompiledShadowgridContract,
      privateStateId: 'shadowgrid-state',
      initialPrivateState: finalInitialState
    });
    
    document.getElementById('contract-addr')!.innerText = addr; localStorage.setItem('shadowgrid-contract', addr);
    
    if (!existingState) {
        log('Registering player...');
        const tx = await deployedContract.callTx.register(
          gameId,
          playerId,
          8n,
          8n,
          100n, // health
          salt
        );
        log('Registered! TxId: ' + tx.txId);
    } else {
        log('Recovered existing state from local storage. Ready to play!');
    }
    
    generateGrid();
  } catch(e: any) {
    log('Error: ' + e.message);
  }
});

// We can't generate the active grid until providers are loaded, so just show empty initially.
const grid = document.getElementById('game-grid')!;
grid.innerHTML = '';
for (let i = 0; i < 100; i++) {
  const cell = document.createElement('div');
  cell.className = 'cell';
  grid.appendChild(cell);
}
