"""One page per risk, control and element, the register's lists, and its data files.

scripts/build_site.py calls build() on every website build. Everything here comes from
arc-risk-register/*.yaml, so nothing in it is edited by hand:

  register/risk-034/        a page for each risk, control (ctrl-0062) and element (cap-07)
  register/risk-034.json    the same entry as JSON, and as Markdown (risk-034.md) for agents
  register/                 the register's front page; controls/ and data/ list the rest
  register/register.json    the whole register, with a JSON Schema and CSV files, also kept
                            under register/v<version>/ so a citation can point at one version

The interactive list of risks (arc_framework/risk-register/) is drawn by register_table(), and
the applicability explorer's data by explorer_data().

Register 2.0 adds four things these pages show: retired entries (`superseded_by`), which keep their
pages but are left out of lists and counts; conditional components (`present_when`); how a
capability is used (`authority`, `irreversible`, `external` on capabilities, `min_authority` on
risks, `level_when` on controls); and combination rules (`combinations.yaml`), from which a risk
with `combination:` arises instead of from fixed elements.
"""

import csv
import io
import json
import re
from html import escape
from pathlib import Path
from urllib.parse import urlparse

import yaml

import build_risk_register as brr
import site_components as sc

SITE = 'https://govtech-responsibleai.github.io/arc-v2-draft/'
BASE = urlparse(SITE).path   # e.g. /agentic-risk-capability-framework/, as `base` in website/astro.config.mjs
REPO = 'https://github.com/govtech-responsibleai/arc-v2-draft'
ROOT = Path(__file__).resolve().parent.parent
KIND = {'CMP': 'Component', 'DSN': 'Design', 'CAP': 'Capability'}
AUTHORITY = ('read', 'propose', 'act-with-approval', 'act-alone')   # least to most, as in arc.py
AUTH_NAME = {'read': 'read', 'propose': 'propose', 'act-with-approval': 'act with approval', 'act-alone': 'act alone'}
CONTEXT = '../arc_framework/elements.md#context-how-a-capability-is-used'
COMBINATIONS_PAGE = 'arc_framework/capability-combinations.md'


def slug(entry_id):
    return entry_id.lower()


def page(entry_id):
    """Site path of an entry's page, e.g. /agentic-risk-capability-framework/register/risk-034/."""
    return f'{BASE}register/{slug(entry_id)}/'


def load():
    reg = {
        'version': str(brr.load_yaml('register.yaml')['version']),
        'released': str(brr.load_yaml('register.yaml')['released']),
        'risks': brr.load_yaml('risks.yaml'), 'controls': brr.load_yaml('controls.yaml'),
        'hazards': brr.load_yaml('hazards.yaml'), 'crosswalks': brr.load_yaml('crosswalk_references.yaml'),
        'combinations': brr.load_combinations(),
        'elements': {},
    }
    for f, kind in [('components.yaml', 'Components'), ('design.yaml', 'Design'), ('capabilities.yaml', None)]:
        for k, v in brr.load_yaml(f).items():
            reg['elements'][k] = {**v, 'group': kind or v['category']}
    return reg


# ---------------------------------------------------------------- the register's rules

def retired(entry):
    return bool(entry.get('superseded_by'))


def live(entries):
    """Entries that are not retired."""
    return {k: v for k, v in entries.items() if not retired(v)}


def conditional(reg, eid):
    """A component or design element that only some systems have (`present_when`)."""
    return bool(reg['elements'].get(eid, {}).get('present_when'))


def chosen(reg, eid):
    """An element a system may or may not have: a capability, or a conditional element."""
    return eid.startswith('CAP') or conditional(reg, eid)


def is_baseline(reg, risk):
    return not risk.get('combination') and not any(chosen(reg, e) for e in risk.get('element_ids') or [])


def rules(reg):
    """Combination rules by ID, each with `legs`: its roles in order (as arc.py combination_rules)."""
    data = reg['combinations'] or {}
    roles = data.get('roles') or {}
    return {rid: {**r, 'legs': {x: roles[x] for x in r.get('roles') or [] if x in roles}}
            for rid, r in (data.get('rules') or {}).items()}


def rule_anchor(name):
    """The heading on the Capability combinations page that describes a rule, as a link anchor."""
    path = ROOT / 'docs' / COMBINATIONS_PAGE
    for line in (path.read_text().splitlines() if path.exists() else []):
        m = re.match(r'^#{2,3} (.+)$', line)
        if m and name.lower() in m.group(1).lower():
            return re.sub(r'[\s]+', '-', re.sub(r'[^\w\s-]', '', m.group(1).lower()).strip())
    return ''


def rule_link(reg, rule_id, prefix='../'):
    rule = rules(reg).get(rule_id, {})
    name = rule.get('name', rule_id)
    anchor = rule_anchor(name)
    return f'[{name}]({prefix}{COMBINATIONS_PAGE}{"#" + anchor if anchor else ""})'


def sorted_controls(reg, ids):
    return sorted(ids, key=lambda c: (reg['controls'][c]['level'], c))


def level0_count(reg, risk):
    return sum(1 for c in risk.get('controls') or [] if reg['controls'][c]['level'] == 0)


def name_list(names):
    names = list(names)
    return names[0] if len(names) == 1 else ', '.join(names[:-1]) + ' and ' + names[-1] if names else ''


def level_when_text(reg, w):
    """A `level_when` condition in words, e.g. 'Level 0 where a capability is used at act alone'."""
    caps = w.get('capabilities')
    who = (' or '.join(reg['elements'][c]['name'] for c in caps if c in reg['elements']) if caps else 'a capability')
    effects = []
    if 'irreversible' in w:
        effects.append('cannot be undone' if w['irreversible'] else 'can be undone')
    if 'external' in w:
        effects.append('reach outside the organisation' if w['external'] else 'stay inside the organisation')
    if 'authority' in w:
        text = f'Level {w["level"]} where {who} is used at {AUTH_NAME[w["authority"]]}' + ('' if w['authority'] == 'act-alone' else ' or above')
        return text + (f', and its effects {" and ".join(effects)}' if effects else '')
    return f'Level {w["level"]} where the effects of {who} {" and ".join(effects)}'


def min_authority_text(reg, risk):
    return ' '.join(f'It applies only where {reg["elements"][cap]["name"]} ({cap}) is used at **{AUTH_NAME[lvl]}** or above '
                    f'(see [how a capability is used]({CONTEXT})).'
                    for cap, lvl in (risk.get('min_authority') or {}).items())


# ---------------------------------------------------------------- HTML pieces

def icon(eid, scale=1.5):
    return sc.sprite(f'icon-{eid}', scale, None) if f'icon-{eid}' in sc.SPRITES else ''


def element_link(reg, eid):
    e = reg['elements'][eid]
    return f'<a class="arc-el-link" href="{page(eid)}">{icon(eid)}<span>{escape(e["name"])}</span></a>'


