import * as Tabs from '@radix-ui/react-tabs';
import {
  allowedStatuses, AUTHORITY_LABELS, authorityRank, controlDone, elementName, isContradicted, LEVEL_LABELS, STATUS_LABELS,
  type ControlGroup, type Profile, type Status,
} from 'arc-core';
import { Check, Copy, Search, TriangleAlert } from 'lucide-react';
import { useState } from 'react';
import { CodeCheckPanel } from '../components/Code';
import { Evidence, Suggestion } from '../components/Suggestion';
import { Thread } from '../components/Thread';
import { Empty, LevelChip, listKeys, PageHead, Stepper, VerdictChip } from '../components/ui';
import { useDerived } from '../lib/derived';
import { repoName, shortDate } from '../lib/format';
import { href, navigate, selectItem, setQuery, useRoute } from '../lib/route';
import { accept, dismiss, isPending, touch } from '../lib/suggest';
import { REGISTER as reg } from '../register';
import { useAssessment, useStore } from '../store';

const TABS: [ControlGroup, string][] = [['required', 'Required · Level 0'], ['priority', 'For priority risks · Level 1–2'], ['optional', 'Optional']];
const TAB_LEDE: Record<ControlGroup, string> = {
  required: 'Each applies because a risk it covers applies, whatever that risk scored. Implement it as stated and describe how.',
  priority: 'Each covers at least one priority risk. Adopt it, adapt it, or record why not.',
  optional: 'None of the risks these cover is a priority. Record any you adopt.',
};
/** Which capabilities, used how, make a control stricter here than in the register. */
function stricterBecause(cid: string, profile: Profile): string[] {
  const out: string[] = [];
  for (const cond of reg.controls[cid].level_when ?? []) {
    for (const [cap, ctx] of Object.entries(profile)) {
      if (cond.capabilities && !cond.capabilities.includes(cap)) continue;
      if (cond.authority && (!ctx.authority || authorityRank(ctx.authority) < authorityRank(cond.authority))) continue;
      if ((['irreversible', 'external'] as const).some((f) => f in cond && ctx[f] !== cond[f])) continue;
      out.push(`${cap} ${elementName(reg, cap)}${ctx.authority ? ` ${AUTHORITY_LABELS[ctx.authority].toLowerCase()}` : ''}${ctx.irreversible ? ', irreversibly' : ''}${ctx.external ? ', outside the organisation' : ''}`);
    }
  }
  return Array.from(new Set(out));
}

const FILTERS = [['', 'All'], ['todo', 'To do'], ['gaps', 'Gaps in code'], ['contradicted', 'Contradicted'], ['new', 'New'], ['comments', 'Has comments']] as const;

