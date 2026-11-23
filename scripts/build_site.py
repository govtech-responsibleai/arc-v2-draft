#!/usr/bin/env python3
"""Prepare the website's content: validate the register, generate its pages, and
convert docs/ into the Markdown that the Astro Starlight site in website/ reads.

The pages in docs/ keep their MkDocs-flavoured Markdown (admonitions, `{ #id }`
heading anchors, links to other `.md` files), so they read well on GitHub and
existing pull requests need no rewriting. This script converts them on every
build. Nothing it writes is committed:

  website/src/content/docs/   converted pages, hand-written and generated
  website/public/assets/      a copy of docs/assets/ plus the register JSON
  website/public/llms.txt     generated from the register
  website/src/generated/      register summary and diagram for the homepage

An invalid register fails the build, as it did under MkDocs.

usage: python scripts/build_site.py            build once
       python scripts/build_site.py --watch    rebuild when docs/, the register or scripts/ change
"""

import argparse
import importlib
import json
import posixpath
import re
import shutil
import sys
import time
from pathlib import Path
from urllib.parse import urlparse

import yaml

sys.path.insert(0, str(Path(__file__).parent))
import build_risk_register  # noqa: E402
import site_components  # noqa: E402
import site_entries  # noqa: E402

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / 'docs'
WEBSITE = ROOT / 'website'
OUT_PAGES = WEBSITE / 'src' / 'content' / 'docs'
OUT_PUBLIC = WEBSITE / 'public'
OUT_DATA = WEBSITE / 'src' / 'generated'   # summary.json and arc-diagram.html for the homepage
GENERATED_PUBLIC = ['assets', 'llms.txt']   # paths under public/ this script owns

SITE = 'https://govtech-responsibleai.github.io/arc-v2-draft/'   # also SITE in website/astro.config.mjs
BASE = urlparse(SITE).path   # the site's base path, as `base` in website/astro.config.mjs
REPO = 'https://github.com/govtech-responsibleai/arc-v2-draft'

NAV_ORDER = [   # page order for llms-full.txt; follows the sidebar in website/astro.config.mjs
    'arc_framework/in-five-minutes.md', 'arc_framework/introduction.md', 'arc_framework/elements.md',
    'arc_framework/risks.md', 'arc_framework/controls.md', 'implementation/index.md',
    'implementation/for-governance-teams.md', 'implementation/for-ai-developers.md',
    'implementation/assessment-template.md', 'arc_framework/risk-register.md', 'arc_framework/register-full-text.md',
    'arc_framework/crosswalks.md', 'arc_framework/changelog.md', 'glossary.md', 'implementation/examples/index.md',
    'implementation/examples/fact-checker.md', 'implementation/examples/coding-assistant.md',
    'implementation/examples/call-assistant.md', 'about.md', 'resources/index.md',
]

PAGE_DESCRIPTIONS = {   # for pages whose source has no `description` in its frontmatter
    'implementation/index.md': 'How ARC goes from a general framework to practice: governance teams adapt it to their organisation, then developers assess each system against it.',
    'arc_framework/crosswalks.md': "How ARC's risks and controls map to the OWASP Top 10 for Agentic Applications, OWASP's agentic threats, the CSA Securing Agentic AI addendum, IMDA's framework for agentic AI, MITRE ATLAS, and the Five Eyes guidance on agentic AI.",
    'arc_framework/capability-combinations.md': 'Risks that arise only when capabilities are held together, such as the lethal trifecta and an agent with oversight within its reach: the rules that bring them into scope, and a check to run in your browser.',
    'arc_framework/register-full-text.md': 'Every risk and control in the ARC register as plain text, with a link for each entry, for readers, search engines and agents.',
}

PAGE_HEAD = {   # extra <head> tags for single pages
    'arc_framework/risk-register.md': [{'tag': 'script', 'attrs': {'src': f'{BASE}js/register.js', 'defer': True}}],
    'arc_framework/capability-combinations.md': [{'tag': 'script', 'attrs': {'src': f'{BASE}assets/combination-check.js', 'defer': True}}],
}
PASSTHROUGH = ['arcCard', 'prev', 'next', 'editUrl', 'tableOfContents', 'sidebar', 'head']   # frontmatter kept as is

