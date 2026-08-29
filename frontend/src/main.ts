import { httpClientProofProvider } from '@midnight-ntwrk/midnight-js-http-client-proof-provider';
import { indexerPublicDataProvider } from '@midnight-ntwrk/midnight-js-indexer-public-data-provider';
import { deployContract, findDeployedContract } from '@midnight-ntwrk/midnight-js-contracts';
import { FetchZkConfigProvider } from '@midnight-ntwrk/midnight-js-node-zk-config-provider';

// @ts-ignore
import { contract as shadowgridContract } from '../../dist/contract/index.js';

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
  if (!connectedAPI) {
    log('Connect wallet first!');
    return;
  }
  log(\Attempting to move to (\, \)...\);
  
  // TO DO: Wire up the smart contract transaction
  log('Transaction builder logic will execute here.');
  
  // Simulation:
  setTimeout(() => {
    log('Transaction submitted and accepted.');
    currentX = newX;
    currentY = newY;
    generateGrid();
  }, 1500);
};

document.getElementById('join-btn')?.addEventListener('click', async () => {
  if (!connectedAPI) return;
  log('Joining game (Deploying or Connecting to Contract)...');
  
  try {
    const config = await connectedAPI.getConfiguration();
    log(\Wallet config: Prover \, Indexer \\);
    log('Registering initial state... wait for tx.');
    // Simulated delay
    setTimeout(() => {
        log('Game Joined! You can now move on the grid.');
    }, 2000);
  } catch(e: any) {
    log('Error: ' + e.message);
  }
});

generateGrid();
