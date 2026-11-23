# RISK-056 · Actions beyond the agent's tools through code execution and reachable credentials

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-056/

This risk arises when an agent that can run code can also read files, environment variables, or data stores that hold credentials, tokens, or keys, so the code it writes can act with whatever those credentials allow instead of only through the tools it was given. Approval steps, allowlists, and rate limits placed on the agent's tools then do not constrain it, because the code calls the database, cloud API, or deployment platform directly. As a result, a misjudgement or an injected instruction can cause destructive or unauthorised actions far outside the agent's intended scope, as when a coding agent used a broadly scoped infrastructure token to delete a company's production database and the backups stored with it, and when a coding agent deleted a live production database during a code freeze.

- Arises from: Code Execution (CAP-10)
- Applies only at: CAP-10 at act with approval or above
- Failure mode: Safeguard Failure
- Type: Security
- Hazards: Data (HZ-01), Infrastructure and network (HZ-03), Identity and access management (HZ-04)

## Controls

- CTRL-0029 (Level 0): Grant agents only the minimum permissions required for their designated tasks
- CTRL-0069 (Level 0): Run agent-generated code only in isolated compute environments with network access blocked by default
- CTRL-0076 (Level 0): Require human approval for destructive changes to databases, tables, or files that cannot be readily undone
- CTRL-0077 (Level 0): Enable versioning or soft-delete for managed object stores to allow recovery from accidental modifications
- CTRL-0098 (Level 0): Keep credentials and backups out of reach of agent-run code
- CTRL-0070 (Level 1): Review all agent-generated code before execution

## Crosswalks

- owasp_asi: ASI03, ASI05
- owasp_agentic_threats: T3, T11
- mitre_atlas: AML.T0055

## Sources

- https://incidentdatabase.ai/cite/1469/
- https://hackread.com/cursor-ai-agent-wipes-pocketos-database-backups/
- https://fortune.com/2025/07/23/ai-coding-tool-replit-wiped-database-called-it-a-catastrophic-failure/
