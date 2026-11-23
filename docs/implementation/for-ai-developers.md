---
description: "How to assess an agentic system with ARC in four steps: identify capabilities, evaluate risks, implement controls, and assess residual risk."
---

# For AI Developers

!!! abstract "Page Summary"

    This page guides system-level application of the ARC Framework to individual agentic AI systems. Development teams follow a four-step methodology: identify capabilities, evaluate risks, implement controls, and assess residual risks. Teams typically complete this process within 3-7 days for simple systems or 1-2 weeks for complex systems.

This guide is for development teams applying the ARC framework to specific agentic AI systems. Your goal is to systematically identify capabilities, evaluate relevant risks, implement appropriate controls, and assess residual risks for your system.

---

## Four-Step Process

The ARC Framework application follows four sequential steps:

* **Step 1: Identify Capabilities** → Analyse your system's autonomous functions and map to capability taxonomy
* **Step 2: Evaluate Risks** → Review component, design, and capability risks; apply relevance criteria
* **Step 3: Implement Controls** → Contextualise recommended controls to your implementation
* **Step 4: Assess Residual Risks** → Document remaining risks and mitigation strategies

!!! tip "Iterative Application"
    Revisit these steps as your system evolves or new capabilities are added. The framework is designed for continuous risk management, not one-time assessment.

## Step 1: Identify Capabilities

Analyse your agentic AI system's capabilities using [the capability taxonomy](../arc_framework/elements.md#capabilities) or your organisation's contextualised version.

**Key principle:** Capabilities are defined system-level—if any agent has a capability, the entire system has that capability.

