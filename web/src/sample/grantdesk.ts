// The GrantDesk sample: a grant-processing agent at an example agency, part-way through revision 2 of its assessment.
// Revision 1 was signed in November 2025 against register 1.1.0 (RISK-001 to 046, CTRL-0001 to 0088). Revision 2
// was opened from the file the ARC skill wrote after reading the code, under whatever register this build bundles.
// Everything here is fictional.
import {
  applicableRisks, blankAssessment, controlsInScope, isChosen, residualItems,
  type Assessment, type Authority, type CodeCheck, type Excerpt, type Register, type Thread, type Verdict,
} from 'arc-core';
import raw from './grantdesk.json';

interface CannedCap { present: string; reason: string; providedBy?: string; approval?: string; lastYear?: string }
interface CannedRisk { context: string; impact: number; likelihood: number }
interface CannedResidual { scenario: string; actions: string; impact: number; likelihood: number }

const S = raw.grantdesk;
const caps = S.caps as Record<string, CannedCap>;
const risks = S.risks as Record<string, CannedRisk>;
const teamHow = S.controls as Record<string, string>;
const residual = S.residual as Record<string, CannedResidual>;
const Y = S.lastYear;
const adapted = Y.adapted as Record<string, string | null>;
const notAdopted = Y.notAdopted as Record<string, string>;
const repoChecks = S.repo.controls as unknown as Record<string, [string, string, string[]]>;

const COMMIT = '3f9c2e1';
const SKILL_RUN = '2026-11-18T09:30:00.000Z';
const idNum = (id: string) => Number(id.slice(5));
const present = (v: string) => v as 'yes' | 'unsure' | 'no';
const approval = (v?: string) => (v ? (v as 'always' | 'some' | 'never') : undefined);
const defined = <T extends object>(o: T): T => Object.fromEntries(Object.entries(o).filter(([, v]) => v !== undefined)) as T;

const REV1_ARCHITECTURE = 'Single agent calling a hosted LLM through the agency model gateway. Tools: document reader, business registry API client, web search, case-management database, and email drafting.';

const RISK_REASONS: Record<string, { impactReason: string; likelihoodReason: string; evidence: string[] }> = {
  'RISK-047': {
    impactReason: "Financial statements and directors' identity numbers for every open case could leave the agency at once.",
    likelihoodReason: 'Needs an injected instruction to get past the delimiters. EchoLeak and ForcedLeak show the pattern works on production agents.',
    evidence: ['agent/tools/web_search.py:40-44', 'infra/egress-allowlist.yaml:18-21', 'mcp/case_server/auth.py:40'],
  },
  'RISK-048': {
    impactReason: "A tampered package or MCP SDK release would run with the agent's credentials to every case.",
    likelihoodReason: 'Dependencies are pinned but not hashed, and nothing re-checks them when they load.',
    evidence: ['requirements.txt'],
  },
  'RISK-049': {
    impactReason: 'Tests in staging could act on live registry data and reach the internet.',
    likelihoodReason: 'Only red-team runs push the agent to its limits, and they are run by hand.',
    evidence: ['infra/staging.tf:40-50'],
  },
  'RISK-050': {
    impactReason: 'Officers would rely on a false account of which checks ran.',
    likelihoodReason: 'Needs goal-directed misreporting; nothing in the logs suggests it so far.',
    evidence: ['agent/graph.py'],
  },
  'RISK-051': {
    impactReason: 'Single agent today, so there is nothing to coordinate with.',
    likelihoodReason: 'Applies only if more agents are added.',
    evidence: [],
  },
  'RISK-052': {
    impactReason: 'Wrong summaries would reach funding decisions without anyone checking the sources.',
    likelihoodReason: 'Officers handle 30 to 50 cases a week, and the interface does not show sources by default.',
    evidence: [],
  },
  'RISK-054': {
    impactReason: "Anyone who reaches the debug UI could drive the agent with its credentials.",
    likelihoodReason: 'The debug UI is internal-only, but it is switched on in production.',
    evidence: ['agent/config.yaml:7', 'infra/k8s/deployment.yaml'],
  },
};

