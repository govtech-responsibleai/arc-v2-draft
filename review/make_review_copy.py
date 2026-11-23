#!/usr/bin/env python3
"""
Turn a checkout of the ARC 2.0 draft into the copy that is published for review.

Run from the repository root, on a clean checkout of the draft:

    python review/make_review_copy.py --repo arc-v2-draft --draft 1 --date 2026-11-23

What it does, and nothing else:
  - points every link to the ARC repository and site at the review repository and its site,
    so that links to files which exist only in the draft resolve;
  - labels the register `2.0.0-draft.N`, dated the day of the snapshot;
  - adds a banner to every page, and asks search engines not to index the site;
  - leaves out what a draft should not have: its citation files, release workflow and dependency updates;
  - replaces the README with a guide for reviewers, and adds forms for comments;
  - if the incident file is present, points its cases at the risk that replaces a retired one;
  - removes the site's analytics, so draft traffic stays out of the published site's figures.

The review copy is one-way. Changes are made in the ARC repository and published here as a new
draft; nothing is merged back from this copy.
"""
import argparse
import datetime
import json
import re
import subprocess
import sys
from pathlib import Path

ORG = 'govtech-responsibleai'
OFFICIAL = 'agentic-risk-capability-framework'
OFFICIAL_SITE = f'https://{ORG}.github.io/{OFFICIAL}/'
KIT = Path(__file__).parent
TEXT = {'.md', '.py', '.yml', '.yaml', '.js', '.mjs', '.ts', '.astro', '.html', '.txt', '.json', '.toml', '.css', '.cff'}
SKIP = ('archive/', 'review/', 'site/', 'incidents/')


