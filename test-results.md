
[1m[30m[46m RUN [49m[39m[22m [36mv4.1.11 [39m[90m/home/runner/work/shadowgrid/shadowgrid[39m

{"level":30,"time":1788057686857,"pid":2877,"hostname":"runnervmgx7h7","msg":"Starting test environment... path=/home/runner/work/shadowgrid/shadowgrid, file=compose.yml, uid=4987466467554610"}
[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m[DelayedWaitStrategy] Starting 20000ms delay before health check...

[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m[DelayedWaitStrategy] Delay complete, now checking health...

[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m[DelayedWaitStrategy] Health check passed

{"level":30,"time":1788057732351,"pid":2877,"hostname":"runnervmgx7h7","msg":"Test environment configuration: {\"walletNetworkId\":\"undeployed\",\"networkId\":\"undeployed\",\"indexer\":\"http://127.0.0.1:8088/api/v4/graphql\",\"indexerWS\":\"ws://127.0.0.1:8088/api/v4/graphql/ws\",\"node\":\"http://127.0.0.1:9944\",\"nodeWS\":\"ws://127.0.0.1:9944\",\"proofServer\":\"http://127.0.0.1:6300\"}"}
[02:42:12.351] [32mINFO[39m (2877): [36mInitializing wallet builder for undeployed[39m
[02:42:12.432] [32mINFO[39m (2877): [36mUsing test wallet with known mnemonic[39m
[02:42:12.467] [32mINFO[39m (2877): [36mCreating dust wallet with params: {"indexerClientConnection":{"indexerHttpUrl":"http://127.0.0.1:8088/api/v4/graphql","indexerWsUrl":"ws://127.0.0.1:8088/api/v4/graphql/ws"},"provingServerUrl":"http://127.0.0.1:6300/","networkId":"undeployed","relayURL":"ws://127.0.0.1:9944/","txHistoryStorage":{"storage":{}},"costParameters":{"ledgerParams":{"__wbg_ptr":4654560},"additionalFeeOverhead":"500000000000000000","feeBlocksMargin":5}}[39m
[02:42:12.516] [32mINFO[39m (2877): [36mYour wallet address is: mn_addr_undeployed1nqhdatus5d6tvye57q854kdrs6ur2ytsl8yaygzfsdy2e3tvtmesdcgp8m, waiting for NIGHT funds...[39m
[02:42:12.516] [32mINFO[39m (2877): [36mSyncing wallet...[39m
[02:42:12.531] [32mINFO[39m (2877): [36mWallet synced state emission: { shielded=false, unshielded=false, dust=false }[39m
[02:42:12.531] [32mINFO[39m (2877): [36mWallet synced state emission (synced=false): { shielded=false, unshielded=false, dust=false }[39m
{"level":30,"time":1788057732492,"pid":2877,"hostname":"runnervmgx7h7","msg":"Your wallet seed is: a51c86de32d0791f7cffc3bdff1abd9bb54987f0ed5effc30c936dddbb9afd9d530c8db445e4f2d3ea42a321b260e022aadf05987c9a67ec7b6b6ca1d0593ec9 and your address is: mock-address"}
{"level":30,"time":1788057732492,"pid":2877,"hostname":"runnervmgx7h7","msg":"Starting wallet..."}
[02:42:12.649] [32mINFO[39m (2877): [36mWallet synced state emission: { shielded=false, unshielded=false, dust=false }[39m
[02:42:12.650] [32mINFO[39m (2877): [36mWallet synced state emission: { shielded=false, unshielded=false, dust=false }[39m
[02:42:12.650] [32mINFO[39m (2877): [36mWallet synced state emission: { shielded=false, unshielded=false, dust=false }[39m
[02:42:12.650] [32mINFO[39m (2877): [36mWallet synced state emission: { shielded=false, unshielded=false, dust=false }[39m
[02:42:12.651] [32mINFO[39m (2877): [36mWallet synced state emission: { shielded=false, unshielded=false, dust=false }[39m
[02:42:12.651] [32mINFO[39m (2877): [36mWallet synced state emission: { shielded=false, unshielded=true, dust=false }[39m
[02:42:12.656] [32mINFO[39m (2877): [36mWallet synced state emission: { shielded=false, unshielded=true, dust=false }[39m
[02:42:12.683] [32mINFO[39m (2877): [36mWallet synced state emission: { shielded=false, unshielded=true, dust=false }[39m
[02:42:12.761] [32mINFO[39m (2877): [36mWallet synced state emission: { shielded=false, unshielded=true, dust=false }[39m
[02:42:12.827] [32mINFO[39m (2877): [36mWallet synced state emission: { shielded=false, unshielded=true, dust=false }[39m
[02:42:13.009] [32mINFO[39m (2877): [36mWallet synced state emission: { shielded=false, unshielded=true, dust=false }[39m
[02:42:13.076] [32mINFO[39m (2877): [36mWallet synced state emission: { shielded=false, unshielded=true, dust=false }[39m
[02:42:13.140] [32mINFO[39m (2877): [36mWallet synced state emission: { shielded=false, unshielded=true, dust=false }[39m
[02:42:13.189] [32mINFO[39m (2877): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[90mstderr[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m2026-08-30 02:42:13        RPC-CORE: subscribeRuntimeVersion(): RuntimeVersion:: disconnected from ws://127.0.0.1:9944/: 1000:: Normal Closure

[90mstderr[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m2026-08-30 02:42:13        RPC-CORE: subscribeRuntimeVersion(): RuntimeVersion:: disconnected from ws://127.0.0.1:9944/: 1000:: Normal Closure

[02:42:13.250] [32mINFO[39m (2877): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[02:42:13.309] [32mINFO[39m (2877): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[02:42:13.368] [32mINFO[39m (2877): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[02:42:13.428] [32mINFO[39m (2877): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[02:42:13.495] [32mINFO[39m (2877): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[02:42:13.550] [32mINFO[39m (2877): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=false }[39m
[02:42:13.608] [32mINFO[39m (2877): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=true }[39m
[02:42:42.566] [32mINFO[39m (2877): [36mWallet synced state emission: { shielded=true, unshielded=true, dust=true }[39m
[02:42:42.567] [32mINFO[39m (2877): [36mWallet synced state emission (synced=true): { shielded=true, unshielded=true, dust=true }[39m
[02:42:42.567] [32mINFO[39m (2877): [36mSync complete[39m
[02:42:42.568] [32mINFO[39m (2877): [36mWallet balances after sync - Shielded: {"0000000000000000000000000000000000000000000000000000000000000000":"250000000000000","0000000000000000000000000000000000000000000000000000000000000002":"50000000000000","0000000000000000000000000000000000000000000000000000000000000001":"50000000000000"}, Unshielded: {"0000000000000000000000000000000000000000000000000000000000000000":"250000000000000"}, Dust: "1250000000000000000000000"[39m
[02:42:42.571] [32mINFO[39m (2877): [36mYour wallet NIGHT balance is: 250000000000000[39m
{"level":30,"time":1788057762578,"pid":2877,"hostname":"runnervmgx7h7","msg":"Deploying contract..."}
{"level":30,"time":1788057783245,"pid":2877,"hostname":"runnervmgx7h7","msg":"Contract deployed successfully at 894e9df3a5f8fb55644078a339d4c73d1caa567f0315ba5d4d747a7c8f1fb357"}
[90mstderr[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39mREGISTER FAILED: TypeError: deployedContract.callTx.register is not a function
    at [90m/home/runner/work/shadowgrid/shadowgrid/[39mrun-test.spec.ts:127:43
    at [90mfile:///home/runner/work/shadowgrid/shadowgrid/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:1903:20
Error message: deployedContract.callTx.register is not a function

[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m

--- PROOF SERVER LOGS ---
[2m2026-08-30T02:41:41.201308Z[0m [32m INFO[0m [2mmidnight_proof_server[0m[2m:[0m Ensuring zswap key material is available...
[2m2026-08-30T02:41:41.202425Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing public parameters for k=10. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T02:41:41.212991Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing public parameters for k=11. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T02:41:41.220902Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing public parameters for k=12. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T02:41:41.231394Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing public parameters for k=13. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T02:41:41.238857Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing public parameters for k=14. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T02:41:41.243755Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing public parameters for k=15. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T02:41:41.248522Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing zero-knowledge proving key for Zswap inputs. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T02:41:41.253224Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing zero-knowledge proving key for Zswap outputs. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T02:41:41.258073Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing zero-knowledge proving key for Zswap signing operations. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T02:41:41.262923Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing zero-knowledge proving key for Dust spends. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T02:41:41.808599Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching public parameters for k=10 - finished.
[2m2026-08-30T02:41:41.808720Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching public parameters for k=10 - verified correct.
[2m2026-08-30T02:41:41.870614Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching public parameters for k=11 - finished.
[2m2026-08-30T02:41:41.870706Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching public parameters for k=11 - verified correct.
[2m2026-08-30T02:41:41.957683Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching public parameters for k=12 - finished.
[2m2026-08-30T02:41:41.957695Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching public parameters for k=12 - verified correct.
[2m2026-08-30T02:41:42.026549Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching public parameters for k=13 - finished.
[2m2026-08-30T02:41:42.029694Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching public parameters for k=13 - verified correct.
[2m2026-08-30T02:41:42.031412Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge proving key for Dust spends - finished.
[2m2026-08-30T02:41:42.031468Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge proving key for Dust spends - verified correct.
[2m2026-08-30T02:41:42.035999Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing zero-knowledge verifying key for Dust spends. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T02:41:42.067656Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge proving key for Zswap signing operations - finished.
[2m2026-08-30T02:41:42.067737Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge proving key for Zswap signing operations - verified correct.
[2m2026-08-30T02:41:42.074025Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing zero-knowledge verifying key for Zswap signing operations. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T02:41:42.085078Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching public parameters for k=14 - finished.
[2m2026-08-30T02:41:42.085140Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching public parameters for k=14 - verified correct.
[2m2026-08-30T02:41:42.122249Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching public parameters for k=15 - finished.
[2m2026-08-30T02:41:42.122395Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching public parameters for k=15 - verified correct.
[2m2026-08-30T02:41:42.136564Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge proving key for Zswap outputs - finished.
[2m2026-08-30T02:41:42.136624Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge proving key for Zswap outputs - verified correct.
[2m2026-08-30T02:41:42.147889Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing zero-knowledge verifying key for Zswap outputs. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T02:41:42.164412Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge verifying key for Dust spends - finished.
[2m2026-08-30T02:41:42.164492Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge verifying key for Dust spends - verified correct.
[2m2026-08-30T02:41:42.165474Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing ZKIR source for Dust spends. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T02:41:42.291205Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge proving key for Zswap inputs - finished.
[2m2026-08-30T02:41:42.291300Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge proving key for Zswap inputs - verified correct.
[2m2026-08-30T02:41:42.307901Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing zero-knowledge verifying key for Zswap inputs. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T02:41:42.344779Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge verifying key for Zswap signing operations - finished.
[2m2026-08-30T02:41:42.344798Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge verifying key for Zswap signing operations - verified correct.
[2m2026-08-30T02:41:42.348236Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing ZKIR source for Zswap signing operations. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T02:41:42.424215Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge verifying key for Zswap outputs - finished.
[2m2026-08-30T02:41:42.424275Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge verifying key for Zswap outputs - verified correct.
[2m2026-08-30T02:41:42.427008Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing ZKIR source for Zswap outputs. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T02:41:42.458475Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching ZKIR source for Dust spends - finished.
[2m2026-08-30T02:41:42.458540Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching ZKIR source for Dust spends - verified correct.
[2m2026-08-30T02:41:42.571859Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge verifying key for Zswap inputs - finished.
[2m2026-08-30T02:41:42.571924Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching zero-knowledge verifying key for Zswap inputs - verified correct.
[2m2026-08-30T02:41:42.573086Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Missing ZKIR source for Zswap inputs. Attempting to download from the host https://srs.midnight.network/ - this is not a trusted service, the data will be verified.
[2m2026-08-30T02:41:42.605695Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching ZKIR source for Zswap signing operations - finished.
[2m2026-08-30T02:41:42.605745Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching ZKIR source for Zswap signing operations - verified correct.
[2m2026-08-30T02:41:42.692504Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching ZKIR source for Zswap outputs - finished.
[2m2026-08-30T02:41:42.692558Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching ZKIR source for Zswap outputs - verified correct.
[2m2026-08-30T02:41:42.695165Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching ZKIR source for Zswap inputs - finished.
[2m2026-08-30T02:41:42.695231Z[0m [32m INFO[0m [2mmidnight_base_crypto::data_provider[0m[2m:[0m Fetching ZKIR source for Zswap inputs - verified correct.
[2m2026-08-30T02:41:42.698053Z[0m [32m INFO[0m [2mactix_server::builder[0m[2m:[0m starting 4 workers
[2m2026-08-30T02:41:42.698118Z[0m [32m INFO[0m [2mactix_server::server[0m[2m:[0m Actix runtime found; starting in Actix runtime
[2m2026-08-30T02:41:42.698143Z[0m [32m INFO[0m [2mactix_server::server[0m[2m:[0m starting service: "actix-web-service-0.0.0.0:6300", workers: 4, listening on: 0.0.0.0:6300
[2m2026-08-30T02:42:42.716814Z[0m [32m INFO[0m [2mmidnight_proof_server::endpoints[0m[2m:[0m Starting to process request for /prove...
[2m2026-08-30T02:42:44.062945Z[0m [32m INFO[0m [2mactix_web::middleware::logger[0m[2m:[0m 172.18.0.1 POST /prove HTTP/1.1; took 1.346170s

-------------------------



{"level":30,"time":1788057783245,"pid":2877,"hostname":"runnervmgx7h7","msg":"Registering initial state..."}
{"level":30,"time":1788057783310,"pid":2877,"hostname":"runnervmgx7h7","msg":"Shutting down test environment..."}
 [31m❯[39m run-test.spec.ts [2m([22m[2m1 test[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 97612[2mms[22m[39m
[31m   [31m×[31m E2E Runtime verification[39m[33m 97610[2mms[22m[39m

[31m⎯⎯⎯⎯⎯⎯⎯[39m[1m[41m Failed Tests 1 [49m[22m[31m⎯⎯⎯⎯⎯⎯⎯[39m

[41m[1m FAIL [22m[49m run-test.spec.ts[2m > [22mE2E Runtime verification
[31m[1mTypeError[22m: deployedContract.callTx.register is not a function[39m
[36m [2m❯[22m run-test.spec.ts:[2m127:43[22m[39m
    [90m125|[39m         [35mtry[39m {
    [90m126|[39m             logger[33m.[39m[34minfo[39m([32m'Registering initial state...'[39m)[33m;[39m
    [90m127|[39m             await deployedContract.callTx.register(game_id, player_id,…
    [90m   |[39m                                           [31m^[39m
    [90m128|[39m         } [35mcatch[39m (e[33m:[39m any) {
    [90m129|[39m             console[33m.[39m[34merror[39m([32m"REGISTER FAILED:"[39m[33m,[39m e)[33m;[39m

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯[22m[39m


[2m Test Files [22m [1m[31m1 failed[39m[22m[90m (1)[39m
[2m      Tests [22m [1m[31m1 failed[39m[22m[90m (1)[39m
[2m   Start at [22m 02:41:24
[2m   Duration [22m 100.26s[2m (transform 104ms, setup 0ms, import 2.53s, tests 97.61s, environment 0ms)[22m


::error file=/home/runner/work/shadowgrid/shadowgrid/run-test.spec.ts,title=run-test.spec.ts > E2E Runtime verification,line=127,column=43::TypeError: deployedContract.callTx.register is not a function%0A ❯ run-test.spec.ts:127:43%0A%0A