const EXCERPTS: Record<string, Excerpt[]> = {
  'CTRL-0089': [{
    path: 'infra/egress-allowlist.yaml', start: 9, highlight: [18, 21],
    lines: [
      'egress:', '  default: deny', '  allow:',
      '    - host: gateway.internal          # model gateway', '      ports: [443]',
      '    - host: registry-api.internal     # business registry', '      ports: [443]',
      '    - host: search-api.example.com    # search API', '      ports: [443]',
      '    # fetch_url reads applicant websites', '    - host: "*"', '      ports: [443]', '      tools: [fetch_url]',
    ],
  }],
  'CTRL-0062': [{
    path: 'agent/tools/documents.py', start: 12, highlight: [15, 16],
    lines: [
      'def read_document(case_id: str, doc_id: str) -> str:',
      '    """Extract text from an application document for the agent."""',
      '    blob = docs_client.get(case_id, doc_id)',
      '    text = extract_text(blob)       # PDF text layer, OCR for scans',
      '    return wrap_untrusted(text)     # delimiters only; no injection check',
    ],
  }],
  'CTRL-0092': [{
    path: 'infra/staging.tf', start: 40, highlight: [43, 49],
    lines: [
      'resource "egress_rule" "staging_all" {', '  environment = "staging"', '  direction   = "egress"',
      '  destination = "0.0.0.0/0"   # all outbound traffic', '  ports       = ["all"]', '}', '',
      'module "grantdesk_staging" {', '  source           = "./modules/agent"',
      '  registry_api_key = var.registry_api_key_prod   # the live key', '}',
    ],
  }],
};

const PROPOSALS: Record<string, string> = {
  'CTRL-0089': 'Allow fetch_url only for the website domains applicants declare on the form, resolved per case. Add a test that it refuses any other host, and log refusals as a sign of injection.',
  'CTRL-0062': "Run the gateway's prompt-injection classifier on extracted document text and fetched pages before they reach the model. Block the step and flag the case when it fires.",
  'CTRL-0092': 'Give staging its own default-deny egress and a test registry key, and run red-team cases only there.',
  'CTRL-0021': 'Limit write_case_note to a list of note types (eligibility finding, missing document, clarification sent), and reject notes that contain instructions.',
};

const THREADS: Record<string, Thread> = {
  'CTRL-0089': {
    resolved: false,
    comments: [
      { author: 'AI governance lead', role: 'Reviewer', at: '2026-11-20T06:10:00.000Z', text: 'The wildcard for fetch_url undoes this control. Please scope it to declared applicant domains before we sign revision 2.' },
      { author: 'Lead engineer', role: 'Assessor', at: '2026-11-20T07:05:00.000Z', text: "Agreed. We'll restrict fetch_url to the declared domains, then run the ARC skill again." },
    ],
  },
  'CTRL-0021': { resolved: false, comments: [{ author: 'AI governance lead', role: 'Reviewer', at: '2026-11-20T06:20:00.000Z', text: 'Which categories should case notes allow? List them in the entry.' }] },
  'RISK-052': { resolved: false, comments: [{ author: 'AI governance lead', role: 'Reviewer', at: '2026-11-20T06:25:00.000Z', text: 'Is 30 to 50 cases a week per officer still right? It drives the likelihood.' }] },
};

