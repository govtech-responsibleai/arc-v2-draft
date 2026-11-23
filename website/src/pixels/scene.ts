// The homepage scene: the ARC robot wired to six of its capabilities. Built from the kit's
// sprites in layers so CSS can animate it lightly (see .arc-scene in custom.css): signals
// run out along the wires, the robot bobs, its antenna blinks, and now and then its screen
// shows a tick. Everything stays still for visitors who prefer reduced motion.
import sprites from './sprites.json';
import palette from './palette.json';

type Name = keyof typeof sprites;
const pal = palette as Record<string, string>;
const fill = (ch: string) => `var(--px-${pal[ch]})`;

function paths(name: Name | string[], ox: number, oy: number): string {
  const rows: string[] = typeof name === 'string' ? sprites[name] : name;
  const out: Record<string, string[]> = {};
  rows.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const ch = row[x];
      if (ch === '.') { x++; continue; }
      let end = x;
      while (end < row.length && row[end] === ch) end++;
      (out[ch] ||= []).push(`M${x + ox} ${y + oy}h${end - x}v1h-${end - x}z`);
      x = end;
    }
  });
  return Object.entries(out).map(([ch, d]) => `<path fill="${fill(ch)}" d="${d.join('')}"/>`).join('');
}
const px = (pts: [number, number][], ch: string, cls = '') =>
  pts.length ? `<path${cls ? ` class="${cls}"` : ''} fill="${fill(ch)}" d="${pts.map(([x, y]) => `M${x} ${y}h1v1h-1z`).join('')}"/>` : '';

const W = 104, H = 54, RX = 40, RY = 11;            // scene size, robot position
const ROWS = [8, 27, 46];                            // centres of the icon rows
const LEFT = ['icon-CAP-10', 'icon-CAP-02', 'icon-CAP-11'] as const;   // code, delegation, files
const RIGHT = ['icon-CAP-05', 'icon-CAP-06', 'icon-CAP-07'] as const;  // official comms, transactions, internet
const LABEL = 'The ARC robot wired to six capabilities: code execution, agent delegation, file and data management, official communication, business transactions, and internet and search access';

/** Wires for the left side, as pixels with their distance from the robot. */
function leftWires() {
  const stubY = RY + 24, trunkX = 28;                 // from the robot's hand
  const cells = new Set<string>();
  const add = (x: number, y: number) => cells.add(`${x},${y}`);
  for (let x = RX + 1; x > trunkX; x--) add(x, stubY);
  for (let y = ROWS[0]; y <= ROWS[2]; y++) add(trunkX, y);
  for (const y of ROWS) for (let x = trunkX - 1; x >= 21; x--) add(x, y);
  // distance along the wire from the robot (breadth-first)
  const dist = new Map<string, number>([[`${RX + 1},${stubY}`, 0]]);
  const queue: [number, number][] = [[RX + 1, stubY]];
  while (queue.length) {
    const [x, y] = queue.shift()!;
    const d = dist.get(`${x},${y}`)!;
    for (const [a, b] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const k = `${x + a},${y + b}`;
      if (cells.has(k) && !dist.has(k)) { dist.set(k, d + 1); queue.push([x + a, y + b]); }
    }
  }
  return [...dist].map(([k, d]) => { const [x, y] = k.split(',').map(Number); return { x, y, d }; });
}

