# Example 3: Agentic Call Assistant

This worked example applies the [four steps for AI developers](https://govtech-responsibleai.github.io/arc-v2-draft/implementation/for-ai-developers/) to one system.

Agentic call assistants handle customer phone inquiries, answer questions about products and services, and perform simple transactional operations like appointment scheduling and booking modifications. These systems operate in real-time conversational contexts requiring natural language understanding, access to customer databases, and integration with booking systems. This example demonstrates framework application with higher risk appetite (threshold: Impact ≥4 AND Likelihood ≥3), appropriate for organisations prioritising rapid deployment and customer experience over defence-in-depth.

## Step 1: Identify Capabilities

The agentic call assistant comprises four specialised agents:

| Agent Type | Agent Name | Task |
|------------|-----------|------|
| Core Orchestration | Conversation Manager | Routes customer requests to appropriate specialised agents and maintains conversation context |
| Information Retrieval | Knowledge Agent | Retrieves product information, policies, and FAQs from knowledge bases to answer customer queries |
| Transaction Management | Booking Agent | Accesses appointment systems to check availability, create new bookings, and modify existing appointments |
| Customer Data | Profile Agent | Retrieves customer information including contact details, booking history, and preferences |

Based on the capability taxonomy, this system demonstrates:

| Category | Capability | Explanation |
|----------|-----------|-------------|
| Cognitive | CAP-01: Planning and Goal Management | The Conversation Manager plans multi-step interactions (e.g., "reschedule appointment" → check existing booking, find availability, confirm new time, update system). |
| Cognitive | CAP-02: Agent Delegation | The Conversation Manager assigns tasks to specialized agents (Knowledge Agent, Booking Agent, Profile Agent) based on query type. |
| Interaction | CAP-04: Multimodal Understanding and Generation | All agents process natural language queries and generate conversational responses; system handles phone audio transcription. |
| Interaction | CAP-06: Business Transactions | The Booking Agent autonomously creates, modifies, and cancels appointments — binding service commitments made on the organisation's behalf. |
| Interaction | CAP-09: Other Programmatic Interfaces | The Booking Agent integrates with appointment scheduling APIs; Profile Agent queries CRM systems. |
| Operational | CAP-11: File and Data Management | The Knowledge Agent retrieves from product documentation and policy databases; Profile Agent accesses customer records. |

## Step 2: Evaluate Risks

We identify risks from baseline components and capabilities, assessing likelihood and impact given the call assistant context. **Assuming organisational relevance threshold requires both impact ≥4 AND likelihood ≥3** (higher risk appetite), we identify the following priority risks:

**Priority Risks (Impact ≥4, Likelihood ≥3):**

| Risk ID | Element | Risk Statement | Assessment |
|---------|---------|----------------|------------|
| RISK-028 | CAP-04 (Multimodal Understanding) | Generation of non-factual or hallucinated content | **[Impact: 4, Likelihood: 4]** Hallucinating incorrect product information, pricing, or policies could mislead customers into incorrect decisions or create contractual disputes. |
| RISK-032 | CAP-06 (Business Transactions) | Unauthorised execution of business transactions | **[Impact: 5, Likelihood: 3]** Agent may create, modify, or cancel appointments without proper customer authorisation if it misinterprets conversational intent. |
| RISK-043 | CAP-11 (File & Data Management) | Exposure of sensitive data through file or database access | **[Impact: 4, Likelihood: 3]** Agent may inadvertently disclose another customer's personal information (contact details, booking history) if customer identification fails or database queries retrieve wrong records. |

**Risks Below Threshold (Impact <4 or Likelihood <3):**

| Risk ID | Element | Risk Statement | Assessment | Why Not Priority |
|---------|---------|----------------|------------|------------------|
| RISK-002 | CMP-01 (LLM) | Insufficient alignment of LLM behaviour | **[Impact: 4, Likelihood: 2]** Modern LLMs with strong safety training are unlikely to catastrophically misalign in customer service contexts. | Likelihood too low |
| RISK-007 | CMP-03 (Tools) | Lack of input sanitisation | **[Impact: 3, Likelihood: 3]** Tool injection could manipulate responses but unlikely to cause severe customer harm in this context. | Impact too low |
| RISK-047 | Lethal trifecta (combination rule) | Data exfiltration through combined access to untrusted content, sensitive data, and an outbound channel | **[Impact: 4, Likelihood: 2]** A caller could try to talk the assistant into reading out another customer's records, but the agents can reach only the verified caller's own records and can send data only to that caller and the booking system. | Likelihood too low |

*(Additional risks documented but not shown here for brevity)*

**How the capabilities are used.** Business Transactions is used at *act alone*: the Booking Agent creates and changes bookings without staff approval, and bookings can be restored for 30 days, so its effects are reversible. Other Programmatic Interfaces is used at *act alone*, on the organisation's own booking and CRM systems. File and Data Management is used at *read*. Neither conditional component is present. Its profile is in [`examples/systems/call-assistant.yaml`](https://github.com/govtech-responsibleai/arc-v2-draft/blob/main/examples/systems/call-assistant.yaml).

**Combination check.** The lethal trifecta is *possible*: File and Data Management supplies sensitive data and Business Transactions supplies an outbound channel, while untrusted content depends on the deployment. It is confirmed here, because callers are members of the public. RISK-047 applies, and CTRL-0097 is implemented (see RISK-047 below). Oversight within reach is *not present*.

## Step 3: Implement Controls

<!-- arc:example call-assistant risks=46 level0=31 lethal-trifecta=possible oversight-within-reach=not-present -->
This system has 46 applicable risks: 22 baseline, 20 from single capabilities, and four from combinations (the three multi-agent risks that Agent Delegation brings in, and RISK-047 from the lethal trifecta rule). RISK-041 is left out because the system only reads its data stores. The 46 risks carry 31 Level 0 controls, all implemented as-is even under the higher risk appetite — the appetite affects only which Level 1 and 2 controls are taken up. For the three priority risks we implement:

| Risk ID | Selected Controls | Implementation |
|---------|-------------------|----------------|
| RISK-028 | **CTRL-0049** (Level 0): Implement UI/UX cues for hallucination risk<br>**CTRL-0048** (Level 2): Implement methods to reduce hallucination rates | • Implement RAG using verified product catalogue and policy database (updated daily)<br>• Add audio disclaimer at call start: "Information provided is for reference only; verify critical details with documentation"<br>• Include citations in call transcripts showing which knowledge base articles informed responses |
| RISK-032 | **CTRL-0056** (Level 0): Require explicit human confirmation for transactions outside pre-authorised limits<br>**CTRL-0058** (Level 0): Restrict agents to proposing transactions using separate controller<br>**CTRL-0094** (Level 0): Measure the quality of human oversight | • No booking change is pre-authorised, so every change needs the caller's verbal confirmation: "I'll change your appointment to [date/time]. Please confirm by saying 'yes' or 'confirm'"<br>• Record confirmation audio for audit trail<br>• Use dedicated transaction controller API that validates all booking operations independently and rejects any change without a recorded confirmation<br>• Booking Agent cannot directly modify databases; only submits requests to controller<br>• Track confirmation rates and changes reversed shortly after confirmation; review a monthly sample of calls |
| RISK-043 | **CTRL-0047** (Level 0): Implement output guardrails to detect and redact PII<br>**CTRL-0082** (Level 2): Do not grant access to PII unless required | • Implement output guardrails that redact phone numbers, email addresses, and full addresses before agent responds<br>• Restrict Profile Agent access to current caller's records only (enforce via customer ID verification)<br>• Log all customer data access attempts with caller ID matching validation<br>• Block queries requesting data for different customer IDs<br>• CTRL-0082 is a Level 2 control adopted deliberately: customer PII is the system's main exposure |

The below-threshold risks still contribute their Level 0 controls. Two examples from the table above:

| Risk ID | Level 0 controls carried regardless of score | Implementation |
|---------|----------------------------------------------|----------------|
| RISK-002 | **CTRL-0007**: Log all LLM inputs and outputs<br>**CTRL-0038**: Safety verification before deployment and on a cadence | • Call transcripts and model outputs logged with the call ID<br>• Scripted adversarial calls (social-engineering and injection attempts) run before launch and monthly |
| RISK-047 | **CTRL-0062**: Input guardrails to detect prompt injection<br>**CTRL-0083**: Disallow unknown or external files unless scanned<br>**CTRL-0089**: Default-deny network egress for agent runtimes<br>**CTRL-0097**: Do not give one agent untrusted content, sensitive data, and an unrestricted outbound channel at once | • Call transcripts pass through an injection detector before they reach the agents<br>• The assistant accepts no files from callers<br>• Agent runtimes can reach only the booking API, the CRM, and the knowledge base<br>• The combination is broken on two legs: the Profile Agent can read only the verified caller's own records, and the only outbound channels are the call itself and booking fields validated against a fixed schema |

## Step 4: Assess Residual Risks

After implementing controls, key residual risks remain:

| Risk ID | Residual Risk Description | Mitigation Strategy |
|---------|---------------------------|---------------------|
| RISK-028 | **Product Information Drift**: Knowledge base may contain outdated information if not regularly updated, leading to incorrect customer guidance despite RAG grounding. | • Establish weekly knowledge base update process with product team sign-off<br>• Monitor customer complaints about inaccurate information<br>• Maintain version tracking for knowledge base updates<br>• Accept: Some lag between product changes and knowledge base updates is acceptable |
| RISK-032 | **Ambiguous Verbal Confirmation**: Customer may say "yes" to general conversation rather than specific booking confirmation, leading to unintended changes. | • Require agent to state exact action before confirmation request<br>• Monitor for unusual booking modification patterns (e.g., high cancellation rates)<br>• Accept: Clear verbal confirmation protocol is sufficient given low-stakes nature of appointment changes |
| RISK-043 | **Customer Identification Errors**: Phone number-based identification may fail if caller uses different number, potentially exposing previous customer's data. | • Implement secondary verification (date of birth, booking reference) for sensitive requests<br>• Log all identification failures and review monthly<br>• Accept: Rare misidentification events acceptable given low sensitivity of booking data |
| RISK-007 | **Tool Output Manipulation**: Booking system responses could theoretically contain injected instructions if compromised. | • Monitor booking API responses for anomalies<br>• Accept: Internal booking system is trusted; risk of compromise considered low<br>• No additional controls warranted given risk appetite |

These residual risks and mitigation strategies will be reviewed quarterly, with accelerated review if customer complaint rates exceed 2% of total calls or booking error rates exceed 0.5%.
