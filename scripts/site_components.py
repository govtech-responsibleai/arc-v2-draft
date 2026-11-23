"""HTML pieces that scripts/build_site.py puts into the website: the pixel-art sprites,
the ARC diagram and the element grid, and the register summary the homepage reads.

Pages ask for a piece with a marker on a line of its own, which build_site.py replaces:

  <!-- arc:diagram -->     the Elements -> Risks -> Controls diagram
  <!-- arc:elements -->    all elements, grouped, each with its icon
  <!-- arc:sprite NAME 4 --> one sprite from sprites.json at that scale (decorative)
  <!-- arc:register -->    the filterable list of risks (scripts/site_entries.py)

and for a live count with <span data-arc="risks">54</span>, whose text is replaced with
the register's current value (risks, controls, elements, capabilities, level0, version).
The sprites are text grids in website/src/pixels/sprites.json (see the ARC Pixel Kit).
"""

import json
import re
from html import escape
from pathlib import Path

import build_risk_register as brr

PIXELS = Path(__file__).resolve().parents[1] / 'website' / 'src' / 'pixels'
SPRITES = json.loads((PIXELS / 'sprites.json').read_text())
PALETTE = json.loads((PIXELS / 'palette.json').read_text())

CAPABILITY_GROUPS = ['Cognitive', 'Interaction', 'Operational']


def sprite(name, scale=2, label=None):
    """A sprite as inline SVG. Colours are CSS variables, so it follows the theme."""
    rows = SPRITES[name]
    h, w = len(rows), len(rows[0])
    paths = {}
    for y, row in enumerate(rows):
        x = 0
        while x < w:
            ch = row[x]
            if ch == '.':
                x += 1
                continue
            end = x
            while end < w and row[end] == ch:
                end += 1
            paths.setdefault(ch, []).append(f'M{x} {y}h{end - x}v1h-{end - x}z')
            x = end
    body = ''.join(f'<path fill="var(--px-{PALETTE[c]})" d="{"".join(d)}"/>' for c, d in paths.items())
    a11y = f'role="img" aria-label="{escape(label)}"' if label else 'aria-hidden="true" focusable="false"'
    return (f'<svg class="px" viewBox="0 0 {w} {h}" width="{round(w * scale)}" height="{round(h * scale)}" '
            f'shape-rendering="crispEdges" {a11y}>{body}</svg>')


def summary():
    """Register facts the site shows: version, counts and the elements in order."""
    reg = brr.load_yaml('register.yaml')
    risks, controls = brr.load_yaml('risks.yaml'), brr.load_yaml('controls.yaml')
    comps, design, caps = brr.load_yaml('components.yaml'), brr.load_yaml('design.yaml'), brr.load_yaml('capabilities.yaml')
    # A conditional element (`present_when`) is in a system only when its condition holds
    elements = ([{'id': k, 'name': v['name'], 'group': 'Components', 'conditional': bool(v.get('present_when'))} for k, v in comps.items()]
                + [{'id': k, 'name': v['name'], 'group': 'Design', 'conditional': bool(v.get('present_when'))} for k, v in design.items()]
                + [{'id': k, 'name': v['name'], 'group': v['category'], 'conditional': False} for k, v in caps.items()])
    # Retired entries (`superseded_by`) keep their pages, but are not counted
    risks = {k: v for k, v in risks.items() if not v.get('superseded_by')}
    controls = {k: v for k, v in controls.items() if not v.get('superseded_by')}
    levels = [c['level'] for c in controls.values()]
    return {
        'version': str(reg['version']),
        'released': str(reg['released']),
        # A draft label such as 2.0.0-draft.1 shares the changelog section of its release
        'changelog_anchor': 'v' + str(reg['version']).split('-')[0].replace('.', '-'),
        'counts': {
            'elements': len(elements), 'components': len(comps), 'design': len(design), 'capabilities': len(caps),
            'risks': len(risks), 'controls': len(controls),
            'level0': levels.count(0), 'level1': levels.count(1), 'level2': levels.count(2),
        },
        'elements': elements,
    }


def _strip(s, prefix, label):
    return (f'<div class="arc-row"><b>{label}</b><div class="arc-strip">'
            + ''.join(sprite(f'icon-{e["id"]}', 1.5, e['name']) for e in s['elements'] if e['id'].startswith(prefix))
            + '</div></div>')


def level_badge(level):
    return f'<span class="arc-lvl arc-l{level}">{sprite(f"level-{level}", 1.5)}Level {level}</span>'


def always_note(s):
    """'Every system has the components and design; capabilities vary', naming any conditional elements."""
    cond = [e['name'] for e in s['elements'] if e.get('conditional')]
    if not cond:
        return 'Every system has the components and design; capabilities vary.'
    names = cond[0] if len(cond) == 1 else ', '.join(cond[:-1]) + ' and ' + cond[-1]
    return f'Every system has the design and the other components; {names} only where present, and capabilities vary.'