def elements_html(reg, ids):
    return '<span class="arc-plus">+</span>'.join(element_link(reg, e) for e in ids)


def arises_html(reg, r):
    """What a risk arises from: its elements, or its combination rule."""
    if r.get('combination'):
        name = rules(reg).get(r['combination'], {}).get('name', r['combination'])
        return f'<span class="arc-combo">Combination · {escape(name)}</span>'
    return elements_html(reg, r.get('element_ids') or [])


def chips(*items):
    return '<div class="arc-chips not-content">' + ''.join(f'<span class="arc-chip{" arc-chip-id" if i == 0 else ""}">{escape(x)}</span>' for i, x in enumerate(items) if x) + '</div>'


def data_links(entry_id, version):
    s = slug(entry_id)
    return (f'\n## This entry as data\n\n[JSON]({s}.json) · [Markdown]({s}.md) · '
            f'from [register {version}](index.md), whose source is the [register YAML]({REPO}/tree/v{version}/arc-risk-register).\n')


def crosswalk_lines(reg, cw):
    out = []
    for key, ids in (cw or {}).items():
        ref = reg['crosswalks'].get(key)
        if not ref or not ids:
            continue
        names = ', '.join(f'{i} ({ref["ids"].get(str(i), "")})' if ref['ids'].get(str(i)) else str(i) for i in ids)
        out.append(f'- [{ref["title"]}]({ref["url"]}): {names}')
    return out


def retired_note(reg, kind, entry):
    new = entry['superseded_by']
    target = reg['risks' if new.startswith('RISK') else 'controls'].get(new, {})
    return ['!!! warning "Retired"', '',
            f'    This {kind} is retired. It is replaced by [{new} · {target.get("statement", "")}]({slug(new)}.md), and its page '
            f'is kept so that links to it still work. It is left out of every list, count and assessment.', '']


def prev_next(prev_id, next_id):
    return {'prev': {'link': page(prev_id), 'label': prev_id} if prev_id else False,
            'next': {'link': page(next_id), 'label': next_id} if next_id else False}


# ---------------------------------------------------------------- pages

def risk_page(reg, rid, prev_id, next_id):
    r = reg['risks'][rid]
    els = r.get('element_ids') or []
    combo = r.get('combination')
    hazards = ', '.join(f'{reg["hazards"][h]["name"]} ({h})' for h in r.get('hazards') or [])
    lines = [chips(rid, r['failure_mode'], ' and '.join(r.get('type') or [])), '']
    if retired(r):
        lines += retired_note(reg, 'risk', r)
    lines += [f'<div class="arc-arises not-content"><b>Arises from</b> {arises_html(reg, r)}</div>', '']
    if retired(r):
        pass   # applies to no system; the note above says what replaces it
    elif combo:
        rule = rules(reg).get(combo, {})
        lines += [f'This risk arises from a combination rule, not from fixed elements. It applies to any system whose capabilities '
                  f'can together supply every role below, whichever capabilities supply them, unless an assessment shows that a '
                  f'role is absent. See {rule_link(reg, combo)}.', '']
        for leg in rule.get('legs', {}).values():
            marks = leg.get('capabilities') or {}
            cap = lambda c, m: (f'[{reg["elements"][c]["name"]}]({slug(c)}.md)'
                                + (f' (at {AUTH_NAME[m["min_authority"]]} or above)' if m.get('min_authority') else ''))
            yes = [cap(c, m) for c, m in marks.items() if m.get('mark') == 'yes']
            maybe = [cap(c, m) for c, m in marks.items() if m.get('mark') != 'yes']
            supply = '; '.join(x for x in [f'supplied by {", ".join(yes)}' if yes else '',
                                          f'in some systems by {", ".join(maybe)}' if maybe else ''] if x)
            lines.append(f'- **{leg["name"]}**: {leg.get("description", "").strip()} It is {supply}.')
        lines.append('')
    elif is_baseline(reg, r):
        lines += [f'Every agentic system has {"this element" if len(els) == 1 else "these elements"}, so this risk applies to every system.', '']
    elif len(els) > 1:
        lines += ['This risk arises from a combination of elements: it applies only to systems that have all of them.', '']
    elif conditional(reg, els[0]):
        e = reg['elements'][els[0]]
        lines += [f'Not every system has {e["name"]}, so this risk applies only to those that do. Present when: {e["present_when"].strip()}', '']
    else:
        lines += [f'It applies to any system with this capability. [See every risk from {reg["elements"][els[0]]["name"]}]({slug(els[0])}.md).', '']
    if r.get('min_authority') and not retired(r):
        lines += [min_authority_text(reg, r), '']
    lines += [r['description'].strip(), '']
    if hazards:
        lines += [f'**Hazards:** {hazards}', '']
    if r.get('controls'):
        lines += ['## Controls', '', '<div class="arc-ctl-list not-content">']
        for c in sorted_controls(reg, r['controls']):
            ctl = reg['controls'][c]
            stricter = any(w['level'] < ctl['level'] for w in ctl.get('level_when') or [])
            lines.append(f'<a class="arc-ctl" href="{page(c)}">{sc.level_badge(ctl["level"])}<span class="arc-ctl-id">{c}</span>'
                         f'<span class="arc-ctl-text">{escape(ctl["statement"])}</span>'
                         + ('<span class="arc-ctl-n">Stricter in some systems</span>' if stricter else '') + '</a>')
        lines += ['</div>', '']
        if level0_count(reg, r):
            lines += ['Level 0 controls are adopted as is wherever this risk applies; one is waived only when the capability or component it concerns is absent. See [control levels](../arc_framework/controls.md#control-levels).', '']
    cw = crosswalk_lines(reg, r.get('crosswalks'))
    if cw:
        lines += ['## Crosswalks', '', *cw, '']
    if r.get('sources'):
        lines += ['## Sources', '', *[f'- <{s}>' for s in r['sources']], '']
    lines.append(data_links(rid, reg['version']))
    sprite = f'icon-{els[0]}' if els and f'icon-{els[0]}' in sc.SPRITES else 'prop-alert'
    front = {
        'description': first_sentence(r['description']),
        'arcCard': {'tag': rid, 'sprite': sprite},
        'head': defined_term(reg, rid, r['statement'], first_sentence(r['description'])),
        'editUrl': f'{REPO}/edit/main/arc-risk-register/risks.yaml',
        **prev_next(prev_id, next_id),
    }
    return front, f'# {rid} · {r["statement"]}\n\n' + '\n'.join(lines)


ENFORCEMENT = {'prompt': 'the prompt', 'model': 'the model', 'harness': 'the harness the agent runs in',
               'infrastructure': 'infrastructure', 'organisation': 'the organisation, by people and process'}


