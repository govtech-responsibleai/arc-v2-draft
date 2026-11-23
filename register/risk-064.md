# RISK-064 · Harm from a connected tool server or agent to the system that connects to it

ARC risk register 2.0.0-draft.1. https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-064/

This risk arises when a tool server or agent that another party builds or operates attacks the system that connects to it, or fails in a way that damages it. The connection itself is the route: a malicious server can abuse the protocol's authorisation or discovery steps to run commands on the connecting machine, obtain credentials meant for other services, or pose as a trusted server, and a faulty shared server can deliver one client's results to another. RISK-006 covers a connected party misleading the agent through what it says about itself; this risk covers harm that needs no cooperation from the model at all. As a result, connecting to a server can compromise the host, its credentials, or other users' data, as when a malicious tool server could run commands on any machine that connected to it through a widely used client, and a race condition in a protocol library sent tool results to the wrong client.

- Arises from: Protocols (CMP-05)
- Failure mode: External Manipulation
- Type: Security
- Hazards: Data (HZ-01), Application (HZ-02), Identity and access management (HZ-04)

## Controls

- CTRL-0009 (Level 0): Use only tool servers and APIs, including MCP servers, that implement robust authentication mechanisms in production environments
- CTRL-0013 (Level 0): Test all untested MCP servers in a sandboxed environment before deploying to production
- CTRL-0091 (Level 0): Require verified provenance for tools, skills, and dependencies, and re-verify them on every update
- CTRL-0096 (Level 0): Harden agent frameworks and runtimes before exposing them, and patch framework vulnerabilities promptly
- CTRL-0010 (Level 1): Use only MCP servers that validate credentials on every inbound request
- CTRL-0031 (Level 1): Use only MCP servers that validate token provenance and prohibit unauthorised token passthrough
- CTRL-0012 (Level 2): Use only MCP servers that integrate with authorisation servers implementing per-client consent mechanisms

## Crosswalks

- owasp_asi: ASI04, ASI07
- owasp_agentic_threats: T16, T17
- mitre_atlas: AML.T0010.005, AML.T0011.002

## Sources

- https://jfrog.com/blog/2025-6514-critical-mcp-remote-rce-vulnerability/
- https://vulnerablemcp.info/vuln/cve-2026-25536-sdk-cross-client-data-leak.html
- https://www.pillar.security/blog/open-and-shut-remote-code-execution-in-opencode-via-mcp-oauth
- https://github.com/advisories/GHSA-jm63-cq47-j5jp