For each capability that acts on the world, also record **how the system uses it**: its authority (read, propose, act with approval, or act alone), whether its effects are irreversible, and whether they reach outside the organisation. See [Context](../arc_framework/elements.md#context-how-a-capability-is-used). Some risks apply only above a certain authority, and some controls are stricter when an agent acts alone. Where you cannot establish a fact, assume the most cautious case.

!!! tip "Quick Capability Identification"
    Map each function your system performs to specific capabilities:

    - Sends emails to customers → **Official Communication**
    - Executes Python/JavaScript code → **Code Execution**
    - Searches Google/web → **Internet & Search Access**
    - Reads/writes database records → **File & Data Management**
    - Processes refunds or payments → **Business Transactions**
    - Modifies system config or cloud resources → **System Management**

    If unsure whether a function qualifies as a capability, err on the side of inclusion—better to assess an extra risk than miss a critical one.

??? question "Common Capability Identification Mistakes"

    - **Multi-agent systems:** Only considering main agent's capabilities instead of system-level view
    - **Read-only tools:** Ignoring that reading data can still expose PII or enable reconnaissance
    - **Tool vs capability confusion:** Listing tools available rather than what the system autonomously DOES

    Always analyse system-level capabilities holistically and assess all tools comprehensively.

## Step 2: Evaluate Risks

For each identified capability, map specific risks using [the ARC Framework's risk register](../arc_framework/risk-register.md) or your organisation's contextualised version. **Always include baseline risks** from components (LLM, tools, instructions, memory) and design (architecture, access controls, monitoring).

**Review process:**

1. **Baseline risks** — risks that arise only from the components and design elements that every agentic system has, so they apply regardless of capabilities. Two components, Memory and Protocols, are conditional: their risks apply only if the system keeps information beyond a session, or connects to another party's tool servers or agents through an agent protocol (see [Elements](../arc_framework/elements.md#components))
2. **Capability-specific risks** — for each capability identified in Step 1. A *composite* risk (one that lists several elements, shown joined with "+" in the register) applies only when your system has **all** of them: for example, RISK-047 (data exfiltration through untrusted content, sensitive data, and an outbound channel) applies to any system that both browses the web (CAP-07) and handles files or data (CAP-11). Likewise, the multi-agent risks (RISK-012, RISK-013, RISK-051) arise from the agentic architecture together with Agent Delegation (CAP-02), so they apply only when more than one agent works on a task, including agents operated by other parties
3. **Check capability combinations** — some risks arise only when a system holds several capabilities at once. First, look at the capabilities your declared ones give the system: code execution, computer use, system management and delegation can each bring others with them, and you either add those or record why they do not apply. Then, for each combination rule the register defines, see which of your capabilities supply each role and record the verdict: *present*, *possible*, or *not present*. Register 2.0 defines one rule, the lethal trifecta: untrusted content, sensitive data, and an outbound channel. A rule that is present or possible brings RISK-047 into scope, and CTRL-0097 must be implemented unless you show that a role is absent. See [Capability combinations](../arc_framework/capability-combinations.md) for the table and an interactive check
4. **Contextualise to your use case** — define domain-specific terms and focus on critical scenarios
5. **Apply relevance criteria** — score Impact and Likelihood (1–5) for each applicable risk, and mark as *priority* those that meet the threshold set by your governance team (see [Define Relevance Criteria](for-governance-teams.md#step-4-define-relevance-criteria)). Scoring decides where Level 1 and Level 2 effort goes; **it does not switch off Level 0 controls** (see Step 3)

!!! note "Applicable versus priority"

    A risk is **applicable** when its element(s) are present in your system: every baseline risk, plus each capability risk whose capabilities you identified in Step 1. A risk is a **priority** when its Impact and Likelihood scores meet your organisation's threshold. Level 0 controls attach to *applicable* risks; scoring only prioritises Levels 1 and 2.

!!! tip "Prioritising Risks Effectively"

    High-stakes domains warrant extra scrutiny — for example, healthcare systems must treat hallucinated medical facts as a serious hazard, finance systems should prioritise preventing unauthorised transactions, and legal workflows must guard against unqualified legal advice. Across domains, common high-impact risks include unauthorised or incorrect transaction execution, PII exposure or leakage, malicious code injection where code execution is possible, and prompt injection via untrusted web content when internet access is enabled.

??? example "Component and Design Risks Often Overlooked"

    Many teams focus only on capability risks and miss critical baseline issues:

    **Component Risks:**

    - LLM insufficient capability for complex reasoning tasks
    - Tool weak authentication (API tokens too permissive)
    - Ambiguous instructions (agents fill gaps unpredictably)
    - Memory contamination (hallucinations saved to knowledge base)

    **Design Risks:**

    - Linear pipeline error propagation
    - Lack of audit trails for debugging
    - Excessive privileges granted to agent roles
    - No monitoring for anomalous behaviour

## Step 3: Implement Controls

For each relevant risk from Step 2, review recommended [technical controls](../arc_framework/controls.md) provided in the framework. Contextualise controls to your specific implementation—not all controls are equally critical, and teams must exercise judgement in adapting controls to meaningfully address risks.

### Understanding Control Levels

The ARC framework recommends controls at different levels of priority, and teams should apply differentiated treatment based on risk severity and organisational context:

<table>
  <thead>
    <tr style="background-color: #e3f2fd;">
      <th>Control Level</th>
      <th>Context</th>
      <th>Expectation</th>
      <th>Examples</th>
      <th>Review Process</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Level 0: Cardinal Controls</strong></td>
      <td>Every applicable risk, regardless of its score</td>
      <td>Must be adopted as-is; waived only if the capability or component it concerns is not present</td>
      <td>Authentication for transaction APIs, audit logging for sensitive operations, input validation for code execution</td>
      <td>Implementation verified before deployment; blockers escalated to the governance team</td>
    </tr>
    <tr>
      <td><strong>Level 1: Standard Controls</strong></td>
      <td>Priority risks; adopt or adapt to your implementation</td>
      <td>Adopt or adapt meaningfully; exercise engineering judgement on feasibility</td>
      <td>Rate limiting for API calls, output guardrails for content quality, human review for edge cases</td>
      <td>Team-level decision with documented rationale</td>
    </tr>
    <tr>
      <td><strong>Level 2: Best Practice Controls</strong></td>
      <td>Good to consider, especially for high-risk systems</td>
      <td>Consider based on risk appetite and available resources, especially for high-risk systems</td>
      <td>Advanced monitoring dashboards, red team testing, redundant safety layers</td>
      <td>Optional; prioritise based on organisational maturity</td>
    </tr>
  </tbody>
</table>

Level 0 controls are mandatory for every **applicable** risk. A risk that scores below your threshold still carries its Level 0 controls, because they are the floor without which the risk is unmitigated — scoring never waives them. A Level 0 control is waived only when the capability or component it concerns is not present in your system (for example, a control on MCP servers when you use none, or on persistent memory when your system keeps nothing beyond a session); record the waiver with evidence. Levels 1 and 2 are where scoring matters: apply them to priority risks proportionate to severity, or as your governance team specifies. The three levels are defined once, in [Controls for agentic systems](../arc_framework/controls.md#control-levels); this table restates them for developers.

!!! tip "Contextualising Controls"

    Although the controls in the organisation's risk register would have been contextualised by the governance teams, they may need additional adaptation to your specific use case or implementation. Below are examples showing the full progression from framework baseline to organisation context to system-specific adaptation:

    ???+ example "Example 1: Output Safety Guardrails"
        **Framework Baseline:** "Implement output safety guardrails to detect and prevent generation of undesirable content"

        **Organisation Control (from Governance Team):** "Use Azure Content Safety API with toxicity threshold >0.7, sexual content threshold >0.6; block flagged outputs and log violations to Application Insights"

        **System-Specific Adaptation (by Development Team):** "For customer-facing chatbot: Use Azure Content Safety API with toxicity >0.5 (stricter than org baseline due to external users), sexual >0.6, violence >0.6; block and return templated 'I cannot help with that' response; log to Application Insights with customer_id tag for support escalation"

    ??? example "Example 2: Human Approval Workflows"
        **Framework Baseline:** "Require human approval before executing high-impact actions"

        **Organisation Control (from Governance Team):** "Require manager approval via Slack workflow for transactions >$1,000; auto-approve lower amounts with email notification"

        **System-Specific Adaptation (by Development Team):** "For automated refund agent: Require approval via Slack for refunds >$500 (lower than org threshold due to fraud risk in refunds); include customer history and refund reason in approval request; auto-approve ≤$500 only for customers with >6 months history and <3 refunds in past year; otherwise escalate to supervisor"

    ??? example "Example 3: Hallucination Reduction"
        **Framework Baseline:** "Implement methods to reduce hallucination rates in agent outputs"

        **Organisation Control (from Governance Team):** "Use RAG with organisation-verified knowledge bases; disable LLM parametric knowledge for policy/compliance questions; add UI disclaimers on critical information"

        **System-Specific Adaptation (by Development Team):** "For HR policy assistant: Use RAG with HR policy database (updated weekly by HR team); restrict LLM to only answer from retrieved documents (block answers with <0.8 retrieval confidence); add disclaimer on all policy responses: 'Please verify critical details with your HR representative'; include source citations with document name and last-updated date"

    This progression from generic to organisation-specific to system-specific makes controls increasingly actionable and measurable.

## Step 4: Assess Residual Risks

Assess residual risks after controls are implemented. Consider where harm can still occur and what control limitations exist. If residual risks remain unacceptable, implement additional controls to reduce likelihood or impact.

For each implemented control, ask: **What failure scenarios does this control not prevent?** Think through attack vectors the control doesn't cover (e.g., "guardrails detect known patterns but miss novel encoding attacks"), conditions where it fails (e.g., "human approval fails if malicious requests appear legitimate"), and underlying assumptions (e.g., "RAG assumes knowledge base accuracy—fails if sources contain errors"). Re-assess each failure scenario's impact and likelihood to determine if the residual risk is acceptable.

Record the whole assessment — capabilities, applicable risks with scores, controls with their implementation status and evidence, residual risks, and sign-off — using the [Assessment Template](assessment-template.md). For residual risks you accept, **document the specific failure scenario, your chosen strategy (accept, monitor, or mitigate), and concrete actions with measurable thresholds**. Examples: "Accept hallucinations in casual conversation—users understand chatbot limitations"; "Monitor injection attempts via logs, alert if >10/day, maintain <0.1% exploitation rate"; "Mitigate advanced injection through weekly review of flagged conversations + quarterly red team testing".

!!! warning "When Residual Risks Are Too High"

    Review with senior stakeholders if you identify **catastrophic residual risk** (Impact 5, even if low likelihood), **regulatory exposure** where residual risk violates compliance requirements, or **no mitigation strategy** where risk is documented but there's no plan to manage it.

    When risks remain unacceptable, consider adding stronger controls (not just more controls), reducing the system's capability scope, adding human-in-the-loop requirements, limiting the deployment context (e.g., pilot vs. full production), or deferring deployment until better controls become available.

---

## Application Examples

Below are practical examples showing how the framework applies to different system types.

### Example 1: Agentic Fact Checker

Fact-checking is a time-consuming process requiring deep analysis of claims, evidence, and their sufficiency. Our colleagues in the AI Practice recently developed an agentic fact-checking system (read their [Agentic AI Primer](https://playbooks.aip.gov.sg/agentic-ai-primer/09_applications_for_singapore_govt/) for details), using a complex multi-agent architecture to validate the veracity of any claim.

Read the [worked example: Agentic Fact Checker](examples/fact-checker.md).

### Example 2: Agentic Coding Assistant

Agentic coding assistants like Cursor and Claude Code help developers write, debug, and refactor code by autonomously reading codebases, executing commands, and modifying files. These systems typically employ multi-agent architectures with specialized agents for different coding tasks, requiring careful risk management given their access to sensitive codebases and ability to execute arbitrary code.

Read the [worked example: Agentic Coding Assistant](examples/coding-assistant.md).

### Example 3: Agentic Call Assistant

Agentic call assistants handle customer phone inquiries, answer questions about products and services, and perform simple transactional operations like appointment scheduling and booking modifications. These systems operate in real-time conversational contexts requiring natural language understanding, access to customer databases, and integration with booking systems. This example demonstrates framework application with higher risk appetite (threshold: Impact ≥4 AND Likelihood ≥3), appropriate for organisations prioritising rapid deployment and customer experience over defence-in-depth.

Read the [worked example: Agentic Call Assistant](examples/call-assistant.md).

All three are collected under [Worked examples](examples/index.md).