def control_page(reg, cid, prev_id, next_id):
    c = reg['controls'][cid]
    names = {0: 'Level 0 · adopt as is', 1: 'Level 1 · adopt or adapt', 2: 'Level 2 · consider'}
    lines = [chips(cid, names[c['level']]), '']
    if retired(c):
        lines += retired_note(reg, 'control', c)
    elif c['level'] == 0:
        lines += ['A **Level 0** control is adopted as is in every system where one of its risks applies. It is waived only when the capability or component it concerns is absent, and the waiver is recorded with evidence. See [control levels](../arc_framework/controls.md#control-levels).', '']
    elif c['level'] == 1:
        lines += ['A **Level 1** control is adopted, or adapted meaningfully, where its risks are relevant to the system. See [control levels](../arc_framework/controls.md#control-levels).', '']
    else:
        lines += ['A **Level 2** control is good practice to consider, especially for high-risk systems. See [control levels](../arc_framework/controls.md#control-levels).', '']
    if c.get('level_when'):
        lines += ['**Stricter in some systems.** It is ' + '; '.join(level_when_text(reg, w) for w in c['level_when'])
                  + f'. See [how a capability is used]({CONTEXT}).', '']
    lines += ['## What to do', '', (c.get('recommendations') or '').strip(), '']
    check = [(label, value) for label, value in [
        ('Where it is enforced', name_list(ENFORCEMENT.get(x, x) for x in c.get('enforcement') or [])),
        ('Who owns it', (c.get('owner') or '').strip()),
        ('When in the lifecycle', name_list(c.get('phase') or [])),
        ('Evidence that it is in place', (c.get('evidence') or '').strip()),
        ('How to test it', (c.get('test') or '').strip())] if value]
    if check:
        lines += ['## How to check it', '', *[f'- **{label}:** {value[0].upper() + value[1:]}' for label, value in check], '']
    if c.get('risks'):
        lines += ['## Risks it addresses', '', '<div class="arc-ctl-list not-content">']
        for rid in c['risks']:
            r = reg['risks'][rid]
            els = ''.join(icon(e, 1) for e in r.get('element_ids') or []) or '<span class="arc-combo">Combination</span>'
            lines.append(f'<a class="arc-ctl" href="{page(rid)}"><span class="arc-ctl-id">{rid}</span>'
                         f'<span class="arc-ctl-text">{escape(r["statement"])}</span><span class="arc-ctl-els">{els}</span></a>')
        lines += ['</div>', '']
    cw = crosswalk_lines(reg, c.get('crosswalks'))
    if cw:
        lines += ['## Crosswalks', '', *cw, '']
    if c.get('references'):
        lines += ['## References', '', *[f'- <{s}>' for s in c['references']], '']
    lines.append(data_links(cid, reg['version']))
    front = {
        'description': f'Level {c["level"]} control in the ARC register: {c["statement"]}.',
        'arcCard': {'tag': f'{cid} · Level {c["level"]}', 'sprite': f'level-{c["level"]}'},
        'head': defined_term(reg, cid, c['statement'], f'Level {c["level"]} control in the ARC register.'),
        'editUrl': f'{REPO}/edit/main/arc-risk-register/controls.yaml',
        **prev_next(prev_id, next_id),
    }
    return front, f'# {cid} · {c["statement"]}\n\n' + '\n'.join(lines)


def element_page(reg, eid, prev_id, next_id):
    e = reg['elements'][eid]
    kind = KIND[eid[:3]]
    group = e['group'] if kind == 'Capability' else None
    risks = [rid for rid, r in live(reg['risks']).items() if eid in (r.get('element_ids') or [])]
    alone = [rid for rid in risks if len(reg['risks'][rid]['element_ids']) == 1]
    combined = [rid for rid in risks if rid not in alone]
    l0 = sorted({c for rid in risks for c in reg['risks'][rid]['controls'] if reg['controls'][c]['level'] == 0})
    label = f'{group} capability' if group else (f'{kind}, conditional' if conditional(reg, eid) else kind)
    lines = [chips(eid, label), '', f'<div class="arc-sprite not-content">{icon(eid, 4)}</div>', '', (e.get('description') or '').strip(), '']
    s = lambda n: 's' if n != 1 else ''
    if kind == 'Capability':
        lines += [f'A system with this capability carries {len(alone)} risk{s(len(alone))} from it, '
                  f'and {len(combined)} more when it also has the other elements listed. Together they carry {len(l0)} Level 0 controls. '
                  f'[See what applies to a system with this capability]({SITE}explorer/#caps={eid}).', '']
    elif conditional(reg, eid):
        lines += [f'**Only some systems have this {kind.lower()}.** Present when: {e["present_when"].strip()}', '',
                  f'A system that has it carries {len(alone)} risk{s(len(alone))} from it, and {len(combined)} more in combination with other elements. '
                  f'Together they carry {len(l0)} Level 0 controls. A system without it carries none of them.', '']
    else:
        lines += [f'Every agentic system has this element, so its {len(alone)} risks apply to every system. Together with the risks it shares with capabilities, they carry {len(l0)} Level 0 controls.', '']

    if e.get('authority'):
        effects = []
        for field, words in (('irreversible', {'ask': 'whether its effects can be undone', 'always': None, 'never': None}),
                             ('external', {'ask': 'whether they reach outside the organisation', 'always': None, 'never': None})):
            if e.get(field) == 'ask':
                effects.append(words['ask'])
        fixed = []
        if e.get('irreversible') == 'always':
            fixed.append('its effects cannot be undone')
        if e.get('external') == 'always':
            fixed.append('its effects reach outside the organisation')
        if e.get('external') == 'never':
            fixed.append('its effects stay inside the organisation')
        text = (f'An assessment records the authority this capability is used at: '
                f'{name_list(AUTH_NAME[a] for a in e["authority"])}'
                + (f', and {" and ".join(effects)}' if effects else '') + '. '
                + (f'By definition, {" and ".join(fixed)}. ' if fixed else '')
                + f'Where any of this is not stated, the most cautious case is assumed. See [how a capability is used]({CONTEXT}).')
        lines += ['## How it is used', '', text, '']
        needs = [(rid, r['min_authority'][eid]) for rid, r in live(reg['risks']).items() if eid in (r.get('min_authority') or {})]
        stricter = [(cid, w) for cid, c in live(reg['controls']).items() for w in c.get('level_when') or []
                    if (not w.get('capabilities') or eid in w['capabilities'])
                    and (not w.get('authority') or w['authority'] in e['authority'])]
        if needs:
            lines += ['Risks that apply only from a certain authority:', '',
                      *[f'- [{rid}]({slug(rid)}.md) · {reg["risks"][rid]["statement"]}: at {AUTH_NAME[lvl]} or above' for rid, lvl in needs], '']
        if stricter:
            lines += ['Controls that are stricter in some uses:', '',
                      *[f'- [{cid}]({slug(cid)}.md) · {reg["controls"][cid]["statement"]}: {level_when_text(reg, w)}' for cid, w in stricter], '']

    supplies = [(rule_id, rule, leg, leg['capabilities'][eid]) for rule_id, rule in rules(reg).items()
                for leg in rule['legs'].values() if eid in (leg.get('capabilities') or {})]
    if supplies:
        lines += ['## In combination rules', '', 'Some risks arise when capabilities together complete a dangerous combination. This capability can supply:', '']
        for rule_id, rule, leg, m in supplies:
            how = 'yes' if m.get('mark') == 'yes' else 'in some systems'
            at = f', when used at {AUTH_NAME[m["min_authority"]]} or above' if m.get('min_authority') else ''
            lines.append(f'- **{leg["name"]}** for the {rule_link(reg, rule_id)} rule ({how}{at}): {m.get("note", "").strip()}')
        lines.append('')
    implied = ((reg['combinations'] or {}).get('implies') or {}).get(eid) or {}
    if implied:
        lines += ['## Capabilities it may give a system', '', 'A system with this capability may also have these, whether or not they were declared. An assessment adds each one, or records why it does not apply.', '']
        for other, m in implied.items():
            target = 'Any capability' if other == 'any' else f'[{reg["elements"][other]["name"]}]({slug(other)}.md) ({other})'
            lines.append(f'- {target}, {"yes" if m.get("mark") == "yes" else "in some systems"}: {m.get("note", "").strip()}')
        lines.append('')

    def table(ids):
        rows = ['<div class="arc-ctl-list not-content">']
        for rid in ids:
            r = reg['risks'][rid]
            others = [x for x in r['element_ids'] if x != eid]
            extra = ('<span class="arc-ctl-els">+ ' + ''.join(icon(x, 1) for x in others) + '</span>') if others else ''
            needs = (r.get('min_authority') or {}).get(eid)
            rows.append(f'<a class="arc-ctl" href="{page(rid)}"><span class="arc-ctl-id">{rid}</span>'
                        f'<span class="arc-ctl-text">{escape(r["statement"])}</span>{extra}'
                        f'<span class="arc-ctl-n">{len(r["controls"])} controls, {level0_count(reg, r)} at Level 0'
                        + (f' · at {AUTH_NAME[needs]} or above' if needs else '') + '</span></a>')
        return rows + ['</div>', '']

    if alone:
        lines += ['## Risks from this element', '', *table(alone)]
    if combined:
        lines += ['## Risks from this element in combination', '', 'These apply only when the system also has every other element shown.', '', *table(combined)]
    lines.append(data_links(eid, reg['version']))
    front = {
        'description': first_sentence(e.get('description') or e['name']),
        'arcCard': {'tag': eid, 'sprite': f'icon-{eid}' if f'icon-{eid}' in sc.SPRITES else 'prop-alert'},
        'head': defined_term(reg, eid, e['name'], first_sentence(e.get('description') or e['name'])),
        'editUrl': f'{REPO}/edit/main/arc-risk-register/{"capabilities" if kind == "Capability" else "components" if kind == "Component" else "design"}.yaml',
        **prev_next(prev_id, next_id),
    }
    return front, f'# {eid} · {e["name"]}\n\n' + '\n'.join(lines)


