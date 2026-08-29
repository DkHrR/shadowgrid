Trying to compile: shadowgrid.compact dist
Using compactc binary...
Using Compact version 0.31.1 from /home/runner/work/shadowgrid/shadowgrid/node_modules/@midnight-ntwrk/midnight-js-compact/managed/0.31.1
Compiling 3 circuits:
Child process exited with code 0

[1m[30m[46m RUN [49m[39m[22m [36mv4.1.11 [39m[90m/home/runner/work/shadowgrid/shadowgrid[39m

Sourcemap for "/home/runner/work/shadowgrid/shadowgrid/dist/contract/index.js" points to missing source files
{"level":30,"time":1788001501888,"pid":2873,"hostname":"runnervmgx7h7","msg":"Starting test environment... path=/home/runner/work/shadowgrid/shadowgrid, file=compose.yml, uid=4997868674195892"}
configuration error: config error: {"errors":["db_sync_postgres_connection_string must be defined if ariadne is enabled (i.e. if use_main_chain_follower_mock is false)"],"properties":{}}

================================================================================
ChainSpecCfg
================================================================================

NAME:          chainspec_name
HELP:          Required for generic Live network chain spec
               Name of the network e.g. devnet1
TYPE:          Option < String >
DEFAULT:       
SOURCES:       
CURRENT_VALUE: <unset>

NAME:          chainspec_id
HELP:          Required for generic Live network chain spec
               Id of the network e.g. devnet
TYPE:          Option < String >
DEFAULT:       
SOURCES:       
CURRENT_VALUE: <unset>

NAME:          chainspec_genesis_state
HELP:          Required for generic Live network chain spec
               Path to genesis_state
TYPE:          Option < String >
DEFAULT:       
SOURCES:       
CURRENT_VALUE: <unset>

NAME:          chainspec_genesis_block
HELP:          Required for generic Live network chain spec
               Path to genesis_block
TYPE:          Option < String >
DEFAULT:       
SOURCES:       
CURRENT_VALUE: <unset>

NAME:          chainspec_chain_type
HELP:          Required for generic Live network chain spec
               Chain type e.g. live
TYPE:          Option < sc_service :: ChainType >
DEFAULT:       
SOURCES:       
CURRENT_VALUE: <unset>

NAME:          chainspec_pc_chain_config
HELP:          Required for generic Live network chain spec
               Partner Chains Chain config file e.g. devnet/pc-chain-config.json
TYPE:          Option < String >
DEFAULT:       
SOURCES:       
CURRENT_VALUE: <unset>

NAME:          chainspec_cnight_genesis
HELP:          Required for generic Live network chain spec
               CNight Generates Dust config file e.g. devnet/cngd-config.json
TYPE:          Option < String >
DEFAULT:       
SOURCES:       
CURRENT_VALUE: <unset>

NAME:          chainspec_ics_config
HELP:          Required for generic Live network chain spec
               ICS (Illiquid Circulation Supply) config file e.g. devnet/ics-config.json
TYPE:          Option < String >
DEFAULT:       
SOURCES:       
CURRENT_VALUE: <unset>

NAME:          chainspec_reserve_config
HELP:          Required for generic Live network chain spec
               Reserve contract config file e.g. devnet/reserve-config.json
TYPE:          Option < String >
DEFAULT:       
SOURCES:       
CURRENT_VALUE: <unset>

NAME:          chainspec_federated_authority_config
HELP:          Required for generic Live network chain spec
               Members of the Council Governance Authority
TYPE:          Option < String >
DEFAULT:       
SOURCES:       
CURRENT_VALUE: <unset>

NAME:          chainspec_system_parameters_config
HELP:          Required for generic Live network chain spec
               System parameters config file e.g. devnet/system-parameters-config.json
TYPE:          Option < String >
DEFAULT:       
SOURCES:       
CURRENT_VALUE: <unset>

NAME:          chainspec_permissioned_candidates_config
HELP:          Required for generic Live network chain spec
               Permissioned candidates config file e.g. devnet/permissioned-candidates-config.json
TYPE:          Option < String >
DEFAULT:       
SOURCES:       
CURRENT_VALUE: <unset>

NAME:          chainspec_registered_candidates_addresses
HELP:          Required for generic Live network chain spec
               Registered candidates addresses file e.g. devnet/registered-candidates-addresses.json
TYPE:          Option < String >
DEFAULT:       
SOURCES:       
CURRENT_VALUE: <unset>

NAME:          chainspec_message_config
HELP:          Optional genesis remark message config file e.g. mainnet/message-config.json
               If not provided, no System::remark extrinsic will be added to genesis
TYPE:          Option < String >
DEFAULT:       
SOURCES:       
CURRENT_VALUE: <unset>

================================================================================
MetaCfg
================================================================================

NAME:          cfg_preset
HELP:          Use a preset of default config values
TYPE:          Option < CfgPreset >
DEFAULT:       
SOURCES:       
CURRENT_VALUE: <unset>

NAME:          show_config
HELP:          Show configuration on startup
TYPE:          bool
DEFAULT:       false
SOURCES:       default
CURRENT_VALUE: false

NAME:          show_secrets
HELP:          Show secrets in configuration
TYPE:          bool
DEFAULT:       false
SOURCES:       default
CURRENT_VALUE: false

NAME:          safe_read_max_size
HELP:          Maximum size allowed when reading config files
TYPE:          Option < u64 >
DEFAULT:       
SOURCES:       
CURRENT_VALUE: <unset>

NAME:          unsafe_allow_symlinks
HELP:          Allow symlinks when loading files
TYPE:          bool
DEFAULT:       false
SOURCES:       default
CURRENT_VALUE: false

================================================================================
MidnightCfg
================================================================================

NAME:          wipe_chain_state
HELP:          On start-up, wipe the chain
TYPE:          bool
DEFAULT:       false
SOURCES:       default
CURRENT_VALUE: false

NAME:          aura_seed_file
HELP:          Path to file containing a secret string to use as the AURA seed (32 bytes)
               Seed should be either a Phrase, hexadecimal string, or ss58-compatible string.
               Docs: https://paritytech.github.io/polkadot-sdk/master/sp_core/crypto/struct.AddressUri.html#structfield.phrase
TYPE:          Option < String >
DEFAULT:       
SOURCES:       
CURRENT_VALUE: <unset>

NAME:          grandpa_seed_file
HELP:          Path to file containing a secret string to use as the GRANDPA seed (32 bytes)
               Seed should be either a Phrase, hexadecimal string, or ss58-compatible string.
               Docs: https://paritytech.github.io/polkadot-sdk/master/sp_core/crypto/struct.AddressUri.html#structfield.phrase
TYPE:          Option < String >
DEFAULT:       
SOURCES:       
CURRENT_VALUE: <unset>

NAME:          cross_chain_seed_file
HELP:          Path to file containing a secret string to use as the CROSS_CHAIN seed (32 bytes)
               Seed should be either a Phrase, hexadecimal string, or ss58-compatible string.
               Docs: https://paritytech.github.io/polkadot-sdk/master/sp_core/crypto/struct.AddressUri.html#structfield.phrase
TYPE:          Option < String >
DEFAULT:       
SOURCES:       
CURRENT_VALUE: <unset>

NAME:          use_main_chain_follower_mock
HELP:          Mock ariadne parameters
TYPE:          bool
DEFAULT:       false
SOURCES:       default
CURRENT_VALUE: false

NAME:          mock_registrations_file
HELP:          Required if use_main_chain_follower_mock is true
               Used in the sidechains library
TYPE:          Option < String >
DEFAULT:       
SOURCES:       
CURRENT_VALUE: <unset>

NAME:          mc__first_epoch_timestamp_millis
HELP:          see partner-chains EpochConfig
TYPE:          u64
DEFAULT:       1666656000000
SOURCES:       default
CURRENT_VALUE: 1666656000000

NAME:          mc__first_epoch_number
HELP:          see partner-chains EpochConfig
TYPE:          u32
DEFAULT:       0
SOURCES:       default
CURRENT_VALUE: 0

NAME:          mc__epoch_duration_millis
HELP:          see partner-chains EpochConfig
TYPE:          u64
DEFAULT:       86400000
SOURCES:       default
CURRENT_VALUE: 86400000

NAME:          mc__first_slot_number
HELP:          see partner-chains EpochConfig
TYPE:          u64
DEFAULT:       0
SOURCES:       default
CURRENT_VALUE: 0

NAME:          mc__slot_duration_millis
HELP:          see partner-chains EpochConfig
TYPE:          u64
DEFAULT:       1000
SOURCES:       default
CURRENT_VALUE: 1000

NAME:          db_sync_postgres_connection_string
HELP:          see partner-chains ConnectionConfig
TYPE:          Option < String >
DEFAULT:       
SOURCES:       
CURRENT_VALUE: <unset>

NAME:          cardano_security_parameter
HELP:          see partner-chains CandidateDataSourceCacheConfig and DbSyncBlockDataSourceConfig
TYPE:          Option < u32 >
DEFAULT:       432
SOURCES:       default
CURRENT_VALUE: 432

NAME:          cardano_active_slots_coeff
HELP:          see partner-chains DbSyncBlockDataSourceConfig
TYPE:          Option < f64 >
DEFAULT:       0.05
SOURCES:       default
CURRENT_VALUE: 0.05

NAME:          block_stability_margin
HELP:          see partner-chains DbSyncBlockDataSourceConfig
TYPE:          Option < u32 >
DEFAULT:       10
SOURCES:       default
CURRENT_VALUE: 10

NAME:          federated_authority_config_file
HELP:          Path to federated authority config file (contains council and technical committee addresses and policy IDs)
TYPE:          Option < String >
DEFAULT:       
SOURCES:       
CURRENT_VALUE: <unset>

NAME:          storage_cache_size
HELP:          Size of ledger storage cache (number of nodes)
TYPE:          usize
DEFAULT:       10000
SOURCES:       default
CURRENT_VALUE: 10000

NAME:          allow_non_ssl
HELP:          Allow non-SSL database connections (not recommended for production)
TYPE:          bool
DEFAULT:       false
SOURCES:       default
CURRENT_VALUE: false

NAME:          ssl_root_cert
HELP:          Path to SSL root certificate for database connections.
               Required when allow_non_ssl is false for proper certificate validation.
TYPE:          Option < String >
DEFAULT:       
SOURCES:       
CURRENT_VALUE: <unset>

NAME:          prometheus_push_endpoint
HELP:          URL of the Prometheus Remote Write endpoint to push metrics to.
               Example: https://thanos.example.com/api/v1/receive
               Supports Thanos Receive, Cortex, Mimir, and other remote write compatible endpoints.
               If not set, metrics will only be available via the pull endpoint.
TYPE:          Option < String >
DEFAULT:       
SOURCES:       
CURRENT_VALUE: <unset>

NAME:          prometheus_push_interval_secs
HELP:          Interval in seconds between metric pushes to the remote write endpoint.
               Default: 15 seconds
TYPE:          Option < u64 >
DEFAULT:       
SOURCES:       
CURRENT_VALUE: <unset>

NAME:          prometheus_push_job_name
HELP:          Job name label to include with pushed metrics.
               Default: "midnight-node"
TYPE:          Option < String >
DEFAULT:       
SOURCES:       
CURRENT_VALUE: <unset>

================================================================================
MemoryMonitorCfg
================================================================================

NAME:          memory_threshold
HELP:          Required available memory in MiB. If available memory drops below this threshold, the node will be gracefully terminated. If `0`, monitoring is disabled
TYPE:          u64
DEFAULT:       0
SOURCES:       default
CURRENT_VALUE: 0

NAME:          memory_polling_period
HELP:          How often available memory is polled, in seconds
TYPE:          u32
DEFAULT:       1
SOURCES:       default
CURRENT_VALUE: 1

================================================================================
StorageMonitorParamsCfg
================================================================================

NAME:          threshold
HELP:          Required available space on database storage
TYPE:          u64
DEFAULT:       512
SOURCES:       default
CURRENT_VALUE: 512

NAME:          polling_period
HELP:          How often available space is polled
TYPE:          u32
DEFAULT:       5
SOURCES:       default
CURRENT_VALUE: 5

================================================================================
SubstrateCfg
================================================================================

NAME:          argv
HELP:          REMOVED: USE "args" INSTEAD
               The arguments passed to the node, including the binary
TYPE:          Vec < String >
DEFAULT:       
SOURCES:       default
CURRENT_VALUE: ""

NAME:          args
HELP:          The arguments passed to the node
TYPE:          Vec < String >
DEFAULT:       
SOURCES:       default
CURRENT_VALUE: ""

NAME:          append_args
HELP:          Extra arguments to append to args
TYPE:          Vec < String >
DEFAULT:       
SOURCES:       default
CURRENT_VALUE: ""

NAME:          base_path
HELP:          Optional override for base_path. --base-path in argv takes precedence
TYPE:          Option < String >
DEFAULT:       
SOURCES:       env-vars
CURRENT_VALUE: /node/chain

NAME:          node_key_file
HELP:          Path to a file containing the node key. Alternative to and takes precedence over --node-key
TYPE:          Option < String >
DEFAULT:       
SOURCES:       
CURRENT_VALUE: <unset>

NAME:          chain
HELP:          Optional override for chain. --chain in argv takes precedence
TYPE:          Option < String >
DEFAULT:       
SOURCES:       
CURRENT_VALUE: <unset>

NAME:          validator
HELP:          Override for --validator in argv
TYPE:          bool
DEFAULT:       false
SOURCES:       default
CURRENT_VALUE: false

NAME:          bootnodes
HELP:          Appends to the list of bootnodes
TYPE:          Vec < MultiaddrWithPeerId >
DEFAULT:       
SOURCES:       default
CURRENT_VALUE: ""

NAME:          trie_cache_size
HELP:          Override for --trie_cache_size. --trie-cache-size in argv takes precedence (unless set to default value).
TYPE:          Option < usize >
DEFAULT:       1073741824
SOURCES:       default
CURRENT_VALUE: 1073741824

CONFIG PRESET: None
VALIDATION RESULT: Configuration failed to validate: config error: {"errors":["db_sync_postgres_connection_string must be defined if ariadne is enabled (i.e. if use_main_chain_follower_mock is false)"],"properties":{}}
*note:* To show secret values, set SHOW_SECRETS=1

Error: Input("configuration error: config error: {\"errors\":[\"db_sync_postgres_connection_string must be defined if ariadne is enabled (i.e. if use_main_chain_follower_mock is false)\"],\"properties\":{}}")
[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m=== DOCKER PS ===
CONTAINER ID   IMAGE                                     COMMAND                  CREATED          STATUS                    PORTS                                           NAMES
724e6f16095d   midnightntwrk/midnight-node:1.0.1         "/entrypoint.sh"         2 seconds ago    Exited (1) 1 second ago                                                   testcontainers-e66e44e8bf43-node-1
e654565e7343   midnightntwrk/proof-server:latest         "/nix/store/d24gb0hj…"   2 seconds ago    Up 2 seconds              0.0.0.0:6300->6300/tcp, [::]:6300->6300/tcp     testcontainers-e66e44e8bf43-proof-server-1
0b57fbfbfadd   midnightntwrk/indexer-standalone:latest   "entrypoint.sh"          2 seconds ago    Exited (1) 1 second ago                                                   testcontainers-e66e44e8bf43-indexer-1
8620277c8d54   testcontainers/ryuk:0.14.0                "/bin/ryuk"              15 seconds ago   Up 14 seconds             0.0.0.0:32768->8080/tcp, [::]:32768->8080/tcp   testcontainers-ryuk-b9eb1ce2cdf9

=== DOCKER LOGS NODE ===

=== DOCKER LOGS INDEXER ===
{"timestamp":"2026-08-29T11:05:15.618497+00:00","level":"ERROR","target":"indexer_standalone","file":"indexer-standalone/src/main.rs","line":36,"message":"process exited with ERROR","kvs":{"backtrace":"disabled backtrace","error":"load configuration: missing field `blockfrost_id` for key \"default.infra.spo_node\" in config.yaml YAML file"}}


[90mstderr[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39mError: Cannot get container "indexer_4997868674195892" as it is not running
    at StartedDockerComposeEnvironment.getContainer [90m(/home/runner/work/shadowgrid/shadowgrid/[39mnode_modules/[4mtestcontainers[24m/build/docker-compose-environment/started-docker-compose-environment.js:31:19[90m)[39m
    at LocalTestEnvironment.getMappedPorts [90m(file:///home/runner/work/shadowgrid/shadowgrid/[39mnode_modules/[4m@midnight-ntwrk/testkit-js[24m/dist/index.mjs:2369:14[90m)[39m
    at LocalTestEnvironment.start [90m(file:///home/runner/work/shadowgrid/shadowgrid/[39mnode_modules/[4m@midnight-ntwrk/testkit-js[24m/dist/index.mjs:2415:73[90m)[39m
[90m    at processTicksAndRejections (node:internal/process/task_queues:104:5)[39m
    at [90m/home/runner/work/shadowgrid/shadowgrid/[39mrun-test.spec.ts:47:19
    at [90mfile:///home/runner/work/shadowgrid/shadowgrid/[39mnode_modules/[4m@vitest/runner[24m/dist/chunk-artifact.js:1903:20

 [31m❯[39m run-test.spec.ts [2m([22m[2m1 test[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 15679[2mms[22m[39m
[31m   [31m×[31m E2E Runtime verification[39m[33m 15678[2mms[22m[39m

[31m⎯⎯⎯⎯⎯⎯⎯[39m[1m[41m Failed Tests 1 [49m[22m[31m⎯⎯⎯⎯⎯⎯⎯[39m

[41m[1m FAIL [22m[49m run-test.spec.ts[2m > [22mE2E Runtime verification
[31m[1mError[22m: Cannot get container "indexer_4997868674195892" as it is not running[39m
[90m [2m❯[22m StartedDockerComposeEnvironment.getContainer node_modules/testcontainers/build/docker-compose-environment/started-docker-compose-environment.js:[2m31:19[22m[39m
[90m [2m❯[22m LocalTestEnvironment.getMappedPorts node_modules/@midnight-ntwrk/testkit-js/src/test-environment/test-environments/local-test-environment.ts:[2m124:7[22m[39m
[90m [2m❯[22m LocalTestEnvironment.start node_modules/@midnight-ntwrk/testkit-js/src/test-environment/test-environments/local-test-environment.ts:[2m182:68[22m[39m
[36m [2m❯[22m run-test.spec.ts:[2m47:19[22m[39m
    [90m 45|[39m     [35mlet[39m envConfig[33m;[39m
    [90m 46|[39m     [35mtry[39m {
    [90m 47|[39m       envConfig [33m=[39m [35mawait[39m testEnv[33m.[39m[34mstart[39m()[33m;[39m
    [90m   |[39m                   [31m^[39m
    [90m 48|[39m     } [35mcatch[39m (e) {
    [90m 49|[39m       console[33m.[39m[34merror[39m(e)[33m;[39m

[31m[2m⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯[22m[39m


[2m Test Files [22m [1m[31m1 failed[39m[22m[90m (1)[39m
[2m      Tests [22m [1m[31m1 failed[39m[22m[90m (1)[39m
[2m   Start at [22m 11:04:59
[2m   Duration [22m 18.43s[2m (transform 111ms, setup 0ms, import 2.60s, tests 15.68s, environment 0ms)[22m


::error file=/home/runner/work/shadowgrid/shadowgrid/run-test.spec.ts,title=run-test.spec.ts > E2E Runtime verification,line=47,column=19::Error: Cannot get container "indexer_4997868674195892" as it is not running%0A ❯ StartedDockerComposeEnvironment.getContainer node_modules/testcontainers/build/docker-compose-environment/started-docker-compose-environment.js:31:19%0A ❯ LocalTestEnvironment.getMappedPorts node_modules/@midnight-ntwrk/testkit-js/src/test-environment/test-environments/local-test-environment.ts:124:7%0A ❯ LocalTestEnvironment.start node_modules/@midnight-ntwrk/testkit-js/src/test-environment/test-environments/local-test-environment.ts:182:68%0A ❯ run-test.spec.ts:47:19%0A%0A
