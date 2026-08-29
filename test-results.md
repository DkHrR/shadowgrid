
[1m[30m[46m RUN [49m[39m[22m [36mv4.1.11 [39m[90m/home/runner/work/shadowgrid/shadowgrid[39m

 [31m❯[39m run-test.spec.ts [2m([22m[2m1 test[22m[2m | [22m[31m1 failed[39m[2m)[22m[32m 3[2mms[22m[39m
[31m   [31m×[31m E2E Runtime verification[39m[32m 2[2mms[22m[39m

[31m⎯⎯⎯⎯⎯⎯⎯[39m[1m[41m Failed Tests 1 [49m[22m[31m⎯⎯⎯⎯⎯⎯⎯[39m

[41m[1m FAIL [22m[49m run-test.spec.ts[2m > [22mE2E Runtime verification
[31m[1mError[22m: Cannot find module '/home/runner/work/shadowgrid/shadowgrid/dist/isolated_test.js'
Require stack:
- /home/runner/work/shadowgrid/shadowgrid/run-test.spec.ts[39m
[36m [2m❯[22m run-test.spec.ts:[2m28:27[22m[39m
    [90m 26|[39m     else if (fs.existsSync(distPath + '/index.cjs')) contractModule = …
    [90m 27|[39m     else if (fs.existsSync(distPath + '/isolated_test.cjs')) contractM…
    [90m 28|[39m     else contractModule = require(path.resolve(distPath + '/isolated_t…
    [90m   |[39m                           [31m^[39m
    [90m 29|[39m
    [90m 30|[39m     [35mconst[39m [33mContractDef[39m [33m=[39m contractModule[33m.[39m[33mContract[39m[33m;[39m

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯[22m[39m


[2m Test Files [22m [1m[31m1 failed[39m[22m[90m (1)[39m
[2m      Tests [22m [1m[31m1 failed[39m[22m[90m (1)[39m
[2m   Start at [22m 07:44:32
[2m   Duration [22m 2.04s[2m (transform 45ms, setup 0ms, import 1.94s, tests 3ms, environment 0ms)[22m


::error file=/home/runner/work/shadowgrid/shadowgrid/run-test.spec.ts,title=run-test.spec.ts > E2E Runtime verification,line=28,column=27::Error: Cannot find module '/home/runner/work/shadowgrid/shadowgrid/dist/isolated_test.js'%0ARequire stack:%0A- /home/runner/work/shadowgrid/shadowgrid/run-test.spec.ts%0A ❯ run-test.spec.ts:28:27%0A%0A⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯%0ASerialized Error: { code: 'MODULE_NOT_FOUND', requireStack: [ '/home/runner/work/shadowgrid/shadowgrid/run-test.spec.ts' ] }%0A
