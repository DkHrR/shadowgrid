
[1m[30m[46m RUN [49m[39m[22m [36mv4.1.11 [39m[90m/home/runner/work/shadowgrid/shadowgrid[39m

 [31m❯[39m run-test.spec.ts [2m([22m[2m0 test[22m[2m)[22m

[31m⎯⎯⎯⎯⎯⎯[39m[1m[41m Failed Suites 1 [49m[22m[31m⎯⎯⎯⎯⎯⎯⎯[39m

[41m[1m FAIL [22m[49m run-test.spec.ts[2m [ run-test.spec.ts ][22m
[31m[1mError[22m: Cannot find package '@midnight-ntwrk/testkit-js' imported from /home/runner/work/shadowgrid/shadowgrid/run-test.spec.ts[39m
[36m [2m❯[22m run-test.spec.ts:[2m1:1[22m[39m
    [90m  1|[39m [35mimport[39m { getTestEnvironment } [35mfrom[39m [32m'@midnight-ntwrk/testkit-js'[39m[33m;[39m
    [90m   |[39m [31m^[39m
    [90m  2|[39m import { levelPrivateStateProvider } from '@midnight-ntwrk/midnight-js…
    [90m  3|[39m import { indexerPublicDataProvider } from '@midnight-ntwrk/midnight-js…

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯[22m[39m


[2m Test Files [22m [1m[31m1 failed[39m[22m[90m (1)[39m
[2m      Tests [22m [2mno tests[22m
[2m   Start at [22m 15:29:32
[2m   Duration [22m 157ms[2m (transform 30ms, setup 0ms, import 0ms, tests 0ms, environment 0ms)[22m


::error file=/home/runner/work/shadowgrid/shadowgrid/run-test.spec.ts,title=run-test.spec.ts,line=1,column=1::Error: Cannot find package '@midnight-ntwrk/testkit-js' imported from /home/runner/work/shadowgrid/shadowgrid/run-test.spec.ts%0A ❯ run-test.spec.ts:1:1%0A%0A⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯%0ASerialized Error: { code: 'ERR_MODULE_NOT_FOUND' }%0A
