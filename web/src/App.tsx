import { useEffect } from 'react';
import { PAGES, Shell, type PageId } from './components/Shell';
import { useRoute } from './lib/route';
import { Capabilities } from './pages/Capabilities';
import { Controls } from './pages/Controls';
import { Overview } from './pages/Overview';
import { Residual } from './pages/Residual';
import { Review } from './pages/Review';
import { Risks } from './pages/Risks';
import { Start } from './pages/Start';
import { System } from './pages/System';
import { useStore } from './store';

const BODY: Record<PageId, (p: { param?: string }) => React.ReactElement> = {
  overview: Overview, system: System, capabilities: Capabilities, risks: Risks, controls: Controls, residual: Residual, review: Review,
};

export function App() {
  const { path } = useRoute();
  const open = useStore((s) => s.a !== null);
  const page = PAGES.find((p) => p.id === path[0])?.id;

  // A new page starts at the top; moving between items in a list keeps the scroll position
  useEffect(() => { document.documentElement.scrollTop = 0; }, [page]);
  useEffect(() => {
    const label = PAGES.find((p) => p.id === page)?.label;
    document.title = label && open ? `${label} · ARCvisor` : 'ARCvisor';
  }, [page, open]);

  if (!open || !page) return <Start />;
  const Body = BODY[page];
  return <Shell page={page}><Body param={path[1]} /></Shell>;
}