def diagram(s):
    """Elements give rise to risks, which require controls. One line of HTML (no blank lines)."""
    c = s['counts']
    item = lambda art, html: f'<div class="arc-item">{art}<div>{html}</div></div>'
    elements = ('<div class="arc-win"><div class="arc-bar arc-el">1 · Elements</div><div class="arc-body">'
                '<p class="arc-what">What the system is made of and what it can do.</p>'
                + _strip(s, 'CMP', 'Components') + _strip(s, 'DSN', 'Design') + _strip(s, 'CAP', 'Capabilities')
                + f'<p class="arc-note">{c["elements"]} elements. {always_note(s)}</p>'
                '</div></div>')
    risks = ('<div class="arc-win"><div class="arc-bar arc-risk">2 · Risks</div><div class="arc-body">'
             '<p class="arc-what">What can go wrong because of those elements.</p>'
             + item(sprite('prop-alert', 2), '<b>Failure modes</b><br>How it goes wrong: an agent errs or misbehaves, is manipulated or misused, or a tool or safeguard fails.')
             + item(sprite('icon-hazard' if 'icon-hazard' in SPRITES else 'prop-alert', 1.5), '<b>Hazards</b><br>The safety or security harm that results.')
             + item(sprite('prop-clipboard', 2), f'<b>{c["risks"]} risks</b> in register {s["version"]}, each tied to the elements, or the combination of capabilities, it arises from.')
             + '</div></div>')
    controls = ('<div class="arc-win"><div class="arc-bar arc-ctrl">3 · Controls</div><div class="arc-body">'
                f'<p class="arc-what">What to put in place: {c["controls"]} controls, at three levels.</p>'
                + item(level_badge(0), 'Adopt as is wherever the risk applies.')
                + item(level_badge(1), 'Adopt or adapt.')
                + item(level_badge(2), 'Consider, especially for high-risk systems.')
                + item(sprite('prop-lens', 2), '<b>Residual risk</b><br>What the controls don\'t fully address.')
                + '</div></div>')
    joint = lambda text: f'<div class="arc-joint" aria-hidden="true"><span>→</span>{text}</div>'
    return (f'<div class="arc-diagram-wrap not-content"><div class="arc-diagram" role="figure" aria-label="Elements give rise to risks, which require controls">'
            f'{elements}{joint("give rise to")}{risks}{joint("which require")}{controls}</div></div>')


def element_grid(s):
    comp_note = 'In every system, except where marked' if any(e.get('conditional') for e in s['elements'] if e['group'] == 'Components') else 'In every system'
    groups = [('Components', comp_note, 'Components'), ('Design', 'In every system', 'Design')] + \
             [(g, 'Capabilities', g) for g in CAPABILITY_GROUPS]
    out = ['<div class="arc-elements not-content">']
    for title, note, key in groups:
        items = [e for e in s['elements'] if e['group'] == key]
        heading = f'{title} capabilities' if key in CAPABILITY_GROUPS else title
        out.append(f'<div class="arc-group"><p class="arc-group-title">{heading}'
                   + (f' <span>{note}</span>' if key not in CAPABILITY_GROUPS else '') + '</p><div class="arc-cards">')
        for e in items:
            out.append(f'<div class="arc-card">{sprite("icon-" + e["id"], 2)}<div><b>{escape(e["name"])}</b>'
                       f'<span>{e["id"]}{" · only where present" if e.get("conditional") else ""}</span></div></div>')
        out.append('</div></div>')
    out.append('</div>')
    return ''.join(out)


MARKER = re.compile(r'^[ \t]*<!--\s*arc:(diagram|elements|sprite|register)\s*([\w-]*)\s*([\d.]*)\s*-->[ \t]*$', re.M)
PIECES = {}        # HTML for other markers, set by build_site.py (e.g. 'register': the list of risks)
PIECES_TEXT = {}   # the same pieces as plain Markdown, for the Markdown copies
COUNT = re.compile(r'<span data-arc="(\w+)">[^<]*</span>')


def expand_text(body, s):
    """Like expand(), but in plain Markdown: for the Markdown copies of pages."""
    c = s['counts']
    def marker(m):
        if m.group(1) == 'sprite':
            return ''
        if m.group(1) in PIECES_TEXT:
            return PIECES_TEXT[m.group(1)]
        if m.group(1) == 'diagram':
            return (f"ARC links a system's elements to risks and controls: {c['elements']} elements (components, design and "
                    f"capabilities, alone or in combination) give rise to {c['risks']} risks, which require {c['controls']} controls at three levels "
                    f"({c['level0']} at Level 0, {c['level1']} at Level 1, {c['level2']} at Level 2).")
        groups = {}
        for e in s['elements']:
            groups.setdefault(e['group'], []).append(f"{e['name']} ({e['id']})")
        return '\n'.join(f"- **{g}{' capabilities' if g in CAPABILITY_GROUPS else ''}:** {', '.join(v)}" for g, v in groups.items())
    body = MARKER.sub(marker, body)
    values = {**c, 'version': s['version'], 'released': s['released']}
    return COUNT.sub(lambda m: str(values[m.group(1)]), body)


def expand(body, s):
    """Replace markers and live counts in a page body."""
    def piece(m):
        kind = m.group(1)
        if kind == 'sprite':   # <!-- arc:sprite NAME SCALE -->: one sprite, decorative
            return f'<div class="arc-sprite not-content">{sprite(m.group(2), float(m.group(3) or 3))}</div>'
        if kind in PIECES:
            return PIECES[kind]
        return diagram(s) if kind == 'diagram' else element_grid(s)
    body = MARKER.sub(piece, body)
    values = {**s['counts'], 'version': s['version'], 'released': s['released']}
    return COUNT.sub(lambda m: f'<span data-arc="{m.group(1)}">{values[m.group(1)]}</span>', body)
