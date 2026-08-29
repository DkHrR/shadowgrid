
[1m[30m[46m RUN [49m[39m[22m [36mv4.1.11 [39m[90m/home/runner/work/shadowgrid/shadowgrid[39m

Sourcemap for "/home/runner/work/shadowgrid/shadowgrid/dist/contract/index.js" points to missing source files
{"level":30,"time":1788017765427,"pid":2817,"hostname":"runnervmgx7h7","msg":"Starting test environment... path=/home/runner/work/shadowgrid/shadowgrid, file=compose.yml, uid=5344723651236653"}
[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m[DelayedWaitStrategy] Starting 20000ms delay before health check...

[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m[DelayedWaitStrategy] Delay complete, now checking health...

[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m[DelayedWaitStrategy] Health check passed

{"level":30,"time":1788017809729,"pid":2817,"hostname":"runnervmgx7h7","msg":"Test environment configuration: {\"walletNetworkId\":\"undeployed\",\"networkId\":\"undeployed\",\"indexer\":\"http://127.0.0.1:8088/api/v4/graphql\",\"indexerWS\":\"ws://127.0.0.1:8088/api/v4/graphql/ws\",\"node\":\"http://127.0.0.1:9944\",\"nodeWS\":\"ws://127.0.0.1:9944\",\"proofServer\":\"http://127.0.0.1:6300\"}"}
 [31m❯[39m run-test.spec.ts [2m([22m[2m1 test[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 44381[2mms[22m[39m
[31m   [31m×[31m E2E Runtime verification[39m[33m 44379[2mms[22m[39m

[31m⎯⎯⎯⎯⎯⎯⎯[39m[1m[41m Failed Tests 1 [49m[22m[31m⎯⎯⎯⎯⎯⎯⎯[39m

[41m[1m FAIL [22m[49m run-test.spec.ts[2m > [22mE2E Runtime verification
[31m[1mTypeError[22m: Invalid URL[39m
[90m [2m❯[22m indexerPublicDataProviderInternal node_modules/@midnight-ntwrk/midnight-js-indexer-public-data-provider/src/indexer-public-data-provider.ts:[2m503:22[22m[39m
[90m [2m❯[22m indexerPublicDataProvider node_modules/@midnight-ntwrk/midnight-js-indexer-public-data-provider/src/indexer-public-data-provider.ts:[2m829:29[22m[39m
[36m [2m❯[22m run-test.spec.ts:[2m67:29[22m[39m
    [90m 65|[39m             accountId[33m:[39m [33mGENESIS_MINT_WALLET_SEED[39m
    [90m 66|[39m         })[33m,[39m
    [90m 67|[39m         publicDataProvider: indexerPublicDataProvider(envConfig.indexe…
    [90m   |[39m                             [31m^[39m
    [90m 68|[39m         zkConfigProvider: new NodeZkConfigProvider(path.resolve(distPa…
    [90m 69|[39m         proofProvider: httpClientProofProvider(envConfig.proofServerUr…

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯[22m[39m


[2m Test Files [22m [1m[31m1 failed[39m[22m[90m (1)[39m
[2m      Tests [22m [1m[31m1 failed[39m[22m[90m (1)[39m
[2m   Start at [22m 15:36:02
[2m   Duration [22m 46.83s[2m (transform 101ms, setup 0ms, import 2.33s, tests 44.38s, environment 0ms)[22m


::error file=/home/runner/work/shadowgrid/shadowgrid/run-test.spec.ts,title=run-test.spec.ts > E2E Runtime verification,line=67,column=29::TypeError: Invalid URL%0A ❯ indexerPublicDataProviderInternal node_modules/@midnight-ntwrk/midnight-js-indexer-public-data-provider/src/indexer-public-data-provider.ts:503:22%0A ❯ indexerPublicDataProvider node_modules/@midnight-ntwrk/midnight-js-indexer-public-data-provider/src/indexer-public-data-provider.ts:829:29%0A ❯ run-test.spec.ts:67:29%0A%0A⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯%0ASerialized Error: { code: 'ERR_INVALID_URL', input: 'undefined' }%0A
