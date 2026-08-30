
[1m[30m[46m RUN [49m[39m[22m [36mv4.1.11 [39m[90m/home/runner/work/shadowgrid/shadowgrid[39m

Sourcemap for "/home/runner/work/shadowgrid/shadowgrid/dist/contract/index.js" points to missing source files
{"level":30,"time":1788074501262,"pid":2924,"hostname":"runnervmgx7h7","msg":"Starting test environment... path=/home/runner/work/shadowgrid/shadowgrid, file=compose.yml, uid=631185264096409"}
[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39mCIRCUITS: [90mundefined[39m

[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m[DelayedWaitStrategy] Starting 20000ms delay before health check...

[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m[DelayedWaitStrategy] Delay complete, now checking health...

[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m[DelayedWaitStrategy] Health check passed

{"level":30,"time":1788074548453,"pid":2924,"hostname":"runnervmgx7h7","msg":"Test environment configuration: {\"walletNetworkId\":\"undeployed\",\"networkId\":\"undeployed\",\"indexer\":\"http://127.0.0.1:8088/api/v4/graphql\",\"indexerWS\":\"ws://127.0.0.1:8088/api/v4/graphql/ws\",\"node\":\"http://127.0.0.1:9944\",\"nodeWS\":\"ws://127.0.0.1:9944\",\"proofServer\":\"http://127.0.0.1:6300\"}"}
[07:22:28.453] [32mINFO[39m (2924): [36mInitializing wallet builder for undeployed[39m
[07:22:28.537] [32mINFO[39m (2924): [36mUsing test wallet with known mnemonic[39m
[07:22:28.572] [32mINFO[39m (2924): [36mCreating dust wallet with params: {"indexerClientConnection":{"indexerHttpUrl":"http://127.0.0.1:8088/api/v4/graphql","indexerWsUrl":"ws://127.0.0.1:8088/api/v4/graphql/ws"},"provingServerUrl":"http://127.0.0.1:6300/","networkId":"undeployed","relayURL":"ws://127.0.0.1:9944/","txHistoryStorage":{"storage":{}},"costParameters":{"ledgerParams":{"__wbg_ptr":4654560},"additionalFeeOverhead":"500000000000000000","feeBlocksMargin":5}}[39m
[07:22:28.620] [32mINFO[39m (2924): [36mYour wallet address is: mn_addr_undeployed1nqhdatus5d6tvye57q854kdrs6ur2ytsl8yaygzfsdy2e3tvtmesdcgp8m, waiting for NIGHT funds...[39m
[07:22:28.621] [32mINFO[39m (2924): [36mSyncing wallet...[39m
[07:22:28.634] [32mINFO[39m (2924): [36mWallet synced state emission: { shielded=false, unshielded=false, dust=false }[39m
[07:22:28.634] [32mINFO[39m (2924): [36mWallet synced state emission (synced=false): { shielded=false, unshielded=false, dust=false }[39m
{"level":30,"time":1788074548595,"pid":2924,"hostname":"runnervmgx7h7","msg":"Your wallet seed is: a51c86de32d0791f7cffc3bdff1abd9bb54987f0ed5effc30c936dddbb9afd9d530c8db445e4f2d3ea42a321b260e022aadf05987c9a67ec7b6b6ca1d0593ec9 and your address is: mock-address"}
{"level":30,"time":1788074548596,"pid":2924,"hostname":"runnervmgx7h7","msg":"Starting wallet..."}
[07:22:28.686] [32mINFO[39m (2924): [36mWallet synced state emission: { shielded=false, unshielded=false, dust=false }[39m
[07:22:28.753] [32mINFO[39m (2924): [36mWallet synced state emission: { shielded=false, unshielded=false, dust=false }[39m
[07:22:28.775] [32mINFO[39m (2924): [36mWallet synced state emission: { shielded=false, unshielded=false, dust=false }[39m
[07:22:28.776] [32mINFO[39m (2924): [36mWallet synced state emission: { shielded=false, unshielded=false, dust=false }[39m
[07:22:28.776] [32mINFO[39m (2924): [36mWallet synced state emission: { shielded=false, unshielded=false, dust=false }[39m
[07:22:28.776] [32mINFO[39m (2924): [36mWallet synced state emission: { shielded=false, unshielded=false, dust=false }[39m
[07:22:28.777] [32mINFO[39m (2924): [36mWallet synced state emission: { shielded=false, unshielded=true, dust=false }[39m
[07:22:28.854] [32mINFO[39m (2924): [36mWallet synced state emission: { shielded=false, unshielded=true, dust=false }[39m
[07:22:28.872] [32mINFO[39m (2924): [36mWallet synced state emission: { shielded=false, unshielded=true, dust=false }[39m
[07:22:29.043] [32mINFO[39m (2924): [36mWallet synced state emission: { shielded=false, unshielded=true, dust=false }[39m
[07:22:29.104] [32mINFO[39m (2924): [36mWallet synced state emission: { shielded=false, unshielded=true, dust=false }[39m
[07:22:29.158] [32mINFO[39m (2924): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[07:22:29.219] [32mINFO[39m (2924): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[90mstderr[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m2026-08-30 07:22:29        RPC-CORE: subscribeRuntimeVersion(): RuntimeVersion:: disconnected from ws://127.0.0.1:9944/: 1000:: Normal Closure

[90mstderr[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m2026-08-30 07:22:29        RPC-CORE: subscribeRuntimeVersion(): RuntimeVersion:: disconnected from ws://127.0.0.1:9944/: 1000:: Normal Closure

[07:22:29.290] [32mINFO[39m (2924): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[07:22:29.353] [32mINFO[39m (2924): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[07:22:29.414] [32mINFO[39m (2924): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[07:22:29.474] [32mINFO[39m (2924): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[07:22:29.532] [32mINFO[39m (2924): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[07:22:29.598] [32mINFO[39m (2924): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[07:22:29.654] [32mINFO[39m (2924): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[07:22:29.712] [32mINFO[39m (2924): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=true }[39m
[07:22:58.667] [32mINFO[39m (2924): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=true }[39m
[07:22:58.667] [32mINFO[39m (2924): [36mWallet synced state emission (synced=true): { shielded=true, unshielded=true, dust=true }[39m
[07:22:58.668] [32mINFO[39m (2924): [36mSync complete[39m
[07:22:58.669] [32mINFO[39m (2924): [36mWallet balances after sync - Shielded: {"0000000000000000000000000000000000000000000000000000000000000000":"250000000000000","0000000000000000000000000000000000000000000000000000000000000002":"50000000000000","0000000000000000000000000000000000000000000000000000000000000001":"50000000000000"}, Unshielded: {"0000000000000000000000000000000000000000000000000000000000000000":"250000000000000"}, Dust: "1250000000000000000000000"[39m
[07:22:58.671] [32mINFO[39m (2924): [36mYour wallet NIGHT balance is: 250000000000000[39m
{"level":30,"time":1788074578679,"pid":2924,"hostname":"runnervmgx7h7","msg":"Deploying contract..."}
{"level":30,"time":1788074600586,"pid":2924,"hostname":"runnervmgx7h7","msg":"Contract deployed successfully at 61ac6103b62816df2d542b89da5c8e9d039641ffec10994c6f28eb3f249f86d8"}
[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39mTesting ZKIR reading...

{"level":30,"time":1788074600586,"pid":2924,"hostname":"runnervmgx7h7","msg":"Registering initial state..."}
[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39mSuccessfully read ZKIR, length: [33m330[39m

[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39mSuccessfully read PROVER key, length: [33m2820780[39m

[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m--- keyMaterial in check: [33mtrue[39m ir length: [33m330[39m

{"level":30,"time":1788074624480,"pid":2924,"hostname":"runnervmgx7h7","msg":"Running movement test cases..."}
{"level":30,"time":1788074624594,"pid":2924,"hostname":"runnervmgx7h7","msg":"[FAIL] Legal move right: Expected true, got false"}
{"level":30,"time":1788074624612,"pid":2924,"hostname":"runnervmgx7h7","msg":"Shutting down test environment..."}
 [31m❯[39m run-test.spec.ts [2m([22m[2m1 test[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 124562[2mms[22m[39m
[31m   [31m×[31m E2E Runtime verification[39m[33m 124560[2mms[22m[39m

[31m⎯⎯⎯⎯⎯⎯⎯[39m[1m[41m Failed Tests 1 [49m[22m[31m⎯⎯⎯⎯⎯⎯⎯[39m

[41m[1m FAIL [22m[49m run-test.spec.ts[2m > [22mE2E Runtime verification
[31m[1mError[22m: Test case failed: Legal move right. Expected true, got false. Evidence: Unexpected error executing scoped transaction '<unnamed>': ContractRuntimeError: Error executing circuit 'verify_move'...[39m
[36m [2m❯[22m run-test.spec.ts:[2m215:23[22m[39m
    [90m213|[39m
    [90m214|[39m             [35mif[39m ([33m![39mpassed) {
    [90m215|[39m                 throw new Error(`Test case failed: ${tc.name}. Expecte…
    [90m   |[39m                       [31m^[39m
    [90m216|[39m             }
    [90m217|[39m         }

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯[22m[39m


[2m Test Files [22m [1m[31m1 failed[39m[22m[90m (1)[39m
[2m      Tests [22m [1m[31m1 failed[39m[22m[90m (1)[39m
[2m   Start at [22m 07:21:38
[2m   Duration [22m 127.19s[2m (transform 105ms, setup 0ms, import 2.51s, tests 124.56s, environment 0ms)[22m


::error file=/home/runner/work/shadowgrid/shadowgrid/run-test.spec.ts,title=run-test.spec.ts > E2E Runtime verification,line=215,column=23::Error: Test case failed: Legal move right. Expected true, got false. Evidence: Unexpected error executing scoped transaction '<unnamed>': ContractRuntimeError: Error executing circuit 'verify_move'...%0A ❯ run-test.spec.ts:215:23%0A%0A
