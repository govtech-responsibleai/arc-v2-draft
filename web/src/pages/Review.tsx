import { plural, signOff, startRevision, STATUS_LABELS } from 'arc-core';
import { CircleCheck } from 'lucide-react';
import { useState, type ReactNode } from 'react';
import { PageHead } from '../components/ui';
import { useDerived } from '../lib/derived';
import { shortDate } from '../lib/format';
import { href } from '../lib/route';
import { REGISTER as reg } from '../register';
import { useAssessment, useStore } from '../store';
import { Confirm } from './Start';

function Panel({ id, title, count, tone, children, empty }: { id?: string; title: string; count: number; tone?: string; children: ReactNode; empty: string }) {
  return (
    <section id={id} className="panel" aria-labelledby={`${id ?? title}-h`} style={{ overflow: 'hidden' }}>
      <div className="panel-head"><h2 id={`${id ?? title}-h`}>{title}</h2><span className={`chip ${tone ?? ''}`}>{count}</span></div>
      {count ? children : <p className="panel-row muted">{empty}</p>}
    </section>
  );
}

const DECISIONS_LIST = ['Approve', 'Approve with conditions', 'Defer'] as const;

const sectionPage: Record<string, string> = { system: 'system', capabilities: 'capabilities', risks: 'risks', controls: 'controls', residual: 'residual', signoff: 'review' };

function labelFor(key: string): { text: string; to: string } {
  const [kind, id] = [key.slice(0, key.indexOf('.')), key.slice(key.indexOf('.') + 1)];
  if (kind === 'risk') return { text: `${id} ${reg.risks[id]?.statement ?? ''}`, to: href(['risks', id]) };
  if (kind === 'control') return { text: `${id} ${reg.controls[id]?.statement ?? ''}`, to: href(['controls', id]) };
  if (kind === 'cap') return { text: `${id} ${reg.capabilities[id]?.name ?? ''}`, to: href(['capabilities']) };
  if (kind === 'residual') return { text: `${id} residual risk`, to: href(['residual']) };
  return { text: `System: ${id}`, to: href(['system']) };
}

