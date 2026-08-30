
[1m[30m[46m RUN [49m[39m[22m [36mv4.1.11 [39m[90m/home/runner/work/shadowgrid/shadowgrid[39m

Sourcemap for "/home/runner/work/shadowgrid/shadowgrid/dist/contract/index.js" points to missing source files
{"level":30,"time":1788064430967,"pid":2756,"hostname":"runnervmgx7h7","msg":"Starting test environment... path=/home/runner/work/shadowgrid/shadowgrid, file=compose.yml, uid=2643584207367685"}
[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39mCIRCUITS: [90mundefined[39m

[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m[DelayedWaitStrategy] Starting 20000ms delay before health check...

[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m[DelayedWaitStrategy] Delay complete, now checking health...

[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m[DelayedWaitStrategy] Health check passed

{"level":30,"time":1788064489056,"pid":2756,"hostname":"runnervmgx7h7","msg":"Test environment configuration: {\"walletNetworkId\":\"undeployed\",\"networkId\":\"undeployed\",\"indexer\":\"http://127.0.0.1:8088/api/v4/graphql\",\"indexerWS\":\"ws://127.0.0.1:8088/api/v4/graphql/ws\",\"node\":\"http://127.0.0.1:9944\",\"nodeWS\":\"ws://127.0.0.1:9944\",\"proofServer\":\"http://127.0.0.1:6300\"}"}
[04:34:49.057] [32mINFO[39m (2756): [36mInitializing wallet builder for undeployed[39m
[04:34:49.110] [32mINFO[39m (2756): [36mUsing test wallet with known mnemonic[39m
[04:34:49.134] [32mINFO[39m (2756): [36mCreating dust wallet with params: {"indexerClientConnection":{"indexerHttpUrl":"http://127.0.0.1:8088/api/v4/graphql","indexerWsUrl":"ws://127.0.0.1:8088/api/v4/graphql/ws"},"provingServerUrl":"http://127.0.0.1:6300/","networkId":"undeployed","relayURL":"ws://127.0.0.1:9944/","txHistoryStorage":{"storage":{}},"costParameters":{"ledgerParams":{"__wbg_ptr":4654560},"additionalFeeOverhead":"500000000000000000","feeBlocksMargin":5}}[39m
[04:34:49.166] [32mINFO[39m (2756): [36mYour wallet address is: mn_addr_undeployed1nqhdatus5d6tvye57q854kdrs6ur2ytsl8yaygzfsdy2e3tvtmesdcgp8m, waiting for NIGHT funds...[39m
[04:34:49.167] [32mINFO[39m (2756): [36mSyncing wallet...[39m
[04:34:49.176] [32mINFO[39m (2756): [36mWallet synced state emission: { shielded=false, unshielded=false, dust=false }[39m
[04:34:49.177] [32mINFO[39m (2756): [36mWallet synced state emission (synced=false): { shielded=false, unshielded=false, dust=false }[39m
{"level":30,"time":1788064489150,"pid":2756,"hostname":"runnervmgx7h7","msg":"Your wallet seed is: a51c86de32d0791f7cffc3bdff1abd9bb54987f0ed5effc30c936dddbb9afd9d530c8db445e4f2d3ea42a321b260e022aadf05987c9a67ec7b6b6ca1d0593ec9 and your address is: mock-address"}
{"level":30,"time":1788064489150,"pid":2756,"hostname":"runnervmgx7h7","msg":"Starting wallet..."}
[04:34:49.206] [32mINFO[39m (2756): [36mWallet synced state emission: { shielded=false, unshielded=false, dust=false }[39m
[04:34:49.251] [32mINFO[39m (2756): [36mWallet synced state emission: { shielded=false, unshielded=false, dust=false }[39m
[04:34:49.344] [32mINFO[39m (2756): [36mWallet synced state emission: { shielded=false, unshielded=false, dust=false }[39m
[04:34:49.345] [32mINFO[39m (2756): [36mWallet synced state emission: { shielded=false, unshielded=false, dust=false }[39m
[04:34:49.345] [32mINFO[39m (2756): [36mWallet synced state emission: { shielded=false, unshielded=false, dust=false }[39m
[04:34:49.345] [32mINFO[39m (2756): [36mWallet synced state emission: { shielded=false, unshielded=false, dust=false }[39m
[04:34:49.345] [32mINFO[39m (2756): [36mWallet synced state emission: { shielded=false, unshielded=true, dust=false }[39m
[04:34:49.396] [32mINFO[39m (2756): [36mWallet synced state emission: { shielded=false, unshielded=true, dust=false }[39m
[04:34:49.407] [32mINFO[39m (2756): [36mWallet synced state emission: { shielded=false, unshielded=true, dust=false }[39m
[04:34:49.451] [32mINFO[39m (2756): [36mWallet synced state emission: { shielded=false, unshielded=true, dust=false }[39m
[04:34:49.490] [32mINFO[39m (2756): [36mWallet synced state emission: { shielded=false, unshielded=true, dust=false }[39m
[90mstderr[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m2026-08-30 04:34:49        RPC-CORE: subscribeRuntimeVersion(): RuntimeVersion:: disconnected from ws://127.0.0.1:9944/: 1000:: Normal Closure

[90mstderr[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m2026-08-30 04:34:49        RPC-CORE: subscribeRuntimeVersion(): RuntimeVersion:: disconnected from ws://127.0.0.1:9944/: 1000:: Normal Closure

[04:34:49.526] [32mINFO[39m (2756): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[04:34:49.566] [32mINFO[39m (2756): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[04:34:49.611] [32mINFO[39m (2756): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[04:34:49.651] [32mINFO[39m (2756): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[04:34:49.688] [32mINFO[39m (2756): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[04:34:49.728] [32mINFO[39m (2756): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[04:34:49.767] [32mINFO[39m (2756): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[04:34:49.812] [32mINFO[39m (2756): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[04:34:49.850] [32mINFO[39m (2756): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[04:34:49.888] [32mINFO[39m (2756): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=true }[39m
[04:35:19.200] [32mINFO[39m (2756): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=true }[39m
[04:35:19.200] [32mINFO[39m (2756): [36mWallet synced state emission (synced=true): { shielded=true, unshielded=true, dust=true }[39m
[04:35:19.200] [32mINFO[39m (2756): [36mSync complete[39m
[04:35:19.202] [32mINFO[39m (2756): [36mWallet balances after sync - Shielded: {"0000000000000000000000000000000000000000000000000000000000000000":"250000000000000","0000000000000000000000000000000000000000000000000000000000000002":"50000000000000","0000000000000000000000000000000000000000000000000000000000000001":"50000000000000"}, Unshielded: {"0000000000000000000000000000000000000000000000000000000000000000":"250000000000000"}, Dust: "1250000000000000000000000"[39m
[04:35:19.203] [32mINFO[39m (2756): [36mYour wallet NIGHT balance is: 250000000000000[39m
{"level":30,"time":1788064519209,"pid":2756,"hostname":"runnervmgx7h7","msg":"Deploying contract..."}
{"level":30,"time":1788064538387,"pid":2756,"hostname":"runnervmgx7h7","msg":"Contract deployed successfully at c90825af2e1687388a8f4e591586d4cdae9daec6f6ca3d1204896b6ec180a3f2"}
[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39mTesting ZKIR reading...

{"level":30,"time":1788064538387,"pid":2756,"hostname":"runnervmgx7h7","msg":"Registering initial state..."}
[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39mSuccessfully read ZKIR, length: [33m262[39m

[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39mSuccessfully read PROVER key, length: [33m2820575[39m

[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39mERROR IN GETKEYMATERIAL: TypeError: Cannot read properties of undefined (reading 'get')
    at getKeyMaterial [90m(file:///home/runner/work/shadowgrid/shadowgrid/[39mnode_modules/[4m@midnight-ntwrk/midnight-js-http-client-proof-provider[24m/dist/index.mjs:37:49[90m)[39m
    at Object.check [90m(file:///home/runner/work/shadowgrid/shadowgrid/[39mnode_modules/[4m@midnight-ntwrk/midnight-js-http-client-proof-provider[24m/dist/index.mjs:70:39[90m)[39m
    at [90mfile:///home/runner/work/shadowgrid/shadowgrid/[39mnode_modules/[4m@midnight-ntwrk/ledger-v8[24m/midnight_ledger_wasm_bg.js:9781:22
    at handleError [90m(file:///home/runner/work/shadowgrid/shadowgrid/[39mnode_modules/[4m@midnight-ntwrk/ledger-v8[24m/midnight_ledger_wasm_bg.js:15:18[90m)[39m
    at __wbg_call_641db1bb5db5a579 [90m(file:///home/runner/work/shadowgrid/shadowgrid/[39mnode_modules/[4m@midnight-ntwrk/ledger-v8[24m/midnight_ledger_wasm_bg.js:9780:56[90m)[39m
    at null.<anonymous> (wasm://wasm/026b209a:1:110471)
    at null.<anonymous> (wasm://wasm/026b209a:1:3758223)
    at null.<anonymous> (wasm://wasm/026b209a:1:1074887)
    at null.<anonymous> (wasm://wasm/026b209a:1:2291914)
    at null.<anonymous> (wasm://wasm/026b209a:1:3146693)

[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m--- keyMaterial in check: [33mfalse[39m ir length: [90mundefined[39m

[90mstderr[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39mREGISTER FAILED: Error: Unexpected error submitting scoped transaction '<unnamed>': Error: 'check' returned an error: Error: Failed Proof Server response: url="http://127.0.0.1:6300/check" code="400" body="bad input"
    at scoped [90m(file:///home/runner/work/shadowgrid/shadowgrid/[39mnode_modules/[4m@midnight-ntwrk/midnight-js-contracts[24m/dist/index.mjs:1249:27[90m)[39m
[90m    at processTicksAndRejections (node:internal/process/task_queues:104:5)[39m
    at [90m/home/runner/work/shadowgrid/shadowgrid/[39mrun-test.spec.ts:118:1
    at [90mfile:///home/runner/work/shadowgrid/shadowgrid/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:1903:20 {
  [cause]: Error: 'check' returned an error: Error: Failed Proof Server response: url="http://127.0.0.1:6300/check" code="400" body="bad input"
      at __wbg_Error_e17e777aac105295 [90m(file:///home/runner/work/shadowgrid/shadowgrid/[39mnode_modules/[4m@midnight-ntwrk/ledger-v8[24m/midnight_ledger_wasm_bg.js:9728:17[90m)[39m
      at null.<anonymous> (wasm://wasm/026b209a:1:6342132)
      at null.<anonymous> (wasm://wasm/026b209a:1:4455484)
      at null.<anonymous> (wasm://wasm/026b209a:1:541594)
      at null.<anonymous> (wasm://wasm/026b209a:1:3258719)
      at null.<anonymous> (wasm://wasm/026b209a:1:6276270)
      at null.<anonymous> (wasm://wasm/026b209a:1:6393810)
      at __wbg_adapter_16 [90m(file:///home/runner/work/shadowgrid/shadowgrid/[39mnode_modules/[4m@midnight-ntwrk/ledger-v8[24m/midnight_ledger_wasm_bg.js:1419:10[90m)[39m
      at real [90m(file:///home/runner/work/shadowgrid/shadowgrid/[39mnode_modules/[4m@midnight-ntwrk/ledger-v8[24m/midnight_ledger_wasm_bg.js:219:20[90m)[39m
  [90m    at processTicksAndRejections (node:internal/process/task_queues:104:5)[39m
}
Error message: Unexpected error submitting scoped transaction '<unnamed>': Error: 'check' returned an error: Error: Failed Proof Server response: url="http://127.0.0.1:6300/check" code="400" body="bad input"
Error cause: Error: 'check' returned an error: Error: Failed Proof Server response: url="http://127.0.0.1:6300/check" code="400" body="bad input"
    at __wbg_Error_e17e777aac105295 [90m(file:///home/runner/work/shadowgrid/shadowgrid/[39mnode_modules/[4m@midnight-ntwrk/ledger-v8[24m/midnight_ledger_wasm_bg.js:9728:17[90m)[39m
    at null.<anonymous> (wasm://wasm/026b209a:1:6342132)
    at null.<anonymous> (wasm://wasm/026b209a:1:4455484)
    at null.<anonymous> (wasm://wasm/026b209a:1:541594)
    at null.<anonymous> (wasm://wasm/026b209a:1:3258719)
    at null.<anonymous> (wasm://wasm/026b209a:1:6276270)
    at null.<anonymous> (wasm://wasm/026b209a:1:6393810)
    at __wbg_adapter_16 [90m(file:///home/runner/work/shadowgrid/shadowgrid/[39mnode_modules/[4m@midnight-ntwrk/ledger-v8[24m/midnight_ledger_wasm_bg.js:1419:10[90m)[39m
    at real [90m(file:///home/runner/work/shadowgrid/shadowgrid/[39mnode_modules/[4m@midnight-ntwrk/ledger-v8[24m/midnight_ledger_wasm_bg.js:219:20[90m)[39m
[90m    at processTicksAndRejections (node:internal/process/task_queues:104:5)[39m

[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m

--- PROOF SERVER LOGS ---
[2m2026-08-30T04:34:17.894668Z[0m [32m INFO[0m [2mmidnight_proof_server[0m[2m:[0m Ensuring zswap key material is available...
[2m2026-08-30T04:34:17.895288Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing public parameters for k=10. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T04:34:17.898657Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing public parameters for k=11. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T04:34:17.902024Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing public parameters for k=12. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T04:34:17.905224Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing public parameters for k=13. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T04:34:17.908404Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing public parameters for k=14. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T04:34:17.911518Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing public parameters for k=15. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T04:34:17.914710Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing zero-knowledge proving key for Zswap inputs. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T04:34:17.917868Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing zero-knowledge proving key for Zswap outputs. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T04:34:17.921297Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing zero-knowledge proving key for Zswap signing operations. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T04:34:17.924491Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing zero-knowledge proving key for Dust spends. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T04:34:18.729838Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching public parameters for k=10 - finished.
[2m2026-08-30T04:34:18.729872Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching public parameters for k=10 - verified correct.
[2m2026-08-30T04:34:18.819430Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching public parameters for k=11 - finished.
[2m2026-08-30T04:34:18.819453Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching public parameters for k=11 - verified correct.
[2m2026-08-30T04:34:18.881807Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching public parameters for k=12 - finished.
[2m2026-08-30T04:34:18.881825Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching public parameters for k=12 - verified correct.
[2m2026-08-30T04:34:18.925749Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching public parameters for k=13 - finished.
[2m2026-08-30T04:34:18.925767Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching public parameters for k=13 - verified correct.
[2m2026-08-30T04:34:18.980464Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge proving key for Dust spends - finished.
[2m2026-08-30T04:34:18.980486Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge proving key for Dust spends - verified correct.
[2m2026-08-30T04:34:18.993845Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing zero-knowledge verifying key for Dust spends. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T04:34:19.023850Z[0m [33m WARN[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m error sending request for url (https://srs.midnight.network/dust/9/spend.verifier). Retrying...
[2m2026-08-30T04:34:19.028670Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching public parameters for k=14 - finished.
[2m2026-08-30T04:34:19.030110Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching public parameters for k=14 - verified correct.
[2m2026-08-30T04:34:19.041698Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge proving key for Zswap signing operations - finished.
[2m2026-08-30T04:34:19.041802Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge proving key for Zswap signing operations - verified correct.
[2m2026-08-30T04:34:19.050469Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing zero-knowledge verifying key for Zswap signing operations. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T04:34:19.086756Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge proving key for Zswap outputs - finished.
[2m2026-08-30T04:34:19.086924Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge proving key for Zswap outputs - verified correct.
[2m2026-08-30T04:34:19.135617Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing zero-knowledge verifying key for Zswap outputs. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T04:34:19.149694Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching public parameters for k=15 - finished.
[2m2026-08-30T04:34:19.149708Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching public parameters for k=15 - verified correct.
[2m2026-08-30T04:34:19.244987Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge proving key for Zswap inputs - finished.
[2m2026-08-30T04:34:19.245061Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge proving key for Zswap inputs - verified correct.
[2m2026-08-30T04:34:19.297546Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing zero-knowledge verifying key for Zswap inputs. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T04:34:19.342083Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge verifying key for Dust spends - finished.
[2m2026-08-30T04:34:19.342100Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge verifying key for Dust spends - verified correct.
[2m2026-08-30T04:34:19.360474Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing ZKIR source for Dust spends. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T04:34:19.415331Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge verifying key for Zswap signing operations - finished.
[2m2026-08-30T04:34:19.415345Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge verifying key for Zswap signing operations - verified correct.
[2m2026-08-30T04:34:19.419263Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing ZKIR source for Zswap signing operations. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T04:34:19.487709Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge verifying key for Zswap outputs - finished.
[2m2026-08-30T04:34:19.487731Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge verifying key for Zswap outputs - verified correct.
[2m2026-08-30T04:34:19.489793Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing ZKIR source for Zswap outputs. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T04:34:19.527593Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching ZKIR source for Dust spends - finished.
[2m2026-08-30T04:34:19.527614Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching ZKIR source for Dust spends - verified correct.
[2m2026-08-30T04:34:19.663918Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge verifying key for Zswap inputs - finished.
[2m2026-08-30T04:34:19.663944Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge verifying key for Zswap inputs - verified correct.
[2m2026-08-30T04:34:19.665703Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing ZKIR source for Zswap inputs. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T04:34:19.739410Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching ZKIR source for Zswap signing operations - finished.
[2m2026-08-30T04:34:19.739433Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching ZKIR source for Zswap signing operations - verified correct.
[2m2026-08-30T04:34:19.811803Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching ZKIR source for Zswap outputs - finished.
[2m2026-08-30T04:34:19.811827Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching ZKIR source for Zswap outputs - verified correct.
[2m2026-08-30T04:34:19.839551Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching ZKIR source for Zswap inputs - finished.
[2m2026-08-30T04:34:19.839572Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching ZKIR source for Zswap inputs - verified correct.
[2m2026-08-30T04:34:19.853335Z[0m [32m INFO[0m [2mactix_server::builder[0m[2m:[0m starting 4 workers
[2m2026-08-30T04:34:19.853364Z[0m [32m INFO[0m [2mactix_server::server[0m[2m:[0m Actix runtime found; starting in Actix runtime
[2m2026-08-30T04:34:19.853367Z[0m [32m INFO[0m [2mactix_server::server[0m[2m:[0m starting service: "actix-web-service-0.0.0.0:6300", workers: 4, listening on: 0.0.0.0:6300
[2m2026-08-30T04:35:19.316370Z[0m [32m INFO[0m [2mmidnight_proof_server::endpoints[0m[2m:[0m Starting to process request for /prove...
[2m2026-08-30T04:35:20.229809Z[0m [32m INFO[0m [2mactix_web::middleware::logger[0m[2m:[0m 172.18.0.1 POST /prove HTTP/1.1; took 0.913489s
[2m2026-08-30T04:35:38.517661Z[0m [32m INFO[0m [2mmidnight_proof_server::endpoints[0m[2m:[0m Starting to process request for /check...
[2m2026-08-30T04:35:38.518013Z[0m [32m INFO[0m [2mactix_web::middleware::logger[0m[2m:[0m 172.18.0.1 POST /check HTTP/1.1; took 0.000392s

-------------------------



{"level":30,"time":1788064538611,"pid":2756,"hostname":"runnervmgx7h7","msg":"Shutting down test environment..."}
 [31m❯[39m run-test.spec.ts [2m([22m[2m1 test[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 109376[2mms[22m[39m
[31m   [31m×[31m E2E Runtime verification[39m[33m 109375[2mms[22m[39m

[31m⎯⎯⎯⎯⎯⎯⎯[39m[1m[41m Failed Tests 1 [49m[22m[31m⎯⎯⎯⎯⎯⎯⎯[39m

[41m[1m FAIL [22m[49m run-test.spec.ts[2m > [22mE2E Runtime verification
[31m[1mError[22m: Unexpected error submitting scoped transaction '<unnamed>': Error: 'check' returned an error: Error: Failed Proof Server response: url="http://127.0.0.1:6300/check" code="400" body="bad input"[39m
[90m [2m❯[22m scoped node_modules/@midnight-ntwrk/midnight-js-contracts/src/internal/transaction.ts:[2m266:22[22m[39m
[36m [2m❯[22m run-test.spec.ts:[2m118:1[22m[39m
    [90m116|[39m     console[33m.[39m[34mlog[39m([32m'Failed to read PROVER key:'[39m[33m,[39m e)[33m;[39m
    [90m117|[39m }
    [90m118|[39m await deployedContract.callTx.register(game_id, player_id, x_old, y_ol…
    [90m   |[39m [31m^[39m
    [90m119|[39m         } [35mcatch[39m (e[33m:[39m any) {
    [90m120|[39m             console[33m.[39m[34merror[39m([32m"REGISTER FAILED:"[39m[33m,[39m e)[33m;[39m

[31m[1mCaused by: Error[22m: 'check' returned an error: Error: Failed Proof Server response: url="http://127.0.0.1:6300/check" code="400" body="bad input"[39m
[90m [2m❯[22m __wbg_Error_e17e777aac105295 node_modules/@midnight-ntwrk/ledger-v8/midnight_ledger_wasm_bg.js:[2m9728:17[22m[39m
[90m [2m❯[22m null.<anonymous> wasm:/wasm/026b209a:[2m1:6342132[22m[39m
[90m [2m❯[22m null.<anonymous> wasm:/wasm/026b209a:[2m1:4455484[22m[39m
[90m [2m❯[22m null.<anonymous> wasm:/wasm/026b209a:[2m1:541594[22m[39m
[90m [2m❯[22m null.<anonymous> wasm:/wasm/026b209a:[2m1:3258719[22m[39m
[90m [2m❯[22m null.<anonymous> wasm:/wasm/026b209a:[2m1:6276270[22m[39m
[90m [2m❯[22m null.<anonymous> wasm:/wasm/026b209a:[2m1:6393810[22m[39m
[90m [2m❯[22m __wbg_adapter_16 node_modules/@midnight-ntwrk/ledger-v8/midnight_ledger_wasm_bg.js:[2m1419:10[22m[39m
[90m [2m❯[22m real node_modules/@midnight-ntwrk/ledger-v8/midnight_ledger_wasm_bg.js:[2m219:20[22m[39m

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯[22m[39m


[2m Test Files [22m [1m[31m1 failed[39m[22m[90m (1)[39m
[2m      Tests [22m [1m[31m1 failed[39m[22m[90m (1)[39m
[2m   Start at [22m 04:33:49
[2m   Duration [22m 111.10s[2m (transform 97ms, setup 0ms, import 1.62s, tests 109.38s, environment 0ms)[22m


::error file=/home/runner/work/shadowgrid/shadowgrid/run-test.spec.ts,title=run-test.spec.ts > E2E Runtime verification,line=118,column=1::Error: Unexpected error submitting scoped transaction '<unnamed>': Error: 'check' returned an error: Error: Failed Proof Server response: url="http://127.0.0.1:6300/check" code="400" body="bad input"%0A ❯ scoped node_modules/@midnight-ntwrk/midnight-js-contracts/src/internal/transaction.ts:266:22%0A ❯ run-test.spec.ts:118:1%0A%0ACaused by: Caused by: Error: 'check' returned an error: Error: Failed Proof Server response: url="http://127.0.0.1:6300/check" code="400" body="bad input"%0A ❯ __wbg_Error_e17e777aac105295 node_modules/@midnight-ntwrk/ledger-v8/midnight_ledger_wasm_bg.js:9728:17%0A ❯ null.<anonymous> wasm:/wasm/026b209a:1:6342132%0A ❯ null.<anonymous> wasm:/wasm/026b209a:1:4455484%0A ❯ null.<anonymous> wasm:/wasm/026b209a:1:541594%0A ❯ null.<anonymous> wasm:/wasm/026b209a:1:3258719%0A ❯ null.<anonymous> wasm:/wasm/026b209a:1:6276270%0A ❯ null.<anonymous> wasm:/wasm/026b209a:1:6393810%0A ❯ __wbg_adapter_16 node_modules/@midnight-ntwrk/ledger-v8/midnight_ledger_wasm_bg.js:1419:10%0A ❯ real node_modules/@midnight-ntwrk/ledger-v8/midnight_ledger_wasm_bg.js:219:20%0A%0A
