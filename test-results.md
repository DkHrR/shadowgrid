
[1m[30m[46m RUN [49m[39m[22m [36mv4.1.11 [39m[90m/home/runner/work/shadowgrid/shadowgrid[39m

Sourcemap for "/home/runner/work/shadowgrid/shadowgrid/dist/contract/index.js" points to missing source files
{"level":30,"time":1788021784036,"pid":2900,"hostname":"runnervmgx7h7","msg":"Starting test environment... path=/home/runner/work/shadowgrid/shadowgrid, file=compose.yml, uid=5790718830772591"}
[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m[DelayedWaitStrategy] Starting 20000ms delay before health check...

[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m[DelayedWaitStrategy] Delay complete, now checking health...

[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m[DelayedWaitStrategy] Health check passed

{"level":30,"time":1788021826316,"pid":2900,"hostname":"runnervmgx7h7","msg":"Test environment configuration: {\"walletNetworkId\":\"undeployed\",\"networkId\":\"undeployed\",\"indexer\":\"http://127.0.0.1:8088/api/v4/graphql\",\"indexerWS\":\"ws://127.0.0.1:8088/api/v4/graphql/ws\",\"node\":\"http://127.0.0.1:9944\",\"nodeWS\":\"ws://127.0.0.1:9944\",\"proofServer\":\"http://127.0.0.1:6300\"}"}
[16:43:46.317] [32mINFO[39m (2900): [36mInitializing wallet builder for undeployed[39m
[16:43:46.412] [32mINFO[39m (2900): [36mCreating dust wallet with params: {"indexerClientConnection":{"indexerHttpUrl":"http://127.0.0.1:8088/api/v4/graphql","indexerWsUrl":"ws://127.0.0.1:8088/api/v4/graphql/ws"},"provingServerUrl":"http://127.0.0.1:6300/","networkId":"undeployed","relayURL":"ws://127.0.0.1:9944/","txHistoryStorage":{"storage":{}},"costParameters":{"ledgerParams":{"__wbg_ptr":4654560},"additionalFeeOverhead":"500000000000000000","feeBlocksMargin":5}}[39m
{"level":30,"time":1788021826437,"pid":2900,"hostname":"runnervmgx7h7","msg":"Your wallet seed is: 0000000000000000000000000000000000000000000000000000000000000042 and your address is: mock-address"}
{"level":30,"time":1788021826438,"pid":2900,"hostname":"runnervmgx7h7","msg":"Starting wallet..."}
{"level":30,"time":1788021826466,"pid":2900,"hostname":"runnervmgx7h7","msg":"Deploying contract..."}
{"level":30,"time":1788021826864,"pid":2900,"hostname":"runnervmgx7h7","msg":"Shutting down test environment..."}
[90mstderr[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m2026-08-29 16:43:46        RPC-CORE: subscribeRuntimeVersion(): RuntimeVersion:: disconnected from ws://127.0.0.1:9944/: 1000:: Normal Closure

[90mstderr[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m2026-08-29 16:43:46        RPC-CORE: subscribeRuntimeVersion(): RuntimeVersion:: disconnected from ws://127.0.0.1:9944/: 1000:: Normal Closure

 [31m❯[39m run-test.spec.ts [2m([22m[2m1 test[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 44039[2mms[22m[39m
[31m   [31m×[31m E2E Runtime verification[39m[33m 44038[2mms[22m[39m

[31m⎯⎯⎯⎯⎯⎯⎯[39m[1m[41m Failed Tests 1 [49m[22m[31m⎯⎯⎯⎯⎯⎯⎯[39m

[41m[1m FAIL [22m[49m run-test.spec.ts[2m > [22mE2E Runtime verification
[31m[1m(FiberFailure) Wallet.InsufficientFunds[22m: Insufficient Funds: could not balance dust[39m
[90m [2m❯[22m catch node_modules/@midnight-ntwrk/wallet-sdk-dust-wallet/dist/v1/Transacting.js:[2m279:32[22m[39m
[90m [2m❯[22m onFailure node_modules/effect/src/internal/core-effect.ts:[2m108:31[22m[39m

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯[22m[39m


[2m Test Files [22m [1m[31m1 failed[39m[22m[90m (1)[39m
[2m      Tests [22m [1m[31m1 failed[39m[22m[90m (1)[39m
[2m   Start at [22m 16:43:01
[2m   Duration [22m 46.77s[2m (transform 96ms, setup 0ms, import 2.59s, tests 44.04s, environment 0ms)[22m

