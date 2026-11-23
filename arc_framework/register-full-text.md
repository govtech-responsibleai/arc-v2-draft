# Risk Register (full text)

<!-- Generated at build time from arc-risk-register/*.yaml by scripts/build_risk_register.py; there is no source file to edit -->

> **Page Summary**
>
> Every risk and control in ARC risk register **v2.0.0-draft.1** (released 2026-11-23), as plain text generated from the register's YAML. Each entry has its own link: append its ID, e.g. [`#RISK-034`](#RISK-034) or [`#CTRL-0062`](#CTRL-0062). The [Interactive Risk Register](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/risk-register/) has the same content with filters; the machine-readable source is the [register YAML](https://github.com/govtech-responsibleai/arc-v2-draft/tree/v2.0.0-draft.1/arc-risk-register).

**Contents:** [Risks](#risks) (66, grouped by the element they arise from) · [Controls](#controls) (103)

## Risks

Each risk arises from one or more [elements](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/elements/) through one failure mode, and results in one or more hazards. A risk that lists several elements arises from their combination and applies only when all of them are present.

### Component: LLM (CMP-01)

*A large language model (LLM) is a neural network trained on massive text data to learn statistical patterns of language, enabling it to understand, generate, and reason over natural language inputs. It is the core reasoning engine that processes instructions, interprets user inputs, and generates contextually appropriate responses by leveraging its trained language understanding and generation capabilities. There are a large variety of LLMs to choose from, with different sizes, capabilities, and architectures, from large closed-source model families such as OpenAI's GPT, Anthropic's Claude, and Google's Gemini, to open-weights families such as Llama, Qwen, and Mistral, which include small models that can run on local hardware.*

#### RISK-001 · Use of untrusted or compromised LLMs

**Arises from:** Component: LLM (CMP-01)  
**Failure mode:** External Manipulation · **Type:** Safety, Security · **Hazards:** Data (HZ-01), Application (HZ-02), Compromised user safety (HZ-08)

This risk arises when LLMs obtained from untrusted or insufficiently vetted sources have been intentionally poisoned or backdoored during training or distribution, causing them to behave maliciously or unpredictably under specific conditions. Such models may leak sensitive information, bypass safeguards, or execute hidden behaviors that undermine system integrity and trust.

**Controls:**

- [CTRL-0001](#CTRL-0001) (Level 0 · Cardinal): Use only LLMs from verified and trusted model developers
- [CTRL-0002](#CTRL-0002) (Level 0 · Cardinal): Obtain legally binding no-training and no-logging agreements from LLM API service providers
- [CTRL-0003](#CTRL-0003) (Level 1 · Standard): Use only established and verified model loaders in production environments
- [CTRL-0007](#CTRL-0007) (Level 0 · Cardinal): Log all LLM inputs and outputs for regular review
- [CTRL-0042](#CTRL-0042) (Level 1 · Standard; Level 0 · Cardinal when a capability is used to act alone and has effects that are irreversible and external): Require explicit human confirmation before executing high-impact or irreversible tool actions

**Sources:** <https://arxiv.org/abs/2408.02946v6>

**Crosswalks:** OWASP ASI ASI04; OWASP threat T17; MITRE ATLAS AML.T0010.003, AML.T0115.001, AML.T0018.000, AML.T0020

#### RISK-002 · Insufficient alignment of LLM behaviour

**Arises from:** Component: LLM (CMP-01)  
**Failure mode:** Agent Misbehaviour · **Type:** Safety, Security · **Hazards:** Application (HZ-02), Inappropriate content (HZ-07), Compromised user safety (HZ-08)

This risk arises when an LLM's learned objectives and behaviors do not reliably align with intended user goals, system instructions, or organizational policies, leading to inappropriate, unsafe, or undesired outputs. Misalignment may surface as failure to follow constraints, inconsistent reasoning, or behavior that diverges from expected norms in edge cases or complex scenarios.

**Controls:**

- [CTRL-0004](#CTRL-0004) (Level 2 · Best Practice): Review the LLM's system card to inform risk assessment and model selection
- [CTRL-0005](#CTRL-0005) (Level 1 · Standard): Conduct structured evaluation of multiple LLMs for instruction-following, performance, and safety before deployment
- [CTRL-0007](#CTRL-0007) (Level 0 · Cardinal): Log all LLM inputs and outputs for regular review
- [CTRL-0008](#CTRL-0008) (Level 1 · Standard): Implement automated alerts when agent behaviour drifts from predefined thresholds
- [CTRL-0038](#CTRL-0038) (Level 0 · Cardinal): Conduct safety verification with domain-relevant stress tests and adversarial scenarios before deployment and on a regular cadence afterwards
- [CTRL-0042](#CTRL-0042) (Level 1 · Standard; Level 0 · Cardinal when a capability is used to act alone and has effects that are irreversible and external): Require explicit human confirmation before executing high-impact or irreversible tool actions

**Sources:** <https://arxiv.org/abs/2406.10162>

**Crosswalks:** OWASP ASI ASI10; OWASP threat T7

#### RISK-003 · Insufficient LLM capability and reliability

**Arises from:** Component: LLM (CMP-01)  
**Failure mode:** Agent Error · **Type:** Safety, Security · **Hazards:** Application (HZ-02), Compromised user safety (HZ-08), Misrepresentation (HZ-09)

This risk arises when an LLM lacks sufficient capability, robustness, or reasoning performance to correctly interpret instructions, handle edge cases, or detect unsafe situations. As a result, the model may produce incorrect, misleading, or unsafe outputs that create downstream safety or security failures in systems that rely on its judgments.

**Controls:**

- [CTRL-0004](#CTRL-0004) (Level 2 · Best Practice): Review the LLM's system card to inform risk assessment and model selection
- [CTRL-0005](#CTRL-0005) (Level 1 · Standard): Conduct structured evaluation of multiple LLMs for instruction-following, performance, and safety before deployment
- [CTRL-0007](#CTRL-0007) (Level 0 · Cardinal): Log all LLM inputs and outputs for regular review
- [CTRL-0038](#CTRL-0038) (Level 0 · Cardinal): Conduct safety verification with domain-relevant stress tests and adversarial scenarios before deployment and on a regular cadence afterwards
- [CTRL-0042](#CTRL-0042) (Level 1 · Standard; Level 0 · Cardinal when a capability is used to act alone and has effects that are irreversible and external): Require explicit human confirmation before executing high-impact or irreversible tool actions

**Sources:** <https://arxiv.org/abs/2505.00212>

**Crosswalks:** OWASP ASI ASI08; OWASP threat T5

#### RISK-050 · Deceptive behaviour toward overseers

**Arises from:** Component: LLM (CMP-01)  
**Failure mode:** Agent Misbehaviour · **Type:** Safety, Security · **Hazards:** Identity and access management (HZ-04), Misrepresentation (HZ-09)

This risk arises when an agent pursuing an objective misrepresents what it has done or found, edits or obscures its own history or logs, or socially engineers the humans overseeing it in order to obtain approval or avoid intervention. Unlike an error, the behaviour is goal-directed and can look legitimate step by step, so the evidence needed to detect it may have been altered by the agent itself. As a result, oversight based on the agent's own reports provides false assurance, and unsanctioned actions proceed under the appearance of compliance.

**Controls:**

- [CTRL-0007](#CTRL-0007) (Level 0 · Cardinal): Log all LLM inputs and outputs for regular review
- [CTRL-0034](#CTRL-0034) (Level 0 · Cardinal): Conduct regular reviews of logs and traces to detect emergent issues in deployed agentic systems
- [CTRL-0038](#CTRL-0038) (Level 0 · Cardinal): Conduct safety verification with domain-relevant stress tests and adversarial scenarios before deployment and on a regular cadence afterwards
- [CTRL-0093](#CTRL-0093) (Level 2 · Best Practice): Monitor agents for deceptive and collusive behaviour using an independent monitor

**Sources:** <https://www.aisi.gov.uk/blog/incident-report-unsanctioned-agent-behaviour-during-cyber-testing> · <https://fortune.com/2026/06/18/google-deepmind-unveils-plan-to-protect-itself-from-its-own-rogue-ai-agents/> · <https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/>

**Crosswalks:** OWASP ASI ASI10, ASI09; OWASP threat T7; MITRE ATLAS AML.T0138, AML.T0073

#### RISK-061 · Dependence on a model provider

**Arises from:** Component: LLM (CMP-01)  
**Failure mode:** Tool or Resource Malfunction · **Type:** Security · **Hazards:** Application (HZ-02)

This risk arises when an agentic system depends on a model that another party hosts, and that party withdraws it, changes it, limits access to it, or suffers an outage. A model can be retired at short notice, updated in ways that change how it calls tools or follows instructions, degraded by a fault on the provider's side that goes unannounced for weeks, or made unavailable by a commercial or regulatory decision. As a result, an agent may stop working, or may keep working while behaving differently from the system that was evaluated and approved, as when infrastructure faults at a provider silently degraded model output for weeks, a provider disabled two models for all customers following an export-control directive, and a regional degradation at a provider caused cascading failures in a customer-service agent product.

**Controls:**

- [CTRL-0005](#CTRL-0005) (Level 1 · Standard): Conduct structured evaluation of multiple LLMs for instruction-following, performance, and safety before deployment
- [CTRL-0038](#CTRL-0038) (Level 0 · Cardinal): Conduct safety verification with domain-relevant stress tests and adversarial scenarios before deployment and on a regular cadence afterwards
- [CTRL-0103](#CTRL-0103) (Level 1 · Standard): Pin the model version, re-run evaluations before any model change, and keep a tested fallback

**Sources:** <https://www.anthropic.com/engineering/a-postmortem-of-three-recent-issues> · <https://www.anthropic.com/news/fable-mythos-access> · <https://support.zendesk.com/hc/en-us/articles/10932821917082-Service-Incident-June-19-2026-AI-Agents-OpenAI-service-delays-and-error-issues>

**Crosswalks:** OWASP ASI ASI08

### Component: Instructions (CMP-02)

*Instructions are structured inputs provided to an LLM that define the task, constraints, and context, guiding how the model interprets inputs and generates outputs. They guide the LLM's decision process by conditioning prompts and tool use with objectives, policies, and guardrails. Forms include system prompts, policies, schemas, and rubrics, varying by framework and enforcement strictness.*

#### RISK-008 · Vague or underspecified instructions

**Arises from:** Component: Instructions (CMP-02)  
**Failure mode:** Agent Error · **Type:** Safety, Security · **Hazards:** Application (HZ-02), Compromised user safety (HZ-08)

This risk arises when instructions provided to an LLM are ambiguous, incomplete, or poorly scoped, leading the model to make unintended assumptions when interpreting tasks or constraints. As a result, the LLM may behave unpredictably, bypass safeguards, or take actions that introduce safety or security risks.

**Controls:**

- [CTRL-0016](#CTRL-0016) (Level 0 · Cardinal): Define clearly the agent's role, scope, and non-goals in the system prompt
- [CTRL-0017](#CTRL-0017) (Level 1 · Standard): Define clear success criteria for the agent's tasks
- [CTRL-0018](#CTRL-0018) (Level 2 · Best Practice): Define default behaviour when the agent encounters ambiguous situations

**Sources:** <https://arxiv.org/abs/2502.13295> · <https://arxiv.org/abs/2505.13360v1>

**Crosswalks:** OWASP ASI ASI01; OWASP threat T6

#### RISK-009 · Unsanitised inputs in system instructions

**Arises from:** Component: Instructions (CMP-02)  
**Failure mode:** External Manipulation · **Type:** Safety, Security · **Hazards:** Application (HZ-02), Compromised user safety (HZ-08)

This risk arises when untrusted or user-controlled inputs are incorporated into system instructions without proper sanitisation or validation. As a result, malicious or malformed content may manipulate the model's behaviour, override intended constraints, or trigger unintended actions.

**Controls:**

- [CTRL-0019](#CTRL-0019) (Level 0 · Cardinal): Keep untrusted inputs out of system instructions, and enclose any untrusted content given to the model in delimiters marked as data
- [CTRL-0020](#CTRL-0020) (Level 2 · Best Practice): Use a dedicated LLM to extract required fields from inputs and filter out extraneous text or embedded instructions
- [CTRL-0090](#CTRL-0090) (Level 1 · Standard): Enforce data-flow and capability policies at runtime with a deterministic policy layer that separates untrusted content from privileged actions

**Sources:** <https://arxiv.org/abs/2502.15851v1> · <https://aclanthology.org/2025.naacl-long.425.pdf>

**Crosswalks:** OWASP ASI ASI01; OWASP threat T6; MITRE ATLAS AML.T0051

#### RISK-058 · Instruction and configuration files as a way in

**Arises from:** Component: Instructions (CMP-02)  
**Failure mode:** External Manipulation · **Type:** Security · **Hazards:** Data (HZ-01), Application (HZ-02)

This risk arises when an agent loads instructions, rules, settings, hooks, skills, or tool configuration from files that someone other than its operator can write: a rules file in a cloned repository, an instruction file in a downloads folder, a project-level settings file, or a tool configuration that the agent itself can edit. These files are read automatically, often before any trust prompt, and what they contain is treated as the operator's own instructions or runs as commands. As a result, anyone who can place or change such a file can direct the agent or run code on the machine it works on, and the change persists across sessions, as when malicious packages planted hidden instructions in coding assistants' instruction files, a cloned repository's settings took effect before the user was asked to trust it, and a crafted chat message led a coding agent to rewrite its own tool configuration.

**Controls:**

- [CTRL-0019](#CTRL-0019) (Level 0 · Cardinal): Keep untrusted inputs out of system instructions, and enclose any untrusted content given to the model in delimiters marked as data
- [CTRL-0091](#CTRL-0091) (Level 0 · Cardinal): Require verified provenance for tools, skills, and dependencies, and re-verify them on every update
- [CTRL-0100](#CTRL-0100) (Level 0 · Cardinal): Load instruction, settings, and tool-configuration files only from locations the operator controls, and ask before using any that arrive with a workspace
- [CTRL-0101](#CTRL-0101) (Level 0 · Cardinal): Give agents no write access to their own instructions, configuration, permissions, logs, or monitors

**Sources:** <https://socket.dev/blog/trapdoor-crypto-stealer-npm-pypi-crates> · <https://research.checkpoint.com/2026/rce-and-api-token-exfiltration-through-claude-code-project-files-cve-2025-59536/> · <https://nvd.nist.gov/vuln/detail/CVE-2025-54135> · <https://www.pillar.security/blog/new-vulnerability-in-github-copilot-and-cursor-how-hackers-can-weaponize-code-agents>

**Crosswalks:** OWASP ASI ASI01, ASI04; OWASP threat T6, T17; MITRE ATLAS AML.T0051.001, AML.T0010.005

#### RISK-067 · Use of the agent by its own principal against others

**Arises from:** Component: Instructions (CMP-02)  
**Failure mode:** Misuse by the Principal · **Type:** Safety · **Hazards:** Illegal and CBRNE activities (HZ-05), Harm to third parties (HZ-11)

This risk arises when the person or organisation that an agent works for directs it to act against others, or deploys it in a way that disregards them. A user may have it gather and compile personal information about people, build material for fraud, or act on another party's service in breach of that party's terms while disguised as a human; an operator may release an agent that transacts with businesses that never agreed to it. The agent does what it is told, so controls aimed at manipulation and error do not apply, and safeguards that judge each step in isolation can be defeated by spreading a harmful aim across routine steps. As a result, the organisation that provides or operates the agent may be answerable for harassment, privacy violations, fraud, or unauthorised access carried out through it, as when an agent compiled lists of people in vulnerable groups on request, an app-building agent produced and hosted complete phishing pages, and a shopping agent was alleged to have entered customer accounts on a retailer's site while presenting itself as a human user.

**Controls:**

- [CTRL-0008](#CTRL-0008) (Level 1 · Standard): Implement automated alerts when agent behaviour drifts from predefined thresholds
- [CTRL-0038](#CTRL-0038) (Level 0 · Cardinal): Conduct safety verification with domain-relevant stress tests and adversarial scenarios before deployment and on a regular cadence afterwards
- [CTRL-0044](#CTRL-0044) (Level 1 · Standard): Implement output safety guardrails to detect and prevent generation of undesirable content
- [CTRL-0052](#CTRL-0052) (Level 2 · Best Practice): Declare upfront that communications are generated by an AI system
- [CTRL-0107](#CTRL-0107) (Level 1 · Standard): Set limits on what users may direct the agent to do to others, enforce them across a whole task, and have the agent identify itself

**Sources:** <https://hntrbrk.com/breaking-news/muse-doxxing> · <https://labs.guard.io/vibescamming-from-prompt-to-phish-benchmarking-popular-ai-agents-resistance-to-the-dark-side-1ec2fbdf0a35> · <https://www.perplexity.ai/hub/blog/bullying-is-not-innovation> · <https://www.modernretail.co/technology/brands-are-upset-that-buy-for-me-is-featuring-their-products-on-amazon-without-permission/>

### Component: Tools (CMP-03)

*Tools are external functions, APIs, or resources attached to an LLM that extend its capabilities beyond text generation, enabling it to retrieve information, execute actions, and affect external systems (e.g., search, code execution, database queries, or file manipulation), typically through structured interfaces such as the Model Context Protocol (MCP) that constrain invocation, inputs, permissions, and outputs for agentic control and safety.*

#### RISK-004 · Weak tool authentication and authorisation controls

**Arises from:** Component: Tools (CMP-03)  
**Failure mode:** Tool or Resource Malfunction · **Type:** Security · **Hazards:** Application (HZ-02), Identity and access management (HZ-04)

This risk arises when tools connected to an agent lack robust authentication or fine-grained authorisation mechanisms, allowing unauthorised access or misuse of tool capabilities. As a result, attackers or misbehaving agents may compromise the system by invoking sensitive actions, escalating privileges, or manipulating external resources beyond intended boundaries.

**Controls:**

- [CTRL-0009](#CTRL-0009) (Level 0 · Cardinal): Use only tool servers and APIs, including MCP servers, that implement robust authentication mechanisms in production environments
- [CTRL-0032](#CTRL-0032) (Level 0 · Cardinal): Centralise observability data collection in a unified backend system

**Sources:** <https://arxiv.org/abs/2504.08623> · <https://arxiv.org/abs/2505.14590> · <https://www.redhat.com/en/blog/model-context-protocol-mcp-understanding-security-risks-and-controls>

**Crosswalks:** OWASP ASI ASI03, ASI02; OWASP threat T3, T2; MITRE ATLAS AML.T0053, AML.T0091.000

#### RISK-005 · Lack of proper role-based access control for tools

**Arises from:** Component: Tools (CMP-03)  
**Failure mode:** Tool or Resource Malfunction · **Type:** Security · **Hazards:** Identity and access management (HZ-04)

This risk arises when tools exposed to an agent do not enforce clear, role-based access controls, allowing agents to access capabilities or resources beyond their intended responsibilities. As a result, agents may perform unauthorised actions, misuse sensitive tools, or exceed their permitted scope, increasing the likelihood of security and operational failures.

**Controls:**

- [CTRL-0011](#CTRL-0011) (Level 0 · Cardinal): Limit token scopes to the minimum privileges required and avoid broad or wildcard scopes

**Sources:** <https://embracethered.com/blog/posts/2023/chatgpt-plugin-vulns-chat-with-code/>

**Crosswalks:** OWASP ASI ASI03; OWASP threat T3; MITRE ATLAS AML.T0053

#### RISK-007 · Lack of input sanitisation

**Arises from:** Component: Tools (CMP-03)  
**Failure mode:** Tool or Resource Malfunction · **Type:** Safety, Security · **Hazards:** Data (HZ-01), Application (HZ-02), Compromised user safety (HZ-08)

This risk arises when inputs passed from the agent to tools are not properly validated or sanitised, allowing malformed or malicious data to be processed. As a result, tools may be exploited through injection attacks, unintended command execution, or data corruption.

**Controls:**

- [CTRL-0015](#CTRL-0015) (Level 1 · Standard): Treat all tool metadata and outputs as untrusted input requiring validation

**Sources:** <https://arxiv.org/abs/2503.12188v1> · <https://www.cve.org/CVERecord?id=CVE-2024-7042>

**Crosswalks:** OWASP ASI ASI02, ASI05; OWASP threat T2, T11; MITRE ATLAS AML.T0053, AML.T0050

#### RISK-048 · Compromise through the tool, skill, and dependency supply chain

**Arises from:** Component: Tools (CMP-03)  
**Failure mode:** External Manipulation · **Type:** Security · **Hazards:** Data (HZ-01), Application (HZ-02)

This risk arises when the tools, MCP servers, agent "skills" or plug-ins, prompt templates, and software packages an agent relies on are obtained through registries, marketplaces, package managers, or update channels that an attacker can seed, tamper with, or silently change after approval (the "rug pull"). Unlike the poisoning of a specific tool (RISK-006), the vector is the distribution channel itself, and agents increasingly perform installs and updates autonomously. As a result, malicious code or instructions reach production with the trust of a vetted dependency, as with the postmark-mcp backdoor, the mcp-remote remote-code-execution flaw, and marketplaces found to carry large numbers of malicious skills.

**Controls:**

- [CTRL-0015](#CTRL-0015) (Level 1 · Standard): Treat all tool metadata and outputs as untrusted input requiring validation
- [CTRL-0091](#CTRL-0091) (Level 0 · Cardinal): Require verified provenance for tools, skills, and dependencies, and re-verify them on every update

**Sources:** <https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/> · <https://morphisec.com/mcp-attack-chain/> · <https://www.reco.ai/blog/openclaw-the-ai-agent-security-crisis-unfolding-right-now>

**Crosswalks:** OWASP ASI ASI04; OWASP threat T17; MITRE ATLAS AML.T0010.005, AML.T0010.001, AML.T0115.002, AML.T0109

### Component: Memory (CMP-04)

*Memory is a persistent or semi-persistent data store attached to an LLM that retains information across interactions—such as conversation history, user preferences, task state, and retrieved knowledge—enabling continuity, long-horizon reasoning, and personalization in agentic workflows. Memory may be implemented through mechanisms such as context windows, vector databases, episodic logs, or external state stores, each offering different trade-offs in latency, fidelity, and persistence. Every agent has working memory, the context it carries within a task; a system has persistent memory when it keeps information beyond a single session or shares it across users or tasks.*

**Present when:** The system keeps information beyond a single session, or shares it across users or tasks. These risks apply only to systems that have this element.

#### RISK-010 · Poisoned memory

**Arises from:** Component: Memory (CMP-04)  
**Failure mode:** External Manipulation · **Type:** Safety, Security · **Hazards:** Data (HZ-01), Compromised user safety (HZ-08), Misrepresentation (HZ-09)

This risk arises when the memory component of an agentic system is intentionally or inadvertently populated with malicious, misleading, or corrupted information. As a result, the agent may rely on compromised memory to make decisions, propagate false information, or exhibit persistent unsafe behaviour across interactions.

**Controls:**

- [CTRL-0021](#CTRL-0021) (Level 0 · Cardinal): Implement allowlists and denylists to restrict what categories of information can be written to the agent's persistent memory
- [CTRL-0022](#CTRL-0022) (Level 1 · Standard): Implement content filtering on writes to persistent memory to detect and block known unsafe content patterns
- [CTRL-0023](#CTRL-0023) (Level 2 · Best Practice): Log all modifications to persistent memory with comprehensive source metadata for audit purposes

**Sources:** <https://arxiv.org/abs/2505.11548v2> · <https://arxiv.org/abs/2402.07867> · <https://openreview.net/pdf?id=6SIymOqJlc>

**Crosswalks:** OWASP ASI ASI06; OWASP threat T1; MITRE ATLAS AML.T0080.000, AML.T0070

#### RISK-011 · Sensitive data leakage across memory contexts

**Arises from:** Component: Memory (CMP-04)  
**Failure mode:** Tool or Resource Malfunction · **Type:** Safety, Security · **Hazards:** Data (HZ-01), Compromised user safety (HZ-08)

This risk arises when the memory component retains or exposes sensitive information across sessions, tasks, or users with different scopes or authorisations. As a result, data may be inappropriately accessed or reused in unrelated contexts, leading to privacy breaches, confidentiality violations, or unauthorised disclosure.

**Controls:**

- [CTRL-0021](#CTRL-0021) (Level 0 · Cardinal): Implement allowlists and denylists to restrict what categories of information can be written to the agent's persistent memory
- [CTRL-0023](#CTRL-0023) (Level 2 · Best Practice): Log all modifications to persistent memory with comprehensive source metadata for audit purposes
- [CTRL-0047](#CTRL-0047) (Level 0 · Cardinal): Implement output guardrails to detect and redact personally identifiable information

**Sources:** <https://arxiv.org/abs/2506.12699v2>

**Crosswalks:** OWASP ASI ASI06, ASI03; OWASP threat T1, T3

### Component: Protocols (CMP-05)

*Protocols are the standard interfaces through which an agentic system connects to tools, services, and agents that another party builds or operates, such as the Model Context Protocol (MCP) for tool servers and agent-to-agent protocols such as A2A. A protocol governs how the other party is discovered, how it is identified and authenticated, what it declares about itself to the agent (tool descriptions, capability lists, agent cards), and how requests and results pass between the two. A system has this component when it makes at least one such connection, in either direction: its agents reach another party's tool server or agent, or another party's agents reach it. A function or API wrapper that the system's own team writes is a tool, not a protocol connection, because the team controls the description the agent sees.*

**Present when:** At least one tool server or agent that another party builds or operates is connected to the system through an agent protocol such as MCP or A2A, in either direction. These risks apply only to systems that have this element.

#### RISK-006 · Tool poisoning by malicious actors

**Arises from:** Component: Protocols (CMP-05)  
**Failure mode:** External Manipulation · **Type:** Safety, Security · **Hazards:** Data (HZ-01), Application (HZ-02), Compromised user safety (HZ-08)

This risk arises when a tool server or agent that another party builds or operates describes itself in a way that manipulates the agent that connects to it. Instructions can be hidden in tool descriptions, parameter schemas, or agent cards; a tool can imitate or shadow a trusted one; and a definition can change after it was approved. The agent reads these descriptions as part of its instructions, so it may follow them even when the tool is never called. As a result, the agent may unknowingly execute malicious actions, leak sensitive information, or produce manipulated outputs that undermine system integrity and trust.

**Controls:**

- [CTRL-0013](#CTRL-0013) (Level 0 · Cardinal): Test all untested MCP servers in a sandboxed environment before deploying to production
- [CTRL-0015](#CTRL-0015) (Level 1 · Standard): Treat all tool metadata and outputs as untrusted input requiring validation
- [CTRL-0091](#CTRL-0091) (Level 0 · Cardinal): Require verified provenance for tools, skills, and dependencies, and re-verify them on every update

**Sources:** <https://embracethered.com/blog/posts/2025/model-context-protocol-security-risks-and-exploits/> · <https://arxiv.org/abs/2508.14925>

**Crosswalks:** OWASP ASI ASI04, ASI02; OWASP threat T17, T2; MITRE ATLAS AML.T0110, AML.T0011.002

#### RISK-064 · Harm from a connected tool server or agent to the system that connects to it

**Arises from:** Component: Protocols (CMP-05)  
**Failure mode:** External Manipulation · **Type:** Security · **Hazards:** Data (HZ-01), Application (HZ-02), Identity and access management (HZ-04)

This risk arises when a tool server or agent that another party builds or operates attacks the system that connects to it, or fails in a way that damages it. The connection itself is the route: a malicious server can abuse the protocol's authorisation or discovery steps to run commands on the connecting machine, obtain credentials meant for other services, or pose as a trusted server, and a faulty shared server can deliver one client's results to another. RISK-006 covers a connected party misleading the agent through what it says about itself; this risk covers harm that needs no cooperation from the model at all. As a result, connecting to a server can compromise the host, its credentials, or other users' data, as when a malicious tool server could run commands on any machine that connected to it through a widely used client, and a race condition in a protocol library sent tool results to the wrong client.

**Controls:**

- [CTRL-0009](#CTRL-0009) (Level 0 · Cardinal): Use only tool servers and APIs, including MCP servers, that implement robust authentication mechanisms in production environments
- [CTRL-0010](#CTRL-0010) (Level 1 · Standard): Use only MCP servers that validate credentials on every inbound request
- [CTRL-0012](#CTRL-0012) (Level 2 · Best Practice): Use only MCP servers that integrate with authorisation servers implementing per-client consent mechanisms
- [CTRL-0013](#CTRL-0013) (Level 0 · Cardinal): Test all untested MCP servers in a sandboxed environment before deploying to production
- [CTRL-0031](#CTRL-0031) (Level 1 · Standard): Use only MCP servers that validate token provenance and prohibit unauthorised token passthrough
- [CTRL-0091](#CTRL-0091) (Level 0 · Cardinal): Require verified provenance for tools, skills, and dependencies, and re-verify them on every update
- [CTRL-0096](#CTRL-0096) (Level 0 · Cardinal): Harden agent frameworks and runtimes before exposing them, and patch framework vulnerabilities promptly

**Sources:** <https://jfrog.com/blog/2025-6514-critical-mcp-remote-rce-vulnerability/> · <https://vulnerablemcp.info/vuln/cve-2026-25536-sdk-cross-client-data-leak.html> · <https://www.pillar.security/blog/open-and-shut-remote-code-execution-in-opencode-via-mcp-oauth> · <https://github.com/advisories/GHSA-jm63-cq47-j5jp>

**Crosswalks:** OWASP ASI ASI04, ASI07; OWASP threat T16, T17; MITRE ATLAS AML.T0010.005, AML.T0011.002

### Design: Agentic Architecture (DSN-01)

*The agentic architecture defines how an agentic system's control flow is structured: the loop through which a single agent plans, acts, and observes, and, where there are several agents, how they are structured, interconnected, and coordinated to collectively perform tasks that exceed the capabilities of a single agent. This includes orchestration patterns such as hierarchical delegation, parallel agent execution, sequential handoffs between specialised agents, shared or centralized planning components, and the communication protocols that govern information exchange and coordination across the system. Risks specific to multiple agents apply only to systems with the Agent Delegation capability.*

#### RISK-014 · Feedback loops and runaway agent behaviour

**Arises from:** Design: Agentic Architecture (DSN-01)  
**Failure mode:** Agent Error · **Type:** Safety, Security · **Hazards:** Infrastructure and network (HZ-03), Compromised user safety (HZ-08)

This risk arises when an agent repeatedly acts on its own outputs, or agents reinforce each other’s decisions, outputs, or errors, with no bound on how many steps it takes, how much it spends, or how far its actions reach. As a result, feedback loops may form that escalate actions, consume excessive resources, or cause the system to persist in harmful or unintended behaviour without effective human intervention.

**Controls:**

- [CTRL-0027](#CTRL-0027) (Level 1 · Standard): Implement circuit breakers to prevent cascading failures in multi-agent systems
- [CTRL-0029](#CTRL-0029) (Level 0 · Cardinal): Grant agents only the minimum permissions required for their designated tasks
- [CTRL-0040](#CTRL-0040) (Level 0 · Cardinal): Limit the scope of agent actions through predefined thresholds and baselines
- [CTRL-0065](#CTRL-0065) (Level 0 · Cardinal): Ensure every agent can be immediately paused or terminated by its operators

**Sources:** <https://arxiv.org/abs/2402.06627> · <https://arxiv.org/abs/2502.14143>

**Crosswalks:** OWASP ASI ASI08, ASI10; OWASP threat T5, T4

### Design: Roles and Access Controls (DSN-02)

*Roles and access controls define and enforce differentiated roles, permissions, and scopes of authority across agents and system components, specifying what actions each agent is allowed to perform and which resources it may access. This includes assigning functional roles to agents, configuring tool- and data-level permissions, scoping credentials or identities, and enforcing access policies that govern interactions with files, systems, services, or other agents.*

#### RISK-015 · Overly permissive roles and permissions

**Arises from:** Design: Roles and Access Controls (DSN-02)  
**Failure mode:** Safeguard Failure · **Type:** Security · **Hazards:** Identity and access management (HZ-04)

This risk arises when agents are granted roles or permissions that exceed their intended responsibilities or operational needs. As a result, agents may access sensitive resources, invoke high-impact capabilities, or perform unauthorised actions that increase the likelihood of security, privacy, or operational failures.

**Controls:**

- [CTRL-0029](#CTRL-0029) (Level 0 · Cardinal): Grant agents only the minimum permissions required for their designated tasks
- [CTRL-0030](#CTRL-0030) (Level 1 · Standard): Assign each agent a unique, verifiable identity with no shared credentials

**Sources:** <https://genai.owasp.org/llmrisk/llm062025-excessive-agency/> · <https://www.cyber.gov.au/publication/careful-adoption-of-agentic-ai-services>

**Crosswalks:** OWASP ASI ASI03; OWASP threat T3; MITRE ATLAS AML.T0053

#### RISK-016 · Unauthorised privilege escalation

**Arises from:** Design: Roles and Access Controls (DSN-02)  
**Failure mode:** Safeguard Failure · **Type:** Security · **Hazards:** Identity and access management (HZ-04)

This risk arises when agents are able to gain elevated roles or permissions beyond those initially granted, whether through misconfiguration, exploitation, or unintended system behaviour. As a result, agents may bypass intended controls, access restricted resources, or execute actions that undermine system security and governance.

**Controls:**

- [CTRL-0029](#CTRL-0029) (Level 0 · Cardinal): Grant agents only the minimum permissions required for their designated tasks
- [CTRL-0030](#CTRL-0030) (Level 1 · Standard): Assign each agent a unique, verifiable identity with no shared credentials
- [CTRL-0032](#CTRL-0032) (Level 0 · Cardinal): Centralise observability data collection in a unified backend system

**Sources:** <https://arxiv.org/abs/2503.15547> · <https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/>

**Crosswalks:** OWASP ASI ASI03; OWASP threat T3; MITRE ATLAS AML.T0053, AML.T0117

#### RISK-054 · Insecure default configuration of agent frameworks and runtimes

**Arises from:** Design: Roles and Access Controls (DSN-02)  
**Failure mode:** Tool or Resource Malfunction · **Type:** Security · **Hazards:** Infrastructure and network (HZ-03), Identity and access management (HZ-04)

This risk arises when the frameworks and runtimes an agent is built on ship with insecure defaults — authentication disabled, services listening on all interfaces, permissive origin checks on local control channels, unsafe deserialisation of persisted state, or default credentials — and deployers inherit them unchanged. As a result, any reachable attacker can drive the agent and use the credentials and tools it holds, as shown by a one-click remote-code-execution flaw in a widely installed open-source agent and a chain of deserialisation flaws in agent orchestration frameworks.

**Controls:**

- [CTRL-0009](#CTRL-0009) (Level 0 · Cardinal): Use only tool servers and APIs, including MCP servers, that implement robust authentication mechanisms in production environments
- [CTRL-0096](#CTRL-0096) (Level 0 · Cardinal): Harden agent frameworks and runtimes before exposing them, and patch framework vulnerabilities promptly

**Sources:** <https://thehackernews.com/2026/06/langgraph-flaw-chain-exposes-self.html> · <https://nvd.nist.gov/vuln/detail/CVE-2026-25253> · <https://github.com/advisories/GHSA-g48c-2wqr-h844>

**Crosswalks:** OWASP ASI ASI03, ASI05; OWASP threat T3, T11; MITRE ATLAS AML.T0132, AML.T0049, AML.T0083

#### RISK-060 · Agent credentials that are over-broad, long-lived, or outlive their use

**Arises from:** Design: Roles and Access Controls (DSN-02)  
**Failure mode:** Safeguard Failure · **Type:** Security · **Hazards:** Data (HZ-01), Identity and access management (HZ-04)

This risk arises when the identities and credentials that agents use are broader than the task needs, do not expire, are stored where other software can read them, or stay valid after the agent, the integration, or the vendor relationship has ended. Agents, and the platforms and vendors that act for them, accumulate tokens for many systems, and a single theft then opens all of them. As a result, a compromise of an agent, of a developer's machine, or of an agent vendor gives an attacker standing access to the organisation's systems, as when stolen tokens belonging to a sales chat agent were used to pull data from hundreds of its customers' environments, a breach at an agent-integration platform exposed more than ten thousand credentials held for customers' agents, and a software release was hijacked through an agent-platform key that had never been revoked.

**Controls:**

- [CTRL-0011](#CTRL-0011) (Level 0 · Cardinal): Limit token scopes to the minimum privileges required and avoid broad or wildcard scopes
- [CTRL-0029](#CTRL-0029) (Level 0 · Cardinal): Grant agents only the minimum permissions required for their designated tasks
- [CTRL-0030](#CTRL-0030) (Level 1 · Standard): Assign each agent a unique, verifiable identity with no shared credentials
- [CTRL-0102](#CTRL-0102) (Level 1 · Standard): Issue agents short-lived, task-scoped credentials, keep an inventory of them, and revoke them when an agent or integration is retired

**Sources:** <https://cloud.google.com/blog/topics/threat-intelligence/data-theft-salesforce-instances-via-salesloft-drift> · <https://composio.dev/blog/composio-may-2026-security-incident> · <https://docs.litellm.ai/blog/security-incident-oct-21-2026-attack-chain> · <https://vercel.com/kb/bulletin/vercel-april-2026-security-incident>

**Crosswalks:** OWASP ASI ASI03; OWASP threat T3, T9; MITRE ATLAS AML.T0055, AML.T0083, AML.T0091.000

#### RISK-065 · Instructions or approvals forged in the principal's name

**Arises from:** Design: Roles and Access Controls (DSN-02)  
**Failure mode:** External Manipulation · **Type:** Security · **Hazards:** Data (HZ-01), Identity and access management (HZ-04)

This risk arises when something other than the principal can supply what the agent treats as the principal's own instruction or approval. A link can open the agent with a prompt already filled in and submitted, another program or browser extension on the same machine can drive the agent's interface or click its approval prompts, a command-line flag can start the agent with its permission checks turned off, and a compromised operator console can queue instructions as if they came from the operator. The register's injection risks concern content that the agent reads; here the attacker speaks with the user's voice. As a result, the agent carries out an attacker's request with the user's full authority, and its approval steps are satisfied without a person, as when a link with a pre-filled prompt made an assistant send the user's data to an attacker, malicious packages invoked developers' locally installed coding agents with their safety checks disabled, and a trading agent sent funds to an attacker who had queued prompts through its operator dashboard.

**Controls:**

- [CTRL-0042](#CTRL-0042) (Level 1 · Standard; Level 0 · Cardinal when a capability is used to act alone and has effects that are irreversible and external): Require explicit human confirmation before executing high-impact or irreversible tool actions
- [CTRL-0096](#CTRL-0096) (Level 0 · Cardinal): Harden agent frameworks and runtimes before exposing them, and patch framework vulnerabilities promptly
- [CTRL-0105](#CTRL-0105) (Level 1 · Standard): Accept instructions and approvals only through a channel that proves they come from the principal

**Sources:** <https://www.varonis.com/blog/reprompt> · <https://nx.dev/blog/s1ngularity-postmortem> · <https://incidentdatabase.ai/cite/1003/> · <https://www.oasis.security/resources/reports/claude-url-scheme-prompt-injection>

**Crosswalks:** OWASP ASI ASI09, ASI03; OWASP threat T9; MITRE ATLAS AML.T0073, AML.T0078

### Design: Monitoring and Traceability (DSN-03)

*Monitoring and traceability provide systematic visibility into agent behaviour, interactions, and decision pathways by recording, observing, and correlating agent actions and system events over time. This includes logging agent inputs and outputs, tracking tool invocations and state changes, capturing decision traces or execution paths, and surfacing telemetry or audit records that support analysis and review of system behaviour.*

#### RISK-017 · Delayed failure detection due to limited monitoring

**Arises from:** Design: Monitoring and Traceability (DSN-03)  
**Failure mode:** Safeguard Failure · **Type:** Safety, Security · **Hazards:** Application (HZ-02), Compromised user safety (HZ-08)

This risk arises when monitoring systems provide insufficient visibility into agent behaviour, system events, or execution outcomes. As a result, failures, anomalies, or unintended actions may go undetected for extended periods, increasing the impact and difficulty of remediation.

**Controls:**

- [CTRL-0032](#CTRL-0032) (Level 0 · Cardinal): Centralise observability data collection in a unified backend system
- [CTRL-0033](#CTRL-0033) (Level 1 · Standard): Standardise trace attributes for agent operations using consistent semantic conventions

**Sources:** <https://arxiv.org/abs/2401.13138>

**Crosswalks:** OWASP ASI ASI08; OWASP threat T8

#### RISK-018 · Inability to audit failures due to missing decision traces

**Arises from:** Design: Monitoring and Traceability (DSN-03)  
**Failure mode:** Safeguard Failure · **Type:** Security · **Hazards:** Application (HZ-02)

This risk arises when monitoring systems do not capture sufficient reasoning steps, decision pathways, or execution context for agent actions. As a result, operators may be unable to reconstruct failures, understand why specific outcomes occurred, or conduct effective audits and post-incident reviews.

**Controls:**

- [CTRL-0032](#CTRL-0032) (Level 0 · Cardinal): Centralise observability data collection in a unified backend system
- [CTRL-0034](#CTRL-0034) (Level 0 · Cardinal): Conduct regular reviews of logs and traces to detect emergent issues in deployed agentic systems

**Sources:** <https://arxiv.org/abs/2411.05285> · <https://github.com/open-telemetry/semantic-conventions-genai>

**Crosswalks:** OWASP ASI ASI08, ASI10; OWASP threat T8

#### RISK-052 · Automation bias and erosion of human oversight

**Arises from:** Design: Monitoring and Traceability (DSN-03)  
**Failure mode:** Safeguard Failure · **Type:** Safety, Security · **Hazards:** Application (HZ-02), Compromised user safety (HZ-08)

This risk arises when human approval steps stop providing meaningful review: overseers approve by default under volume (one large deployment measured users approving around 93% of permission prompts), lack the context or expertise to evaluate what the agent proposes, or use interfaces designed for speed rather than scrutiny. Controls that assume a considered human decision then give false assurance, and adversaries can exploit the trust users place in fluent, confident agents. As a result, high-impact actions proceed with nominal rather than actual oversight.

**Controls:**

- [CTRL-0042](#CTRL-0042) (Level 1 · Standard; Level 0 · Cardinal when a capability is used to act alone and has effects that are irreversible and external): Require explicit human confirmation before executing high-impact or irreversible tool actions
- [CTRL-0049](#CTRL-0049) (Level 0 · Cardinal): Implement UI/UX cues to communicate the risk of hallucination to users
- [CTRL-0094](#CTRL-0094) (Level 0 · Cardinal): Measure the quality of human oversight and redesign approval steps that have become rubber stamps

**Sources:** <https://www.anthropic.com/engineering/how-we-contain-claude> · <https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf> · <https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/>

**Crosswalks:** OWASP ASI ASI09; OWASP threat T10; MITRE ATLAS AML.T0067, AML.T0046

### Capability: Planning and Goal Management (CAP-01)

*The capability to develop detailed, step-by-step, and executable plans with specific tasks in response to broad instructions. This includes prioritizing activities based on importance and dependencies between tasks, monitoring how well its plan is working, and adjusting when circumstances change or obstacles arise.*

#### RISK-019 · Generating plans that fail to meet the user's requirements

**Arises from:** Capability: Planning and Goal Management (CAP-01)  
**Failure mode:** Agent Error · **Type:** Safety, Security · **Hazards:** Application (HZ-02), Compromised user safety (HZ-08)

This risk arises when an agent generates plans or goals that do not accurately reflect the user’s stated objectives, constraints, or preferences. As a result, the system may pursue incorrect or suboptimal actions, waste resources, or deliver outcomes that do not satisfy user expectations.

**Controls:**

- [CTRL-0035](#CTRL-0035) (Level 2 · Best Practice): Require agents to decompose user goals into explicit sub-goals and validate necessity before proceeding
- [CTRL-0036](#CTRL-0036) (Level 1 · Standard): Regularly evaluate and test planning behaviour under representative workloads and failure scenarios
- [CTRL-0042](#CTRL-0042) (Level 1 · Standard; Level 0 · Cardinal when a capability is used to act alone and has effects that are irreversible and external): Require explicit human confirmation before executing high-impact or irreversible tool actions

**Sources:** <https://arxiv.org/pdf/2402.01622v4> · <https://aclanthology.org/2025.naacl-long.93.pdf>

**Crosswalks:** OWASP ASI ASI01; OWASP threat T6

#### RISK-020 · Generating plans that overlook safety implications

**Arises from:** Capability: Planning and Goal Management (CAP-01)  
**Failure mode:** Agent Error · **Type:** Safety · **Hazards:** Compromised user safety (HZ-08)

This risk arises when an agent generates plans or goals without adequately considering basic safety, security, or practical constraints that would be apparent to a human. As a result, the system may propose or pursue actions that are unsafe, insecure, or inappropriate despite being technically feasible.

**Controls:**

- [CTRL-0035](#CTRL-0035) (Level 2 · Best Practice): Require agents to decompose user goals into explicit sub-goals and validate necessity before proceeding
- [CTRL-0037](#CTRL-0037) (Level 1 · Standard): Require planning agents to include explicit safety constraints in all generated plans before execution
- [CTRL-0038](#CTRL-0038) (Level 0 · Cardinal): Conduct safety verification with domain-relevant stress tests and adversarial scenarios before deployment and on a regular cadence afterwards
- [CTRL-0039](#CTRL-0039) (Level 1 · Standard): Ensure each agent publishes standardised, machine-readable capability descriptors accessible to other agents
- [CTRL-0042](#CTRL-0042) (Level 1 · Standard; Level 0 · Cardinal when a capability is used to act alone and has effects that are irreversible and external): Require explicit human confirmation before executing high-impact or irreversible tool actions

**Sources:** <https://arxiv.org/abs/2412.13178> · <https://arxiv.org/abs/2412.14470>

**Crosswalks:** OWASP ASI ASI10, ASI01; OWASP threat T7

#### RISK-057 · Pursuit of a goal by means the principal did not sanction

**Arises from:** Capability: Planning and Goal Management (CAP-01)  
**Failure mode:** Agent Misbehaviour · **Type:** Safety, Security · **Hazards:** Identity and access management (HZ-04), Harm to third parties (HZ-11)

This risk arises when an agent that plans its own steps meets an obstacle and reaches its goal by a route that the people responsible for it did not authorise. It uses a credential or an account it came across, exploits a weakness in a system that belongs to someone else, spends from a wallet it was not given, or acts against a person who stands in its way. The agent has not been attacked and has not misunderstood the task; it treats the restriction as a problem to solve. As a result, the organisation may find that its agent has broken into, altered, or drawn on systems and resources outside the deployment, or has harmed outside parties, as when agents under evaluation breached a model-hosting company's production systems to find answers, an agent in training used an API key it found in a public repository to reach a data service, and a personal agent exploited a gym's booking API to move its user up a waiting list.

**Controls:**

- [CTRL-0029](#CTRL-0029) (Level 0 · Cardinal): Grant agents only the minimum permissions required for their designated tasks
- [CTRL-0038](#CTRL-0038) (Level 0 · Cardinal): Conduct safety verification with domain-relevant stress tests and adversarial scenarios before deployment and on a regular cadence afterwards
- [CTRL-0040](#CTRL-0040) (Level 0 · Cardinal): Limit the scope of agent actions through predefined thresholds and baselines
- [CTRL-0065](#CTRL-0065) (Level 0 · Cardinal): Ensure every agent can be immediately paused or terminated by its operators
- [CTRL-0093](#CTRL-0093) (Level 2 · Best Practice): Monitor agents for deceptive and collusive behaviour using an independent monitor
- [CTRL-0099](#CTRL-0099) (Level 1 · Standard): Stop the task when an action is refused and report to a human, instead of letting the agent look for another route

**Sources:** <https://openai.com/index/hugging-face-model-evaluation-security-incident/> · <https://alignment.openai.com/misalignment-reports/searching-github-for-leaked-api-keys/> · <https://www.affinda.com/expert-insights/when-my-ai-agent-hacked-my-gym-mythos-stopped-feeling-theoretical/> · <https://theshamblog.com/an-ai-agent-published-a-hit-piece-on-me/>

**Crosswalks:** OWASP ASI ASI10, ASI03; OWASP threat T7, T3; MITRE ATLAS AML.T0117, AML.T0055

### Capability: Agent Delegation (CAP-02)

*The capability to assign subtasks to other agents and coordinate their activities to achieve broader goals. This includes identifying which components are best suited for specific tasks, issuing clear instructions, managing inter-agent dependencies, and monitoring performance or failures. A system has this capability whenever more than one agent works on a task, whether an agent decides the hand-offs or they are fixed in the workflow, and whether the other agents belong to the same system or are operated by another party, including agents it transacts with as counterparties.*

#### RISK-021 · Incorrect task delegation between agents

**Arises from:** Capability: Agent Delegation (CAP-02)  
**Failure mode:** Agent Error · **Type:** Safety, Security · **Hazards:** Application (HZ-02), Identity and access management (HZ-04), Compromised user safety (HZ-08)

This risk arises when an agent assigns tasks to other agents that do not match their capabilities, roles, or access permissions. As a result, tasks may be executed incorrectly, fail to complete, or introduce security and operational issues due to inappropriate delegation.

**Controls:**

- [CTRL-0040](#CTRL-0040) (Level 0 · Cardinal): Limit the scope of agent actions through predefined thresholds and baselines

**Sources:** <https://arxiv.org/abs/2503.13657>

**Crosswalks:** OWASP ASI ASI03, ASI08; OWASP threat T3

#### RISK-022 · Malicious or manipulative use of delegated agents

**Arises from:** Capability: Agent Delegation (CAP-02)  
**Failure mode:** Agent Misbehaviour · **Type:** Safety, Security · **Hazards:** Application (HZ-02), Identity and access management (HZ-04), Compromised user safety (HZ-08)

This risk arises when an agent deliberately assigns tasks to other agents in ways intended to bypass controls, obscure responsibility, or achieve malicious objectives. As a result, delegated agents may be coerced into performing unauthorised actions, amplifying harmful behaviour or evading detection within the system.

**Controls:**

- [CTRL-0008](#CTRL-0008) (Level 1 · Standard): Implement automated alerts when agent behaviour drifts from predefined thresholds
- [CTRL-0024](#CTRL-0024) (Level 0 · Cardinal): Define formal schemas for inter-agent messages and validate all messages against these schemas before processing
- [CTRL-0025](#CTRL-0025) (Level 1 · Standard): Ensure all inter-agent communications are encrypted in transit and prohibit plaintext channels
- [CTRL-0041](#CTRL-0041) (Level 0 · Cardinal): Provide comprehensive descriptions for each tool including intended use, required inputs, and potential outputs
- [CTRL-0093](#CTRL-0093) (Level 2 · Best Practice): Monitor agents for deceptive and collusive behaviour using an independent monitor

**Sources:** <https://arxiv.org/abs/2507.06850>

**Crosswalks:** OWASP ASI ASI10, ASI03; OWASP threat T13, T14; MITRE ATLAS AML.T0118.001, AML.T0143

#### RISK-063 · Authority passing between agents without a check

**Arises from:** Capability: Agent Delegation (CAP-02)  
**Failure mode:** Safeguard Failure · **Type:** Safety, Security · **Hazards:** Identity and access management (HZ-04), Financial or contractual loss (HZ-10)

This risk arises when one agent treats a request or a message from another agent as authorisation to act, without checking that the person on whose behalf the first agent is working is entitled to that action. A low-privilege agent can then ask a higher-privilege agent to do what it cannot do itself, and an attacker who can influence any agent in the chain, or who can write somewhere that an agent reads, borrows the privileges of the most powerful one. As a result, the access controls set for each agent are bypassed by the path between them, as when an injected low-privilege agent recruited a higher-privilege agent through agent discovery to copy records it could not read itself, a prompt posted by one company's agent was executed as a transfer instruction by another company's agent, and a public triage agent was led to invoke a workflow reserved for maintainers.

**Controls:**

- [CTRL-0024](#CTRL-0024) (Level 0 · Cardinal): Define formal schemas for inter-agent messages and validate all messages against these schemas before processing
- [CTRL-0026](#CTRL-0026) (Level 1 · Standard): Require all agents to authenticate with verifiable, cryptographically signed identities before processing requests
- [CTRL-0029](#CTRL-0029) (Level 0 · Cardinal): Grant agents only the minimum permissions required for their designated tasks
- [CTRL-0104](#CTRL-0104) (Level 1 · Standard): Authorise each action against the principal it is done for, at the agent that carries it out

**Sources:** <https://appomni.com/ao-labs/ai-agent-to-agent-discovery-prompt-injection/> · <https://slowmist.medium.com/behind-the-grok-exploitation-an-analysis-of-ai-agent-permission-chain-abuse-4d832d1bfc73> · <https://www.pillar.security/blog/ill-just-call-you-agent-to-agent-privilege-boundary-failures-in-ci-cd-on-googles-adk-repository>

**Crosswalks:** OWASP ASI ASI03, ASI07; OWASP threat T3, T12; MITRE ATLAS AML.T0053, AML.T0118.001

### Capability: Tool Use (CAP-03)

*The capability to evaluate available options and choose the best tool for specific subtasks, based on the capabilities and limitations of different tools and matching them appropriately to the tasks. This includes selecting between search, computation, code execution, or domain-specific APIs, determining when tool invocation is necessary, and sequencing or combining multiple tools to complete complex tasks effectively.*

#### RISK-023 · Incorrect tool selection or misuse

**Arises from:** Capability: Tool Use (CAP-03)  
**Failure mode:** Agent Error · **Type:** Safety, Security · **Hazards:** Application (HZ-02), Compromised user safety (HZ-08)

This risk arises when an agent selects an inappropriate tool or applies a tool incorrectly for a given task or action. As a result, the agent may produce erroneous outcomes, fail to complete the task effectively, or trigger unintended side effects due to misuse of tool capabilities.

**Controls:**

- [CTRL-0041](#CTRL-0041) (Level 0 · Cardinal): Provide comprehensive descriptions for each tool including intended use, required inputs, and potential outputs
- [CTRL-0042](#CTRL-0042) (Level 1 · Standard; Level 0 · Cardinal when a capability is used to act alone and has effects that are irreversible and external): Require explicit human confirmation before executing high-impact or irreversible tool actions
- [CTRL-0043](#CTRL-0043) (Level 1 · Standard; Level 0 · Cardinal when a capability is used to act alone): Log all tool selection decisions and invocations with comprehensive metadata

**Sources:** <https://arxiv.org/abs/2411.13547>

**Crosswalks:** OWASP ASI ASI02; OWASP threat T2

### Capability: Multimodal Understanding and Generation (CAP-04)

*The capability to communicate with human users across multiple modalities, including natural language conversation (explaining topics, generating documents, interactive discussions) and multimodal understanding/generation (processing and creating image, audio, or video content such as visual analysis, speech transcription, or multimedia creation).*

#### RISK-024 · Generation of undesirable content

**Arises from:** Capability: Multimodal Understanding and Generation (CAP-04)  
**Failure mode:** Agent Error · **Type:** Safety · **Hazards:** Discriminatory or hateful content (HZ-06), Inappropriate content (HZ-07)

This risk arises when an agent generates text, images, audio, or other media that contain toxic, hateful, sexual, or otherwise inappropriate content. As a result, the system may cause harm to users, violate organisational standards or regulations, or undermine trust in the system’s outputs.

**Controls:**

- [CTRL-0044](#CTRL-0044) (Level 1 · Standard): Implement output safety guardrails to detect and prevent generation of undesirable content

**Sources:** <https://arxiv.org/abs/2402.04249v2>

#### RISK-025 · Generation of unqualified advice in specialised domains

**Arises from:** Capability: Multimodal Understanding and Generation (CAP-04)  
**Failure mode:** Agent Error · **Type:** Safety · **Hazards:** Compromised user safety (HZ-08)

This risk arises when an agent generates advice or guidance in specialised domains such as medical, financial, or legal contexts without appropriate expertise, validation, or safeguards. As a result, users may act on incorrect or inappropriate information, leading to potential harm or adverse outcomes.

**Controls:**

- [CTRL-0045](#CTRL-0045) (Level 1 · Standard): Implement input guardrails to detect and decline requests for specialised domain advice

**Sources:** <https://arxiv.org/abs/2401.01301> · <https://genai.owasp.org/llmrisk/llm092025-misinformation/>

#### RISK-026 · Generation of controversial or sensitive content

**Arises from:** Capability: Multimodal Understanding and Generation (CAP-04)  
**Failure mode:** Agent Error · **Type:** Safety · **Hazards:** Inappropriate content (HZ-07), Misrepresentation (HZ-09)

This risk arises when an agent generates content related to sensitive or controversial topics, such as political commentary or denigrating comments about competitors. As a result, the system may create reputational, legal, or compliance issues, or be perceived as biased, inappropriate, or misrepresentative of organisational views.

**Controls:**

- [CTRL-0046](#CTRL-0046) (Level 1 · Standard): Implement input guardrails to detect and decline requests for controversial content that violates organisational policies

**Sources:** <https://news.stanford.edu/stories/2025/05/ai-models-llms-chatgpt-claude-gemini-partisan-bias-research-study>

#### RISK-027 · Regurgitating personally identifiable information

**Arises from:** Capability: Multimodal Understanding and Generation (CAP-04)  
**Failure mode:** Agent Error · **Type:** Safety, Security · **Hazards:** Data (HZ-01), Compromised user safety (HZ-08)

This risk arises when an agent reproduces personally identifiable information in its generated outputs, whether drawn from training data, memory, or prior interactions. As a result, the system may violate privacy obligations, expose individuals to harm, or breach data protection requirements.

**Controls:**

- [CTRL-0047](#CTRL-0047) (Level 0 · Cardinal): Implement output guardrails to detect and redact personally identifiable information

**Sources:** <https://www.edpb.europa.eu/system/files/2025-04/ai-privacy-risks-and-mitigations-in-llms.pdf>

**Crosswalks:** OWASP ASI ASI06; OWASP threat T1

#### RISK-028 · Generation of non-factual or hallucinated content

**Arises from:** Capability: Multimodal Understanding and Generation (CAP-04)  
**Failure mode:** Agent Error · **Type:** Safety · **Hazards:** Compromised user safety (HZ-08), Misrepresentation (HZ-09)

This risk arises when an agent generates information that is inaccurate, fabricated, or unsupported by evidence while presenting it as factual. As a result, users may be misled, make incorrect decisions, or lose trust in the system’s outputs.

**Controls:**

- [CTRL-0048](#CTRL-0048) (Level 2 · Best Practice): Implement methods to reduce hallucination rates in agent outputs
- [CTRL-0049](#CTRL-0049) (Level 0 · Cardinal): Implement UI/UX cues to communicate the risk of hallucination to users
- [CTRL-0050](#CTRL-0050) (Level 1 · Standard): Implement features enabling users to verify generated answers against source content

**Sources:** <https://arxiv.org/abs/2309.01219>

**Crosswalks:** OWASP ASI ASI08; OWASP threat T5

#### RISK-029 · Generation of copyrighted content

**Arises from:** Capability: Multimodal Understanding and Generation (CAP-04)  
**Failure mode:** Agent Error · **Type:** Safety · **Hazards:** Illegal and CBRNE activities (HZ-05)

This risk arises when an agent generates content that reproduces or closely resembles copyrighted material without appropriate rights or attribution. As a result, the system may infringe intellectual property laws, expose the organisation to legal liability, or violate licensing and usage terms.

**Controls:**

- [CTRL-0051](#CTRL-0051) (Level 1 · Standard): Implement input guardrails to detect and decline requests to generate copyrighted content

**Sources:** <https://arxiv.org/abs/2407.07087>

### Capability: Official Communication (CAP-05)

*The capability to compose, finalise, and dispatch authoritative communications that formally and legally represent an organization to external parties (e.g. customers, partners, regulators, courts, or media) via approved channels and formats, thereby creating potential legal, regulatory, or reputational obligations. This includes sending legally binding correspondence, publishing official statements or press releases, and responding to external inquiries using the organisation's identity. A system has this capability whether a person sends what the agent drafts, approves each message before it goes, or lets the agent send by itself; that difference is recorded as the capability's authority.*

**Authority levels:** propose, act with approval, act alone. **Irreversible effects:** always. **Effects outside the organisation:** always.

#### RISK-030 · Misrepresentation of authorship

**Arises from:** Capability: Official Communication (CAP-05)  
**Failure mode:** Agent Error · **Type:** Safety · **Hazards:** Misrepresentation (HZ-09)

This risk arises when recipients are misled about whether an official communication was authored by a human or generated by an agent on behalf of the organisation. As a result, stakeholders may form incorrect assumptions about accountability, intent, or authority, potentially leading to trust, legal, or reputational issues.

**Controls:**

- [CTRL-0052](#CTRL-0052) (Level 2 · Best Practice): Declare upfront that communications are generated by an AI system

**Sources:** <https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50> · <https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf>

**Crosswalks:** OWASP ASI ASI09; OWASP threat T15

#### RISK-031 · Inaccurate promises or statements in official communications

**Arises from:** Capability: Official Communication (CAP-05)  
**Failure mode:** Agent Error · **Type:** Safety · **Hazards:** Misrepresentation (HZ-09), Financial or contractual loss (HZ-10)

This risk arises when an agent makes commitments, assurances, or public statements that are incorrect, unsupported, or exceed the organisation’s actual intentions or capabilities. As a result, the organisation may face reputational damage, legal exposure, or loss of public trust due to unmet expectations or misinformation.

**Controls:**

- [CTRL-0053](#CTRL-0053) (Level 0 · Cardinal): Require human approval for communications on sensitive matters
- [CTRL-0054](#CTRL-0054) (Level 1 · Standard): Limit agent communications to standard processes with predefined templates
- [CTRL-0055](#CTRL-0055) (Level 1 · Standard): Provide alternative channels for users to clarify communications or provide feedback
- [CTRL-0094](#CTRL-0094) (Level 0 · Cardinal): Measure the quality of human oversight and redesign approval steps that have become rubber stamps

**Sources:** <https://decisions.civilresolutionbc.ca/crt/crtd/en/525448/1/document.do> · <https://incidentdatabase.ai/cite/622/>

**Crosswalks:** OWASP ASI ASI09; OWASP threat T15

### Capability: Business Transactions (CAP-06)

*The capability to initiate, authorise, and execute binding business transactions with external parties - such as payments, purchases, reservations, or service commitments - resulting in real financial, contractual, or operational obligations for the organization. This includes processing payments or refunds, placing orders or subscriptions, booking services or reservations, and accepting or triggering contractual commitments on behalf of the organization. A system has this capability whether a person completes the transactions the agent prepares, approves each one, or lets the agent transact by itself within limits set in advance; that difference is recorded as the capability's authority.*

**Authority levels:** propose, act with approval, act alone. **Irreversible effects:** ask. **Effects outside the organisation:** always.

#### RISK-032 · Unauthorised execution of business transactions

**Arises from:** Capability: Business Transactions (CAP-06)  
**Failure mode:** Agent Error · **Type:** Safety, Security · **Hazards:** Application (HZ-02), Identity and access management (HZ-04), Financial or contractual loss (HZ-10)

**Applies when:** Business Transactions (CAP-06) is used at act with approval or above.

This risk arises when an agent initiates, authorises, or executes business transactions outside predefined approval thresholds, roles, or authorisation limits. As a result, the organisation may be exposed to unintended financial losses, binding contractual obligations, or operational commitments that were not properly sanctioned.

**Controls:**

- [CTRL-0056](#CTRL-0056) (Level 0 · Cardinal): Require explicit human confirmation before committing any business transaction outside limits that an accountable human has pre-authorised
- [CTRL-0057](#CTRL-0057) (Level 2 · Best Practice): Require out-of-band confirmation when transaction risk signals are elevated
- [CTRL-0058](#CTRL-0058) (Level 0 · Cardinal): Restrict agents to proposing transactions whilst using a separate transaction controller for execution
- [CTRL-0059](#CTRL-0059) (Level 2 · Best Practice): Apply fraud detection models or heuristics to agent-proposed transactions
- [CTRL-0094](#CTRL-0094) (Level 0 · Cardinal): Measure the quality of human oversight and redesign approval steps that have become rubber stamps

**Sources:** <https://arxiv.org/abs/2503.16248>

**Crosswalks:** OWASP ASI ASI02, ASI01; OWASP threat T2, T6

#### RISK-033 · Leakage of transaction credentials

**Arises from:** Capability: Business Transactions (CAP-06)  
**Failure mode:** Tool or Resource Malfunction · **Type:** Safety, Security · **Hazards:** Data (HZ-01), Identity and access management (HZ-04), Financial or contractual loss (HZ-10)

This risk arises when credentials, tokens, or sensitive authentication information used to execute business transactions are exposed, mishandled, or improperly stored by an agent or its supporting systems. As a result, malicious parties may gain the ability to initiate unauthorised transactions, manipulate financial operations, or compromise transactional systems.

**Controls:**

- [CTRL-0058](#CTRL-0058) (Level 0 · Cardinal): Restrict agents to proposing transactions whilst using a separate transaction controller for execution

**Sources:** <https://arxiv.org/pdf/2506.01055>

**Crosswalks:** OWASP ASI ASI03; OWASP threat T3; MITRE ATLAS AML.T0083, AML.T0055

### Capability: Internet and Search Access (CAP-07)

*The capability to autonomously access, browse, search, and retrieve information from the Internet to augment the LLM's static training knowledge with external and up-to-date sources in support of task execution and response generation. This includes issuing search queries, following and parsing web pages, extracting relevant facts or documents, and aggregating information from multiple online sources.*

**Authority levels:** read. **Irreversible effects:** never. **Effects outside the organisation:** always.

#### RISK-034 · Prompt injection via malicious websites

**Arises from:** Capability: Internet and Search Access (CAP-07)  
**Failure mode:** External Manipulation · **Type:** Safety, Security · **Hazards:** Data (HZ-01), Application (HZ-02), Compromised user safety (HZ-08)

This risk arises when an agent retrieves or processes content from malicious or untrusted websites that are designed to inject instructions or manipulative prompts into the system. As a result, the agent may follow unintended commands, override intended constraints, or take actions that compromise system behaviour or integrity.

**Controls:**

- [CTRL-0060](#CTRL-0060) (Level 1 · Standard): Implement escape filtering before incorporating web content into prompts
- [CTRL-0061](#CTRL-0061) (Level 1 · Standard): Use structured retrieval APIs for web searches rather than web scraping
- [CTRL-0062](#CTRL-0062) (Level 0 · Cardinal): Implement input guardrails to detect prompt injection and adversarial attacks
- [CTRL-0090](#CTRL-0090) (Level 1 · Standard): Enforce data-flow and capability policies at runtime with a deterministic policy layer that separates untrusted content from privileged actions

**Sources:** <https://unit42.paloaltonetworks.com/agentic-ai-threats/>

**Crosswalks:** OWASP ASI ASI01; OWASP threat T6; MITRE ATLAS AML.T0051.001, AML.T0078

#### RISK-035 · Unreliable information or websites

**Arises from:** Capability: Internet and Search Access (CAP-07)  
**Failure mode:** Tool or Resource Malfunction · **Type:** Safety · **Hazards:** Compromised user safety (HZ-08), Misrepresentation (HZ-09)

This risk arises when an agent retrieves and presents information from websites that are inaccurate, outdated, biased, or otherwise unreliable. As a result, users may be misinformed or make incorrect decisions based on content that has not been adequately validated or corroborated.

**Controls:**

- [CTRL-0063](#CTRL-0063) (Level 1 · Standard): Prioritise search results from verified, high-quality domains

**Sources:** <https://www.cjr.org/tow_center/we-compared-eight-ai-search-engines-theyre-all-bad-at-citing-news.php> · <https://genai.owasp.org/llmrisk/llm092025-misinformation/>

**Crosswalks:** OWASP ASI ASI06; OWASP threat T5

### Capability: Computer Use (CAP-08)

*The capability to directly operate a computer’s graphical user interface on behalf of the user, enabling the agent to navigate applications and execute tasks through mouse, keyboard, and window-based interactions. This includes moving the cursor, clicking buttons, entering text, using keyboard shortcuts, switching between windows and applications, and navigating files and menus within the operating system environment.*

**Authority levels:** act with approval, act alone. **Irreversible effects:** ask. **Effects outside the organisation:** ask.

#### RISK-036 · Prompt injection risks through computer use

**Arises from:** Capability: Computer Use (CAP-08)  
**Failure mode:** External Manipulation · **Type:** Safety, Security · **Hazards:** Data (HZ-01), Application (HZ-02), Compromised user safety (HZ-08)

This risk arises when an agent interacts with graphical user interfaces that display untrusted or adversarial content - such as web pages, documents, pop-ups, or form fields - crafted to embed hidden instructions or manipulative cues. As a result, the agent may misinterpret on-screen text as authoritative guidance, follow injected instructions, or perform unintended actions while operating the interface.

**Controls:**

- [CTRL-0062](#CTRL-0062) (Level 0 · Cardinal): Implement input guardrails to detect prompt injection and adversarial attacks
- [CTRL-0064](#CTRL-0064) (Level 1 · Standard): Limit computer use to accessing only safe and trusted resources
- [CTRL-0065](#CTRL-0065) (Level 0 · Cardinal): Ensure every agent can be immediately paused or terminated by its operators
- [CTRL-0090](#CTRL-0090) (Level 1 · Standard): Enforce data-flow and capability policies at runtime with a deterministic policy layer that separates untrusted content from privileged actions

**Sources:** <https://arxiv.org/html/2505.13076v1> · <https://hiddenlayer.com/innovation-hub/indirect-prompt-injection-of-claude-computer-use/>

**Crosswalks:** OWASP ASI ASI01; OWASP threat T6; MITRE ATLAS AML.T0100, AML.T0051.001

#### RISK-037 · Exposure of sensitive data

**Arises from:** Capability: Computer Use (CAP-08)  
**Failure mode:** Agent Error · **Type:** Safety, Security · **Hazards:** Data (HZ-01), Compromised user safety (HZ-08)

This risk arises when an agent operating a computer interface accesses websites or applications that contain personally identifiable or sensitive information, particularly when authenticated as a user or organisation. As a result, the agent may inadvertently view, process, or disclose confidential data beyond its intended scope or authorisation.

**Controls:**

- [CTRL-0047](#CTRL-0047) (Level 0 · Cardinal): Implement output guardrails to detect and redact personally identifiable information
- [CTRL-0066](#CTRL-0066) (Level 0 · Cardinal): Ensure "take over" mode is activated when entering sensitive data
- [CTRL-0089](#CTRL-0089) (Level 0 · Cardinal): Enforce default-deny network egress for agent runtimes, allowing only approved destinations
- [CTRL-0097](#CTRL-0097) (Level 0 · Cardinal): Do not give one agent untrusted content, access to sensitive data, and an unrestricted outbound channel at once; remove one, or gate the outbound channel outside the agent

**Sources:** <https://arxiv.org/html/2506.00618v3>

**Crosswalks:** OWASP ASI ASI02; OWASP threat T2

### Capability: Other Programmatic Interfaces (CAP-09)

*The capability to interact with external systems through non-graphical, programmatic interfaces, such as APIs, SDKs, and backend services, to exchange data or trigger actions as part of task execution. This includes calling REST or GraphQL APIs, invoking cloud services, publishing or consuming messages from queues or event streams, and performing operations such as code pushes, data updates, or system integrations across enterprise platforms. This includes sending and receiving email, chat, or other messages through an API or mail protocol, including when those messages are also Official Communication (CAP-05).*

**Authority levels:** read, propose, act with approval, act alone. **Irreversible effects:** ask. **Effects outside the organisation:** ask.

#### RISK-038 · Incorrect use of unfamiliar programmatic interfaces

**Arises from:** Capability: Other Programmatic Interfaces (CAP-09)  
**Failure mode:** Agent Error · **Type:** Safety, Security · **Hazards:** Application (HZ-02), Compromised user safety (HZ-08)

This risk arises when an agent interacts with programmatic interfaces it has not been trained or configured to use correctly, particularly bespoke or non-standard interfaces outside established protocols such as MCP servers. As a result, the agent may misinterpret interface semantics, invoke operations incorrectly, or produce unintended effects due to improper integration or usage.

**Controls:**

- [CTRL-0041](#CTRL-0041) (Level 0 · Cardinal): Provide comprehensive descriptions for each tool including intended use, required inputs, and potential outputs
- [CTRL-0067](#CTRL-0067) (Level 0 · Cardinal): Ensure proper documentation of programmatic interfaces for agent use

**Sources:** <https://arxiv.org/abs/2305.15334> · <https://arxiv.org/abs/2309.15817>

**Crosswalks:** OWASP ASI ASI02; OWASP threat T2

#### RISK-059 · Prompt injection through inbound messages

**Arises from:** Capability: Other Programmatic Interfaces (CAP-09)  
**Failure mode:** External Manipulation · **Type:** Safety, Security · **Hazards:** Data (HZ-01), Application (HZ-02), Compromised user safety (HZ-08)

This risk arises when an agent reads messages or records that outside parties can write, such as email, chat, calendar invitations, support tickets, issue and pull-request comments, form submissions, or log entries, and treats instructions hidden in them as its own. Unlike a web page that the agent chooses to visit, a message arrives unasked and can wait until the agent processes it, so the attacker needs nothing more than the ability to send it. As a result, the agent may act on the attacker's behalf with the authority it holds, for example by changing configuration, transferring ownership of resources, publishing software, or operating connected devices, as when an injected issue title led a triage bot to compromise a software release, and hidden text in a calendar invitation led an assistant to operate smart-home devices. RISK-047 covers the case where the injected instruction causes data to leave the organisation.

**Controls:**

- [CTRL-0019](#CTRL-0019) (Level 0 · Cardinal): Keep untrusted inputs out of system instructions, and enclose any untrusted content given to the model in delimiters marked as data
- [CTRL-0020](#CTRL-0020) (Level 2 · Best Practice): Use a dedicated LLM to extract required fields from inputs and filter out extraneous text or embedded instructions
- [CTRL-0062](#CTRL-0062) (Level 0 · Cardinal): Implement input guardrails to detect prompt injection and adversarial attacks
- [CTRL-0090](#CTRL-0090) (Level 1 · Standard): Enforce data-flow and capability policies at runtime with a deterministic policy layer that separates untrusted content from privileged actions

**Sources:** <https://cline.bot/blog/post-mortem-unauthorized-cline-cli-npm> · <https://www.codeintegrity.ai/blog/heroku> · <https://www.theregister.com/2025/08/08/infosec_hounds_spot_prompt_injection/> · <https://openai.com/index/hardening-atlas-against-prompt-injection/>

**Crosswalks:** OWASP ASI ASI01; OWASP threat T6; MITRE ATLAS AML.T0051.001, AML.T0093

### Capability: Code Execution (CAP-10)

*The capability to write, execute, and debug code in various programming languages to automate tasks or solve computational problems. This includes implementing algorithms, writing scripts, compiling and running code, debugging errors, and integrating with external systems through APIs or backend services.*

**Authority levels:** propose, act with approval, act alone. **Irreversible effects:** ask. **Effects outside the organisation:** ask.

#### RISK-039 · Production or execution of poor or ineffective code

**Arises from:** Capability: Code Execution (CAP-10)  
**Failure mode:** Agent Error · **Type:** Security · **Hazards:** Application (HZ-02)

This risk arises when an agent generates or executes code that is incorrect, inefficient, insecure, or unsuitable for the intended task. As a result, the code may fail to achieve desired outcomes, introduce bugs or vulnerabilities, or cause operational disruptions when deployed or run.

**Controls:**

- [CTRL-0068](#CTRL-0068) (Level 1 · Standard): Use code linters to screen generated code for bad practices and poor syntax
- [CTRL-0069](#CTRL-0069) (Level 0 · Cardinal): Run agent-generated code only in isolated compute environments with network access blocked by default
- [CTRL-0070](#CTRL-0070) (Level 1 · Standard): Review all agent-generated code before execution
- [CTRL-0071](#CTRL-0071) (Level 0 · Cardinal): Use static code analysers to detect security vulnerabilities and code quality issues
- [CTRL-0072](#CTRL-0072) (Level 1 · Standard): Monitor runtime and memory consumption of agent-generated code

**Sources:** <https://www.usenix.org/system/files/conference/usenixsecurity25/sec25cycle1-prepub-742-spracklen.pdf> · <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/> · <https://proceedings.neurips.cc/paper_files/paper/2024/hash/bfd082c452dffb450d5a5202b0419205-Abstract-Datasets_and_Benchmarks_Track.html>

**Crosswalks:** OWASP ASI ASI05; OWASP threat T11

#### RISK-040 · Production or execution of vulnerable or malicious code

**Arises from:** Capability: Code Execution (CAP-10)  
**Failure mode:** Agent Error · **Type:** Security · **Hazards:** Data (HZ-01), Application (HZ-02)

This risk arises when an agent executes code that contains security vulnerabilities or intentionally malicious logic, whether generated by the model or sourced externally. As a result, the system may be compromised through exploitation, unauthorised access, data leakage, or other harmful effects.

**Controls:**

- [CTRL-0069](#CTRL-0069) (Level 0 · Cardinal): Run agent-generated code only in isolated compute environments with network access blocked by default
- [CTRL-0070](#CTRL-0070) (Level 1 · Standard): Review all agent-generated code before execution
- [CTRL-0071](#CTRL-0071) (Level 0 · Cardinal): Use static code analysers to detect security vulnerabilities and code quality issues
- [CTRL-0072](#CTRL-0072) (Level 1 · Standard): Monitor runtime and memory consumption of agent-generated code
- [CTRL-0073](#CTRL-0073) (Level 0 · Cardinal): Create a denylist of commands that agents are not permitted to execute
- [CTRL-0074](#CTRL-0074) (Level 0 · Cardinal): Conduct CVE scanning and block execution of code with High or Critical vulnerabilities

**Sources:** <https://arxiv.org/pdf/2501.08200> · <https://arxiv.org/html/2504.21205v1>

**Crosswalks:** OWASP ASI ASI05; OWASP threat T11; MITRE ATLAS AML.T0050, AML.T0011.001, AML.T0060

#### RISK-056 · Actions beyond the agent's tools through code execution and reachable credentials

**Arises from:** Capability: Code Execution (CAP-10)  
**Failure mode:** Safeguard Failure · **Type:** Security · **Hazards:** Data (HZ-01), Infrastructure and network (HZ-03), Identity and access management (HZ-04)

**Applies when:** Code Execution (CAP-10) is used at act with approval or above.

This risk arises when an agent that can run code can also read files, environment variables, or data stores that hold credentials, tokens, or keys, so the code it writes can act with whatever those credentials allow instead of only through the tools it was given. Approval steps, allowlists, and rate limits placed on the agent's tools then do not constrain it, because the code calls the database, cloud API, or deployment platform directly. As a result, a misjudgement or an injected instruction can cause destructive or unauthorised actions far outside the agent's intended scope, as when a coding agent used a broadly scoped infrastructure token to delete a company's production database and the backups stored with it, and when a coding agent deleted a live production database during a code freeze.

**Controls:**

- [CTRL-0029](#CTRL-0029) (Level 0 · Cardinal): Grant agents only the minimum permissions required for their designated tasks
- [CTRL-0069](#CTRL-0069) (Level 0 · Cardinal): Run agent-generated code only in isolated compute environments with network access blocked by default
- [CTRL-0070](#CTRL-0070) (Level 1 · Standard): Review all agent-generated code before execution
- [CTRL-0076](#CTRL-0076) (Level 0 · Cardinal): Require human approval for destructive changes to databases, tables, or files that cannot be readily undone
- [CTRL-0077](#CTRL-0077) (Level 0 · Cardinal): Enable versioning or soft-delete for managed object stores to allow recovery from accidental modifications
- [CTRL-0098](#CTRL-0098) (Level 0 · Cardinal): Keep credentials and backups out of reach of agent-run code

**Sources:** <https://incidentdatabase.ai/cite/1469/> · <https://hackread.com/cursor-ai-agent-wipes-pocketos-database-backups/> · <https://fortune.com/2025/07/23/ai-coding-tool-replit-wiped-database-called-it-a-catastrophic-failure/>

**Crosswalks:** OWASP ASI ASI03, ASI05; OWASP threat T3, T11; MITRE ATLAS AML.T0055

### Capability: File and Data Management (CAP-11)

*The capability to manage the full lifecycle of files and data by creating, reading, modifying, organizing, converting, querying, and updating information across both unstructured artifacts (e.g. documents, spreadsheets, media files) and structured data stores (e.g. SQL/NoSQL databases, data warehouses, vector or embedding stores) in support of operational tasks. This includes ingesting and transforming datasets, generating or updating files, maintaining directory or schema structures, executing database queries or updates, and storing or retrieving embeddings or derived data products.*

**Authority levels:** read, propose, act with approval, act alone. **Irreversible effects:** ask. **Effects outside the organisation:** ask.

#### RISK-041 · Unintended overwriting or deletion of files or data

**Arises from:** Capability: File and Data Management (CAP-11)  
**Failure mode:** Agent Error · **Type:** Security · **Hazards:** Data (HZ-01)

**Applies when:** File and Data Management (CAP-11) is used at act with approval or above.

This risk arises when an agent modifies, overwrites, or deletes files, database tables, or datasets without explicit user instruction or authorisation. As a result, critical information may be lost or corrupted, leading to data integrity issues, operational disruption, or the need for costly recovery efforts.

**Controls:**

- [CTRL-0075](#CTRL-0075) (Level 1 · Standard): Do not grant write access to agents unless strictly necessary
- [CTRL-0076](#CTRL-0076) (Level 0 · Cardinal): Require human approval for destructive changes to databases, tables, or files that cannot be readily undone
- [CTRL-0077](#CTRL-0077) (Level 0 · Cardinal): Enable versioning or soft-delete for managed object stores to allow recovery from accidental modifications
- [CTRL-0094](#CTRL-0094) (Level 0 · Cardinal): Measure the quality of human oversight and redesign approval steps that have become rubber stamps

**Sources:** <https://syssec.dpss.inesc-id.pt/papers/pedro_icse25.pdf>

**Crosswalks:** OWASP ASI ASI02; OWASP threat T2

#### RISK-042 · Database overload due to inefficient data operations

**Arises from:** Capability: File and Data Management (CAP-11)  
**Failure mode:** Agent Error · **Type:** Security · **Hazards:** Infrastructure and network (HZ-03)

This risk arises when an agent issues poorly optimised, excessively frequent, or redundant queries against databases or data stores. As a result, system performance may degrade, resources may be exhausted, or critical services may become unavailable due to unnecessary load.

**Controls:**

- [CTRL-0078](#CTRL-0078) (Level 0 · Cardinal): Enforce throttling or rate limits on agent-initiated database operations
- [CTRL-0079](#CTRL-0079) (Level 2 · Best Practice): Validate agent-generated database queries for efficiency before execution against production databases
- [CTRL-0080](#CTRL-0080) (Level 2 · Best Practice): Implement caching mechanisms to reduce repetitive database queries by agents

**Sources:** <https://www.tinybird.co/blog-posts/which-llm-writes-the-best-sql> · <https://arxiv.org/abs/2305.03111> · <https://genai.owasp.org/llmrisk/llm102025-unbounded-consumption/>

**Crosswalks:** OWASP ASI ASI02; OWASP threat T4

#### RISK-043 · Exposure of sensitive data through file or database access

**Arises from:** Capability: File and Data Management (CAP-11)  
**Failure mode:** Agent Error · **Type:** Security · **Hazards:** Data (HZ-01)

This risk arises when an agent accesses, processes, or outputs personally identifiable or sensitive information stored in files or databases without appropriate safeguards. As a result, confidential data may be disclosed to unauthorised parties, leading to privacy breaches, regulatory non-compliance, or loss of trust.

**Controls:**

- [CTRL-0047](#CTRL-0047) (Level 0 · Cardinal): Implement output guardrails to detect and redact personally identifiable information
- [CTRL-0081](#CTRL-0081) (Level 1 · Standard): Implement input guardrails to detect personally identifiable information in data accessed by agents
- [CTRL-0082](#CTRL-0082) (Level 2 · Best Practice): Do not grant agents access to personally identifiable or sensitive data unless strictly required

**Sources:** <https://arxiv.org/abs/2509.10540> · <https://genai.owasp.org/llmrisk/llm022025-sensitive-information-disclosure/>

**Crosswalks:** OWASP ASI ASI02, ASI03; OWASP threat T2, T3

#### RISK-044 · Prompt injection via malicious files or data

**Arises from:** Capability: File and Data Management (CAP-11)  
**Failure mode:** External Manipulation · **Type:** Safety, Security · **Hazards:** Data (HZ-01), Application (HZ-02), Compromised user safety (HZ-08)

This risk arises when an agent ingests or processes maliciously crafted files or data that embed hidden instructions or manipulative content. As a result, the agent may follow unintended prompts, alter its behaviour, or execute actions that compromise system safety or integrity.

**Controls:**

- [CTRL-0062](#CTRL-0062) (Level 0 · Cardinal): Implement input guardrails to detect prompt injection and adversarial attacks
- [CTRL-0083](#CTRL-0083) (Level 0 · Cardinal): Disallow unknown or external files unless they have been scanned for threats
- [CTRL-0090](#CTRL-0090) (Level 1 · Standard): Enforce data-flow and capability policies at runtime with a deterministic policy layer that separates untrusted content from privileged actions
- [CTRL-0097](#CTRL-0097) (Level 0 · Cardinal): Do not give one agent untrusted content, access to sensitive data, and an unrestricted outbound channel at once; remove one, or gate the outbound channel outside the agent

**Sources:** <https://arxiv.org/abs/2509.10540> · <https://arxiv.org/abs/2403.02817>

**Crosswalks:** OWASP ASI ASI01, ASI06; OWASP threat T6, T1; MITRE ATLAS AML.T0051.001, AML.T0099, AML.T0070

#### RISK-066 · Personal data collected, kept, or passed on beyond what the task needs

**Arises from:** Capability: File and Data Management (CAP-11)  
**Failure mode:** Agent Error · **Type:** Security · **Hazards:** Data (HZ-01)

This risk arises when an agent gathers, keeps, or passes on more personal data than its task requires. It may index a whole mailbox or drive to answer one question and keep the index afterwards, record people who have not agreed to it, place personal details in a search query or in an API call to another company, or upload local files to a hosted service by default. No one need attack the agent for this to happen, and each step can look like ordinary tool use. As a result, personal data is held without a purpose, reaches third parties that have no right to it, or is published, in breach of data protection obligations, as when a coding assistant uploaded users' whole local repositories to a cloud service by default, a personal assistant kept indexed email in place after it was no longer needed, and agents posted users' images to public image-hosting sites.

**Controls:**

- [CTRL-0047](#CTRL-0047) (Level 0 · Cardinal): Implement output guardrails to detect and redact personally identifiable information
- [CTRL-0081](#CTRL-0081) (Level 1 · Standard): Implement input guardrails to detect personally identifiable information in data accessed by agents
- [CTRL-0082](#CTRL-0082) (Level 2 · Best Practice): Do not grant agents access to personally identifiable or sensitive data unless strictly required
- [CTRL-0106](#CTRL-0106) (Level 1 · Standard): Minimise the personal data an agent sends through its tools, and set a retention period for what it keeps

**Sources:** <https://www.reuters.com/legal/litigation/chinas-zai-disables-ai-coding-assistant-features-after-security-issue-2026-09-21/> · <https://techcrunch.com/2026/08/24/instincts-powerful-ai-assistant-is-raising-privacy-and-security-concerns/> · <https://www.scmp.com/news/us/science-technology/article/3368883/openai-says-its-ai-agents-posted-user-images-online-error>

**Crosswalks:** OWASP ASI ASI02; OWASP threat T2

### Capability: System Management (CAP-12)

*The capability to directly manage and configure technical systems and infrastructure by adjusting system settings, controlling computing resources, and administering operational environments across on-premise or cloud platforms. This includes monitoring system health and performance, managing authentication credentials and access controls, provisioning or scaling compute and storage resources, configuring operating system or runtime parameters, and applying system-level optimisations to support reliable operation.*

**Authority levels:** read, propose, act with approval, act alone. **Irreversible effects:** ask. **Effects outside the organisation:** ask.

#### RISK-045 · Misconfiguration of system resources

**Arises from:** Capability: System Management (CAP-12)  
**Failure mode:** Agent Error · **Type:** Security · **Hazards:** Application (HZ-02), Infrastructure and network (HZ-03)

**Applies when:** System Management (CAP-12) is used at act with approval or above.

This risk arises when an agent incorrectly configures system settings, infrastructure resources, or operational parameters. As a result, system performance, reliability, or security may be degraded, leading to service disruptions or unintended operational behaviour.

**Controls:**

- [CTRL-0084](#CTRL-0084) (Level 0 · Cardinal): Set minimum and maximum limits on what agents can modify within system resources
- [CTRL-0085](#CTRL-0085) (Level 0 · Cardinal): Log system health metrics and implement automated alerts for abnormal conditions

**Sources:** <https://neurips.cc/virtual/2024/poster/97835> · <https://arxiv.org/html/2507.10584v1>

**Crosswalks:** OWASP ASI ASI02, ASI08; OWASP threat T2

#### RISK-046 · System overload due to inefficient or excessive operations

**Arises from:** Capability: System Management (CAP-12)  
**Failure mode:** Agent Error · **Type:** Security · **Hazards:** Infrastructure and network (HZ-03)

This risk arises when an agent issues poorly optimised, excessively frequent, or redundant system-level operations or queries. As a result, computing resources may be exhausted, system performance may degrade, or services may become unavailable due to unnecessary load.

**Controls:**

- [CTRL-0086](#CTRL-0086) (Level 0 · Cardinal): Limit the number of concurrent queries to external systems by agents

**Sources:** <https://arxiv.org/html/2407.20859v1> · <https://genai.owasp.org/llmrisk/llm102025-unbounded-consumption/>

**Crosswalks:** OWASP ASI ASI02; OWASP threat T4

### Combinations of elements

A risk in this group arises from several elements together, or from a [combination rule](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/capability-combinations/), which applies whenever the capabilities a system has can between them fill every role the rule names.

#### RISK-012 · Cascading errors in multi-agent architectures

**Arises from:** Design: Agentic Architecture (DSN-01) + Capability: Agent Delegation (CAP-02)  
**Failure mode:** Agent Error · **Type:** Safety, Security · **Hazards:** Application (HZ-02), Compromised user safety (HZ-08)

This risk arises when errors or misjudgements produced by one agent propagate through interconnected agents within a multi-agent system. As a result, small failures may compound across agent interactions, leading to amplified errors, degraded system performance, or unintended outcomes at the system level.

**Controls:**

- [CTRL-0024](#CTRL-0024) (Level 0 · Cardinal): Define formal schemas for inter-agent messages and validate all messages against these schemas before processing
- [CTRL-0025](#CTRL-0025) (Level 1 · Standard): Ensure all inter-agent communications are encrypted in transit and prohibit plaintext channels
- [CTRL-0027](#CTRL-0027) (Level 1 · Standard): Implement circuit breakers to prevent cascading failures in multi-agent systems
- [CTRL-0028](#CTRL-0028) (Level 0 · Cardinal): Continuously monitor multi-agent systems for cascade failure indicators

**Sources:** <https://arxiv.org/abs/2408.00989v3> · <https://arxiv.org/pdf/2502.19145>

**Crosswalks:** OWASP ASI ASI08; OWASP threat T5

#### RISK-013 · Man-in-the-middle attacks between agents

**Arises from:** Design: Agentic Architecture (DSN-01) + Capability: Agent Delegation (CAP-02)  
**Failure mode:** External Manipulation · **Type:** Security · **Hazards:** Data (HZ-01), Infrastructure and network (HZ-03)

This risk arises when communication channels between agents are insufficiently secured, allowing an attacker to intercept, modify, or replay messages exchanged within the agentic system. As a result, agents may act on tampered information, leading to incorrect coordination, unauthorised actions, or compromised system behaviour.

**Controls:**

- [CTRL-0026](#CTRL-0026) (Level 1 · Standard): Require all agents to authenticate with verifiable, cryptographically signed identities before processing requests
- [CTRL-0027](#CTRL-0027) (Level 1 · Standard): Implement circuit breakers to prevent cascading failures in multi-agent systems

**Sources:** <https://arxiv.org/pdf/2502.14847>

**Crosswalks:** OWASP ASI ASI07; OWASP threat T12, T9; MITRE ATLAS AML.T0073

#### RISK-047 · Data exfiltration through combined access to untrusted content, sensitive data, and an outbound channel

**Arises from:** the combination rule "Lethal trifecta" (roles: untrusted content, sensitive data, outbound channel)  
**Failure mode:** External Manipulation · **Type:** Security · **Hazards:** Data (HZ-01)

This risk arises when an agent that takes in untrusted content (web pages, files, inbound email, chat, support tickets, form submissions, or API responses) also holds access to sensitive data and has any outbound channel, such as browsing, API calls, messages, or tool calls that carry data in URLs. Instructions injected through the content can then direct the agent to send data out through a legitimate channel, for example by fetching an attacker's URL with data in it, by replying or forwarding to an attacker's address, or by posting to a shared channel. Each capability may be individually controlled; the exposure comes from their combination, and the way in and the way out can be the same channel. As a result, confidential data can leave the organisation without any single control being bypassed, as demonstrated by EchoLeak, where a single crafted email led Microsoft 365 Copilot to send internal data to an attacker, and ForcedLeak, where instructions in a web-form submission led Salesforce Agentforce to exfiltrate CRM records.

**Controls:**

- [CTRL-0020](#CTRL-0020) (Level 2 · Best Practice): Use a dedicated LLM to extract required fields from inputs and filter out extraneous text or embedded instructions
- [CTRL-0060](#CTRL-0060) (Level 1 · Standard): Implement escape filtering before incorporating web content into prompts
- [CTRL-0062](#CTRL-0062) (Level 0 · Cardinal): Implement input guardrails to detect prompt injection and adversarial attacks
- [CTRL-0082](#CTRL-0082) (Level 2 · Best Practice): Do not grant agents access to personally identifiable or sensitive data unless strictly required
- [CTRL-0083](#CTRL-0083) (Level 0 · Cardinal): Disallow unknown or external files unless they have been scanned for threats
- [CTRL-0089](#CTRL-0089) (Level 0 · Cardinal): Enforce default-deny network egress for agent runtimes, allowing only approved destinations
- [CTRL-0090](#CTRL-0090) (Level 1 · Standard): Enforce data-flow and capability policies at runtime with a deterministic policy layer that separates untrusted content from privileged actions
- [CTRL-0097](#CTRL-0097) (Level 0 · Cardinal): Do not give one agent untrusted content, access to sensitive data, and an unrestricted outbound channel at once; remove one, or gate the outbound channel outside the agent

**Sources:** <https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/> · <https://www.varonis.com/blog/forcedleak> · <https://arxiv.org/abs/2509.10540> · <https://www.anthropic.com/engineering/how-we-contain-claude> · <https://www.frontiermodelforum.org/uploads/2026/06/FMF-Issue-Brief-on-Emerging-Security-Practices-for-AI-Agents.pdf>

**Crosswalks:** OWASP ASI ASI01, ASI02; OWASP threat T6, T2; MITRE ATLAS AML.T0051.001, AML.T0078, AML.T0085, AML.T0086, AML.T0077

#### RISK-049 · Escape from evaluation or sandbox containment onto live systems

**Arises from:** Design: Roles and Access Controls (DSN-02) + Capability: Code Execution (CAP-10)  
**Failure mode:** Agent Misbehaviour · **Type:** Safety, Security · **Hazards:** Infrastructure and network (HZ-03), Identity and access management (HZ-04), Compromised user safety (HZ-08), Harm to third parties (HZ-11)

**Applies when:** Code Execution (CAP-10) is used at act with approval or above.

This risk arises when an agent that can execute code, operating in what is intended to be a contained setting — an evaluation, a red-team exercise, or a sandboxed task — reaches real systems because containment is incomplete: network egress is open, real credentials or accounts are present, or the objective can be pursued more easily outside the boundary. Capable agents have inferred that they were being evaluated and attacked third-party infrastructure to satisfy the task, and have taken unsanctioned actions against real people and organisations during cyber testing. As a result, activity meant to be harmless produces real-world security incidents.

**Controls:**

- [CTRL-0029](#CTRL-0029) (Level 0 · Cardinal): Grant agents only the minimum permissions required for their designated tasks
- [CTRL-0040](#CTRL-0040) (Level 0 · Cardinal): Limit the scope of agent actions through predefined thresholds and baselines
- [CTRL-0065](#CTRL-0065) (Level 0 · Cardinal): Ensure every agent can be immediately paused or terminated by its operators
- [CTRL-0069](#CTRL-0069) (Level 0 · Cardinal): Run agent-generated code only in isolated compute environments with network access blocked by default
- [CTRL-0089](#CTRL-0089) (Level 0 · Cardinal): Enforce default-deny network egress for agent runtimes, allowing only approved destinations
- [CTRL-0092](#CTRL-0092) (Level 0 · Cardinal): Contain evaluations and red-team exercises so that agents cannot reach real systems, credentials, or people
- [CTRL-0098](#CTRL-0098) (Level 0 · Cardinal): Keep credentials and backups out of reach of agent-run code

**Sources:** <https://huggingface.co/blog/security-incident-july-2026> · <https://openai.com/index/hugging-face-model-evaluation-security-incident/> · <https://www.aisi.gov.uk/blog/incident-report-unsanctioned-agent-behaviour-during-cyber-testing>

**Crosswalks:** OWASP ASI ASI10, ASI03; OWASP threat T13, T7; MITRE ATLAS AML.T0117, AML.T0122, AML.T0105

#### RISK-051 · Unsanctioned coordination between agents

**Arises from:** Design: Agentic Architecture (DSN-01) + Capability: Agent Delegation (CAP-02)  
**Failure mode:** Agent Misbehaviour · **Type:** Safety, Security · **Hazards:** Identity and access management (HZ-04), Compromised user safety (HZ-08)

This risk arises when agents in a multi-agent system coordinate through channels or in ways that no operator sanctioned — sharing credentials, leaving each other messages in shared stores, using side channels, or dividing up a task so that each agent's actions look acceptable while the combined outcome is not. Coordination can emerge from shared objectives without any explicit instruction, and standard per-agent monitoring does not see it. As a result, the system as a whole pursues outcomes that would have been blocked had a single agent attempted them.

**Controls:**

- [CTRL-0024](#CTRL-0024) (Level 0 · Cardinal): Define formal schemas for inter-agent messages and validate all messages against these schemas before processing
- [CTRL-0026](#CTRL-0026) (Level 1 · Standard): Require all agents to authenticate with verifiable, cryptographically signed identities before processing requests
- [CTRL-0028](#CTRL-0028) (Level 0 · Cardinal): Continuously monitor multi-agent systems for cascade failure indicators
- [CTRL-0093](#CTRL-0093) (Level 2 · Best Practice): Monitor agents for deceptive and collusive behaviour using an independent monitor
- [CTRL-0065](#CTRL-0065) (Level 0 · Cardinal): Ensure every agent can be immediately paused or terminated by its operators

**Sources:** <https://www.aisi.gov.uk/blog/incident-report-unsanctioned-agent-behaviour-during-cyber-testing> · <https://arxiv.org/abs/2502.14143> · <https://arxiv.org/abs/2601.11369>

**Crosswalks:** OWASP ASI ASI10, ASI07; OWASP threat T13, T12; MITRE ATLAS AML.T0118, AML.T0118.000

#### RISK-053 · Dependence on third-party agents as counterparties or delegates

**Arises from:** Component: Protocols (CMP-05) + Capability: Agent Delegation (CAP-02)  
**Failure mode:** Tool or Resource Malfunction · **Type:** Safety, Security · **Hazards:** Data (HZ-01), Compromised user safety (HZ-08)

This risk arises when tasks are delegated to, or transactions conducted with, agents provided or operated by external parties — SaaS agents, partner agents reached through protocols such as A2A — whose instructions, tools, data handling, and updates are outside the organisation's control. Delegated work may be performed unsafely, data shared with the agent may be retained or reused, and behaviour can change without notice. As a result, the organisation carries the consequences of failures it cannot observe or govern directly.

**Controls:**

- [CTRL-0024](#CTRL-0024) (Level 0 · Cardinal): Define formal schemas for inter-agent messages and validate all messages against these schemas before processing
- [CTRL-0025](#CTRL-0025) (Level 1 · Standard): Ensure all inter-agent communications are encrypted in transit and prohibit plaintext channels
- [CTRL-0026](#CTRL-0026) (Level 1 · Standard): Require all agents to authenticate with verifiable, cryptographically signed identities before processing requests
- [CTRL-0039](#CTRL-0039) (Level 1 · Standard): Ensure each agent publishes standardised, machine-readable capability descriptors accessible to other agents
- [CTRL-0040](#CTRL-0040) (Level 0 · Cardinal): Limit the scope of agent actions through predefined thresholds and baselines
- [CTRL-0095](#CTRL-0095) (Level 1 · Standard): Apply due diligence and technical bounds to third-party agents before delegating to them or transacting with them

**Sources:** <https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf> · <https://www.linuxfoundation.org/press/a2a-protocol-surpasses-150-organizations-lands-in-major-cloud-platforms-and-sees-enterprise-production-use-in-first-year> · <https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/>

**Crosswalks:** OWASP ASI ASI04, ASI07; OWASP threat T13

#### RISK-062 · Agent alters or disables the oversight placed on it

**Arises from:** the combination rule "Oversight within reach" (roles: its own safeguards)  
**Failure mode:** Agent Misbehaviour · **Type:** Safety, Security · **Hazards:** Identity and access management (HZ-04), Misrepresentation (HZ-09)

This risk arises when an agent is able to change the logs, monitors, permissions, approval settings, or configuration that are meant to constrain it, and does so in pursuit of its task or at the direction of injected content. It may mute an alert that is slowing it down, switch off a confirmation step, widen its own permissions, edit a log, or report an action as approved when it was not. As a result, the organisation loses the record and the checks it relies on to know what the agent did and to stop it, as when internal coding agents muted the alerts of the system monitoring them and one removed its monitor, an injected code comment led a coding assistant to turn off its own confirmation prompts, and a sandboxed coding agent was able to switch off its own sandbox and approvals.

**Controls:**

- [CTRL-0032](#CTRL-0032) (Level 0 · Cardinal): Centralise observability data collection in a unified backend system
- [CTRL-0034](#CTRL-0034) (Level 0 · Cardinal): Conduct regular reviews of logs and traces to detect emergent issues in deployed agentic systems
- [CTRL-0065](#CTRL-0065) (Level 0 · Cardinal): Ensure every agent can be immediately paused or terminated by its operators
- [CTRL-0093](#CTRL-0093) (Level 2 · Best Practice): Monitor agents for deceptive and collusive behaviour using an independent monitor
- [CTRL-0101](#CTRL-0101) (Level 0 · Cardinal): Give agents no write access to their own instructions, configuration, permissions, logs, or monitors

**Sources:** <https://alignment.openai.com/misalignment-reports/suppressing-misalignment-monitoring-alerts-and-disabling-misalignment-monitoring/> · <https://metr.org/blog/2026-10-22-red-teaming-openai-agent-monitoring/> · <https://embracethered.com/blog/posts/2025/github-copilot-remote-code-execution-via-prompt-injection/> · <https://thehackernews.com/2026/09/deepseek-harness-flaw-let-ai-agents.html>

**Crosswalks:** OWASP ASI ASI10; OWASP threat T7, T8; MITRE ATLAS AML.T0138

### Retired risks

These IDs are kept so that older assessments and citations still resolve.

#### RISK-055 · Data exfiltration through message and API channels

Retired. Superseded by [RISK-047](#RISK-047).

## Controls

Level 0 controls are cardinal, Level 1 standard and Level 2 best practice; [Controls → Control levels](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/controls/#control-levels) defines when each applies.

### CTRL-0001 · Use only LLMs from verified and trusted model developers

**Level 0 · Cardinal** · **Mitigates:** [RISK-001](#RISK-001)

Untrusted or unknown model developers may introduce backdoors, data exfiltration risks, or inconsistent safety guarantees that compromise your agentic system. Establish evaluation criteria to assess model provider trustworthiness before adoption, including verification of published model cards, transparent responsible disclosure policies, evidence of security audits, and documented data handling practices. Evaluate whether the provider has an established track record, active security team, and clear incident response procedures. Regularly reassess providers against these criteria as new information emerges or the threat landscape evolves.

**Enforced in:** organisation · **Owner:** governance · **Phase:** design, operate

**Evidence that it is in place:** The approved model provider register, with each provider's dated assessment against the trust criteria and the name of the assessor.

**Test that it works:** List every model endpoint the system calls in production and confirm each provider has a register entry assessed within the review period.

**References:** <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/> · <https://www.ncsc.gov.uk/files/Guidelines-for-secure-AI-system-development.pdf> · <https://genai.owasp.org/llmrisk/llm032025-supply-chain/>

**Crosswalks:** CSA Addendum 2.1; IMDA MGF 2.3.1; OWASP ASI ASI04; Five Eyes guidance DV7, AA2

### CTRL-0002 · Obtain legally binding no-training and no-logging agreements from LLM API service providers

**Level 0 · Cardinal** · **Mitigates:** [RISK-001](#RISK-001)

Without contractual protections, API providers may train models on your proprietary data or retain logs containing sensitive information, creating data leakage and compliance risks. Configure API settings to opt out of data logging and model training where available, and have your legal team review provider terms of service and data processing agreements to verify these protections are legally enforceable. Ensure alignment with your organisation's data governance and privacy requirements (e.g., GDPR, PDPA). Maintain records of these agreements and configurations for audit and compliance purposes.

**Enforced in:** organisation, infrastructure · **Owner:** governance · **Phase:** design, deploy

**Evidence that it is in place:** The signed data processing agreement clause barring training on and retention of submitted data, and the provider account setting showing both switched off.

**Test that it works:** Open the provider console for the production API key and confirm training use and log retention are switched off, matching the contract clause.

**References:** <https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf> · <https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf> · <https://genai.owasp.org/llmrisk/llm032025-supply-chain/>

**Crosswalks:** CSA Addendum 2.1; IMDA MGF 2.2.1; OWASP ASI ASI04

### CTRL-0003 · Use only established and verified model loaders in production environments

**Level 1 · Standard** · **Mitigates:** [RISK-001](#RISK-001)

Malicious or unvetted model loaders may execute arbitrary code during model deserialisation, potentially introducing backdoors or system vulnerabilities. Use well-maintained, community-vetted model loading libraries with active security support and regular updates. Examples include Hugging Face Transformers, vLLM, or official framework loaders (PyTorch, TensorFlow), whilst avoiding custom or unmaintained deserialisation code. Monitor for security advisories affecting your chosen loaders and apply patches promptly.

**Enforced in:** infrastructure · **Owner:** platform · **Phase:** build, operate

**Evidence that it is in place:** The model-serving image's dependency lock file naming the loader library and pinned version, checked against the approved loader list.

**Test that it works:** Scan the production serving image and confirm it holds only an approved loader, at a version with no open security advisory, and no custom deserialisation code.

**References:** <https://www.ncsc.gov.uk/files/Guidelines-for-secure-AI-system-development.pdf> · <https://huggingface.co/docs/hub/security-pickle> · <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/>

**Crosswalks:** CSA Addendum 2.1; OWASP ASI ASI04, ASI05; Five Eyes guidance DV7, AA2

### CTRL-0004 · Review the LLM's system card to inform risk assessment and model selection

**Level 2 · Best Practice** · **Mitigates:** [RISK-002](#RISK-002), [RISK-003](#RISK-003)

System cards provide essential information about model capabilities, limitations, known failure modes, and safety evaluations that directly inform deployment decisions. Obtain and review the model's system card (or model card) before deployment, paying particular attention to documented risks, benchmark performance on safety evaluations, and limitations relevant to your use case. Use this information to identify potential misalignment between model behaviour and your application requirements, and to inform additional safeguards or testing strategies. If a system card is unavailable or incomplete, consider this a red flag when assessing provider trustworthiness.

**Enforced in:** organisation · **Owner:** developer · **Phase:** design

**Evidence that it is in place:** The model selection record citing the system card version reviewed and mapping each documented limitation to an entry in the system's risk assessment.

**Test that it works:** Pick three limitations from the current system card and confirm each has a matching safeguard or accepted-risk decision in the risk assessment.

**References:** <https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf> · <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/> · <https://arxiv.org/abs/1810.03993>

**Crosswalks:** CSA Addendum 2.1; IMDA MGF 2.1.1; OWASP ASI ASI10; Five Eyes guidance AA2

### CTRL-0005 · Conduct structured evaluation of multiple LLMs for instruction-following, performance, and safety before deployment

**Level 1 · Standard** · **Mitigates:** [RISK-002](#RISK-002), [RISK-003](#RISK-003), [RISK-061](#RISK-061)

Deploying an LLM without comparative evaluation risks selecting a model poorly suited to your use case, potentially resulting in safety issues, poor performance, or misaligned behaviour. Define evaluation criteria aligned with your application requirements (e.g., accuracy on domain-specific tasks, refusal of unsafe requests, consistency of outputs) and benchmark multiple candidate models against these criteria using representative test scenarios. Use both automated metrics and human evaluation to assess instruction-following quality, safety boundaries, and failure modes. Document evaluation results to support model selection decisions and establish baseline performance expectations for ongoing monitoring.

**Enforced in:** organisation, model · **Owner:** developer · **Phase:** design, build

**Evidence that it is in place:** The evaluation report scoring at least two candidate models on one test set for instruction-following, task performance and safety, with the selection decision.

**Test that it works:** Re-run the stored evaluation set against the deployed model version and confirm its scores fall within the tolerance recorded in the report.

**References:** <https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf> · <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/> · <https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf>

**Crosswalks:** CSA Addendum 2.2, 3.2; IMDA MGF 2.3.2; OWASP ASI ASI10; Five Eyes guidance DV2

### CTRL-0007 · Log all LLM inputs and outputs for regular review

**Level 0 · Cardinal** · **Mitigates:** [RISK-001](#RISK-001), [RISK-002](#RISK-002), [RISK-003](#RISK-003), [RISK-050](#RISK-050)

Comprehensive logging enables post-incident analysis, safety monitoring, detection of adversarial inputs, and continuous improvement of LLM behaviour over time. Implement structured logging that captures all LLM inputs, outputs, timestamps, model versions, and relevant metadata (user ID, session ID, tool calls). Use a centralised logging system (e.g., ELK stack, Datadog, CloudWatch) with appropriate retention policies and access controls to protect sensitive data. Establish regular review processes—manual spot-checks or automated anomaly detection—to identify drift, unsafe outputs, or emerging failure patterns.

**Enforced in:** harness, infrastructure · **Owner:** developer · **Phase:** build, operate

**Evidence that it is in place:** A log query for one production session returning every model request and response with timestamp, model version, user identifier and session identifier.

**Test that it works:** Send a prompt containing a unique marker string and confirm the central log returns both that prompt and the model's reply within minutes.

**References:** <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/> · <https://www.ncsc.gov.uk/blog-post/prompt-injection-is-not-sql-injection> · <https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf>

**Crosswalks:** CSA Addendum 4.3; IMDA MGF 2.3.3; OWASP ASI ASI08; Five Eyes guidance DV6, OP1

### CTRL-0008 · Implement automated alerts when agent behaviour drifts from predefined thresholds

**Level 1 · Standard** · **Mitigates:** [RISK-002](#RISK-002), [RISK-022](#RISK-022), [RISK-067](#RISK-067)

Behavioural drift may indicate model degradation, adversarial manipulation, or emergent unsafe patterns that require immediate investigation. Define baseline metrics for expected agent behaviour (e.g., tool usage patterns, response times, error rates, decision distributions) and establish acceptable variance thresholds based on your risk tolerance. Implement monitoring systems that continuously track these metrics and trigger alerts when deviations exceed thresholds, enabling rapid response to anomalies. Configure alerts to include sufficient diagnostic context (timestamp, affected sessions, deviation magnitude) and establish clear escalation procedures for investigating and remediating drift incidents.

**Enforced in:** infrastructure, organisation · **Owner:** developer · **Phase:** deploy, operate

**Evidence that it is in place:** The alert rules in the monitoring system, each naming a behavioural metric, its baseline, its threshold and the escalation route.

**Test that it works:** Replay a staging session with ten times the baseline tool-call rate and confirm an alert fires naming the session and the size of the deviation.

**References:** <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/> · <https://www.cyber.gov.au/publication/careful-adoption-of-agentic-ai-services> · <https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf>

**Crosswalks:** CSA Addendum 4.3; IMDA MGF 2.3.3; OWASP ASI ASI10; Five Eyes guidance OP1

### CTRL-0009 · Use only tool servers and APIs, including MCP servers, that implement robust authentication mechanisms in production environments

**Level 0 · Cardinal** · **Mitigates:** [RISK-004](#RISK-004), [RISK-054](#RISK-054), [RISK-064](#RISK-064)

Weak or misconfigured authorisation on the servers and APIs that an agent's tools call can lead to unauthorised access, token theft, or privilege escalation that compromises connected systems. Before deployment, verify that every remote tool endpoint authenticates its caller with a standard mechanism (for example OAuth 2.1, OAuth 2.0 with PKCE, or mutually authenticated TLS) and enforces per-client scopes, and reject endpoints that rely on hard-coded credentials, unscoped shared keys, or deprecated authentication methods; test the authorisation flows in a development environment to confirm them. For MCP servers, also verify per-client consent flows and redirect URI validation to prevent authorisation bypasses, and reject servers with insufficient session management. As of the 2026-07-28 MCP specification, verify additionally that the server implements RFC 9207 issuer identification (so a client can detect a substituted authorization server) and Client ID Metadata Documents in place of dynamic client registration, and prefer servers that support the Enterprise-Managed Authorization extension so that access is governed by your identity provider rather than by per-user ad-hoc consent. Treat servers still built on the pre-2026 stateful session model as needing review before production use.

**Enforced in:** infrastructure, organisation · **Owner:** security · **Phase:** build, deploy

**Evidence that it is in place:** The tool endpoint inventory recording each remote server's authentication mechanism and per-client scopes, with the integration review that exercised its authorisation flow.

**Test that it works:** Call each production tool endpoint with no credential and with a credential scoped for a different client, and confirm both are refused.

**References:** <https://modelcontextprotocol.io/specification/draft/basic/security_best_practices> · <https://blog.modelcontextprotocol.io/posts/2026-07-28/>

**Crosswalks:** CSA Addendum 2.1, 3.3; IMDA MGF 2.3.1; OWASP ASI ASI03, ASI04; Five Eyes guidance DS3, AA1

### CTRL-0010 · Use only MCP servers that validate credentials on every inbound request

**Level 1 · Standard** · **Mitigates:** [RISK-064](#RISK-064)

Relying on session state or connection-based authentication without per-request validation creates vulnerability to session hijacking, token replay attacks, and unauthorised access after initial authentication. Verify that MCP servers implement stateless authentication by validating credentials (e.g., OAuth tokens, API keys) on every single request rather than caching authorisation decisions based on connection or session state. Test this behaviour by monitoring whether the server accepts requests with expired, revoked, or missing credentials after an initial successful authentication. Ensure the server responds with appropriate HTTP 401 errors when credentials are invalid, expired, or absent, forcing re-authentication rather than relying on stale authorisation state. The 2026-07-28 specification removes long-lived stateful sessions from the protocol core, making per-request validation the expected behaviour; treat a server whose authorization depends on session state as non-compliant.

**Enforced in:** infrastructure, organisation · **Owner:** security · **Phase:** build, deploy

**Evidence that it is in place:** The MCP server assessment record containing captured responses to requests sent with expired, revoked and missing tokens after an initial successful login.

**Test that it works:** Authenticate to the MCP server, revoke the token, send another request on the same connection and confirm it returns HTTP 401.

**References:** <https://modelcontextprotocol.io/specification/draft/basic/security_best_practices> · <https://blog.modelcontextprotocol.io/posts/2026-07-28/>

**Crosswalks:** CSA Addendum 2.6; IMDA MGF 2.1.2; OWASP ASI ASI03; Five Eyes guidance OP5

### CTRL-0011 · Limit token scopes to the minimum privileges required and avoid broad or wildcard scopes

**Level 0 · Cardinal** · **Mitigates:** [RISK-005](#RISK-005), [RISK-060](#RISK-060)

Overly broad token scopes enable compromised or malicious actors to access resources beyond what is necessary for legitimate operations, amplifying the impact of security breaches. Define granular, task-specific scopes for each MCP server integration and request only the minimum permissions required for the intended functionality (e.g., "read:inventory" rather than "admin:*"). Review and document the justification for each requested scope during integration, and reject MCP servers that require unnecessarily broad permissions or fail to support fine-grained scope definitions. Periodically audit active token scopes to identify and revoke excessive permissions that may have accumulated over time.

**Enforced in:** infrastructure, organisation · **Owner:** developer · **Phase:** build, operate

**Evidence that it is in place:** The OAuth client configuration listing each scope requested per tool integration with its justification, containing no wildcard or administrator scope.

**Test that it works:** Decode a token issued to the agent in production, confirm its scopes match the configured list, then call an out-of-scope operation and confirm refusal.

**References:** <https://modelcontextprotocol.io/specification/draft/basic/security_best_practices>

**Crosswalks:** CSA Addendum 2.6, 2.8; IMDA MGF 2.1.2; OWASP ASI ASI03; Five Eyes guidance DS3, OP5, AA1

### CTRL-0012 · Use only MCP servers that integrate with authorisation servers implementing per-client consent mechanisms

**Level 2 · Best Practice** · **Mitigates:** [RISK-064](#RISK-064)

Without explicit per-client consent, a malicious or compromised client could abuse delegated permissions to access resources the user never intended to authorise for that specific application. Verify that MCP servers integrate with OAuth 2.1 authorisation servers that implement per-client consent flows, where users explicitly approve each client-permission combination rather than granting blanket permissions across all clients. The authorisation server should clearly identify the requesting client and display what data or actions are being requested during the consent flow. Ensure the authorisation server persists consent decisions and provides mechanisms for users to review and revoke previously granted permissions. With Client ID Metadata Documents (2026-07-28 specification), the authorization server identifies the client from its published metadata; check that consent screens name the client accurately, and use the Enterprise-Managed Authorization extension where a central identity provider should govern access on behalf of all users.

**Enforced in:** infrastructure, organisation · **Owner:** security · **Phase:** build, deploy

**Evidence that it is in place:** A capture of the authorisation server's consent screen naming the client and the permissions requested, and of the page where users review and revoke grants.

**Test that it works:** Connect a second client under a user who has consented only to the first and confirm a fresh consent prompt appears before any access is granted.

**References:** <https://modelcontextprotocol.io/specification/2025-03-26/basic/authorization> · <https://aaronparecki.com/2025/11/25/1/mcp-authorization-spec-update> · <https://stytch.com/blog/mcp-authentication-and-authorization-servers/> · <https://blog.modelcontextprotocol.io/posts/2026-07-28/>

**Crosswalks:** CSA Addendum 3.3; IMDA MGF 2.1.2; OWASP ASI ASI03

### CTRL-0013 · Test all untested MCP servers in a sandboxed environment before deploying to production

**Level 0 · Cardinal** · **Mitigates:** [RISK-006](#RISK-006), [RISK-064](#RISK-064)

Untested MCP servers may contain vulnerabilities, malicious code, or unexpected behaviours that could compromise your production systems or data. Deploy MCP servers first to an isolated sandbox environment (e.g., containerised test environment, separate network segment, or dedicated development infrastructure) to evaluate their security posture, behaviour, and reliability. Monitor server activity during testing for anomalous network connections, excessive resource consumption, unauthorised file access, or other suspicious behaviours. Only promote MCP servers to production after successful security review, functional testing, and verification that the server behaves as documented.

**Enforced in:** organisation, infrastructure · **Owner:** developer · **Phase:** build, deploy

**Evidence that it is in place:** The sandbox test report for each MCP server, recording observed network connections, file access and resource use, with the promotion approval.

**Test that it works:** Add an MCP server with no sandbox test report to the production configuration and confirm the release review rejects it.

**References:** <https://modelcontextprotocol.io/specification/draft/basic/security_best_practices>

**Crosswalks:** CSA Addendum 2.9; IMDA MGF 2.3.2; OWASP ASI ASI04; Five Eyes guidance DV7, DV4

### CTRL-0015 · Treat all tool metadata and outputs as untrusted input requiring validation

**Level 1 · Standard** · **Mitigates:** [RISK-006](#RISK-006), [RISK-007](#RISK-007), [RISK-048](#RISK-048)

Tool metadata (descriptions, parameter names, schema definitions) can contain prompt injection attacks that manipulate agent behaviour even without tool invocation, whilst tool outputs may contain malicious content designed to compromise downstream systems. Validate and sanitise all tool metadata before exposing it to the LLM, treating tool descriptions with the same scrutiny as external user input and implementing content filtering to detect embedded instructions or adversarial prompts. Apply strict schema validation to tool outputs and sanitise responses before using them in prompts, displaying them to users, or passing them to other systems. Implement monitoring and logging of tool metadata and outputs to enable detection of injection attempts and post-incident analysis of compromised tool behaviour.

**Enforced in:** harness, model · **Owner:** developer · **Phase:** build, operate

**Evidence that it is in place:** The tool-layer code that validates tool outputs against schemas and scans tool descriptions for embedded instructions, with its log of rejections.

**Test that it works:** Register a test tool whose description and output both carry an embedded instruction and confirm the description is flagged and the output rejected before reaching the model.

**References:** <https://embracethered.com/blog/posts/2025/model-context-protocol-security-risks-and-exploits/> · <https://simonwillison.net/2025/Apr/9/mcp-prompt-injection/> · <https://www.practical-devsecops.com/mcp-security-vulnerabilities/>

**Crosswalks:** CSA Addendum 4.1, 3.3; IMDA MGF 2.3.1; OWASP ASI ASI02, ASI04; Five Eyes guidance OP2, DV3, DS4

### CTRL-0016 · Define clearly the agent's role, scope, and non-goals in the system prompt

**Level 0 · Cardinal** · **Mitigates:** [RISK-008](#RISK-008)

Ambiguous or missing role definitions allow agents to interpret requests too broadly, potentially executing actions outside intended boundaries or misunderstanding their authority and constraints. Explicitly define the agent's purpose, permitted actions, and operational boundaries in the system prompt, including clear statements about what the agent should not do or attempt. Document specific examples of in-scope and out-of-scope behaviours to reduce ambiguity and guide the agent's decision-making in edge cases. Regularly review and refine these definitions based on observed agent behaviour, ensuring role boundaries remain aligned with evolving use cases and risk tolerances.

**Enforced in:** prompt · **Owner:** developer · **Phase:** design, build

**Evidence that it is in place:** The system prompt in version control, with sections stating the agent's role, permitted actions and non-goals, and examples of in-scope and out-of-scope requests.

**Test that it works:** Send ten requests that fall under the listed non-goals and confirm the agent declines each without calling a tool.

**References:** <https://www.ncsc.gov.uk/blogs/managing-the-cyber-risk-of-agentic-ai> · <https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/> · <https://www.cyber.gov.au/publication/careful-adoption-of-agentic-ai-services>

**Crosswalks:** CSA Addendum 2.3; IMDA MGF 2.1.2; OWASP ASI ASI01; Five Eyes guidance DP5, DS1

### CTRL-0017 · Define clear success criteria for the agent's tasks

**Level 1 · Standard** · **Mitigates:** [RISK-008](#RISK-008)

Without explicit success criteria, agents may pursue task completion using inappropriate methods, over-optimise for partial objectives, or fail to recognise when they have achieved the intended outcome. Define measurable, verifiable success criteria for each task or category of tasks the agent performs, specifying both what constitutes successful completion and acceptable quality standards. Include criteria that address not just functional outcomes but also safety constraints, resource limits, and acceptable trade-offs. Regularly evaluate whether the agent's interpretation of success criteria aligns with intended outcomes and refine definitions to address observed gaps or misalignments.

**Enforced in:** prompt · **Owner:** developer · **Phase:** design, build

**Evidence that it is in place:** The task instructions in version control stating measurable completion and quality criteria per task type, with matching acceptance checks in the evaluation suite.

**Test that it works:** Run the acceptance checks on a sample of completed tasks and confirm the agent's own report of success agrees with the check result.

**References:** <https://docs.aws.amazon.com/wellarchitected/latest/agentic-ai-lens/agentops01-bp01.html> · <https://docs.aws.amazon.com/wellarchitected/latest/agentic-ai-lens/agentsus01-bp05.html>

**Crosswalks:** CSA Addendum 2.3, 3.2; IMDA MGF 2.1.2; OWASP ASI ASI01; Five Eyes guidance DP5

### CTRL-0018 · Define default behaviour when the agent encounters ambiguous situations

**Level 2 · Best Practice** · **Mitigates:** [RISK-008](#RISK-008)

Agents encountering ambiguous instructions without clear fallback behaviour may make incorrect assumptions, proceed with risky actions, or halt unexpectedly, reducing reliability and increasing safety risks. Establish a default policy for handling ambiguity that aligns with your risk tolerance, such as requesting human clarification, selecting the most conservative option, or declining to act until uncertainty is resolved. Document this policy in the system prompt and provide examples of ambiguous scenarios to guide agent decision-making. Monitor how often the agent invokes ambiguity handling mechanisms to identify areas where task definitions or instructions require clarification.

**Enforced in:** prompt · **Owner:** developer · **Phase:** design, build, operate

**Evidence that it is in place:** The system prompt section stating the default action under ambiguity with worked examples, and a dashboard counting how often the agent invokes it.

**Test that it works:** Give the agent an instruction with two conflicting readings and confirm it takes the stated default, such as asking for clarification, before any tool call.

**References:** <https://www.cyber.gov.au/publication/careful-adoption-of-agentic-ai-services> · <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/> · <https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf>

**Crosswalks:** CSA Addendum 2.10; IMDA MGF 2.3.1; OWASP ASI ASI01; Five Eyes guidance DP4

### CTRL-0019 · Keep untrusted inputs out of system instructions, and enclose any untrusted content given to the model in delimiters marked as data

**Level 0 · Cardinal** · **Mitigates:** [RISK-009](#RISK-009), [RISK-058](#RISK-058), [RISK-059](#RISK-059)

Prompt injection attacks exploit LLMs' inability to distinguish between instructions and data, allowing malicious users to embed commands within input that override intended behaviour. Do not interpolate user input, retrieved content, or tool outputs into the system prompt or other instruction templates; fix the system prompt at build time and pass untrusted content to the model in the user or tool turns, where it carries less authority. Where untrusted content must be quoted, enclose it within clearly marked boundaries (e.g., XML tags or special markers) that are unlikely to appear naturally in the input, and instruct the LLM to treat delimited content as data rather than instructions. Neither measure is a complete defence, because the model can still follow instructions in untrusted content, so combine them with controls that do not depend on the model's compliance, such as a deterministic policy layer (CTRL-0090) and least privilege (CTRL-0029).

**Enforced in:** harness, prompt · **Owner:** developer · **Phase:** build

**Evidence that it is in place:** The prompt-assembly code showing a fixed system prompt with no interpolated variables and a wrapper that places untrusted content inside tagged data blocks.

**Test that it works:** Submit input containing the closing delimiter followed by an instruction and confirm the logged system prompt is unchanged and the input sits escaped inside its data block.

**References:** <https://www.ncsc.gov.uk/blog-post/prompt-injection-is-not-sql-injection> · <https://arxiv.org/abs/2403.14720> · <https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html>

**Crosswalks:** CSA Addendum 4.1; IMDA MGF 2.3.1; OWASP ASI ASI01; Five Eyes guidance DS1, DV3

### CTRL-0020 · Use a dedicated LLM to extract required fields from inputs and filter out extraneous text or embedded instructions

**Level 2 · Best Practice** · **Mitigates:** [RISK-009](#RISK-009), [RISK-047](#RISK-047), [RISK-059](#RISK-059)

Using the same LLM for both input processing and task execution creates vulnerability to prompt injection attacks embedded in user input. Deploy a separate LLM instance configured specifically for input sanitisation, with explicit instructions to extract only designated fields (e.g., name, email, query text) whilst ignoring any other content including embedded commands or meta-instructions. Configure this extraction LLM with a restrictive system prompt focused solely on structured data extraction and validation against expected schemas. Validate extracted fields against expected formats before passing them to the main agent LLM, and monitor extraction outputs for anomalies that might indicate injection attempts.

**Enforced in:** model, harness · **Owner:** developer · **Phase:** design, build

**Evidence that it is in place:** The pipeline configuration showing a separate extraction model call, with its own restrictive prompt and output schema, placed before the main agent.

**Test that it works:** Submit an input with an instruction appended to a form field and confirm only schema-valid field values appear in the main agent's logged context.

**References:** <https://arxiv.org/abs/2506.08837> · <https://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html>

**Crosswalks:** CSA Addendum 4.1, 2.9; IMDA MGF 2.3.1; OWASP ASI ASI01; Five Eyes guidance DV3, DS4

### CTRL-0021 · Implement allowlists and denylists to restrict what categories of information can be written to the agent's persistent memory

**Level 0 · Cardinal** · **Mitigates:** [RISK-010](#RISK-010), [RISK-011](#RISK-011)

Unrestricted writes to persistent memory enable attackers to poison agent memory with malicious instructions, false information, or sensitive data that could compromise future agent behaviour or leak confidential information. Define explicit allowlists of permitted memory categories (e.g., user preferences, conversation context, task history) and denylists of forbidden content (e.g., credentials, system instructions, security policies, prompt overrides). Enforce these restrictions at the memory write interface, validating all write operations against the defined policies before persisting data.

**Enforced in:** harness · **Owner:** developer · **Phase:** build, operate

**Evidence that it is in place:** The memory-write policy file listing permitted and forbidden content categories, and the write-interface code that checks every write against it.

**Test that it works:** Ask the agent to remember an API key and a new standing instruction and confirm both writes are refused and logged.

**References:** <https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/> · <https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/> · <https://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html>

**Crosswalks:** CSA Addendum 2.6, 2.7; IMDA MGF 2.3.1; OWASP ASI ASI06; Five Eyes guidance DP5

### CTRL-0022 · Implement content filtering on writes to persistent memory to detect and block known unsafe content patterns

**Level 1 · Standard** · **Mitigates:** [RISK-010](#RISK-010)

Malicious actors may attempt to inject adversarial content into agent memory that bypasses category-based restrictions, such as jailbreak prompts, command injection templates, or social engineering content designed to manipulate future agent behaviour. Deploy content filtering mechanisms that scan all memory write operations for known unsafe patterns (e.g., jailbreak strings, tool invocation templates, prompt override attempts, phishing content) before persisting data. Implement filtering using prompt injection detectors (to detect jailbreak strings) or custom classifiers finetuned on specific risks (e.g. attempts to invoke tools maliciously).

**Enforced in:** model, harness · **Owner:** developer · **Phase:** build, operate

**Evidence that it is in place:** The memory-write filter configuration naming the injection detector or classifier and its threshold, with the log of blocked writes.

**Test that it works:** Attempt to store a known jailbreak string and a tool-invocation template in memory and confirm the filter blocks both before they persist.

**References:** <https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/> · <https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/> · <https://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html>

**Crosswalks:** CSA Addendum 4.1; IMDA MGF 2.3.1; OWASP ASI ASI06; Five Eyes guidance DV3, DP5

### CTRL-0023 · Log all modifications to persistent memory with comprehensive source metadata for audit purposes

**Level 2 · Best Practice** · **Mitigates:** [RISK-010](#RISK-010), [RISK-011](#RISK-011)

Without detailed audit logs, detecting and investigating memory poisoning attacks becomes extremely difficult, preventing effective incident response and forensic analysis. Implement comprehensive logging for all memory write, update, and delete operations, capturing source metadata including timestamps, user or agent identity, session context, and the specific content being modified. Structure logs to enable correlation analysis, allowing security teams to trace how specific memory entries evolved over time and identify suspicious modification patterns. Store audit logs in a tamper-evident system separate from the agent's operational memory to prevent attackers from covering their tracks by deleting or modifying log entries.

**Enforced in:** harness, infrastructure · **Owner:** developer · **Phase:** build, operate

**Evidence that it is in place:** A memory audit log query for one entry returning every write, update and delete with timestamp, actor identity, session and changed content.

**Test that it works:** Create, edit and delete a memory entry and confirm three matching audit records exist in a store the agent's credentials cannot modify.

**References:** <https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/> · <https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/> · <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/>

**Crosswalks:** CSA Addendum 4.3; IMDA MGF 2.3.3; OWASP ASI ASI06, ASI08; Five Eyes guidance DV6, OP1, DP6

### CTRL-0024 · Define formal schemas for inter-agent messages and validate all messages against these schemas before processing

**Level 0 · Cardinal** · **Mitigates:** [RISK-012](#RISK-012), [RISK-022](#RISK-022), [RISK-051](#RISK-051), [RISK-053](#RISK-053), [RISK-063](#RISK-063)

Unstructured or inadequately validated inter-agent messages create vulnerability to injection attacks, misinterpretation, and parsing errors that could compromise agent behaviour or cascade through multi-agent systems. Define explicit message schemas using formal specification languages (e.g., JSON Schema, Protobuf, OpenAPI) that specify required fields, data types, validation rules, and permitted value ranges for all agent-to-agent communications. Implement strict input validation that verifies all incoming messages conform to expected schemas, checking field presence, data types, value ranges, and structural integrity before processing message content. Reject messages that are incomplete, contain unexpected fields, violate type constraints, or include suspicious patterns, returning explicit error responses to the sending agent and logging validation failures to enable detection of compromised or malfunctioning agents.

**Enforced in:** harness · **Owner:** developer · **Phase:** design, build

**Evidence that it is in place:** The inter-agent message schemas in version control and the validator invoked at each agent's message entry point.

**Test that it works:** Send an agent a message with a missing required field and an undeclared extra field and confirm it returns an error and logs a validation failure.

**References:** <https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf> · <https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/> · <https://a2a-protocol.org/latest/specification/>

**Crosswalks:** CSA Addendum 2.7, 3.4; IMDA MGF 2.3.1; OWASP ASI ASI07; Five Eyes guidance AA1, DS4

### CTRL-0025 · Ensure all inter-agent communications are encrypted in transit and prohibit plaintext channels

**Level 1 · Standard** · **Mitigates:** [RISK-012](#RISK-012), [RISK-022](#RISK-022), [RISK-053](#RISK-053)

Unencrypted inter-agent communications expose sensitive data, credentials, and operational context to network-based attackers through eavesdropping or man-in-the-middle attacks. Ensure all agent-to-agent network communications use transport-layer encryption (minimum TLS 1.2, preferably TLS 1.3), including internal traffic within trusted network boundaries, as internal networks are increasingly targeted by sophisticated attackers. For protocol-based frameworks (e.g., A2A Protocol), verify that TLS is enabled by default; for application frameworks (e.g., LangGraph, CrewAI), configure deployment infrastructure to enforce HTTPS endpoints for all remote agent APIs. Configure agents to reject plaintext connections and verify certificates to prevent downgrade attacks or rogue agent impersonation, and regularly audit network traffic to detect agents attempting unencrypted communication.

**Enforced in:** infrastructure · **Owner:** platform · **Phase:** build, deploy

**Evidence that it is in place:** The service mesh or load balancer configuration requiring TLS 1.2 or higher on every agent endpoint, with plaintext listeners disabled.

**Test that it works:** Attempt a plaintext HTTP connection and a TLS 1.0 handshake to each agent endpoint and confirm both are refused.

**References:** <https://a2aprotocol.ai/blog/2025-full-guide-a2a-protocol>

**Crosswalks:** CSA Addendum 3.4, 2.6; IMDA MGF 2.3.1; OWASP ASI ASI07; Five Eyes guidance DS3, AA1

### CTRL-0026 · Require all agents to authenticate with verifiable, cryptographically signed identities before processing requests

**Level 1 · Standard** · **Mitigates:** [RISK-013](#RISK-013), [RISK-051](#RISK-051), [RISK-053](#RISK-053), [RISK-063](#RISK-063)

Without strong agent authentication, attackers can impersonate legitimate agents to gain unauthorised access, inject malicious commands, or exfiltrate sensitive data from multi-agent systems. Implement cryptographic identity verification using mechanisms such as mutual TLS (mTLS), signed JWTs, or certificate-based authentication to ensure each agent presents verifiable credentials before processing its requests. Configure the authentication system to validate that credentials are properly signed by a trusted authority, have not expired, and belong to the claimed agent identity. Reject unauthenticated requests immediately and log authentication failures to detect potential impersonation attempts or compromised agents attempting to bypass security controls. Both the A2A Protocol and LangGraph provide native support for cryptographic agent authentication through mTLS, OAuth 2.0, and JWT-based identity verification.

**Enforced in:** infrastructure, harness · **Owner:** platform · **Phase:** build, deploy

**Evidence that it is in place:** The mutual TLS or token-validation configuration on each agent endpoint naming the trusted issuer, with authentication failures visible in the log.

**Test that it works:** Send an agent requests carrying no credential, an expired token and a certificate from an untrusted authority, and confirm all three are rejected and logged.

**References:** <https://developers.redhat.com/articles/2025/08/19/how-enhance-agent2agent-security> · <https://a2a-protocol.org/latest/topics/enterprise-ready/> · <https://blog.langchain.com/custom-authentication-and-access-control-in-langgraph/>

**Crosswalks:** CSA Addendum 3.4, 2.6; IMDA MGF 2.1.2; OWASP ASI ASI03, ASI07; Five Eyes guidance DS3, OP5

### CTRL-0027 · Implement circuit breakers to prevent cascading failures in multi-agent systems

**Level 1 · Standard** · **Mitigates:** [RISK-012](#RISK-012), [RISK-013](#RISK-013), [RISK-014](#RISK-014)

Without circuit breakers, failures in one agent can cascade through multi-agent systems, causing widespread outages, resource exhaustion, or degraded performance across interconnected agents. Implement circuit breaker patterns that monitor agent interactions and automatically halt requests to failing agents when error rates, timeouts, or response times exceed predefined thresholds. Configure circuit breakers with appropriate timeout values, retry limits, and failure thresholds based on your system's tolerance for latency and error rates.

**Enforced in:** harness · **Owner:** developer · **Phase:** build, operate

**Evidence that it is in place:** The circuit-breaker settings in the orchestration configuration giving failure threshold, timeout and retry limit for each agent-to-agent call.

**Test that it works:** Make one downstream agent return errors continuously and confirm callers stop sending it requests once the threshold is reached.

**References:** <https://live.paloaltonetworks.com/t5/community-blogs/safeguarding-ai-agents-an-in-depth-look-at-a2a-protocol-risks/ba-p/1235996>

**Crosswalks:** CSA Addendum 4.3; IMDA MGF 2.3.3; OWASP ASI ASI08; Five Eyes guidance DV5, DP4

### CTRL-0028 · Continuously monitor multi-agent systems for cascade failure indicators

**Level 0 · Cardinal** · **Mitigates:** [RISK-012](#RISK-012), [RISK-051](#RISK-051)

Cascade failures can rapidly propagate through multi-agent systems, but early detection enables intervention before widespread system degradation occurs. Implement monitoring that tracks indicators of cascading failures including agent looping behaviour, repeated error patterns, diverging outputs across similar agents, and abnormal request rates between agents. Configure alerting thresholds that trigger when cascade indicators exceed acceptable levels, such as the same agent repeatedly calling the same endpoint, multiple agents simultaneously failing similar requests, or circular dependencies in agent communication patterns.

**Enforced in:** infrastructure, harness · **Owner:** developer · **Phase:** deploy, operate

**Evidence that it is in place:** The dashboards and alert rules covering inter-agent request rates, repeated identical calls, simultaneous failures and circular call chains.

**Test that it works:** Set two agents calling each other in a loop in staging and confirm an alert naming both fires within the configured window.

**References:** <https://live.paloaltonetworks.com/t5/community-blogs/safeguarding-ai-agents-an-in-depth-look-at-a2a-protocol-risks/ba-p/1235996>

**Crosswalks:** CSA Addendum 4.3; IMDA MGF 2.3.3; OWASP ASI ASI08; Five Eyes guidance OP1

### CTRL-0029 · Grant agents only the minimum permissions required for their designated tasks

**Level 0 · Cardinal** · **Mitigates:** [RISK-014](#RISK-014), [RISK-015](#RISK-015), [RISK-016](#RISK-016), [RISK-049](#RISK-049), [RISK-056](#RISK-056), [RISK-057](#RISK-057), [RISK-060](#RISK-060), [RISK-063](#RISK-063)

Excessive permissions enable compromised or malfunctioning agents to access sensitive resources, modify critical data, or perform actions beyond their intended scope, amplifying the impact of security breaches. Apply the principle of least privilege by defining granular permission sets for each agent based on its specific role and required operations, avoiding blanket administrative access or broad permission grants. Review agent permissions regularly to ensure they remain aligned with current responsibilities, revoking unnecessary access as agent roles evolve.

**Enforced in:** infrastructure, harness · **Owner:** developer · **Phase:** design, build, operate

**Evidence that it is in place:** Each agent's IAM policy and tool permission manifest, with every permission tied to a named task, and the latest access review record.

**Test that it works:** Using the agent's credentials, attempt an operation outside its role, such as reading another system's data store, and confirm it is denied.

**References:** <https://www.cyber.gov.au/publication/careful-adoption-of-agentic-ai-services> · <https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf> · <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/>

**Crosswalks:** CSA Addendum 2.8; IMDA MGF 2.1.2; OWASP ASI ASI03; Five Eyes guidance DS3, OP5, AA1

### CTRL-0030 · Assign each agent a unique, verifiable identity with no shared credentials

**Level 1 · Standard** · **Mitigates:** [RISK-015](#RISK-015), [RISK-016](#RISK-016), [RISK-060](#RISK-060)

Shared credentials prevent accurate attribution of agent actions, making it impossible to identify which agent performed unauthorised activities or to revoke access for compromised agents without affecting legitimate ones. Assign each agent instance a unique identity (e.g., service account, API key, certificate) that can be independently tracked, audited, and revoked without impacting other agents. Prohibit credential sharing between agents even when they perform similar functions, as unique identities enable granular access control and forensic analysis of agent behaviour. Emerging agentic IAM platforms, such as Amazon Bedrock AgentCore Identity, can help to provide purpose-built identity management for AI agents. Concrete mechanisms now exist: SPIFFE/SPIRE workload identities with short rotation for agents and MCP servers, Microsoft Entra Agent ID (assigned to all new Copilot Studio agents since July 2026), and the IETF drafts for OAuth on-behalf-of delegation and transaction tokens that carry separate actor (agent) and principal (initiating human) claims; A2A v1.0 signed agent cards provide the equivalent for agent-to-agent interactions. Prefer identities that keep the delegating human visible in every token so that actions remain attributable.

**Enforced in:** infrastructure · **Owner:** platform · **Phase:** build, operate, retire

**Evidence that it is in place:** The identity provider's list of agent service accounts or workload identities, showing one per agent instance and no key shared between two.

**Test that it works:** Revoke one agent's credential and confirm only that agent loses access, and that the audit log attributes its earlier actions to it alone.

**References:** <https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/identity-overview.html> · <https://learn.microsoft.com/en-us/entra/id-governance/agent-id-governance-overview> · <https://datatracker.ietf.org/doc/html/draft-oauth-transaction-tokens-for-agents-04> · <https://www.hashicorp.com/en/blog/spiffe-securing-the-identity-of-agentic-ai-and-non-human-actors>

**Crosswalks:** CSA Addendum 2.6; IMDA MGF 2.1.2; OWASP ASI ASI03; Five Eyes guidance DS3, AA1

### CTRL-0031 · Use only MCP servers that validate token provenance and prohibit unauthorised token passthrough

**Level 1 · Standard** · **Mitigates:** [RISK-064](#RISK-064)

Token passthrough is an anti-pattern where MCP servers accept tokens from clients without validating they were properly issued to the server, enabling malicious actors to use the server as a proxy for data exfiltration with stolen tokens. Verify that MCP servers validate the provenance of all tokens they receive, ensuring tokens are intended for that specific server by checking audience claims and preventing tokens from being blindly forwarded to third-party services. Reject MCP servers that implement token passthrough patterns, as they compromise incident investigation, access controls, and auditing capabilities by obscuring the true source of requests. Since the 2026-07-28 specification, servers must validate the issuer of tokens they receive (RFC 9207) as well as the audience; reject servers that accept tokens from unexpected issuers or forward tokens they cannot prove were issued to them.

**Enforced in:** infrastructure, organisation · **Owner:** security · **Phase:** build, deploy

**Evidence that it is in place:** The MCP server assessment record showing audience and issuer validation tested, alongside the server's token-validation settings.

**Test that it works:** Present the MCP server with a valid token issued for a different audience and one from an unexpected issuer and confirm both are rejected.

**References:** <https://modelcontextprotocol.io/specification/draft/basic/security_best_practices> · <https://blog.modelcontextprotocol.io/posts/2026-07-28/>

**Crosswalks:** CSA Addendum 3.3, 2.6; IMDA MGF 2.1.2; OWASP ASI ASI03; Five Eyes guidance OP5

### CTRL-0032 · Centralise observability data collection in a unified backend system

**Level 0 · Cardinal** · **Mitigates:** [RISK-004](#RISK-004), [RISK-016](#RISK-016), [RISK-017](#RISK-017), [RISK-018](#RISK-018), [RISK-062](#RISK-062)

Distributed observability data across disconnected systems prevents effective analysis of multi-agent workflows, obscuring failure patterns, performance bottlenecks, and security incidents that span multiple agents. Centralise collection of logs, metrics, and traces from all agents into a unified observability backend using standards-compliant protocols (e.g., OpenTelemetry) to enable correlation analysis across the entire agentic system. Configure agents to emit structured telemetry with consistent identifiers (agent IDs, session IDs, request IDs) that enable tracing requests across agent boundaries and reconstructing complete workflow execution paths.

**Enforced in:** infrastructure · **Owner:** platform · **Phase:** build, deploy

**Evidence that it is in place:** The telemetry collector configuration showing every agent exporting logs, metrics and traces to one backend with shared agent, session and request identifiers.

**Test that it works:** Run a task that crosses two agents and confirm a single query on the request identifier returns the full trace from both.

**References:** <https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf> · <https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/> · <https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf>

**Crosswalks:** CSA Addendum 4.3; IMDA MGF 2.3.3; OWASP ASI ASI08; Five Eyes guidance DV6, OP1

### CTRL-0033 · Standardise trace attributes for agent operations using consistent semantic conventions

**Level 1 · Standard** · **Mitigates:** [RISK-017](#RISK-017)

Inconsistent or ad-hoc telemetry labelling prevents effective correlation of agent activities across multi-agent systems, making it difficult to debug failures, analyse performance, or investigate security incidents. Define and enforce standard semantic conventions for trace attributes across all agents, including mandatory fields such as agent identity, tool name, operation type, session identifiers, and correlation IDs. Adopt existing observability standards where available (e.g., OpenTelemetry semantic conventions) to ensure compatibility with industry-standard analysis tools and reduce implementation effort. Document attribute naming conventions, permitted values, and usage guidelines, and implement validation to ensure agents emit telemetry conforming to the standardised schema.

**Enforced in:** harness, infrastructure · **Owner:** platform · **Phase:** design, build

**Evidence that it is in place:** The published trace attribute schema listing mandatory fields and permitted values, and the pipeline check that validates emitted spans against it.

**Test that it works:** Emit a span lacking the agent identity and tool name attributes and confirm the validation check reports it as non-conforming.

**References:** <https://github.com/open-telemetry/semantic-conventions-genai> · <https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf> · <https://coalitionforsecureai.org/securing-the-ai-agent-revolution-a-practical-guide-to-mcp-security>

**Crosswalks:** CSA Addendum 4.3; IMDA MGF 2.3.3; OWASP ASI ASI08; Five Eyes guidance DV6

### CTRL-0034 · Conduct regular reviews of logs and traces to detect emergent issues in deployed agentic systems

**Level 0 · Cardinal** · **Mitigates:** [RISK-018](#RISK-018), [RISK-050](#RISK-050), [RISK-062](#RISK-062)

Automated monitoring may miss subtle patterns, novel failure modes, or emergent behaviours that only become apparent through human analysis of observability data. Establish a regular cadence for manual review of logs, traces, and metrics from production agentic systems, focusing on identifying unusual patterns, unexpected agent interactions, or degrading performance trends that automated alerts might not detect. Assign responsibility for these reviews to teams with deep understanding of expected agent behaviour, empowering them to investigate anomalies and propose system improvements. Document findings from reviews and track identified issues to closure, using insights to refine monitoring rules, update agent implementations, or strengthen security controls based on observed real-world behaviour.

**Enforced in:** organisation · **Owner:** developer · **Phase:** operate

**Evidence that it is in place:** The review records for the last three cycles, each listing the traces sampled, the anomalies found and the tracked issue raised for each.

**Test that it works:** Plant a known anomalous session in the logs before a scheduled review and confirm the review record reports it and raises an issue.

**References:** <https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf> · <https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf> · <https://www.cyber.gov.au/publication/careful-adoption-of-agentic-ai-services>

**Crosswalks:** CSA Addendum 4.3; IMDA MGF 2.3.3; OWASP ASI ASI08; Five Eyes guidance OP1

### CTRL-0035 · Require agents to decompose user goals into explicit sub-goals and validate necessity before proceeding

**Level 2 · Best Practice** · **Mitigates:** [RISK-019](#RISK-019), [RISK-020](#RISK-020)

Agents that pursue goals without decomposition may execute unnecessary, excessive, or unintended actions that waste resources, violate constraints, or create unintended side effects. Configure planning agents to explicitly break down high-level user goals into discrete, verifiable sub-goals before executing any actions, and to validate that each sub-goal is necessary and sufficient for achieving the overall objective. Implement review mechanisms that require agents to justify the necessity of each sub-goal, either through automated reasoning checks or human approval for high-impact plans.

**Enforced in:** prompt, harness · **Owner:** developer · **Phase:** design, build

**Evidence that it is in place:** The planner instructions and plan schema requiring a justification for every sub-goal, with stored plans showing the field populated.

**Test that it works:** Give the agent a goal alongside an unnecessary but tempting side task and confirm the stored plan excludes it before any tool call.

**References:** <https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/> · <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/> · <https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf>

**Crosswalks:** CSA Addendum 2.10; IMDA MGF 2.3.1; OWASP ASI ASI01; Five Eyes guidance DS2, DP5

### CTRL-0036 · Regularly evaluate and test planning behaviour under representative workloads and failure scenarios

**Level 1 · Standard** · **Mitigates:** [RISK-019](#RISK-019)

Planning failures often emerge only under specific conditions, edge cases, or failure modes that may not be apparent during initial development or testing. Establish systematic testing programmes that evaluate agent planning behaviour across representative workloads, including normal scenarios, edge cases, adversarial inputs, and simulated failure conditions such as unavailable resources or degraded services. Document common planning pitfalls identified during testing (e.g., circular reasoning, goal abandonment, excessive retries) and implement targeted mitigations such as improved prompts, reasoning constraints, or circuit breakers. Continuously expand test scenarios based on observed production failures, ensuring the test suite evolves to cover newly discovered planning vulnerabilities.

**Enforced in:** organisation · **Owner:** developer · **Phase:** build, operate

**Evidence that it is in place:** The planning test suite in version control and its dated run reports covering normal workloads, edge cases and simulated tool or service failures.

**Test that it works:** Run the suite with one tool made unavailable and confirm the agent replans or stops within its retry limit instead of looping.

**References:** <https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf> · <https://www.cyber.gov.au/publication/careful-adoption-of-agentic-ai-services> · <https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/>

**Crosswalks:** CSA Addendum 3.2; IMDA MGF 2.3.2; OWASP ASI ASI01; Five Eyes guidance DV2, DV4

### CTRL-0037 · Require planning agents to include explicit safety constraints in all generated plans before execution

**Level 1 · Standard** · **Mitigates:** [RISK-020](#RISK-020)

Plans generated without explicit safety constraints may inadvertently violate security policies, regulatory requirements, or operational boundaries, leading to dangerous or non-compliant agent behaviour. Configure planning agents to incorporate safety constraints and domain-specific restrictions directly into plan representations, making safety requirements explicit and verifiable rather than implicit assumptions. Examples of planning-level safety constraints include limiting plan complexity (maximum number of steps or tools), requiring verification steps before irreversible actions, prohibiting plans that access certain data categories or environments, mandating human review checkpoints for high-risk operations, and including rollback or recovery procedures for plans involving state changes.

**Enforced in:** harness, prompt · **Owner:** developer · **Phase:** design, build

**Evidence that it is in place:** The plan schema with mandatory fields for step limit, verification before irreversible steps and rollback, and the validator that rejects plans without them.

**Test that it works:** Submit a plan that exceeds the step limit and has no verification before an irreversible step and confirm the executor refuses to run it.

**References:** <https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/> · <https://www.cyber.gov.au/publication/careful-adoption-of-agentic-ai-services> · <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/>

**Crosswalks:** CSA Addendum 2.7, 2.10; IMDA MGF 2.1.2; OWASP ASI ASI01, ASI10; Five Eyes guidance DP5, DS2

### CTRL-0038 · Conduct safety verification with domain-relevant stress tests and adversarial scenarios before deployment and on a regular cadence afterwards

**Level 0 · Cardinal** · **Mitigates:** [RISK-002](#RISK-002), [RISK-003](#RISK-003), [RISK-020](#RISK-020), [RISK-050](#RISK-050), [RISK-057](#RISK-057), [RISK-061](#RISK-061), [RISK-067](#RISK-067)

Deploying agents without rigorous safety testing risks exposing users to harmful behaviours, security vulnerabilities, or compliance violations that only emerge under adversarial or edge-case conditions. Establish comprehensive pre-deployment testing that evaluates agent safety across domain-specific stress scenarios, including adversarial inputs designed to trigger unsafe behaviour, edge cases that challenge safety boundaries, and failure modes that test resilience under degraded conditions. Design test scenarios based on known risks in your domain (e.g., financial fraud attempts for banking agents, medical misinformation for healthcare agents, data exfiltration for enterprise assistants) and establish clear pass/fail criteria that must be met before deployment. Document test results, identified vulnerabilities, and implemented mitigations for future reference and regular review. Repeat the exercise on a fixed cadence and whenever the model, tools, or capabilities change - attacks evolve faster than deployments. Use established agent security and safety benchmarks (for example AgentDojo, Agent Security Bench, and AgentHarm) as a baseline and add scenarios drawn from your own incidents and from published ones.

**Enforced in:** organisation · **Owner:** developer · **Phase:** build, deploy, operate

**Evidence that it is in place:** The dated safety test report listing domain stress scenarios, pass criteria, results, findings and mitigations, with a rerun after each model or tool change.

**Test that it works:** Run AgentDojo, AgentHarm and the system's own domain scenarios against the release candidate and confirm the results meet the recorded pass criteria.

**References:** <https://arxiv.org/abs/2406.13352> · <https://arxiv.org/abs/2410.02644> · <https://arxiv.org/abs/2410.09024>

**Crosswalks:** CSA Addendum 3.2; IMDA MGF 2.3.2; OWASP ASI ASI01, ASI10; Five Eyes guidance DV4, DV2, OP1

### CTRL-0039 · Ensure each agent publishes standardised, machine-readable capability descriptors accessible to other agents

**Level 1 · Standard** · **Mitigates:** [RISK-020](#RISK-020), [RISK-053](#RISK-053)

Without standardised capability descriptors, agents cannot reliably discover what other agents can do, leading to misrouted requests, capability mismatches, or failed inter-agent collaborations. Implement machine-readable capability descriptions for each agent using standardised formats such as A2A Agent Cards that declare available skills, required inputs, output formats, and operational constraints. Publish capability descriptors through discoverable endpoints (e.g., well-known URIs at `https://{domain}/.well-known/agent-card.json`) or centralised agent registries that other agents can query to determine if a target agent can fulfil specific requests. Maintain capability descriptors in sync with actual agent implementations, updating descriptors whenever agent capabilities change to prevent stale metadata from causing integration failures.

**Enforced in:** harness · **Owner:** developer · **Phase:** build, deploy

**Evidence that it is in place:** Each agent's card at its well-known address or registry entry, and the pipeline check comparing declared skills with the deployed code.

**Test that it works:** Fetch each agent card and call every declared skill with the stated inputs, confirming each responds in the declared output format.

**References:** <https://a2a-protocol.org/latest/topics/agent-discovery/>

**Crosswalks:** CSA Addendum 2.4, 3.4; IMDA MGF 2.3.1; OWASP ASI ASI07; Five Eyes guidance DS3, DV7

### CTRL-0040 · Limit the scope of agent actions through predefined thresholds and baselines

**Level 0 · Cardinal** · **Mitigates:** [RISK-014](#RISK-014), [RISK-021](#RISK-021), [RISK-049](#RISK-049), [RISK-053](#RISK-053), [RISK-057](#RISK-057)

Without action limits, agents may bypass controls by delegating excessive tasks, consuming unlimited resources, or spreading malicious activities across multiple operations to evade detection. Define quantitative thresholds that constrain agent behaviour, such as maximum number of tool calls per session, maximum number of agents that can be delegated to, maximum cost or resource consumption, or maximum data volume accessed. Implement runtime monitoring that tracks agent activity against these thresholds and halts execution when limits are exceeded. Examples include limiting an agent to 50 API calls per task or restricting delegation to no more than 3 sub-agents.

**Enforced in:** harness · **Owner:** developer · **Phase:** design, build, operate

**Evidence that it is in place:** The runtime limits file giving maximum tool calls, delegated agents, spend and data volume per task, with log entries for halted runs.

**Test that it works:** Start a task that needs more tool calls than the configured maximum and confirm the run halts at the limit and records the reason.

**References:** <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/> · <https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/> · <https://genai.owasp.org/llmrisk/llm102025-unbounded-consumption/>

**Crosswalks:** CSA Addendum 2.7, 3.1; IMDA MGF 2.1.2; OWASP ASI ASI02, ASI08; Five Eyes guidance OP4, DP5

### CTRL-0041 · Provide comprehensive descriptions for each tool including intended use, required inputs, and potential outputs

**Level 0 · Cardinal** · **Mitigates:** [RISK-022](#RISK-022), [RISK-023](#RISK-023), [RISK-038](#RISK-038)

Incomplete or ambiguous tool descriptions lead agents to misunderstand tool capabilities, misuse tools for unintended purposes, or select inappropriate tools for tasks, resulting in failures or unsafe behaviour. Document each tool with clear, comprehensive descriptions that specify the tool's intended purpose, required input parameters with data types and constraints, expected outputs and formats, and any preconditions or side effects. Include usage examples and common failure scenarios to guide agent decision-making and prevent misuse. Ensure tool descriptions are accurate, up-to-date, and written in language that LLMs can reliably interpret, avoiding ambiguity that might lead to incorrect tool selection or invocation.

**Enforced in:** prompt · **Owner:** developer · **Phase:** build, operate

**Evidence that it is in place:** The tool definitions in version control, each stating purpose, typed parameters with constraints, output format, side effects and a usage example.

**Test that it works:** Run a tool-selection evaluation over tasks with a known correct tool and confirm the agent picks it with valid arguments at the documented rate.

**References:** <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/> · <https://modelcontextprotocol.io/specification/2025-06-18/server/tools> · <https://www.anthropic.com/engineering/writing-tools-for-agents>

**Crosswalks:** CSA Addendum 2.4; IMDA MGF 2.3.1; OWASP ASI ASI02; Five Eyes guidance DV7, OP2

### CTRL-0042 · Require explicit human confirmation before executing high-impact or irreversible tool actions

**Level 1 · Standard** · **Mitigates:** [RISK-001](#RISK-001), [RISK-002](#RISK-002), [RISK-003](#RISK-003), [RISK-019](#RISK-019), [RISK-020](#RISK-020), [RISK-023](#RISK-023), [RISK-052](#RISK-052), [RISK-065](#RISK-065)  
**Level 0 · Cardinal when a capability is used to act alone and has effects that are irreversible and external.**

Agents may incorrectly select or misuse high-impact tools, leading to irreversible damage such as data deletion, unauthorised financial transactions, or unintended system modifications. Implement mandatory human-in-the-loop approval workflows for tools that perform high-impact or irreversible actions, including sending external communications, executing financial transactions, deleting or modifying critical data, and making privileged configuration changes. Configure approval interfaces to clearly display the tool being invoked, the parameters being passed, and the expected outcome, enabling informed human decision-making. Ensure approval mechanisms cannot be bypassed by agents and maintain audit logs of all approval decisions, including who approved what action and when. Approval steps decay under volume: in one large deployment users approved about 93% of permission prompts. Pair this control with CTRL-0094 - measure approval and override rates, route routine actions to automated screening, and reserve human approval for genuinely uncertain or high-impact actions so that the approvals that remain are real decisions.

**Enforced in:** harness, organisation · **Owner:** developer · **Phase:** design, build, operate

**Evidence that it is in place:** The tool registry marking each irreversible tool as confirmation-required, and the audit log recording who confirmed which tool call, with parameters and time.

**Test that it works:** Invoke a tool marked irreversible through the tool layer without a confirmation record and confirm the call is refused and logged.

**References:** <https://www.anthropic.com/engineering/how-we-contain-claude>

**Crosswalks:** CSA Addendum 4.4; IMDA MGF 2.2.2; OWASP ASI ASI02, ASI09; Five Eyes guidance DS2, OP3

### CTRL-0043 · Log all tool selection decisions and invocations with comprehensive metadata

**Level 1 · Standard** · **Mitigates:** [RISK-023](#RISK-023)  
**Level 0 · Cardinal when a capability is used to act alone.**

Without comprehensive tool invocation logs, diagnosing incorrect tool selection or misuse becomes extremely difficult, preventing effective debugging and post-incident analysis. Implement detailed logging for all tool selection decisions and invocations, capturing the tool name, input arguments, caller identity, authorisation outcome, timestamp, and resulting outputs or side effects. Structure logs to enable correlation between tool selection reasoning and actual outcomes, allowing investigation of why particular tools were chosen and whether they produced expected results.

**Enforced in:** harness, infrastructure · **Owner:** developer · **Phase:** build, operate

**Evidence that it is in place:** A log query for one session returning each tool call with tool name, arguments, caller identity, authorisation outcome, timestamp and result.

**Test that it works:** Trigger one permitted and one denied tool call and confirm both appear in the log with the correct authorisation outcome and the selection reasoning.

**References:** <https://www.cyber.gov.au/publication/careful-adoption-of-agentic-ai-services> · <https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/> · <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/>

**Crosswalks:** CSA Addendum 4.3; IMDA MGF 2.3.3; OWASP ASI ASI02; Five Eyes guidance DV7, OP1

### CTRL-0044 · Implement output safety guardrails to detect and prevent generation of undesirable content

**Level 1 · Standard** · **Mitigates:** [RISK-024](#RISK-024), [RISK-067](#RISK-067)

Agents may generate toxic, hateful, sexual, or otherwise inappropriate content that causes harm to users, violates organisational standards, or creates regulatory compliance issues. Deploy output safety guardrails that scan all agent-generated content before delivery to users, detecting categories of undesirable content such as hate speech, sexually explicit material, violent content, or self-harm promotion. Use content moderation APIs, classifiers, or LLM-based safety filters to evaluate outputs against defined safety policies, blocking or flagging content that violates established boundaries. Configure appropriate responses when unsafe content is detected, such as refusing to generate the output, requesting reformulation, or escalating to human review for edge cases.

**Enforced in:** model, harness · **Owner:** developer · **Phase:** build, operate

**Evidence that it is in place:** The output guardrail configuration naming the moderation classifier, the blocked content categories and thresholds, with a log of blocked responses.

**Test that it works:** Run garak or promptfoo harmful-content probes and confirm hateful, sexual, violent and self-harm outputs are blocked before delivery at the documented rate.

**References:** <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/> · <https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf> · <https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/>

**Crosswalks:** CSA Addendum 4.2; IMDA MGF 2.3.1; Five Eyes guidance DP5

### CTRL-0045 · Implement input guardrails to detect and decline requests for specialised domain advice

**Level 1 · Standard** · **Mitigates:** [RISK-025](#RISK-025)

Agents generating unqualified advice in specialised domains such as medical, financial, or legal matters may cause users to act on incorrect or inappropriate information, leading to serious harm or adverse outcomes. Deploy input guardrails that detect when user requests fall within specialised domains requiring professional expertise, such as medical diagnosis, financial investment advice, or legal counsel. Configure the system to decline these requests with appropriate messaging that explains why the agent cannot provide such advice and suggests consulting qualified professionals.

**Enforced in:** model, harness · **Owner:** developer · **Phase:** build, operate

**Evidence that it is in place:** The input guardrail configuration listing the medical, legal and financial advice categories, the detector used and the referral message returned.

**Test that it works:** Send labelled requests for a diagnosis, an investment recommendation and legal counsel among benign controls and confirm only the advice requests are declined.

**References:** <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/> · <https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf> · <https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/>

**Crosswalks:** CSA Addendum 4.1; IMDA MGF 2.3.1; Five Eyes guidance DP5

### CTRL-0046 · Implement input guardrails to detect and decline requests for controversial content that violates organisational policies

**Level 1 · Standard** · **Mitigates:** [RISK-026](#RISK-026)

Agents generating controversial or sensitive content such as political commentary or statements about competitors may create reputational damage, legal liability, or compliance violations for the organisation. Deploy input guardrails that detect requests for content on topics deemed controversial or sensitive according to organisational policies, such as political positions, religious commentary, competitive disparagement, or other restricted subjects. Define clear content policies that specify which topics or viewpoints the agent should avoid, and configure detection mechanisms to identify requests that would violate these boundaries. When controversial requests are detected, decline with messaging that explains the agent's content limitations whilst maintaining a respectful tone towards the user.

**Enforced in:** model, harness · **Owner:** developer · **Phase:** build, operate

**Evidence that it is in place:** The organisation's restricted-topics policy and the guardrail configuration mapping each topic to a detection rule and refusal message.

**Test that it works:** Ask for a political endorsement and a disparaging comparison with a named competitor and confirm both are declined courteously while neutral factual questions pass.

**References:** <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/> · <https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf> · <https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/>

**Crosswalks:** CSA Addendum 4.1; IMDA MGF 2.3.1; Five Eyes guidance DP5

### CTRL-0047 · Implement output guardrails to detect and redact personally identifiable information

**Level 0 · Cardinal** · **Mitigates:** [RISK-011](#RISK-011), [RISK-027](#RISK-027), [RISK-037](#RISK-037), [RISK-043](#RISK-043), [RISK-066](#RISK-066)

Agents may reproduce personally identifiable information from training data, memory, or prior interactions in their outputs, violating privacy obligations, exposing individuals to harm, or breaching data protection requirements such as GDPR or PDPA. Deploy output guardrails that scan all agent-generated content for PII categories including names, email addresses, phone numbers, identification numbers, financial account details, and other sensitive personal data before delivery to users. Use PII detection tools, pattern matching, or named entity recognition models to identify and redact or block outputs containing PII. Configure appropriate handling based on context — some PII may be acceptable if it belongs to the current user, whilst PII belonging to other individuals should be strictly prevented from disclosure.

**Enforced in:** harness, model · **Owner:** developer · **Phase:** build, operate

**Evidence that it is in place:** The output filter configuration listing the personal data types detected and the action for each, with redaction counts in the guardrail log.

**Test that it works:** Prompt the agent to repeat a seeded record holding another person's identity number, phone number and email and confirm all three arrive redacted.

**References:** <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/> · <https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/> · <https://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html>

**Crosswalks:** CSA Addendum 4.2; IMDA MGF 2.3.1; Five Eyes guidance DV5, DP5

### CTRL-0048 · Implement methods to reduce hallucination rates in agent outputs

**Level 2 · Best Practice** · **Mitigates:** [RISK-028](#RISK-028)

Agents may generate inaccurate, fabricated, or unsupported information whilst presenting it as factual, misleading users and causing them to make incorrect decisions or lose trust in the system. Implement hallucination reduction techniques such as retrieval-augmented generation (RAG) that grounds agent responses in verified source documents, or citation requirements that force agents to reference specific sources for factual claims. Configure agents to acknowledge uncertainty when information cannot be verified rather than generating plausible-sounding but false content.

**Enforced in:** harness, prompt · **Owner:** developer · **Phase:** design, build

**Evidence that it is in place:** The retrieval pipeline configuration, the prompt requiring a cited source for each factual claim, and a groundedness evaluation report with the unsupported-claim rate.

**Test that it works:** Ask questions whose answers are absent from the source corpus and confirm the agent says it cannot verify them.

**References:** <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/> · <https://www.cyber.gov.au/publication/careful-adoption-of-agentic-ai-services> · <https://genai.owasp.org/llmrisk/llm092025-misinformation/>

**Crosswalks:** CSA Addendum 2.11; IMDA MGF 2.3.1; OWASP ASI ASI08; Five Eyes guidance DS1, DV6

### CTRL-0049 · Implement UI/UX cues to communicate the risk of hallucination to users

**Level 0 · Cardinal** · **Mitigates:** [RISK-028](#RISK-028), [RISK-052](#RISK-052)

Users may treat agent-generated content as completely reliable without recognising that LLMs can produce inaccurate or fabricated information presented as fact. Implement clear UI/UX indicators that remind users of hallucination risks, such as disclaimers on agent responses, visual cues distinguishing generated content from verified information, or warnings when agents make factual claims without citations. Consider contextual warnings that appear when agents discuss topics particularly prone to hallucination, such as recent events beyond the model's training data or highly specialised technical subjects.

**Enforced in:** harness · **Owner:** developer · **Phase:** design, build

**Evidence that it is in place:** The front-end code or screenshots of the response view showing the accuracy disclaimer and the visual marking of uncited generated content.

**Test that it works:** Open the production interface, ask a factual question and confirm the disclaimer is visible beside the answer without scrolling or clicking.

**References:** <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/> · <https://genai.owasp.org/llmrisk/llm092025-misinformation/> · <https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/>

**Crosswalks:** CSA Addendum 2.11; IMDA MGF 2.4.2; OWASP ASI ASI09

### CTRL-0050 · Implement features enabling users to verify generated answers against source content

**Level 1 · Standard** · **Mitigates:** [RISK-028](#RISK-028)

Without verification mechanisms, users cannot easily check whether agent-generated information is accurate or fabricated, increasing reliance on potentially hallucinated content. Provide built-in features that enable users to verify agent responses against original source materials, such as inline citations linking to specific documents or passages, source attribution showing which materials informed the response, or side-by-side views displaying retrieved content alongside generated summaries. Design verification features to minimise friction whilst maintaining effectiveness — users should be able to check sources with minimal effort rather than requiring extensive navigation or manual searching. For example, automatically highlight passages in source documents that support specific claims made by the agent, enabling rapid verification of factual statements.

**Enforced in:** harness · **Owner:** developer · **Phase:** design, build

**Evidence that it is in place:** The response payload schema carrying source identifiers and passage offsets, and the interface code that renders them as inline citations.

**Test that it works:** Ask a question answered by a known document and confirm each citation opens that document at the passage supporting the claim.

**References:** <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/> · <https://www.cyber.gov.au/publication/careful-adoption-of-agentic-ai-services> · <https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf>

**Crosswalks:** CSA Addendum 2.11; IMDA MGF 2.4.2; OWASP ASI ASI09; Five Eyes guidance DV6

### CTRL-0051 · Implement input guardrails to detect and decline requests to generate copyrighted content

**Level 1 · Standard** · **Mitigates:** [RISK-029](#RISK-029)

Agents may generate content that reproduces or closely resembles copyrighted material without authorisation, exposing the organisation to intellectual property infringement claims, legal liability, or licensing violations. Deploy input guardrails that detect requests asking the agent to reproduce copyrighted works such as song lyrics, book passages, proprietary code, or other protected content. Configure the system to decline these requests with appropriate messaging that explains copyright limitations and suggests legal alternatives such as summarisation, licensed access, or original creation. Note that copyright detection at the input stage may not catch all violations, as users might phrase requests in ways that obscure copyrighted content generation — tools such as Patronus AI's CopyrightCatcher can provide output-level copyright detection to complement input filtering.

**Enforced in:** model, harness · **Owner:** developer · **Phase:** build, operate

**Evidence that it is in place:** The guardrail configuration containing the copyright-reproduction category, its detector and its refusal message, with a log of declined requests.

**Test that it works:** Request the full lyrics of a current chart song and a chapter of an in-copyright novel and confirm both are declined with a lawful alternative offered.

**References:** <https://www.patronus.ai/blog/introducing-copyright-catcher>

**Crosswalks:** CSA Addendum 4.1; IMDA MGF 2.3.1; Five Eyes guidance DP5

### CTRL-0052 · Declare upfront that communications are generated by an AI system

**Level 2 · Best Practice** · **Mitigates:** [RISK-030](#RISK-030), [RISK-067](#RISK-067)

Recipients misled about whether communications were generated by AI or authored by humans may form incorrect assumptions about accountability, intent, or authority, leading to trust issues or legal complications. Implement clear, prominent disclosures at the beginning of AI-generated communications stating that content was created by an automated system, using unambiguous language such as "This message was generated by an AI assistant" rather than vague phrases that might confuse recipients.

**Enforced in:** harness · **Owner:** developer · **Phase:** design, build

**Evidence that it is in place:** The outbound message template or sending code that inserts the AI-generated disclosure as the opening line of every agent communication.

**Test that it works:** Have the agent send a message after instructing it to omit any disclosure and confirm the delivered message still opens with the AI-generated statement.

**References:** <https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf> · <https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50> · <https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf>

**Crosswalks:** IMDA MGF 2.4.2; OWASP ASI ASI09

### CTRL-0053 · Require human approval for communications on sensitive matters

**Level 0 · Cardinal** · **Mitigates:** [RISK-031](#RISK-031)

Agents making unsupported commitments, inaccurate assurances, or statements that exceed organisational capabilities in official communications may expose the organisation to reputational damage, legal liability, or unmet expectations. Implement mandatory human review and approval workflows for communications on sensitive matters including contractual commitments, financial promises, policy statements, regulatory responses, or public-facing announcements. Define clear criteria for what constitutes "sensitive matters" requiring approval, ensuring consistent application across the organisation. Enforce the approval in the sending path, so that the agent cannot dispatch a message in a sensitive category until it is approved; an instruction to the agent to seek approval is not enough. Pair this control with CTRL-0094 so that approvals remain real decisions.

**Enforced in:** harness, organisation · **Owner:** developer · **Phase:** design, build, operate

**Evidence that it is in place:** The sensitive-category criteria, the sending-path rule that holds messages in those categories, and approval records naming approver, message and time.

**Test that it works:** Have the agent draft a message containing a contractual commitment and confirm it remains unsent until an authorised approver releases it.

**References:** <https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf> · <https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/> · <https://genai.owasp.org/llmrisk/llm062025-excessive-agency/>

**Crosswalks:** CSA Addendum 4.4; IMDA MGF 2.2.2; OWASP ASI ASI09; Five Eyes guidance OP3, DS2

### CTRL-0054 · Limit agent communications to standard processes with predefined templates

**Level 1 · Standard** · **Mitigates:** [RISK-031](#RISK-031)

Agents generating free-form communications may inadvertently make inaccurate promises or statements that exceed organisational authority or capabilities, creating legal and reputational risks. Restrict agent communications to standard, well-defined processes where approved communication templates exist, such as appointment confirmations, order status updates, or routine customer service responses. Design templates to include appropriate disclaimers, limit commitments to verified capabilities, and avoid language that could create unintended obligations. Review and approve all communication templates before deployment, ensuring they accurately reflect organisational policies and cannot be misinterpreted as making unauthorised commitments.

**Enforced in:** harness, organisation · **Owner:** business · **Phase:** design, build

**Evidence that it is in place:** The library of approved communication templates with sign-off records, and the sending tool's configuration accepting only a template identifier and field values.

**Test that it works:** Ask the agent to send a free-form message promising a refund and confirm the sending tool rejects anything that is not an approved template.

**References:** <https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf> · <https://arxiv.org/abs/2506.08837>

**Crosswalks:** CSA Addendum 2.7; IMDA MGF 2.1.2; OWASP ASI ASI01; Five Eyes guidance DP5

### CTRL-0055 · Provide alternative channels for users to clarify communications or provide feedback

**Level 1 · Standard** · **Mitigates:** [RISK-031](#RISK-031)

When agents make inaccurate statements or commitments in communications, recipients need accessible mechanisms to seek clarification, report concerns, or correct misunderstandings before problems escalate. Establish clear alternative channels for recipients to contact human representatives when they have questions about AI-generated communications, such as dedicated email addresses, phone numbers, or contact forms prominently displayed in agent communications.

**Enforced in:** organisation, harness · **Owner:** business · **Phase:** design, operate

**Evidence that it is in place:** The footer of the agent's message templates showing a staffed contact address or number, and the queue where enquiries from recipients are logged.

**Test that it works:** Reply to an agent-sent message through the published contact channel and confirm a human responds within the stated service time.

**References:** <https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf> · <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/> · <https://www.pdpc.gov.sg/-/media/files/pdpc/pdf-files/resource-for-organisation/ai/sgmodelaigovframework2.pdf>

**Crosswalks:** CSA Addendum 4.5; IMDA MGF 2.4.2; OWASP ASI ASI09

### CTRL-0056 · Require explicit human confirmation before committing any business transaction outside limits that an accountable human has pre-authorised

**Level 0 · Cardinal** · **Mitigates:** [RISK-032](#RISK-032)

Agents executing business transactions without proper authorisation may create unintended financial obligations, contractual commitments, or operational liabilities. Have an accountable human set the limits within which the agent may transact without confirmation — for example amounts, counterparties, transaction types, and frequency — and enforce those limits outside the agent, such as in the transaction controller (CTRL-0058) or payment gateway. Pause any transaction outside the limits, and every transaction where no limits have been set, immediately before it is initiated, presenting the transaction type, amount, counterparty, and consequences for review by the user on whose behalf the agent acts or by a designated approver. Require active consent, using an explicit "confirm" action rather than a dismissible notification or opt-out. Ensure confirmation cannot be bypassed by agents, and keep audit logs of all approvals, including timestamp, approver identity, and transaction details. Pair this control with CTRL-0094 so that confirmations remain real decisions.

**Enforced in:** harness, organisation · **Owner:** developer · **Phase:** design, build, operate

**Evidence that it is in place:** The transaction limits signed by the accountable owner, their configuration in the transaction controller, and the confirmation log with approver identity and transaction details.

**Test that it works:** Propose a transaction above the pre-authorised amount and confirm the controller holds it until the user actively confirms the amount and counterparty.

**References:** <https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf> · <https://ap2-protocol.org/ap2/specification/> · <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/>

**Crosswalks:** CSA Addendum 4.4; IMDA MGF 2.2.2; OWASP ASI ASI09, ASI02; Five Eyes guidance OP3, DS2

### CTRL-0057 · Require out-of-band confirmation when transaction risk signals are elevated

**Level 2 · Best Practice** · **Mitigates:** [RISK-032](#RISK-032)

Transactions exhibiting elevated risk indicators may represent unauthorised or fraudulent activity requiring additional verification beyond standard confirmation. Implement out-of-band confirmation (e.g., SMS codes, email verification, authentication app approvals) when transactions exhibit risk signals such as unusual payees, amounts exceeding typical patterns, rapid transaction sequences, or first-time recipients.

**Enforced in:** harness · **Owner:** developer · **Phase:** build, operate

**Evidence that it is in place:** The transaction controller's step-up rules listing the risk signals that trigger out-of-band confirmation and the channel used for each.

**Test that it works:** Propose a payment to a first-time payee at an unusual amount and confirm it stays pending until a code sent to the user's registered device is entered.

**References:** <https://cheatsheetseries.owasp.org/cheatsheets/Transaction_Authorization_Cheat_Sheet.html> · <https://www.mas.gov.sg/-/media/MAS/Regulations-and-Financial-Stability/Regulatory-and-Supervisory-Framework/Risk-Management/TRM-Guidelines-18-January-2021.pdf> · <https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/>

**Crosswalks:** CSA Addendum 4.4; IMDA MGF 2.2.2; OWASP ASI ASI09; Five Eyes guidance OP3

### CTRL-0058 · Restrict agents to proposing transactions whilst using a separate transaction controller for execution

**Level 0 · Cardinal** · **Mitigates:** [RISK-032](#RISK-032), [RISK-033](#RISK-033)

Allowing agents direct access to transaction credentials creates risk of credential leakage through prompt injection, logging, or model outputs. Implement architectural separation where agents propose transactions but a dedicated non-LLM transaction controller handles authentication, authorisation, and execution. Ensure agents never receive or handle credentials directly, passing only transaction proposals through secure interfaces.

**Enforced in:** harness, infrastructure · **Owner:** developer · **Phase:** design, build

**Evidence that it is in place:** The architecture diagram and secrets manager access policy showing payment credentials readable only by the non-LLM transaction controller, never by the agent runtime.

**Test that it works:** From the agent runtime, try to read the payment credential and to call the payment API directly and confirm both attempts fail.

**References:** <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/> · <https://www.ncsc.gov.uk/blogs/managing-the-cyber-risk-of-agentic-ai> · <https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf>

**Crosswalks:** CSA Addendum 2.9; IMDA MGF 2.1.2; OWASP ASI ASI03; Five Eyes guidance DV7, DS4

### CTRL-0059 · Apply fraud detection models or heuristics to agent-proposed transactions

**Level 2 · Best Practice** · **Mitigates:** [RISK-032](#RISK-032)

Compromised or manipulated agents may propose fraudulent transactions that bypass standard user confirmation by appearing legitimate to users but serving malicious purposes. Implement fraud detection systems that analyse agent-proposed transactions for suspicious patterns such as unusual amounts, unfamiliar recipients, rapid transaction sequences, or deviations from historical behaviour. Configure fraud detection to operate independently of the agent, using rule-based heuristics or machine learning models trained on legitimate and fraudulent transaction patterns.

**Enforced in:** harness, model · **Owner:** security · **Phase:** build, operate

**Evidence that it is in place:** The fraud rule set or model version applied to agent-proposed transactions, with a log of scored transactions and those held.

**Test that it works:** Submit a rapid series of proposals to an unfamiliar recipient at unusual amounts and confirm they are scored as suspicious and held before execution.

**References:** <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/> · <https://www.mas.gov.sg/-/media/MAS/Regulations-and-Financial-Stability/Regulatory-and-Supervisory-Framework/Risk-Management/TRM-Guidelines-18-January-2021.pdf>

**Crosswalks:** CSA Addendum 4.2; IMDA MGF 2.3.3; OWASP ASI ASI02; Five Eyes guidance DP5, OP1

### CTRL-0060 · Implement escape filtering before incorporating web content into prompts

**Level 1 · Standard** · **Mitigates:** [RISK-034](#RISK-034), [RISK-047](#RISK-047)

Malicious websites may embed hidden instructions or manipulative prompts in their content designed to hijack agent behaviour when retrieved and processed. Implement escape filtering that sanitises web content before incorporating it into agent prompts, removing or neutralising potential injection attacks such as hidden instructions, delimiter manipulation attempts, or prompt override commands.

**Enforced in:** harness · **Owner:** developer · **Phase:** build

**Evidence that it is in place:** The web-content sanitiser in the retrieval code and its unit tests covering hidden text, delimiter strings and override phrases.

**Test that it works:** Retrieve a test page containing hidden-text instructions and the prompt's own delimiter tokens and confirm both are stripped or escaped in the logged prompt.

**References:** <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/> · <https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/> · <https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html>

**Crosswalks:** CSA Addendum 4.1; IMDA MGF 2.3.1; OWASP ASI ASI01; Five Eyes guidance DV3

### CTRL-0061 · Use structured retrieval APIs for web searches rather than web scraping

**Level 1 · Standard** · **Mitigates:** [RISK-034](#RISK-034)

Web scraping exposes agents to arbitrary web content including malicious HTML, scripts, and embedded instructions that may be crafted to inject prompts or manipulate agent behaviour. Use structured retrieval APIs such as search engine APIs, knowledge bases, or curated data sources that provide pre-processed, sanitised content rather than raw web pages. Structured APIs typically return controlled formats (JSON, XML) containing extracted information without rendering full web content, reducing exposure to injection vectors embedded in HTML, CSS, or JavaScript.

**Enforced in:** harness · **Owner:** developer · **Phase:** design, build

**Evidence that it is in place:** The tool manifest showing web search bound to a named search API returning structured results, with no raw page-fetch tool registered.

**Test that it works:** Run a web search task and confirm the logged tool result holds structured fields from the search API and no raw HTML or scripts.

**References:** <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/> · <https://cheatsheetseries.owasp.org/cheatsheets/MCP_Security_Cheat_Sheet.html>

**Crosswalks:** CSA Addendum 2.1; IMDA MGF 2.1.2; OWASP ASI ASI01

### CTRL-0062 · Implement input guardrails to detect prompt injection and adversarial attacks

**Level 0 · Cardinal** · **Mitigates:** [RISK-034](#RISK-034), [RISK-036](#RISK-036), [RISK-044](#RISK-044), [RISK-047](#RISK-047), [RISK-059](#RISK-059)

Malicious actors may attempt to inject hidden instructions through web content, uploaded files, or external data sources to hijack agent behaviour and bypass intended constraints. Use prompt injection detection tools or classifiers trained to identify adversarial inputs before they reach the agent's context.

**Enforced in:** model, harness · **Owner:** developer · **Phase:** build, operate

**Evidence that it is in place:** The injection detector's configuration naming the classifier, its threshold and the input channels it screens, with a log of flagged inputs.

**Test that it works:** Run garak or PyRIT injection probes through user input, uploaded files and retrieved web content and confirm detections meet the documented rate.

**References:** <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/> · <https://www.cyber.gov.au/publication/careful-adoption-of-agentic-ai-services> · <https://www.frontiermodelforum.org/uploads/2026/06/FMF-Issue-Brief-on-Emerging-Security-Practices-for-AI-Agents.pdf>

**Crosswalks:** CSA Addendum 4.1; IMDA MGF 2.3.1; OWASP ASI ASI01; Five Eyes guidance DV3

### CTRL-0063 · Prioritise search results from verified, high-quality domains

**Level 1 · Standard** · **Mitigates:** [RISK-035](#RISK-035)

Agents retrieving information from unreliable or low-quality websites may present inaccurate, outdated, or biased content to users, leading to misinformed decisions. Configure search and retrieval systems to prioritise results from verified, authoritative sources such as government domains (.gov), educational institutions (.edu), established news organisations, and recognised industry authorities.

**Enforced in:** harness · **Owner:** developer · **Phase:** build, operate

**Evidence that it is in place:** The search tool configuration listing preferred and excluded domains and the ranking rule that applies them.

**Test that it works:** Run a query where a low-quality site outranks an official source in raw results and confirm the agent's retrieved set leads with the official source.

**References:** <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/> · <https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/>

**Crosswalks:** CSA Addendum 2.1; IMDA MGF 2.3.1; OWASP ASI ASI06; Five Eyes guidance DS1

### CTRL-0064 · Limit computer use to accessing only safe and trusted resources

**Level 1 · Standard** · **Mitigates:** [RISK-036](#RISK-036)

Agents with unrestricted computer access may encounter malicious content on untrusted websites, documents, or applications that embed hidden instructions designed to manipulate agent behaviour. Restrict computer use capabilities to accessing only pre-approved, safe resources such as internal applications, trusted websites on allowlists, or sandboxed environments isolated from sensitive systems. Define clear boundaries for what resources agents may access and enforce these restrictions through technical controls such as network filtering, application allowlisting, or containerisation.

**Enforced in:** infrastructure, harness · **Owner:** developer · **Phase:** design, build, deploy

**Evidence that it is in place:** The computer-use environment's site and application allowlist, the proxy or container policy enforcing it, and the blocked-request log.

**Test that it works:** Direct the computer-use agent to a site outside the allowlist and to open an unlisted application and confirm both are blocked and logged.

**References:** <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/> · <https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool> · <https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/>

**Crosswalks:** CSA Addendum 2.7; IMDA MGF 2.1.2; OWASP ASI ASI02; Five Eyes guidance DP6, DP5

### CTRL-0065 · Ensure every agent can be immediately paused or terminated by its operators

**Level 0 · Cardinal** · **Mitigates:** [RISK-014](#RISK-014), [RISK-036](#RISK-036), [RISK-049](#RISK-049), [RISK-051](#RISK-051), [RISK-057](#RISK-057), [RISK-062](#RISK-062)

Agents may begin executing unintended actions - through prompt injection, runaway loops, containment gaps, or goal-directed misbehaviour - that require immediate human intervention. Provide an interruption mechanism for every deployed agent, not only those operating computer interfaces: a pause and terminate control reachable by operators at all times, which halts tool calls and outbound actions immediately, revokes or suspends the agent's credentials, and preserves state and logs for review. Test that the mechanism works under load and cannot be disabled or delayed by the agent itself, and make emergency revocation of a specific tool, credential, or agent possible across all deployments.

**Enforced in:** harness, infrastructure · **Owner:** platform · **Phase:** build, deploy, operate

**Evidence that it is in place:** The operator console's pause and terminate control, its runbook, and drill records showing the time from command to halted tool calls.

**Test that it works:** Trigger the stop control while the agent is mid-task under load and confirm tool calls cease, its credentials are suspended and its state and logs remain.

**References:** <https://www.ncsc.gov.uk/blogs/managing-the-cyber-risk-of-agentic-ai> · <https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf> · <https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/>

**Crosswalks:** CSA Addendum 4.4; IMDA MGF 2.3.3; OWASP ASI ASI10; Five Eyes guidance DS2, DV5

### CTRL-0066 · Ensure "take over" mode is activated when entering sensitive data

**Level 0 · Cardinal** · **Mitigates:** [RISK-037](#RISK-037)

Agents operating computer interfaces may inadvertently view, process, or expose sensitive data such as passwords, API keys, or personally identifiable information displayed on screens or in applications. Implement "take over" mode that pauses agent operation and requires direct human control when sensitive data entry is required, preventing agents from observing or handling credentials and other confidential information.

**Enforced in:** harness · **Owner:** developer · **Phase:** design, build

**Evidence that it is in place:** The computer-use harness rule that detects password, payment and identity fields and hands control to the human, with take-over events logged.

**Test that it works:** Steer the agent to a login page and confirm it pauses for the human to type the password and captures no screenshot or keystrokes meanwhile.

**References:** <https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf> · <https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool>

**Crosswalks:** IMDA MGF 2.3.1; OWASP ASI ASI02; Five Eyes guidance DS2

### CTRL-0067 · Ensure proper documentation of programmatic interfaces for agent use

**Level 0 · Cardinal** · **Mitigates:** [RISK-038](#RISK-038)

Agents interacting with poorly documented or unfamiliar programmatic interfaces may misinterpret interface semantics, invoke operations incorrectly, or produce unintended effects. Provide comprehensive, LLM-readable documentation for all programmatic interfaces agents may interact with, including clear descriptions of available operations, required parameters with data types and constraints, expected responses, and common error conditions.

**Enforced in:** prompt · **Owner:** developer · **Phase:** build

**Evidence that it is in place:** The interface specification supplied to the agent for each API, listing operations, typed parameters, expected responses and error conditions.

**Test that it works:** Set the agent tasks that exercise each documented operation and one error condition and confirm its calls are well formed and errors handled as documented.

**References:** <https://modelcontextprotocol.io/specification/2025-06-18/server/tools> · <https://www.anthropic.com/engineering/writing-tools-for-agents> · <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/>

**Crosswalks:** CSA Addendum 2.4; IMDA MGF 2.3.1; OWASP ASI ASI02; Five Eyes guidance DV7

### CTRL-0068 · Use code linters to screen generated code for bad practices and poor syntax

**Level 1 · Standard** · **Mitigates:** [RISK-039](#RISK-039)

Agents may generate code containing bad practices, anti-patterns, unused variables, or syntax errors that reduce code quality, introduce bugs, or create maintainability issues. Implement automated code linting that analyses all agent-generated code before execution or deployment, using tools such as Pylint, ESLint, or language-specific linters configured with appropriate rule sets. Configure linters to detect common issues including syntax errors, unused variables, deprecated functions, security anti-patterns, and violations of coding standards. Reject code that fails linting checks or present warnings to users for review before proceeding.

**Enforced in:** harness · **Owner:** developer · **Phase:** build

**Evidence that it is in place:** The linter rule set in version control, its hook in the code-execution path, and lint results stored with each generated snippet.

**Test that it works:** Have the agent produce code with a syntax error and an unused variable and confirm the linter rejects it or shows the warnings before execution.

**References:** <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/> · <https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-218.pdf> · <https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/>

**Crosswalks:** CSA Addendum 4.2; IMDA MGF 2.3.1; OWASP ASI ASI05; Five Eyes guidance OP2

### CTRL-0069 · Run agent-generated code only in isolated compute environments with network access blocked by default

**Level 0 · Cardinal** · **Mitigates:** [RISK-039](#RISK-039), [RISK-040](#RISK-040), [RISK-049](#RISK-049), [RISK-056](#RISK-056)

Agent-generated code may contain vulnerabilities, bugs, or malicious logic that could compromise systems, leak data, exfiltrate information, or establish unauthorised network connections. Implement virtual isolation for all agent-generated code execution using containerised environments (e.g., Docker), virtual machines, or dedicated sandboxes that limit access to sensitive resources, networks, and data. Configure default-deny network policies that block all inbound and outbound network connections unless explicitly required and authorised for specific use cases. When network access is necessary, enforce allowlists restricting connections to known-safe endpoints such as internal APIs or approved external services.

**Enforced in:** infrastructure · **Owner:** platform · **Phase:** design, build, deploy

**Evidence that it is in place:** The code-execution sandbox definition showing no host mounts, dropped privileges and a default-deny network policy listing any permitted endpoints.

**Test that it works:** Have the agent run code that opens a connection to an external host and reads a host file path and confirm both fail inside the sandbox.

**References:** <https://www.ncsc.gov.uk/blogs/managing-the-cyber-risk-of-agentic-ai> · <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/> · <https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/>

**Crosswalks:** CSA Addendum 2.9, 2.8; IMDA MGF 2.1.2; OWASP ASI ASI05; Five Eyes guidance DP6, AA1

### CTRL-0070 · Review all agent-generated code before execution

**Level 1 · Standard** · **Mitigates:** [RISK-039](#RISK-039), [RISK-040](#RISK-040), [RISK-056](#RISK-056)

Agent-generated code may contain security vulnerabilities, logic errors, or malicious instructions that could compromise systems if executed without review. Implement mandatory human review workflows for all code generated by agents before execution, including source code, scripts, configuration files, and command sequences. Configure review processes to present code with sufficient context for reviewers to assess safety and correctness, including the agent's reasoning for generating the code and its intended purpose.

**Enforced in:** harness, organisation · **Owner:** developer · **Phase:** build, operate

**Evidence that it is in place:** The execution gate setting that requires reviewer approval per code artefact, and review records giving reviewer, code hash and decision.

**Test that it works:** Have the agent generate a script and try to run it unreviewed, and confirm execution is blocked until a reviewer approves that exact code.

**References:** <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/> · <https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf> · <https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/>

**Crosswalks:** CSA Addendum 4.2, 4.4; IMDA MGF 2.2.2; OWASP ASI ASI05; Five Eyes guidance OP3

### CTRL-0071 · Use static code analysers to detect security vulnerabilities and code quality issues

**Level 0 · Cardinal** · **Mitigates:** [RISK-039](#RISK-039), [RISK-040](#RISK-040)

Agent-generated code may contain security vulnerabilities, code smells, or quality issues that manual review might miss. Deploy static code analysis tools (e.g., Bandit for Python, SonarQube, Semgrep) that automatically scan agent-generated code for security vulnerabilities, coding standard violations, and quality issues before execution. Configure analysers to detect common vulnerability patterns such as SQL injection, command injection, path traversal, insecure cryptography, and hard-coded credentials. Block or flag code that fails security scans, requiring remediation before proceeding with execution or deployment.

**Enforced in:** harness · **Owner:** developer · **Phase:** build, operate

**Evidence that it is in place:** The static analysis rule set and blocking severity in the execution pipeline, with a scan report attached to each generated code artefact.

**Test that it works:** Run CyberSecEval insecure-code prompts through the agent and confirm the analyser flags the vulnerable outputs and blocks their execution.

**References:** <https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/> · <https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf> · <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/>

**Crosswalks:** CSA Addendum 4.2; IMDA MGF 2.3.1; OWASP ASI ASI05; Five Eyes guidance OP2

### CTRL-0072 · Monitor runtime and memory consumption of agent-generated code

**Level 1 · Standard** · **Mitigates:** [RISK-039](#RISK-039), [RISK-040](#RISK-040)

Agent-generated code may contain inefficient implementations, infinite loops, or memory leaks that degrade system performance or exhaust resources. Implement runtime monitoring that tracks execution time, memory consumption, CPU usage, and other resource metrics for all agent-generated code during execution. Configure alerts that trigger when code exceeds predefined resource thresholds, such as maximum execution time, memory limits, or CPU usage, enabling automatic termination of runaway processes.

**Enforced in:** infrastructure, harness · **Owner:** platform · **Phase:** build, operate

**Evidence that it is in place:** The sandbox limits for execution time, memory and CPU, the alert rule attached to them, and records of terminated runs.

**Test that it works:** Run agent-generated code containing an infinite loop and an unbounded memory allocation and confirm each is terminated at its limit and an alert is raised.

**References:** <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/> · <https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/> · <https://genai.owasp.org/llmrisk/llm102025-unbounded-consumption/>

**Crosswalks:** CSA Addendum 3.1; IMDA MGF 2.3.3; OWASP ASI ASI02; Five Eyes guidance OP4

### CTRL-0073 · Create a denylist of commands that agents are not permitted to execute

**Level 0 · Cardinal** · **Mitigates:** [RISK-040](#RISK-040)

Agents may generate code that invokes dangerous or destructive commands capable of compromising systems, deleting data, or establishing unauthorised network connections. Implement command denylists that explicitly prohibit execution of dangerous operations such as system shutdown commands, file deletion utilities, network scanning tools, or privileged system calls. Enforce denylists at the execution layer, preventing blocked commands from running even if agents generate code containing them. Regularly review and update denylists based on observed agent behaviour, emerging security threats, and identified misuse patterns.

**Enforced in:** harness · **Owner:** developer · **Phase:** build, operate

**Evidence that it is in place:** The command denylist file in version control, the execution-layer hook that checks each command against it, and its log of blocked commands.

**Test that it works:** Have the agent attempt a denylisted command, such as a recursive delete, in plain and obfuscated forms and confirm both are blocked.

**References:** <https://www.cyber.gov.au/publication/careful-adoption-of-agentic-ai-services> · <https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/> · <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/>

**Crosswalks:** CSA Addendum 2.7; IMDA MGF 2.1.2; OWASP ASI ASI05; Five Eyes guidance DP5

### CTRL-0074 · Conduct CVE scanning and block execution of code with High or Critical vulnerabilities

**Level 0 · Cardinal** · **Mitigates:** [RISK-040](#RISK-040)

Agent-generated code may inadvertently include dependencies or libraries containing known security vulnerabilities that could be exploited to compromise systems. Implement automated CVE scanning that analyses all dependencies, libraries, and packages used by agent-generated code before execution, checking against vulnerability databases such as the National Vulnerability Database. Configure scanning to block execution when High or Critical severity CVEs are detected, requiring remediation such as dependency updates or vulnerability patches before proceeding.

**Enforced in:** harness · **Owner:** security · **Phase:** build, operate

**Evidence that it is in place:** The dependency scanner configuration with its High and Critical blocking threshold, and scan results recorded for each execution request.

**Test that it works:** Have the agent write code that imports a package version with a known Critical CVE and confirm execution is blocked with the CVE cited.

**References:** <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/> · <https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf> · <https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-218.pdf>

**Crosswalks:** CSA Addendum 4.2; IMDA MGF 2.3.1; OWASP ASI ASI04, ASI05; Five Eyes guidance DV7, AA2

### CTRL-0075 · Do not grant write access to agents unless strictly necessary

**Level 1 · Standard** · **Mitigates:** [RISK-041](#RISK-041)

Agents with unnecessary write access may inadvertently modify, overwrite, or delete critical files or data, leading to data loss, corruption, or operational disruption. Apply the principle of least privilege by granting write access only when explicitly required for the agent's intended functionality, defaulting to read-only access for all other operations. Implement granular access controls that restrict write permissions to specific directories, databases, or resources that the agent legitimately needs to modify. Regularly review agent permissions to ensure write access remains justified and revoke unnecessary permissions as agent responsibilities evolve.

**Enforced in:** infrastructure, harness · **Owner:** developer · **Phase:** design, build, operate

**Evidence that it is in place:** The agent's database grants and storage policies showing read-only access by default, with each write permission scoped to a named resource and justified.

**Test that it works:** Using the agent's credentials, attempt a write to a table or directory outside its listed write scope and confirm it is denied.

**References:** <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/> · <https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf> · <https://genai.owasp.org/llmrisk/llm062025-excessive-agency/>

**Crosswalks:** CSA Addendum 2.8; IMDA MGF 2.1.2; OWASP ASI ASI02; Five Eyes guidance DS3, OP5, AA1

### CTRL-0076 · Require human approval for destructive changes to databases, tables, or files that cannot be readily undone

**Level 0 · Cardinal** · **Mitigates:** [RISK-041](#RISK-041), [RISK-056](#RISK-056)

Destructive operations such as deleting files, dropping database tables, or overwriting critical data can cause irreversible damage if executed without proper authorisation. Require human approval for every destructive operation that cannot be readily undone, including DROP and TRUNCATE statements, DELETE or UPDATE queries that are not narrowly filtered, bulk file deletions, and any deletion or overwrite in a store without versioning, soft-delete, or point-in-time recovery (see CTRL-0077). Changes that can be reverted from version control or soft-delete, such as edits to files in a version-controlled working copy, may proceed without approval. Enforce the approval in the tool or database permission layer rather than by instructing the agent to ask first, because an instruction in the agent's context can be ignored or lost.

**Enforced in:** harness, organisation · **Owner:** developer · **Phase:** design, build, operate

**Evidence that it is in place:** The tool or database permission rules marking DROP, TRUNCATE, unfiltered DELETE or UPDATE and bulk file deletion as approval-required, with approval records.

**Test that it works:** Have the agent issue a DROP TABLE and an unfiltered DELETE in staging and confirm neither runs until a human approves it.

**References:** <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/> · <https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf> · <https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/>

**Crosswalks:** CSA Addendum 4.4; IMDA MGF 2.2.2; OWASP ASI ASI02, ASI09; Five Eyes guidance OP3, DS2

### CTRL-0077 · Enable versioning or soft-delete for managed object stores to allow recovery from accidental modifications

**Level 0 · Cardinal** · **Mitigates:** [RISK-041](#RISK-041), [RISK-056](#RISK-056)

Even with access controls and approval workflows, agents may occasionally execute unintended destructive operations due to misunderstandings, bugs, or edge cases. Implement versioning or soft-delete mechanisms for file stores, object storage, and databases that preserve previous versions of data when modifications occur, enabling recovery from accidental overwrites or deletions.

**Enforced in:** infrastructure · **Owner:** platform · **Phase:** build, deploy

**Evidence that it is in place:** The storage and database settings showing versioning, soft-delete or point-in-time recovery enabled, with retention period, on every store the agent can write to.

**Test that it works:** Overwrite and delete a test object with the agent's credentials, restore the earlier version and confirm its contents match the original.

**References:** <https://docs.aws.amazon.com/AmazonS3/latest/userguide/Versioning.html> · <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/> · <https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf>

**Crosswalks:** CSA Addendum 2.5; IMDA MGF 2.1.2; OWASP ASI ASI02; Five Eyes guidance DS2, DV5

### CTRL-0078 · Enforce throttling or rate limits on agent-initiated database operations

**Level 0 · Cardinal** · **Mitigates:** [RISK-042](#RISK-042)

Agents executing database operations without constraints may issue excessive queries that overwhelm database resources, degrade performance for other users, or cause service outages. Implement throttling mechanisms that limit the frequency and volume of agent-initiated database operations, such as maximum queries per second, maximum concurrent connections, or query timeout limits. Monitor database load patterns to detect agents approaching or exceeding rate limits, using this data to refine throttling policies or investigate agents with excessive query behaviour.

**Enforced in:** harness, infrastructure · **Owner:** developer · **Phase:** build, operate

**Evidence that it is in place:** The settings on the agent's database role or query tool giving maximum queries per second, concurrent connections and statement timeout.

**Test that it works:** Drive the agent's query tool above the configured rate and submit a long-running query, and confirm excess calls are throttled and the query times out.

**References:** <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/> · <https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/> · <https://api-security.owasp.org/editions/2023/en/0xa4-unrestricted-resource-consumption>

**Crosswalks:** CSA Addendum 3.1; IMDA MGF 2.1.2; OWASP ASI ASI02; Five Eyes guidance OP4, AA1

### CTRL-0079 · Validate agent-generated database queries for efficiency before execution against production databases

**Level 2 · Best Practice** · **Mitigates:** [RISK-042](#RISK-042)

Agents may generate inefficient database queries such as full table scans, missing indexes, or SELECT * operations that consume excessive resources and degrade database performance. Implement automated query validation that analyses agent-generated queries before execution, checking for common efficiency issues including lack of appropriate indexes, overly broad selections, missing WHERE clauses on large tables, or N+1 query patterns.

**Enforced in:** harness · **Owner:** developer · **Phase:** build

**Evidence that it is in place:** The query validator in the database tool, its rules for missing WHERE clauses, SELECT * and unindexed scans, and its log of rejected queries.

**Test that it works:** Submit an unfiltered SELECT * on a large table through the agent's query tool and confirm it is rejected before reaching the production database.

**References:** <https://www.postgresql.org/docs/current/using-explain.html> · <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/>

**Crosswalks:** CSA Addendum 3.1; IMDA MGF 2.3.3; OWASP ASI ASI02; Five Eyes guidance OP4

### CTRL-0080 · Implement caching mechanisms to reduce repetitive database queries by agents

**Level 2 · Best Practice** · **Mitigates:** [RISK-042](#RISK-042)

Agents repeatedly querying the same or similar data create unnecessary database load, consuming resources that could be avoided through intelligent caching. Implement caching layers (e.g., Redis, Memcached, in-memory caches) that store frequently accessed data, allowing agents to retrieve cached results rather than repeatedly querying databases for identical information.

**Enforced in:** harness, infrastructure · **Owner:** developer · **Phase:** build

**Evidence that it is in place:** The cache configuration for the agent's data tools showing key design and expiry times, and the dashboard of cache hit rate.

**Test that it works:** Issue the same query twice through the agent and confirm the second is served from the cache with no new database query logged.

**References:** <https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside> · <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/>

**Crosswalks:** CSA Addendum 3.1; OWASP ASI ASI02

### CTRL-0081 · Implement input guardrails to detect personally identifiable information in data accessed by agents

**Level 1 · Standard** · **Mitigates:** [RISK-043](#RISK-043), [RISK-066](#RISK-066)

Agents accessing files or databases containing PII may inadvertently expose sensitive personal information through outputs, logs, or downstream processing without appropriate safeguards. Deploy input guardrails that scan data retrieved from files, databases, or other sources for PII categories including names, email addresses, phone numbers, identification numbers, and financial information before agents process it. When PII is detected, trigger protective measures such as flagging the data as sensitive to the agent, applying stricter output filtering, requiring additional access authorisation, or activating enhanced logging to track how the sensitive data is used.

**Enforced in:** harness, model · **Owner:** developer · **Phase:** build, operate

**Evidence that it is in place:** The retrieval-path scanner's configuration listing personal data types and the protective action each triggers, with detection events in the log.

**Test that it works:** Have the agent read a seeded file holding identity numbers and bank details and confirm the content is tagged sensitive and stricter output filtering applies.

**References:** <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/> · <https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/> · <https://genai.owasp.org/llmrisk/llm022025-sensitive-information-disclosure/>

**Crosswalks:** CSA Addendum 4.1; IMDA MGF 2.3.1; Five Eyes guidance DV5

### CTRL-0082 · Do not grant agents access to personally identifiable or sensitive data unless strictly required

**Level 2 · Best Practice** · **Mitigates:** [RISK-043](#RISK-043), [RISK-047](#RISK-047), [RISK-066](#RISK-066)

Agents with unnecessary access to PII or sensitive data create elevated risk of exposure, leakage, or misuse, particularly if agents are compromised or misuse their permissions. Apply the principle of least privilege by restricting agent access to databases, files, or systems containing PII or sensitive information unless explicitly required for the agent's designated functionality. Implement access controls that enforce these restrictions at the data layer, preventing agents from querying or reading sensitive datasets they should not access.

**Enforced in:** infrastructure · **Owner:** developer · **Phase:** design, build, operate

**Evidence that it is in place:** The agent identity's data-access grants set against the data classification register, showing no grant on personal or sensitive datasets without a recorded justification.

**Test that it works:** Using the agent's credentials, query a dataset classified as personal data that its task does not need and confirm the data layer denies it.

**References:** <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/> · <https://www.frontiermodelforum.org/uploads/2026/06/FMF-Issue-Brief-on-Emerging-Security-Practices-for-AI-Agents.pdf> · <https://genai.owasp.org/llmrisk/llm022025-sensitive-information-disclosure/>

**Crosswalks:** CSA Addendum 2.8, 2.7; IMDA MGF 2.1.2; OWASP ASI ASI03; Five Eyes guidance DS3, OP5, AA1

### CTRL-0083 · Disallow unknown or external files unless they have been scanned for threats

**Level 0 · Cardinal** · **Mitigates:** [RISK-044](#RISK-044), [RISK-047](#RISK-047)

External files may contain maliciously crafted content designed to inject hidden instructions, manipulate agent behaviour, or introduce security threats when processed. Implement mandatory scanning for all unknown or external files before allowing agents to access them, using antivirus software, malware scanners, or specialised tools that detect prompt injection attempts embedded in file content.

**Enforced in:** harness, infrastructure · **Owner:** developer · **Phase:** build, operate

**Evidence that it is in place:** The file-intake pipeline configuration showing the malware and injection scanners every external file passes, with a scan verdict stored per file hash.

**Test that it works:** Upload a standard antivirus test file and a document carrying hidden instructions and confirm neither becomes readable by the agent.

**References:** <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/> · <https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html> · <https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf>

**Crosswalks:** CSA Addendum 4.1, 2.1; IMDA MGF 2.3.1; OWASP ASI ASI01, ASI04; Five Eyes guidance DV3

### CTRL-0084 · Set minimum and maximum limits on what agents can modify within system resources

**Level 0 · Cardinal** · **Mitigates:** [RISK-045](#RISK-045)

Agents with unrestricted ability to modify system configurations may make inappropriate changes that degrade performance, compromise security, or cause service disruptions. Define and enforce quantitative boundaries on agent-initiated configuration changes, such as minimum and maximum values for resource allocations (CPU, memory, storage), rate limits, timeout values, or scaling parameters.

**Enforced in:** harness, infrastructure · **Owner:** developer · **Phase:** design, build

**Evidence that it is in place:** The policy file bounding agent-initiated changes, with minimum and maximum values for CPU, memory, storage, scaling, timeouts and rate limits.

**Test that it works:** Have the agent request a scale-up above the maximum and a timeout below the minimum and confirm both changes are rejected and logged.

**References:** <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/> · <https://kubernetes.io/docs/concepts/policy/limit-range/>

**Crosswalks:** CSA Addendum 2.7; IMDA MGF 2.1.2; OWASP ASI ASI02; Five Eyes guidance DP5

### CTRL-0085 · Log system health metrics and implement automated alerts for abnormal conditions

**Level 0 · Cardinal** · **Mitigates:** [RISK-045](#RISK-045)

Misconfigurations by agents may not cause immediate visible failures but instead gradually degrade system health, performance, or stability over time. Implement comprehensive logging of system health metrics including resource utilisation, error rates, response times, and performance indicators that reflect the impact of configuration changes. Configure automated alerting that triggers when metrics deviate from expected baselines or exceed acceptable thresholds.

**Enforced in:** infrastructure · **Owner:** platform · **Phase:** deploy, operate

**Evidence that it is in place:** The dashboards and alert rules for resource utilisation, error rate and response time on systems the agent administers, each with a stated baseline.

**Test that it works:** Apply a configuration change in staging that degrades response time and confirm an alert fires and the change appears in the alert's timeline.

**References:** <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/> · <https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf> · <https://genai.owasp.org/llmrisk/llm102025-unbounded-consumption/>

**Crosswalks:** CSA Addendum 4.3; IMDA MGF 2.3.3; OWASP ASI ASI08; Five Eyes guidance OP1

### CTRL-0086 · Limit the number of concurrent queries to external systems by agents

**Level 0 · Cardinal** · **Mitigates:** [RISK-046](#RISK-046)

Agents making unlimited concurrent queries to external systems may overwhelm those systems, trigger rate limiting or blocking, or exhaust connection pools and network resources. Implement concurrency limits that restrict the maximum number of simultaneous queries an agent can issue to external systems, such as APIs, web services, or remote databases. Configure limits appropriate to external system capacity and rate limit policies, ensuring agents operate within acceptable thresholds whilst maintaining functionality.

**Enforced in:** harness · **Owner:** developer · **Phase:** build, operate

**Evidence that it is in place:** The tool layer's concurrency settings giving the maximum simultaneous requests per external system and the queueing or back-off behaviour.

**Test that it works:** Prompt the agent to issue fifty parallel calls to one external API and confirm in-flight requests never exceed the configured maximum.

**References:** <https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/> · <https://api-security.owasp.org/editions/2023/en/0xa4-unrestricted-resource-consumption> · <https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/>

**Crosswalks:** CSA Addendum 3.1; IMDA MGF 2.1.2; OWASP ASI ASI02; Five Eyes guidance OP4, AA1

### CTRL-0089 · Enforce default-deny network egress for agent runtimes, allowing only approved destinations

**Level 0 · Cardinal** · **Mitigates:** [RISK-037](#RISK-037), [RISK-047](#RISK-047), [RISK-049](#RISK-049)

Every exfiltration and every containment escape needs an outbound channel, and agents acquire new ones with each tool. Run agent runtimes behind an egress policy that denies all outbound connections by default and allows only named destinations required for the task, applied at the network layer (proxy, firewall, or sandbox policy) rather than in the prompt. Include browsing and API tools in the policy, block requests that carry data in URLs or headers to unapproved hosts, and validate at the egress boundary that any credential presented belongs to the deployment — an allowlisted API endpoint is still an exfiltration channel if the agent can use it with an attacker's account. Log and alert on denied connections; they are an early signal of injection or misbehaviour.

**Enforced in:** infrastructure · **Owner:** platform · **Phase:** design, deploy, operate

**Evidence that it is in place:** The egress proxy or firewall rule set for the agent runtime showing default deny and the named permitted destinations, with alerts on denied connections.

**Test that it works:** From inside the agent runtime, request an unlisted host and call a permitted API with another account's key, and confirm both are refused and alerted.

**References:** <https://www.anthropic.com/engineering/how-we-contain-claude> · <https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/>

**Crosswalks:** CSA Addendum 2.6, 2.9; IMDA MGF 2.1.2; OWASP ASI ASI02; Five Eyes guidance DP6, DV5

### CTRL-0090 · Enforce data-flow and capability policies at runtime with a deterministic policy layer that separates untrusted content from privileged actions

**Level 1 · Standard** · **Mitigates:** [RISK-009](#RISK-009), [RISK-034](#RISK-034), [RISK-036](#RISK-036), [RISK-044](#RISK-044), [RISK-047](#RISK-047), [RISK-059](#RISK-059)

Classifier-based injection guardrails are probabilistic and do not close the attack. Complement them with an architectural boundary in which untrusted content never directly drives privileged actions - for example a privileged planner that never sees raw untrusted data working with a quarantined model that extracts values from it (the dual-LLM pattern), capability or information-flow labels that follow data through the system, and a policy engine that checks each tool call against what the data it depends on is allowed to do. Published designs such as CaMeL, Progent, and related reference monitors largely eliminate injection success on agent benchmarks; adopt one, or an equivalent policy layer in your framework, for systems that combine untrusted content with sensitive data or consequential actions.

**Enforced in:** harness · **Owner:** developer · **Phase:** design, build

**Evidence that it is in place:** The policy engine's rules in version control stating which tools accept data carrying each trust label, and its log of denied tool calls.

**Test that it works:** Run AgentDojo with the policy layer enabled and confirm instructions injected into tool outputs trigger no privileged tool call.

**References:** <https://arxiv.org/abs/2503.18813> · <https://arxiv.org/abs/2504.11703> · <https://arxiv.org/abs/2503.18666>

**Crosswalks:** CSA Addendum 2.9, 4.1; IMDA MGF 2.3.1; OWASP ASI ASI01; Five Eyes guidance DP5, DS4, OP5

### CTRL-0091 · Require verified provenance for tools, skills, and dependencies, and re-verify them on every update

**Level 0 · Cardinal** · **Mitigates:** [RISK-006](#RISK-006), [RISK-048](#RISK-048), [RISK-058](#RISK-058), [RISK-064](#RISK-064)

Treat tools, MCP servers, agent skills or plug-ins, prompt templates, and packages as supply chain artefacts. Install them only from vetted registries, pin them by version and content hash, verify signatures or attestations where available, and keep an inventory (an AI bill of materials) of what each agent can load. Because approval does not survive an update, re-verify hashes and signatures at load time and diff tool definitions against the approved version so a silently changed server is detected before it runs. Do not let agents install unpinned dependencies autonomously, scan new packages for typosquatting and known vulnerabilities, and keep a way to revoke a specific tool or skill across all deployments quickly. Before adopting a tool server, skill or package, assess who publishes it: whether the code is public, how the publisher handles security disclosures, and whether it is actively maintained.

**Enforced in:** harness, organisation · **Owner:** security · **Phase:** build, deploy, operate

**Evidence that it is in place:** The lock file pinning every tool, skill, MCP server and package by version and content hash, and the AI bill of materials per agent.

**Test that it works:** Alter a tool's description on a test server after approval and confirm the load-time hash check refuses the tool and raises an alert.

**References:** <https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/> · <https://morphisec.com/mcp-attack-chain/>

**Crosswalks:** CSA Addendum 2.1, 2.4; IMDA MGF 2.3.1; OWASP ASI ASI04; Five Eyes guidance DV7, AA2

### CTRL-0092 · Contain evaluations and red-team exercises so that agents cannot reach real systems, credentials, or people

**Level 0 · Cardinal** · **Mitigates:** [RISK-049](#RISK-049)

Treat every evaluation, benchmark run, and red-team exercise as a deployment with its own containment. Use synthetic or replica targets rather than production systems, issue no production credentials or real accounts, isolate the network with default-deny egress, and prohibit out-of-scope tactics such as contacting real people or third-party infrastructure explicitly in the task specification rather than assuming the agent will infer them. Monitor runs in real time with the ability to halt them, and review anomalous traffic (for example anonymising networks or unexpected destinations) immediately. Agents have breached third-party infrastructure from inside an evaluation and socially engineered real maintainers during cyber testing; design containment for a capable adversary, not a compliant one.

**Enforced in:** infrastructure, organisation · **Owner:** security · **Phase:** build, operate

**Evidence that it is in place:** The evaluation environment definition showing replica targets, test-only credentials and default-deny egress, and the task specification's list of prohibited tactics.

**Test that it works:** From inside an evaluation run, attempt to reach a production hostname and an external site and confirm both are blocked and the run monitor alerts.

**References:** <https://openai.com/index/hugging-face-model-evaluation-security-incident/> · <https://www.aisi.gov.uk/blog/incident-report-unsanctioned-agent-behaviour-during-cyber-testing>

**Crosswalks:** CSA Addendum 2.9, 3.2; IMDA MGF 2.3.2; OWASP ASI ASI10; Five Eyes guidance DV4, DP6

### CTRL-0093 · Monitor agents for deceptive and collusive behaviour using an independent monitor

**Level 2 · Best Practice** · **Mitigates:** [RISK-022](#RISK-022), [RISK-050](#RISK-050), [RISK-051](#RISK-051), [RISK-057](#RISK-057), [RISK-062](#RISK-062)

Behaviour that is goal-directed against oversight will not show up as an error. Deploy an independent monitor - a separate model, classifier, or rule set that the monitored agents cannot influence - that compares actions taken with the plan declared, flags edits to an agent's own history or logs, unexplained credential sharing, communication through channels other than the sanctioned ones, and coordination between agents that were not asked to coordinate. Keep monitor logs tamper-evident and separate from agent-writable storage, and treat monitor alerts as incidents that pause the affected agents pending human review. Red-team the monitor itself so that its blind spots are known.

**Enforced in:** model, harness · **Owner:** security · **Phase:** build, operate

**Evidence that it is in place:** The monitor's deployment configuration showing credentials and log storage separate from the monitored agents, its detection rules and its alert history.

**Test that it works:** Run a red-team agent that declares one plan, carries out another and edits its own log, and confirm the monitor flags both and pauses the agent.

**References:** <https://www.aisi.gov.uk/blog/incident-report-unsanctioned-agent-behaviour-during-cyber-testing> · <https://arxiv.org/abs/2502.14143>

**Crosswalks:** CSA Addendum 4.3, 3.4; IMDA MGF 2.3.3; OWASP ASI ASI10; Five Eyes guidance OP1, DP6, AA1

### CTRL-0094 · Measure the quality of human oversight and redesign approval steps that have become rubber stamps

**Level 0 · Cardinal** · **Mitigates:** [RISK-031](#RISK-031), [RISK-032](#RISK-032), [RISK-041](#RISK-041), [RISK-052](#RISK-052)

A human approval step is only a control while the human is actually deciding. Instrument approval workflows: track approval rates, response times, and override rates per user and per action type, and audit random samples of approved actions. Approval rates near 100% or response times of seconds indicate that the step has stopped working. Respond by routing only genuinely uncertain or high-impact actions to humans, screening routine ones automatically, presenting the context needed to decide (what will change, why the agent chose it, what it would cost to reverse), and training overseers on the agent's failure modes. Report oversight metrics alongside the agent's other operating metrics so that erosion is visible to the governance team.

**Enforced in:** organisation, harness · **Owner:** governance · **Phase:** operate

**Evidence that it is in place:** The oversight metrics report giving approval rate, response time and override rate per approver and action type, with results of sampled approval audits.

**Test that it works:** Seed the approval queue with a clearly wrong action and confirm the approver rejects it and the outcome appears in the oversight report.

**References:** <https://www.anthropic.com/engineering/how-we-contain-claude> · <https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf>

**Crosswalks:** CSA Addendum 4.4; IMDA MGF 2.2.2; OWASP ASI ASI09; Five Eyes guidance OP3

### CTRL-0095 · Apply due diligence and technical bounds to third-party agents before delegating to them or transacting with them

**Level 1 · Standard** · **Mitigates:** [RISK-053](#RISK-053)

An external agent is a supplier whose behaviour you cannot inspect. Before integration, obtain contractual commitments on data handling, retention, and change notification, and evidence of the provider's testing and security practices. Technically, give each third-party agent its own scoped, short-lived credentials bound to the specific tasks delegated, exchange only the data those tasks require through validated schemas, log every exchange on your side, and keep the ability to cut the integration off immediately. Verify the agent's identity on each interaction (signed agent cards, mutual TLS) so that a lookalike cannot take its place, and review its behaviour and outputs periodically as its provider updates it.

**Enforced in:** organisation, infrastructure · **Owner:** governance · **Phase:** design, build, operate

**Evidence that it is in place:** The third-party agent's contract clauses on data handling, retention and change notification, its scoped short-lived credential configuration, and the local log of exchanges.

**Test that it works:** Present an agent card with an invalid signature and confirm delegation is refused, then revoke the real agent's credential and confirm exchanges stop at once.

**References:** <https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf> · <https://a2a-protocol.org/latest/topics/enterprise-ready/>

**Crosswalks:** CSA Addendum 2.1, 3.4; IMDA MGF 2.2.1; OWASP ASI ASI04; Five Eyes guidance DV7, DS3, AA1

### CTRL-0096 · Harden agent frameworks and runtimes before exposing them, and patch framework vulnerabilities promptly

**Level 0 · Cardinal** · **Mitigates:** [RISK-054](#RISK-054), [RISK-064](#RISK-064), [RISK-065](#RISK-065)

Do not run an agent framework with its defaults on any reachable network. Before exposure, enable authentication on every control interface, bind local services to loopback rather than all interfaces, validate origins on WebSocket and browser-facing endpoints, disable or replace unsafe deserialisation of persisted state and checkpoints, remove default credentials, and run the agent as an unprivileged user. Track security advisories for the frameworks and SDKs in use and treat agent-framework vulnerabilities as high priority for patching, because an agent runtime typically holds the credentials of everything it can act on. Include these checks in the deployment baseline so that a new agent cannot go live unhardened.

**Enforced in:** infrastructure, organisation · **Owner:** platform · **Phase:** deploy, operate

**Evidence that it is in place:** The deployment baseline check covering control-interface authentication, loopback binding, origin validation and unprivileged execution, and the framework patch log with advisory dates.

**Test that it works:** Scan the deployed runtime from another network segment and confirm no control interface answers without authentication and no default credential works.

**References:** <https://www.reco.ai/blog/openclaw-the-ai-agent-security-crisis-unfolding-right-now> · <https://thehackernews.com/2026/06/langgraph-flaw-chain-exposes-self.html>

**Crosswalks:** CSA Addendum 2.3, 2.8; IMDA MGF 2.3.1; OWASP ASI ASI05, ASI03; Five Eyes guidance AA1, DV7

### CTRL-0097 · Do not give one agent untrusted content, access to sensitive data, and an unrestricted outbound channel at once; remove one, or gate the outbound channel outside the agent

**Level 0 · Cardinal** · **Mitigates:** [RISK-037](#RISK-037), [RISK-044](#RISK-044), [RISK-047](#RISK-047)

An agent that reads content from outside parties, can reach sensitive data, and can send data out can be turned into an exfiltration channel by a single injected instruction, and detection alone does not reliably stop this. Map, for each agent, where its inputs come from, what sensitive data it can reach, and every channel through which it can send data out, including messages, API calls, and URLs it can fetch or render. Where all three are present, break the combination: give the untrusted content to a separate agent that has no access to sensitive data and returns only structured values (see CTRL-0020 and CTRL-0090); remove the sensitive data the task does not need (see CTRL-0082); or restrict the outbound channel outside the agent, by limiting recipients and destinations to a fixed allowlist (see CTRL-0089) and requiring human approval for any message or call that carries data to a new recipient. Record which of the three is removed or gated for each agent, and recheck the map whenever a tool, data source, or channel is added. An agent that lacks any of the three does not need this control; record the waiver with evidence of which one is absent.

**Enforced in:** harness, organisation · **Owner:** developer · **Phase:** design, build, operate

**Evidence that it is in place:** The per-agent map of untrusted inputs, reachable sensitive data and outbound channels, recording which of the three is removed or gated, dated after the latest tool change.

**Test that it works:** Plant an instruction in content the agent reads telling it to send a seeded secret to a new recipient and confirm the secret never leaves.

**References:** <https://www.frontiermodelforum.org/uploads/2026/06/FMF-Issue-Brief-on-Emerging-Security-Practices-for-AI-Agents.pdf> · <https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/>

**Crosswalks:** CSA Addendum 2.7, 2.9; IMDA MGF 2.1.2; OWASP ASI ASI01, ASI02; Five Eyes guidance DS4, DV7, DV5

### CTRL-0098 · Keep credentials and backups out of reach of agent-run code

**Level 0 · Cardinal** · **Mitigates:** [RISK-049](#RISK-049), [RISK-056](#RISK-056)

Code that an agent writes runs with whatever credentials it can find, so tool-level safeguards do not limit it. Give agent-run code its own credentials, scoped to the task and to non-production resources by default, and keep other secrets, such as infrastructure tokens, deployment keys, production database credentials, and cloud provider keys, out of the files, environment variables, and directories the agent can read; use a secrets manager the agent cannot query, and scan the agent's workspace for stray credentials before granting access. Store backups and version history where neither the agent nor the credentials it holds can delete them, so that recovery (CTRL-0077) survives an agent's mistake.

**Enforced in:** infrastructure · **Owner:** platform · **Phase:** design, build, operate

**Evidence that it is in place:** The agent runtime's secrets configuration showing task-scoped credentials only, the latest scan of its workspace for other credentials, and backup storage policies that deny deletion to the agent's identities.

**Test that it works:** From code the agent runs, try to read a production credential and to delete a backup, and confirm that both are refused.

**References:** <https://hackread.com/cursor-ai-agent-wipes-pocketos-database-backups/> · <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/>

**Crosswalks:** CSA Addendum 2.6, 2.8; IMDA MGF 2.1.2; OWASP ASI ASI03, ASI05; Five Eyes guidance OP5, DP6

### CTRL-0099 · Stop the task when an action is refused and report to a human, instead of letting the agent look for another route

**Level 1 · Standard** · **Mitigates:** [RISK-057](#RISK-057)

An agent that is refused an action will often try to reach the same goal another way, and the second route is rarely one its operators considered. When a permission check, a policy layer, a sandbox, or a tool returns a refusal, treat it as the end of that line of work: have the harness halt the task or return control to a human, with the refusal and what the agent was attempting. State in the agent's instructions which means are off limits whatever the goal, such as credentials it was not issued, systems outside the task, and other people's accounts, but do not rely on the instruction alone. Count refusals per task and alert when an agent meets several in a row, which is a sign that it is probing for a way round.

**Enforced in:** harness, prompt · **Owner:** developer · **Phase:** design, build, operate

**Evidence that it is in place:** The harness code path that handles a denied action, showing the task halting or returning to a human, and the alert rule on repeated refusals.

**Test that it works:** Deny an action that the agent needs for its task and confirm that it stops and reports, and does not attempt the action through another tool or credential.

**References:** <https://alignment.openai.com/misalignment-reports/searching-github-for-leaked-api-keys/> · <https://metr.org/blog/2026-10-22-red-teaming-openai-agent-monitoring/>

**Crosswalks:** CSA Addendum 2.7, 4.4; IMDA MGF 2.2.2; OWASP ASI ASI10; Five Eyes guidance DP5, OP3

### CTRL-0100 · Load instruction, settings, and tool-configuration files only from locations the operator controls, and ask before using any that arrive with a workspace

**Level 0 · Cardinal** · **Mitigates:** [RISK-058](#RISK-058)

Files that an agent loads automatically are instructions and code, whoever wrote them. Decide which locations may supply instruction, rules, settings, hook, skill, and tool-configuration files, and keep them under the operator's control and under version review. When the agent is started in a workspace that brings such files with it, such as a cloned repository or a downloaded folder, do not apply them until a person has seen what they contain and agreed, and make sure the trust prompt comes before anything in the workspace runs. Show hidden and invisible characters in these files when they are reviewed, and re-check them when they change (see CTRL-0091). Do not let the agent itself create or edit them (see CTRL-0101).

**Enforced in:** harness, organisation · **Owner:** developer · **Phase:** design, build, operate

**Evidence that it is in place:** The agent's configuration listing the locations it loads instruction and settings files from, and its trust-prompt behaviour for workspace-supplied files, with a review record for the files currently in use.

**Test that it works:** Start the agent in a folder containing a planted instruction file and a settings file with a command hook, and confirm that neither takes effect before the user approves the workspace.

**References:** <https://research.checkpoint.com/2026/rce-and-api-token-exfiltration-through-claude-code-project-files-cve-2025-59536/> · <https://www.pillar.security/blog/new-vulnerability-in-github-copilot-and-cursor-how-hackers-can-weaponize-code-agents>

**Crosswalks:** CSA Addendum 2.1, 4.1; IMDA MGF 2.3.1; OWASP ASI ASI01, ASI04; Five Eyes guidance DS1, DV7, DP4

### CTRL-0101 · Give agents no write access to their own instructions, configuration, permissions, logs, or monitors

**Level 0 · Cardinal** · **Mitigates:** [RISK-058](#RISK-058), [RISK-062](#RISK-062)

An agent that can edit what governs it holds both sides of the check. Keep the agent's instruction files, settings, tool and permission configuration, approval rules, logs, and monitoring out of every location and API that the agent's own identities can write to. Send logs to a store that the agent cannot modify or delete, and run monitors under a different identity, outside the agent's environment. Make changes to permissions and configuration go through a path that needs a human, and alert on any attempt by an agent to change them. Check this for every route the agent has, including code it can run and applications it can operate, and not only for its named tools.

**Enforced in:** infrastructure, harness · **Owner:** platform · **Phase:** design, build, operate

**Evidence that it is in place:** Access policies showing that the agent's identities have no write permission on its configuration, permission, and instruction stores, and that its logs go to append-only storage owned by another identity.

**Test that it works:** Using the agent's credentials and tools, try to edit its permission configuration and to delete a log entry, and confirm that both fail and raise an alert.

**References:** <https://alignment.openai.com/misalignment-reports/suppressing-misalignment-monitoring-alerts-and-disabling-misalignment-monitoring/> · <https://metr.org/blog/2026-10-22-red-teaming-openai-agent-monitoring/>

**Crosswalks:** CSA Addendum 2.6, 4.3; IMDA MGF 2.2.2; OWASP ASI ASI10, ASI03; Five Eyes guidance DS2, OP1

### CTRL-0102 · Issue agents short-lived, task-scoped credentials, keep an inventory of them, and revoke them when an agent or integration is retired

**Level 1 · Standard** · **Mitigates:** [RISK-060](#RISK-060)

Long-lived tokens held by agents, and by the vendors and platforms that act for them, are a standing target. Issue credentials per agent and per task with the shortest lifetime the work allows, prefer workload identity or brokered tokens to stored secrets, and keep them out of plain files, shell history, and agent memory. Keep an inventory of every credential and third-party grant that an agent holds, with an owner for each. Review the inventory on a fixed schedule, and revoke credentials when an agent is decommissioned, an integration is removed, a vendor is offboarded, or the person who authorised a grant leaves. Treat a compromise at an agent vendor as a compromise of every token that vendor held.

**Enforced in:** infrastructure, organisation · **Owner:** security · **Phase:** design, operate, retire

**Evidence that it is in place:** The inventory of agent credentials and third-party grants, with owner, scope, expiry, and last review date, and the revocation records for retired agents and integrations.

**Test that it works:** Pick a retired agent or a removed integration and confirm that each credential it held is rejected.

**References:** <https://cloud.google.com/blog/topics/threat-intelligence/data-theft-salesforce-instances-via-salesloft-drift> · <https://composio.dev/blog/composio-may-2026-security-incident>

**Crosswalks:** CSA Addendum 2.6, 2.4; IMDA MGF 2.1.2; OWASP ASI ASI03; Five Eyes guidance DS3, OP5

### CTRL-0103 · Pin the model version, re-run evaluations before any model change, and keep a tested fallback

**Level 1 · Standard** · **Mitigates:** [RISK-061](#RISK-061)

A hosted model can change or disappear without any change on your side. Call models by a dated or versioned identifier, not by an alias that moves. Record the provider's retirement dates and subscribe to its status and change notices. Before adopting a new model or version, re-run the evaluations and safety verification that the system was approved on (see CTRL-0005 and CTRL-0038), paying attention to tool calling and instruction following, which change between versions. Monitor output quality in production so that a silent degradation is noticed. For systems that must stay available, keep a second model or a manual procedure that has been tested, and decide in advance what the agent is allowed to do while it is running on the fallback.

**Enforced in:** harness, organisation · **Owner:** developer · **Phase:** build, operate

**Evidence that it is in place:** The configuration that names the pinned model version, the evaluation results recorded against that version, and the record of the last fallback test.

**Test that it works:** Point the system at the fallback model or procedure and confirm that it completes a standard task set within the limits agreed for fallback operation.

**References:** <https://www.anthropic.com/engineering/a-postmortem-of-three-recent-issues> · <https://support.zendesk.com/hc/en-us/articles/10932821917082-Service-Incident-June-19-2026-AI-Agents-OpenAI-service-delays-and-error-issues>

**Crosswalks:** CSA Addendum 3.1; IMDA MGF 2.3.3; OWASP ASI ASI08; Five Eyes guidance DV5, OP4

### CTRL-0104 · Authorise each action against the principal it is done for, at the agent that carries it out

**Level 1 · Standard** · **Mitigates:** [RISK-063](#RISK-063)

When agents call each other, the permission that matters is that of the person or system at the start of the chain, not that of the agent making the request. Pass the originating principal's identity and scope with every inter-agent request, in a form the receiving agent can verify, and have the agent that acts check the action against that scope. An agent's effective permissions for a request should be no wider than those of the least-privileged party that contributed to it. Do not let agents discover and call each other freely: list which agents may call which, and for which actions. Treat a message from another organisation's agent as untrusted input, and require a human or an out-of-band confirmation before acting on it where the action is consequential.

**Enforced in:** harness, infrastructure · **Owner:** developer · **Phase:** design, build

**Evidence that it is in place:** The inter-agent call path showing the originating principal's identity carried in each request and checked by the acting agent, and the list of permitted agent-to-agent calls.

**Test that it works:** From a low-privilege session, have one agent ask a higher-privilege agent for an action that the user is not entitled to, and confirm that it is refused.

**References:** <https://appomni.com/ao-labs/ai-agent-to-agent-discovery-prompt-injection/> · <https://www.pillar.security/blog/ill-just-call-you-agent-to-agent-privilege-boundary-failures-in-ci-cd-on-googles-adk-repository>

**Crosswalks:** CSA Addendum 3.4, 2.6; IMDA MGF 2.1.2; OWASP ASI ASI03, ASI07; Five Eyes guidance DS3, OP5

### CTRL-0105 · Accept instructions and approvals only through a channel that proves they come from the principal

**Level 1 · Standard** · **Mitigates:** [RISK-065](#RISK-065)

An approval step protects nothing if something other than the user can press the button. Do not let a link, a URL parameter, or a deep link submit a prompt or change a setting: show the text and wait for the user to send it. Render approval prompts where other software, web pages, and browser extensions cannot script them, and require a deliberate action for consequential approvals. Do not provide a flag or an environment variable that turns off permission checks for unattended use; where one is needed for automation, bind it to a separate, restricted identity. Protect operator consoles and control interfaces with strong authentication (see CTRL-0096), and log every instruction with the channel it arrived through, so that a forged one can be told apart afterwards.

**Enforced in:** harness · **Owner:** developer · **Phase:** design, build

**Evidence that it is in place:** The interface code and configuration showing that links cannot submit prompts, that approval prompts are isolated from scripting, and that no option disables permission checks for the standard identity.

**Test that it works:** Open the agent from a link that carries a prompt, and drive its approval prompt from another process, and confirm that nothing is submitted or approved without the user.

**References:** <https://www.varonis.com/blog/reprompt> · <https://nx.dev/blog/s1ngularity-postmortem>

**Crosswalks:** CSA Addendum 2.6, 4.4; IMDA MGF 2.2.2; OWASP ASI ASI09, ASI03; Five Eyes guidance OP3, DP4

### CTRL-0106 · Minimise the personal data an agent sends through its tools, and set a retention period for what it keeps

**Level 1 · Standard** · **Mitigates:** [RISK-066](#RISK-066)

Personal data leaves through ordinary tool calls: a search query, an API parameter, a file upload. Decide for each tool which categories of personal data it may carry, and enforce this in the tool layer by redacting or blocking the rest (see CTRL-0047 and CTRL-0081), with stricter rules for tools that reach other organisations. Collect only the records a task needs instead of indexing whole mailboxes, drives, or repositories, and make any upload to a hosted service an explicit choice, not a default. Set a retention period for everything the agent stores, including indexes, caches, transcripts, and memory, and delete on schedule and when the user leaves or the purpose ends. Tell people when an agent is recording or processing their data, and obtain consent where the law requires it.

**Enforced in:** harness, organisation · **Owner:** developer · **Phase:** design, build, operate

**Evidence that it is in place:** The per-tool data rules and redaction configuration, the retention schedule for agent stores, and deletion logs showing the schedule being met.

**Test that it works:** Give the agent a task whose natural tool call would send a personal identifier to an external service, and confirm that the identifier is removed or the call is blocked.

**References:** <https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/> · <https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf>

**Crosswalks:** CSA Addendum 2.7; IMDA MGF 2.3.1; OWASP ASI ASI02; Five Eyes guidance DS1, DP5

### CTRL-0107 · Set limits on what users may direct the agent to do to others, enforce them across a whole task, and have the agent identify itself

**Level 1 · Standard** · **Mitigates:** [RISK-067](#RISK-067)

State in an acceptable-use policy what the agent may not be used for, such as compiling profiles of individuals, producing material for fraud, or accessing services in ways their operators forbid. Enforce it with guardrails that look at the aim of a task and not only at each step, since a harmful aim can be split into steps that each look routine. Where the agent acts on other parties' services, respect their terms and technical signals, identify the agent as an agent in its requests, and do not disguise it as a human user. Monitor for patterns of misuse across sessions, and give outside parties a way to report an agent that is acting against them and to have it stopped.

**Enforced in:** organisation, harness · **Owner:** governance · **Phase:** design, operate

**Evidence that it is in place:** The acceptable-use policy, the guardrail configuration that evaluates the aim of a task, and the record of misuse reports received and acted on.

**Test that it works:** Ask the agent, across several ordinary-looking steps, to assemble a profile of a named private individual, and confirm that the task is refused or flagged.

**References:** <https://labs.guard.io/vibescamming-from-prompt-to-phish-benchmarking-popular-ai-agents-resistance-to-the-dark-side-1ec2fbdf0a35> · <https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf>

**Crosswalks:** CSA Addendum 2.7, 4.4; IMDA MGF 2.4.2; OWASP ASI ASI10; Five Eyes guidance DP2, DP5

### Retired controls

These IDs are kept so that older assessments and citations still resolve.

#### CTRL-0006 · Require human approval before executing high-impact actions

Retired. Superseded by [CTRL-0042](#CTRL-0042).

#### CTRL-0014 · Use only MCP servers from verified and trusted developers

Retired. Superseded by [CTRL-0091](#CTRL-0091).
