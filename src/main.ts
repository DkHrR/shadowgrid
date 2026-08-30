import { httpClientProofProvider } from '@midnight-ntwrk/midnight-js-http-client-proof-provider';
import { indexerPublicDataProvider } from '@midnight-ntwrk/midnight-js-indexer-public-data-provider';
import { deployContract, findDeployedContract } from '@midnight-ntwrk/midnight-js-contracts';
import { FetchZkConfigProvider } from '@midnight-ntwrk/midnight-js-fetch-zk-config-provider';
import { toHex, fromHex } from '@midnight-ntwrk/midnight-js-utils';
import { Transaction } from '@midnight-ntwrk/midnight-js-types';
import { levelPrivateStateProvider } from '@midnight-ntwrk/midnight-js-level-private-state-provider';
import { setNetworkId } from '@midnight-ntwrk/midnight-js-network-id';

// @ts-ignore
import { contract as shadowgridContract, Contract as ShadowgridContractClass, ledger } from '../dist/contract/index.js';
// @ts-ignore
import { CompiledContract } from '@midnight-ntwrk/midnight-js-protocol/compact-js';

const log = (msg: string) => {
  console.log(msg); // Only log to console now
};

const setStatus = (msg: string) => {
    const el = document.getElementById('status-display');
    if (el) {
        el.innerText = msg;
        el.classList.remove('hidden');
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
let myPlayerIdHex: string = "";

const witnesses = {
    localState: (context: any) => {
        return [context.privateState, context.privateState];
    }
};

const CompiledShadowgridContract = CompiledContract.make('shadowgrid', ShadowgridContractClass)
// @ts-ignore
  .pipe(CompiledContract.withWitnesses(witnesses));

document.getElementById('connect-btn')?.addEventListener('click', async () => {
  try {
    log('Connecting to Midnight wallet...');
    const mw = (window as any).midnight;
    
    const showError = () => {
      document.getElementById('wallet-error')!.innerText = "Midnight Lace is required to play ShadowGrid.";
      document.getElementById('wallet-error')!.classList.remove('hidden');
      document.getElementById('get-lace-btn')!.classList.remove('hidden');
      document.getElementById('connect-btn')!.classList.add('hidden');
    };

    if (!mw) {
      showError();
      return;
    }
    const walletIds = Object.keys(mw);
    if (walletIds.length === 0) {
      showError();
      return;
    }
    log('Detected wallets: ' + walletIds.join(', '));
    const walletId = walletIds.includes('mnLace') ? 'mnLace' : walletIds[0];
    const wallet = mw[walletId];
    
    if (!wallet) {
      showError();
      return;
    }
    
    setNetworkId('undeployed');
    
    connectedAPI = await wallet.connect('undeployed');
    log('Wallet connected successfully!');
    setStatus('Wallet Connected');
    
    shieldedAddresses = await connectedAPI.getShieldedAddresses();
    document.getElementById('wallet-addr')!.innerText = shieldedAddresses.shieldedCoinPublicKey.substring(0, 16) + '...';
    myPlayerIdHex = toHex(fromHex(shieldedAddresses.shieldedCoinPublicKey).subarray(0, 32));
    
    // Switch UI panels
    document.getElementById('onboarding-panel')!.classList.add('hidden');
    document.getElementById('lobby-panel')!.classList.remove('hidden');
  } catch (e: any) {
    console.error("Lace connection failed:", e);
    const safeError = e.message || e.toString() || "Unknown error";
    log('Connection failed: ' + safeError);
    document.getElementById('wallet-error')!.innerText = "Wallet connection failed: " + safeError;
    document.getElementById('wallet-error')!.classList.remove('hidden');
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

const updateUI = async () => {
  if (!deployedContract || !providers) return;
  const grid = document.getElementById('game-grid')!;
  grid.innerHTML = '';
  
  // 1. Fetch private state to know our identity/position
  
  
  const state = await providers.privateStateProvider.get('shadowgrid-state');
  if (state) {
      
      
  }

  // 2. Fetch public ledger state
  const contractAddr = deployedContract.deployTxData.public.contractAddress;
  const contractState = await providers.publicDataProvider.queryContractState(contractAddr);
  let publicPlayers = new Map<string, {x: number, y: number}>();
  
  if (contractState != null) {
      const l = ledger(contractState.data);
      if (l && l.position_x) {
          const itX = l.position_x[Symbol.iterator]();
          let nextX = itX.next();
          while (!nextX.done) {
              const [pidBytes, x] = nextX.value;
              const hexId = toHex(pidBytes);
              publicPlayers.set(hexId, { x: Number(x), y: -1 });
              nextX = itX.next();
          }
          const itY = l.position_y[Symbol.iterator]();
          let nextY = itY.next();
          while (!nextY.done) {
              const [pidBytes, y] = nextY.value;
              const hexId = toHex(pidBytes);
              const p = publicPlayers.get(hexId);
              if (p) p.y = Number(y);
              nextY = itY.next();
          }
      }
  }

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      
      let isOccupied = false;
      let isMe = false;

      // Check all players
      for (const [pid, pos] of publicPlayers.entries()) {
          if (pos.x === x && pos.y === y) {
              isOccupied = true;
              if (pid === myPlayerIdHex) {
                  isMe = true;
              }
          }
      }

      if (isMe) {
          cell.classList.add('active'); // Blue for me
          cell.innerText = "ME";
      } else if (isOccupied) {
          cell.style.backgroundColor = '#ff4444'; // Red for others
          cell.innerText = "OPP";
      }
      
      cell.addEventListener('click', () => handleMove(x, y));
      grid.appendChild(cell);
    }
  }
};

const handleMove = async (newX: number, newY: number) => {
  if (!deployedContract) return;
  
  const p = await getProviders();
  const oldState = await p.privateStateProvider.get('shadowgrid-state');
  if (!oldState) return;
  
  const dx = Math.abs(Number(oldState.x) - newX);
  const dy = Math.abs(Number(oldState.y) - newY);
  if (dx + dy !== 1) {
      log('Invalid move!');
      return;
  }

  setStatus('Generating ZK Proof...');

  try {
    const newSalt = new Uint8Array(32);
    crypto.getRandomValues(newSalt);
    newSalt[0] = Number(oldState.nonce);
    
    const newState = {
        ...oldState,
        x: BigInt(newX),
        y: BigInt(newY),
        nonce: oldState.nonce + 1n,
        salt: newSalt
    };
    
    await p.privateStateProvider.set('shadowgrid-state', newState);
    
    log('Submitting move...');
    // verify_move: x_new, y_new, new_salt
    const tx = await deployedContract.callTx.verify_move(
      BigInt(newX),
      BigInt(newY),
      newSalt
    );
    log('Transaction accepted! TxId: ' + tx.txId);
    setStatus('Move Confirmed');
    
    updateUI();
  } catch (e: any) {
    log('Move failed: ' + e.message);
    setStatus('Move Failed');
    // Revert state
    await p.privateStateProvider.set('shadowgrid-state', oldState);
  }
};

const showGamePanel = (addr: string) => {
    document.getElementById('lobby-panel')!.classList.add('hidden');
    document.getElementById('game-panel')!.classList.remove('hidden');
    document.getElementById('contract-addr')!.innerText = addr.substring(0, 16) + '...';
    localStorage.setItem('shadowgrid-contract', addr);
}

document.getElementById('host-btn')?.addEventListener('click', async () => {
  if (!connectedAPI) return;
  setStatus('Deploying...');
  
  try {
    const p = await getProviders();
    const playerId = fromHex(shieldedAddresses.shieldedCoinPublicKey).subarray(0, 32);
    const salt = new Uint8Array(32);
    crypto.getRandomValues(salt);
    salt[0] = 0; 
    
    const initialState: PrivateState = {
      game_id: gameId,
      player_id: playerId,
      x: 2n,
      y: 2n,
      health: 100n,
      nonce: 1n,
      salt: salt
    };
    
    // @ts-ignore
    deployedContract = await deployContract(p, {
      compiledContract: CompiledShadowgridContract,
      privateStateId: 'shadowgrid-state',
      initialPrivateState: initialState
    });
    
    const addr = deployedContract.deployTxData.public.contractAddress;
    p.privateStateProvider.setContractAddress(addr);
    
    showGamePanel(addr);
    
    setStatus('Registering ZK Proof...');
    const tx = await deployedContract.callTx.register();
    log('Registered! TxId: ' + tx.txId);
    setStatus('Playing');
    
    updateUI();
    } catch(e: any) {
      console.error("ShadowGrid deployment failed:", e);
      const safeError = e.message || e.toString() || "Unknown error";
      log('Error: ' + safeError);
      setStatus('Deployment failed: ' + safeError);
    }
});

const savedAddr = localStorage.getItem('shadowgrid-contract'); if (savedAddr) { (document.getElementById('contract-input') as HTMLInputElement).value = savedAddr; }

document.getElementById('join-btn')?.addEventListener('click', async () => {
  if (!connectedAPI) return;
  
  const addr = (document.getElementById('contract-input') as HTMLInputElement).value;
  if (!addr) return;
  
  try {
    setStatus('Joining...');
    const p = await getProviders();
    p.privateStateProvider.setContractAddress(addr);
    const playerId = fromHex(shieldedAddresses.shieldedCoinPublicKey).subarray(0, 32);
    
    let existingState;
    try {
        existingState = await p.privateStateProvider.get('shadowgrid-state');
    } catch(e) {}
    
    if (!existingState) {
        const salt = new Uint8Array(32);
        crypto.getRandomValues(salt);
        salt[0] = 0;
        
        existingState = {
          game_id: gameId,
          player_id: playerId,
          x: 8n, 
          y: 8n,
          health: 100n,
          nonce: 1n,
          salt: salt
        };
        await p.privateStateProvider.set('shadowgrid-state', existingState);
    }
    
// @ts-ignore
    deployedContract = await findDeployedContract(p, {
      contractAddress: addr,
      compiledContract: CompiledShadowgridContract,
      privateStateId: 'shadowgrid-state',
      initialPrivateState: existingState
    });
    
    showGamePanel(addr);
    
    const contractState = await providers.publicDataProvider.queryContractState(addr);
    const l = ledger(contractState.data);
    let isRegistered = false;
    if (l && l.position_x) {
        const it = l.position_x[Symbol.iterator]();
        let next = it.next();
        while (!next.done) {
            if (toHex(next.value[0]) === toHex(playerId)) {
                isRegistered = true;
                break;
            }
            next = it.next();
        }
    }
    
    if (!isRegistered) {
        setStatus('Registering ZK Proof...');
        const tx = await deployedContract.callTx.register();
        log('Registered! TxId: ' + tx.txId);
    }
    setStatus('Playing');
    
    updateUI();
  } catch(e: any) {
    log('Error: ' + e.message);
    setStatus('Error joining');
  }
});

const grid = document.getElementById('game-grid')!;
grid.innerHTML = '';
for (let i = 0; i < 100; i++) {
  const cell = document.createElement('div');
  cell.className = 'cell';
  grid.appendChild(cell);
}

setInterval(() => {
    if (deployedContract && providers) {
        updateUI();
    }
}, 5000);
