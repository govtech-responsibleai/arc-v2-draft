// Filters for the list of risks on /arc_framework/risk-register/. The list is complete without
// this script; it only hides rows. Filters are kept in the address (?element=CAP-07&q=prompt),
// so a filtered list can be shared, and other pages can link straight to one.
(() => {
  const root = document.querySelector('[data-arc-register]');
  if (!root) return;
  const form = root.querySelector('[data-arc-filters]');
  const rows = [...root.querySelectorAll('tbody tr')];
  const shown = root.querySelector('[data-arc-shown]');
  const empty = root.querySelector('.arc-empty');
  const fields = ['element', 'mode', 'hazard', 'type', 'q'];

  const params = new URLSearchParams(location.search);
  fields.forEach((f) => { if (params.has(f)) form.elements[f].value = params.get(f); });

  function apply() {
    const v = Object.fromEntries(fields.map((f) => [f, form.elements[f].value.trim()]));
    const words = v.q.toLowerCase().split(/\s+/).filter(Boolean);
    let n = 0;
    for (const row of rows) {
      const d = row.dataset;
      const ok = (!v.element || d.elements.split(' ').includes(v.element))
        && (!v.mode || d.mode === v.mode)
        && (!v.hazard || d.hazards.split(' ').includes(v.hazard))
        && (!v.type || d.type.split(' ').includes(v.type))
        && words.every((w) => d.text.includes(w));
      row.hidden = !ok;
      if (ok) n++;
    }
    shown.textContent = String(n);
    empty.hidden = n > 0;
    const p = new URLSearchParams();
    fields.forEach((f) => { if (v[f]) p.set(f, v[f]); });
    history.replaceState(null, '', p.toString() ? `?${p}` : location.pathname);
  }

  form.addEventListener('input', apply);
  form.addEventListener('submit', (e) => e.preventDefault());
  form.addEventListener('reset', () => setTimeout(apply));
  apply();
})();
