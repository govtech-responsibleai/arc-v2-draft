// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
import { satteri } from '@astrojs/markdown-satteri';
import headingIds from './src/plugins/heading-ids.mjs';
import { existsSync, readFileSync } from 'node:fs';

const REPO = 'https://github.com/govtech-responsibleai/arc-v2-draft';
const GA = 'G-VDHLWLGZ1W';
const SITE = 'https://govtech-responsibleai.github.io/arc-v2-draft/'; // also SITE in scripts/build_site.py
const BASE = new URL(SITE).pathname; // the site's base path, from SITE, so a review copy that rewrites SITE moves it too

// A review copy of a draft (review/make_review_copy.py) writes src/review.json: its own site title, a banner
// for every page (src/routeData.ts), no search-engine indexing, and none of the published site's analytics.
const REVIEW_FILE = new URL('./src/review.json', import.meta.url);
const REVIEW = existsSync(REVIEW_FILE) ? JSON.parse(readFileSync(REVIEW_FILE, 'utf8')) : null;

export default defineConfig({
  site: new URL(SITE).origin,
  base: BASE.replace(/\/$/, ''),
  markdown: {
    // MkDocs had no smart quotes; keep the text as written
    processor: satteri({ mdastPlugins: [headingIds], features: { smartPunctuation: false } }),
  },
  integrations: [
    starlight({
      title: REVIEW?.title ?? 'ARC Framework',
      description:
        'A technical governance framework for identifying, assessing, and mitigating safety and security risks in agentic AI systems, from GovTech Singapore.',
      logo: { src: './src/assets/arc-robot.svg', alt: 'ARC' },
      favicon: '/favicon.svg',
      social: [
        { icon: 'github', label: 'GitHub', href: REPO },
        { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/govtech-singapore' },
        { icon: 'x.com', label: 'X', href: 'https://x.com/GovTechSG' },
      ],
      editLink: { baseUrl: `${REPO}/edit/main/docs/` }, // each page sets its own editUrl (scripts/build_site.py)
      lastUpdated: false,
      // Per page: its own link-preview card and a link to its Markdown copy (src/routeData.ts)
      routeMiddleware: './src/routeData.ts',
      // Footer: the feedback link under each page. PageFrame: the site footer below everything.
      components: { Footer: './src/components/Footer.astro', PageFrame: './src/components/PageFrame.astro' },
      customCss: [
        '@fontsource-variable/inter',
        '@fontsource/pixelify-sans/500.css',
        '@fontsource/pixelify-sans/600.css',
        '@fontsource/pixelify-sans/700.css',
        './src/styles/custom.css',
      ],
      head: [
        { tag: 'link', attrs: { rel: 'alternate', type: 'text/plain', title: 'llms.txt', href: `${SITE}llms.txt` } },
        ...(REVIEW
          ? [{ tag: 'meta', attrs: { name: 'robots', content: 'noindex, nofollow' } }]
          : [
              { tag: 'script', attrs: { src: `${BASE}js/analytics.js`, defer: true } },
              // Google Search Console: set GOOGLE_SITE_VERIFICATION in the deploy job to the token it gives you
              ...(process.env.GOOGLE_SITE_VERIFICATION
                ? [{ tag: 'meta', attrs: { name: 'google-site-verification', content: process.env.GOOGLE_SITE_VERIFICATION } }]
                : []),
              { tag: 'script', attrs: { async: true, src: `https://www.googletagmanager.com/gtag/js?id=${GA}` } },
              {
                tag: 'script',
                content: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA}');`,
              },
            ]),
      ],
      sidebar: [
        {
          label: 'Framework',
          items: [
            { label: 'ARC in five minutes', slug: 'arc_framework/in-five-minutes' },
            { label: 'Introduction', slug: 'arc_framework/introduction' },
            { label: 'Elements', slug: 'arc_framework/elements' },
            { label: 'Risks', slug: 'arc_framework/risks' },
            { label: 'Capability combinations', slug: 'arc_framework/capability-combinations' },
            { label: 'Controls', slug: 'arc_framework/controls' },
            { label: 'Glossary', slug: 'glossary' },
          ],
        },
        {
          label: 'Use ARC',
          items: [
            { label: 'What applies to my system?', link: '/explorer/' },
            { label: 'Implementing ARC', slug: 'implementation' },
            { label: 'For governance teams', slug: 'implementation/for-governance-teams' },
            { label: 'For AI developers', slug: 'implementation/for-ai-developers' },
            { label: 'Worked examples', slug: 'implementation/examples' },
            { label: 'Assessment template', slug: 'implementation/assessment-template' },
          ],
        },
        {
          label: 'Register',
          items: [
            { label: 'Overview', slug: 'register' },
            { label: 'All risks', slug: 'arc_framework/risk-register' },
            { label: 'All controls', slug: 'register/controls' },
            { label: 'All elements', slug: 'register/elements' },
            { label: 'Full text', slug: 'arc_framework/register-full-text' },
            {
              label: 'Crosswalks',
              collapsed: true,
              items: [
                { label: 'Overview', slug: 'arc_framework/crosswalks' },
                { label: 'OWASP Top 10 for Agentic Apps', slug: 'register/crosswalks/owasp-asi' },
                { label: 'OWASP agentic threats', slug: 'register/crosswalks/owasp-threats' },
                { label: 'CSA addendum', slug: 'register/crosswalks/csa' },
                { label: 'IMDA framework', slug: 'register/crosswalks/imda' },
                { label: 'MITRE ATLAS', slug: 'register/crosswalks/mitre-atlas' },
                { label: 'Five Eyes guidance', slug: 'register/crosswalks/five-eyes' },
              ],
            },
            { label: 'Data', slug: 'register/data' },
            { label: 'Keeping it current', slug: 'arc_framework/keeping-current' },
            { label: 'Changelog', slug: 'arc_framework/changelog' },
          ],
        },
        {
          label: 'About',
          items: [
            { label: 'About ARC', slug: 'about' },
            { label: 'Resources', slug: 'resources' },
          ],
        },
      ],
      plugins: [starlightLinksValidator({ errorOnRelativeLinks: false })],
    }),
  ],
});