export function Controls({ param }: { param?: string }) {
  const a = useAssessment();
  const d = useDerived();
  const { query } = useRoute();
  const [q, setQ] = useState('');
  const asked = query.get('tab');
  const tab: ControlGroup = asked === 'required' || asked === 'priority' || asked === 'optional' ? asked : (param ? d.scopeById[param]?.group : undefined) ?? 'required';
  const f = query.get('f') ?? '';
  const checks = a.code?.checks ?? {};
  const test: Record<string, (id: string) => boolean> = {
    todo: (id) => !controlDone(a.controls[id], d.scopeById[id].level),
    gaps: (id) => checks[id]?.verdict === 'missing' || checks[id]?.verdict === 'partial',
    contradicted: (id) => d.contradicted.includes(id),
    new: (id) => !!d.diff?.newControls.includes(id),
    comments: (id) => !!a.threads[id]?.comments.length,
  };
  const inTab = d.scope.filter((c) => c.group === tab).map((c) => c.id);
  const shown = inTab.filter((id) => (!f || test[f]?.(id)) && (!q.trim() || `${id} ${reg.controls[id].statement}`.toLowerCase().includes(q.trim().toLowerCase())));
  const selected = param && d.scopeById[param] ? param : shown[0];
  const tallies = Object.fromEntries(FILTERS.map(([k]) => [k, k ? inTab.filter((id) => test[k](id)).length : inTab.length]));
  const dotOf = (id: string) => (d.contradicted.includes(id) ? 'contra' : ['not-adopted', 'waived'].includes(a.controls[id]?.status ?? '') && controlDone(a.controls[id], d.scopeById[id].level) ? 'na' : controlDone(a.controls[id], d.scopeById[id].level) ? 'done' : 'todo-dot');

  return (
    <>
      <PageHead title="Controls" lede="One entry per control, however many risks it covers. The code check shows what the code supports, and where it disagrees with what was written." />

      <Tabs.Root value={tab} onValueChange={(v) => navigate(['controls'], { tab: v, f: f || null })}>
        <Tabs.List className="tabs" aria-label="Control groups">
          {TABS.map(([g, label]) => (
            <Tabs.Trigger key={g} value={g} className="tab">{label} <span className="chip">{d.scope.filter((c) => c.group === g).length}</span></Tabs.Trigger>
          ))}
        </Tabs.List>
      </Tabs.Root>
      <p className="muted small" style={{ marginTop: -8 }}>{TAB_LEDE[tab]}</p>

      <div className="row">
        <div className="search">
          <label className="sr-only" htmlFor="ctl-search">Search controls</label>
          <input id="ctl-search" className="input" type="search" placeholder="Search controls" value={q} onChange={(e) => setQ(e.target.value)} />
          <Search size={16} aria-hidden="true" />
        </div>
        {FILTERS.filter(([k]) => (k !== 'gaps' && k !== 'contradicted') || a.code?.checks).filter(([k]) => k !== 'new' || d.diff).map(([k, label]) => (
          <button key={k} type="button" className="fchip" aria-pressed={f === k} onClick={() => setQuery({ f: k || null })}>{label} <span className="num">{tallies[k]}</span></button>
        ))}
      </div>

      <div className="split">
        <section className="list" aria-label="Controls" onKeyDown={listKeys(shown, selected, (id) => selectItem('controls', id))}>
          <div className="list-head"><span>{shown.length} of {inTab.length}</span><span className="row muted" style={{ fontWeight: 400, gap: 10 }}>
            <span className="row" style={{ gap: 4 }}><span className="dot done" style={{ margin: 0 }} />done</span>
            {d.contradicted.length > 0 && <span className="row" style={{ gap: 4 }}><span className="dot contra" style={{ margin: 0 }} />contradicted</span>}
            <span className="row" style={{ gap: 4 }}><span className="dot todo-dot" style={{ margin: 0 }} />to do</span>
          </span></div>
          <div className="list-scroll">
            {shown.length === 0 && <Empty>No controls match.</Empty>}
            {shown.map((id) => {
              const v = checks[id];
              const st = a.controls[id]?.status;
              return (
                <a key={id} className="item" href={href(['controls', id], Object.fromEntries(query.entries()))} aria-current={id === selected ? 'true' : undefined}>
                  <span className={`dot ${dotOf(id)}`} aria-hidden="true" />
                  <span className="item-body">
                    <span className="item-title"><span className="mono small muted">{id}</span> {reg.controls[id].statement}</span>
                    <span className="item-meta">
                      {v && <VerdictChip verdict={v.verdict} />}
                      <span>{d.contradicted.includes(id) ? `${st ? STATUS_LABELS[st] : ''}, contradicted` : st ? STATUS_LABELS[st] : 'To do'}</span>
                      {d.diff?.newControls.includes(id) && <span className="chip chip-amber">New</span>}
                      {isPending(a, 'control', id) && <span className="chip chip-violet">AI</span>}
                      {a.threads[id]?.comments.length ? <span>{a.threads[id].comments.length} comments</span> : null}
                    </span>
                  </span>
                </a>
              );
            })}
          </div>
        </section>
        {selected ? <ControlDetail key={selected} cid={selected} ordered={shown.includes(selected) ? shown : [selected]} /> : <section className="detail"><Empty>Choose a control.</Empty></section>}
      </div>
    </>
  );
}

