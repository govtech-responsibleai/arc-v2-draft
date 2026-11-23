# Crosswalk: CSA Securing Agentic AI addendum

ARC maps its controls to [CSA Singapore – Securing Agentic AI, an Addendum to the Guidelines and Companion Guide on Securing AI Systems](https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/) (1.0 (17 June 2026)). Each mapping points to the nearest corresponding entry; it is not a claim that the two are the same.

Read it from either side: below, each item in that framework lists the ARC entries that map to it, and each ARC entry's own page lists its crosswalks.

## 2.1 · Supply chain security – ensure components are from trusted sources

**Controls**

- [CTRL-0001](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0001/) (Level 0): Use only LLMs from verified and trusted model developers
- [CTRL-0002](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0002/) (Level 0): Obtain legally binding no-training and no-logging agreements from LLM API service providers
- [CTRL-0003](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0003/) (Level 1): Use only established and verified model loaders in production environments
- [CTRL-0004](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0004/) (Level 2): Review the LLM's system card to inform risk assessment and model selection
- [CTRL-0009](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0009/) (Level 0): Use only tool servers and APIs, including MCP servers, that implement robust authentication mechanisms in production environments
- [CTRL-0061](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0061/) (Level 1): Use structured retrieval APIs for web searches rather than web scraping
- [CTRL-0063](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0063/) (Level 1): Prioritise search results from verified, high-quality domains
- [CTRL-0083](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0083/) (Level 0): Disallow unknown or external files unless they have been scanned for threats
- [CTRL-0091](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0091/) (Level 0): Require verified provenance for tools, skills, and dependencies, and re-verify them on every update
- [CTRL-0095](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0095/) (Level 1): Apply due diligence and technical bounds to third-party agents before delegating to them or transacting with them
- [CTRL-0100](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0100/) (Level 0): Load instruction, settings, and tool-configuration files only from locations the operator controls, and ask before using any that arrive with a workspace

## 2.2 · Consider model hardening

**Controls**

- [CTRL-0005](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0005/) (Level 1): Conduct structured evaluation of multiple LLMs for instruction-following, performance, and safety before deployment

## 2.3 · Harden the system beyond the model itself

**Controls**

- [CTRL-0016](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0016/) (Level 0): Define clearly the agent's role, scope, and non-goals in the system prompt
- [CTRL-0017](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0017/) (Level 1): Define clear success criteria for the agent's tasks
- [CTRL-0096](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0096/) (Level 0): Harden agent frameworks and runtimes before exposing them, and patch framework vulnerabilities promptly

## 2.4 · Identify, track and protect AI system assets

**Controls**

- [CTRL-0039](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0039/) (Level 1): Ensure each agent publishes standardised, machine-readable capability descriptors accessible to other agents
- [CTRL-0041](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0041/) (Level 0): Provide comprehensive descriptions for each tool including intended use, required inputs, and potential outputs
- [CTRL-0067](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0067/) (Level 0): Ensure proper documentation of programmatic interfaces for agent use
- [CTRL-0091](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0091/) (Level 0): Require verified provenance for tools, skills, and dependencies, and re-verify them on every update
- [CTRL-0102](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0102/) (Level 1): Issue agents short-lived, task-scoped credentials, keep an inventory of them, and revoke them when an agent or integration is retired

## 2.5 · Have regular backups in the event of compromise

**Controls**

- [CTRL-0077](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0077/) (Level 0): Enable versioning or soft-delete for managed object stores to allow recovery from accidental modifications

## 2.6 · Implement authentication, authorisation and access controls

**Controls**

- [CTRL-0010](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0010/) (Level 1): Use only MCP servers that validate credentials on every inbound request
- [CTRL-0011](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0011/) (Level 0): Limit token scopes to the minimum privileges required and avoid broad or wildcard scopes
- [CTRL-0021](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0021/) (Level 0): Implement allowlists and denylists to restrict what categories of information can be written to the agent's persistent memory
- [CTRL-0025](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0025/) (Level 1): Ensure all inter-agent communications are encrypted in transit and prohibit plaintext channels
- [CTRL-0026](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0026/) (Level 1): Require all agents to authenticate with verifiable, cryptographically signed identities before processing requests
- [CTRL-0030](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0030/) (Level 1): Assign each agent a unique, verifiable identity with no shared credentials
- [CTRL-0031](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0031/) (Level 1): Use only MCP servers that validate token provenance and prohibit unauthorised token passthrough
- [CTRL-0089](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0089/) (Level 0): Enforce default-deny network egress for agent runtimes, allowing only approved destinations
- [CTRL-0098](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0098/) (Level 0): Keep credentials and backups out of reach of agent-run code
- [CTRL-0101](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0101/) (Level 0): Give agents no write access to their own instructions, configuration, permissions, logs, or monitors
- [CTRL-0102](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0102/) (Level 1): Issue agents short-lived, task-scoped credentials, keep an inventory of them, and revoke them when an agent or integration is retired
- [CTRL-0104](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0104/) (Level 1): Authorise each action against the principal it is done for, at the agent that carries it out
- [CTRL-0105](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0105/) (Level 1): Accept instructions and approvals only through a channel that proves they come from the principal

