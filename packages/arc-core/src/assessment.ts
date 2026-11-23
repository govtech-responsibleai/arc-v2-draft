// The assessment file (.arc.json): one record per system, written by ARCvisor and by the arc-assessment skill.
import { z } from 'zod';

export const FORMAT = 'arcvisor/assessment';
export const FORMAT_VERSION = 1;

const Score = z.number().int().min(1).max(5);
const Text = z.string();
const DateTime = z.iso.datetime({ offset: true });

export const PresentSchema = z.enum(['yes', 'unsure', 'no']).describe('yes: present; unsure: counted as present until decided; no: absent');
export const ApprovalSchema = z.enum(['', 'always', 'some', 'never']).describe('Whether a person approves before the capability acts');
export const StatusSchema = z.enum(['as-is', 'adapted', 'not-adopted', 'waived']).describe(
  'Level 0 controls allow only as-is, or waived when the specific thing the control concerns is not present in the system (with the evidence); Levels 1 and 2 allow as-is, adapted or not adopted',
);
export const AuthoritySchema = z.enum(['read', 'propose', 'act-with-approval', 'act-alone']);
export const VerdictSchema = z.enum(['found', 'partial', 'missing', 'offcode', 'nofeature']).describe('What a check of the code found for a control');
export const StrategySchema = z.enum(['accept', 'monitor', 'mitigate']);
export const ThresholdSchema = z.enum(['conservative', 'moderate', 'aggressive']).describe('Relevance preset from the governance guide');
export const ProvSchema = z.enum(['ai', 'confirmed', 'edited', 'dismissed']).describe(
  'ai: written into the record by AI, not yet confirmed by a person; confirmed: an AI suggestion accepted as drafted; edited: accepted and changed, or answered by a person instead; dismissed: an AI suggestion rejected',
);
export const VerdictReviewSchema = z.enum(['changes-requested', 'reviewed']).describe("The reviewer's verdict, separate from the deployment decision");
export const DecisionSchema = z.enum(['', 'Approve', 'Approve with conditions', 'Defer']);

export const SystemSchema = z.strictObject({
  name: Text.optional(),
  owner: Text.optional(),
  purpose: Text.optional(),
  deployment: Text.optional(),
  architecture: Text.optional(),
  autonomy: Text.optional(),
  dataClassification: Text.optional(),
  pii: Text.optional(),
  publicFacing: Text.optional(),
  criticality: Text.optional(),
});

export const CapabilityEntrySchema = z.strictObject({
  present: PresentSchema.optional(),
  providedBy: Text.optional(),
  approval: ApprovalSchema.optional(),
  reason: Text.optional().describe('Why it is present or absent, especially for capabilities ruled out'),
  evidence: z.array(Text).optional().describe('File paths, with line numbers where useful'),
  authority: AuthoritySchema.optional().describe('The authority it is used at. Unstated: the highest the capability allows'),
  irreversible: z.boolean().optional().describe('Whether its effects can be undone. Unstated where the register asks: irreversible'),
  external: z.boolean().optional().describe('Whether its effects reach outside the organisation. Unstated where the register asks: external'),
});

/** A component or design element that only some systems have (it states `present_when` in the register). */
export const ComponentEntrySchema = z.strictObject({
  present: PresentSchema.optional(),
  reason: Text.optional(),
  evidence: z.array(Text).optional(),
});

export const RiskEntrySchema = z.strictObject({
  context: Text.optional().describe('How the risk would arise in this system'),
  impact: Score.nullable().optional(),
  likelihood: Score.nullable().optional(),
  impactReason: Text.optional(),
  likelihoodReason: Text.optional(),
});

export const ControlEntrySchema = z.strictObject({
  status: StatusSchema.optional(),
  how: Text.optional().describe('How it is implemented: what, where, thresholds'),
  evidence: Text.optional().describe('What a reviewer can check: config, test, log query, review record'),
  owner: Text.optional(),
  reason: Text.optional().describe('Why a Level 1 or 2 control is not adopted, or what is absent for a waived Level 0 control'),
  proposal: Text.optional().describe('Proposed change for a gap'),
  contradictionAccepted: z.strictObject({ by: Text, reason: Text, at: DateTime }).optional()
    .describe('A reviewer accepted the explanation for a code check that contradicts this entry'),
});

export const ResidualEntrySchema = z.strictObject({
  scenario: Text.optional(),
  strategy: StrategySchema.optional(),
  actions: Text.optional(),
  impact: Score.nullable().optional(),
  likelihood: Score.nullable().optional(),
  acceptedBy: Text.optional().describe('The role accepting the residual risk'),
});

export const SignoffSchema = z.strictObject({
  assessor: Text.optional(),
  reviewer: Text.optional(),
  authority: Text.optional().describe('Residual-risk acceptance authority: name and role'),
  decision: DecisionSchema.optional(),
  conditions: Text.optional(),
  nextReview: Text.optional(),
  signedAt: DateTime.nullable().optional(),
});

