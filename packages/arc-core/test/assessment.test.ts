import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { blankAssessment, FORMAT, parseAssessment, toJSONSchema } from '../src/index';
import { completeAssessment } from './helpers';

const schemaFile = new URL('../schema/assessment.schema.json', import.meta.url);

describe('the assessment file', () => {
  it('round-trips a blank and a completed assessment through JSON', () => {
    for (const a of [blankAssessment(new Date('2026-01-01T00:00:00Z')), completeAssessment(['CAP-07', 'CAP-11'])]) {
      const r = parseAssessment(JSON.stringify(a));
      expect(r.ok).toBe(true);
      if (r.ok) expect(r.value).toEqual(a);
    }
  });

  it('fills defaults for a minimal file', () => {
    const r = parseAssessment({ format: FORMAT, formatVersion: 1, revision: 1, createdAt: '2026-01-01T00:00:00Z', updatedAt: '2026-01-01T00:00:00Z', threshold: 'moderate' });
    expect(r.ok).toBe(true);
    if (r.ok) {
      expect(r.value.caps).toEqual({});
      expect(r.value.ai).toEqual({ caps: {}, components: {}, risks: {}, system: {}, controls: {}, residual: {} });
      expect(r.value.components).toEqual({});
      expect(r.value.threads).toEqual({});
      expect(r.value.history).toEqual([]);
    }
  });

  it('names the field in each error', () => {
    const a = blankAssessment();
    const bad = { ...a, risks: { 'RISK-001': { impact: 7 } }, controls: { 'CTRL-0001': { status: 'exempt' } }, extra: true };
    const r = parseAssessment(bad);
    expect(r.ok).toBe(false);
    if (!r.ok) {
      expect(r.errors.some((e) => e.startsWith('risks.RISK-001.impact:'))).toBe(true);
      expect(r.errors.some((e) => e.startsWith('controls.CTRL-0001.status:'))).toBe(true);
      expect(r.errors.some((e) => /extra/.test(e))).toBe(true);
    }
  });

  it('rejects files that are not assessments', () => {
    expect(parseAssessment('{not json')).toMatchObject({ ok: false });
    expect(parseAssessment({ format: 'something-else' })).toEqual({ ok: false, errors: [`Not an ARCvisor assessment: "format" must be "${FORMAT}".`] });
  });

  it('publishes a JSON Schema that matches the committed file', () => {
    const schema = toJSONSchema();
    expect(schema.$schema).toBe('https://json-schema.org/draft/2020-12/schema');
    expect(schema.required).toEqual(expect.arrayContaining(['format', 'formatVersion', 'threshold']));
    expect(JSON.parse(readFileSync(schemaFile, 'utf8'))).toEqual(schema);
  });
});
