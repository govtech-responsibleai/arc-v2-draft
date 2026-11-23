# RISK-039 · Production or execution of poor or ineffective code

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-039/

This risk arises when an agent generates or executes code that is incorrect, inefficient, insecure, or unsuitable for the intended task. As a result, the code may fail to achieve desired outcomes, introduce bugs or vulnerabilities, or cause operational disruptions when deployed or run.

- Arises from: Code Execution (CAP-10)
- Failure mode: Agent Error
- Type: Security
- Hazards: Application (HZ-02)

## Controls

- CTRL-0069 (Level 0): Run agent-generated code only in isolated compute environments with network access blocked by default
- CTRL-0071 (Level 0): Use static code analysers to detect security vulnerabilities and code quality issues
- CTRL-0068 (Level 1): Use code linters to screen generated code for bad practices and poor syntax
- CTRL-0070 (Level 1): Review all agent-generated code before execution
- CTRL-0072 (Level 1): Monitor runtime and memory consumption of agent-generated code

## Crosswalks

- owasp_asi: ASI05
- owasp_agentic_threats: T11
- mitre_atlas: 

## Sources

- https://www.usenix.org/system/files/conference/usenixsecurity25/sec25cycle1-prepub-742-spracklen.pdf
- https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/
- https://proceedings.neurips.cc/paper_files/paper/2024/hash/bfd082c452dffb450d5a5202b0419205-Abstract-Datasets_and_Benchmarks_Track.html
