
[1m[30m[46m RUN [49m[39m[22m [36mv4.1.11 [39m[90m/home/runner/work/shadowgrid/shadowgrid[39m

{"level":30,"time":1788058259552,"pid":2969,"hostname":"runnervmgx7h7","msg":"Starting test environment... path=/home/runner/work/shadowgrid/shadowgrid, file=compose.yml, uid=7579295262591189"}
[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39mCopied register.bzkir (size: 132 bytes) to /home/runner/work/shadowgrid/shadowgrid/dist/zkir/shadowgrid#register.bzkir
Copied verify_move.bzkir (size: 120 bytes) to /home/runner/work/shadowgrid/shadowgrid/dist/zkir/shadowgrid#verify_move.bzkir
Copied register.prover (size: 279316 bytes) to /home/runner/work/shadowgrid/shadowgrid/dist/keys/shadowgrid#register.prover
Copied register.verifier (size: 1351 bytes) to /home/runner/work/shadowgrid/shadowgrid/dist/keys/shadowgrid#register.verifier
Copied verify_move.prover (size: 146860 bytes) to /home/runner/work/shadowgrid/shadowgrid/dist/keys/shadowgrid#verify_move.prover
Copied verify_move.verifier (size: 1351 bytes) to /home/runner/work/shadowgrid/shadowgrid/dist/keys/shadowgrid#verify_move.verifier

[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m[DelayedWaitStrategy] Starting 20000ms delay before health check...

[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m[DelayedWaitStrategy] Delay complete, now checking health...

[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m[DelayedWaitStrategy] Health check passed

{"level":30,"time":1788058309118,"pid":2969,"hostname":"runnervmgx7h7","msg":"Test environment configuration: {\"walletNetworkId\":\"undeployed\",\"networkId\":\"undeployed\",\"indexer\":\"http://127.0.0.1:8088/api/v4/graphql\",\"indexerWS\":\"ws://127.0.0.1:8088/api/v4/graphql/ws\",\"node\":\"http://127.0.0.1:9944\",\"nodeWS\":\"ws://127.0.0.1:9944\",\"proofServer\":\"http://127.0.0.1:6300\"}"}
[02:51:49.119] [32mINFO[39m (2969): [36mInitializing wallet builder for undeployed[39m
[02:51:49.201] [32mINFO[39m (2969): [36mUsing test wallet with known mnemonic[39m
[02:51:49.237] [32mINFO[39m (2969): [36mCreating dust wallet with params: {"indexerClientConnection":{"indexerHttpUrl":"http://127.0.0.1:8088/api/v4/graphql","indexerWsUrl":"ws://127.0.0.1:8088/api/v4/graphql/ws"},"provingServerUrl":"http://127.0.0.1:6300/","networkId":"undeployed","relayURL":"ws://127.0.0.1:9944/","txHistoryStorage":{"storage":{}},"costParameters":{"ledgerParams":{"__wbg_ptr":4654560},"additionalFeeOverhead":"500000000000000000","feeBlocksMargin":5}}[39m
[02:51:49.286] [32mINFO[39m (2969): [36mYour wallet address is: mn_addr_undeployed1nqhdatus5d6tvye57q854kdrs6ur2ytsl8yaygzfsdy2e3tvtmesdcgp8m, waiting for NIGHT funds...[39m
[02:51:49.286] [32mINFO[39m (2969): [36mSyncing wallet...[39m
[02:51:49.302] [32mINFO[39m (2969): [36mWallet synced state emission: { shielded=false, unshielded=false, dust=false }[39m
[02:51:49.302] [32mINFO[39m (2969): [36mWallet synced state emission (synced=false): { shielded=false, unshielded=false, dust=false }[39m
{"level":30,"time":1788058309260,"pid":2969,"hostname":"runnervmgx7h7","msg":"Your wallet seed is: a51c86de32d0791f7cffc3bdff1abd9bb54987f0ed5effc30c936dddbb9afd9d530c8db445e4f2d3ea42a321b260e022aadf05987c9a67ec7b6b6ca1d0593ec9 and your address is: mock-address"}
{"level":30,"time":1788058309261,"pid":2969,"hostname":"runnervmgx7h7","msg":"Starting wallet..."}
[02:51:49.416] [32mINFO[39m (2969): [36mWallet synced state emission: { shielded=false, unshielded=false, dust=false }[39m
[02:51:49.417] [32mINFO[39m (2969): [36mWallet synced state emission: { shielded=false, unshielded=false, dust=false }[39m
[02:51:49.417] [32mINFO[39m (2969): [36mWallet synced state emission: { shielded=false, unshielded=false, dust=false }[39m
[02:51:49.417] [32mINFO[39m (2969): [36mWallet synced state emission: { shielded=false, unshielded=false, dust=false }[39m
[02:51:49.418] [32mINFO[39m (2969): [36mWallet synced state emission: { shielded=false, unshielded=false, dust=false }[39m
[02:51:49.418] [32mINFO[39m (2969): [36mWallet synced state emission: { shielded=false, unshielded=true, dust=false }[39m
[02:51:49.422] [32mINFO[39m (2969): [36mWallet synced state emission: { shielded=false, unshielded=true, dust=false }[39m
[02:51:49.450] [32mINFO[39m (2969): [36mWallet synced state emission: { shielded=false, unshielded=true, dust=false }[39m
[02:51:49.533] [32mINFO[39m (2969): [36mWallet synced state emission: { shielded=false, unshielded=true, dust=false }[39m
[02:51:49.599] [32mINFO[39m (2969): [36mWallet synced state emission: { shielded=false, unshielded=true, dust=false }[39m
[02:51:49.785] [32mINFO[39m (2969): [36mWallet synced state emission: { shielded=false, unshielded=true, dust=false }[39m
[02:51:49.853] [32mINFO[39m (2969): [36mWallet synced state emission: { shielded=false, unshielded=true, dust=false }[39m
[02:51:49.919] [32mINFO[39m (2969): [36mWallet synced state emission: { shielded=false, unshielded=true, dust=false }[39m
[02:51:49.967] [32mINFO[39m (2969): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[90mstderr[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m2026-08-30 02:51:49        RPC-CORE: subscribeRuntimeVersion(): RuntimeVersion:: disconnected from ws://127.0.0.1:9944/: 1000:: Normal Closure

[90mstderr[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m2026-08-30 02:51:49        RPC-CORE: subscribeRuntimeVersion(): RuntimeVersion:: disconnected from ws://127.0.0.1:9944/: 1000:: Normal Closure

[02:51:50.027] [32mINFO[39m (2969): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[02:51:50.090] [32mINFO[39m (2969): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[02:51:50.149] [32mINFO[39m (2969): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[02:51:50.211] [32mINFO[39m (2969): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[02:51:50.278] [32mINFO[39m (2969): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[02:51:50.335] [32mINFO[39m (2969): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[02:51:50.394] [32mINFO[39m (2969): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=true }[39m
[02:52:19.340] [32mINFO[39m (2969): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=true }[39m
[02:52:19.340] [32mINFO[39m (2969): [36mWallet synced state emission (synced=true): { shielded=true, unshielded=true, dust=true }[39m
[02:52:19.341] [32mINFO[39m (2969): [36mSync complete[39m
[02:52:19.342] [32mINFO[39m (2969): [36mWallet balances after sync - Shielded: {"0000000000000000000000000000000000000000000000000000000000000000":"250000000000000","0000000000000000000000000000000000000000000000000000000000000002":"50000000000000","0000000000000000000000000000000000000000000000000000000000000001":"50000000000000"}, Unshielded: {"0000000000000000000000000000000000000000000000000000000000000000":"250000000000000"}, Dust: "1250000000000000000000000"[39m
[02:52:19.344] [32mINFO[39m (2969): [36mYour wallet NIGHT balance is: 250000000000000[39m
{"level":30,"time":1788058339352,"pid":2969,"hostname":"runnervmgx7h7","msg":"Deploying contract..."}
{"level":30,"time":1788058358079,"pid":2969,"hostname":"runnervmgx7h7","msg":"Contract deployed successfully at 3d3beaf3fa5a930322e28e7f8c1af8364100c2a9b5c63548b366b9a77923a02a"}
{"level":30,"time":1788058358079,"pid":2969,"hostname":"runnervmgx7h7","msg":"Registering initial state..."}
[90mstderr[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39mREGISTER FAILED: Error: Unexpected error submitting scoped transaction '<unnamed>': Error: 'check' returned an error: Error: Failed Proof Server response: url="http://127.0.0.1:6300/check", code="400", status="Bad Request"
    at scoped [90m(file:///home/runner/work/shadowgrid/shadowgrid/[39mnode_modules/[4m@midnight-ntwrk/midnight-js-contracts[24m/dist/index.mjs:1249:27[90m)[39m
[90m    at processTicksAndRejections (node:internal/process/task_queues:104:5)[39m
    at [90m/home/runner/work/shadowgrid/shadowgrid/[39mrun-test.spec.ts:127:13
    at [90mfile:///home/runner/work/shadowgrid/shadowgrid/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:1903:20 {
  [cause]: Error: 'check' returned an error: Error: Failed Proof Server response: url="http://127.0.0.1:6300/check", code="400", status="Bad Request"
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
Error message: Unexpected error submitting scoped transaction '<unnamed>': Error: 'check' returned an error: Error: Failed Proof Server response: url="http://127.0.0.1:6300/check", code="400", status="Bad Request"
Error cause: Error: 'check' returned an error: Error: Failed Proof Server response: url="http://127.0.0.1:6300/check", code="400", status="Bad Request"
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
[2m2026-08-30T02:51:17.960531Z[0m [32m INFO[0m [2mmidnight_proof_server[0m[2m:[0m Ensuring zswap key material is available...
[2m2026-08-30T02:51:17.961562Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing public parameters for k=10. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T02:51:17.966666Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing public parameters for k=11. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T02:51:17.971976Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing public parameters for k=12. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T02:51:17.976986Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing public parameters for k=13. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T02:51:17.982191Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing public parameters for k=14. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T02:51:17.986961Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing public parameters for k=15. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T02:51:17.991824Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing zero-knowledge proving key for Zswap inputs. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T02:51:17.996526Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing zero-knowledge proving key for Zswap outputs. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T02:51:18.001262Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing zero-knowledge proving key for Zswap signing operations. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T02:51:18.006110Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing zero-knowledge proving key for Dust spends. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T02:51:18.627658Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching public parameters for k=10 - finished.
[2m2026-08-30T02:51:18.627683Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching public parameters for k=10 - verified correct.
[2m2026-08-30T02:51:18.689686Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching public parameters for k=11 - finished.
[2m2026-08-30T02:51:18.689713Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching public parameters for k=11 - verified correct.
[2m2026-08-30T02:51:18.769622Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching public parameters for k=12 - finished.
[2m2026-08-30T02:51:18.769998Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching public parameters for k=12 - verified correct.
[2m2026-08-30T02:51:18.834167Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching public parameters for k=13 - finished.
[2m2026-08-30T02:51:18.834188Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching public parameters for k=13 - verified correct.
[2m2026-08-30T02:51:18.846974Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge proving key for Dust spends - finished.
[2m2026-08-30T02:51:18.846995Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge proving key for Dust spends - verified correct.
[2m2026-08-30T02:51:18.856506Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing zero-knowledge verifying key for Dust spends. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T02:51:18.891158Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge proving key for Zswap signing operations - finished.
[2m2026-08-30T02:51:18.891352Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge proving key for Zswap signing operations - verified correct.
[2m2026-08-30T02:51:18.903538Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing zero-knowledge verifying key for Zswap signing operations. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T02:51:18.925417Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching public parameters for k=14 - finished.
[2m2026-08-30T02:51:18.925593Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching public parameters for k=14 - verified correct.
[2m2026-08-30T02:51:18.967429Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge proving key for Zswap outputs - finished.
[2m2026-08-30T02:51:18.967639Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge proving key for Zswap outputs - verified correct.
[2m2026-08-30T02:51:18.979043Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing zero-knowledge verifying key for Zswap outputs. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T02:51:18.991753Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching public parameters for k=15 - finished.
[2m2026-08-30T02:51:18.991768Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching public parameters for k=15 - verified correct.
[2m2026-08-30T02:51:19.029064Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge verifying key for Zswap signing operations - finished.
[2m2026-08-30T02:51:19.029094Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge verifying key for Zswap signing operations - verified correct.
[2m2026-08-30T02:51:19.030349Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing ZKIR source for Zswap signing operations. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T02:51:19.074836Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge proving key for Zswap inputs - finished.
[2m2026-08-30T02:51:19.074923Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge proving key for Zswap inputs - verified correct.
[2m2026-08-30T02:51:19.095520Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing zero-knowledge verifying key for Zswap inputs. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T02:51:19.120431Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge verifying key for Dust spends - finished.
[2m2026-08-30T02:51:19.120529Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge verifying key for Dust spends - verified correct.
[2m2026-08-30T02:51:19.121533Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing ZKIR source for Dust spends. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T02:51:19.134829Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge verifying key for Zswap outputs - finished.
[2m2026-08-30T02:51:19.134877Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge verifying key for Zswap outputs - verified correct.
[2m2026-08-30T02:51:19.135813Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing ZKIR source for Zswap outputs. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T02:51:19.290086Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching ZKIR source for Zswap signing operations - finished.
[2m2026-08-30T02:51:19.290113Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching ZKIR source for Zswap signing operations - verified correct.
[2m2026-08-30T02:51:19.357669Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge verifying key for Zswap inputs - finished.
[2m2026-08-30T02:51:19.357696Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge verifying key for Zswap inputs - verified correct.
[2m2026-08-30T02:51:19.358716Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing ZKIR source for Zswap inputs. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T02:51:19.391981Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching ZKIR source for Dust spends - finished.
[2m2026-08-30T02:51:19.392005Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching ZKIR source for Dust spends - verified correct.
[2m2026-08-30T02:51:19.393362Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching ZKIR source for Zswap outputs - finished.
[2m2026-08-30T02:51:19.393380Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching ZKIR source for Zswap outputs - verified correct.
[2m2026-08-30T02:51:19.473985Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching ZKIR source for Zswap inputs - finished.
[2m2026-08-30T02:51:19.474161Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching ZKIR source for Zswap inputs - verified correct.
[2m2026-08-30T02:51:19.475724Z[0m [32m INFO[0m [2mactix_server::builder[0m[2m:[0m starting 4 workers
[2m2026-08-30T02:51:19.475826Z[0m [32m INFO[0m [2mactix_server::server[0m[2m:[0m Actix runtime found; starting in Actix runtime
[2m2026-08-30T02:51:19.475865Z[0m [32m INFO[0m [2mactix_server::server[0m[2m:[0m starting service: "actix-web-service-0.0.0.0:6300", workers: 4, listening on: 0.0.0.0:6300
[2m2026-08-30T02:52:19.503998Z[0m [32m INFO[0m [2mmidnight_proof_server::endpoints[0m[2m:[0m Starting to process request for /prove...
[2m2026-08-30T02:52:20.865637Z[0m [32m INFO[0m [2mactix_web::middleware::logger[0m[2m:[0m 172.18.0.1 POST /prove HTTP/1.1; took 1.361680s
[2m2026-08-30T02:52:38.234035Z[0m [32m INFO[0m [2mmidnight_proof_server::endpoints[0m[2m:[0m Starting to process request for /check...
[2m2026-08-30T02:52:38.234352Z[0m [32m INFO[0m [2mactix_web::middleware::logger[0m[2m:[0m 172.18.0.1 POST /check HTTP/1.1; took 0.000344s

-------------------------



{"level":30,"time":1788058358339,"pid":2969,"hostname":"runnervmgx7h7","msg":"Shutting down test environment..."}
 [31m❯[39m run-test.spec.ts [2m([22m[2m1 test[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 104943[2mms[22m[39m
[31m   [31m×[31m E2E Runtime verification[39m[33m 104942[2mms[22m[39m

[31m⎯⎯⎯⎯⎯⎯⎯[39m[1m[41m Failed Tests 1 [49m[22m[31m⎯⎯⎯⎯⎯⎯⎯[39m

[41m[1m FAIL [22m[49m run-test.spec.ts[2m > [22mE2E Runtime verification
[31m[1mError[22m: Unexpected error submitting scoped transaction '<unnamed>': Error: 'check' returned an error: Error: Failed Proof Server response: url="http://127.0.0.1:6300/check", code="400", status="Bad Request"[39m
[90m [2m❯[22m scoped node_modules/@midnight-ntwrk/midnight-js-contracts/src/internal/transaction.ts:[2m266:22[22m[39m
[36m [2m❯[22m run-test.spec.ts:[2m127:13[22m[39m
    [90m125|[39m         [35mtry[39m {
    [90m126|[39m             logger[33m.[39m[34minfo[39m([32m'Registering initial state...'[39m)[33m;[39m
    [90m127|[39m             await deployedContract.callTx.register(game_id, player_id,…
    [90m   |[39m             [31m^[39m
    [90m128|[39m         } [35mcatch[39m (e[33m:[39m any) {
    [90m129|[39m             console[33m.[39m[34merror[39m([32m"REGISTER FAILED:"[39m[33m,[39m e)[33m;[39m

[31m[1mCaused by: Error[22m: 'check' returned an error: Error: Failed Proof Server response: url="http://127.0.0.1:6300/check", code="400", status="Bad Request"[39m
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
[2m   Start at [22m 02:50:56
[2m   Duration [22m 107.63s[2m (transform 102ms, setup 0ms, import 2.55s, tests 104.94s, environment 0ms)[22m


::error file=/home/runner/work/shadowgrid/shadowgrid/run-test.spec.ts,title=run-test.spec.ts > E2E Runtime verification,line=127,column=13::Error: Unexpected error submitting scoped transaction '<unnamed>': Error: 'check' returned an error: Error: Failed Proof Server response: url="http://127.0.0.1:6300/check", code="400", status="Bad Request"%0A ❯ scoped node_modules/@midnight-ntwrk/midnight-js-contracts/src/internal/transaction.ts:266:22%0A ❯ run-test.spec.ts:127:13%0A%0ACaused by: Caused by: Error: 'check' returned an error: Error: Failed Proof Server response: url="http://127.0.0.1:6300/check", code="400", status="Bad Request"%0A ❯ __wbg_Error_e17e777aac105295 node_modules/@midnight-ntwrk/ledger-v8/midnight_ledger_wasm_bg.js:9728:17%0A ❯ null.<anonymous> wasm:/wasm/026b209a:1:6342132%0A ❯ null.<anonymous> wasm:/wasm/026b209a:1:4455484%0A ❯ null.<anonymous> wasm:/wasm/026b209a:1:541594%0A ❯ null.<anonymous> wasm:/wasm/026b209a:1:3258719%0A ❯ null.<anonymous> wasm:/wasm/026b209a:1:6276270%0A ❯ null.<anonymous> wasm:/wasm/026b209a:1:6393810%0A ❯ __wbg_adapter_16 node_modules/@midnight-ntwrk/ledger-v8/midnight_ledger_wasm_bg.js:1419:10%0A ❯ real node_modules/@midnight-ntwrk/ledger-v8/midnight_ledger_wasm_bg.js:219:20%0A%0A
