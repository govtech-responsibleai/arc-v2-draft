import * as Dialog from '@radix-ui/react-dialog';
import { GitBranch, ShieldCheck, Download, FileText, UserRound } from 'lucide-react';
import { useState, type ReactNode } from 'react';
import { REGISTER as reg } from '../register';
import { useDerived } from '../lib/derived';
import { exportReport, saveAssessment } from '../lib/files';
import { repoName, shortDate } from '../lib/format';
import { href } from '../lib/route';
import { useAssessment, useStore } from '../store';

export const PAGES = [
  { id: 'overview', label: 'Overview' },
  { id: 'system', label: 'System' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'risks', label: 'Risks' },
  { id: 'controls', label: 'Controls' },
  { id: 'residual', label: 'Residual risk' },
  { id: 'review', label: 'Sign-off and review' },
] as const;
export type PageId = (typeof PAGES)[number]['id'];

function Brand() {
  return (
    <a className="brand" href={href()}>
      <span className="brand-mark"><ShieldCheck size={17} aria-hidden="true" /></span>
      ARCvisor
    </a>
  );
}

export function MeDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (o: boolean) => void }) {
  const me = useStore((s) => s.me);
  const setMe = useStore((s) => s.setMe);
  const [name, setName] = useState(me.name);
  const [role, setRole] = useState(me.role);
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="overlay" />
        <Dialog.Content className="dialog">
          <Dialog.Title asChild><h2>Your name and role</h2></Dialog.Title>
          <Dialog.Description className="muted small">Shown with your comments and your review verdict. Kept in this browser, not in the file.</Dialog.Description>
          <div className="field"><label className="label" htmlFor="me-name">Name</label><input id="me-name" className="input" value={name} onChange={(e) => setName(e.target.value)} /></div>
          <div className="field"><label className="label" htmlFor="me-role">Role</label><input id="me-role" className="input" value={role} onChange={(e) => setRole(e.target.value)} placeholder="e.g. AI governance lead" /></div>
          <div className="row" style={{ justifyContent: 'flex-end' }}>
            <Dialog.Close asChild><button className="btn" type="button">Cancel</button></Dialog.Close>
            <button className="btn btn-primary" type="button" onClick={() => { setMe({ name: name.trim(), role: role.trim() }); onOpenChange(false); }}>Save</button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function TopBar() {
  const a = useAssessment();
  const mode = useStore((s) => s.mode);
  const setMode = useStore((s) => s.setMode);
  const unsaved = useStore((s) => s.unsaved);
  const markSaved = useStore((s) => s.markSaved);
  const me = useStore((s) => s.me);
  const [meOpen, setMeOpen] = useState(false);
  const signed = !!a.signoff.signedAt;
  return (
    <header className="topbar">
      <Brand />
      <span className="topbar-sep" aria-hidden="true" />
      <div className="topbar-doc">
        <span className="topbar-name">{a.system.name || 'Untitled system'}</span>
        <span className={signed ? 'chip chip-green' : 'chip'}>Revision {a.revision} · {signed ? 'signed' : 'draft'}</span>
        <span className="chip mono">register {reg.version.version}</span>
      </div>
      <div className="seg" role="group" aria-label="Mode">
        <button type="button" aria-pressed={mode === 'assess'} onClick={() => setMode('assess')}>Assess</button>
        <button type="button" aria-pressed={mode === 'review'} onClick={() => setMode('review')}>Review</button>
      </div>
      <div className="row">
        <button className="btn btn-quiet btn-sm" type="button" onClick={() => setMeOpen(true)} aria-label="Your name and role">
          <UserRound size={16} aria-hidden="true" />{me.name || 'Set your name'}
        </button>
        <button className="btn" type="button" onClick={() => exportReport(reg, a)}><FileText size={16} aria-hidden="true" />Export report</button>
        <button className="btn btn-primary" type="button" onClick={() => { saveAssessment(a); markSaved(); }}>
          <Download size={16} aria-hidden="true" />Save file
        </button>
        {unsaved && <span className="small muted" role="status">Unsaved changes</span>}
      </div>
      <MeDialog open={meOpen} onOpenChange={setMeOpen} />
    </header>
  );
}

function Sidebar({ page }: { page: PageId }) {
  const a = useAssessment();
  const d = useDerived();
  const mode = useStore((s) => s.mode);
  const me = useStore((s) => s.me);
  const left = (p: { done: number; total: number }, verb: string) =>
    p.total === 0 ? { text: '', cls: 'count' } : p.done >= p.total ? { text: 'Done', cls: 'count count-ok' } : { text: `${p.total - p.done} ${verb}`, cls: 'count count-warn' };
  const counts: Record<PageId, { text: string; cls: string }> = {
    overview: { text: '', cls: 'count' },
    system: left(d.progress.system, 'to fill'),
    capabilities: left(d.progress.capabilities, 'to decide'),
    risks: left(d.progress.risks, 'to score'),
    controls: left(d.progress.controls, 'to do'),
    residual: left(d.progress.residual, 'to do'),
    review: d.signed ? { text: 'Signed', cls: 'count count-ok' } : d.blockers.length ? { text: `${d.blockers.length} to clear`, cls: 'count' } : { text: 'Ready', cls: 'count count-ok' },
  };
  return (
    <aside className="sidebar">
      <nav className="nav" aria-label="Assessment">
        {PAGES.map((p) => (
          <a key={p.id} href={href([p.id])} aria-current={page === p.id ? 'page' : undefined}>
            <span>{p.label}</span><span className={counts[p.id].cls}>{counts[p.id].text}</span>
          </a>
        ))}
      </nav>
      {mode === 'review' ? (
        <section className="side-card side-card-review" aria-label="Review mode">
          <span className="eyebrow" style={{ color: 'var(--accent-text)' }}>Review mode</span>
          <span>Reviewing as <strong>{me.name || 'someone without a name yet'}</strong>{me.role ? `, ${me.role}` : ''}</span>
          <span className="muted">Your comments and verdict are saved in the assessment file.</span>
        </section>
      ) : a.code ? (
        <section className="side-card" aria-label="Source code">
          <span className="eyebrow">Source</span>
          <span className="mono" style={{ fontSize: 12, overflowWrap: 'anywhere' }}>{repoName(a.code.url)}</span>
          {(a.code.branch || a.code.commit) && (
            <span className="row muted" style={{ gap: 6 }}><GitBranch size={14} aria-hidden="true" /><span className="mono" style={{ fontSize: 12 }}>{a.code.branch}{a.code.commit ? ` @ ${a.code.commit}` : ''}</span></span>
          )}
          {a.code.readAt && <span className="muted">Read{a.ai.source ? ` by the ${a.ai.source}` : ''} on {shortDate(a.code.readAt)}</span>}
          <span className="muted">To check again, run the ARC skill in the repository and open the new file.</span>
        </section>
      ) : null}
    </aside>
  );
}

export function Shell({ page, children }: { page: PageId; children: ReactNode }) {
  return (
    <div className="app">
      <TopBar />
      <div className="body">
        <Sidebar page={page} />
        <main className="main" id="main">{children}</main>
      </div>
    </div>
  );
}