export function heroSceneSvg(scale = 4): string {
  const mirror = (x: number) => W - 1 - x;
  const wires = leftWires().flatMap((p) => [p, { ...p, x: mirror(p.x) }]).filter((p) => p.d % 2 === 0);
  const phase = (k: number) => wires.filter((p) => (p.d / 2) % 3 === k).map((p) => [p.x, p.y] as [number, number]);
  const arrows: [number, number][] = ROWS.flatMap((y) => [[20, y], [21, y - 1], [21, y + 1]] as [number, number][])
    .flatMap(([x, y]) => [[x, y], [mirror(x), y]] as [number, number][]);
  const icons = LEFT.map((n, i) => paths(n, 2, ROWS[i] - 8)).join('') + RIGHT.map((n, i) => paths(n, 86, ROWS[i] - 8)).join('');
  const shadow: [number, number][] = Array.from({ length: 8 }, (_, i) => [RX + 5 + i * 2, RY + 33]);
  // The status screen: a tick drawn over the face (screen is cols 6-17, rows 8-16 of the robot)
  const tick: [number, number][] = [[8, 12], [9, 13], [10, 14], [11, 13], [12, 12], [13, 11], [14, 10], [15, 9], [8, 11], [9, 12], [10, 13], [11, 12], [12, 11], [13, 10], [14, 9]];
  const screen = `<g class="arc-status"><path fill="${fill('n')}" d="M${RX + 6} ${RY + 9}h12v7h-12z"/>${px(tick.map(([x, y]) => [x + RX, y + RY]), 'L')}</g>`;
  const blink = `<path class="arc-blink" fill="${fill('y')}" d="M${RX + 10} ${RY + 1}h3v2h-3z"/>`;
  // The arms (cols 2-4 and 19-21, rows 21-27 of the robot) swing outwards from the shoulder in
  // three frames: hanging, swung out a little, swung out further. CSS shows one at a time.
  const robot: string[] = sprites.robot;
  const inArm = (x: number, y: number) => y >= 21 && y <= 27 && ((x >= 2 && x <= 4) || (x >= 19 && x <= 21));
  const body = robot.map((row, y) => [...row].map((c, x) => (inArm(x, y) ? '.' : c)).join(''));
  // The left arm's inside, row by row (rows 25-26 are the hand); the shoulder (row 22) never moves,
  // and the right arm is the mirror image. The outline is added around it.
  const POSES: Record<'rest' | 'out1' | 'out2', Record<number, number[]>> = {
    rest: { 22: [3, 4], 23: [3, 4], 24: [3, 4], 25: [3, 4], 26: [3, 4] },
    out1: { 22: [3, 4], 23: [3, 4], 24: [2, 3], 25: [2, 3], 26: [1, 2] },
    out2: { 22: [3, 4], 23: [2, 3, 4], 24: [1, 2, 3], 25: [0, 1, 2], 26: [0, 1] },
  };
  const frame = (pose: keyof typeof POSES, side: 'l' | 'r') => {
    const inside = new Map<string, string>();
    for (const [y, xs] of Object.entries(POSES[pose])) for (const x of xs) inside.set(`${x},${y}`, +y >= 25 ? 'c' : 't');
    const outline = new Set<string>();
    for (const key of inside.keys()) {
      const [x, y] = key.split(',').map(Number);
      for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) {
        const k = `${x + a},${y + b}`;
        if (!inside.has(k) && x + a < 5) outline.add(k);   // column 5 is the body's own outline
      }
    }
    const at = (k: string): [number, number] => { const [x, y] = k.split(',').map(Number); return [RX + (side === 'l' ? x : 23 - x), RY + y]; };
    return px([...outline].map(at), 'k')
      + px([...inside].filter(([, c]) => c === 't').map(([k]) => at(k)), 't')
      + px([...inside].filter(([, c]) => c === 'c').map(([k]) => at(k)), 'c');
  };
  const arms = (['l', 'r'] as const).map((side) =>
    `<g class="arc-arm-rest arc-arm-${side}">${frame('rest', side)}</g>`
    + `<g class="arc-arm-out1 arc-arm-${side}">${frame('out1', side)}</g>`
    + `<g class="arc-arm-out2 arc-arm-${side}">${frame('out2', side)}</g>`).join('');
  return `<svg class="px arc-scene" viewBox="0 0 ${W} ${H}" width="${W * scale}" height="${H * scale}" shape-rendering="crispEdges" role="img" aria-label="${LABEL}">`
    + `<g class="arc-wires">${[0, 1, 2].map((k) => px(phase(k), 'S', `arc-wire arc-wire-${k}`)).join('')}${px(arrows, 'S')}</g>`
    + icons + px(shadow, 'C')
    + `<g class="arc-bob">${paths(body, RX, RY)}${arms}${screen}${blink}</g></svg>`;
}