## 2.7 · Implement controls to limit what models or agents can access and generate

**Controls**

- [CTRL-0021](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0021/) (Level 0): Implement allowlists and denylists to restrict what categories of information can be written to the agent's persistent memory
- [CTRL-0024](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0024/) (Level 0): Define formal schemas for inter-agent messages and validate all messages against these schemas before processing
- [CTRL-0037](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0037/) (Level 1): Require planning agents to include explicit safety constraints in all generated plans before execution
- [CTRL-0040](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0040/) (Level 0): Limit the scope of agent actions through predefined thresholds and baselines
- [CTRL-0054](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0054/) (Level 1): Limit agent communications to standard processes with predefined templates
- [CTRL-0064](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0064/) (Level 1): Limit computer use to accessing only safe and trusted resources
- [CTRL-0073](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0073/) (Level 0): Create a denylist of commands that agents are not permitted to execute
- [CTRL-0082](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0082/) (Level 2): Do not grant agents access to personally identifiable or sensitive data unless strictly required
- [CTRL-0084](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0084/) (Level 0): Set minimum and maximum limits on what agents can modify within system resources
- [CTRL-0097](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0097/) (Level 0): Do not give one agent untrusted content, access to sensitive data, and an unrestricted outbound channel at once; remove one, or gate the outbound channel outside the agent
- [CTRL-0099](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0099/) (Level 1): Stop the task when an action is refused and report to a human, instead of letting the agent look for another route
- [CTRL-0106](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0106/) (Level 1): Minimise the personal data an agent sends through its tools, and set a retention period for what it keeps
- [CTRL-0107](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0107/) (Level 1): Set limits on what users may direct the agent to do to others, enforce them across a whole task, and have the agent identify itself

## 2.8 · Apply least privilege; secure-by-default configurations

**Controls**

- [CTRL-0011](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0011/) (Level 0): Limit token scopes to the minimum privileges required and avoid broad or wildcard scopes
- [CTRL-0029](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0029/) (Level 0): Grant agents only the minimum permissions required for their designated tasks
- [CTRL-0069](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0069/) (Level 0): Run agent-generated code only in isolated compute environments with network access blocked by default
- [CTRL-0075](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0075/) (Level 1): Do not grant write access to agents unless strictly necessary
- [CTRL-0082](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0082/) (Level 2): Do not grant agents access to personally identifiable or sensitive data unless strictly required
- [CTRL-0096](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0096/) (Level 0): Harden agent frameworks and runtimes before exposing them, and patch framework vulnerabilities promptly
- [CTRL-0098](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0098/) (Level 0): Keep credentials and backups out of reach of agent-run code

## 2.9 · Segregate environments and segment networks

**Controls**

- [CTRL-0013](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0013/) (Level 0): Test all untested MCP servers in a sandboxed environment before deploying to production
- [CTRL-0020](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0020/) (Level 2): Use a dedicated LLM to extract required fields from inputs and filter out extraneous text or embedded instructions
- [CTRL-0058](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0058/) (Level 0): Restrict agents to proposing transactions whilst using a separate transaction controller for execution
- [CTRL-0069](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0069/) (Level 0): Run agent-generated code only in isolated compute environments with network access blocked by default
- [CTRL-0089](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0089/) (Level 0): Enforce default-deny network egress for agent runtimes, allowing only approved destinations
- [CTRL-0090](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0090/) (Level 1): Enforce data-flow and capability policies at runtime with a deterministic policy layer that separates untrusted content from privileged actions
- [CTRL-0092](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0092/) (Level 0): Contain evaluations and red-team exercises so that agents cannot reach real systems, credentials, or people
- [CTRL-0097](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0097/) (Level 0): Do not give one agent untrusted content, access to sensitive data, and an unrestricted outbound channel at once; remove one, or gate the outbound channel outside the agent

## 2.10 · Implement model self-reflection before decisions

**Controls**

- [CTRL-0018](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0018/) (Level 2): Define default behaviour when the agent encounters ambiguous situations
- [CTRL-0035](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0035/) (Level 2): Require agents to decompose user goals into explicit sub-goals and validate necessity before proceeding
- [CTRL-0037](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0037/) (Level 1): Require planning agents to include explicit safety constraints in all generated plans before execution