export const ExcerptSchema = z.strictObject({
  path: Text,
  start: z.number().int().min(1).describe('Line number of the first line'),
  lines: z.array(Text),
  highlight: z.tuple([z.number().int().min(1), z.number().int().min(1)]).optional().describe('First and last line to highlight'),
});

export const CodeCheckSchema = z.strictObject({
  verdict: VerdictSchema,
  note: Text,
  files: z.array(Text).default([]),
  contradicts: z.boolean().optional().describe("The code conflicts with the control entry's description"),
  excerpts: z.array(ExcerptSchema).optional().describe('The lines the verdict rests on, so a reviewer without repository access can see them'),
});

export const CodeSchema = z.strictObject({
  url: Text.describe('Repository the code was read from'),
  branch: Text.optional(),
  commit: Text.optional(),
  readAt: DateTime.optional(),
  filesRead: z.number().int().min(0).optional(),
  filesTotal: z.number().int().min(0).optional(),
  read: z.array(Text).default([]),
  findings: z.array(z.strictObject({ area: Text, text: Text, files: z.array(Text).default([]) })).default([]),
  unknown: z.array(Text).default([]).describe('System fields the code cannot answer'),
  caps: z.record(Text, z.array(Text)).default({}).describe('Capability ID to the files that show it'),
  checks: z.record(Text, CodeCheckSchema).nullable().default(null).describe('Control ID to what the code check found'),
  checked: DateTime.nullable().default(null),
});

export const BasisSchema = z.strictObject({
  version: Text.describe('Register version the assessment was last signed against'),
  risks: z.array(Text).describe('Applicable risks at that time'),
  controls: z.record(Text, z.union([z.literal(0), z.literal(1), z.literal(2)])).describe('Controls in scope at that time, with their levels'),
});

export const HistoryEntrySchema = z.strictObject({
  revision: z.number().int().min(1),
  signedAt: DateTime,
  register: Text,
  decision: Text.optional(),
});

export const CommentSchema = z.strictObject({ author: Text, role: Text.optional(), at: DateTime, text: Text });
export const ThreadSchema = z.strictObject({ resolved: z.boolean().default(false), comments: z.array(CommentSchema).default([]) });

const Evidence = z.array(Text).optional().describe('File paths, with line numbers where useful');

/** What an AI (ARCvisor's, or the arc-assessment skill) suggested. None of it counts until a person decides. */
export const AISchema = z.strictObject({
  source: Text.optional().describe('Who made the suggestions, e.g. "arc-assessment skill"'),
  at: DateTime.optional(),
  system: z.record(Text, Text).default({}),
  caps: z.record(Text, z.strictObject({
    present: PresentSchema, reason: Text, providedBy: Text.optional(), approval: ApprovalSchema.optional(), evidence: Evidence,
    authority: AuthoritySchema.optional(), irreversible: z.boolean().optional(), external: z.boolean().optional(),
  })).default({}),
  components: z.record(Text, z.strictObject({ present: PresentSchema, reason: Text, evidence: Evidence })).default({}),
  risks: z.record(Text, z.strictObject({
    context: Text.optional(), impact: Score.nullable().optional(), likelihood: Score.nullable().optional(),
    impactReason: Text.optional(), likelihoodReason: Text.optional(), evidence: Evidence,
  })).default({}),
  controls: z.record(Text, z.strictObject({ how: Text.optional(), evidence: Text.optional(), proposal: Text.optional() })).default({}),
  residual: z.record(Text, z.strictObject({
    scenario: Text.optional(), actions: Text.optional(), impact: Score.nullable().optional(), likelihood: Score.nullable().optional(),
  })).default({}),
});

const records = {
  caps: z.record(Text, CapabilityEntrySchema).default({}),
  components: z.record(Text, ComponentEntrySchema).default({}),
  risks: z.record(Text, RiskEntrySchema).default({}),
  controls: z.record(Text, ControlEntrySchema).default({}),
  residual: z.record(Text, ResidualEntrySchema).default({}),
};

/** The assessment as it stood when a revision was signed, kept for "changes since sign-off". */
export const SignedCopySchema = z.strictObject({
  revision: z.number().int().min(1),
  system: SystemSchema.default({}),
  threshold: ThresholdSchema,
  ...records,
  signoff: SignoffSchema.default({}),
});

