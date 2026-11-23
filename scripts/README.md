# Scripts

The YAML in `arc-risk-register/` is the register. These scripts check it and derive the website's views of it. Nothing they generate is committed.

## `validate_risk_register.py`

Checks the register for well-formed IDs, required fields, valid elements, hazards, failure modes and levels, inverse-consistent risk↔control links, and valid crosswalk IDs. Exits non-zero on any error.

```bash
python scripts/validate_risk_register.py
```

## `build_risk_register.py`

Validates the register, then derives five files for the website:

- `assets/risk_register_data.json`: the data behind the [interactive register](../docs/arc_framework/risk-register.md) page, shaped for display (each risk carries copies of its controls, with element names and hazards resolved)
- `arc_framework/crosswalks.md`: the generated Crosswalks page
- `arc_framework/register-full-text.md`: every risk and control as plain text with a link per entry, for readers, search engines, and agents that don't run JavaScript
- `llms.txt`: an index of the site for LLM agents ([llmstxt.org](https://llmstxt.org)), pinned to the register version
- `arc_framework/capability-combinations.md`: the page of the same name in `docs/`, with each `<!-- arc:... -->` marker replaced by a table built from the register (the composite risks, and which capabilities supply each leg of a combination in `combinations.yaml`)

You don't normally run it yourself, because the site build does. Running it directly validates the register and prints a summary; `--out DIR` also writes the files under `DIR` for inspection:

```bash
python scripts/build_risk_register.py
python scripts/build_risk_register.py --out /tmp/arc-site-data
```

## `apply_overlay.py`

Applies an organisation's overlay to the register and writes the effective register to a directory, validated with the same checks. The overlay format is described in [For governance teams](../docs/implementation/for-governance-teams.md#keeping-your-version-as-an-overlay), and `examples/overlay/example-agency.yaml` is a worked example.

```bash
python scripts/apply_overlay.py --overlay examples/overlay/example-agency.yaml --out /tmp/example-register
```

## `build_site.py`

Prepares the website's content. `npm run build` and `npm run dev` in `website/` run it first. It:

- calls `build_risk_register.generate()`, so an invalid register fails the build;
- converts every page in `docs/`, and the generated pages, from MkDocs-flavoured Markdown into the Markdown Astro Starlight reads. Admonitions become asides or `<details>`, the first `# Heading` becomes the page title, and links to other `.md` files become site URLs;
- copies `docs/assets/` and the generated JSON and `llms.txt` into `website/public/`.

The pages keep their MkDocs-flavoured Markdown, so they read well on GitHub and the assessment skill can fetch them unchanged. Heading anchors are kept as they were, including explicit `{ #id }` ones (`website/src/plugins/heading-ids.mjs`), so existing links into the site keep working.

```bash
python scripts/build_site.py            # once
python scripts/build_site.py --watch    # rebuild when docs/, the register or scripts/ change (npm run dev does this)
```

Everything it writes is in `.gitignore`. The Capability combinations page is the one exception to "generated, not committed": its prose is committed in `docs/`, and the register's generated copy of it, with its tables filled in, replaces it at build time.

## `site_components.py` and `site_entries.py`

Used by `build_site.py`:

- `site_components.py` draws the pixel-art sprites as SVG, the ARC diagram and the element grid, and fills in the markers a page in `docs/` can use: `<!-- arc:diagram -->`, `<!-- arc:elements -->`, `<!-- arc:register -->`, `<!-- arc:sprite NAME SCALE -->`, and `<span data-arc="risks">66</span>` for a live count.
- `site_entries.py` generates a page for every risk, control and element (`register/risk-034/`), the register's front page and lists, one Crosswalk page per framework, the data files (`register/register.json` with a JSON Schema, CSV files, a JSON and Markdown copy of each entry, and a copy under `register/v<version>/`), the list of risks on `arc_framework/risk-register/`, and the data for the applicability explorer.

Neither writes anything that is committed.

## Incident file scripts

Three scripts work on the [incident file](../incidents/README.md), a curated list of cases mapped to the register:

- `validate_incidents.py` checks `incidents/*.yaml` against the register. CI runs it.
- `incident_coverage.py` prints which cases the register does not describe, grouped by theme, and which risks have no case.
- `harvest_incidents.py --cache DIR` lists new leads from the upstream trackers that publish machine-readable data.