## 2.11 · Implement controls to reduce the likelihood of hallucination

**Controls**

- [CTRL-0048](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0048/) (Level 2): Implement methods to reduce hallucination rates in agent outputs
- [CTRL-0049](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0049/) (Level 0): Implement UI/UX cues to communicate the risk of hallucination to users
- [CTRL-0050](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0050/) (Level 1): Implement features enabling users to verify generated answers against source content

## 3.1 · Ensure availability controls against disruption or failure

**Controls**

- [CTRL-0040](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0040/) (Level 0): Limit the scope of agent actions through predefined thresholds and baselines
- [CTRL-0072](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0072/) (Level 1): Monitor runtime and memory consumption of agent-generated code
- [CTRL-0078](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0078/) (Level 0): Enforce throttling or rate limits on agent-initiated database operations
- [CTRL-0079](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0079/) (Level 2): Validate agent-generated database queries for efficiency before execution against production databases
- [CTRL-0080](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0080/) (Level 2): Implement caching mechanisms to reduce repetitive database queries by agents
- [CTRL-0086](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0086/) (Level 0): Limit the number of concurrent queries to external systems by agents
- [CTRL-0103](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0103/) (Level 1): Pin the model version, re-run evaluations before any model change, and keep a tested fallback

## 3.2 · Conduct security testing

**Controls**

- [CTRL-0005](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0005/) (Level 1): Conduct structured evaluation of multiple LLMs for instruction-following, performance, and safety before deployment
- [CTRL-0017](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0017/) (Level 1): Define clear success criteria for the agent's tasks
- [CTRL-0036](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0036/) (Level 1): Regularly evaluate and test planning behaviour under representative workloads and failure scenarios
- [CTRL-0038](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0038/) (Level 0): Conduct safety verification with domain-relevant stress tests and adversarial scenarios before deployment and on a regular cadence afterwards
- [CTRL-0092](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0092/) (Level 0): Contain evaluations and red-team exercises so that agents cannot reach real systems, credentials, or people

## 3.3 · Secure the invocation of external tools (e.g. MCP servers)

**Controls**

- [CTRL-0009](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0009/) (Level 0): Use only tool servers and APIs, including MCP servers, that implement robust authentication mechanisms in production environments
- [CTRL-0012](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0012/) (Level 2): Use only MCP servers that integrate with authorisation servers implementing per-client consent mechanisms
- [CTRL-0015](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0015/) (Level 1): Treat all tool metadata and outputs as untrusted input requiring validation
- [CTRL-0031](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0031/) (Level 1): Use only MCP servers that validate token provenance and prohibit unauthorised token passthrough

## 3.4 · Implement security controls between agents

**Controls**

- [CTRL-0024](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0024/) (Level 0): Define formal schemas for inter-agent messages and validate all messages against these schemas before processing
- [CTRL-0025](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0025/) (Level 1): Ensure all inter-agent communications are encrypted in transit and prohibit plaintext channels
- [CTRL-0026](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0026/) (Level 1): Require all agents to authenticate with verifiable, cryptographically signed identities before processing requests
- [CTRL-0039](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0039/) (Level 1): Ensure each agent publishes standardised, machine-readable capability descriptors accessible to other agents
- [CTRL-0093](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0093/) (Level 2): Monitor agents for deceptive and collusive behaviour using an independent monitor
- [CTRL-0095](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0095/) (Level 1): Apply due diligence and technical bounds to third-party agents before delegating to them or transacting with them
- [CTRL-0104](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0104/) (Level 1): Authorise each action against the principal it is done for, at the agent that carries it out

## 4.1 · Validate inputs to models and agents

**Controls**

- [CTRL-0015](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0015/) (Level 1): Treat all tool metadata and outputs as untrusted input requiring validation
- [CTRL-0019](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0019/) (Level 0): Keep untrusted inputs out of system instructions, and enclose any untrusted content given to the model in delimiters marked as data
- [CTRL-0020](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0020/) (Level 2): Use a dedicated LLM to extract required fields from inputs and filter out extraneous text or embedded instructions
- [CTRL-0022](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0022/) (Level 1): Implement content filtering on writes to persistent memory to detect and block known unsafe content patterns
- [CTRL-0045](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0045/) (Level 1): Implement input guardrails to detect and decline requests for specialised domain advice
- [CTRL-0046](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0046/) (Level 1): Implement input guardrails to detect and decline requests for controversial content that violates organisational policies
- [CTRL-0051](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0051/) (Level 1): Implement input guardrails to detect and decline requests to generate copyrighted content
- [CTRL-0060](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0060/) (Level 1): Implement escape filtering before incorporating web content into prompts
- [CTRL-0062](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0062/) (Level 0): Implement input guardrails to detect prompt injection and adversarial attacks
- [CTRL-0081](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0081/) (Level 1): Implement input guardrails to detect personally identifiable information in data accessed by agents
- [CTRL-0083](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0083/) (Level 0): Disallow unknown or external files unless they have been scanned for threats
- [CTRL-0090](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0090/) (Level 1): Enforce data-flow and capability policies at runtime with a deterministic policy layer that separates untrusted content from privileged actions
- [CTRL-0100](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0100/) (Level 0): Load instruction, settings, and tool-configuration files only from locations the operator controls, and ask before using any that arrive with a workspace

