// Google Analytics events the default page-view tracking misses: what people search for,
// and downloads of the register's data and Markdown files (GA counts PDFs and CSVs itself).
(() => {
  const send = (name, params) => window.gtag && window.gtag('event', name, params);
  let timer;
  document.addEventListener('input', (e) => {
    const el = e.target;
    if (!(el instanceof HTMLInputElement) || !el.closest('site-search, .pagefind-ui')) return;
    clearTimeout(timer);
    timer = setTimeout(() => { if (el.value.trim().length > 2) send('search', { search_term: el.value.trim() }); }, 1500);
  });
  document.addEventListener('click', (e) => {
    const a = e.target instanceof Element && e.target.closest('a[href]');
    if (!a) return;
    const m = a.getAttribute('href').match(/\.(json|md|txt)(?:$|[?#])/);
    if (m) send('file_download', { file_extension: m[1], link_url: a.href });
  });
})();
