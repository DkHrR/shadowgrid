Trying to compile: shadowgrid.compact dist
Using compactc binary...
Using Compact version 0.31.1 from /home/runner/work/shadowgrid/shadowgrid/node_modules/@midnight-ntwrk/midnight-js-compact/managed/0.31.1
Compiling 3 circuits:
Child process exited with code 0

[1m[30m[46m RUN [49m[39m[22m [36mv4.1.11 [39m[90m/home/runner/work/shadowgrid/shadowgrid[39m

Sourcemap for "/home/runner/work/shadowgrid/shadowgrid/dist/contract/index.js" points to missing source files
{"level":30,"time":1788001163641,"pid":2891,"hostname":"runnervmgx7h7","msg":"Starting test environment... path=/home/runner/work/shadowgrid/shadowgrid, file=compose.yml, uid=7778168688178405"}
 [31m❯[39m run-test.spec.ts [2m([22m[2m1 test[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 5160[2mms[22m[39m
[31m   [31m×[31m E2E Runtime verification[39m[33m 5158[2mms[22m[39m

[31m⎯⎯⎯⎯⎯⎯⎯[39m[1m[41m Failed Tests 1 [49m[22m[31m⎯⎯⎯⎯⎯⎯⎯[39m

[41m[1m FAIL [22m[49m run-test.spec.ts[2m > [22mE2E Runtime verification
[31m[1mError[22m: time="2026-08-29T10:59:27Z" level=warning msg="/home/runner/work/shadowgrid/shadowgrid/compose.yml: the attribute `version` is obsolete, it will be ignored, please remove it to avoid potential confusion"
 proof-server Pulling 
 node Pulling 
 indexer Pulling 
 node Error manifest for midnightntwrk/midnight-node:latest not found: manifest unknown: manifest unknown
 proof-server  Interrupted
 indexer  Interrupted
Error response from daemon: manifest for midnightntwrk/midnight-node:latest not found: manifest unknown: manifest unknown[39m
[90m [2m❯[22m handleAndRethrow node_modules/testcontainers/build/container-runtime/clients/compose/compose-client.js:[2m104:48[22m[39m
[90m [2m❯[22m DockerComposeClient.up node_modules/testcontainers/build/container-runtime/clients/compose/compose-client.js:[2m36:19[22m[39m
[90m [2m❯[22m DockerComposeEnvironment.up node_modules/testcontainers/build/docker-compose-environment/docker-compose-environment.js:[2m112:9[22m[39m
[90m [2m❯[22m LocalTestEnvironment.start node_modules/@midnight-ntwrk/testkit-js/src/test-environment/test-environments/local-test-environment.ts:[2m170:21[22m[39m
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
[2m   Start at [22m 10:59:20
[2m   Duration [22m 7.80s[2m (transform 86ms, setup 0ms, import 2.50s, tests 5.16s, environment 0ms)[22m


::error file=/home/runner/work/shadowgrid/shadowgrid/run-test.spec.ts,title=run-test.spec.ts > E2E Runtime verification,line=45,column=23::Error: time="2026-08-29T10:59:27Z" level=warning msg="/home/runner/work/shadowgrid/shadowgrid/compose.yml: the attribute `version` is obsolete, it will be ignored, please remove it to avoid potential confusion"%0A proof-server Pulling %0A node Pulling %0A indexer Pulling %0A node Error manifest for midnightntwrk/midnight-node:latest not found: manifest unknown: manifest unknown%0A proof-server  Interrupted%0A indexer  Interrupted%0AError response from daemon: manifest for midnightntwrk/midnight-node:latest not found: manifest unknown: manifest unknown%0A ❯ handleAndRethrow node_modules/testcontainers/build/container-runtime/clients/compose/compose-client.js:104:48%0A ❯ DockerComposeClient.up node_modules/testcontainers/build/container-runtime/clients/compose/compose-client.js:36:19%0A ❯ DockerComposeEnvironment.up node_modules/testcontainers/build/docker-compose-environment/docker-compose-environment.js:112:9%0A ❯ LocalTestEnvironment.start node_modules/@midnight-ntwrk/testkit-js/src/test-environment/test-environments/local-test-environment.ts:170:21%0A ❯ run-test.spec.ts:45:23%0A%0A