ASIDE = {   # MkDocs admonition type -> Starlight aside type
    **dict.fromkeys(['note', 'abstract', 'summary', 'tldr', 'info', 'todo', 'question', 'help', 'faq', 'quote', 'cite'], 'note'),
    **dict.fromkeys(['tip', 'hint', 'important', 'success', 'check', 'done', 'example'], 'tip'),
    **dict.fromkeys(['warning', 'caution', 'attention'], 'caution'),
    **dict.fromkeys(['danger', 'error', 'failure', 'fail', 'missing', 'bug'], 'danger'),
}

ADMONITION = re.compile(r'^(?P<indent>[ \t]*)(?P<kind>!!!|\?\?\?\+?)[ \t]+(?P<type>[\w-]+)(?:[ \t]+"(?P<title>[^"]*)")?[ \t]*$')
FENCE = re.compile(r'^[ \t]*(```+|~~~+)')
EMOJI = re.compile(r':(?:material|octicons|fontawesome)-[a-z0-9-]+:\s?')
LINK_ATTRS = re.compile(r'(\]\([^)]*\))\{[ \t]*[.#][^}]*\}')
INLINE_LINK = re.compile(r'(\]\()(?P<url>[^)\s]+)(?P<rest>(?:[ \t]+"[^"]*")?\))')
REF_LINK = re.compile(r'^(?P<pre>[ \t]*\[[^\]]+\]:[ \t]*)(?P<url>\S+)', re.M)
SCHEME = re.compile(r'^[a-zA-Z][a-zA-Z0-9+.-]*:')


# ---------------------------------------------------------------- conversion

def split_frontmatter(text):
    if text.startswith('---\n'):
        end = text.find('\n---\n', 4)
        if end != -1:
            return yaml.safe_load(text[4:end]) or {}, text[end + 5:]
    return {}, text


def convert_admonitions(lines, style='starlight'):
    """Turn MkDocs admonitions into Starlight asides (`!!!`) or <details> (`???`), recursively.
    With style='quote', every admonition becomes a blockquote with a bold title (for plain Markdown)."""
    out, i, fence = [], 0, None
    while i < len(lines):
        line = lines[i]
        f = FENCE.match(line)
        if fence:
            out.append(line)
            if f and f.group(1)[0] == fence[0] and len(f.group(1)) >= len(fence):
                fence = None
            i += 1
            continue
        if f:
            fence = f.group(1)
            out.append(line)
            i += 1
            continue
        m = ADMONITION.match(line)
        if not m:
            out.append(line)
            i += 1
            continue
        indent = m.group('indent')
        body, i = [], i + 1
        while i < len(lines) and (not lines[i].strip() or lines[i].startswith(indent + '    ') or lines[i].startswith(indent + '\t')):
            body.append(lines[i])
            i += 1
        while body and not body[-1].strip():
            body.pop()
        inner = [l[len(indent) + 4:] if l.strip() else '' for l in body]
        inner = convert_admonitions(inner, style)
        title = m.group('title')
        if style == 'quote':
            head = f'**{title or m.group("type").capitalize()}**'
            while inner and not inner[0].strip():
                inner = inner[1:]
            block = ['> ' + head, '>'] + [('> ' + l) if l else '>' for l in inner]
        elif m.group('kind') == '!!!':
            colons = ':' * max(3, 1 + max((len(x) for x in re.findall(r'^\s*(:{3,})', '\n'.join(inner), re.M)), default=0))
            head = f'{colons}{ASIDE.get(m.group("type").lower(), "note")}'
            if title:
                head += f'[{title}]'
            block = [head, *inner, colons]
        else:
            opened = ' open' if m.group('kind').endswith('+') else ''
            summary = title if title is not None else m.group('type').capitalize()
            block = [f'<details{opened}>', f'<summary>{summary}</summary>', '', *inner, '', '</details>']
        out.extend(indent + l if l else '' for l in block)
        out.append('')
    return out