export function Review() {
  const a = useAssessment();
  const d = useDerived();
  const edit = useStore((s) => s.edit);
  const replace = useStore((s) => s.replace);
  const mode = useStore((s) => s.mode);
  const me = useStore((s) => s.me);
  const [confirmSign, setConfirmSign] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const s = a.signoff;
  const set = (k: keyof typeof s, v: string) => edit((x) => { x.signoff = { ...x.signoff, [k]: v }; });
  const openThreads = Object.entries(a.threads).filter(([, t]) => !t.resolved && t.comments.length);
  const notAdopted = d.scope.filter((c) => a.controls[c.id]?.status === 'not-adopted');
  const waived = d.scope.filter((c) => a.controls[c.id]?.status === 'waived');
  const contraL0 = d.contradicted.filter((id) => d.scopeById[id]?.level === 0);
  const verdict = a.review?.verdict;

  const sign = () => {
    try { replace(signOff(reg, a)); setError(null); } catch (e) { setError((e as Error).message); }
    setConfirmSign(false);
  };
  const setVerdict = (v: 'changes-requested' | 'reviewed') =>
    edit((x) => { x.review = { verdict: v, by: [me.name, me.role].filter(Boolean).join(', ') || 'Reviewer', at: new Date().toISOString() }; }, true);

  return (
    <>
      <PageHead title="Sign-off and review" lede={a.signedCopy && !d.signed
        ? `Revision ${a.revision}, compared with revision ${a.signedCopy.revision}, which was signed on ${shortDate(a.signedCopy.signoff.signedAt)}${a.basis ? ` against register ${a.basis.version}` : ''}.`
        : d.signed ? `Revision ${a.revision} was signed on ${shortDate(s.signedAt)}. It is read-only; start the next revision to change it.` : `Revision ${a.revision}. The reviewer reads the record here; the acceptance authority signs.`} />

      {error && <p className="error" role="alert">{error}</p>}
      {d.signed && (
        <section className="banner banner-ok">
          <p><strong>Signed off on {shortDate(s.signedAt)}{s.authority ? ` by ${s.authority}` : ''}.</strong> {s.decision ? `Decision: ${s.decision}.` : ''}</p>
          <button className="btn" type="button" onClick={() => replace(startRevision(a))}>Start revision {a.revision + 1}</button>
        </section>
      )}

      <div className="cols">
        <div className="col-2 stack" style={{ gap: 20 }}>
          {!d.signed && (
            <Panel title="Before this can be signed" count={d.blockers.length} tone={d.blockers.length ? 'chip-amber' : 'chip-green'} empty="Nothing blocks sign-off.">
              {d.blockers.map((b) => (
                <div key={b.text} className="panel-row">
                  <span>{b.text}</span>
                  <a className="btn btn-sm" href={b.anchor ? `#${b.anchor}` : href([sectionPage[b.section]])}
                    onClick={b.anchor ? (ev) => { ev.preventDefault(); document.getElementById(b.anchor!)?.scrollIntoView?.({ behavior: 'smooth' }); } : undefined}>
                    {b.anchor ? 'Show' : 'Open'}
                  </a>
                </div>
              ))}
            </Panel>
          )}

          {a.signedCopy && !d.signed && (
            <section className="panel" aria-labelledby="diff-h" style={{ overflow: 'hidden' }}>
              <div className="panel-head"><h2 id="diff-h">Changes since revision {a.signedCopy.revision}</h2></div>
              {d.diff && (
                <div className="panel-row" style={{ alignItems: 'flex-start' }}>
                  <span className="stack" style={{ gap: 2, flex: '1 1 360px' }}>
                    <strong>Register {d.diff.from} → {d.diff.to}</strong>
                    <span className="small muted">
                      {d.diff.newRisks.length} new {plural(d.diff.newRisks.length, 'risk')} and {d.diff.newControls.length} new {plural(d.diff.newControls.length, 'control')} apply
                      {d.diff.goneRisks.length ? `; ${d.diff.goneRisks.length} ${plural(d.diff.goneRisks.length, 'risk')} no longer apply` : ''}
                      {d.diff.levelChanges.length ? `; ${d.diff.levelChanges.length} controls changed level` : ''}.
                    </span>
                  </span>
                  <a href={href(['risks'], { f: 'new' })} className="small">See what's new</a>
                </div>
              )}
              {a.code?.checks && (
                <div className="panel-row"><span className="stack" style={{ gap: 2 }}><strong>Code checked{a.code.commit ? <> at <span className="mono">{a.code.commit}</span></> : ''}</strong><span className="small muted">{Object.keys(a.code.checks).length} controls checked{a.ai.source ? ` by the ${a.ai.source}` : ''}.</span></span><a href={href(['controls'], { f: 'gaps' })} className="small">Code results</a></div>
              )}
              {contraL0.length > 0 && (
                <>
                  <div className="list-group" style={{ color: 'var(--red)' }}>Contradicted by the code · {contraL0.length}</div>
                  {contraL0.map((id) => (
                    <a key={id} href={href(['controls', id])} className="panel-row" style={{ color: 'var(--ink)', textDecoration: 'none', borderTop: 0, paddingTop: 6, paddingBottom: 6 }}>
                      <span className="row"><span className="chip chip-l0">L0</span><span className="mono small muted">{id}</span>{reg.controls[id].statement}</span>
                      <span className="small muted">{a.controls[id]?.status ? STATUS_LABELS[a.controls[id]!.status!] : ''} → <span style={{ color: 'var(--red)', fontWeight: 500 }}>{a.code!.checks![id].verdict === 'missing' ? 'not found in code' : 'code conflicts'}</span></span>
                    </a>
                  ))}
                </>
              )}
              <div className="list-group">Edited · {d.changes.length}</div>
              {d.changes.length === 0 && <p className="panel-row muted" style={{ borderTop: 0 }}>No edits since sign-off.</p>}
              {d.changes.map((c) => (
                <a key={`${c.section}${c.id}`} href={href([c.section, ...(c.section === 'risks' || c.section === 'controls' ? [c.id] : [])])} className="panel-row" style={{ color: 'var(--ink)', textDecoration: 'none', borderTop: 0, paddingTop: 6, paddingBottom: 6 }}>{c.text}</a>
              ))}
            </section>
          )}

          <Panel title="Open comments" count={openThreads.length} empty="No open comments.">
            {openThreads.map(([id, t]) => {
              const last = t.comments[t.comments.length - 1];
              const to = id.startsWith('CTRL') ? href(['controls', id]) : id.startsWith('RISK') ? href(['risks', id]) : href(['system']);
              return (
                <a key={id} href={to} className="panel-row" style={{ color: 'var(--ink)', textDecoration: 'none', alignItems: 'flex-start' }}>
                  <span className="stack" style={{ gap: 2, flex: '1 1 360px' }}>
                    <span><span className="mono small muted">{id}</span> {reg.controls[id]?.statement ?? reg.risks[id]?.statement ?? ''}</span>
                    <span className="small muted">{last.author}: “{last.text}”</span>
                  </span>
                  <span className="chip">{t.comments.length} {plural(t.comments.length, 'comment')}</span>
                </a>
              );
            })}
          </Panel>

          <Panel id="ai-drafts" title="AI suggestions nobody has decided on" count={d.pending.length} tone="chip-violet" empty="Every AI suggestion has been accepted, edited or dismissed.">
            {d.pending.slice(0, 12).map((k) => { const l = labelFor(k); return <div key={k} className="panel-row"><span>{l.text}</span><a className="btn btn-sm" href={l.to}>Open</a></div>; })}
            {d.pending.length > 12 && <p className="panel-row small muted">and {d.pending.length - 12} more</p>}
          </Panel>

          <Panel title="Level 0 controls waived" count={waived.length} tone={waived.length ? 'chip-amber' : ''} empty="No Level 0 control is waived.">
            {waived.map((c) => (
              <div key={c.id} className="panel-row" style={{ alignItems: 'flex-start' }}>
                <span className="stack" style={{ gap: 4, flex: '1 1 360px' }}>
                  <span><a href={href(['controls', c.id])}><span className="mono small">{c.id}</span></a> {reg.controls[c.id].statement}</span>
                  <span className="small" style={{ paddingLeft: 12, borderLeft: '2px solid var(--line)' }}>Not present: {a.controls[c.id]?.reason || '—'}</span>
                  <span className="small muted">Evidence: {a.controls[c.id]?.evidence || 'none recorded'}</span>
                </span>
              </div>
            ))}
          </Panel>

          <Panel title="Not adopted" count={notAdopted.length} empty="Every control in scope was adopted.">
            {notAdopted.map((c) => {
              const reason = a.controls[c.id]?.reason ?? '';
              const relies = d.contradicted.filter((x) => reason.includes(x));
              return (
                <div key={c.id} className="panel-row" style={{ alignItems: 'flex-start' }}>
                  <span className="stack" style={{ gap: 4, flex: '1 1 360px' }}>
                    <a href={href(['controls', c.id])}><span className="mono small">{c.id}</span></a> <span>{reg.controls[c.id].statement}</span>
                    <span className="small" style={{ paddingLeft: 12, borderLeft: '2px solid var(--line)' }}>{reason || 'No reason given.'}</span>
                    {relies.length > 0 && <span className="small" style={{ color: 'var(--red)', fontWeight: 500 }}>The reason relies on {relies.join(', ')}, which the code check contradicts.</span>}
                  </span>
                </div>
              );
            })}
          </Panel>
        </div>

        <div className="col-1 stack" style={{ gap: 16 }}>
          <section className="panel panel-pad" aria-labelledby="verdict-h">
            <h2 id="verdict-h">Reviewer's verdict</h2>
            {verdict && <p className="row small"><CircleCheck size={14} aria-hidden="true" /> {verdict === 'reviewed' ? 'Marked as reviewed' : 'Changes requested'} by {a.review?.by} on {shortDate(a.review?.at)}.</p>}
            {mode === 'review' ? (
              <>
                <p className="small muted">Requesting changes keeps the revision open and points the assessor at your open comments.</p>
                <div className="row">
                  <button className="btn" type="button" style={{ flex: 1 }} onClick={() => setVerdict('changes-requested')}>Request changes</button>
                  <button className="btn" type="button" style={{ flex: 1 }} disabled={d.blockers.some((b) => b.section !== 'signoff') } onClick={() => setVerdict('reviewed')}>Mark as reviewed</button>
                </div>
              </>
            ) : <p className="small muted">Switch to Review mode to give the reviewer's verdict.</p>}
          </section>

          <section id="signoff-fields" className="panel panel-pad" aria-labelledby="sign-h">
            <h2 id="sign-h">Sign-off</h2>
            {([['assessor', 'Assessor (development team)'], ['reviewer', 'Reviewer (governance team)'], ['authority', 'Residual-risk acceptance authority (name and role)']] as const).map(([k, l]) => (
              <div key={k} className="field"><label className="label" htmlFor={`so-${k}`}>{l}</label><input id={`so-${k}`} className="input" value={s[k] ?? ''} disabled={d.signed} onChange={(e) => set(k, e.target.value)} /></div>
            ))}
            <fieldset className="field" style={{ border: 0, margin: 0, padding: 0 }}>
              <legend className="label" style={{ marginBottom: 6 }}>Deployment decision</legend>
              {DECISIONS_LIST.map((v) => (
                <label key={v} className="row" style={{ minHeight: 40, padding: '0 12px', border: '1px solid var(--line)', borderRadius: 8, marginBottom: 6, fontSize: 14, cursor: 'pointer' }}>
                  <input type="radio" name="decision" checked={s.decision === v} disabled={d.signed} onChange={() => set('decision', v)} /> {v}
                </label>
              ))}
            </fieldset>
            <div className="field"><label className="label" htmlFor="so-cond">Conditions</label><textarea id="so-cond" className="textarea" rows={3} value={s.conditions ?? ''} disabled={d.signed} onChange={(e) => set('conditions', e.target.value)} /></div>
            <div className="field"><label className="label" htmlFor="so-next">Next review date or trigger</label><input id="so-next" className="input" value={s.nextReview ?? ''} disabled={d.signed} onChange={(e) => set('nextReview', e.target.value)} /></div>
            {!d.signed && (
              <>
                <button className="btn btn-primary" type="button" style={{ minHeight: 44 }} disabled={d.blockers.length > 0} onClick={() => setConfirmSign(true)}>Sign off revision {a.revision}</button>
                <span className="small muted" style={{ textAlign: 'center' }}>{d.blockers.length ? `${d.blockers.length} ${plural(d.blockers.length, 'item')} to clear first` : 'Signing locks this revision.'}</span>
              </>
            )}
          </section>

          <section className="panel panel-pad" aria-labelledby="hist-h">
            <h2 id="hist-h">Revision history</h2>
            {!d.signed && <p className="small"><strong>Revision {a.revision}</strong> · draft · register {reg.version.version}</p>}
            {[...a.history].reverse().map((h) => (
              <p key={h.revision} className="small"><strong>Revision {h.revision}</strong> · signed {shortDate(h.signedAt)} · {h.decision ?? 'signed'} · register {h.register}</p>
            ))}
          </section>
        </div>
      </div>
      <Confirm open={confirmSign} title={`Sign off revision ${a.revision}?`} body="Signing records the register version and a copy of the record, and makes this revision read-only. Comments stay open." confirm="Sign off" onCancel={() => setConfirmSign(false)} onConfirm={sign} />
    </>
  );
}