export const AssessmentSchema = z.strictObject({
  format: z.literal(FORMAT),
  formatVersion: z.literal(FORMAT_VERSION),
  revision: z.number().int().min(1),
  createdAt: DateTime,
  updatedAt: DateTime,
  register: z.strictObject({ version: Text, source: Text.optional() }).optional().describe('Register the assessment was last worked against'),
  sample: Text.nullable().optional(),
  pasted: Text.optional().describe('Description pasted in to draft the system answers'),
  repoUrl: Text.optional(),
  system: SystemSchema.default({}),
  threshold: ThresholdSchema,
  ...records,
  signoff: SignoffSchema.default({}),
  notes: z.record(Text, Text).default({}).describe('Reviewer notes, keyed by risk or control ID (older files; new ones use threads)'),
  threads: z.record(Text, ThreadSchema).default({}).describe('Comment threads, keyed by risk or control ID, capability ID, or system.<field>'),
  review: z.strictObject({ verdict: VerdictReviewSchema.optional(), by: Text.optional(), at: DateTime.optional() }).optional(),
  prov: z.record(Text, ProvSchema).default({}).describe('Provenance of AI-drafted fields, keyed like system.purpose, cap.CAP-07, risk.RISK-001, control.CTRL-0089, residual.RISK-047'),
  ai: AISchema.default({ caps: {}, components: {}, risks: {}, system: {}, controls: {}, residual: {} })
    .describe('AI suggestions, kept apart from the record until a person accepts, edits or dismisses each one'),
  code: CodeSchema.nullable().optional(),
  basis: BasisSchema.nullable().optional(),
  signedCopy: SignedCopySchema.nullable().optional(),
  history: z.array(HistoryEntrySchema).default([]),
});

export type Assessment = z.output<typeof AssessmentSchema>;
export type AssessmentInput = z.input<typeof AssessmentSchema>;
export type SystemInfo = z.output<typeof SystemSchema>;
export type CapabilityEntry = z.output<typeof CapabilityEntrySchema>;
export type ComponentEntry = z.output<typeof ComponentEntrySchema>;
export type RiskEntry = z.output<typeof RiskEntrySchema>;
export type ControlEntry = z.output<typeof ControlEntrySchema>;
export type ResidualEntry = z.output<typeof ResidualEntrySchema>;
export type Signoff = z.output<typeof SignoffSchema>;
export type CodeCheck = z.output<typeof CodeCheckSchema>;
export type Basis = z.output<typeof BasisSchema>;
export type SignedCopy = z.output<typeof SignedCopySchema>;
export type Excerpt = z.output<typeof ExcerptSchema>;
export type Thread = z.output<typeof ThreadSchema>;
export type Comment = z.output<typeof CommentSchema>;
export type AISuggestions = z.output<typeof AISchema>;
export type Prov = z.output<typeof ProvSchema>;
export type Status = z.output<typeof StatusSchema>;
export type Verdict = z.output<typeof VerdictSchema>;
export type Threshold = z.output<typeof ThresholdSchema>;
export type Present = z.output<typeof PresentSchema>;

export function blankAssessment(now: Date = new Date()): Assessment {
  const t = now.toISOString();
  return {
    format: FORMAT, formatVersion: FORMAT_VERSION, revision: 1, createdAt: t, updatedAt: t,
    system: {}, threshold: 'conservative', caps: {}, components: {}, risks: {}, controls: {}, residual: {}, signoff: {},
    notes: {}, threads: {}, prov: {}, ai: { caps: {}, components: {}, risks: {}, system: {}, controls: {}, residual: {} }, history: [],
  };
}

export type ParseResult = { ok: true; value: Assessment } | { ok: false; errors: string[] };

/** Parse an assessment from JSON text or an object. Errors name the field, e.g. "risks.RISK-001.impact: ...". */
export function parseAssessment(input: unknown): ParseResult {
  let data = input;
  if (typeof input === 'string') {
    try { data = JSON.parse(input); } catch (e) { return { ok: false, errors: [`Not valid JSON: ${(e as Error).message}`] }; }
  }
  if (data && typeof data === 'object' && (data as { format?: unknown }).format !== FORMAT) {
    return { ok: false, errors: [`Not an ARCvisor assessment: "format" must be "${FORMAT}".`] };
  }
  const r = AssessmentSchema.safeParse(data);
  if (r.success) return { ok: true, value: r.data };
  return { ok: false, errors: r.error.issues.map((i) => `${i.path.length ? i.path.join('.') : '(file)'}: ${i.message}`) };
}

/** JSON Schema (draft 2020-12) for the file, so other tools (e.g. the Python skill) can validate it. */
export function toJSONSchema(): Record<string, unknown> {
  const schema = z.toJSONSchema(AssessmentSchema, { target: 'draft-2020-12', io: 'input' }) as Record<string, unknown>;
  return {
    $schema: schema.$schema,
    $id: 'https://raw.githubusercontent.com/govtech-responsibleai/arc-v2-draft/main/packages/arc-core/schema/assessment.schema.json',
    title: 'ARC assessment',
    description: `An assessment of one agentic AI system under the ARC Framework (format ${FORMAT}, version ${FORMAT_VERSION}). Written by ARCvisor and the arc-assessment skill.`,
    ...Object.fromEntries(Object.entries(schema).filter(([k]) => k !== '$schema')),
  };
}
