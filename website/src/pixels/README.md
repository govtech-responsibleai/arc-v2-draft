# The ARC Pixel Kit

The site's pictures are pixel-art sprites, stored as text in `sprites.json`: each sprite is a list of rows,
one letter per pixel, and `.` is transparent. `palette.json` maps each letter to a colour token
(`k` = ink, `t` = teal, and so on), and `src/styles/custom.css` gives each token its colour as `--px-<token>`.
Because colours are CSS variables, every sprite follows the light and dark themes; only the ink outline
changes between them.

| Sprite | Size | Used for |
| --- | --- | --- |
| `robot` | 24 × 32 | the mascot; `robot-<prop>` poses hold a clipboard, shield, lens, alert or question |
| `robot-screen-<glyph>` | 24 × 32 | the status screen: `check`, `alert`, `ask`, `prompt` |
| `icon-<element id>` | 16 × 16 | one icon per element, e.g. `icon-CAP-07` |
| `level-0`, `level-1`, `level-2` | 11 × 12 | the level badges: solid, half and outline shields |
| `prop-<name>`, `favicon`, `scene` | various | props, the browser tab icon, the old flat hero scene |

The homepage scene, with its animation, is built from these in `scene.ts`.

## Using a sprite

- In an Astro page or component: `<Pixel name="icon-CAP-07" scale={2} label="Internet and Search Access" />`
  (`src/components/Pixel.astro`). Leave out `label` when the picture is decorative.
- In a page in `docs/`: `<!-- arc:sprite robot-lens 3 -->` on a line of its own (decorative only).
- In Python: `site_components.sprite('icon-CAP-07', 1.5, 'Internet and Search Access')`.

## Adding or changing a sprite

1. **Draw it** at 1× in a pixel editor using only the colours in `arc-pixel.gpl`. Pixelorama is free and
   open source; Aseprite is paid; Piskel runs in the browser. All three load `.gpl` palettes.
   Keep to the grid sizes above, use the pencil tool only (no anti-aliasing), and give it a one-pixel ink outline.
2. **Convert it**: `python website/src/pixels/png_to_grid.py my-icon.png icon-CAP-13` prints the sprite;
   add it to `sprites.json`. The script rejects any colour outside the palette.
3. Or **write it as text** directly in `sprites.json`, or ask a coding agent to: the grid format is easy to
   read and review in a pull request.

## Rules

- One palette and one grid. No gradients, no anti-aliasing.
- Show sprites at whole multiples where you can: 1× for the favicon, 1.5–2× in text, 3–4× for heroes.
- No words inside pictures. Labels and slogans are HTML text.
- An icon sits next to its name; it never replaces it.
- One large robot per page at most.
- Animation is CSS only, light, and off for visitors who prefer reduced motion.
