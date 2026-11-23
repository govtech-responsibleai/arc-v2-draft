---
description: "Worked example: an ARC assessment of an agentic coding assistant that reads code, runs commands and edits files."
---

# Example 2: Agentic Coding Assistant

This worked example applies the [four steps for AI developers](../for-ai-developers.md) to one system.

Agentic coding assistants like Cursor and Claude Code help developers write, debug, and refactor code by autonomously reading codebases, executing commands, and modifying files. These systems typically employ multi-agent architectures with specialized agents for different coding tasks, requiring careful risk management given their access to sensitive codebases and ability to execute arbitrary code.

## Step 1: Identify Capabilities

The agentic coding assistant comprises five specialized agents:

| Agent Type | Agent Name | Task |
|------------|-----------|------|
| Core Orchestration | Task Planner | Decomposes user coding requests into subtasks and coordinates agent workflow |
| Code Understanding | Codebase Analyzer | Searches codebase, reads relevant files, and understands existing code structure |
| Code Generation | Code Writer | Generates new code or modifies existing code based on requirements |
| Execution & Testing | Command Executor | Runs terminal commands, executes tests, and validates code functionality |
| File Operations | File Manager | Reads, writes, and manages files and directories in the workspace |

Based on the capability taxonomy, this system demonstrates:

| Category | Capability | Explanation |
|----------|-----------|-------------|
| Cognitive | CAP-01: Planning and Goal Management | The Task Planner breaks down complex coding requests into sequential steps (e.g., "add authentication" → analyze existing auth, design schema, implement endpoints, write tests). |
| Cognitive | CAP-02: Agent Delegation | The Task Planner assigns subtasks to specialized agents (Codebase Analyzer, Code Writer, Command Executor, File Manager) and coordinates their activities. |
| Cognitive | CAP-03: Tool Use | The Task Planner selects appropriate tools based on task requirements (search vs. read vs. execute). |
| Interaction | CAP-04: Multimodal Understanding and Generation | All agents process code, markdown documentation, and configuration files; Code Writer generates syntactically correct code in multiple languages. |
| Operational | CAP-10: Code Execution | The Command Executor runs shell commands, executes tests, installs dependencies, and validates code changes. |
| Operational | CAP-11: File and Data Management | The File Manager reads source files, writes modifications, creates new files, and manages version control operations. |

## Step 2: Evaluate Risks

We identify risks from baseline components and capabilities, assessing likelihood and impact given the coding assistant context. Assuming organisational relevance threshold requires both impact ≥3 AND likelihood ≥3, we identify the following priority risks:

**Priority Risks (Impact ≥3, Likelihood ≥3):**

| Risk ID | Element | Risk Statement | Assessment |
|---------|---------|----------------|------------|
| RISK-002 | CMP-01 (LLM) | Insufficient alignment of LLM behaviour | **[Impact: 4, Likelihood: 3]** Misaligned LLM may ignore security constraints or execute dangerous operations when instructed to "fix it quickly" without proper validation. |
| RISK-007 | CMP-03 (Tools) | Lack of input sanitisation | **[Impact: 5, Likelihood: 4]** Critical given file system and command execution tools. Malicious file contents or unsanitized tool outputs could inject prompts to manipulate assistant behaviour or execute unintended operations. |
| RISK-028 | CAP-04 (Multimodal Understanding) | Generation of non-factual or hallucinated content | **[Impact: 4, Likelihood: 4]** Hallucinating incorrect code patterns, API usage, or architectural decisions leads developers to implement buggy or insecure features. |
| RISK-038 | CAP-09 (Other Programmatic Interfaces) | Incorrect use of unfamiliar programmatic interfaces | **[Impact: 3, Likelihood: 4]** Assistant may misinterpret bespoke API semantics when interacting with internal tools or non-standard interfaces. |
| RISK-039 | CAP-10 (Code Execution) | Production or execution of poor or ineffective code | **[Impact: 5, Likelihood: 3]** Generated code may be incorrect, inefficient, or contain bugs that cause operational disruptions when deployed or run. |
| RISK-040 | CAP-10 (Code Execution) | Production or execution of vulnerable or malicious code | **[Impact: 5, Likelihood: 4]** Critical risk—generated code may contain SQL injection, XSS, insecure deserialization, or other OWASP Top 10 vulnerabilities that reach production. |
| RISK-041 | CAP-11 (File & Data Management) | Unintended overwriting or deletion of files or data | **[Impact: 5, Likelihood: 3]** Assistant may accidentally delete critical files, overwrite production configs, or drop database tables when misinterpreting user intent. |
| RISK-043 | CAP-11 (File & Data Management) | Exposure of sensitive data through file or database access | **[Impact: 4, Likelihood: 3]** Code suggestions may inadvertently reproduce API keys, credentials, or sensitive data found in configuration files or comments. |
| RISK-044 | CAP-11 (File & Data Management) | Prompt injection via malicious files or data | **[Impact: 4, Likelihood: 3]** Malicious code repositories may contain hidden instructions in comments, README files, or docstrings designed to manipulate assistant behaviour. |

