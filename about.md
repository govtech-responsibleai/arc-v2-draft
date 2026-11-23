# About ARC

**The ARC Framework is a technical governance framework for identifying, assessing, and mitigating safety and security risks in agentic AI systems.** The framework provides:

- A hierarchical capability taxonomy for classifying agentic system capabilities
- A structured risk mapping distinguishing component, design, and capability-specific risks
- Technical control specifications with risk-to-control mappings
- An implementation methodology for organisational adoption and per-system assessment

New to ARC? Start with [ARC in five minutes](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/in-five-minutes/). What changed in each version of the register is in the [Changelog](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/changelog/).

> **Draft for review**
>
> This site is draft 1 of ARC 2.0 (23 November 2026). It is not the published framework, which is [version 1.3.0](https://govtech-responsibleai.github.io/agentic-risk-capability-framework/). Please do not cite or adopt it. [How to read and comment on this draft](https://github.com/govtech-responsibleai/arc-v2-draft#readme).

> **What's new — register v2.0 (draft)**
>
> Version 2.0 changes the model. An assessment or a contextualised register written against 1.x needs migrating; the [changelog](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/changelog/#v2-0-0) says how.
>
> - **How a capability is used**: each capability that acts on the world is recorded with its [authority, reversibility and reach](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/elements/#context-how-a-capability-is-used), so an assistant that drafts a payment and an agent that pays by itself no longer get the same risks and controls
> - **Protocols** is a fifth component, for connections to tool servers and agents that another party builds or operates; it and Memory are conditional, so their risks apply only to systems that have them
> - **Combination rules** bring a risk into scope whenever a system's capabilities can complete a [dangerous combination](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/capability-combinations/), whichever capabilities supply the parts
> - **Six failure modes**, separating an agent's mistakes from goal-directed misbehaviour, and adding safeguard failure and misuse by the principal
> - **Twelve new risks**, written from a curated file of 366 incidents, covering instruction files, agent credentials, provider dependence, agents that work around their limits, and more
> - **Every control** says where it is enforced, who owns it, what evidence shows it is in place and how to test it, and cites its sources
> - **Overlays** let an organisation keep its own version as one file of changes
> - **Two more crosswalks**: MITRE ATLAS and the Five Eyes guidance on agentic AI

> **Earlier — register v1.3, November 2026**
>
> - **Capability combinations**: a new [page](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/capability-combinations/) on risks that arise only when capabilities are held together, with a check that reads a system's capabilities and reports whether the lethal trifecta (untrusted content, sensitive data, and an outbound channel) is present; a new Level 0 control, CTRL-0097, requires breaking that combination; and a new risk, RISK-055, covers data exfiltration by agents that handle messages, such as email assistants
> - **One rule for Level 0**: a Level 0 control applies wherever its risk is applicable, whatever the risk's impact and likelihood score, and is waived only when the capability or component it concerns is not present; each Level 0 control now matches its subject, so CVE scanning applies only where code runs, tool authentication covers every remote tool, and the memory-write controls concern persistent memory
> - **Human approval as a floor**: human approval of business transactions outside pre-authorised limits, of sensitive official communications, and of deletions that cannot be undone is now Level 0, together with least privilege and checking that approvals remain real decisions; copyright guardrails and code linters move to Level 1
> - **Risks apply where they arise**: multi-agent risks now apply only to systems in which more than one agent works on a task, including agents operated by other organisations, and the sandbox-escape risk only to systems that can execute code, so simpler systems no longer carry Level 0 controls that cannot apply to them
> - **New risks, hazards and crosswalks**: eight risks and eight controls from the 2026 evidence base, including the first risk that arises from a combination of elements; the hazards each risk results in; and crosswalks to the [OWASP Top 10 for Agentic Applications](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/), OWASP's agentic threat taxonomy, the [CSA Securing Agentic AI Addendum](https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/), and [IMDA's Model AI Governance Framework for Agentic AI](https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf)
> - **A corrected, versioned register**: the links between controls and risks were checked and corrected, and the register now carries a version that can be cited and pinned; every change is in the [Changelog](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/changelog/)
> - **Readable by AI agents**: a [full-text register](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/register-full-text/) with a link for every risk and control, and an [`llms.txt`](https://govtech-responsibleai.github.io/arc-v2-draft/llms.txt) index for agents
> - **ARC assessment skill**: an [Agent Skill](https://github.com/govtech-responsibleai/arc-v2-draft/tree/main/skills) that lets a coding agent assess the system it is building against the register
>
> Earlier (December 2025): the [introduction](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/introduction/) with design rationale and literature review, the unified [Elements](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/elements/) page, the [interactive register](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/risk-register/), the [ARCvisor](https://govtech-responsibleai.github.io/arc-v2-draft/resources/#arcvisor) tool, and the two technical papers in [Resources](https://govtech-responsibleai.github.io/arc-v2-draft/resources/).

## Referenced By

The ARC framework has been mentioned in:

* [Opening Address by SMS Tan Kiat How at GovTech's STACK Conference 2026](https://www.tech.gov.sg/media/opening-address-by-sms-tan-kiat-how-at-govtech-stack-conference-2026-day-2/) (5 November 2026)
* [Cyber Security Agency of Singapore's Securing Agentic AI — An Addendum to the Guidelines and Companion Guide on Securing AI Systems](https://www.csa.gov.sg/resources/publications/addendum-on-securing-ai-systems/) (finalised 17 June 2026), which adopts ARC's twelve capabilities as its organising taxonomy
* [IMDA's Model AI Governance Framework for Agentic AI](https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf), which lists ARC under both risks and technical controls
* [Opening Address by Minister Josephine Teo at HLP (AI) on 22 Oct 2025](https://www.csa.gov.sg/news-events/speeches/opening-address-by-minister-josephine-teo-at-hlp--ai--on-22-oct-2025/#:~:text=20.%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%C2%A0%20First%2C%20we,can%20trust%20autonomy.)
* [AI Agents and Global Governance: Analyzing Foundational Legal, Policy, and Accountability Tools by Talita Dias (Partnership on AI)](https://partnershiponai.org/wp-content/uploads/2025/09/agents-policy-analysis.pdf)
* [Engineering responsible AI: How Singapore builds trust in emerging technologies by GovTech Singapore](https://www.tech.gov.sg/technews/engineering-responsible-ai/)

## About the Authors

The ARC Framework is developed by the Responsible AI team in GovTech Singapore's AI Practice. We develop deep technical capabilities in Responsible AI to improve how the Singapore government develops, evaluates, deploys, and monitors AI systems in a safe, trustworthy, and ethical manner.

In developing this framework, we work closely with other teams in the Singapore government, such as the Ministry for Digital Development and Information, the Cybersecurity Agency of Singapore, and the Infocomm Media Development Authority. We are grateful for their feedback and contributions, which have helped to make this framework more effective, robust, and thorough.

To reach out to us, please fill out the Google form <a href="https://forms.gle/KoXecxDuPHf8izP2A" target="_blank">here</a>.

## Citation

The framework paper was published in the main track of IASEAI'26, the Second Conference of the International Association for Safe and Ethical Artificial Intelligence. To cite this work, please use the following BibTeX citation:

```
@inproceedings{khoo2026arc,
    title         = {With Great Capabilities Come Great Responsibilities: Introducing the Agentic Risk \& Capability Framework for Governing Agentic AI Systems},
    author        = {Khoo, Shaun and Foo, Jessica and Lee, Roy Ka-Wei},
    booktitle     = {Second Conference of the International Association for Safe and Ethical Artificial Intelligence (IASEAI'26)},
    note          = {Main track},
    year          = {2026},
    eprint        = {2512.22211},
    archivePrefix = {arXiv},
    url           = {https://arxiv.org/abs/2512.22211}
}
```

Alternatively, you may use the APA-formatted citation below:

> Khoo, S., Foo, J., & Lee, R. K.-W. (2026). With great capabilities come great responsibilities: Introducing the Agentic Risk & Capability Framework for governing agentic AI systems. In *Second Conference of the International Association for Safe and Ethical Artificial Intelligence (IASEAI'26)*, main track. <https://arxiv.org/abs/2512.22211>

To cite the framework website directly (e.g., for the Risk Register rather than the paper):

> GovTech Singapore (2025) Agentic Risk & Capability Framework. URL <https://govtech-responsibleai.github.io/arc-v2-draft/>
