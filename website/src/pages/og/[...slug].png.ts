// One link-preview card per page, at /og/<page>.png (see src/routeData.ts, which points each page at its card).
import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { renderCard, sectionOf, type Card } from '../../og/card';

export const getStaticPaths: GetStaticPaths = async () => {
  const docs = await getCollection('docs');
  const pages: { params: { slug: string }; props: Card }[] = docs.map((d) => {
    const card = (d.data as { arcCard?: Partial<Card> }).arcCard ?? {};
    // Entry pages are titled "RISK-034 · ..."; the card shows the ID as a tag, so drop it from the title
    const title = card.tag ? d.data.title.replace(/^[A-Z]+-\d+ · /, '') : d.data.title;
    return { params: { slug: d.id }, props: { title, section: sectionOf(d.id), ...card } };
  });
  pages.push(
    { params: { slug: 'index' }, props: { title: 'Identify and manage your agent’s capabilities and risks', section: 'Home' } },
    { params: { slug: 'explorer' }, props: { title: 'What applies to my system?', section: 'Use ARC', sprite: 'robot-lens' } },
  );
  return pages;
};

export const GET: APIRoute = async ({ props }) =>
  new Response(await renderCard(props as Card), { headers: { 'Content-Type': 'image/png' } });