export function grantDeskSample(reg: Register, now: Date = new Date()): Assessment {
  const a = blankAssessment(new Date(Y.createdAt));
  a.sample = 'grantdesk';
  a.repoUrl = S.repo.url;
  a.pasted = S.pasted;

  // ---- Revision 1, as signed
  a.system = { ...S.system, architecture: REV1_ARCHITECTURE };
  for (const [c, x] of Object.entries(caps)) {
    a.caps[c] = defined({ present: present(x.lastYear ?? x.present), providedBy: x.providedBy, approval: approval(x.approval) });
  }
  const oldRisks = applicableRisks(reg, a).filter((r) => idNum(r) <= 46 && risks[r]);
  for (const r of oldRisks) a.risks[r] = { context: risks[r].context, impact: risks[r].impact, likelihood: risks[r].likelihood };
  const oldScope = controlsInScope(reg, a, oldRisks).filter((c) => idNum(c.id) <= 88);
  for (const c of oldScope) {
    if (notAdopted[c.id] && c.level > 0) a.controls[c.id] = { status: 'not-adopted', reason: notAdopted[c.id] };
    else if (c.group !== 'optional') {
      const isAdapted = c.level > 0 && c.id in adapted;
      a.controls[c.id] = { status: isAdapted ? 'adapted' : 'as-is', how: adapted[c.id] ?? teamHow[c.id] ?? Y.defaultHow, evidence: Y.evidence, owner: Y.owner };
    }
  }
  for (const i of residualItems(reg, a, oldScope)) {
    const x = residual[i.rid];
    const s = a.risks[i.rid];
    a.residual[i.rid] = x
      ? { scenario: x.scenario, strategy: 'mitigate', actions: x.actions, impact: x.impact, likelihood: x.likelihood, acceptedBy: Y.signoff.authority }
      : { scenario: Y.residualFallback, strategy: 'monitor', actions: Y.residualActions, impact: Math.max(1, (s?.impact ?? 2) - 1), likelihood: Math.max(1, (s?.likelihood ?? 2) - 1), acceptedBy: Y.signoff.authority };
  }
  a.signoff = { ...Y.signoff, decision: 'Approve with conditions' };
  a.basis = { version: Y.registerVersion, risks: oldRisks, controls: Object.fromEntries(oldScope.map((c) => [c.id, c.level])) };
  a.history = [{ revision: 1, signedAt: Y.signoff.signedAt, register: Y.registerVersion, decision: 'Approve with conditions' }];
  a.signedCopy = structuredClone({
    revision: 1, system: a.system, threshold: a.threshold, caps: a.caps, components: a.components, risks: a.risks, controls: a.controls, residual: a.residual, signoff: a.signoff,
  });

  // ---- Revision 2, opened from the ARC skill's file
  a.revision = 2;
  a.signoff = { assessor: Y.signoff.assessor, reviewer: Y.signoff.reviewer, authority: Y.signoff.authority };
  a.register = { version: reg.version.version, source: 'arc-risk-register' };
  a.updatedAt = now.toISOString();
  a.ai.source = 'ARC skill';
  a.ai.at = SKILL_RUN;

  // The skill's view of each capability; the assessor agreed with all of them, including CAP-04 now being unsure
  for (const [c, x] of Object.entries(caps)) {
    a.ai.caps[c] = defined({ present: present(x.present), reason: x.reason, providedBy: x.providedBy, approval: approval(x.approval), evidence: (S.repo.caps as Record<string, string[]>)[c] });
    a.prov[`cap.${c}`] = 'confirmed';
  }
  a.caps['CAP-04'] = { ...a.caps['CAP-04'], present: 'unsure' };

  // Register 2.0: how far each capability acts on its own, and the components only some systems have
  const context: Record<string, { authority?: Authority; irreversible?: boolean; external?: boolean }> = {
    'CAP-07': { authority: 'read' },
    'CAP-09': { authority: 'read' },
    'CAP-11': { authority: 'act-alone', irreversible: false, external: false },
  };
  for (const [c, ctx] of Object.entries(context)) {
    const levels = reg.capabilities[c]?.authority;
    if (!levels?.length || !a.caps[c]) continue;
    a.caps[c] = { ...a.caps[c], ...(ctx.authority && levels.includes(ctx.authority) ? { authority: ctx.authority } : {}),
      ...(ctx.irreversible === false && reg.capabilities[c].irreversible === 'ask' ? { irreversible: false } : {}),
      ...(ctx.external === false && reg.capabilities[c].external === 'ask' ? { external: false } : {}) };
  }
  const componentAnswers: Record<string, { present: 'yes' | 'no'; reason: string }> = {
    'CMP-04': { present: 'yes', reason: 'The agent writes case notes and reads them back when an officer reopens the case.' },
    'CMP-05': { present: 'no', reason: 'Both MCP servers are built and run by the GrantDesk team; no other party’s server or agent is connected.' },
  };
  for (const [c, x] of Object.entries(componentAnswers)) if (isChosen(reg, c)) a.components[c] = x;

  // Under register 2.0, Official Communication covers drafts that a person sends, recorded as authority "propose"
  if (reg.capabilities['CAP-05']?.authority?.includes('propose')) {
    a.ai.caps['CAP-05'] = {
      present: 'yes', authority: 'propose', evidence: (S.repo.caps as Record<string, string[]>)['CAP-05'],
      reason: 'It drafts clarification emails to applicants, and an officer sends each one. Register 2.0 counts this as Official Communication at authority "propose"; revision 1 marked it absent under the older definition.',
    };
    delete a.prov['cap.CAP-05'];
  }

  // System answers drafted from the code; the assessor took the architecture
  a.ai.system.architecture = S.repo.system.architecture;
  a.system.architecture = S.repo.system.architecture;
  a.prov['system.architecture'] = 'confirmed';

  // Edits made in revision 2
  a.risks['RISK-009'] = { ...a.risks['RISK-009'], context: 'Application text is placed in the prompt next to the instructions. An applicant could word an application to steer the summary, for example by writing eligibility claims as if they were instructions.' };
  a.controls['CTRL-0012'] = { status: 'as-is', how: "Both MCP servers now use the agency identity provider's per-client consent flow.", evidence: 'mcp/case_server/auth.py', owner: Y.owner };
  a.controls['CTRL-0089'] = { status: 'as-is', how: teamHow['CTRL-0089'], evidence: 'infra/egress-allowlist.yaml', owner: 'Platform team' };

  // The skill's suggestions for the risks new since revision 1: nothing is scored until the assessor decides
  for (const r of applicableRisks(reg, a).filter((id) => idNum(id) > 46 && risks[id])) {
    a.ai.risks[r] = { context: risks[r].context, impact: risks[r].impact, likelihood: risks[r].likelihood, ...RISK_REASONS[r] };
  }

  // The code check
  const checks: Record<string, CodeCheck> = {};
  for (const [cid, [verdict, note, files]] of Object.entries(repoChecks)) {
    if (!(cid in reg.controls) || reg.controls[cid].superseded_by) continue;
    checks[cid] = { verdict: verdict as Verdict, note, files, ...(EXCERPTS[cid] ? { excerpts: EXCERPTS[cid] } : {}), ...(cid === 'CTRL-0089' ? { contradicts: true } : {}) };
  }
  a.code = {
    url: S.repo.url, branch: S.repo.branch, commit: COMMIT, readAt: SKILL_RUN, filesRead: S.repo.filesRead, filesTotal: S.repo.filesTotal,
    read: S.repo.read, findings: S.repo.findings.map(([area, text, files]) => ({ area: area as string, text: text as string, files: files as string[] })),
    unknown: [], caps: S.repo.caps as Record<string, string[]>, checks, checked: SKILL_RUN,
  };

  // Entries the code confirms: the skill drafted specific text where revision 1 only pointed at the baseline checklist
  for (const [cid, check] of Object.entries(checks)) {
    if (check.verdict === 'found' && a.controls[cid]?.how === Y.defaultHow) a.ai.controls[cid] = { how: check.note, evidence: check.files.join(', ') };
  }
  for (const [cid, proposal] of Object.entries(PROPOSALS)) a.ai.controls[cid] = { ...a.ai.controls[cid], proposal };

  a.threads = structuredClone(THREADS);
  return a;
}
