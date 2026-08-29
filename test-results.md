| Test | Expected | Actual | Evidence | Status |
|---|---|---|---|---|
| Valid Transition | ACCEPT | ACCEPT | Transaction accepted | PASS |
| Teleport | REJECT | REJECT | Unexpected error executing scoped transa | PASS |
| Wrong Old State | REJECT | REJECT | Unexpected error executing scoped transa | PASS |
| Nonce Replay | REJECT | REJECT | Unexpected error executing scoped transa | PASS |
| Nonce Skip | REJECT | REJECT | Unexpected error executing scoped transa | PASS |
| Health Modification | REJECT | REJECT | Unexpected error executing scoped transa | PASS |
| Out of Bounds X | REJECT | REJECT | Unexpected error executing scoped transa | PASS |
| Out of Bounds Y | REJECT | REJECT | Unexpected error executing scoped transa | PASS |
[90mstdout[2m | run-test.spec.ts[2m > [22m[2mE2E Runtime verification
[22m[39m| Out of Bounds Y | REJECT | REJECT | Unexpected error executing scoped transa | PASS |

{"level":30,"time":1788005013579,"pid":2688,"hostname":"runnervmgx7h7","msg":"Shutting down test environment..."}
 [32m✓[39m run-test.spec.ts [2m([22m[2m1 test[22m[2m)[22m[33m 148527[2mms[22m[39m
   [33m[2m✓[22m[39m E2E Runtime verification [33m 148526[2mms[22m[39m

[2m Test Files [22m [1m[32m1 passed[39m[22m[90m (1)[39m
[2m      Tests [22m [1m[32m1 passed[39m[22m[90m (1)[39m
[2m   Start at [22m 12:01:05
[2m   Duration [22m 150.17s[2m (transform 79ms, setup 0ms, import 1.55s, tests 148.53s, environment 0ms)[22m

