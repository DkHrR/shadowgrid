
[1m[30m[46m RUN [49m[39m[22m [36mv4.1.11 [39m[90m/home/runner/work/shadowgrid/shadowgrid[39m

Sourcemap for "/home/runner/work/shadowgrid/shadowgrid/dist/contract/index.js" points to missing source files
{"level":30,"time":1788019679837,"pid":2892,"hostname":"runnervmgx7h7","msg":"Starting test environment... path=/home/runner/work/shadowgrid/shadowgrid, file=compose.yml, uid=5198090422725995"}
[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m[DelayedWaitStrategy] Starting 20000ms delay before health check...

[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m[DelayedWaitStrategy] Delay complete, now checking health...

[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m[DelayedWaitStrategy] Health check passed

{"level":30,"time":1788019719726,"pid":2892,"hostname":"runnervmgx7h7","msg":"Test environment configuration: {\"walletNetworkId\":\"undeployed\",\"networkId\":\"undeployed\",\"indexer\":\"http://127.0.0.1:8088/api/v4/graphql\",\"indexerWS\":\"ws://127.0.0.1:8088/api/v4/graphql/ws\",\"node\":\"http://127.0.0.1:9944\",\"nodeWS\":\"ws://127.0.0.1:9944\",\"proofServer\":\"http://127.0.0.1:6300\"}"}
[16:08:39.726] [32mINFO[39m (2892): [36mInitializing wallet builder for undeployed[39m
[16:08:39.813] [32mINFO[39m (2892): [36mCreating dust wallet with params: {"indexerClientConnection":{"indexerHttpUrl":"http://127.0.0.1:8088/api/v4/graphql","indexerWsUrl":"ws://127.0.0.1:8088/api/v4/graphql/ws"},"provingServerUrl":"http://127.0.0.1:6300/","networkId":"undeployed","relayURL":"ws://127.0.0.1:9944/","txHistoryStorage":{"storage":{}},"costParameters":{"ledgerParams":{"__wbg_ptr":4654560},"additionalFeeOverhead":"500000000000000000","feeBlocksMargin":5}}[39m
{"level":30,"time":1788019719836,"pid":2892,"hostname":"runnervmgx7h7","msg":"Your wallet seed is: 0000000000000000000000000000000000000000000000000000000000000042 and your address is: mock-address"}
{"level":30,"time":1788019719836,"pid":2892,"hostname":"runnervmgx7h7","msg":"Starting wallet..."}
{"level":30,"time":1788019719858,"pid":2892,"hostname":"runnervmgx7h7","msg":"Deploying contract..."}
{"level":30,"time":1788019720086,"pid":2892,"hostname":"runnervmgx7h7","msg":"Shutting down test environment..."}
[90mstderr[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m2026-08-29 16:08:40        RPC-CORE: subscribeRuntimeVersion(): RuntimeVersion:: disconnected from ws://127.0.0.1:9944/: 1000:: Normal Closure

[90mstderr[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m2026-08-29 16:08:40        RPC-CORE: subscribeRuntimeVersion(): RuntimeVersion:: disconnected from ws://127.0.0.1:9944/: 1000:: Normal Closure

 [31m❯[39m run-test.spec.ts [2m([22m[2m1 test[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 41381[2mms[22m[39m
[31m   [31m×[31m E2E Runtime verification[39m[33m 41380[2mms[22m[39m

[31m⎯⎯⎯⎯⎯⎯⎯[39m[1m[41m Failed Tests 1 [49m[22m[31m⎯⎯⎯⎯⎯⎯⎯[39m

[41m[1m FAIL [22m[49m run-test.spec.ts[2m > [22mE2E Runtime verification
[31m[1mError[22m: Unexpected error: ZKConfigurationReadError: Failed to read verifier key for shadowgrid#verify_move
    at Module.make (file:///home/runner/work/shadowgrid/shadowgrid/node_modules/@midnight-ntwrk/compact-js/dist/esm/effect/ZKConfigurationReadError.js:39:75)
    at catch (file:///home/runner/work/shadowgrid/shadowgrid/node_modules/@midnight-ntwrk/midnight-js-types/dist/index.mjs:36:50)
    at file:///home/runner/work/shadowgrid/shadowgrid/node_modules/effect/dist/esm/internal/core-effect.js:579:51
    at file:///home/runner/work/shadowgrid/shadowgrid/node_modules/effect/dist/esm/internal/fiberRuntime.js:945:41[39m
[90m [2m❯[22m Module.make node_modules/@midnight-ntwrk/compact-js/src/effect/ZKConfigurationReadError.ts:[2m72:2[22m[39m
[90m [2m❯[22m catch node_modules/@midnight-ntwrk/midnight-js-types/src/contract.ts:[2m42:60[22m[39m
[90m [2m❯[22m catcher node_modules/effect/src/internal/core-effect.ts:[2m1683:28[22m[39m
[90m [2m❯[22m effect_instruction_i0 node_modules/effect/src/internal/fiberRuntime.ts:[2m1161:40[22m[39m
[90m [2m❯[22m onFailure node_modules/@midnight-ntwrk/midnight-js-types/src/contract.ts:[2m113:12[22m[39m
[90m [2m❯[22m onFailure node_modules/effect/src/internal/core.ts:[2m2663:13[22m[39m
[90m [2m❯[22m body node_modules/effect/src/Function.ts:[2m245:17[22m[39m
[90m [2m❯[22m exitResultOrError node_modules/@midnight-ntwrk/midnight-js-types/src/contract.ts:[2m109:17[22m[39m
[90m [2m❯[22m createUnprovenDeployTxFromVerifierKeys node_modules/@midnight-ntwrk/midnight-js-contracts/src/unproven-deploy-tx.ts:[2m136:8[22m[39m
[90m [2m❯[22m submitDeployTx node_modules/@midnight-ntwrk/midnight-js-contracts/src/submit-deploy-tx.ts:[2m93:31[22m[39m
[90m [2m❯[22m deployContract node_modules/@midnight-ntwrk/midnight-js-contracts/src/deploy-contract.ts:[2m132:23[22m[39m
[36m [2m❯[22m run-test.spec.ts:[2m98:34[22m[39m
    [90m 96|[39m     [35mtry[39m {
    [90m 97|[39m         logger[33m.[39m[34minfo[39m([32m'Deploying contract...'[39m)[33m;[39m
    [90m 98|[39m         [35mconst[39m deployedContract [33m=[39m [35mawait[39m [34mdeployContract[39m(providers[33m,[39m {
    [90m   |[39m                                  [31m^[39m
    [90m 99|[39m             compiledContract[33m:[39m [33mCompiledShadowgridContract[39m[33m,[39m
    [90m100|[39m             privateStateId[33m:[39m [32m'test-private-state'[39m[33m,[39m

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯[22m[39m


[2m Test Files [22m [1m[31m1 failed[39m[22m[90m (1)[39m
[2m      Tests [22m [1m[31m1 failed[39m[22m[90m (1)[39m
[2m   Start at [22m 16:07:57
[2m   Duration [22m 43.85s[2m (transform 100ms, setup 0ms, import 2.31s, tests 41.38s, environment 0ms)[22m


::error file=/home/runner/work/shadowgrid/shadowgrid/run-test.spec.ts,title=run-test.spec.ts > E2E Runtime verification,line=98,column=34::Error: Unexpected error: ZKConfigurationReadError: Failed to read verifier key for shadowgrid#verify_move%0A    at Module.make (file:///home/runner/work/shadowgrid/shadowgrid/node_modules/@midnight-ntwrk/compact-js/dist/esm/effect/ZKConfigurationReadError.js:39:75)%0A    at catch (file:///home/runner/work/shadowgrid/shadowgrid/node_modules/@midnight-ntwrk/midnight-js-types/dist/index.mjs:36:50)%0A    at file:///home/runner/work/shadowgrid/shadowgrid/node_modules/effect/dist/esm/internal/core-effect.js:579:51%0A    at file:///home/runner/work/shadowgrid/shadowgrid/node_modules/effect/dist/esm/internal/fiberRuntime.js:945:41%0A ❯ Module.make node_modules/@midnight-ntwrk/compact-js/src/effect/ZKConfigurationReadError.ts:72:2%0A ❯ catch node_modules/@midnight-ntwrk/midnight-js-types/src/contract.ts:42:60%0A ❯ catcher node_modules/effect/src/internal/core-effect.ts:1683:28%0A ❯ effect_instruction_i0 node_modules/effect/src/internal/fiberRuntime.ts:1161:40%0A ❯ onFailure node_modules/@midnight-ntwrk/midnight-js-types/src/contract.ts:113:12%0A ❯ onFailure node_modules/effect/src/internal/core.ts:2663:13%0A ❯ body node_modules/effect/src/Function.ts:245:17%0A ❯ exitResultOrError node_modules/@midnight-ntwrk/midnight-js-types/src/contract.ts:109:17%0A ❯ createUnprovenDeployTxFromVerifierKeys node_modules/@midnight-ntwrk/midnight-js-contracts/src/unproven-deploy-tx.ts:136:8%0A ❯ submitDeployTx node_modules/@midnight-ntwrk/midnight-js-contracts/src/submit-deploy-tx.ts:93:31%0A ❯ deployContract node_modules/@midnight-ntwrk/midnight-js-contracts/src/deploy-contract.ts:132:23%0A ❯ run-test.spec.ts:98:34%0A%0A