def defined_term(reg, eid, name, description):
    """JSON-LD for an entry page: a term in the register's DefinedTermSet."""
    return [{'tag': 'script', 'attrs': {'type': 'application/ld+json'}, 'content': json.dumps({
        '@context': 'https://schema.org', '@type': 'DefinedTerm', 'termCode': eid, 'name': name, 'description': description,
        'url': SITE + f'register/{slug(eid)}/',
        'inDefinedTermSet': {'@type': 'DefinedTermSet', 'name': f"ARC risk register {reg['version']}", 'url': SITE + 'register/'}})}]


def first_sentence(text):
    text = ' '.join((text or '').split())
    end = text.find('. ')
    return text if end == -1 else text[:end + 1]


def front_page(reg):
    c = summary_counts(reg)
    old = len(reg['risks']) - c['risks'] + len(reg['controls']) - c['controls']
    frameworks = name_list(CROSSWALK_SHORT.get(k, v['title']) for k, v in reg['crosswalks'].items())
    return {'description': f'The ARC risk register {reg["version"]}: {c["risks"]} risks and {c["controls"]} controls, with a page for each entry and the data as JSON and CSV.'}, f"""# The risk register

<!-- arc:sprite robot-lens 3 -->

Register **{reg['version']}**, released {reg['released']}: {c['risks']} risks, each tied to the elements or the combination of capabilities it arises from, and {c['controls']} controls ({c['level0']} at Level 0). Every risk, control and element has its own page and address, so you can link to one entry or cite it.

- [All risks, with filters](../arc_framework/risk-register.md): filter by element, failure mode, hazard or type, or search
- [All controls](controls.md), by level
- [All elements](elements.md): the components, design elements and capabilities that risks arise from
- [Capability combinations](../{COMBINATIONS_PAGE}): the rules for capabilities that are dangerous together
- [What applies to my system?]({SITE}explorer/): pick capabilities and how they are used, and see the risks and Level 0 controls that apply
- [Register data](data.md): the whole register as JSON and CSV, with a JSON Schema
- [Full text](../arc_framework/register-full-text.md): every entry on one page
- [Crosswalks](../arc_framework/crosswalks.md) to the {frameworks}, and the [changelog](../arc_framework/changelog.md)

To cite an entry, give the register version and its ID, for example "ARC risk register {reg['version']}, RISK-034".
""" + (f"\n{old} retired {'entry keeps its page' if old == 1 else 'entries keep their pages'}, so that links to {'it' if old == 1 else 'them'} still work; each points to the entry that replaces it.\n" if old else '')


def controls_list(reg):
    lines = []
    for level, name in [(0, 'Level 0: adopt as is'), (1, 'Level 1: adopt or adapt'), (2, 'Level 2: consider')]:
        ids = sorted(c for c, v in live(reg['controls']).items() if v['level'] == level)
        lines += [f'## {name}', '', f'{len(ids)} controls.', '', '<div class="arc-ctl-list not-content">']
        for c in ids:
            ctl = reg['controls'][c]
            stricter = any(w['level'] < level for w in ctl.get('level_when') or [])
            n = len(ctl['risks'])
            lines.append(f'<a class="arc-ctl" href="{page(c)}">{sc.level_badge(level)}<span class="arc-ctl-id">{c}</span>'
                         f'<span class="arc-ctl-text">{escape(ctl["statement"])}</span><span class="arc-ctl-n">{n} risk{"s" if n != 1 else ""}'
                         + (' · stricter in some systems' if stricter else '') + '</span></a>')
        lines += ['</div>', '']
    old = sorted(k for k, v in reg['controls'].items() if retired(v))
    if old:
        lines += ['## Retired', '', *[f'- [{c}]({slug(c)}.md) · {reg["controls"][c]["statement"]}: replaced by [{reg["controls"][c]["superseded_by"]}]({slug(reg["controls"][c]["superseded_by"])}.md)' for c in old], '']
    n = len(live(reg['controls']))
    return ({'description': f'All {n} controls in the ARC register, grouped by level, each linking to its page.'},
            '# All controls\n\nEach control addresses one or more risks. Level 0 controls are adopted as is wherever their risk applies, '
            'and some controls are stricter where a capability is used with more authority; see [control levels](../arc_framework/controls.md#control-levels).\n\n' + '\n'.join(lines))