def page_url(docs_path):
    """docs-relative .md path -> absolute site URL (with base and trailing slash)."""
    page = docs_path[:-3]
    if page == 'index':
        page = ''
    elif page.endswith('/index'):
        page = page[:-6]
    return BASE + (page + '/' if page else '')


def rewrite_url(url, rel, absolute=False):
    """Resolve a link the way MkDocs did (relative to the source file) and return a site URL."""
    if url.startswith(('#', '/')) or SCHEME.match(url):
        return url
    path, _, frag = url.partition('#')
    target = posixpath.normpath(posixpath.join(posixpath.dirname(rel), path))
    new = page_url(target) if target.endswith('.md') else BASE + target
    if absolute:
        new = 'https://govtech-responsibleai.github.io' + new
    return new + ('#' + frag if frag else '')


def portable(text, rel, summary):
    """A page as plain Markdown for agents: the page's Markdown copy and its part of llms-full.txt.
    Admonitions become quotes, links become absolute URLs, and markers become text."""
    _, body = split_frontmatter(text)
    body = site_components.expand_text(body, summary)
    lines, fence, out = convert_admonitions(body.split('\n'), 'quote'), None, []
    for line in lines:
        f = FENCE.match(line)
        if f:
            fence = None if fence else f.group(1)
        if not fence:
            line = EMOJI.sub('', line)
            line = LINK_ATTRS.sub(r'\1', line)
            line = re.sub(r'^(#{1,6} .*?)\s*\{[^}]*\}\s*$', r'\1', line)
            line = INLINE_LINK.sub(lambda m: m.group(1) + rewrite_url(m.group('url'), rel, True) + m.group('rest'), line)
        out.append(line)
    body = REF_LINK.sub(lambda m: m.group('pre') + rewrite_url(m.group('url'), rel, True), '\n'.join(out))
    return re.sub(r'\n{3,}', '\n\n', body).strip() + '\n'


def glossary_jsonld(body):
    """The glossary as a schema.org DefinedTermSet, from its '## Term' headings and first paragraphs."""
    terms = []
    for m in re.finditer(r'^## (.+)\n\n(.+)$', body, re.M):
        text = re.sub(r'<[^>]+>', '', re.sub(r'\[([^\]]+)\]\([^)]*\)', r'\1', m.group(2))).strip()
        terms.append({'@type': 'DefinedTerm', 'name': m.group(1).strip(), 'description': text,
                      'url': f"{SITE}glossary/#{re.sub(r'[^a-z0-9]+', '-', m.group(1).lower()).strip('-')}"})
    return [{'tag': 'script', 'attrs': {'type': 'application/ld+json'}, 'content': json.dumps(
        {'@context': 'https://schema.org', '@type': 'DefinedTermSet', 'name': 'ARC Framework glossary', 'url': SITE + 'glossary/',
         'hasDefinedTerm': terms})}]


def homepage_markdown(s):
    c = s['counts']
    return f"""# Agentic Risk & Capability Framework (ARC)

> ARC, the Agentic Risk & Capability Framework, works out an agentic AI system's safety and security risks from what it is made of and what it can do, and recommends technical controls for each.

Register {s['version']}, released {s['released']}: {c['risks']} risks and {c['controls']} controls ({c['level0']} at Level 0).

Every page on this site has a Markdown copy at the same address with `.md` (for example {SITE}arc_framework/in-five-minutes.md), and [llms-full.txt]({SITE}llms-full.txt) has them all in one file.

## Start here

- [ARC in five minutes]({SITE}arc_framework/in-five-minutes/)
- [What applies to my system?]({SITE}explorer/): pick your system's capabilities and see the risks and Level 0 controls that apply
- [Assess a system, step by step]({SITE}implementation/for-ai-developers/)
- [Adopt ARC in your organisation]({SITE}implementation/for-governance-teams/)
- [The risk register]({SITE}register/): one page per risk, control and element, each also as `.json` and `.md`
- [Register data]({SITE}register/data/): the whole register as JSON and CSV, with a JSON Schema
- [About ARC, and how to cite it]({SITE}about/)

The ARC Framework is developed by the Responsible AI team at GovTech Singapore (https://www.tech.gov.sg/), and released under the Apache 2.0 licence.
"""


