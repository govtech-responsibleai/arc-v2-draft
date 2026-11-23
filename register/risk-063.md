# RISK-063 · Authority passing between agents without a check

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-063/

This risk arises when one agent treats a request or a message from another agent as authorisation to act, without checking that the person on whose behalf the first agent is working is entitled to that action. A low-privilege agent can then ask a higher-privilege agent to do what it cannot do itself, and an attacker who can influence any agent in the chain, or who can write somewhere that an agent reads, borrows the privileges of the most powerful one. As a result, the access controls set for each agent are bypassed by the path between them, as when an injected low-privilege agent recruited a higher-privilege agent through agent discovery to copy records it could not read itself, a prompt posted by one company's agent was executed as a transfer instruction by another company's agent, and a public triage agent was led to invoke a workflow reserved for maintainers.

- Arises from: Agent Delegation (CAP-02)
- Failure mode: Safeguard Failure
- Type: Safety, Security
- Hazards: Identity and access management (HZ-04), Financial or contractual loss (HZ-10)

## Controls

- CTRL-0024 (Level 0): Define formal schemas for inter-agent messages and validate all messages against these schemas before processing
- CTRL-0029 (Level 0): Grant agents only the minimum permissions required for their designated tasks
- CTRL-0026 (Level 1): Require all agents to authenticate with verifiable, cryptographically signed identities before processing requests
- CTRL-0104 (Level 1): Authorise each action against the principal it is done for, at the agent that carries it out

## Crosswalks

- owasp_asi: ASI03, ASI07
- owasp_agentic_threats: T3, T12
- mitre_atlas: AML.T0053, AML.T0118.001

## Sources

- https://appomni.com/ao-labs/ai-agent-to-agent-discovery-prompt-injection/
- https://slowmist.medium.com/behind-the-grok-exploitation-an-analysis-of-ai-agent-permission-chain-abuse-4d832d1bfc73
- https://www.pillar.security/blog/ill-just-call-you-agent-to-agent-privilege-boundary-failures-in-ci-cd-on-googles-adk-repository
