// Link-preview cards (1200 x 630 PNG), one per page, drawn at build time with Satori and resvg.
// Fonts come from the installed @fontsource packages, so the cards look the same on any machine.
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import sprites from '../pixels/sprites.json';
import palette from '../pixels/palette.json';

const font = (path: string) => readFileSync(join(process.cwd(), 'node_modules', path));
const FONTS = [
  { name: 'Inter', data: font('@fontsource/inter/files/inter-latin-400-normal.woff'), weight: 400 as const },
  { name: 'Inter', data: font('@fontsource/inter/files/inter-latin-700-normal.woff'), weight: 700 as const },
  { name: 'Pixelify Sans', data: font('@fontsource/pixelify-sans/files/pixelify-sans-latin-700-normal.woff'), weight: 700 as const },
];
const HEX: Record<string, string> = {
  ink: '#0e2a30', navy: '#12313a', cream: '#f3e4b6', 'cream-2': '#d6c08a', teal: '#52a8ad', 'teal-2': '#2f7c82', 'teal-3': '#9fdcd8',
  orange: '#f2901d', yellow: '#ffd24a', white: '#ffffff', blue: '#4f8fd6', 'blue-2': '#2f5f9e', green: '#5cb85c', 'green-2': '#2f7d3a',
  red: '#d9534a', 'red-2': '#9e2f2a', pink: '#f2a5b8', 'pink-2': '#c76d88', grey: '#aab7bc', 'grey-2': '#66767d', brown: '#8a5a2b',
};

function spriteDataUri(name: keyof typeof sprites): { uri: string; w: number; h: number } {
  const rows: string[] = sprites[name];
  const pal = palette as Record<string, string>;
  const rects = rows.flatMap((row, y) => [...row].map((c, x) => (c === '.' ? '' : `<rect x="${x}" y="${y}" width="1" height="1" fill="${HEX[pal[c]]}"/>`))).join('');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${rows[0].length} ${rows.length}" shape-rendering="crispEdges">${rects}</svg>`;
  return { uri: `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`, w: rows[0].length, h: rows.length };
}

const h = (type: string, style: Record<string, unknown>, children?: unknown) => ({ type, props: { style, children } });

export interface Card { title: string; section: string; sprite?: keyof typeof sprites; tag?: string }

export async function renderCard({ title, section, sprite = 'robot', tag }: Card): Promise<Uint8Array> {
  const art = spriteDataUri(sprite);
  const scale = Math.floor(Math.min(300 / art.w, 340 / art.h));
  const size = title.length <= 36 ? 66 : title.length <= 64 ? 56 : 46;
  const tree = h('div', { width: 1200, height: 630, display: 'flex', background: '#f3e4b6', padding: 24 }, [
    h('div', { display: 'flex', flex: 1, border: '8px solid #0e2a30', padding: '52px 64px', alignItems: 'center', justifyContent: 'space-between' }, [
      h('div', { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: 720, height: '100%' }, [
        h('div', { display: 'flex', fontFamily: 'Pixelify Sans', fontWeight: 700, fontSize: 34, color: '#2f7c82' }, `ARC Framework · ${section}`),
        h('div', { display: 'flex', flexDirection: 'column', gap: 18 }, [
          ...(tag ? [h('div', { display: 'flex', alignSelf: 'flex-start', fontFamily: 'Inter', fontWeight: 700, fontSize: 28, color: '#f3e4b6', background: '#0e2a30', padding: '6px 14px' }, tag)] : []),
          h('div', { display: 'flex', fontFamily: 'Inter', fontWeight: 700, fontSize: size, lineHeight: 1.12, color: '#0e2a30' }, title),
        ]),
        h('div', { display: 'flex', fontFamily: 'Inter', fontWeight: 400, fontSize: 26, color: '#354b52' }, 'Agentic Risk & Capability Framework · GovTech Singapore'),
      ]),
      { type: 'img', props: { src: art.uri, width: art.w * scale, height: art.h * scale } },
    ]),
  ]);
  const svg = await satori(tree as never, { width: 1200, height: 630, fonts: FONTS });
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
  return new Uint8Array(await sharp(png).png({ palette: true, colours: 64, compressionLevel: 9 }).toBuffer());   // about a third of the size
}

/** The section a page belongs to, from its path. */
export function sectionOf(key: string): string {
  if (key.startsWith('register') || ['arc_framework/risk-register', 'arc_framework/register-full-text', 'arc_framework/crosswalks', 'arc_framework/changelog'].includes(key)) return 'Register';
  if (key.startsWith('implementation') || key === 'explorer') return 'Use ARC';
  if (key.startsWith('arc_framework')) return 'Framework';
  return 'About';
}