def elements_list(reg):
    out = ['<div class="arc-elements not-content">']
    has_cond = any(conditional(reg, e) for e in reg['elements'])
    groups = [('Components', 'In every system, except where marked' if has_cond else 'In every system'), ('Design', 'In every system'),
              ('Cognitive', ''), ('Interaction', ''), ('Operational', '')]
    for g, note in groups:
        ids = [k for k, v in reg['elements'].items() if v['group'] == g]
        title = g if g in ('Components', 'Design') else f'{g} capabilities'
        out.append(f'<div class="arc-group"><p class="arc-group-title">{title}' + (f' <span>{note}</span>' if note else '') + '</p><div class="arc-cards">')
        for e in ids:
            n = sum(1 for r in live(reg['risks']).values() if e in (r.get('element_ids') or []))
            out.append(f'<a class="arc-card" href="{page(e)}">{icon(e, 2)}<div><b>{escape(reg["elements"][e]["name"])}</b>'
                       f'<span>{e} · {n} risk{"s" if n != 1 else ""}{" · only where present" if conditional(reg, e) else ""}</span></div></a>')
        out.append('</div></div>')
    out.append('</div>')
    n = len(reg['elements'])
    s = sc.summary()
    return ({'description': f'The {n} elements of an agentic system in ARC, each linking to the risks that arise from it.'},
            f'# All elements\n\nARC describes a system by its components, its design, and its capabilities. {sc.always_note(s)} '
            'See [Elements](../arc_framework/elements.md) for the definitions.\n\n' + ''.join(out) + '\n')


def data_page(reg):
    v = reg['version']
    return ({'description': f'The ARC register {v} as JSON and CSV, with a JSON Schema, for tools and agents.'}, f"""# Register data

The whole register, generated from the [register YAML]({REPO}/tree/v{v}/arc-risk-register) on every build. The YAML is the source; these files are the same data in easier shapes.

| File | What it holds |
| --- | --- |
| [register.json](register.json) | Every risk, control, element and hazard, with the combination rules and crosswalks |
| [register.schema.json](register.schema.json) | JSON Schema for register.json |
| [risks.csv](risks.csv) | One row per risk |
| [controls.csv](controls.csv) | One row per control |
| [v{v}/register.json](v{v}/register.json) | The same data at a fixed address for version {v}, for citing |

Each entry also has its own page, with JSON and Markdown copies alongside it: for example [RISK-034](risk-034.md) has [risk-034.json](risk-034.json) and [risk-034.md](risk-034.md).

For agents, [llms.txt](../llms.txt) lists what is on this site, and [llms-full.txt](../llms-full.txt) has every page as Markdown in one file.

These files follow the register's [versioning policy](../arc_framework/changelog.md): IDs are never reused, and a retired entry stays in the data with `superseded_by` pointing to the one that replaces it.
""")


def summary_counts(reg):
    lv = [c['level'] for c in live(reg['controls']).values()]
    return {'risks': len(live(reg['risks'])), 'controls': len(lv), 'level0': lv.count(0)}


# ---------------------------------------------------------------- interactive list of risks

def register_table(reg):
    """The list of risks on arc_framework/risk-register/: complete without JavaScript, filtered by
    website/public/js/register.js when it runs. Retired risks are left out."""
    risks = live(reg['risks'])
    modes = sorted({r['failure_mode'] for r in risks.values()})
    opt = lambda v, t: f'<option value="{escape(v)}">{escape(t)}</option>'
    groups = ''
    for g, prefix in [('Components', 'CMP'), ('Design', 'DSN'), ('Capabilities', 'CAP')]:
        groups += f'<optgroup label="{g}">' + ''.join(opt(k, f'{v["name"]} ({k})') for k, v in reg['elements'].items() if k.startswith(prefix)) + '</optgroup>'
    if rules(reg):
        groups += '<optgroup label="Combination rules">' + ''.join(opt(f'rule:{k}', v['name']) for k, v in rules(reg).items()) + '</optgroup>'
    hz = ''.join(opt(k, f'{v["name"]} ({v["type"]})') for k, v in reg['hazards'].items())
    form = ('<form class="arc-filters" data-arc-filters role="search" aria-label="Filter the risks">'
            f'<label>Element<select name="element"><option value="">All elements</option>{groups}</select></label>'
            f'<label>Failure mode<select name="mode"><option value="">All failure modes</option>{"".join(opt(m, m) for m in modes)}</select></label>'
            f'<label>Hazard<select name="hazard"><option value="">All hazards</option>{hz}</select></label>'
            '<label>Type<select name="type"><option value="">Safety or security</option><option value="Safety">Safety</option><option value="Security">Security</option></select></label>'
            '<label class="arc-search">Search<input type="search" name="q" placeholder="Words or an ID, e.g. RISK-034"></label>'
            '<button type="reset">Clear</button></form>')
    rows = []
    for rid, r in risks.items():
        text = ' '.join([rid, r['statement'], r['description']]).lower()
        els = f'rule:{r["combination"]}' if r.get('combination') else ' '.join(r.get('element_ids') or [])
        rows.append(
            f'<tr data-elements="{els}" data-mode="{escape(r["failure_mode"])}" data-hazards="{" ".join(r.get("hazards") or [])}" '
            f'data-type="{" ".join(r.get("type") or [])}" data-text="{escape(text)}">'
            f'<td><span class="arc-ctl-id">{rid}</span><a href="{page(rid)}">{escape(r["statement"])}</a></td>'
            f'<td>{arises_html(reg, r)}</td><td>{escape(r["failure_mode"])}</td>'
            f'<td class="arc-num">{len(r["controls"])}<span class="arc-l0n">{level0_count(reg, r)} at Level 0</span></td></tr>')
    n = len(risks)
    return (f'<div class="arc-register not-content" data-arc-register>{form}'
            f'<p class="arc-count" aria-live="polite"><span data-arc-shown>{n}</span> of {n} risks</p>'
            '<div class="arc-table-wrap"><table class="arc-risk-table"><thead><tr><th scope="col">Risk</th><th scope="col">Arises from</th>'
            '<th scope="col">Failure mode</th><th scope="col">Controls</th></tr></thead><tbody>' + ''.join(rows) + '</tbody></table></div>'
            '<p class="arc-empty" hidden>No risks match. Clear the filters to see them all.</p></div>')


