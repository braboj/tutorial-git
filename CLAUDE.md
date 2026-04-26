# CLAUDE.md — Git Tutorial (Code with Branko)

Instructions for Claude Code working in this repository.

Quality conventions defined in `docs/solid-ai-templates/` (submodule).
Key references:
- `docs/solid-ai-templates/base/git.md` — git workflow, branching, PRs
- `docs/solid-ai-templates/base/docs.md` — documentation rules, ADRs, writing style
- `docs/solid-ai-templates/base/quality.md` — SOLID, readability, code style
- `docs/solid-ai-templates/base/scope.md` — scope guard, session protocol
- `docs/solid-ai-templates/frontend/static-site.md` — static site architecture
- `docs/solid-ai-templates/stack/static-site-astro.md` — Astro-specific rules

Project-specific overrides and additions follow below.


## 1. Project

- **Name**: tutorial-git (Git Tutorial — Code with Branko)
- **Owner**: Branimir Georgiev — braboj
- **Repo**: github.com/braboj/tutorial-git
- **Stack**: Astro static site, Markdown content, draw.io diagrams
- **Hosting**: GitHub Pages via GitHub Actions
- **Domain**: braboj.me/tutorial-git (codewithbranko.com pending)

### 1.1 Project structure

```
chapters/                  # SSG-agnostic tutorial content (canonical)
  01-introduction.md
  02-building-blocks.md
  03-branching-and-merging.md
  04-remote-repositories.md
  05-nested-repositories.md
  06-expert-topics.md
  07-playbook.md
  recipes/               (17 recipe pages)
  08-appendix.md
  09-glossary.md
assets/
  images/                  # PNG exports used in chapters
  drawio/                  # draw.io source files (editable)
  archive/                 # Superseded images (kept for ebook)
  banners/
  doc/
  uml/
astro-site/                # Astro build (reads directly from chapters/)
docs/                      # Project docs, decisions, dev journal
  solid-ai-templates/      # Submodule — Imbra-Ltd/solid-ai-templates
```


## 2. Conventions

### 2.1 Git

Extends `docs/solid-ai-templates/base/git.md` with project-specific rules:

- Feature branches: `feature/<short-description>`
- Always run `git checkout main && git pull` before creating a new
  feature branch
- One commit per logical change
- PR title: concise, under 70 characters
- Delete feature branch after merge (local and remote)

### 2.2 Content

#### Chapter structure

Every chapter follows this structure:

1. Frontmatter (`title`, `section`, `order`)
2. `## Overview` — what the chapter covers and why
3. Content sections with `##` and `###` headings
4. `## Exercises` — hands-on tasks with verification steps
5. `## Quiz` — multiple-choice questions with answers at the bottom

#### Writing style

- **American English** spelling (analyze, not analyse)
- **Git** capitalised in prose, `git` lowercase in commands and code blocks
- Concise, direct sentences — no filler, no preamble
- Explain technical terms inline for beginners (e.g. "a hash — a unique identifier")
- No `---` separators between subsections — headings provide separation
- No inline Practice sections — all practice goes in Exercises
- No emojis unless explicitly requested

#### Quiz formatting

- Each option on a bullet line: `- A) ...`, `- B) ...`
- Vary the correct answer positions — never all the same letter
- Answers section at the bottom: `1. C — explanation`

### 2.3 Cross-references

- Reference other chapters by file: `[Building Blocks](02-building-blocks.md)`
- Reference sections within a chapter by heading anchor: `[Tag Object](#tag-object-labels)`
- Markdown links must use the **URL path** (driven by `section` frontmatter),
  not the filesystem path — the remark plugin
  (`astro-site/src/plugins/remark-rewrite-links.ts`) rewrites links at
  build time
- Recipe pages live in `chapters/recipes/` but their URLs are
  `/playbook/...` — link to them as `playbook/X.md`, not `recipes/X.md`

### 2.4 Images

- Source files: `assets/drawio/` (`.drawio` format)
- Exported PNGs: `assets/images/`
- Reference from chapters: `![Alt text](../assets/images/filename.png)`
- Superseded images move to `assets/archive/` — not deleted
- ASCII diagrams in markdown serve as fallback and source of truth


### 2.5 Figures

