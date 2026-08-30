
[1m[30m[46m RUN [49m[39m[22m [36mv4.1.11 [39m[90m/home/runner/work/shadowgrid/shadowgrid[39m

Sourcemap for "/home/runner/work/shadowgrid/shadowgrid/dist/contract/index.js" points to missing source files
{"level":30,"time":1788075771062,"pid":2797,"hostname":"runnervmgx7h7","msg":"Starting test environment... path=/home/runner/work/shadowgrid/shadowgrid, file=compose.yml, uid=260835879125556"}
[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39mCIRCUITS: [90mundefined[39m

[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m[DelayedWaitStrategy] Starting 20000ms delay before health check...

[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m[DelayedWaitStrategy] Delay complete, now checking health...

[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m[DelayedWaitStrategy] Health check passed

{"level":30,"time":1788075823630,"pid":2797,"hostname":"runnervmgx7h7","msg":"Test environment configuration: {\"walletNetworkId\":\"undeployed\",\"networkId\":\"undeployed\",\"indexer\":\"http://127.0.0.1:8088/api/v4/graphql\",\"indexerWS\":\"ws://127.0.0.1:8088/api/v4/graphql/ws\",\"node\":\"http://127.0.0.1:9944\",\"nodeWS\":\"ws://127.0.0.1:9944\",\"proofServer\":\"http://127.0.0.1:6300\"}"}
[07:43:43.630] [32mINFO[39m (2797): [36mInitializing wallet builder for undeployed[39m
[07:43:43.693] [32mINFO[39m (2797): [36mUsing test wallet with known mnemonic[39m
[07:43:43.720] [32mINFO[39m (2797): [36mCreating dust wallet with params: {"indexerClientConnection":{"indexerHttpUrl":"http://127.0.0.1:8088/api/v4/graphql","indexerWsUrl":"ws://127.0.0.1:8088/api/v4/graphql/ws"},"provingServerUrl":"http://127.0.0.1:6300/","networkId":"undeployed","relayURL":"ws://127.0.0.1:9944/","txHistoryStorage":{"storage":{}},"costParameters":{"ledgerParams":{"__wbg_ptr":4654560},"additionalFeeOverhead":"500000000000000000","feeBlocksMargin":5}}[39m
[07:43:43.757] [32mINFO[39m (2797): [36mYour wallet address is: mn_addr_undeployed1nqhdatus5d6tvye57q854kdrs6ur2ytsl8yaygzfsdy2e3tvtmesdcgp8m, waiting for NIGHT funds...[39m
[07:43:43.757] [32mINFO[39m (2797): [36mSyncing wallet...[39m
[07:43:43.768] [32mINFO[39m (2797): [36mWallet synced state emission: { shielded=false, unshielded=false, dust=false }[39m
[07:43:43.769] [32mINFO[39m (2797): [36mWallet synced state emission (synced=false): { shielded=false, unshielded=false, dust=false }[39m
{"level":30,"time":1788075823739,"pid":2797,"hostname":"runnervmgx7h7","msg":"Your wallet seed is: a51c86de32d0791f7cffc3bdff1abd9bb54987f0ed5effc30c936dddbb9afd9d530c8db445e4f2d3ea42a321b260e022aadf05987c9a67ec7b6b6ca1d0593ec9 and your address is: mock-address"}
{"level":30,"time":1788075823739,"pid":2797,"hostname":"runnervmgx7h7","msg":"Starting wallet..."}
[07:43:43.791] [32mINFO[39m (2797): [36mWallet synced state emission: { shielded=false, unshielded=false, dust=false }[39m
[07:43:43.805] [32mINFO[39m (2797): [36mWallet synced state emission: { shielded=false, unshielded=false, dust=false }[39m
[07:43:43.806] [32mINFO[39m (2797): [36mWallet synced state emission: { shielded=false, unshielded=false, dust=false }[39m
[07:43:43.806] [32mINFO[39m (2797): [36mWallet synced state emission: { shielded=false, unshielded=false, dust=false }[39m
[07:43:43.807] [32mINFO[39m (2797): [36mWallet synced state emission: { shielded=false, unshielded=false, dust=false }[39m
[07:43:43.865] [32mINFO[39m (2797): [36mWallet synced state emission: { shielded=false, unshielded=false, dust=false }[39m
[07:43:43.888] [32mINFO[39m (2797): [36mWallet synced state emission: { shielded=false, unshielded=true, dust=false }[39m
[07:43:43.936] [32mINFO[39m (2797): [36mWallet synced state emission: { shielded=false, unshielded=true, dust=false }[39m
[07:43:43.947] [32mINFO[39m (2797): [36mWallet synced state emission: { shielded=false, unshielded=true, dust=false }[39m
[07:43:44.074] [32mINFO[39m (2797): [36mWallet synced state emission: { shielded=false, unshielded=true, dust=false }[39m
[07:43:44.119] [32mINFO[39m (2797): [36mWallet synced state emission: { shielded=false, unshielded=true, dust=false }[39m
[07:43:44.159] [32mINFO[39m (2797): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[07:43:44.205] [32mINFO[39m (2797): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[90mstderr[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m2026-08-30 07:43:44        RPC-CORE: subscribeRuntimeVersion(): RuntimeVersion:: disconnected from ws://127.0.0.1:9944/: 1000:: Normal Closure

[90mstderr[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m2026-08-30 07:43:44        RPC-CORE: subscribeRuntimeVersion(): RuntimeVersion:: disconnected from ws://127.0.0.1:9944/: 1000:: Normal Closure

[07:43:44.259] [32mINFO[39m (2797): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[07:43:44.304] [32mINFO[39m (2797): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[07:43:44.351] [32mINFO[39m (2797): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[07:43:44.395] [32mINFO[39m (2797): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[07:43:44.440] [32mINFO[39m (2797): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[07:43:44.491] [32mINFO[39m (2797): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[07:43:44.534] [32mINFO[39m (2797): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[07:43:44.578] [32mINFO[39m (2797): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=true }[39m
[07:44:13.784] [32mINFO[39m (2797): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=true }[39m
[07:44:13.784] [32mINFO[39m (2797): [36mWallet synced state emission (synced=true): { shielded=true, unshielded=true, dust=true }[39m
[07:44:13.785] [32mINFO[39m (2797): [36mSync complete[39m
[07:44:13.786] [32mINFO[39m (2797): [36mWallet balances after sync - Shielded: {"0000000000000000000000000000000000000000000000000000000000000000":"250000000000000","0000000000000000000000000000000000000000000000000000000000000002":"50000000000000","0000000000000000000000000000000000000000000000000000000000000001":"50000000000000"}, Unshielded: {"0000000000000000000000000000000000000000000000000000000000000000":"250000000000000"}, Dust: "1250000000000000000000000"[39m
[07:44:13.788] [32mINFO[39m (2797): [36mYour wallet NIGHT balance is: 250000000000000[39m
{"level":30,"time":1788075853794,"pid":2797,"hostname":"runnervmgx7h7","msg":"Deploying contract..."}
{"level":30,"time":1788075871970,"pid":2797,"hostname":"runnervmgx7h7","msg":"Contract deployed successfully at 1d72a064d4ae597a103f0f575f5291fdf327cdb1b160063bc80185495a256675"}
[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39mSuccessfully read ZKIR for register, length: [33m352[39m

{"level":30,"time":1788075871973,"pid":2797,"hostname":"runnervmgx7h7","msg":"Registering initial state: player_id[0]=145, x=2, y=2, nonce=1"}
[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39mSuccessfully read PROVER key for register, length: [33m2820651[39m

[90mstderr[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39mREGISTER FAILED: Unexpected error executing scoped transaction '<unnamed>': ContractRuntimeError: Error executing circuit 'register'

{"level":30,"time":1788075872097,"pid":2797,"hostname":"runnervmgx7h7","msg":"Shutting down test environment..."}
{"level":30,"time":1788075872097,"pid":2797,"hostname":"runnervmgx7h7","msg":"Shutting down test environment..."}
 [31m❯[39m run-test.spec.ts [2m([22m[2m1 test[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 102193[2mms[22m[39m
[31m   [31m×[31m E2E Runtime verification[39m[33m 102192[2mms[22m[39m

[31m⎯⎯⎯⎯⎯⎯⎯[39m[1m[41m Failed Tests 1 [49m[22m[31m⎯⎯⎯⎯⎯⎯⎯[39m

[41m[1m FAIL [22m[49m run-test.spec.ts[2m > [22mE2E Runtime verification
[31m[1mError[22m: Unexpected error executing scoped transaction '<unnamed>': ContractRuntimeError: Error executing circuit 'register'[39m
[90m [2m❯[22m scoped node_modules/@midnight-ntwrk/midnight-js-contracts/src/internal/transaction.ts:[2m222:20[22m[39m
[36m [2m❯[22m run-test.spec.ts:[2m118:13[22m[39m
    [90m116|[39m         logger.info(`Registering initial state: player_id[0]=${player_…
    [90m117|[39m         [35mtry[39m {
    [90m118|[39m             [35mawait[39m deployedContract[33m.[39mcallTx[33m.[39m[34mregister[39m()[33m;[39m
    [90m   |[39m             [31m^[39m
    [90m119|[39m         } [35mcatch[39m (e[33m:[39m any) {
    [90m120|[39m             console[33m.[39m[34merror[39m([32m"REGISTER FAILED:"[39m[33m,[39m e[33m.[39mmessage)[33m;[39m

[31m[1mCaused by: ContractRuntimeError[22m: Error executing circuit 'register'[39m
[90m [2m❯[22m Module.make node_modules/@midnight-ntwrk/compact-js/dist/esm/effect/ContractRuntimeError.js:[2m39:41[22m[39m
[90m [2m❯[22m node_modules/@midnight-ntwrk/compact-js/dist/esm/effect/ContractExecutable.js:[2m144:60[22m[39m
[90m [2m❯[22m EffectPrimitive.effect_instruction_i0 node_modules/effect/dist/esm/internal/core.js:[2m520:33[22m[39m
[90m [2m❯[22m node_modules/effect/dist/esm/internal/fiberRuntime.js:[2m945:41[22m[39m
[90m [2m❯[22m effect_internal_function node_modules/effect/dist/esm/Utils.js:[2m333:12[22m[39m
[90m [2m❯[22m FiberRuntime.Sync node_modules/effect/dist/esm/internal/fiberRuntime.js:[2m945:19[22m[39m
[90m [2m❯[22m node_modules/effect/dist/esm/internal/fiberRuntime.js:[2m1151:31[22m[39m
[90m [2m❯[22m Object.context node_modules/effect/dist/esm/internal/tracer.js:[2m80:17[22m[39m
[90m [2m❯[22m FiberRuntime.runLoop node_modules/effect/dist/esm/internal/fiberRuntime.js:[2m1142:34[22m[39m
[90m [2m❯[22m FiberRuntime.evaluateEffect node_modules/effect/dist/esm/internal/fiberRuntime.js:[2m746:27[22m[39m

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[22m[39m
[31m[1mSerialized Error:[22m[39m [90m{ _tag: 'ContractRuntimeError' }[39m
[31m[1mCaused by: TypeError[22m: object is not iterable (cannot read property Symbol(Symbol.iterator))[39m
[36m [2m❯[22m Contract._localState_0 dist/contract/index.js:[2m257:44[22m[39m
[90m [2m❯[22m Contract._register_0 shadowgrid.compact:[2m25:26[22m[39m
[90m [2m❯[22m register dist/contract/index.js:[2m111:31[22m[39m
[90m [2m❯[22m try node_modules/@midnight-ntwrk/compact-js/dist/esm/effect/ContractExecutable.js:[2m123:24[22m[39m
[90m [2m❯[22m effect_internal_function node_modules/effect/dist/esm/Utils.js:[2m333:12[22m[39m
[90m [2m❯[22m EffectPrimitive.commit node_modules/effect/dist/esm/internal/core-effect.js:[2m48:27[22m[39m
[90m [2m❯[22m node_modules/effect/dist/esm/internal/fiberRuntime.js:[2m1111:34[22m[39m
[90m [2m❯[22m effect_internal_function node_modules/effect/dist/esm/Utils.js:[2m333:12[22m[39m
[90m [2m❯[22m FiberRuntime.Commit node_modules/effect/dist/esm/internal/fiberRuntime.js:[2m1111:12[22m[39m
[90m [2m❯[22m node_modules/effect/dist/esm/internal/fiberRuntime.js:[2m1151:31[22m[39m

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯[22m[39m


[2m Test Files [22m [1m[31m1 failed[39m[22m[90m (1)[39m
[2m      Tests [22m [1m[31m1 failed[39m[22m[90m (1)[39m
[2m   Start at [22m 07:42:49
[2m   Duration [22m 104.08s[2m (transform 107ms, setup 0ms, import 1.78s, tests 102.19s, environment 0ms)[22m


::error file=/home/runner/work/shadowgrid/shadowgrid/run-test.spec.ts,title=run-test.spec.ts > E2E Runtime verification,line=118,column=13::Error: Unexpected error executing scoped transaction '<unnamed>': ContractRuntimeError: Error executing circuit 'register'%0A ❯ scoped node_modules/@midnight-ntwrk/midnight-js-contracts/src/internal/transaction.ts:222:20%0A ❯ run-test.spec.ts:118:13%0A%0ACaused by: Caused by: ContractRuntimeError: Error executing circuit 'register'%0A ❯ Module.make node_modules/@midnight-ntwrk/compact-js/dist/esm/effect/ContractRuntimeError.js:39:41%0A ❯ node_modules/@midnight-ntwrk/compact-js/dist/esm/effect/ContractExecutable.js:144:60%0A ❯ EffectPrimitive.effect_instruction_i0 node_modules/effect/dist/esm/internal/core.js:520:33%0A ❯ node_modules/effect/dist/esm/internal/fiberRuntime.js:945:41%0A ❯ effect_internal_function node_modules/effect/dist/esm/Utils.js:333:12%0A ❯ FiberRuntime.Sync node_modules/effect/dist/esm/internal/fiberRuntime.js:945:19%0A ❯ node_modules/effect/dist/esm/internal/fiberRuntime.js:1151:31%0A ❯ Object.context node_modules/effect/dist/esm/internal/tracer.js:80:17%0A ❯ FiberRuntime.runLoop node_modules/effect/dist/esm/internal/fiberRuntime.js:1142:34%0A ❯ FiberRuntime.evaluateEffect node_modules/effect/dist/esm/internal/fiberRuntime.js:746:27%0A%0A⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯%0ASerialized Error: { _tag: 'ContractRuntimeError' }%0ACaused by: Caused by: TypeError: object is not iterable (cannot read property Symbol(Symbol.iterator))%0A ❯ Contract._localState_0 dist/contract/index.js:257:44%0A ❯ Contract._register_0 shadowgrid.compact:25:26%0A ❯ register dist/contract/index.js:111:31%0A ❯ try node_modules/@midnight-ntwrk/compact-js/dist/esm/effect/ContractExecutable.js:123:24%0A ❯ effect_internal_function node_modules/effect/dist/esm/Utils.js:333:12%0A ❯ EffectPrimitive.commit node_modules/effect/dist/esm/internal/core-effect.js:48:27%0A ❯ node_modules/effect/dist/esm/internal/fiberRuntime.js:1111:34%0A ❯ effect_internal_function node_modules/effect/dist/esm/Utils.js:333:12%0A ❯ FiberRuntime.Commit node_modules/effect/dist/esm/internal/fiberRuntime.js:1111:12%0A ❯ node_modules/effect/dist/esm/internal/fiberRuntime.js:1151:31%0A%0A
