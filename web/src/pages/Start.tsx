import * as Dialog from '@radix-ui/react-dialog';
import { blankAssessment, type Assessment } from 'arc-core';
import { Plus, ShieldCheck, Terminal, Upload } from 'lucide-react';
import { useRef, useState } from 'react';
import { readAssessmentFile, readFromRepository, REPO_PATH } from '../lib/files';
import { ago, repoName } from '../lib/format';
import { href, navigate } from '../lib/route';
import { REGISTER as reg } from '../register';
import { grantDeskSample } from '../sample/grantdesk';
import { useStore } from '../store';

const SKILL_URL = 'https://github.com/govtech-responsibleai/arc-v2-draft/tree/main/skills';
const DOCS_URL = 'https://govtech-responsibleai.github.io/arc-v2-draft/';

export function Start() {
  const current = useStore((s) => s.a);
  const unsaved = useStore((s) => s.unsaved);
  const open = useStore((s) => s.open);
  const close = useStore((s) => s.close);
  const fileRef = useRef<HTMLInputElement>(null);
  const [repo, setRepo] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [replacing, setReplacing] = useState<Assessment | null>(null);
  const [closing, setClosing] = useState(false);

  const start = (a: Assessment, page = 'overview') => {
    if (current && unsaved) { setReplacing(a); return; }
    open(a);
    navigate([page]);
  };
  const onFile = async (file: File | undefined) => {
    if (!file) return;
    setError(null);
    const r = await readAssessmentFile(file);
    if (r.ok) start(r.value);
    else setError(`That file could not be opened: ${r.error}`);
  };
  const onRepo = async () => {
    setError(null);
    setBusy(true);
    const r = await readFromRepository(repo);
    setBusy(false);
    if (r.ok) start(r.value);
    else setError(r.error);
  };
  const count = (o: object) => Object.keys(o).length;

  return (
    <div className="app">
      <header className="topbar">
        <a className="brand" href={href()}><span className="brand-mark"><ShieldCheck size={17} aria-hidden="true" /></span>ARCvisor</a>
        <nav aria-label="Help" className="row" style={{ marginLeft: 'auto', gap: 20, fontSize: 14 }}>
          <a href={DOCS_URL}>ARC Framework</a>
          <a href={`${DOCS_URL}implementation/assessment-template/`}>Assessment template</a>
        </nav>
      </header>
      <main className="start">
        <section className="stack" style={{ gap: 12, maxWidth: 760 }}>
          <p className="eyebrow" style={{ color: 'var(--accent-text)' }}>Agentic Risk &amp; Capability Framework</p>
          <h1>Assess an agentic AI system, and keep the record</h1>
          <p className="muted" style={{ fontSize: 17 }}>
            The ARC skill reads the code in your repository and drafts the assessment. ARCvisor is where people check it, decide,
            and sign: what the system can do, which risks and controls apply, the evidence for each, and who accepted what.
          </p>
        </section>

        {error && <p className="error" role="alert">{error}</p>}

        <section aria-label="Ways to start" className="start-cards">
          <article className="start-card primary">
            <span className="start-icon" style={{ background: 'var(--accent-soft)', color: 'var(--accent-text)' }}><Upload size={20} aria-hidden="true" /></span>
            <h2 style={{ fontSize: 18 }}>Open an assessment</h2>
            <p className="muted small">Open the <span className="mono">.arc.json</span> file the ARC skill wrote to your repository, or one a colleague sent you to review.</p>
            <div className="stack" style={{ gap: 10, marginTop: 'auto' }}>
              <input ref={fileRef} type="file" accept=".json,application/json" className="sr-only" aria-label="Assessment file" onChange={(e) => onFile(e.target.files?.[0])} />
              <button className="btn btn-primary" type="button" onClick={() => fileRef.current?.click()}>Choose a file</button>
              <label className="label" htmlFor="open-repo">Or open from a public repository</label>
              <div className="row" style={{ flexWrap: 'nowrap' }}>
                <input id="open-repo" className="input mono" placeholder="github.com/org/repository" value={repo} onChange={(e) => setRepo(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter' && repo.trim()) onRepo(); }} />
                <button className="btn" type="button" disabled={!repo.trim() || busy} onClick={onRepo}>{busy ? 'Opening…' : 'Open'}</button>
              </div>
              <p className="small muted">Reads <span className="mono">{REPO_PATH}</span> from the default branch.</p>
            </div>
          </article>

          <article className="start-card">
            <span className="start-icon" style={{ background: 'var(--violet-soft-2)', color: 'var(--violet)' }}><Terminal size={20} aria-hidden="true" /></span>
            <h2 style={{ fontSize: 18 }}>Assess with your coding agent</h2>
            <p className="muted small">For private code. The ARC skill runs in your coding agent, reads the code where it lives, and writes the assessment file into the repository for you to open here.</p>
            <div className="stack" style={{ gap: 10, marginTop: 'auto' }}>
              <div className="terminal" aria-label="Commands">
                <div><span className="muted">$</span> /arc-assessment</div>
                <div className="muted">→ {REPO_PATH}</div>
              </div>
              <p className="small muted">Your code goes only to the model your agent already uses.</p>
              <a className="btn" href={SKILL_URL}>Install the ARC skill</a>
            </div>
          </article>

          <article className="start-card">
            <span className="start-icon"><Plus size={20} aria-hidden="true" /></span>
            <h2 style={{ fontSize: 18 }}>Start in the browser</h2>
            <p className="muted small">Answer the questions yourself, or open the sample to see a finished first revision and a second one under review.</p>
            <div className="stack" style={{ gap: 10, marginTop: 'auto' }}>
              <button className="btn" type="button" onClick={() => start(blankAssessment(), 'system')}>Start a new assessment</button>
              <button className="btn" type="button" onClick={() => start(grantDeskSample(reg))}>Try the sample: GrantDesk assistant</button>
            </div>
          </article>
        </section>

        {current && (
          <section aria-labelledby="recent-h" className="stack" style={{ gap: 12 }}>
            <h2 id="recent-h" style={{ fontSize: 15 }}>In this browser</h2>
            <div className="panel">
              <div className="panel-row" style={{ borderTop: 0 }}>
                <div className="stack" style={{ gap: 4, flex: '1 1 280px', minWidth: 0 }}>
                  <span style={{ fontWeight: 600 }}>{current.system.name || 'Untitled system'}</span>
                  <span className="small muted">
                    {current.code ? <>From <span className="mono">{repoName(current.code.url)}</span> · </> : null}edited {ago(current.updatedAt)}
                    {unsaved ? ' · changes not saved to a file' : ''}
                  </span>
                </div>
                <span className="chip">Revision {current.revision} · {current.signoff.signedAt ? 'signed' : 'draft'}</span>
                <button className="btn" type="button" onClick={() => setClosing(true)}>Close</button>
                <a className="btn btn-primary" href={href(['overview'])}>Continue</a>
              </div>
            </div>
          </section>
        )}

        <footer className="spread small muted" style={{ paddingTop: 24, borderTop: '1px solid var(--line)' }}>
          <span>Register <span className="mono">{reg.version.version}</span> · {count(reg.capabilities)} capabilities · {count(reg.risks)} risks · {count(reg.controls)} controls, read from the register YAML</span>
          <span>Assessments stay in your browser and in files you keep. Nothing is stored on a server.</span>
        </footer>
      </main>

      <Confirm open={!!replacing} title="Replace the open assessment?"
        body="The assessment open in this browser has changes that are not saved to a file. Opening another one removes it from here."
        confirm="Replace it" onCancel={() => setReplacing(null)}
        onConfirm={() => { if (replacing) { open(replacing); navigate(['overview']); } setReplacing(null); }} />
      <Confirm open={closing} title="Close this assessment?"
        body={unsaved ? 'It has changes that are not saved to a file. Closing removes it from this browser.' : 'Closing removes it from this browser. Your saved file is unaffected.'}
        confirm="Close it" onCancel={() => setClosing(false)} onConfirm={() => { close(); setClosing(false); }} />
    </div>
  );
}

export function Confirm({ open, title, body, confirm, onConfirm, onCancel }: {
  open: boolean; title: string; body: string; confirm: string; onConfirm: () => void; onCancel: () => void;
}) {
  return (
    <Dialog.Root open={open} onOpenChange={(o) => { if (!o) onCancel(); }}>
      <Dialog.Portal>
        <Dialog.Overlay className="overlay" />
        <Dialog.Content className="dialog">
          <Dialog.Title asChild><h2>{title}</h2></Dialog.Title>
          <Dialog.Description className="muted">{body}</Dialog.Description>
          <div className="row" style={{ justifyContent: 'flex-end' }}>
            <button className="btn" type="button" onClick={onCancel}>Cancel</button>
            <button className="btn btn-primary" type="button" onClick={onConfirm}>{confirm}</button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