# ---------------------------------------------------------------- data files

RISK_FIELDS = ('statement', 'description', 'element_ids', 'combination', 'min_authority', 'failure_mode', 'type', 'hazards',
               'controls', 'sources', 'crosswalks', 'superseded_by')
CONTROL_FIELDS = ('level', 'level_when', 'statement', 'recommendations', 'enforcement', 'owner', 'phase', 'evidence', 'test',
                  'risks', 'references', 'crosswalks', 'superseded_by')
ELEMENT_FIELDS = ('present_when', 'authority', 'irreversible', 'external')


def pick(entry, fields):
    """The entry's fields in a fixed order, leaving out those it does not have."""
    return {f: entry[f] for f in fields if entry.get(f) not in (None, [], {}, '')}


def entry_json(reg, eid):
    xw = lambda cw: {k: [{'id': str(i), 'title': reg['crosswalks'][k]['ids'].get(str(i))} for i in v] for k, v in (cw or {}).items() if k in reg['crosswalks']}
    common = {'register_version': reg['version'], 'url': SITE + f'register/{slug(eid)}/'}
    if eid.startswith('RISK'):
        r = reg['risks'][eid]
        rule = rules(reg).get(r.get('combination')) if r.get('combination') else None
        return {'id': eid, 'type': 'risk', 'statement': r['statement'], 'description': r['description'].strip(),
                'elements': [{'id': e, 'name': reg['elements'][e]['name']} for e in r.get('element_ids') or []],
                **({'combination': {'id': r['combination'], 'name': rule['name'], 'roles': list(rule['legs'])}} if rule else {}),
                **({'min_authority': r['min_authority']} if r.get('min_authority') else {}),
                'failure_mode': r['failure_mode'], 'risk_type': r.get('type') or [],
                'hazards': [{'id': h, **{k: reg['hazards'][h][k] for k in ('name', 'type')}} for h in r.get('hazards') or []],
                'controls': [{'id': c, 'level': reg['controls'][c]['level'], 'statement': reg['controls'][c]['statement']} for c in sorted_controls(reg, r.get('controls') or [])],
                'sources': r.get('sources') or [], 'crosswalks': xw(r.get('crosswalks')),
                **({'superseded_by': r['superseded_by']} if retired(r) else {}), **common}
    if eid.startswith('CTRL'):
        c = reg['controls'][eid]
        return {'id': eid, 'type': 'control', 'level': c['level'], **({'level_when': c['level_when']} if c.get('level_when') else {}),
                'statement': c['statement'], 'recommendations': (c.get('recommendations') or '').strip(),
                **pick(c, ('enforcement', 'owner', 'phase', 'evidence', 'test')),
                'risks': [{'id': r, 'statement': reg['risks'][r]['statement']} for r in c.get('risks') or []],
                'references': c.get('references') or [], 'crosswalks': xw(c.get('crosswalks')),
                **({'superseded_by': c['superseded_by']} if retired(c) else {}), **common}
    e = reg['elements'][eid]
    return {'id': eid, 'type': 'element', 'kind': KIND[eid[:3]].lower(), 'name': e['name'], 'category': e.get('category'),
            'description': (e.get('description') or '').strip(), **pick(e, ELEMENT_FIELDS),
            'risks': [r for r, v in live(reg['risks']).items() if eid in (v.get('element_ids') or [])], **common}


AUTHORITY_SCHEMA = {'enum': list(AUTHORITY)}
SCHEMA = {
    '$schema': 'https://json-schema.org/draft/2020-12/schema',
    '$id': SITE + 'register/register.schema.json',
    'title': 'ARC risk register',
    'type': 'object',
    'required': ['version', 'released', 'elements', 'hazards', 'risks', 'controls'],
    'properties': {
        'version': {'type': 'string', 'description': 'Register version (MAJOR.MINOR.PATCH, with a pre-release label for a draft)'},
        'released': {'type': 'string', 'format': 'date'},
        'elements': {'type': 'object', 'description': 'Components (CMP-), design elements (DSN-) and capabilities (CAP-), by ID',
                     'additionalProperties': {'type': 'object', 'required': ['name', 'kind'], 'properties': {
                         'name': {'type': 'string'}, 'kind': {'enum': ['component', 'design', 'capability']},
                         'category': {'type': ['string', 'null']}, 'description': {'type': 'string'},
                         'present_when': {'type': 'string', 'description': 'For a conditional element: when a system has it'},
                         'authority': {'type': 'array', 'items': AUTHORITY_SCHEMA, 'description': 'For a capability: the authorities it can be used at, least to most'},
                         'irreversible': {'enum': ['ask', 'always', 'never']}, 'external': {'enum': ['ask', 'always', 'never']}}}},
        'hazards': {'type': 'object', 'additionalProperties': {'type': 'object', 'required': ['name', 'type'], 'properties': {
            'name': {'type': 'string'}, 'type': {'enum': ['Safety', 'Security']}, 'description': {'type': 'string'}}}},
        'combinations': {'type': 'object', 'description': 'Combination rules: shared roles, the rules that name them, and implied capabilities',
                         'properties': {'roles': {'type': 'object'}, 'rules': {'type': 'object'}, 'implies': {'type': 'object'}}},
        'risks': {'type': 'object', 'description': 'Risks by ID (RISK-nnn)', 'additionalProperties': {'type': 'object',
                  'required': ['statement', 'failure_mode', 'controls'], 'properties': {
                      'statement': {'type': 'string'}, 'description': {'type': 'string'},
                      'element_ids': {'type': 'array', 'items': {'type': 'string'}, 'description': 'The risk applies when the system has all of these'},
                      'combination': {'type': 'string', 'description': 'In place of element_ids: the combination rule the risk arises from'},
                      'min_authority': {'type': 'object', 'additionalProperties': AUTHORITY_SCHEMA,
                                        'description': 'The risk applies only where these capabilities are used at this authority or above'},
                      'failure_mode': {'type': 'string'}, 'type': {'type': 'array', 'items': {'enum': ['Safety', 'Security']}},
                      'hazards': {'type': 'array', 'items': {'type': 'string'}}, 'controls': {'type': 'array', 'items': {'type': 'string'}},
                      'sources': {'type': 'array', 'items': {'type': 'string'}}, 'crosswalks': {'type': 'object'},
                      'superseded_by': {'type': 'string', 'description': 'A retired risk: the risk that replaces it'}}}},
        'controls': {'type': 'object', 'description': 'Controls by ID (CTRL-nnnn)', 'additionalProperties': {'type': 'object',
                     'required': ['level', 'statement', 'risks'], 'properties': {
                         'level': {'enum': [0, 1, 2]}, 'statement': {'type': 'string'}, 'recommendations': {'type': 'string'},
                         'level_when': {'type': 'array', 'description': 'A stricter level where a capability is used in this context',
                                        'items': {'type': 'object', 'properties': {'level': {'enum': [0, 1, 2]}, 'authority': AUTHORITY_SCHEMA,
                                                  'irreversible': {'type': 'boolean'}, 'external': {'type': 'boolean'},
                                                  'capabilities': {'type': 'array', 'items': {'type': 'string'}}}}},
                         'enforcement': {'type': 'array', 'items': {'enum': list(ENFORCEMENT)}}, 'owner': {'type': 'string'},
                         'phase': {'type': 'array', 'items': {'type': 'string'}}, 'evidence': {'type': 'string'}, 'test': {'type': 'string'},
                         'risks': {'type': 'array', 'items': {'type': 'string'}}, 'references': {'type': ['array', 'null']},
                         'crosswalks': {'type': 'object'},
                         'superseded_by': {'type': 'string', 'description': 'A retired control: the control that replaces it'}}}},
    },
}


