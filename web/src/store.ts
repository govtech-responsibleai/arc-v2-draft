// The open assessment and the viewer's preferences. The assessment autosaves to this browser; files are the way to
// share it. Nothing is sent to a server.
import { parseAssessment, type Assessment } from 'arc-core';
import { create } from 'zustand';

const ASSESSMENT_KEY = 'arcvisor:assessment:v1';
const PREFS_KEY = 'arcvisor:prefs:v1';

export type Mode = 'assess' | 'review';
export interface Me { name: string; role: string }
interface Prefs { mode: Mode; me: Me }

function read(key: string): unknown {
  try {
    const s = localStorage.getItem(key);
    return s ? JSON.parse(s) : null;
  } catch {
    return null;
  }
}

function write(key: string, value: unknown): void {
  try {
    if (value == null) localStorage.removeItem(key);
    else localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage can be full or blocked; the app keeps working, and the file is the durable copy
  }
}

function storedAssessment(): Assessment | null {
  const raw = read(ASSESSMENT_KEY);
  if (!raw) return null;
  const r = parseAssessment(raw);
  return r.ok ? r.value : null;
}

function storedPrefs(): Prefs {
  const p = (read(PREFS_KEY) ?? {}) as Partial<Prefs>;
  return { mode: p.mode === 'review' ? 'review' : 'assess', me: { name: p.me?.name ?? '', role: p.me?.role ?? '' } };
}

interface State extends Prefs {
  a: Assessment | null;
  /** Changed since it was last saved to a file. */
  unsaved: boolean;
  open: (a: Assessment) => void;
  close: () => void;
  /** Change the open assessment. Signed revisions refuse edits unless `evenIfSigned` (comments and the review verdict). */
  edit: (change: (draft: Assessment) => void, evenIfSigned?: boolean) => void;
  replace: (a: Assessment) => void;
  setMode: (mode: Mode) => void;
  setMe: (me: Me) => void;
  markSaved: () => void;
}

export const useStore = create<State>()((set, get) => {
  const prefs = storedPrefs();
  const keepPrefs = (p: Partial<Prefs>) => write(PREFS_KEY, { mode: get().mode, me: get().me, ...p });
  return {
    ...prefs,
    a: storedAssessment(),
    unsaved: false,
    open: (a) => { write(ASSESSMENT_KEY, a); set({ a, unsaved: false }); },
    close: () => { write(ASSESSMENT_KEY, null); set({ a: null, unsaved: false }); },
    edit: (change, evenIfSigned = false) => {
      const cur = get().a;
      if (!cur || (cur.signoff.signedAt && !evenIfSigned)) return;
      const next = structuredClone(cur);
      change(next);
      next.updatedAt = new Date().toISOString();
      write(ASSESSMENT_KEY, next);
      set({ a: next, unsaved: true });
    },
    replace: (a) => { write(ASSESSMENT_KEY, a); set({ a, unsaved: true }); },
    setMode: (mode) => { keepPrefs({ mode }); set({ mode }); },
    setMe: (me) => { keepPrefs({ me }); set({ me }); },
    markSaved: () => set({ unsaved: false }),
  };
});

/** The open assessment. Pages render only when one is open, so this is never null inside them. */
export function useAssessment(): Assessment {
  const a = useStore((s) => s.a);
  if (!a) throw new Error('No assessment is open');
  return a;
}