Every figure follows these rules. Applies to draw.io XML, PlantUML, and SVG.

#### Core principles

- Flat only: no gradients, shadows, glows, or 3D effects
- Sentence case for prose labels — filenames and acronyms keep their casing
- Two fonts: **Helvetica** for labels, **Courier New** for commands/hashes/filenames
- 0.5 px borders — quiet chrome
- One visual grammar per figure — if it needs two, split into two figures
- Shapes (circle vs pill vs card) distinguish elements in grayscale

#### Palettes

**A — Difficulty** (tier cards):
- Beginner: fill `#EAF3DE`, border `#3B6D11`, text `#27500A`
- Advanced: fill `#FAEEDA`, border `#854F0B`, text `#633806`
- Expert:   fill `#FCEBEB`, border `#A32D2D`, text `#791F1F`

**B — Scoring** (comparison cells): same hex as A. Good / Neutral / Bad.

**C — Categorical** (convention-based, matches common Git tool colours):
- Gray   `#F1F1F1` / `#888888` / `#2C2C2A` — **commit** (regular) / neutral
- Blue   `#DBEAFE` / `#2563EB` / `#1E40AF` — **main branch** / stable refs
- Green  `#DCFCE7` / `#16A34A` / `#15803D` — **feature branch** / active work
- Purple `#EDE9FE` / `#7C3AED` / `#5B21B6` — **merge commit**
- Yellow `#FEF9C3` / `#CA8A04` / `#854D0E` — **tag**
- Coral  `#FAECE7` / `#993C1D` / `#712B13` — **tree** (object model diagrams)
- Gray   `#F1EFE8` / `#5F5E5A` / `#2C2C2A` — **blob** / `.git` chrome (object model)

Canonical assignment — never swap these across figures in the series.
Convention rationale: blue = stable (GitHub, VS Code), green = active work
(GitKraken), purple = merge (common in Git GUIs). Reduces cognitive load
for readers who use Git tools.

**D — Zone** (sequence-diagram backgrounds):
- Local machine: `#FAF4E8`
- Remote server: `#EAF1F5`

**Neutral chrome** (all palettes):
- Border `#D3D1C7`, primary text `#2C2C2A`, secondary text `#5F5E5A`,
  arrow stroke `#444441`, white card `#FFFFFF`.

#### Typography

| Use | Font | Size | Weight | Style |
|---|---|---|---|---|
| Card titles, headers | Helvetica | 14 px | Bold | — |
| Body labels, row names | Helvetica | 12 px | Regular | — |
| Commands, hashes, filenames | Courier New | 11–12 px | Regular | — |
| Captions, footnotes | Helvetica | 11–12 px | Regular | — |
| Descriptive notes, placeholders | Helvetica | 11 px | Regular | Italic |

#### Arrow conventions

- Solid 1 px `#444441`, 6 × 6 px chevron head. Labels in clear space, never
  on the line.
- **Parent direction**: commit arrows point from child to parent
  (right-to-left in horizontal layouts). Matches Git's internal pointer
  direction and the ASCII diagrams in the tutorial (`A ← B ← C`).
- **Reference arrows** (branch/tag to commit): **dashed** (pattern `4 3`).
- **Unlabeled** if meaning is obvious from endpoints.
- **Italic `#5F5E5A` label** for named relationships (`attached`, `parent`).
- **Self-loop** (small arc above box corner) for recursive references.

#### Component vocabulary

- **Card**: rounded rect, rx=5–8, 0.5 px border, 10–12 px inner padding.
- **Pill**: rounded rect with rx = height/2. For branches, tags, short labels.
- **Badge**: filled circle, 20–22 px diameter, bold numeral inside.
- **Divider**: 0.5 px horizontal line at 30% opacity in parent's border color.
- **Background card**: white (`#FFFFFF`) rounded rect with neutral border
  (`#D3D1C7`, 0.5 px, rx=5) placed behind all diagram content. Ensures
  readability on both light and dark page backgrounds. Export PNGs with
  transparent background — the card provides the contrast.

#### Commit-chain panel variant

Gray commit circles (diameter 28), branch pills to the right of the
commit they point to, italic "HEAD" label above the active branch pill.
`*main` means HEAD is attached to main. Dashed arrow from pill to commit
shows the reference relationship. Uses Palette C.

