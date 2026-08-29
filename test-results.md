Trying to compile: shadowgrid.compact dist
Using compactc binary...
Using Compact version 0.31.1 from /home/runner/work/shadowgrid/shadowgrid/node_modules/@midnight-ntwrk/midnight-js-compact/managed/0.31.1
Compiling 3 circuits:
Child process exited with code 0

[1m[30m[46m RUN [49m[39m[22m [36mv4.1.11 [39m[90m/home/runner/work/shadowgrid/shadowgrid[39m

Sourcemap for "/home/runner/work/shadowgrid/shadowgrid/dist/contract/index.js" points to missing source files
{"level":30,"time":1788000398831,"pid":2903,"hostname":"runnervmgx7h7","msg":"Starting test environment... path=/home/runner/work/shadowgrid/shadowgrid, file=compose.yml, uid=924923158946426"}
 [31m❯[39m run-test.spec.ts [2m([22m[2m1 test[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 9576[2mms[22m[39m
[31m   [31m×[31m E2E Runtime verification[39m[33m 9574[2mms[22m[39m

[31m⎯⎯⎯⎯⎯⎯⎯[39m[1m[41m Failed Tests 1 [49m[22m[31m⎯⎯⎯⎯⎯⎯⎯[39m

[41m[1m FAIL [22m[49m run-test.spec.ts[2m > [22mE2E Runtime verification
[31m[1mError[22m: Cannot get container "indexer_924923158946426" as it is not running[39m
[90m [2m❯[22m StartedDockerComposeEnvironment.getContainer node_modules/testcontainers/build/docker-compose-environment/started-docker-compose-environment.js:[2m31:19[22m[39m
[90m [2m❯[22m LocalTestEnvironment.getMappedPorts node_modules/@midnight-ntwrk/testkit-js/src/test-environment/test-environments/local-test-environment.ts:[2m124:7[22m[39m
[90m [2m❯[22m LocalTestEnvironment.start node_modules/@midnight-ntwrk/testkit-js/src/test-environment/test-environments/local-test-environment.ts:[2m182:68[22m[39m
[36m [2m❯[22m run-test.spec.ts:[2m45:23[22m[39m
    [90m 43|[39m
    [90m 44|[39m     [35mconst[39m testEnv [33m=[39m [34mgetTestEnvironment[39m(logger)[33m;[39m
    [90m 45|[39m     [35mconst[39m envConfig [33m=[39m [35mawait[39m testEnv[33m.[39m[34mstart[39m()[33m;[39m
    [90m   |[39m                       [31m^[39m
    [90m 46|[39m     const GENESIS_MINT_WALLET_SEED = '00000000000000000000000000000000…
    [90m 47|[39m     const walletProvider = await MidnightWalletProvider.build(logger, …

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯[22m[39m


[2m Test Files [22m [1m[31m1 failed[39m[22m[90m (1)[39m
[2m      Tests [22m [1m[31m1 failed[39m[22m[90m (1)[39m
[2m   Start at [22m 10:46:36
[2m   Duration [22m 12.33s[2m (transform 105ms, setup 0ms, import 2.61s, tests 9.58s, environment 0ms)[22m


::error file=/home/runner/work/shadowgrid/shadowgrid/run-test.spec.ts,title=run-test.spec.ts > E2E Runtime verification,line=45,column=23::Error: Cannot get container "indexer_924923158946426" as it is not running%0A ❯ StartedDockerComposeEnvironment.getContainer node_modules/testcontainers/build/docker-compose-environment/started-docker-compose-environment.js:31:19%0A ❯ LocalTestEnvironment.getMappedPorts node_modules/@midnight-ntwrk/testkit-js/src/test-environment/test-environments/local-test-environment.ts:124:7%0A ❯ LocalTestEnvironment.start node_modules/@midnight-ntwrk/testkit-js/src/test-environment/test-environments/local-test-environment.ts:182:68%0A ❯ run-test.spec.ts:45:23%0A%0A
