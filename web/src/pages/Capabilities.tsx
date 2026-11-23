import {
  applicableRisks, AUTHORITY_LABELS, capabilitiesOf, combinationAdvice, conditionalElements, controlsInScope, elementName, isChosen,
  type Assessment, type Authority, type Present,
} from 'arc-core';
import { useState } from 'react';
import { Evidence, Suggestion } from '../components/Suggestion';
import { PageHead } from '../components/ui';
import { useDerived } from '../lib/derived';
import { href } from '../lib/route';
import { accept, dismiss, touch } from '../lib/suggest';
import { REGISTER as reg } from '../register';
import { useAssessment, useStore } from '../store';

const PRESENT: [Present, string][] = [['yes', 'Present'], ['unsure', 'Unsure'], ['no', 'Absent']];
const APPROVAL: [string, string][] = [['', 'Not stated'], ['always', 'Always'], ['some', 'For some actions'], ['never', 'Never']];
const VERDICT_CHIP: Record<string, string> = { present: 'chip-red', possible: 'chip-amber', 'not present': 'chip-green' };

function counts(a: Assessment): { risks: number; controls: number } {
  const risks = applicableRisks(reg, a);
  return { risks: risks.length, controls: controlsInScope(reg, a, risks).length };
}

function Segmented({ label, value, disabled, onPick }: { label: string; value?: Present; disabled: boolean; onPick: (p: Present) => void }) {
  return (
    <div className="seg" role="radiogroup" aria-label={label}>
      {PRESENT.map(([v, l]) => <button key={v} type="button" role="radio" aria-checked={value === v} disabled={disabled} onClick={() => onPick(v)}>{l}</button>)}
    </div>
  );
}

