Trying to compile: shadowgrid.compact dist
Using compactc binary...
Using Compact version 0.31.1 from /home/runner/work/shadowgrid/shadowgrid/node_modules/@midnight-ntwrk/midnight-js-compact/managed/0.31.1
Compiling 3 circuits:
Child process exited with code 0

[1m[30m[46m RUN [49m[39m[22m [36mv4.1.11 [39m[90m/home/runner/work/shadowgrid/shadowgrid[39m

Sourcemap for "/home/runner/work/shadowgrid/shadowgrid/dist/contract/index.js" points to missing source files
{"level":30,"time":1788002421927,"pid":2893,"hostname":"runnervmgx7h7","msg":"Starting test environment... path=/home/runner/work/shadowgrid/shadowgrid, file=compose.yml, uid=3782854457562735"}
[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m[DelayedWaitStrategy] Starting 20000ms delay before health check...

[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m[DelayedWaitStrategy] Delay complete, now checking health...

[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m[DelayedWaitStrategy] Health check passed

{"level":30,"time":1788002467020,"pid":2893,"hostname":"runnervmgx7h7","msg":"Test environment configuration: {\"walletNetworkId\":\"undeployed\",\"networkId\":\"undeployed\",\"indexer\":\"http://127.0.0.1:8088/api/v4/graphql\",\"indexerWS\":\"ws://127.0.0.1:8088/api/v4/graphql/ws\",\"node\":\"http://127.0.0.1:9944\",\"nodeWS\":\"ws://127.0.0.1:9944\",\"proofServer\":\"http://127.0.0.1:6300\"}"}
[11:21:07.020] [32mINFO[39m (2893): [36mInitializing wallet builder for undeployed[39m
[11:21:07.108] [32mINFO[39m (2893): [36mCreating dust wallet with params: {"indexerClientConnection":{"indexerHttpUrl":"http://127.0.0.1:8088/api/v4/graphql","indexerWsUrl":"ws://127.0.0.1:8088/api/v4/graphql/ws"},"provingServerUrl":"http://127.0.0.1:6300/","networkId":"undeployed","relayURL":"ws://127.0.0.1:9944/","txHistoryStorage":{"storage":{}},"costParameters":{"ledgerParams":{"__wbg_ptr":4654560},"additionalFeeOverhead":"500000000000000000","feeBlocksMargin":5}}[39m
{"level":30,"time":1788002467131,"pid":2893,"hostname":"runnervmgx7h7","msg":"Your wallet seed is: 0000000000000000000000000000000000000000000000000000000000000001 and your address is: mock-address"}
{"level":30,"time":1788002467131,"pid":2893,"hostname":"runnervmgx7h7","msg":"Starting wallet..."}
[90mstderr[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m2026-08-29 11:21:07        RPC-CORE: subscribeRuntimeVersion(): RuntimeVersion:: disconnected from ws://127.0.0.1:9944/: 1000:: Normal Closure

[90mstderr[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m2026-08-29 11:21:07        RPC-CORE: subscribeRuntimeVersion(): RuntimeVersion:: disconnected from ws://127.0.0.1:9944/: 1000:: Normal Closure

 [31m❯[39m run-test.spec.ts [2m([22m[2m1 test[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 55333[2mms[22m[39m
[31m   [31m×[31m E2E Runtime verification[39m[33m 55331[2mms[22m[39m

[31m⎯⎯⎯⎯⎯⎯⎯[39m[1m[41m Failed Tests 1 [49m[22m[31m⎯⎯⎯⎯⎯⎯⎯[39m

[41m[1m FAIL [22m[49m run-test.spec.ts[2m > [22mE2E Runtime verification
[31m[1mError[22m: Unexpected error: CompactError: first (witnesses) argument to Contract constructor is not an object
    at new Contract (/home/runner/work/shadowgrid/shadowgrid/dist/contract/index.js:85:13)
    at file:///home/runner/work/shadowgrid/shadowgrid/node_modules/@midnight-ntwrk/compact-js/dist/esm/effect/internal/compactContext.js:25:12
    at file:///home/runner/work/shadowgrid/shadowgrid/node_modules/effect/dist/esm/internal/fiberRuntime.js:945:41[39m
[36m [2m❯[22m new Contract dist/contract/index.js:[2m85:13[22m[39m
    [90m 83|[39m     [35mthis[39m[33m.[39mcircuits [33m=[39m {
    [90m 84|[39m       create_game[33m:[39m ([33m...[39margs_1) [33m=>[39m {
    [90m 85|[39m         [35mif[39m (args_1[33m.[39mlength [33m!==[39m [34m4[39m) {
    [90m   |[39m             [31m^[39m
    [90m 86|[39m           throw new __compactRuntime.CompactError(`create_game: expect…
    [90m 87|[39m         }
[90m [2m❯[22m node_modules/@midnight-ntwrk/compact-js/src/effect/internal/compactContext.ts:[2m47:11[22m[39m
[90m [2m❯[22m effect_instruction_i0 node_modules/effect/src/internal/fiberRuntime.ts:[2m1161:40[22m[39m
[90m [2m❯[22m onFailure node_modules/@midnight-ntwrk/midnight-js-types/src/contract.ts:[2m113:12[22m[39m
[90m [2m❯[22m onFailure node_modules/effect/src/internal/core.ts:[2m2663:13[22m[39m
[90m [2m❯[22m body node_modules/effect/src/Function.ts:[2m245:17[22m[39m
[90m [2m❯[22m exitResultOrError node_modules/@midnight-ntwrk/midnight-js-types/src/contract.ts:[2m109:17[22m[39m
[90m [2m❯[22m createUnprovenDeployTxFromVerifierKeys node_modules/@midnight-ntwrk/midnight-js-contracts/src/unproven-deploy-tx.ts:[2m136:8[22m[39m
[90m [2m❯[22m submitDeployTx node_modules/@midnight-ntwrk/midnight-js-contracts/src/submit-deploy-tx.ts:[2m93:31[22m[39m
[90m [2m❯[22m deployContract node_modules/@midnight-ntwrk/midnight-js-contracts/src/deploy-contract.ts:[2m132:23[22m[39m
[90m [2m❯[22m run-test.spec.ts:[2m80:30[22m[39m

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯[22m[39m


[2m Test Files [22m [1m[31m1 failed[39m[22m[90m (1)[39m
[2m      Tests [22m [1m[31m1 failed[39m[22m[90m (1)[39m
[2m   Start at [22m 11:20:19
[2m   Duration [22m 58.00s[2m (transform 101ms, setup 0ms, import 2.51s, tests 55.33s, environment 0ms)[22m


::error file=/home/runner/work/shadowgrid/shadowgrid/dist/contract/index.js,title=run-test.spec.ts > E2E Runtime verification,line=85,column=13::Error: Unexpected error: CompactError: first (witnesses) argument to Contract constructor is not an object%0A    at new Contract (/home/runner/work/shadowgrid/shadowgrid/dist/contract/index.js:85:13)%0A    at file:///home/runner/work/shadowgrid/shadowgrid/node_modules/@midnight-ntwrk/compact-js/dist/esm/effect/internal/compactContext.js:25:12%0A    at file:///home/runner/work/shadowgrid/shadowgrid/node_modules/effect/dist/esm/internal/fiberRuntime.js:945:41%0A ❯ new Contract dist/contract/index.js:85:13%0A ❯ node_modules/@midnight-ntwrk/compact-js/src/effect/internal/compactContext.ts:47:11%0A ❯ effect_instruction_i0 node_modules/effect/src/internal/fiberRuntime.ts:1161:40%0A ❯ onFailure node_modules/@midnight-ntwrk/midnight-js-types/src/contract.ts:113:12%0A ❯ onFailure node_modules/effect/src/internal/core.ts:2663:13%0A ❯ body node_modules/effect/src/Function.ts:245:17%0A ❯ exitResultOrError node_modules/@midnight-ntwrk/midnight-js-types/src/contract.ts:109:17%0A ❯ createUnprovenDeployTxFromVerifierKeys node_modules/@midnight-ntwrk/midnight-js-contracts/src/unproven-deploy-tx.ts:136:8%0A ❯ submitDeployTx node_modules/@midnight-ntwrk/midnight-js-contracts/src/submit-deploy-tx.ts:93:31%0A ❯ deployContract node_modules/@midnight-ntwrk/midnight-js-contracts/src/deploy-contract.ts:132:23%0A ❯ run-test.spec.ts:80:30%0A%0A
