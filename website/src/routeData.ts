import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

const SITE = 'https://govtech-responsibleai.github.io/arc-v2-draft/';
const BASE = new URL(SITE).pathname;

// A review copy of a draft has src/review.json (see astro.config.mjs); its banner goes on every page.
const review = Object.values(import.meta.glob<{ banner?: string }>('./review.json', { eager: true, import: 'default' }))[0];

/** Key for a page from its path: '' for the homepage, else e.g. 'arc_framework/controls'. */
export const pageKey = (pathname: string) => pathname.replace(BASE, '').replace(/\/$/, '');

// Each page gets its own link-preview card (src/pages/og/[...slug].png.ts) and, where it has one,
// a link to its Markdown copy (written by scripts/build_site.py) for agents.
export const onRequest = defineRouteMiddleware((context) => {
  const route = context.locals.starlightRoute;
  const key = pageKey(context.url.pathname);
  const card = `${SITE}og/${key || 'index'}.png`;
  route.head.push(
    { tag: 'meta', attrs: { property: 'og:image', content: card } },
    { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
    { tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
    { tag: 'meta', attrs: { name: 'twitter:image', content: card } },
  );
  const file = route.entry?.filePath?.split('src/content/docs/')[1];
  const twin = !key ? 'index.md' : file;
  if (twin) route.head.push({ tag: 'link', attrs: { rel: 'alternate', type: 'text/markdown', href: BASE + twin } });
  if (review?.banner && route.entry && !route.entry.data.banner) route.entry.data.banner = { content: review.banner };
});
