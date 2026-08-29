
[1m[30m[46m RUN [49m[39m[22m [36mv4.1.11 [39m[90m/home/runner/work/shadowgrid/shadowgrid[39m

(node:2837) Warning: Failed to load the ES module: /home/runner/work/shadowgrid/shadowgrid/dist/contract/index.js. Make sure to set "type": "module" in the nearest package.json file or use the .mjs extension.
(Use `node --trace-warnings ...` to show where the warning was created)
 [31m❯[39m run-test.spec.ts [2m([22m[2m1 test[22m[2m | [22m[31m1 failed[39m[2m)[22m[32m 6[2mms[22m[39m
[31m   [31m×[31m E2E Runtime verification[39m[32m 4[2mms[22m[39m

[31m⎯⎯⎯⎯⎯⎯⎯[39m[1m[41m Failed Tests 1 [49m[22m[31m⎯⎯⎯⎯⎯⎯⎯[39m

[41m[1m FAIL [22m[49m run-test.spec.ts[2m > [22mE2E Runtime verification
[31m[1mSyntaxError[22m: Cannot use import statement outside a module[39m
[36m [2m❯[22m run-test.spec.ts:[2m25:74[22m[39m
    [90m 23|[39m
    [90m 24|[39m     [35mlet[39m contractModule[33m:[39m any[33m;[39m
    [90m 25|[39m     if (fs.existsSync(distPath + '/contract/index.js')) contractModule…
    [90m   |[39m                                                                          [31m^[39m
    [90m 26|[39m     else if (fs.existsSync(distPath + '/contract/index.cjs')) contract…
    [90m 27|[39m     else if (fs.existsSync(distPath + '/index.cjs')) contractModule = …

[33mModule /home/runner/work/shadowgrid/shadowgrid/dist/contract/index.js:1 seems to be an ES Module but shipped in a CommonJS package. To fix this issue, change the file extension to .mjs or add "type": "module" in your package.json.[39m
[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯[22m[39m


[2m Test Files [22m [1m[31m1 failed[39m[22m[90m (1)[39m
[2m      Tests [22m [1m[31m1 failed[39m[22m[90m (1)[39m
[2m   Start at [22m 07:46:45
[2m   Duration [22m 2.66s[2m (transform 38ms, setup 0ms, import 2.53s, tests 6ms, environment 0ms)[22m


::error file=/home/runner/work/shadowgrid/shadowgrid/run-test.spec.ts,title=run-test.spec.ts > E2E Runtime verification,line=25,column=74::SyntaxError: Cannot use import statement outside a module%0A ❯ run-test.spec.ts:25:74%0A%0AModule /home/runner/work/shadowgrid/shadowgrid/dist/contract/index.js:1 seems to be an ES Module but shipped in a CommonJS package. To fix this issue, change the file extension to .mjs or add "type": "module" in your package.json.%0A
