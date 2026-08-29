
[1m[30m[46m RUN [49m[39m[22m [36mv4.1.11 [39m[90m/home/runner/work/shadowgrid/shadowgrid[39m

Sourcemap for "/home/runner/work/shadowgrid/shadowgrid/dist/contract/index.js" points to missing source files
{"level":30,"time":1787989771240,"pid":2907,"hostname":"runnervmgx7h7","msg":"Starting test environment... path=/home/runner/work/shadowgrid/shadowgrid, file=compose.yml, uid=3250187244780772"}
 [31m❯[39m run-test.spec.ts [2m([22m[2m1 test[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 5005[2mms[22m[39m
[31m   [31m×[31m E2E Runtime verification[39m[33m 5004[2mms[22m[39m

[31m⎯⎯⎯⎯⎯⎯⎯[39m[1m[41m Failed Tests 1 [49m[22m[31m⎯⎯⎯⎯⎯⎯⎯[39m

[41m[1m FAIL [22m[49m run-test.spec.ts[2m > [22mE2E Runtime verification
[31m[1mError[22m: Test timed out in 5000ms.
If this is a long-running test, pass a timeout value as the last argument or configure it globally with "testTimeout".[39m
[36m [2m❯[22m run-test.spec.ts:[2m16:1[22m[39m
    [90m 14|[39m
    [90m 15|[39m [35mimport[39m { test } [35mfrom[39m [32m'vitest'[39m[33m;[39m
    [90m 16|[39m [34mtest[39m([32m'E2E Runtime verification'[39m[33m,[39m [35masync[39m () [33m=>[39m {
    [90m   |[39m [31m^[39m
    [90m 17|[39m     [35mconst[39m logger [33m=[39m [34mpino[39m({ level[33m:[39m [32m'info'[39m })[33m;[39m
    [90m 18|[39m

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯[22m[39m


[2m Test Files [22m [1m[31m1 failed[39m[22m[90m (1)[39m
[2m      Tests [22m [1m[31m1 failed[39m[22m[90m (1)[39m
[2m   Start at [22m 07:49:28
[2m   Duration [22m 7.69s[2m (transform 100ms, setup 0ms, import 2.55s, tests 5.01s, environment 0ms)[22m


::error file=/home/runner/work/shadowgrid/shadowgrid/run-test.spec.ts,title=run-test.spec.ts > E2E Runtime verification,line=16,column=1::Error: Test timed out in 5000ms.%0AIf this is a long-running test, pass a timeout value as the last argument or configure it globally with "testTimeout".%0A ❯ run-test.spec.ts:16:1%0A%0A
