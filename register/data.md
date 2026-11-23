# Register data

The whole register, generated from the [register YAML](https://github.com/govtech-responsibleai/arc-v2-draft/tree/v2.0.0-draft.1/arc-risk-register) on every build. The YAML is the source; these files are the same data in easier shapes.

| File | What it holds |
| --- | --- |
| [register.json](https://govtech-responsibleai.github.io/arc-v2-draft/register/register.json) | Every risk, control, element and hazard, with the combination rules and crosswalks |
| [register.schema.json](https://govtech-responsibleai.github.io/arc-v2-draft/register/register.schema.json) | JSON Schema for register.json |
| [risks.csv](https://govtech-responsibleai.github.io/arc-v2-draft/register/risks.csv) | One row per risk |
| [controls.csv](https://govtech-responsibleai.github.io/arc-v2-draft/register/controls.csv) | One row per control |
| [v2.0.0-draft.1/register.json](https://govtech-responsibleai.github.io/arc-v2-draft/register/v2.0.0-draft.1/register.json) | The same data at a fixed address for version 2.0.0-draft.1, for citing |

Each entry also has its own page, with JSON and Markdown copies alongside it: for example [RISK-034](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-034/) has [risk-034.json](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-034.json) and [risk-034.md](https://govtech-responsibleai.github.io/arc-v2-draft/register/risk-034/).

For agents, [llms.txt](https://govtech-responsibleai.github.io/arc-v2-draft/llms.txt) lists what is on this site, and [llms-full.txt](https://govtech-responsibleai.github.io/arc-v2-draft/llms-full.txt) has every page as Markdown in one file.

These files follow the register's [versioning policy](https://govtech-responsibleai.github.io/arc-v2-draft/arc_framework/changelog/): IDs are never reused, and a retired entry stays in the data with `superseded_by` pointing to the one that replaces it.