function ControlDetail({ cid, ordered }: { cid: string; ordered: string[] }) {
  const a = useAssessment();
  const d = useDerived();
  const edit = useStore((s) => s.edit);
  const mode = useStore((s) => s.mode);
  const me = useStore((s) => s.me);
  const [why, setWhy] = useState('');
  const [copied, setCopied] = useState(false);
  const ctl = reg.controls[cid];
  const sc = d.scopeById[cid];
  const e = a.controls[cid] ?? {};
  const check = a.code?.checks?.[cid];
  const s = a.ai.controls[cid];
  const contradicted = isContradicted(a, cid);
  const set = (change: Partial<typeof e>) => edit((x) => { x.controls[cid] = { ...x.controls[cid], ...change }; touch(x, 'control', cid); });
  const xw = ctl.crosswalks ?? {};
  const label: Record<string, string> = { csa_addendum: 'CSA', imda_mgf: 'IMDA', owasp_asi: 'OWASP' };
  const statuses = allowedStatuses(sc.level);
  const because = sc.level !== sc.baseLevel ? stricterBecause(cid, d.app.profile) : [];

  const copyPrompt = async () => {
    const repo = a.code ? ` in ${repoName(a.code.url)}` : '';
    const text = `${s?.proposal}\n\nThis closes a gap${repo} against ARC control ${cid} (${LEVEL_LABELS[ctl.level]}): ${ctl.statement}.`;
    try { await navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch { setCopied(false); }
  };

  return (
    <article className="detail" aria-labelledby="ctl-h">
      <div className="spread">
        <div className="row">
          <span className="mono small muted">{cid}</span>
          <LevelChip level={sc.level} long />
          {sc.level !== sc.baseLevel && <span className="chip">Level {sc.baseLevel} in the register</span>}
          {d.diff?.newControls.includes(cid) && <span className="chip chip-amber">New in {d.diff.to}</span>}
        </div>
        <Stepper ids={ordered} current={cid} onGo={(id) => selectItem('controls', id)} noun="control" />
      </div>

      <div className="stack" style={{ gap: 10 }}>
        <h2 id="ctl-h">{ctl.statement}</h2>
        <div className="row small muted">
          <span>Covers</span>
          {sc.covers.map((r) => <a key={r} className={sc.priorityCovers.includes(r) ? 'chip chip-accent mono' : 'chip mono'} href={href(['risks', r])} title={reg.risks[r].statement}>{r}</a>)}
          {Object.entries(xw).some(([, ids]) => ids.length) && <span style={{ marginLeft: 8 }}>Maps to</span>}
          {Object.entries(xw).flatMap(([k, ids]) => ids.map((id) => (
            <span key={`${k}${id}`} className="chip chip-line" title={reg.crosswalks[k]?.ids[id] ? `${reg.crosswalks[k].title}: ${reg.crosswalks[k].ids[id]}` : undefined}>{label[k] ?? k} {id}</span>
          )))}
        </div>
      </div>

      {because.length > 0 && <p className="small" style={{ marginTop: -8 }}>Stricter here because {because.join('; ')}.</p>}

      {check && <CodeCheckPanel check={check} />}

      {contradicted && (
        <section className="callout callout-red" aria-label="Contradiction">
          <TriangleAlert size={18} aria-hidden="true" style={{ color: 'var(--red)', flex: 'none', marginTop: 2 }} />
          <div className="stack" style={{ gap: 10, flex: 1 }}>
            <p><strong>The code contradicts this entry.</strong> {check?.verdict === 'missing' ? 'The entry says it is implemented, but the code check found nothing.' : 'What the code does conflicts with what the entry says.'}
              {ctl.level === 0 ? ' A Level 0 control the code contradicts blocks sign-off until it is fixed, or the reviewer accepts the explanation.' : ''}</p>
            {mode === 'review' && (
              <div className="stack">
                <label className="label" htmlFor={`why-${cid}`}>Accept the explanation (for example, the control is enforced outside this repository)</label>
                <textarea id={`why-${cid}`} className="textarea" rows={2} value={why} onChange={(ev) => setWhy(ev.target.value)} />
                <div><button className="btn btn-sm" type="button" disabled={!why.trim()}
                  onClick={() => edit((x) => { x.controls[cid] = { ...x.controls[cid], contradictionAccepted: { by: me.name || 'Reviewer', reason: why.trim(), at: new Date().toISOString() } }; }, true)}>
                  Accept the explanation</button></div>
              </div>
            )}
          </div>
        </section>
      )}
      {e.contradictionAccepted && (
        <section className="callout callout-green" aria-label="Explanation accepted">
          <Check size={18} aria-hidden="true" style={{ color: 'var(--green)', flex: 'none', marginTop: 2 }} />
          <div className="stack" style={{ gap: 6, flex: 1 }}>
            <p><strong>{e.contradictionAccepted.by} accepted the explanation</strong> on {shortDate(e.contradictionAccepted.at)}: {e.contradictionAccepted.reason}</p>
            {mode === 'review' && <div><button className="btn btn-sm" type="button" onClick={() => edit((x) => { delete x.controls[cid].contradictionAccepted; }, true)}>Withdraw</button></div>}
          </div>
        </section>
      )}

      {s && (
        <Suggestion kind="control" id={cid} title={s.proposal && !s.how ? 'Suggested change' : 'Suggested entry'} disabled={d.signed}
          summary={s.proposal && !s.how ? 'a change to close the gap' : 'an entry drafted from the code'}
          onAccept={() => edit((x) => accept(x, 'control', cid))}
          onEdit={s.how ? () => { edit((x) => accept(x, 'control', cid, 'edited')); setTimeout(() => document.getElementById(`how-${cid}`)?.focus(), 0); } : undefined}
          onDismiss={() => edit((x) => dismiss(x, 'control', cid))}>
          {s.how && <div className="suggest-box"><span className="label">How it is implemented</span><p>{s.how}</p></div>}
          {s.evidence && <Evidence files={s.evidence.split(/,\s*/)} />}
          {s.proposal && (
            <div className="stack">
              <p>{s.proposal}</p>
              <div className="row">
                <button className="btn btn-sm" type="button" onClick={copyPrompt}><Copy size={14} aria-hidden="true" />{copied ? 'Copied' : 'Copy as a prompt for your coding agent'}</button>
                <span className="small muted">Accepting records it as the planned change.</span>
              </div>
            </div>
          )}
        </Suggestion>
      )}

      <section className="stack" style={{ gap: 12 }} aria-labelledby="entry-h">
        <h3 id="entry-h">Your entry</h3>
        <div className="row">
          <div className="seg" role="radiogroup" aria-label="Status">
            {statuses.map((st: Status) => (
              <button key={st} type="button" role="radio" aria-checked={e.status === st} disabled={d.signed} onClick={() => set({ status: st })}>{STATUS_LABELS[st]}</button>
            ))}
          </div>
          {sc.level === 0 && <span className="small muted" style={{ flex: '1 1 300px' }}>Level 0 applies because {sc.covers.join(' and ')} {sc.covers.length === 1 ? 'applies' : 'apply'}, whatever the scores. Implement it as stated; waive it only when the specific thing it concerns is not present in this system, with the evidence.</span>}
        </div>
        {e.status === 'waived' ? (
          <div className="stack" style={{ gap: 12 }}>
            <div className="field">
              <label className="label" htmlFor={`absent-${cid}`}>What it concerns that is not present in this system</label>
              <textarea id={`absent-${cid}`} className="textarea" rows={2} value={e.reason ?? ''} disabled={d.signed} placeholder="For example: the system runs no code the agent generates" onChange={(ev) => set({ reason: ev.target.value })} />
            </div>
            <div className="field">
              <label className="label" htmlFor={`wev-${cid}`}>Evidence that it is absent</label>
              <input id={`wev-${cid}`} className="input" value={e.evidence ?? ''} disabled={d.signed} placeholder="The configuration, code search or review that shows it" onChange={(ev) => set({ evidence: ev.target.value })} />
            </div>
            <span className="small muted">The reviewer sees every Level 0 waiver on the Sign-off and review page.</span>
          </div>
        ) : e.status === 'not-adopted' ? (
          <div className="field">
            <label className="label" htmlFor={`reason-${cid}`}>Why it is not adopted</label>
            <textarea id={`reason-${cid}`} className="textarea" rows={3} value={e.reason ?? ''} disabled={d.signed} placeholder="What makes it unnecessary or impractical here, and what covers the gap" onChange={(ev) => set({ reason: ev.target.value })} />
            <span className="small muted">The risks it covers appear under Residual risk.</span>
          </div>
        ) : (
          <>
            <div className={`field${contradicted ? ' field-bad' : ''}`}>
              <label className="label" htmlFor={`how-${cid}`}>How it is implemented</label>
              <textarea id={`how-${cid}`} className="textarea" rows={3} value={e.how ?? ''} disabled={d.signed} placeholder="What, where, and with which thresholds" onChange={(ev) => set({ how: ev.target.value })} />
            </div>
            <div className="grid-2">
              <div className="field">
                <label className="label" htmlFor={`ev-${cid}`}>Evidence</label>
                <input id={`ev-${cid}`} className="input mono" value={e.evidence ?? ''} disabled={d.signed} placeholder="Config file, test report, log query or review record" onChange={(ev) => set({ evidence: ev.target.value })} />
              </div>
              <div className="field">
                <label className="label" htmlFor={`own-${cid}`}>Owner</label>
                <input id={`own-${cid}`} className="input" value={e.owner ?? ''} disabled={d.signed} placeholder="Team or role" onChange={(ev) => set({ owner: ev.target.value })} />
              </div>
            </div>
          </>
        )}
        {(e.proposal || contradicted || check?.verdict === 'missing' || check?.verdict === 'partial') && (
          <div className="field">
            <label className="label" htmlFor={`plan-${cid}`}>Planned change</label>
            <textarea id={`plan-${cid}`} className="textarea" rows={2} value={e.proposal ?? ''} disabled={d.signed} placeholder="What the team will change to close the gap" onChange={(ev) => set({ proposal: ev.target.value })} />
          </div>
        )}
        {(ctl.evidence || ctl.test) && (
          <div className="stack" style={{ gap: 8, padding: '12px 14px', border: '1px solid var(--line)', borderRadius: 10, background: 'var(--panel-2)' }}>
            <span className="eyebrow">What to keep, and how to check it</span>
            {ctl.evidence && <p className="small"><strong>Evidence to keep.</strong> {ctl.evidence}</p>}
            {ctl.test && <p className="small"><strong>How to test it.</strong> {ctl.test}</p>}
            <div className="row small muted">
              {ctl.enforcement?.length ? <span>Enforced in {ctl.enforcement.join(' and ')}</span> : null}
              {ctl.owner && <span>· Owner: {ctl.owner}</span>}
              {ctl.phase?.length ? <span>· Phases: {ctl.phase.join(', ')}</span> : null}
            </div>
          </div>
        )}
        <details className="small">
          <summary style={{ cursor: 'pointer', color: 'var(--accent-text)', fontWeight: 500, minHeight: 32 }}>Guidance from the register</summary>
          <p style={{ marginTop: 8, maxWidth: '76ch' }}>{ctl.recommendations}</p>
          {ctl.references.length > 0 && <ul style={{ margin: '8px 0 0', paddingLeft: 18, overflowWrap: 'anywhere' }}>{ctl.references.map((u) => <li key={u}><a href={u} target="_blank" rel="noreferrer">{u}</a></li>)}</ul>}
        </details>
      </section>

      <Thread id={cid} />
    </article>
  );
}
