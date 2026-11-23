# Crosswalk: MITRE ATLAS

ARC maps its risks to [MITRE ATLAS (Adversarial Threat Landscape for AI Systems)](https://atlas.mitre.org/) (2026.10 (28 October 2026)). Each mapping points to the nearest corresponding entry; it is not a claim that the two are the same.

Read it from either side: below, each item in that framework lists the ARC entries that map to it, and each ARC entry's own page lists its crosswalks.

## AML.T0010.001 · Supply Chain Compromise: Software

**Risks**

- [RISK-048](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-048/): Compromise through the tool, skill, and dependency supply chain

## AML.T0010.003 · Supply Chain Compromise: Model Repository

**Risks**

- [RISK-001](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-001/): Use of untrusted or compromised LLMs

## AML.T0010.005 · Supply Chain Compromise: AI Agent Tool

**Risks**

- [RISK-048](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-048/): Compromise through the tool, skill, and dependency supply chain
- [RISK-058](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-058/): Instruction and configuration files as a way in
- [RISK-064](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-064/): Harm from a connected tool server or agent to the system that connects to it

## AML.T0011.001 · User Execution: Malicious Package

**Risks**

- [RISK-040](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-040/): Production or execution of vulnerable or malicious code

## AML.T0011.002 · User Execution: Poisoned AI Agent Tool

**Risks**

- [RISK-006](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-006/): Tool poisoning by malicious actors
- [RISK-064](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-064/): Harm from a connected tool server or agent to the system that connects to it

## AML.T0018.000 · Manipulate AI Model: Poison AI Model

**Risks**

- [RISK-001](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-001/): Use of untrusted or compromised LLMs

## AML.T0020 · Training Data Poisoning

**Risks**

- [RISK-001](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-001/): Use of untrusted or compromised LLMs

## AML.T0046 · Spamming AI System with Chaff Data

**Risks**

- [RISK-052](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-052/): Automation bias and erosion of human oversight

## AML.T0049 · Exploit Public-Facing Application

**Risks**

- [RISK-054](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-054/): Insecure default configuration of agent frameworks and runtimes

## AML.T0050 · Command and Scripting Interpreter

**Risks**

- [RISK-007](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-007/): Lack of input sanitisation
- [RISK-040](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-040/): Production or execution of vulnerable or malicious code

## AML.T0051 · LLM Prompt Injection

**Risks**

- [RISK-009](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-009/): Unsanitised inputs in system instructions

## AML.T0051.001 · LLM Prompt Injection: Indirect

**Risks**

- [RISK-034](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-034/): Prompt injection via malicious websites
- [RISK-036](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-036/): Prompt injection risks through computer use
- [RISK-044](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-044/): Prompt injection via malicious files or data
- [RISK-047](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-047/): Data exfiltration through combined access to untrusted content, sensitive data, and an outbound channel
- [RISK-058](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-058/): Instruction and configuration files as a way in
- [RISK-059](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-059/): Prompt injection through inbound messages

## AML.T0053 · AI Agent Tool Invocation

**Risks**

- [RISK-004](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-004/): Weak tool authentication and authorisation controls
- [RISK-005](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-005/): Lack of proper role-based access control for tools
- [RISK-007](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-007/): Lack of input sanitisation
- [RISK-015](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-015/): Overly permissive roles and permissions
- [RISK-016](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-016/): Unauthorised privilege escalation
- [RISK-063](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-063/): Authority passing between agents without a check

## AML.T0055 · Unsecured Credentials

**Risks**

- [RISK-033](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-033/): Leakage of transaction credentials
- [RISK-056](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-056/): Actions beyond the agent's tools through code execution and reachable credentials
- [RISK-057](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-057/): Pursuit of a goal by means the principal did not sanction
- [RISK-060](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-060/): Agent credentials that are over-broad, long-lived, or outlive their use

## AML.T0060 · Publish Hallucinated Entities

**Risks**

- [RISK-040](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-040/): Production or execution of vulnerable or malicious code

## AML.T0067 · LLM Trusted Output Components Manipulation

**Risks**

- [RISK-052](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-052/): Automation bias and erosion of human oversight

## AML.T0070 · RAG Poisoning

**Risks**

- [RISK-010](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-010/): Poisoned memory
- [RISK-044](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-044/): Prompt injection via malicious files or data

## AML.T0073 · Impersonation

**Risks**

- [RISK-013](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-013/): Man-in-the-middle attacks between agents
- [RISK-050](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-050/): Deceptive behaviour toward overseers
- [RISK-065](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-065/): Instructions or approvals forged in the principal's name

## AML.T0077 · LLM Response Rendering

**Risks**

- [RISK-047](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-047/): Data exfiltration through combined access to untrusted content, sensitive data, and an outbound channel

## AML.T0078 · Drive-by Compromise

**Risks**

- [RISK-034](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-034/): Prompt injection via malicious websites
- [RISK-047](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-047/): Data exfiltration through combined access to untrusted content, sensitive data, and an outbound channel
- [RISK-065](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-065/): Instructions or approvals forged in the principal's name

## AML.T0080.000 · AI Agent Context Poisoning: Memory

**Risks**

- [RISK-010](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-010/): Poisoned memory

## AML.T0083 · Credentials from AI Agent Configuration

**Risks**

- [RISK-033](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-033/): Leakage of transaction credentials
- [RISK-054](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-054/): Insecure default configuration of agent frameworks and runtimes
- [RISK-060](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-060/): Agent credentials that are over-broad, long-lived, or outlive their use

## AML.T0085 · Data from AI Services

**Risks**

- [RISK-047](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-047/): Data exfiltration through combined access to untrusted content, sensitive data, and an outbound channel

## AML.T0086 · Exfiltration via AI Agent Tool Invocation

**Risks**

- [RISK-047](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-047/): Data exfiltration through combined access to untrusted content, sensitive data, and an outbound channel

## AML.T0091.000 · Use Alternate Authentication Material: Application Access Token

**Risks**

- [RISK-004](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-004/): Weak tool authentication and authorisation controls
- [RISK-060](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-060/): Agent credentials that are over-broad, long-lived, or outlive their use

## AML.T0093 · Prompt Infiltration via Public-Facing Application

**Risks**

- [RISK-059](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-059/): Prompt injection through inbound messages

## AML.T0099 · AI Agent Tool Data Poisoning

**Risks**

- [RISK-044](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-044/): Prompt injection via malicious files or data

## AML.T0100 · AI Agent Clickbait

**Risks**

- [RISK-036](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-036/): Prompt injection risks through computer use

## AML.T0105 · Escape to Host

**Risks**

- [RISK-049](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-049/): Escape from evaluation or sandbox containment onto live systems

## AML.T0109 · AI Supply Chain Rug Pull

**Risks**

- [RISK-048](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-048/): Compromise through the tool, skill, and dependency supply chain

## AML.T0110 · AI Agent Tool Poisoning

**Risks**

- [RISK-006](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-006/): Tool poisoning by malicious actors

## AML.T0115.001 · Publish Poisoned AI Artifacts: Models

**Risks**

- [RISK-001](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-001/): Use of untrusted or compromised LLMs

## AML.T0115.002 · Publish Poisoned AI Artifacts: AI Agent Tools

**Risks**

- [RISK-048](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-048/): Compromise through the tool, skill, and dependency supply chain

## AML.T0117 · Autonomous Attack-Path Adaptation

**Risks**

- [RISK-016](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-016/): Unauthorised privilege escalation
- [RISK-049](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-049/): Escape from evaluation or sandbox containment onto live systems
- [RISK-057](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-057/): Pursuit of a goal by means the principal did not sanction

## AML.T0118 · Autonomous AI Agent Communication

**Risks**

- [RISK-051](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-051/): Unsanctioned coordination between agents

## AML.T0118.000 · Autonomous AI Agent Communication: Communication via Shared Artifacts

**Risks**

- [RISK-051](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-051/): Unsanctioned coordination between agents

## AML.T0118.001 · Autonomous AI Agent Communication: Direct Agent Communication

**Risks**

- [RISK-022](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-022/): Malicious or manipulative use of delegated agents
- [RISK-063](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-063/): Authority passing between agents without a check

## AML.T0122 · Exploitation of Remote Services

**Risks**

- [RISK-049](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-049/): Escape from evaluation or sandbox containment onto live systems

## AML.T0132 · Misconfigured or Publicly Exposed AI Services

**Risks**

- [RISK-054](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-054/): Insecure default configuration of agent frameworks and runtimes

## AML.T0138 · Indicator Removal

**Risks**

- [RISK-050](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-050/): Deceptive behaviour toward overseers
- [RISK-062](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-062/): Agent alters or disables the oversight placed on it

## AML.T0143 · LLM Prompt Propagation

**Risks**

- [RISK-022](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-022/): Malicious or manipulative use of delegated agents