def convert(text, rel, generated, summary):
    """MkDocs-flavoured Markdown -> Starlight Markdown with frontmatter."""
    meta, body = split_frontmatter(text)
    body = site_components.expand(body, summary)
    lines = convert_admonitions(body.split('\n'))

    title, fence = None, None
    for n, line in enumerate(lines):
        f = FENCE.match(line)
        if f:
            fence = None if fence else f.group(1)
        if not fence and line.startswith('# '):
            title = re.sub(r'\s*\{[^}]*\}\s*$', '', EMOJI.sub('', line[2:])).strip()
            del lines[n]
            break
    if title is None:
        raise ValueError(f'{rel}: no "# Title" line')

    fence, converted = None, []
    for line in lines:
        f = FENCE.match(line)
        if f:
            fence = None if fence else f.group(1)
        if not fence:
            line = EMOJI.sub('', line)
            line = LINK_ATTRS.sub(r'\1', line)
            line = INLINE_LINK.sub(lambda m: m.group(1) + rewrite_url(m.group('url'), rel) + m.group('rest'), line)
        converted.append(line)
    body = REF_LINK.sub(lambda m: m.group('pre') + rewrite_url(m.group('url'), rel), '\n'.join(converted))

    front = {'title': title}
    description = meta.get('description') or PAGE_DESCRIPTIONS.get(rel)
    if description:
        front['description'] = description
    if 'toc' in (meta.get('hide') or []):
        front['tableOfContents'] = False
    front['editUrl'] = False if generated else f'{REPO}/edit/main/docs/{rel}'
    front.update({k: meta[k] for k in PASSTHROUGH if k in meta})
    if rel in PAGE_HEAD:
        front['head'] = PAGE_HEAD[rel]
    if rel == 'glossary.md':
        front['head'] = glossary_jsonld(body)
    return '---\n' + yaml.safe_dump(front, sort_keys=False, allow_unicode=True, width=1000) + '---\n\n' + body.lstrip('\n')


# ---------------------------------------------------------------- build

def write_if_changed(path, data):
    """Write only when content differs, so the dev server reloads only what changed."""
    data = data.encode() if isinstance(data, str) else data
    if path.exists() and path.read_bytes() == data:
        return False
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_bytes(data)
    return True


def prune(root, keep, owned=lambda p: True):
    """Delete files under root that this build did not produce (only those `owned` says are ours)."""
    if not root.exists():
        return
    for p in sorted(root.rglob('*'), reverse=True):
        if p.is_file() and p not in keep and owned(p):
            p.unlink()
        elif p.is_dir() and not any(p.iterdir()):
            p.rmdir()


