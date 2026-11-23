import { SYSTEM_FIELDS, type SystemField } from 'arc-core';
import { Sparkles } from 'lucide-react';
import { PageHead } from '../components/ui';
import { Thread } from '../components/Thread';
import { useDerived } from '../lib/derived';
import { repoName } from '../lib/format';
import { accept, dismiss, isPending, touch } from '../lib/suggest';
import { useAssessment, useStore } from '../store';

function FieldInput({ f, value, disabled, onChange }: { f: SystemField; value: string; disabled: boolean; onChange: (v: string) => void }) {
  const id = `sys-${f.key}`;
  if (f.kind === 'select') {
    return (
      <select id={id} className="select" value={value} disabled={disabled} onChange={(e) => onChange(e.target.value)}>
        <option value="">Choose…</option>
        {f.options!.map((o) => <option key={o}>{o}</option>)}
      </select>
    );
  }
  if (f.kind === 'long') return <textarea id={id} className="textarea" rows={3} value={value} disabled={disabled} onChange={(e) => onChange(e.target.value)} />;
  return <input id={id} className="input" value={value} disabled={disabled} onChange={(e) => onChange(e.target.value)} />;
}

export function System() {
  const a = useAssessment();
  const d = useDerived();
  const edit = useStore((s) => s.edit);
  const unknown = new Set(a.code?.unknown ?? []);
  return (
    <>
      <PageHead title="System" lede="What the system is and how far it acts on its own: section 0 of the assessment template. Every later score depends on these answers." />

      {a.code && (
        <section className="panel panel-pad" aria-labelledby="code-h">
          <div className="spread">
            <h2 id="code-h">What the code shows</h2>
            <span className="small muted">
              {a.code.filesRead != null && a.code.filesTotal != null ? `${a.code.filesRead} of ${a.code.filesTotal} files read from ` : 'Read from '}
              <span className="mono">{repoName(a.code.url)}</span>{a.code.commit ? <> at <span className="mono">{a.code.commit}</span></> : ''}
            </span>
          </div>
          <dl className="stack" style={{ margin: 0, gap: 10 }}>
            {a.code.findings.map((f) => (
              <div key={f.area} className="row" style={{ alignItems: 'baseline', flexWrap: 'nowrap', gap: 16 }}>
                <dt style={{ flex: '0 0 150px', fontWeight: 600, fontSize: 13, color: 'var(--ink-2)' }}>{f.area}</dt>
                <dd style={{ margin: 0, fontSize: 14 }}>{f.text} {f.files.map((p) => <span key={p} className="chip chip-line mono" style={{ marginLeft: 4 }}>{p}</span>)}</dd>
              </div>
            ))}
          </dl>
          {unknown.size > 0 && <p className="banner banner-warn" style={{ padding: '8px 12px' }}>The code can't tell us {Array.from(unknown).map((k) => SYSTEM_FIELDS.find((f) => f.key === k)?.label.toLowerCase() ?? k).join(', ')}. Answer these below.</p>}
        </section>
      )}

      <div className="grid-2">
        {SYSTEM_FIELDS.map((f) => {
          const value = a.system[f.key] ?? '';
          const pending = isPending(a, 'system', f.key);
          const need = unknown.has(f.key) && !value.trim();
          return (
            <div key={f.key} className={`field${need ? ' field-warn' : ''}`} style={f.kind === 'long' ? { gridColumn: '1 / -1' } : undefined}>
              <div className="spread">
                <label className="label" htmlFor={`sys-${f.key}`}>{f.label}{!f.required && <span className="muted" style={{ fontWeight: 400 }}> · optional</span>}</label>
                {need && <span className="small" style={{ color: 'var(--amber)', fontWeight: 600 }}>Not in the code: answer this</span>}
              </div>
              <FieldInput f={f} value={value} disabled={d.signed} onChange={(v) => edit((x) => { x.system[f.key] = v; touch(x, 'system', f.key); })} />
              {pending && (
                <div className="suggest" style={{ padding: 12, gap: 8 }}>
                  <span className="row small" style={{ color: 'var(--violet)', fontWeight: 600 }}><Sparkles size={14} aria-hidden="true" />Suggested by the {a.ai.source ?? 'AI'}</span>
                  <p style={{ fontSize: 14 }}>{a.ai.system[f.key]}</p>
                  <div className="row">
                    <button className="btn btn-sm" type="button" disabled={d.signed} onClick={() => edit((x) => dismiss(x, 'system', f.key))}>Dismiss</button>
                    <button className="btn btn-sm btn-ai" type="button" disabled={d.signed} onClick={() => edit((x) => accept(x, 'system', f.key))}>Accept</button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <Thread id="system" />
    </>
  );
}
