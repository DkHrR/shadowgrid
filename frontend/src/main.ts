import { DAppConnectorWalletAdapter } from '@midnight-ntwrk/midnight-js-types';
import { httpClientProofProvider } from '@midnight-ntwrk/midnight-js-http-client-proof-provider';
import { indexerPublicDataProvider } from '@midnight-ntwrk/midnight-js-indexer-public-data-provider';
import { deployContract, findDeployedContract } from '@midnight-ntwrk/midnight-js-contracts';
// We will dynamically import the contract since we need the CompiledContract definition.
// The dist is not here yet, so we'll configure it to fetch from CI or assume it's copied.

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

document.getElementById('connect-btn')?.addEventListener('click', async () => {
  try {
    log('Connecting to Midnight Lace wallet...');
    // Type window as any for midnight extension
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
  log(Attempting to move to (\, \)...);
  // Here we will construct the new state, generate the proof, and submit the tx
  // ...
};

document.getElementById('join-btn')?.addEventListener('click', async () => {
  log('Joining game (Registering initial state)...');
  // ...
});

generateGrid();