def build():
    generated, warnings = build_risk_register.generate()   # raises RegisterInvalid
    for w in warnings:
        print(f'register: {w}')

    summary = site_components.summary()
    pages = {p.relative_to(DOCS).as_posix(): (p.read_text(), False)
             for p in DOCS.rglob('*.md') if 'assets' not in p.relative_to(DOCS).parts}
    pages.pop('index.md', None)   # the homepage is website/src/pages/index.astro

    # A page for every risk, control and element, the register's lists, and its data files
    entry_pages, entry_public, register_table, explorer = site_entries.build()
    site_components.PIECES['register'] = register_table
    entry_twins = {}
    for rel, (front, md, twin) in entry_pages.items():
        pages[rel] = ('---\n' + yaml.safe_dump(front, sort_keys=False, allow_unicode=True, width=1000) + '---\n\n' + md, True)
        if twin:
            entry_twins[rel] = twin
    site_components.PIECES_TEXT['register'] = '\n'.join(
        f"- [{md.splitlines()[0][2:]}]({SITE}{rel[:-3]}/)" for rel, (_, md, _) in entry_pages.items() if rel.startswith('register/risk-'))
    for rel, content in generated.items():
        if rel.endswith('.md'):
            # A generated page replaces the page of the same path in docs/. Where that page is its
            # committed source (Capability combinations: prose in docs/, tables from the register),
            # "Edit page" still leads to it.
            pages[rel] = (content, not (DOCS / rel).exists())

    written, keep = 0, set()
    for rel, (text, is_generated) in sorted(pages.items()):
        out = OUT_PAGES / rel
        keep.add(out)
        written += write_if_changed(out, convert(text, rel, is_generated, summary))

    for src in (DOCS / 'assets').rglob('*'):
        if src.is_file():
            out = OUT_PUBLIC / 'assets' / src.relative_to(DOCS / 'assets')
            keep.add(out)
            written += write_if_changed(out, src.read_bytes())
    for rel, content in [*generated.items(), *entry_public.items()]:
        if not rel.endswith('.md'):
            out = OUT_PUBLIC / rel
            keep.add(out)
            written += write_if_changed(out, content)

    # Markdown copies for agents: /arc_framework/controls/ -> /arc_framework/controls.md, and llms-full.txt
    twins = {rel: entry_twins.get(rel) or portable(text, rel, summary) for rel, (text, _) in pages.items() if rel != '404.md'}
    for rel, md in twins.items():
        out = OUT_PUBLIC / rel
        keep.add(out)
        written += write_if_changed(out, md)
    home = homepage_markdown(summary)
    keep.add(OUT_PUBLIC / 'index.md')
    written += write_if_changed(OUT_PUBLIC / 'index.md', home)
    order = [r for r in NAV_ORDER if r in twins] + sorted(r for r in twins if r not in NAV_ORDER)
    full = (f"# ARC Framework: every page as Markdown\n\n> The website of the Agentic Risk & Capability Framework, register {summary['version']}, "
            f"one page after another. Source: {SITE}\n\n" + home
            + ''.join(f"\n---\n\nSource: {page_url(r).replace(BASE, SITE, 1)}\n\n{twins[r]}" for r in order))
    keep.add(OUT_PUBLIC / 'llms-full.txt')
    written += write_if_changed(OUT_PUBLIC / 'llms-full.txt', full)

    for name, data in [('summary.json', json.dumps(summary, indent=1)), ('arc-diagram.html', site_components.diagram(summary)),
                       ('explorer.json', json.dumps(explorer, separators=(',', ':'), ensure_ascii=False))]:
        out = OUT_DATA / name
        keep.add(out)
        written += write_if_changed(out, data)

    prune(OUT_PAGES, keep)
    prune(OUT_PUBLIC / 'assets', keep)
    prune(OUT_PUBLIC, keep, lambda p: p.suffix == '.md' or p.name == 'llms-full.txt' or 'register' in p.relative_to(OUT_PUBLIC).parts[:1])
    print(f'site content: {len(pages)} pages, {written} file(s) updated')


def snapshot():
    watched = [DOCS, ROOT / 'arc-risk-register', ROOT / 'scripts']
    return {p: p.stat().st_mtime for d in watched for p in d.rglob('*') if p.is_file() and '__pycache__' not in p.parts}


def main():
    ap = argparse.ArgumentParser(description=__doc__.split('\n\n')[0])
    ap.add_argument('--watch', action='store_true', help='rebuild whenever a source file changes')
    args = ap.parse_args()
    try:
        build()
    except build_risk_register.RegisterInvalid as e:
        sys.exit(f'register invalid:\n{e}')
    if not args.watch:
        return
    seen = snapshot()
    while True:
        time.sleep(1)
        now = snapshot()
        if now != seen:
            seen = now
            try:
                importlib.reload(build_risk_register.validate_risk_register)
                importlib.reload(build_risk_register)
                importlib.reload(site_components)
                build()
            except Exception as e:   # keep watching through a bad edit
                print(f'build failed: {e}', file=sys.stderr)


if __name__ == '__main__':
    main()
