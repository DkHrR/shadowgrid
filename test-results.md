
[1m[30m[46m RUN [49m[39m[22m [36mv4.1.11 [39m[90m/home/runner/work/shadowgrid/shadowgrid[39m

Sourcemap for "/home/runner/work/shadowgrid/shadowgrid/dist/contract/index.js" points to missing source files
 [31m❯[39m run-test.spec.ts [2m([22m[2m1 test[22m[2m | [22m[31m1 failed[39m[2m)[22m[32m 55[2mms[22m[39m
[31m   [31m×[31m E2E Runtime verification[39m[32m 53[2mms[22m[39m

[31m⎯⎯⎯⎯⎯⎯⎯[39m[1m[41m Failed Tests 1 [49m[22m[31m⎯⎯⎯⎯⎯⎯⎯[39m

[41m[1m FAIL [22m[49m run-test.spec.ts[2m > [22mE2E Runtime verification
[31m[1mTypeError[22m: crypto.randomBytes is not a function[39m
[36m [2m❯[22m run-test.spec.ts:[2m34:27[22m[39m
    [90m 32|[39m     [35mlet[39m witnessState [33m=[39m {
    [90m 33|[39m         game_id[33m:[39m [34m1n[39m[33m,[39m
    [90m 34|[39m         player_id[33m:[39m crypto[33m.[39m[34mrandomBytes[39m([34m32[39m)[33m,[39m
    [90m   |[39m                           [31m^[39m
    [90m 35|[39m         x[33m:[39m [34m2n[39m[33m,[39m
    [90m 36|[39m         y[33m:[39m [34m2n[39m[33m,[39m

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯[22m[39m


[2m Test Files [22m [1m[31m1 failed[39m[22m[90m (1)[39m
[2m      Tests [22m [1m[31m1 failed[39m[22m[90m (1)[39m
[2m   Start at [22m 03:00:59
[2m   Duration [22m 2.73s[2m (transform 99ms, setup 0ms, import 2.55s, tests 55ms, environment 0ms)[22m


::error file=/home/runner/work/shadowgrid/shadowgrid/run-test.spec.ts,title=run-test.spec.ts > E2E Runtime verification,line=34,column=27::TypeError: crypto.randomBytes is not a function%0A ❯ run-test.spec.ts:34:27%0A%0A