def fill(text, values):
    for key, value in values.items():
        text = text.replace('{' + key + '}', value)
    left = re.findall(r'\{[A-Z_]+\}', text)
    assert not left, f'unfilled placeholders: {left}'
    return text


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument('--repo', required=True, help='name of the review repository')
    parser.add_argument('--draft', type=int, required=True, help='draft number')
    parser.add_argument('--date', required=True, help='date of the snapshot, YYYY-MM-DD')
    parser.add_argument('--deadline', help='date by which comments are most useful, in words (e.g. "19 December 2026")')
    parser.add_argument('--contact', help='an email address or form for reviewers without a GitHub account')
    args = parser.parse_args()

    root = Path.cwd()
    if (root / 'overrides' / 'main.html').exists() or (root / 'website' / 'src' / 'review.json').exists():
        sys.exit('this checkout has already been turned into a review copy; start from a clean checkout of the draft')
    day = datetime.date.fromisoformat(args.date)
    version = f'2.0.0-draft.{args.draft}'
    repo_url = f'https://github.com/{ORG}/{args.repo}'
    site = f'https://{ORG}.github.io/{args.repo}/'
    values = {
        'REPO': args.repo, 'REPO_URL': repo_url, 'SITE': site, 'OFFICIAL_SITE': OFFICIAL_SITE,
        'DRAFT': str(args.draft), 'VERSION': version, 'DATE_LONG': f'{day.day} {day:%B %Y}',
    }

    # 1. Point repository and site links at the review copy
    files = subprocess.run(['git', 'ls-files'], capture_output=True, text=True, check=True).stdout.split('\n')
    changed = 0
    for rel in files:
        path = root / rel
        if not rel or rel.startswith(SKIP) or path.suffix not in TEXT or not path.is_file():
            continue
        text = path.read_text()
        new = text.replace(f'{ORG}/{OFFICIAL}', f'{ORG}/{args.repo}').replace(f'{ORG}.github.io/{OFFICIAL}', f'{ORG}.github.io/{args.repo}')
        if new != text:
            path.write_text(new)
            changed += 1
    print(f'links: rewritten in {changed} files')

    # 2. Label the register as a draft
    reg = root / 'arc-risk-register' / 'register.yaml'
    text = reg.read_text()
    text, n1 = re.subn(r'^version: "[^"]+"$', f'version: "{version}"', text, flags=re.M)
    text, n2 = re.subn(r'^released: "[^"]+"$', f'released: "{args.date}"', text, flags=re.M)
    assert (n1, n2) == (1, 1), 'register.yaml: version or released line not found'
    reg.write_text(text)

    # 3. Site: name, banner, no indexing, no analytics
    box = (f'!!! warning "Draft for review"\n\n'
           f'    This site is draft {args.draft} of ARC 2.0 ({values["DATE_LONG"]}). It is not the published framework, which is '
           f'[version 1.3.0]({OFFICIAL_SITE}). Please do not cite or adopt it. '
           f'[How to read and comment on this draft]({repo_url}#readme).\n\n')
    marker = '!!! info "What\'s new'
    website = root / 'website'
    if (website / 'astro.config.mjs').exists():
        # The Astro Starlight site reads src/review.json: its own title (short enough for a phone's header),
        # a banner for every page, noindex, and no analytics (see website/astro.config.mjs and website/src/routeData.ts).
        review = {'title': 'ARC 2.0 draft', 'banner': fill((KIT / 'banner.template.html').read_text(), values).strip()}
        (website / 'src' / 'review.json').write_text(json.dumps(review, indent=1, ensure_ascii=False) + '\n')
        # The site's base path follows its address, which step 1 rewrote. The Lighthouse check in CI serves
        # the built site under that path too, and names it without the organisation.
        for rel in ('website/lighthouserc.json', '.github/workflows/ci.yml'):
            path = root / rel
            if path.exists():
                path.write_text(path.read_text().replace(f'/{OFFICIAL}', f'/{args.repo}'))
        # The draft asks search engines not to index it, and Lighthouse's SEO score counts that against
        # every page, so the SEO budget is off in a review copy. The accessibility budget still applies.
        lhci = root / 'website' / 'lighthouserc.json'
        if lhci.exists():
            text, n = re.subn(r'"categories:seo":\s*\[[^\]]*\]', '"categories:seo": "off"', lhci.read_text())
            assert n == 1, 'lighthouserc.json: the SEO budget was not found'
            lhci.write_text(text)
        # A draft is not cited, released, or kept up to date by Dependabot
        for rel in ('CITATION.cff', '.zenodo.json', '.github/workflows/release.yml', '.github/dependabot.yml'):
            (root / rel).unlink(missing_ok=True)
        about = root / 'docs' / 'about.md'
        text = about.read_text()
        assert text.count(marker) == 1, 'about page: the "What\'s new" box was not found'
        about.write_text(text.replace(marker, box + marker))
    else:   # the MkDocs site of draft 1
        cfg = root / 'mkdocs.yml'
        lines = cfg.read_text().split('\n')
        out, skipping = [], False
        for line in lines:
            if line == '  analytics:':
                skipping = True
                continue
            if skipping and (re.match(r'^  \S', line) or re.match(r'^\S', line)):
                skipping = False
            if skipping:
                continue
            if line.startswith('site_name: '):
                line += ' (2.0 draft)'
            out.append(line)
            if line == '  name: material':
                out.append('  custom_dir: overrides')
        text = '\n'.join(out)
        assert 'custom_dir: overrides' in text and 'analytics' not in text and '(2.0 draft)' in text
        cfg.write_text(text)
        (root / 'overrides').mkdir()
        (root / 'overrides' / 'main.html').write_text(fill((KIT / 'main.template.html').read_text(), values))

        home = root / 'docs' / 'index.md'
        text = home.read_text()
        assert text.count(marker) == 1, 'homepage: the "What\'s new" box was not found'
        home.write_text(text.replace(marker, box + marker))

    # 4. Reviewer guide and comment forms
    values['CONTACT_LINE'] = (f'\nIf you do not have a GitHub account, send comments to {args.contact}.\n' if args.contact else '')
    values['DEADLINE_LINE'] = (f'\nComments are most useful to us by **{args.deadline}**.\n' if args.deadline else '')
    incidents = (root / 'incidents' / 'incidents.yaml').exists()
    values['INCIDENTS_NOTE'] = (
        '- **A checked and remapped incident file.** The [incident file](incidents/) that the new risks were written from holds '
        'cases written from upstream trackers and their cited sources. A maintainer has not yet checked each case against its '
        'primary source; the `status` field of a case says so. The cases are mapped to version 1.3.0 of the register: the `gap` '
        'field of a case says what 1.3.0 did not describe, and the new risks were written from those gaps. The cases have not '
        'yet been remapped to the new risks.\n' if incidents else '')
    (root / 'README.md').write_text(fill((KIT / 'README.template.md').read_text(), values))
    if incidents:   # the cases were mapped to register 1.3.0; follow the register's own pointers for retired risks
        retired = dict(re.findall(r'^(RISK-\d+):\n(?:  .*\n)*?  superseded_by: (RISK-\d+)$',
                                  (root / 'arc-risk-register' / 'risks.yaml').read_text(), flags=re.M))
        def remap(match):
            ids = [retired.get(i.strip(), i.strip()) for i in match.group(1).split(',') if i.strip()]
            return f"risks: [{', '.join(dict.fromkeys(ids))}]"
        path = root / 'incidents' / 'incidents.yaml'
        text = path.read_text()
        new = re.sub(r'risks: \[([^\]]*)\]', remap, text)
        print(f'incident file: {sum(a != b for a, b in zip(text.split(chr(10)), new.split(chr(10))))} cases repointed from retired risks {sorted(retired)}')
        path.write_text(new)
    forms = root / '.github' / 'ISSUE_TEMPLATE'
    forms.mkdir(parents=True, exist_ok=True)
    for form in sorted((KIT / 'issue-forms').glob('*.yml')):
        (forms / form.name).write_text(fill(form.read_text(), values))
    print(f'review copy written: {version}, {repo_url}, incident file {"included" if incidents else "not included"}')


if __name__ == '__main__':
    main()
