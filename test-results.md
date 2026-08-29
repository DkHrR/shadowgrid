
[1m[30m[46m RUN [49m[39m[22m [36mv4.1.11 [39m[90m/home/runner/work/shadowgrid/shadowgrid[39m

Sourcemap for "/home/runner/work/shadowgrid/shadowgrid/dist/contract/index.js" points to missing source files
{"level":30,"time":1788022492334,"pid":2830,"hostname":"runnervmgx7h7","msg":"Starting test environment... path=/home/runner/work/shadowgrid/shadowgrid, file=compose.yml, uid=6826312825882301"}
[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m[DelayedWaitStrategy] Starting 20000ms delay before health check...

[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m[DelayedWaitStrategy] Delay complete, now checking health...

[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m[DelayedWaitStrategy] Health check passed

{"level":30,"time":1788022533774,"pid":2830,"hostname":"runnervmgx7h7","msg":"Test environment configuration: {\"walletNetworkId\":\"undeployed\",\"networkId\":\"undeployed\",\"indexer\":\"http://127.0.0.1:8088/api/v4/graphql\",\"indexerWS\":\"ws://127.0.0.1:8088/api/v4/graphql/ws\",\"node\":\"http://127.0.0.1:9944\",\"nodeWS\":\"ws://127.0.0.1:9944\",\"proofServer\":\"http://127.0.0.1:6300\"}"}
[16:55:33.775] [32mINFO[39m (2830): [36mInitializing wallet builder for undeployed[39m
[16:55:33.856] [32mINFO[39m (2830): [36mUsing test wallet with known mnemonic[39m
[16:55:33.895] [32mINFO[39m (2830): [36mCreating dust wallet with params: {"indexerClientConnection":{"indexerHttpUrl":"http://127.0.0.1:8088/api/v4/graphql","indexerWsUrl":"ws://127.0.0.1:8088/api/v4/graphql/ws"},"provingServerUrl":"http://127.0.0.1:6300/","networkId":"undeployed","relayURL":"ws://127.0.0.1:9944/","txHistoryStorage":{"storage":{}},"costParameters":{"ledgerParams":{"__wbg_ptr":4654560},"additionalFeeOverhead":"500000000000000000","feeBlocksMargin":5}}[39m
[16:55:33.948] [32mINFO[39m (2830): [36mYour wallet address is: mn_addr_undeployed1nqhdatus5d6tvye57q854kdrs6ur2ytsl8yaygzfsdy2e3tvtmesdcgp8m, waiting for NIGHT funds...[39m
[16:55:33.948] [32mINFO[39m (2830): [36mSyncing wallet...[39m
[16:55:33.964] [32mINFO[39m (2830): [36mWallet synced state emission: { shielded=false, unshielded=false, dust=false }[39m
[16:55:33.965] [32mINFO[39m (2830): [36mWallet synced state emission (synced=false): { shielded=false, unshielded=false, dust=false }[39m
{"level":30,"time":1788022533922,"pid":2830,"hostname":"runnervmgx7h7","msg":"Your wallet seed is: a51c86de32d0791f7cffc3bdff1abd9bb54987f0ed5effc30c936dddbb9afd9d530c8db445e4f2d3ea42a321b260e022aadf05987c9a67ec7b6b6ca1d0593ec9 and your address is: mock-address"}
{"level":30,"time":1788022533922,"pid":2830,"hostname":"runnervmgx7h7","msg":"Starting wallet..."}
[16:55:34.041] [32mINFO[39m (2830): [36mWallet synced state emission: { shielded=false, unshielded=false, dust=false }[39m
[16:55:34.113] [32mINFO[39m (2830): [36mWallet synced state emission: { shielded=false, unshielded=false, dust=false }[39m
[16:55:34.113] [32mINFO[39m (2830): [36mWallet synced state emission: { shielded=false, unshielded=false, dust=false }[39m
[16:55:34.113] [32mINFO[39m (2830): [36mWallet synced state emission: { shielded=false, unshielded=false, dust=false }[39m
[16:55:34.114] [32mINFO[39m (2830): [36mWallet synced state emission: { shielded=false, unshielded=false, dust=false }[39m
[16:55:34.114] [32mINFO[39m (2830): [36mWallet synced state emission: { shielded=false, unshielded=false, dust=false }[39m
[16:55:34.114] [32mINFO[39m (2830): [36mWallet synced state emission: { shielded=false, unshielded=true, dust=false }[39m
[16:55:34.293] [32mINFO[39m (2830): [36mWallet synced state emission: { shielded=false, unshielded=true, dust=false }[39m
[16:55:34.319] [32mINFO[39m (2830): [36mWallet synced state emission: { shielded=false, unshielded=true, dust=false }[39m
[16:55:34.399] [32mINFO[39m (2830): [36mWallet synced state emission: { shielded=false, unshielded=true, dust=false }[39m
[16:55:34.477] [32mINFO[39m (2830): [36mWallet synced state emission: { shielded=false, unshielded=true, dust=false }[39m
[90mstderr[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m2026-08-29 16:55:34        RPC-CORE: subscribeRuntimeVersion(): RuntimeVersion:: disconnected from ws://127.0.0.1:9944/: 1000:: Normal Closure

[90mstderr[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m2026-08-29 16:55:34        RPC-CORE: subscribeRuntimeVersion(): RuntimeVersion:: disconnected from ws://127.0.0.1:9944/: 1000:: Normal Closure

[16:55:34.552] [32mINFO[39m (2830): [36mWallet synced state emission: { shielded=false, unshielded=true, dust=false }[39m
[16:55:34.613] [32mINFO[39m (2830): [36mWallet synced state emission: { shielded=false, unshielded=true, dust=false }[39m
[16:55:34.681] [32mINFO[39m (2830): [36mWallet synced state emission: { shielded=false, unshielded=true, dust=false }[39m
[16:55:34.735] [32mINFO[39m (2830): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[16:55:34.790] [32mINFO[39m (2830): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[16:55:34.851] [32mINFO[39m (2830): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[16:55:34.916] [32mINFO[39m (2830): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[16:55:34.984] [32mINFO[39m (2830): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[16:55:35.044] [32mINFO[39m (2830): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[16:55:35.105] [32mINFO[39m (2830): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=true }[39m
[16:56:04.005] [32mINFO[39m (2830): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=true }[39m
[16:56:04.005] [32mINFO[39m (2830): [36mWallet synced state emission (synced=true): { shielded=true, unshielded=true, dust=true }[39m
[16:56:04.006] [32mINFO[39m (2830): [36mSync complete[39m
[16:56:04.007] [32mINFO[39m (2830): [36mWallet balances after sync - Shielded: {"0000000000000000000000000000000000000000000000000000000000000000":"250000000000000","0000000000000000000000000000000000000000000000000000000000000002":"50000000000000","0000000000000000000000000000000000000000000000000000000000000001":"50000000000000"}, Unshielded: {"0000000000000000000000000000000000000000000000000000000000000000":"250000000000000"}, Dust: "1250000000000000000000000"[39m
[16:56:04.010] [32mINFO[39m (2830): [36mYour wallet NIGHT balance is: 250000000000000[39m
{"level":30,"time":1788022564019,"pid":2830,"hostname":"runnervmgx7h7","msg":"Deploying contract..."}
{"level":30,"time":1788022586405,"pid":2830,"hostname":"runnervmgx7h7","msg":"Contract deployed successfully at eb06a67e41d60cdaeee11662b554de63133c22737a7ddf4855fe9b1669622755"}
{"level":30,"time":1788022586405,"pid":2830,"hostname":"runnervmgx7h7","msg":"Registering initial state..."}
{"level":30,"time":1788022586596,"pid":2830,"hostname":"runnervmgx7h7","msg":"Shutting down test environment..."}
 [31m❯[39m run-test.spec.ts [2m([22m[2m1 test[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 95468[2mms[22m[39m
[31m   [31m×[31m E2E Runtime verification[39m[33m 95467[2mms[22m[39m

[31m⎯⎯⎯⎯⎯⎯⎯[39m[1m[41m Failed Tests 1 [49m[22m[31m⎯⎯⎯⎯⎯⎯⎯[39m

[41m[1m FAIL [22m[49m run-test.spec.ts[2m > [22mE2E Runtime verification
[31m[1mError[22m: Unexpected error submitting scoped transaction '<unnamed>': Error: 'check' returned an error: Error: Failed Proof Server response: url="http://127.0.0.1:6300/check", code="400", status="Bad Request"[39m
[90m [2m❯[22m scoped node_modules/@midnight-ntwrk/midnight-js-contracts/src/internal/transaction.ts:[2m266:22[22m[39m
[36m [2m❯[22m run-test.spec.ts:[2m114:9[22m[39m
    [90m112|[39m
    [90m113|[39m         logger[33m.[39m[34minfo[39m([32m'Registering initial state...'[39m)[33m;[39m
    [90m114|[39m         await deployedContract.callTx.register(game_id, player_id, x_o…
    [90m   |[39m         [31m^[39m
    [90m115|[39m
    [90m116|[39m         [35mlet[39m current_x [33m=[39m x_old[33m;[39m

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
[2m   Start at [22m 16:54:49
[2m   Duration [22m 98.26s[2m (transform 104ms, setup 0ms, import 2.63s, tests 95.47s, environment 0ms)[22m


::error file=/home/runner/work/shadowgrid/shadowgrid/run-test.spec.ts,title=run-test.spec.ts > E2E Runtime verification,line=114,column=9::Error: Unexpected error submitting scoped transaction '<unnamed>': Error: 'check' returned an error: Error: Failed Proof Server response: url="http://127.0.0.1:6300/check", code="400", status="Bad Request"%0A ❯ scoped node_modules/@midnight-ntwrk/midnight-js-contracts/src/internal/transaction.ts:266:22%0A ❯ run-test.spec.ts:114:9%0A%0ACaused by: Caused by: Error: 'check' returned an error: Error: Failed Proof Server response: url="http://127.0.0.1:6300/check", code="400", status="Bad Request"%0A ❯ __wbg_Error_e17e777aac105295 node_modules/@midnight-ntwrk/ledger-v8/midnight_ledger_wasm_bg.js:9728:17%0A ❯ null.<anonymous> wasm:/wasm/026b209a:1:6342132%0A ❯ null.<anonymous> wasm:/wasm/026b209a:1:4455484%0A ❯ null.<anonymous> wasm:/wasm/026b209a:1:541594%0A ❯ null.<anonymous> wasm:/wasm/026b209a:1:3258719%0A ❯ null.<anonymous> wasm:/wasm/026b209a:1:6276270%0A ❯ null.<anonymous> wasm:/wasm/026b209a:1:6393810%0A ❯ __wbg_adapter_16 node_modules/@midnight-ntwrk/ledger-v8/midnight_ledger_wasm_bg.js:1419:10%0A ❯ real node_modules/@midnight-ntwrk/ledger-v8/midnight_ledger_wasm_bg.js:219:20%0A%0A
