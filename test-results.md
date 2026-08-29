Trying to compile: shadowgrid.compact dist
Using compactc binary...
Using Compact version 0.31.1 from /home/runner/work/shadowgrid/shadowgrid/node_modules/@midnight-ntwrk/midnight-js-compact/managed/0.31.1
Compiling 3 circuits:
Child process exited with code 0

[1m[30m[46m RUN [49m[39m[22m [36mv4.1.11 [39m[90m/home/runner/work/shadowgrid/shadowgrid[39m

Sourcemap for "/home/runner/work/shadowgrid/shadowgrid/dist/contract/index.js" points to missing source files
 [31m❯[39m run-test.spec.ts [2m([22m[2m1 test[22m[2m | [22m[31m1 failed[39m[2m)[22m[32m 65[2mms[22m[39m
[31m   [31m×[31m E2E Runtime verification[39m[32m 64[2mms[22m[39m

[31m⎯⎯⎯⎯⎯⎯⎯[39m[1m[41m Failed Tests 1 [49m[22m[31m⎯⎯⎯⎯⎯⎯⎯[39m

[41m[1m FAIL [22m[49m run-test.spec.ts[2m > [22mE2E Runtime verification
[31m[1mTypeError[22m: Cannot read properties of undefined (reading 'pipe')[39m
[36m [2m❯[22m run-test.spec.ts:[2m28:64[22m[39m
    [90m 26|[39m     if (!ContractDef) throw new Error('Contract export not found in ge…
    [90m 27|[39m
    [90m 28|[39m     const CompiledShadowgridContract = contractModule.contract.pipe(Co…
    [90m   |[39m                                                                [31m^[39m
    [90m 29|[39m         [33mCompiledContract[39m[33m.[39m[34mwithCompiledFileAssets[39m(path[33m.[39m[34mresolve[39m(distPath))
    [90m 30|[39m     )[33m;[39m

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯[22m[39m


[2m Test Files [22m [1m[31m1 failed[39m[22m[90m (1)[39m
[2m      Tests [22m [1m[31m1 failed[39m[22m[90m (1)[39m
[2m   Start at [22m 11:28:13
[2m   Duration [22m 2.68s[2m (transform 88ms, setup 0ms, import 2.49s, tests 65ms, environment 0ms)[22m


::error file=/home/runner/work/shadowgrid/shadowgrid/run-test.spec.ts,title=run-test.spec.ts > E2E Runtime verification,line=28,column=64::TypeError: Cannot read properties of undefined (reading 'pipe')%0A ❯ run-test.spec.ts:28:64%0A%0A