def register_json(reg):
    return {
        'version': reg['version'], 'released': reg['released'], 'url': SITE + 'register/',
        'elements': {k: {'name': v['name'], 'kind': KIND[k[:3]].lower(), 'category': v.get('category'),
                         'description': (v.get('description') or '').strip(), **pick(v, ELEMENT_FIELDS)}
                     for k, v in reg['elements'].items()},
        'hazards': reg['hazards'],
        'combinations': reg['combinations'] or {},
        'risks': {k: pick(v, RISK_FIELDS) | {'controls': v.get('controls') or []} for k, v in reg['risks'].items()},
        'controls': {k: pick(v, CONTROL_FIELDS) | {'risks': v.get('risks') or []} for k, v in reg['controls'].items()},
    }


def to_csv(header, rows):
    buf = io.StringIO()
    w = csv.writer(buf)
    w.writerow(header)
    w.writerows(rows)
    return buf.getvalue()


def twin(reg, eid):
    """An entry as plain Markdown, for agents."""
    j = entry_json(reg, eid)
    retired_line = [f"Retired: replaced by {j['superseded_by']} ({SITE}register/{slug(j['superseded_by'])}/).", ''] if j.get('superseded_by') else []
    if j['type'] == 'risk':
        arises = (f"the {j['combination']['name']} combination rule ({j['combination']['id']}): roles {', '.join(j['combination']['roles'])}"
                  if j.get('combination') else ' + '.join(f"{e['name']} ({e['id']})" for e in j['elements']))
        out = [f"# {eid} · {j['statement']}", '', f"ARC risk register {reg['version']}. {j['url']}", '', *retired_line, j['description'], '',
               f"- Arises from: {arises}",
               *([f"- Applies only at: {', '.join(f'{k} at {AUTH_NAME[v]} or above' for k, v in j['min_authority'].items())}"] if j.get('min_authority') else []),
               f"- Failure mode: {j['failure_mode']}", f"- Type: {', '.join(j['risk_type'])}",
               f"- Hazards: {', '.join(f'{h['name']} ({h['id']})' for h in j['hazards'])}"]
        if j['controls']:
            out += ['', '## Controls', '', *[f"- {c['id']} (Level {c['level']}): {c['statement']}" for c in j['controls']]]
        if j['crosswalks']:
            out += ['', '## Crosswalks', '', *[f"- {k}: {', '.join(x['id'] for x in v)}" for k, v in j['crosswalks'].items()]]
        if j['sources']:
            out += ['', '## Sources', '', *[f'- {s}' for s in j['sources']]]
    elif j['type'] == 'control':
        c = reg['controls'][eid]
        out = [f"# {eid} · {j['statement']}", '', f"ARC risk register {reg['version']}, Level {j['level']} control. {j['url']}", '', *retired_line,
               *([f"Stricter in some systems: {'; '.join(level_when_text(reg, w) for w in c['level_when'])}.", ''] if c.get('level_when') else []),
               j['recommendations']]
        check = [(k, j[k]) for k in ('enforcement', 'owner', 'phase', 'evidence', 'test') if j.get(k)]
        if check:
            out += ['', '## How to check it', '', *[f"- {k.capitalize()}: {', '.join(v) if isinstance(v, list) else v}" for k, v in check]]
        if j['risks']:
            out += ['', '## Risks it addresses', '', *[f"- {r['id']}: {r['statement']}" for r in j['risks']]]
        if j['references']:
            out += ['', '## References', '', *[f'- {s}' for s in j['references']]]
    else:
        e = reg['elements'][eid]
        out = [f"# {eid} · {j['name']}", '', f"ARC element ({j['kind']}{', ' + j['category'] if j['category'] else ''}), register {reg['version']}. {j['url']}", '',
               j['description'], '',
               *([f"Conditional: present when {e['present_when'].strip()}", ''] if e.get('present_when') else []),
               *([f"Used at: {', '.join(AUTH_NAME[a] for a in e['authority'])}; irreversible: {e.get('irreversible')}; external: {e.get('external')}", ''] if e.get('authority') else []),
               '## Risks that arise from it', '', *[f"- {r}: {reg['risks'][r]['statement']}" for r in j['risks']]]
    return '\n'.join(out) + '\n'


CROSSWALK_SLUGS = {'owasp_asi': 'owasp-asi', 'owasp_agentic_threats': 'owasp-threats', 'csa_addendum': 'csa', 'imda_mgf': 'imda',
                   'mitre_atlas': 'mitre-atlas', 'fiveeyes_agentic': 'five-eyes'}
CROSSWALK_SHORT = {'owasp_asi': 'OWASP Top 10 for Agentic Applications', 'owasp_agentic_threats': 'OWASP agentic threats',
                   'csa_addendum': 'CSA Securing Agentic AI addendum', 'imda_mgf': 'IMDA Model AI Governance Framework for Agentic AI',
                   'mitre_atlas': 'MITRE ATLAS', 'fiveeyes_agentic': 'Five Eyes guidance on agentic AI'}


def crosswalk_page(reg, key):
    """One framework's items, each with the ARC risks and controls that map to it. Retired entries are left out."""
    ref = reg['crosswalks'][key]
    lines = [f"ARC maps its {' and '.join(ref.get('applies_to') or ['risks', 'controls'])} to [{ref['title']}]({ref['url']})"
             + (f" ({ref['version']})" if ref.get('version') else '') + '. Each mapping points to the nearest corresponding entry; it is not a claim that the two are the same.', '',
             'Read it from either side: below, each item in that framework lists the ARC entries that map to it, and each ARC entry\'s own page lists its crosswalks.', '']
    unmapped = []
    mapped = lambda entries, item: [k for k, v in live(entries).items() if str(item) in [str(x) for x in (v.get('crosswalks') or {}).get(key, [])]]
    for item, name in ref['ids'].items():
        risks, ctls = mapped(reg['risks'], item), sorted(mapped(reg['controls'], item))
        if not risks and not ctls:
            unmapped.append(f'{item} ({name})')
            continue
        lines += [f'## {item} · {name}', '']
        if risks:
            lines += ['**Risks**', '', *[f"- [{r}](../{slug(r)}.md): {reg['risks'][r]['statement']}" for r in risks], '']
        if ctls:
            lines += ['**Controls**', '', *[f"- [{c}](../{slug(c)}.md) (Level {reg['controls'][c]['level']}): {reg['controls'][c]['statement']}" for c in ctls], '']
    if unmapped:
        lines += ['## Not mapped', '', 'No ARC entry maps to these items: ' + '; '.join(unmapped) + '.', '']
    return ({'description': f"Which ARC risks and controls map to each item of {ref['title']}."},
            f"# Crosswalk: {CROSSWALK_SHORT.get(key, ref['title'])}\n\n" + '\n'.join(lines))