#### draw.io file conventions

- Source files: `assets/drawio/<name>.drawio`
- Naming: `git-<topic>-<variant>.drawio` (e.g. `git-branch-merge.drawio`)
- Readable IDs: `card-commit-1`, `pill-main`, `arrow-3-2`
- All cells `parent="1"`
- XML-escape values: `&` → `&amp;`, `<` → `&lt;`, `>` → `&gt;`

#### draw.io style string templates

```
# Commit circle (gray):
ellipse;whiteSpace=wrap;html=1;fillColor=#F1F1F1;strokeColor=#888888;strokeWidth=0.5;shadow=0;fontSize=14;fontStyle=1;fontColor=#2C2C2A;fontFamily=Helvetica;aspect=fixed;

# Merge commit circle (purple):
ellipse;whiteSpace=wrap;html=1;fillColor=#EDE9FE;strokeColor=#7C3AED;strokeWidth=0.5;shadow=0;fontSize=14;fontStyle=1;fontColor=#5B21B6;fontFamily=Helvetica;aspect=fixed;

# Main branch pill (blue):
rounded=1;whiteSpace=wrap;html=1;fillColor=#DBEAFE;strokeColor=#2563EB;strokeWidth=0.5;arcSize=20;shadow=0;fontSize=14;fontStyle=1;fontColor=#1E40AF;fontFamily=Helvetica;verticalAlign=middle;align=center;

# Feature branch pill (green):
rounded=1;whiteSpace=wrap;html=1;fillColor=#DCFCE7;strokeColor=#16A34A;strokeWidth=0.5;arcSize=20;shadow=0;fontSize=14;fontStyle=1;fontColor=#15803D;fontFamily=Helvetica;verticalAlign=middle;align=center;

# HEAD label:
text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;fontSize=11;fontStyle=2;fontColor=<branch-border>;fontFamily=Helvetica;

# Solid arrow (parent pointer):
endArrow=classic;html=1;strokeColor=#444441;strokeWidth=1;endFill=1;endSize=6;

# Dashed arrow (reference):
endArrow=classic;html=1;strokeColor=#444441;strokeWidth=1;endFill=1;endSize=6;dashed=1;dashPattern=4 3;

# Background card:
rounded=1;whiteSpace=wrap;html=1;fillColor=#FFFFFF;strokeColor=#D3D1C7;strokeWidth=0.5;shadow=0;arcSize=5;
```

#### XML boilerplate

```xml
<mxfile host="app.diagrams.net">
  <diagram id="..." name="...">
    <mxGraphModel dx="1200" dy="700" grid="1" gridSize="10" page="1"
      pageWidth="..." pageHeight="..." math="0" shadow="0">
      <root>
        <mxCell id="0" />
        <mxCell id="1" parent="0" />
        <!-- cells go here -->
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>
```


## 3. Session protocol

### 3.1 Scope guard

Extends `base/scope.md` with tutorial-specific boundaries:
- One chapter per session is the default scope for content work
- Diagram, exercise, and quiz changes within that chapter are in scope
- Restructuring other chapters, creating new projects, or adding
  infrastructure is out of scope unless explicitly requested

### 3.2 Startup

Read all referenced template documents before starting work. Confirm
session scope with the user.

### 3.3 End of session

Before ending a session, verify all of the following:

1. **Dev journal** — add a session entry to `docs/dev-journal.md`
   (date, tool, key changes, PRs merged, issues closed/created, open issues)
2. **CLAUDE.md** — update if project structure or conventions changed
3. **README.md** — update if chapter list, links, or setup instructions changed
4. **ONBOARDING.md** — update `docs/ONBOARDING.md` if prerequisites,
   setup steps, or project structure changed
5. **PLAYBOOK.md** — update `docs/PLAYBOOK.md` if operational
   workflows or file paths changed
6. **solid-ai-templates** — check if upstream submodule needs updates
7. **Open issues** — close resolved GitHub issues, update or create
   issues for remaining work


## 4. Commands

```bash
# Astro site (from astro-site/)
npm run dev       # develop — hot reload at localhost:4321/tutorial-git/
npm run build     # production build to dist/
npm run preview   # preview production build locally
```
