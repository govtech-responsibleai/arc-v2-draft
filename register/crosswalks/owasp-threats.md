# Crosswalk: OWASP agentic threats

ARC maps its risks to [OWASP Agentic AI – Threats and Mitigations (threat taxonomy, as reproduced in CSA Addendum Annex A)](https://genai.owasp.org/resource/agentic-ai-threats-and-mitigations/) (T1–T15 per CSA Addendum Annex A; T16–T17 per OWASP Top 10 Appendix A). Each mapping points to the nearest corresponding entry; it is not a claim that the two are the same.

Read it from either side: below, each item in that framework lists the ARC entries that map to it, and each ARC entry's own page lists its crosswalks.

## T1 · Memory poisoning

**Risks**

- [RISK-010](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-010/): Poisoned memory
- [RISK-011](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-011/): Sensitive data leakage across memory contexts
- [RISK-027](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-027/): Regurgitating personally identifiable information
- [RISK-044](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-044/): Prompt injection via malicious files or data

## T2 · Tool misuse

**Risks**

- [RISK-004](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-004/): Weak tool authentication and authorisation controls
- [RISK-006](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-006/): Tool poisoning by malicious actors
- [RISK-007](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-007/): Lack of input sanitisation
- [RISK-023](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-023/): Incorrect tool selection or misuse
- [RISK-032](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-032/): Unauthorised execution of business transactions
- [RISK-037](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-037/): Exposure of sensitive data
- [RISK-038](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-038/): Incorrect use of unfamiliar programmatic interfaces
- [RISK-041](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-041/): Unintended overwriting or deletion of files or data
- [RISK-043](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-043/): Exposure of sensitive data through file or database access
- [RISK-045](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-045/): Misconfiguration of system resources
- [RISK-047](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-047/): Data exfiltration through combined access to untrusted content, sensitive data, and an outbound channel
- [RISK-066](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-066/): Personal data collected, kept, or passed on beyond what the task needs

## T3 · Privilege compromise

**Risks**

- [RISK-004](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-004/): Weak tool authentication and authorisation controls
- [RISK-005](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-005/): Lack of proper role-based access control for tools
- [RISK-011](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-011/): Sensitive data leakage across memory contexts
- [RISK-015](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-015/): Overly permissive roles and permissions
- [RISK-016](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-016/): Unauthorised privilege escalation
- [RISK-021](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-021/): Incorrect task delegation between agents
- [RISK-033](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-033/): Leakage of transaction credentials
- [RISK-043](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-043/): Exposure of sensitive data through file or database access
- [RISK-054](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-054/): Insecure default configuration of agent frameworks and runtimes
- [RISK-056](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-056/): Actions beyond the agent's tools through code execution and reachable credentials
- [RISK-057](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-057/): Pursuit of a goal by means the principal did not sanction
- [RISK-060](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-060/): Agent credentials that are over-broad, long-lived, or outlive their use
- [RISK-063](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-063/): Authority passing between agents without a check

## T4 · Resource overload

**Risks**

- [RISK-014](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-014/): Feedback loops and runaway agent behaviour
- [RISK-042](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-042/): Database overload due to inefficient data operations
- [RISK-046](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-046/): System overload due to inefficient or excessive operations

## T5 · Cascading hallucination attacks

**Risks**

- [RISK-003](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-003/): Insufficient LLM capability and reliability
- [RISK-012](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-012/): Cascading errors in multi-agent architectures
- [RISK-014](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-014/): Feedback loops and runaway agent behaviour
- [RISK-028](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-028/): Generation of non-factual or hallucinated content
- [RISK-035](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-035/): Unreliable information or websites

## T6 · Intent breaking and goal manipulation

**Risks**

- [RISK-008](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-008/): Vague or underspecified instructions
- [RISK-009](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-009/): Unsanitised inputs in system instructions
- [RISK-019](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-019/): Generating plans that fail to meet the user's requirements
- [RISK-032](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-032/): Unauthorised execution of business transactions
- [RISK-034](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-034/): Prompt injection via malicious websites
- [RISK-036](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-036/): Prompt injection risks through computer use
- [RISK-044](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-044/): Prompt injection via malicious files or data
- [RISK-047](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-047/): Data exfiltration through combined access to untrusted content, sensitive data, and an outbound channel
- [RISK-058](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-058/): Instruction and configuration files as a way in
- [RISK-059](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-059/): Prompt injection through inbound messages

## T7 · Misaligned and deceptive behaviours

**Risks**

- [RISK-002](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-002/): Insufficient alignment of LLM behaviour
- [RISK-020](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-020/): Generating plans that overlook safety implications
- [RISK-049](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-049/): Escape from evaluation or sandbox containment onto live systems
- [RISK-050](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-050/): Deceptive behaviour toward overseers
- [RISK-057](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-057/): Pursuit of a goal by means the principal did not sanction
- [RISK-062](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-062/): Agent alters or disables the oversight placed on it

## T8 · Repudiation and untraceability

**Risks**

- [RISK-017](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-017/): Delayed failure detection due to limited monitoring
- [RISK-018](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-018/): Inability to audit failures due to missing decision traces
- [RISK-062](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-062/): Agent alters or disables the oversight placed on it

## T9 · Identity spoofing and impersonation

**Risks**

- [RISK-013](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-013/): Man-in-the-middle attacks between agents
- [RISK-060](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-060/): Agent credentials that are over-broad, long-lived, or outlive their use
- [RISK-065](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-065/): Instructions or approvals forged in the principal's name

## T10 · Overwhelming human in the loop

**Risks**

- [RISK-052](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-052/): Automation bias and erosion of human oversight

## T11 · Unexpected RCE and code attacks

**Risks**

- [RISK-007](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-007/): Lack of input sanitisation
- [RISK-039](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-039/): Production or execution of poor or ineffective code
- [RISK-040](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-040/): Production or execution of vulnerable or malicious code
- [RISK-054](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-054/): Insecure default configuration of agent frameworks and runtimes
- [RISK-056](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-056/): Actions beyond the agent's tools through code execution and reachable credentials

## T12 · Agent communication poisoning

**Risks**

- [RISK-013](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-013/): Man-in-the-middle attacks between agents
- [RISK-051](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-051/): Unsanctioned coordination between agents
- [RISK-063](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-063/): Authority passing between agents without a check

## T13 · Rogue agents in multi-agent systems

**Risks**

- [RISK-022](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-022/): Malicious or manipulative use of delegated agents
- [RISK-049](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-049/): Escape from evaluation or sandbox containment onto live systems
- [RISK-051](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-051/): Unsanctioned coordination between agents
- [RISK-053](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-053/): Dependence on third-party agents as counterparties or delegates

## T14 · Human attacks on multi-agent systems

**Risks**

- [RISK-022](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-022/): Malicious or manipulative use of delegated agents

## T15 · Human manipulation

**Risks**

- [RISK-030](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-030/): Misrepresentation of authorship
- [RISK-031](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-031/): Inaccurate promises or statements in official communications

## T16 · Insecure inter-agent protocol abuse

**Risks**

- [RISK-064](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-064/): Harm from a connected tool server or agent to the system that connects to it

## T17 · Supply chain compromise

**Risks**

- [RISK-001](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-001/): Use of untrusted or compromised LLMs
- [RISK-006](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-006/): Tool poisoning by malicious actors
- [RISK-048](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-048/): Compromise through the tool, skill, and dependency supply chain
- [RISK-058](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-058/): Instruction and configuration files as a way in
- [RISK-064](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-064/): Harm from a connected tool server or agent to the system that connects to it
