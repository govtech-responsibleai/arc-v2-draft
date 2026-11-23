# RISK-065 · Instructions or approvals forged in the principal's name

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-065/

This risk arises when something other than the principal can supply what the agent treats as the principal's own instruction or approval. A link can open the agent with a prompt already filled in and submitted, another program or browser extension on the same machine can drive the agent's interface or click its approval prompts, a command-line flag can start the agent with its permission checks turned off, and a compromised operator console can queue instructions as if they came from the operator. The register's injection risks concern content that the agent reads; here the attacker speaks with the user's voice. As a result, the agent carries out an attacker's request with the user's full authority, and its approval steps are satisfied without a person, as when a link with a pre-filled prompt made an assistant send the user's data to an attacker, malicious packages invoked developers' locally installed coding agents with their safety checks disabled, and a trading agent sent funds to an attacker who had queued prompts through its operator dashboard.

- Arises from: Roles and Access Controls (DSN-02)
- Failure mode: External Manipulation
- Type: Security
- Hazards: Data (HZ-01), Identity and access management (HZ-04)

## Controls

- CTRL-0096 (Level 0): Harden agent frameworks and runtimes before exposing them, and patch framework vulnerabilities promptly
- CTRL-0042 (Level 1): Require explicit human confirmation before executing high-impact or irreversible tool actions
- CTRL-0105 (Level 1): Accept instructions and approvals only through a channel that proves they come from the principal

## Crosswalks

- owasp_asi: ASI09, ASI03
- owasp_agentic_threats: T9
- mitre_atlas: AML.T0073, AML.T0078

## Sources

- https://www.varonis.com/blog/reprompt
- https://nx.dev/blog/s1ngularity-postmortem
- https://incidentdatabase.ai/cite/1003/
- https://www.oasis.security/resources/reports/claude-url-scheme-prompt-injection
