// Render a sprite (a grid of palette letters, "." = transparent) as an inline SVG string.
// One <path> per colour; colours are the --px-* CSS tokens, so sprites follow the theme.
import sprites from './sprites.json';
import palette from './palette.json';

export type SpriteName = keyof typeof sprites;

export function spriteSvg(name: SpriteName, scale = 2, label?: string, className = ''): string {
  const rows: string[] = sprites[name];
  const h = rows.length, w = rows[0].length;
  const paths: Record<string, string[]> = {};
  rows.forEach((row, y) => {
    let x = 0;
    while (x < w) {
      const ch = row[x];
      if (ch === '.') { x++; continue; }
      let end = x;
      while (end < w && row[end] === ch) end++;
      (paths[ch] ||= []).push(`M${x} ${y}h${end - x}v1h-${end - x}z`);
      x = end;
    }
  });
  const pal = palette as Record<string, string>;
  const body = Object.entries(paths).map(([ch, d]) => `<path fill="var(--px-${pal[ch]})" d="${d.join('')}"/>`).join('');
  const a11y = label ? `role="img" aria-label="${label.replace(/"/g, '&quot;')}"` : 'aria-hidden="true" focusable="false"';
  return `<svg class="px ${className}" viewBox="0 0 ${w} ${h}" width="${Math.round(w * scale)}" height="${Math.round(h * scale)}" shape-rendering="crispEdges" ${a11y}>${body}</svg>`;
}
