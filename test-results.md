
[1m[30m[46m RUN [49m[39m[22m [36mv4.1.11 [39m[90m/home/runner/work/shadowgrid/shadowgrid[39m

Sourcemap for "/home/runner/work/shadowgrid/shadowgrid/dist/contract/index.js" points to missing source files
{"level":30,"time":1787989893129,"pid":2829,"hostname":"runnervmgx7h7","msg":"Starting test environment... path=/home/runner/work/shadowgrid/shadowgrid, file=compose.yml, uid=4448451374800728"}
 [31m❯[39m run-test.spec.ts [2m([22m[2m1 test[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 3890[2mms[22m[39m
[31m   [31m×[31m E2E Runtime verification[39m[33m 3889[2mms[22m[39m

[31m⎯⎯⎯⎯⎯⎯⎯[39m[1m[41m Failed Tests 1 [49m[22m[31m⎯⎯⎯⎯⎯⎯⎯[39m

[41m[1m FAIL [22m[49m run-test.spec.ts[2m > [22mE2E Runtime verification
[31m[1mError[22m: open /home/runner/work/shadowgrid/shadowgrid/compose.yml: no such file or directory[39m
[90m [2m❯[22m handleAndRethrow node_modules/testcontainers/build/container-runtime/clients/compose/compose-client.js:[2m104:48[22m[39m
[90m [2m❯[22m DockerComposeClient.up node_modules/testcontainers/build/container-runtime/clients/compose/compose-client.js:[2m36:19[22m[39m
[90m [2m❯[22m DockerComposeEnvironment.up node_modules/testcontainers/build/docker-compose-environment/docker-compose-environment.js:[2m112:9[22m[39m
[90m [2m❯[22m LocalTestEnvironment.start node_modules/@midnight-ntwrk/testkit-js/src/test-environment/test-environments/local-test-environment.ts:[2m170:21[22m[39m
[36m [2m❯[22m run-test.spec.ts:[2m51:23[22m[39m
    [90m 49|[39m
    [90m 50|[39m     [35mconst[39m testEnv [33m=[39m [34mgetTestEnvironment[39m(logger)[33m;[39m
    [90m 51|[39m     [35mconst[39m envConfig [33m=[39m [35mawait[39m testEnv[33m.[39m[34mstart[39m()[33m;[39m
    [90m   |[39m                       [31m^[39m
    [90m 52|[39m     const GENESIS_MINT_WALLET_SEED = '00000000000000000000000000000000…
    [90m 53|[39m     const walletProvider = await MidnightWalletProvider.build(logger, …

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯[22m[39m


[2m Test Files [22m [1m[31m1 failed[39m[22m[90m (1)[39m
[2m      Tests [22m [1m[31m1 failed[39m[22m[90m (1)[39m
[2m   Start at [22m 07:51:30
[2m   Duration [22m 6.81s[2m (transform 89ms, setup 0ms, import 2.75s, tests 3.89s, environment 0ms)[22m


::error file=/home/runner/work/shadowgrid/shadowgrid/run-test.spec.ts,title=run-test.spec.ts > E2E Runtime verification,line=51,column=23::Error: open /home/runner/work/shadowgrid/shadowgrid/compose.yml: no such file or directory%0A ❯ handleAndRethrow node_modules/testcontainers/build/container-runtime/clients/compose/compose-client.js:104:48%0A ❯ DockerComposeClient.up node_modules/testcontainers/build/container-runtime/clients/compose/compose-client.js:36:19%0A ❯ DockerComposeEnvironment.up node_modules/testcontainers/build/docker-compose-environment/docker-compose-environment.js:112:9%0A ❯ LocalTestEnvironment.start node_modules/@midnight-ntwrk/testkit-js/src/test-environment/test-environments/local-test-environment.ts:170:21%0A ❯ run-test.spec.ts:51:23%0A%0A