## 4.2 · Validate outputs from models and agents

**Controls**

- [CTRL-0044](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0044/) (Level 1): Implement output safety guardrails to detect and prevent generation of undesirable content
- [CTRL-0047](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0047/) (Level 0): Implement output guardrails to detect and redact personally identifiable information
- [CTRL-0059](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0059/) (Level 2): Apply fraud detection models or heuristics to agent-proposed transactions
- [CTRL-0068](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0068/) (Level 1): Use code linters to screen generated code for bad practices and poor syntax
- [CTRL-0070](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0070/) (Level 1): Review all agent-generated code before execution
- [CTRL-0071](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0071/) (Level 0): Use static code analysers to detect security vulnerabilities and code quality issues
- [CTRL-0074](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0074/) (Level 0): Conduct CVE scanning and block execution of code with High or Critical vulnerabilities

## 4.3 · Continuous monitoring and logging

**Controls**

- [CTRL-0007](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0007/) (Level 0): Log all LLM inputs and outputs for regular review
- [CTRL-0008](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0008/) (Level 1): Implement automated alerts when agent behaviour drifts from predefined thresholds
- [CTRL-0023](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0023/) (Level 2): Log all modifications to persistent memory with comprehensive source metadata for audit purposes
- [CTRL-0027](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0027/) (Level 1): Implement circuit breakers to prevent cascading failures in multi-agent systems
- [CTRL-0028](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0028/) (Level 0): Continuously monitor multi-agent systems for cascade failure indicators
- [CTRL-0032](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0032/) (Level 0): Centralise observability data collection in a unified backend system
- [CTRL-0033](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0033/) (Level 1): Standardise trace attributes for agent operations using consistent semantic conventions
- [CTRL-0034](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0034/) (Level 0): Conduct regular reviews of logs and traces to detect emergent issues in deployed agentic systems
- [CTRL-0043](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0043/) (Level 1): Log all tool selection decisions and invocations with comprehensive metadata
- [CTRL-0085](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0085/) (Level 0): Log system health metrics and implement automated alerts for abnormal conditions
- [CTRL-0093](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0093/) (Level 2): Monitor agents for deceptive and collusive behaviour using an independent monitor
- [CTRL-0101](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0101/) (Level 0): Give agents no write access to their own instructions, configuration, permissions, logs, or monitors

## 4.4 · Ensure adequate human oversight

**Controls**

- [CTRL-0042](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0042/) (Level 1): Require explicit human confirmation before executing high-impact or irreversible tool actions
- [CTRL-0053](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0053/) (Level 0): Require human approval for communications on sensitive matters
- [CTRL-0056](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0056/) (Level 0): Require explicit human confirmation before committing any business transaction outside limits that an accountable human has pre-authorised
- [CTRL-0057](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0057/) (Level 2): Require out-of-band confirmation when transaction risk signals are elevated
- [CTRL-0065](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0065/) (Level 0): Ensure every agent can be immediately paused or terminated by its operators
- [CTRL-0070](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0070/) (Level 1): Review all agent-generated code before execution
- [CTRL-0076](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0076/) (Level 0): Require human approval for destructive changes to databases, tables, or files that cannot be readily undone
- [CTRL-0094](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0094/) (Level 0): Measure the quality of human oversight and redesign approval steps that have become rubber stamps
- [CTRL-0099](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0099/) (Level 1): Stop the task when an action is refused and report to a human, instead of letting the agent look for another route
- [CTRL-0105](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0105/) (Level 1): Accept instructions and approvals only through a channel that proves they come from the principal
- [CTRL-0107](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0107/) (Level 1): Set limits on what users may direct the agent to do to others, enforce them across a whole task, and have the agent identify itself

## 4.5 · Establish a vulnerability disclosure process

**Controls**

- [CTRL-0055](https://govtech-responsibleai.github.io/arc-v2-draft/register/ctrl-0055/) (Level 1): Provide alternative channels for users to clarify communications or provide feedback

## Not mapped

No ARC entry maps to these items: 1.1 (Conduct a risk assessment in accordance with relevant standards and best practices).
