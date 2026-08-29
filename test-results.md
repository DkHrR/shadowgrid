Trying to compile: shadowgrid.compact dist
Using compactc binary...
Using Compact version 0.31.1 from /home/runner/work/shadowgrid/shadowgrid/node_modules/@midnight-ntwrk/midnight-js-compact/managed/0.31.1
Compiling 3 circuits:
Child process exited with code 0

[1m[30m[46m RUN [49m[39m[22m [36mv4.1.11 [39m[90m/home/runner/work/shadowgrid/shadowgrid[39m

Sourcemap for "/home/runner/work/shadowgrid/shadowgrid/dist/contract/index.js" points to missing source files
{"level":30,"time":1788003388525,"pid":2896,"hostname":"runnervmgx7h7","msg":"Starting test environment... path=/home/runner/work/shadowgrid/shadowgrid, file=compose.yml, uid=7429093666528228"}
[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m[DelayedWaitStrategy] Starting 20000ms delay before health check...

[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m[DelayedWaitStrategy] Delay complete, now checking health...

[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m[DelayedWaitStrategy] Health check passed

{"level":30,"time":1788003430309,"pid":2896,"hostname":"runnervmgx7h7","msg":"Test environment configuration: {\"walletNetworkId\":\"undeployed\",\"networkId\":\"undeployed\",\"indexer\":\"http://127.0.0.1:8088/api/v4/graphql\",\"indexerWS\":\"ws://127.0.0.1:8088/api/v4/graphql/ws\",\"node\":\"http://127.0.0.1:9944\",\"nodeWS\":\"ws://127.0.0.1:9944\",\"proofServer\":\"http://127.0.0.1:6300\"}"}
[11:37:10.309] [32mINFO[39m (2896): [36mInitializing wallet builder for undeployed[39m
[11:37:10.402] [32mINFO[39m (2896): [36mCreating dust wallet with params: {"indexerClientConnection":{"indexerHttpUrl":"http://127.0.0.1:8088/api/v4/graphql","indexerWsUrl":"ws://127.0.0.1:8088/api/v4/graphql/ws"},"provingServerUrl":"http://127.0.0.1:6300/","networkId":"undeployed","relayURL":"ws://127.0.0.1:9944/","txHistoryStorage":{"storage":{}},"costParameters":{"ledgerParams":{"__wbg_ptr":4654560},"additionalFeeOverhead":"500000000000000000","feeBlocksMargin":5}}[39m
{"level":30,"time":1788003430427,"pid":2896,"hostname":"runnervmgx7h7","msg":"Your wallet seed is: 0000000000000000000000000000000000000000000000000000000000000001 and your address is: mock-address"}
{"level":30,"time":1788003430427,"pid":2896,"hostname":"runnervmgx7h7","msg":"Starting wallet..."}
[90mstderr[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m2026-08-29 11:37:10        RPC-CORE: subscribeRuntimeVersion(): RuntimeVersion:: disconnected from ws://127.0.0.1:9944/: 1000:: Normal Closure

[90mstderr[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m2026-08-29 11:37:10        RPC-CORE: subscribeRuntimeVersion(): RuntimeVersion:: disconnected from ws://127.0.0.1:9944/: 1000:: Normal Closure

 [31m❯[39m run-test.spec.ts [2m([22m[2m1 test[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 70317[2mms[22m[39m
[31m   [31m×[31m E2E Runtime verification[39m[33m 70316[2mms[22m[39m

[31m⎯⎯⎯⎯⎯⎯⎯[39m[1m[41m Failed Tests 1 [49m[22m[31m⎯⎯⎯⎯⎯⎯⎯[39m

[41m[1m FAIL [22m[49m run-test.spec.ts[2m > [22mE2E Runtime verification
[31m[1mPasswordValidationError[22m: Password contains sequential patterns (e.g., '1234', 'abcd'). Use a more random password[39m
[90m [2m❯[22m validatePassword node_modules/@midnight-ntwrk/midnight-js-utils/src/password-validation.ts:[2m136:10[22m[39m
[90m [2m❯[22m getPasswordFromProvider node_modules/@midnight-ntwrk/midnight-js-level-private-state-provider/src/storage-encryption.ts:[2m213:2[22m[39m
[90m [2m❯[22m getOrCreateEncryption node_modules/@midnight-ntwrk/midnight-js-level-private-state-provider/src/level-private-state-provider.ts:[2m294:19[22m[39m
[90m [2m❯[22m Object.set node_modules/@midnight-ntwrk/midnight-js-level-private-state-provider/src/level-private-state-provider.ts:[2m802:25[22m[39m
[90m [2m❯[22m submitDeployTx node_modules/@midnight-ntwrk/midnight-js-contracts/src/submit-deploy-tx.ts:[2m102:4[22m[39m
[90m [2m❯[22m deployContract node_modules/@midnight-ntwrk/midnight-js-contracts/src/deploy-contract.ts:[2m132:23[22m[39m
[36m [2m❯[22m run-test.spec.ts:[2m80:30[22m[39m
    [90m 78|[39m     }[33m;[39m
    [90m 79|[39m
    [90m 80|[39m     [35mconst[39m deployedContract [33m=[39m [35mawait[39m [34mdeployContract[39m(providers[33m,[39m {
    [90m   |[39m                              [31m^[39m
    [90m 81|[39m         compiledContract[33m:[39m [33mCompiledShadowgridContract[39m[33m,[39m
    [90m 82|[39m         privateStateId[33m:[39m [32m'test-private-state'[39m[33m,[39m

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯[22m[39m


[2m Test Files [22m [1m[31m1 failed[39m[22m[90m (1)[39m
[2m      Tests [22m [1m[31m1 failed[39m[22m[90m (1)[39m
[2m   Start at [22m 11:36:25
[2m   Duration [22m 72.99s[2m (transform 103ms, setup 0ms, import 2.52s, tests 70.32s, environment 0ms)[22m


::error file=/home/runner/work/shadowgrid/shadowgrid/run-test.spec.ts,title=run-test.spec.ts > E2E Runtime verification,line=80,column=30::PasswordValidationError: Password contains sequential patterns (e.g., '1234', 'abcd'). Use a more random password%0A ❯ validatePassword node_modules/@midnight-ntwrk/midnight-js-utils/src/password-validation.ts:136:10%0A ❯ getPasswordFromProvider node_modules/@midnight-ntwrk/midnight-js-level-private-state-provider/src/storage-encryption.ts:213:2%0A ❯ getOrCreateEncryption node_modules/@midnight-ntwrk/midnight-js-level-private-state-provider/src/level-private-state-provider.ts:294:19%0A ❯ Object.set node_modules/@midnight-ntwrk/midnight-js-level-private-state-provider/src/level-private-state-provider.ts:802:25%0A ❯ submitDeployTx node_modules/@midnight-ntwrk/midnight-js-contracts/src/submit-deploy-tx.ts:102:4%0A ❯ deployContract node_modules/@midnight-ntwrk/midnight-js-contracts/src/deploy-contract.ts:132:23%0A ❯ run-test.spec.ts:80:30%0A%0A⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯%0ASerialized Error: { reason: 'sequential_pattern' }%0A
