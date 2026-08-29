/home/runner/work/shadowgrid/shadowgrid/node_modules/ts-node/dist/configuration.js:91
    const { fileExists = ts.sys.fileExists, readFile = ts.sys.readFile, skipProject = index_1.DEFAULTS.skipProject, project = index_1.DEFAULTS.project, tsTrace = index_1.DEFAULTS.tsTrace, } = rawApiOptions;
                                ^

TypeError: Cannot read properties of undefined (reading 'fileExists')
    at readConfig (/home/runner/work/shadowgrid/shadowgrid/node_modules/ts-node/dist/configuration.js:91:33)
    at findAndReadConfig (/home/runner/work/shadowgrid/shadowgrid/node_modules/ts-node/dist/configuration.js:50:84)
    at phase3 (/home/runner/work/shadowgrid/shadowgrid/node_modules/ts-node/dist/bin.js:254:67)
    at bootstrap (/home/runner/work/shadowgrid/shadowgrid/node_modules/ts-node/dist/bin.js:47:30)
    at main (/home/runner/work/shadowgrid/shadowgrid/node_modules/ts-node/dist/bin.js:33:12)
    at Object.<anonymous> (/home/runner/work/shadowgrid/shadowgrid/node_modules/ts-node/dist/bin.js:579:5)
    at Module._compile (node:internal/modules/cjs/loader:1872:14)
    at Object..js (node:internal/modules/cjs/loader:2003:10)
    at Module.load (node:internal/modules/cjs/loader:1594:32)
    at Module._load (node:internal/modules/cjs/loader:1396:12)

Node.js v24.19.0
