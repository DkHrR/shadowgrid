
[1m[30m[46m RUN [49m[39m[22m [36mv4.1.11 [39m[90m/home/runner/work/shadowgrid/shadowgrid[39m

Sourcemap for "/home/runner/work/shadowgrid/shadowgrid/dist/contract/index.js" points to missing source files
 [31m❯[39m run-test.spec.ts [2m([22m[2m1 test[22m[2m | [22m[31m1 failed[39m[2m)[22m[32m 90[2mms[22m[39m
[31m   [31m×[31m E2E Runtime verification[39m[32m 89[2mms[22m[39m

[31m⎯⎯⎯⎯⎯⎯⎯[39m[1m[41m Failed Tests 1 [49m[22m[31m⎯⎯⎯⎯⎯⎯⎯[39m

[41m[1m FAIL [22m[49m run-test.spec.ts[2m > [22mE2E Runtime verification
[31m[1mTypeError[22m: Cannot redefine property: readFileSync[39m
[36m [2m❯[22m run-test.spec.ts:[2m69:17[22m[39m
    [90m 67|[39m
    [90m 68|[39m     [35mconst[39m originalReadFileSync [33m=[39m fs[33m.[39mreadFileSync[33m;[39m
    [90m 69|[39m     (fs as any).readFileSync = function (pathStr: string, ...args: any…
    [90m   |[39m                 [31m^[39m
    [90m 70|[39m         if (typeof pathStr === 'string' && (pathStr.includes('verify_m…
    [90m 71|[39m             console[33m.[39m[34mlog[39m([32m'--- DEBUG READ --- '[39m [33m+[39m pathStr)[33m;[39m

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯[22m[39m


[2m Test Files [22m [1m[31m1 failed[39m[22m[90m (1)[39m
[2m      Tests [22m [1m[31m1 failed[39m[22m[90m (1)[39m
[2m   Start at [22m 16:31:27
[2m   Duration [22m 2.80s[2m (transform 107ms, setup 0ms, import 2.59s, tests 90ms, environment 0ms)[22m


::error file=/home/runner/work/shadowgrid/shadowgrid/run-test.spec.ts,title=run-test.spec.ts > E2E Runtime verification,line=69,column=17::TypeError: Cannot redefine property: readFileSync%0A ❯ run-test.spec.ts:69:17%0A%0A