*(Lower-priority risks documented but not shown here for brevity)*

**How the capabilities are used.** Code Execution is used at *act with approval*: every shell command needs the user's approval, in a container with no network access by default. File and Data Management is used at *act alone*, on a workspace under version control, so its effects are reversible and internal. Neither conditional component is present. Its profile is in [`examples/systems/coding-assistant.yaml`](https://github.com/govtech-responsibleai/arc-v2-draft/blob/main/examples/systems/coding-assistant.yaml).

**Capabilities the declared ones bring.** Code Execution can give a system Other Programmatic Interfaces and System Management. Neither is added here: the container blocks network access, and no infrastructure or deployment credentials are within reach of the code it runs (CTRL-0098).

**Combination check.** The lethal trifecta is *possible*: File and Data Management supplies sensitive data, and the other two legs depend on the deployment. Both are confirmed here. The assistant opens repositories and installs packages that others can change, and code it runs could reach the network. RISK-047 applies, and CTRL-0097 is implemented by gating the outbound channel (see RISK-044 below). Oversight within reach is also *possible*: code the assistant runs, or files it writes, could reach its own settings and hooks. RISK-062 applies, and CTRL-0101 is implemented by keeping the assistant's configuration outside the workspace it can write to.

## Step 3: Implement Controls

<!-- arc:example coding-assistant risks=49 level0=37 lethal-trifecta=possible oversight-within-reach=possible -->
This system has 49 applicable risks: 22 baseline, 21 from single capabilities, and six from combinations (the three multi-agent risks that Agent Delegation brings in; RISK-049, sandbox escape, which Code Execution brings in; and RISK-047 and RISK-062 from the two combination rules). They carry 37 Level 0 controls, all of which are implemented as-is. The table shows the priority risks — every Level 0 control of each, plus the Level 1 and 2 controls we selected:

| Risk ID | Selected Controls | Implementation |
|---------|-------------------|----------------|
| RISK-002 | **CTRL-0007** (Level 0): Log all LLM inputs and outputs<br>**CTRL-0038** (Level 0): Conduct safety verification before deployment and on a regular cadence<br>**CTRL-0005** (Level 1): Conduct structured evaluation of multiple LLMs | • Log all prompts and generated code to CloudWatch with 90-day retention<br>• Run an agent-security benchmark (e.g., AgentDojo) and a set of repository-injection scenarios before each release<br>• Evaluated three candidate models on code-generation benchmarks (HumanEval, MBPP); selected the one with the strongest instruction-following and code safety |
| RISK-007 | **CTRL-0015** (Level 1): Treat all tool metadata and outputs as untrusted input | • Validate all tool outputs (file contents, command results, search results) against expected schemas<br>• Sanitize tool outputs before incorporating into agent prompts or displaying to users<br>• Escape special characters in file paths and command arguments to prevent injection<br>• Filter tool descriptions and error messages for embedded instructions |
| RISK-028 | **CTRL-0049** (Level 0): Implement UI/UX cues to communicate the risk of hallucination<br>**CTRL-0050** (Level 1): Enable users to verify answers against sources<br>**CTRL-0048** (Level 2): Implement methods to reduce hallucination rates | • Add "Verify this code before using" disclaimer on all generated code blocks<br>• Display inline citations showing which files informed code suggestions<br>• Implement RAG using codebase context to ground code suggestions in actual project patterns |
| RISK-038 | **CTRL-0041** (Level 0): Provide comprehensive descriptions for each tool<br>**CTRL-0067** (Level 0): Ensure proper documentation of programmatic interfaces for agent use | • Provide LLM-readable documentation for all internal APIs and bespoke tools the assistant integrates with<br>• Include parameter types, constraints, and error conditions in tool descriptions<br>• Validate assistant-generated API calls against interface schemas before execution |
| RISK-039 | **CTRL-0069** (Level 0): Run code only in isolated environments<br>**CTRL-0071** (Level 0): Use static code analysers (see RISK-040)<br>**CTRL-0068** (Level 1): Use code linters to screen generated code<br>**CTRL-0070** (Level 1): Review all agent-generated code before execution | • Integrate ESLint for JavaScript/TypeScript and Pylint for Python, blocking code application if critical errors detected<br>• Execute all code in Docker containers with no network access by default<br>• Require explicit user approval before running any shell commands |
| RISK-040 | **CTRL-0069** (Level 0): Run code only in isolated environments (see RISK-039)<br>**CTRL-0071** (Level 0): Use static code analysers to detect vulnerabilities<br>**CTRL-0073** (Level 0): Create denylist of dangerous commands<br>**CTRL-0074** (Level 0): CVE-scan dependencies and block High/Critical<br>**CTRL-0070** (Level 1): Review all agent-generated code before execution | • Integrate Semgrep with OWASP ruleset for vulnerability scanning<br>• Integrate Bandit for Python security analysis<br>• Flag HIGH/CRITICAL vulnerabilities and require user acknowledgment<br>• Denylist: rm -rf, dd, mkfs, iptables, sudo commands without user confirmation<br>• Run dependency CVE scanning on every install the assistant performs; block on High/Critical findings |
| RISK-041 | **CTRL-0076** (Level 0): Require human approval for destructive changes that cannot be readily undone<br>**CTRL-0077** (Level 0): Enable versioning or soft-delete<br>**CTRL-0094** (Level 0): Measure the quality of human oversight<br>**CTRL-0075** (Level 1): Do not grant write access unless necessary | • Restrict write access to workspace directory only (no system files)<br>• Integrate with Git to ensure all changes are tracked and reversible; edits to tracked files proceed without approval<br>• Require explicit confirmation, enforced in the tool layer, before deleting untracked files, force-pushing, or running destructive database commands<br>• Track how often users approve these prompts and review a monthly sample; a prompt approved almost every time is redesigned |
| RISK-043 | **CTRL-0047** (Level 0): Implement output guardrails to detect and redact PII<br>**CTRL-0081** (Level 1): Implement input guardrails to detect PII in accessed data | • Scan all generated code for API keys, tokens, passwords using regex patterns<br>• Flag and redact detected secrets before displaying to user<br>• Warn user when reading config files containing credentials |
| RISK-044 | **CTRL-0062** (Level 0): Implement input guardrails to detect prompt injection<br>**CTRL-0083** (Level 0): Disallow unknown external files unless scanned<br>**CTRL-0097** (Level 0): Do not give one agent untrusted content, sensitive data, and an unrestricted outbound channel at once | • Scan all file contents for prompt injection patterns before processing<br>• Warn user when opening repositories from untrusted sources<br>• Sanitize code comments and docstrings before including in prompts<br>• The outbound channel is gated outside the agents: code runs in containers with no network access by default, and the only destinations that can be enabled are the package mirror and the organisation's Git server |

## Step 4: Assess Residual Risks

After implementing controls, key residual risks remain:

| Risk ID | Residual Risk Description | Mitigation Strategy |
|---------|---------------------------|---------------------|
| RISK-040 | **Subtle Security Vulnerabilities**: Static analyzers may miss logic flaws, race conditions, or business logic vulnerabilities that require deeper semantic understanding. | • Require security-focused code review for authentication, authorization, and payment logic<br>• Integrate periodic penetration testing of generated features<br>• Maintain security checklist for high-risk code categories |
| RISK-044 | **Sophisticated Prompt Injection**: Advanced attacks embedded in dependency documentation or third-party code may bypass current detection and manipulate assistant behaviour. | • Monitor command execution patterns for anomalies (e.g., unexpected network calls)<br>• Regularly update injection detection patterns based on emerging attacks<br>• Implement rate limiting on destructive operations |
| RISK-041 | **Misinterpreted User Intent**: User requests like "clean up the code" may be interpreted too broadly, leading to unintended file deletions or modifications despite approval workflows. | • Require assistant to explicitly list files to be modified before execution<br>• Implement dry-run mode showing proposed changes before applying<br>• Maintain undo history for last 10 operations |
| RISK-028 | **Framework/Library Hallucination**: Assistant may hallucinate non-existent APIs, deprecated methods, or incorrect framework usage in less common libraries. | • Prioritize official documentation retrieval for library-specific questions<br>• Display confidence scores for code suggestions involving external dependencies<br>• Encourage developers to verify against official docs for critical integrations |

These residual risks and mitigation strategies will be reviewed monthly during the first six months of deployment, then quarterly thereafter based on observed incident rates and developer feedback.