export function Capabilities() {
  const a = useAssessment();
  const d = useDerived();
  const edit = useStore((s) => s.edit);
  const [delta, setDelta] = useState<string | null>(null);
  const ids = Object.keys(reg.capabilities);
  const cats = Array.from(new Set(ids.map((c) => reg.capabilities[c].category)));
  const conditional = conditionalElements(reg);
  const tally = (p: Present | undefined) => ids.filter((c) => a.caps[c]?.present === p).length;

  // Show what a change does to the risks and controls before the reader looks for it
  const change = (label: string, apply: (x: Assessment) => void, record: (x: Assessment) => void) => {
    const before = counts(a);
    const trial = structuredClone(a);
    apply(trial);
    const after = counts(trial);
    const sign = (n: number) => (n > 0 ? `+${n}` : `${n}`);
    setDelta(after.risks !== before.risks || after.controls !== before.controls
      ? `${label}: ${sign(after.risks - before.risks)} risks, ${sign(after.controls - before.controls)} controls`
      : `${label}: no change to the risks or controls`);
    edit((x) => { apply(x); record(x); });
  };
  const setCap = (cid: string, patch: Partial<Assessment['caps'][string]>) =>
    change(cid, (x) => { x.caps[cid] = { ...x.caps[cid], ...patch }; }, (x) => touch(x, 'cap', cid));

  const implied = d.implied.filter((i) => i.capability !== 'any');
  const delegates = d.implied.filter((i) => i.capability === 'any');

  return (
    <>
      <PageHead title="Capabilities and components" lede="Capabilities belong to the whole system: if any agent has one, the system has it. Include read-only functions. Unsure counts as present until you decide. For each capability, say how far it acts on its own; unstated context is taken as the most cautious." />
      <section className="panel spread" style={{ padding: '12px 16px' }} aria-live="polite">
        <div className="row" style={{ gap: '6px 18px' }}>
          <span><strong className="num">{tally('yes')}</strong> present</span>
          <span><strong className="num">{tally('unsure')}</strong> unsure</span>
          <span><strong className="num">{tally('no')}</strong> absent</span>
          <span><strong className="num">{ids.filter((c) => !a.caps[c]?.present).length}</strong> undecided</span>
        </div>
        <div className="stack" style={{ gap: 2, alignItems: 'flex-end' }}>
          <span><strong className="num">{d.risks.length}</strong> risks and <strong className="num">{d.scope.length}</strong> controls apply{d.app.below.length ? <>; <strong className="num">{d.app.below.length}</strong> left out at the authority stated</> : ''}</span>
          {delta && <span className="small" style={{ color: 'var(--accent-text)', fontWeight: 500 }}>Last change, {delta}</span>}
        </div>
      </section>

      {implied.length > 0 && (
        <section className="banner banner-warn" aria-label="Implied capabilities" style={{ alignItems: 'flex-start' }}>
          <div className="stack" style={{ gap: 6, flex: 1 }}>
            <strong>{implied.length} {implied.length === 1 ? 'capability is' : 'capabilities are'} implied by the ones marked present</strong>
            {implied.map((i) => (
              <p key={`${i.from}${i.capability}`} className="small">
                <a href={`#cap-${i.capability}`}>{i.capability} {elementName(reg, i.capability)}</a>, from {i.from} ({i.mark}): {i.note}
                {a.caps[i.capability]?.present === 'no' ? (a.caps[i.capability]?.reason ? ' Marked absent, with a reason.' : ' Marked absent: record why it does not apply.') : ''}
              </p>
            ))}
          </div>
        </section>
      )}
      {delegates.length > 0 && <p className="small muted">{delegates[0].note}</p>}

      {cats.map((cat) => (
        <section key={cat} aria-labelledby={`cat-${cat}`} className="stack" style={{ gap: 12 }}>
          <h2 id={`cat-${cat}`} style={{ fontSize: 16 }}>{cat}</h2>
          <div className="caps">
            {ids.filter((c) => reg.capabilities[c].category === cat).map((cid) => {
              const cap = reg.capabilities[cid];
              const e = a.caps[cid] ?? {};
              const s = a.ai.caps[cid];
              const on = e.present === 'yes' || e.present === 'unsure';
              const ctx = d.app.profile[cid];
              const brings = Object.keys(reg.risks).filter((r) => !reg.risks[r].superseded_by && capabilitiesOf(reg, reg.risks[r]).includes(cid));
              const sPresent = s ? PRESENT.find(([v]) => v === s.present)![1].toLowerCase() : '';
              return (
                <article key={cid} id={`cap-${cid}`} className={`cap is-${e.present ?? 'none'}`} aria-labelledby={`h-${cid}`}>
                  <div className="stack" style={{ gap: 2 }}>
                    <span className="mono small muted">{cid}</span>
                    <h3 id={`h-${cid}`}>{cap.name}</h3>
                  </div>
                  <Segmented label={`Is ${cap.name} present?`} value={e.present} disabled={d.signed} onPick={(p) => setCap(cid, { present: p })} />
                  {s && (
                    <Suggestion kind="cap" id={cid} title={`Suggested: ${sPresent}${s.authority ? `, ${AUTHORITY_LABELS[s.authority].toLowerCase()}` : ''}`} disabled={d.signed}
                      summary={`${sPresent}${s.authority ? ` at ${AUTHORITY_LABELS[s.authority].toLowerCase()}` : ''}`}
                      onAccept={() => change(cid, (x) => accept(x, 'cap', cid), () => undefined)} onDismiss={() => edit((x) => dismiss(x, 'cap', cid))}>
                      <p style={{ fontSize: 14 }}>{s.reason}</p>
                      <Evidence files={s.evidence} />
                    </Suggestion>
                  )}
                  {e.present === 'no' && (
                    <div className="field">
                      <label className="label" htmlFor={`why-${cid}`}>Why it is absent {implied.some((i) => i.capability === cid) && <span style={{ color: 'var(--amber)' }}>(needed: another capability implies it)</span>}</label>
                      <input id={`why-${cid}`} className="input" value={e.reason ?? ''} disabled={d.signed} onChange={(ev) => edit((x) => { x.caps[cid] = { ...x.caps[cid], reason: ev.target.value }; })} />
                    </div>
                  )}
                  {a.code?.caps[cid] && !(s && a.prov[`cap.${cid}`] === undefined) && (
                    <div className="row"><span className="label">In the code</span>{a.code.caps[cid].map((f) => <span key={f} className="chip chip-line mono">{f}</span>)}</div>
                  )}
                  {on && (
                    <div className="stack" style={{ gap: 10 }}>
                      {cap.authority?.length ? (
                        <div className="field">
                          <label className="label" htmlFor={`au-${cid}`}>Authority: how far it acts on its own</label>
                          <select id={`au-${cid}`} className="select" value={e.authority ?? ''} disabled={d.signed}
                            onChange={(ev) => setCap(cid, { authority: (ev.target.value || undefined) as Authority | undefined })}>
                            <option value="">Not stated (taken as {AUTHORITY_LABELS[cap.authority[cap.authority.length - 1]].toLowerCase()})</option>
                            {cap.authority.map((x) => <option key={x} value={x}>{AUTHORITY_LABELS[x]}</option>)}
                          </select>
                        </div>
                      ) : null}
                      {(cap.irreversible === 'ask' || cap.external === 'ask') && (
                        <div className="stack" style={{ gap: 6 }}>
                          {cap.irreversible === 'ask' && ctx?.authority !== 'read' && (
                            <label className="row small" style={{ flexWrap: 'nowrap', alignItems: 'flex-start' }}>
                              <input type="checkbox" checked={e.irreversible === false} disabled={d.signed} onChange={(ev) => setCap(cid, { irreversible: ev.target.checked ? false : undefined })} />
                              <span>Its effects can be undone <span className="muted">(unstated: taken as irreversible)</span></span>
                            </label>
                          )}
                          {cap.external === 'ask' && (
                            <label className="row small" style={{ flexWrap: 'nowrap', alignItems: 'flex-start' }}>
                              <input type="checkbox" checked={e.external === false} disabled={d.signed} onChange={(ev) => setCap(cid, { external: ev.target.checked ? false : undefined })} />
                              <span>Its effects stay inside the organisation <span className="muted">(unstated: taken as external)</span></span>
                            </label>
                          )}
                        </div>
                      )}
                      <div className="field">
                        <label className="label" htmlFor={`pb-${cid}`}>Provided by</label>
                        <input id={`pb-${cid}`} className="input" value={e.providedBy ?? ''} placeholder="Which agent or tool" disabled={d.signed}
                          onChange={(ev) => edit((x) => { x.caps[cid] = { ...x.caps[cid], providedBy: ev.target.value }; })} />
                      </div>
                      <div className="field">
                        <label className="label" htmlFor={`ap-${cid}`}>A person approves before it acts</label>
                        <select id={`ap-${cid}`} className="select" value={e.approval ?? ''} disabled={d.signed}
                          onChange={(ev) => edit((x) => { x.caps[cid] = { ...x.caps[cid], approval: ev.target.value as '' | 'always' | 'some' | 'never' }; })}>
                          {APPROVAL.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                        </select>
                      </div>
                    </div>
                  )}
                  <div className="row small">
                    <span className="label">Brings in</span>
                    {brings.map((r) => {
                      const others = reg.risks[r].element_ids.filter((x) => x !== cid && isChosen(reg, x));
                      return (
                        <a key={r} className="chip chip-line mono" href={href(['risks', r])} title={reg.risks[r].statement + (others.length ? ` (only together with ${others.join(', ')})` : '')}>
                          {r}{others.length ? ` + ${others.join(', ')}` : ''}
                        </a>
                      );
                    })}
                    {Object.values(reg.combinations.roles).some((role) => role.capabilities[cid]) && <a className="chip chip-line" href="#combinations">combination roles</a>}
                  </div>
                  <details className="small">
                    <summary style={{ cursor: 'pointer', color: 'var(--accent-text)' }}>Register definition</summary>
                    <p className="muted" style={{ marginTop: 6 }}>{cap.description}</p>
                  </details>
                </article>
              );
            })}
          </div>
        </section>
      ))}

      {conditional.length > 0 && (
        <section id="components" aria-labelledby="comp-h" className="stack" style={{ gap: 12 }}>
          <h2 id="comp-h" style={{ fontSize: 16 }}>Components only some systems have</h2>
          <div className="caps">
            {conditional.map((cid) => {
              const el = reg.components[cid] ?? reg.design[cid];
              const e = a.components[cid] ?? {};
              const s = a.ai.components[cid];
              const brings = Object.keys(reg.risks).filter((r) => !reg.risks[r].superseded_by && reg.risks[r].element_ids.includes(cid));
              return (
                <article key={cid} id={`comp-${cid}`} className={`cap is-${e.present ?? 'none'}`} aria-labelledby={`h-${cid}`}>
                  <div className="stack" style={{ gap: 2 }}>
                    <span className="mono small muted">{cid}</span>
                    <h3 id={`h-${cid}`}>{el.name}</h3>
                    <p className="small muted">Present when: {el.present_when}</p>
                  </div>
                  <Segmented label={`Is ${el.name} present?`} value={e.present} disabled={d.signed}
                    onPick={(p) => change(cid, (x) => { x.components[cid] = { ...x.components[cid], present: p }; }, (x) => touch(x, 'component', cid))} />
                  {s && (
                    <Suggestion kind="component" id={cid} title={`Suggested: ${s.present}`} disabled={d.signed} summary={s.present}
                      onAccept={() => change(cid, (x) => accept(x, 'component', cid), () => undefined)} onDismiss={() => edit((x) => dismiss(x, 'component', cid))}>
                      <p style={{ fontSize: 14 }}>{s.reason}</p>
                      <Evidence files={s.evidence} />
                    </Suggestion>
                  )}
                  <div className="field">
                    <label className="label" htmlFor={`cr-${cid}`}>Why</label>
                    <input id={`cr-${cid}`} className="input" value={e.reason ?? ''} disabled={d.signed} onChange={(ev) => edit((x) => { x.components[cid] = { ...x.components[cid], reason: ev.target.value }; })} />
                  </div>
                  <div className="row small">
                    <span className="label">Brings in</span>
                    {brings.map((r) => <a key={r} className="chip chip-line mono" href={href(['risks', r])} title={reg.risks[r].statement}>{r}</a>)}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}

      <section id="combinations" aria-labelledby="combo-h" className="stack" style={{ gap: 12 }}>
        <h2 id="combo-h" style={{ fontSize: 16 }}>Combination rules</h2>
        <p className="small muted" style={{ marginTop: -6 }}>Some risks arise only when capabilities come together. A rule that is present or possible brings its risks into scope.</p>
        {d.app.checks.map((c) => (
          <article key={c.id} className="panel panel-pad" aria-labelledby={`r-${c.id}`}>
            <div className="spread">
              <h3 id={`r-${c.id}`} style={{ fontSize: 16 }}>{c.name}</h3>
              <span className={`chip ${VERDICT_CHIP[c.verdict]}`}>{c.verdict === 'present' ? 'Present' : c.verdict === 'possible' ? 'Possible' : 'Not present'}</span>
            </div>
            <p className="small">{c.description}</p>
            <div className="stack" style={{ gap: 8 }}>
              {c.roles.map((role) => (
                <div key={role.id} className="stack" style={{ gap: 4, padding: '8px 12px', border: '1px solid var(--line)', borderRadius: 10 }}>
                  <span className="row"><strong style={{ fontSize: 14 }}>{role.name}</strong><span className={`chip ${role.status === 'yes' ? 'chip-red' : role.status === 'maybe' ? 'chip-amber' : ''}`}>{role.status === 'yes' ? 'supplied' : role.status === 'maybe' ? 'maybe' : 'not supplied'}</span></span>
                  {role.question && <span className="small muted">{role.question}</span>}
                  {role.suppliers.map((sp) => <span key={sp.id} className="small"><span className="mono">{sp.id}</span> {elementName(reg, sp.id)} · {sp.mark}{sp.note ? `: ${sp.note}` : ''}</span>)}
                </div>
              ))}
            </div>
            <p className="small" style={{ color: 'var(--ink-2)' }}>{combinationAdvice(c)}</p>
            <div className="row small">
              {c.control && <a className="chip chip-line mono" href={href(['controls', c.control])}>{c.control}</a>}
              {c.risks.map((r) => <a key={r} className="chip chip-line mono" href={href(['risks', r])}>{r}</a>)}
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
