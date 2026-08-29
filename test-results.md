
[1m[30m[46m RUN [49m[39m[22m [36mv4.1.11 [39m[90m/home/runner/work/shadowgrid/shadowgrid[39m

Sourcemap for "/home/runner/work/shadowgrid/shadowgrid/dist/contract/index.js" points to missing source files
{"level":30,"time":1788021386736,"pid":2680,"hostname":"runnervmgx7h7","msg":"Starting test environment... path=/home/runner/work/shadowgrid/shadowgrid, file=compose.yml, uid=2558771286380485"}
[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m[DelayedWaitStrategy] Starting 20000ms delay before health check...

[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m[DelayedWaitStrategy] Delay complete, now checking health...

[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m[DelayedWaitStrategy] Health check passed

{"level":30,"time":1788021438906,"pid":2680,"hostname":"runnervmgx7h7","msg":"Test environment configuration: {\"walletNetworkId\":\"undeployed\",\"networkId\":\"undeployed\",\"indexer\":\"http://127.0.0.1:8088/api/v4/graphql\",\"indexerWS\":\"ws://127.0.0.1:8088/api/v4/graphql/ws\",\"node\":\"http://127.0.0.1:9944\",\"nodeWS\":\"ws://127.0.0.1:9944\",\"proofServer\":\"http://127.0.0.1:6300\"}"}
{"level":30,"time":1788021438909,"pid":2680,"hostname":"runnervmgx7h7","msg":"Deploying contract..."}
{"level":30,"time":1788021438911,"pid":2680,"hostname":"runnervmgx7h7","msg":"Shutting down test environment..."}
 [31m❯[39m run-test.spec.ts [2m([22m[2m1 test[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 53510[2mms[22m[39m
[31m   [31m×[31m E2E Runtime verification[39m[33m 53509[2mms[22m[39m

[31m⎯⎯⎯⎯⎯⎯⎯[39m[1m[41m Failed Tests 1 [49m[22m[31m⎯⎯⎯⎯⎯⎯⎯[39m

[41m[1m FAIL [22m[49m run-test.spec.ts[2m > [22mE2E Runtime verification
[31m[1mTypeError[22m: Cannot read properties of undefined (reading 'coinPublicKey')[39m
[36m [2m❯[22m MidnightWalletProvider.getCoinPublicKey midnight-wallet-provider.ts:[2m66:33[22m[39m
    [90m 64|[39m
    [90m 65|[39m   [34mgetCoinPublicKey[39m()[33m:[39m [33mCoinPublicKey[39m {
    [90m 66|[39m     [35mreturn[39m [35mthis[39m[33m.[39mzswapSecretKeys[33m.[39mcoinPublicKey[33m;[39m
    [90m   |[39m                                 [31m^[39m
    [90m 67|[39m   }
    [90m 68|[39m
[90m [2m❯[22m createUnprovenDeployTx node_modules/@midnight-ntwrk/midnight-js-contracts/src/unproven-deploy-tx.ts:[2m206:53[22m[39m
[90m [2m❯[22m submitDeployTx node_modules/@midnight-ntwrk/midnight-js-contracts/src/submit-deploy-tx.ts:[2m93:37[22m[39m
[90m [2m❯[22m deployContract node_modules/@midnight-ntwrk/midnight-js-contracts/src/deploy-contract.ts:[2m132:29[22m[39m
[90m [2m❯[22m run-test.spec.ts:[2m94:40[22m[39m

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯[22m[39m


[2m Test Files [22m [1m[31m1 failed[39m[22m[90m (1)[39m
[2m      Tests [22m [1m[31m1 failed[39m[22m[90m (1)[39m
[2m   Start at [22m 16:36:24
[2m   Duration [22m 55.45s[2m (transform 76ms, setup 0ms, import 1.81s, tests 53.51s, environment 0ms)[22m


::error file=/home/runner/work/shadowgrid/shadowgrid/midnight-wallet-provider.ts,title=run-test.spec.ts > E2E Runtime verification,line=66,column=33::TypeError: Cannot read properties of undefined (reading 'coinPublicKey')%0A ❯ MidnightWalletProvider.getCoinPublicKey midnight-wallet-provider.ts:66:33%0A ❯ createUnprovenDeployTx node_modules/@midnight-ntwrk/midnight-js-contracts/src/unproven-deploy-tx.ts:206:53%0A ❯ submitDeployTx node_modules/@midnight-ntwrk/midnight-js-contracts/src/submit-deploy-tx.ts:93:37%0A ❯ deployContract node_modules/@midnight-ntwrk/midnight-js-contracts/src/deploy-contract.ts:132:29%0A ❯ run-test.spec.ts:94:40%0A%0A