# ---------------------------------------------------------------- applicability explorer

PROFILES = ROOT / 'examples' / 'systems'
PROFILE_ORDER = ['qa-bot', 'fact-checker', 'coding-assistant', 'call-assistant']   # others follow, by name


def presets():
    """The reference systems in examples/systems/, as starting points for the explorer."""
    files = sorted(PROFILES.glob('*.yaml'), key=lambda p: (PROFILE_ORDER.index(p.stem) if p.stem in PROFILE_ORDER else len(PROFILE_ORDER), p.stem))
    out = []
    for path in files:
        data = yaml.safe_load(path.read_text()) or {}
        caps = data.get('capabilities') or {}
        if isinstance(caps, list):
            caps = {c: {} for c in caps}
        caps = {str(c).upper(): (v or {}) for c, v in caps.items()}
        out.append({'id': path.stem, 'name': data.get('name') or path.stem,
                    'caps': list(caps),
                    'authority': {c: v['authority'] for c, v in caps.items() if v.get('authority')},
                    'reversible': [c for c, v in caps.items() if v.get('irreversible') is False],
                    'internal': [c for c, v in caps.items() if v.get('external') is False],
                    'components': [str(c).upper() for c in data.get('components') or []],
                    'note': f'The reference system in examples/systems/{path.name}'})
    return out


def explorer_data(reg):
    """What the applicability explorer (website/src/pages/explorer.astro) needs. The rule that reads it is
    website/src/scripts/applicability.mjs, which matches arc.py's `assess` (checked by skills/tests)."""
    return {
        'version': reg['version'],
        'elements': [{'id': k, 'name': v['name'], 'group': v['group'], 'description': first_sentence(v.get('description') or ''),
                      **pick(v, ELEMENT_FIELDS)} for k, v in reg['elements'].items()],
        'risks': [{'id': k, 's': r['statement'], 'e': r.get('element_ids') or [], 'c': sorted_controls(reg, r.get('controls') or []),
                   **({'comb': r['combination']} if r.get('combination') else {}),
                   **({'min': r['min_authority']} if r.get('min_authority') else {})} for k, r in live(reg['risks']).items()],
        'controls': {k: [c['level'], c['statement'], c.get('level_when') or []] for k, c in live(reg['controls']).items()},
        'rules': {rid: {'name': rule['name'], 'description': (rule.get('description') or '').strip(), 'control': rule.get('control'),
                        'risks': rule.get('risks') or [],
                        'legs': [{'id': lid, 'name': leg.get('name', lid), 'question': leg.get('question', ''),
                                  'caps': {c: {'mark': m.get('mark'), 'note': (m.get('note') or '').strip(), **({'min': m['min_authority']} if m.get('min_authority') else {})}
                                           for c, m in (leg.get('capabilities') or {}).items()}}
                                 for lid, leg in rule['legs'].items()]}
                  for rid, rule in rules(reg).items()},
        'implies': (reg['combinations'] or {}).get('implies') or {},
        'presets': presets(),
    }


def build():
    """Return (pages, public, register table, explorer data): pages maps a docs-style path
    (register/risk-034.md) to (frontmatter dict, MkDocs-flavoured Markdown, plain Markdown copy or
    None); public maps a path under website/public/ to its content."""
    reg = load()
    pages, public = {}, {}

    def chain(ids, fn):
        for i, eid in enumerate(ids):
            front, md = fn(reg, eid, ids[i - 1] if i else None, ids[i + 1] if i + 1 < len(ids) else None)
            pages[f'register/{slug(eid)}.md'] = (front, md, twin(reg, eid))
            public[f'register/{slug(eid)}.json'] = json.dumps(entry_json(reg, eid), indent=1, ensure_ascii=False)

    chain(list(reg['risks']), risk_page)
    chain(sorted(reg['controls']), control_page)
    chain(list(reg['elements']), element_page)
    for rel, (front, md) in {'register/index.md': front_page(reg), 'register/controls.md': controls_list(reg),
                             'register/elements.md': elements_list(reg), 'register/data.md': data_page(reg),
                             **{f'register/crosswalks/{v}.md': crosswalk_page(reg, k) for k, v in CROSSWALK_SLUGS.items() if k in reg['crosswalks']}}.items():
        pages[rel] = (front, md, None)

    full = json.dumps(register_json(reg), indent=1, ensure_ascii=False)
    schema = json.dumps(SCHEMA, indent=1)
    public['register/register.json'] = full
    public['register/register.schema.json'] = schema
    public[f'register/v{reg["version"]}/register.json'] = full
    public[f'register/v{reg["version"]}/register.schema.json'] = schema
    public['register/risks.csv'] = to_csv(
        ['id', 'statement', 'element_ids', 'combination', 'min_authority', 'failure_mode', 'type', 'hazards', 'controls', 'level0_controls',
         'superseded_by', 'url'],
        [[k, r['statement'], ' '.join(r.get('element_ids') or []), r.get('combination') or '',
          ' '.join(f'{c}={a}' for c, a in (r.get('min_authority') or {}).items()), r['failure_mode'], ' '.join(r.get('type') or []),
          ' '.join(r.get('hazards') or []), ' '.join(r.get('controls') or []),
          ' '.join(c for c in r.get('controls') or [] if reg['controls'][c]['level'] == 0), r.get('superseded_by') or '', SITE + f'register/{slug(k)}/']
         for k, r in reg['risks'].items()])
    public['register/controls.csv'] = to_csv(
        ['id', 'level', 'stricter_when', 'statement', 'enforcement', 'owner', 'phase', 'risks', 'superseded_by', 'url'],
        [[k, c['level'], '; '.join(level_when_text(reg, w) for w in c.get('level_when') or []), c['statement'],
          ' '.join(c.get('enforcement') or []), c.get('owner') or '', ' '.join(c.get('phase') or []), ' '.join(c.get('risks') or []),
          c.get('superseded_by') or '', SITE + f'register/{slug(k)}/'] for k, c in sorted(reg['controls'].items())])
    return pages, public, register_table(reg), explorer_data(reg)
