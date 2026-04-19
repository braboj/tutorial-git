# Git tutorial figures — style rules

Every figure I produce follows these rules. Applies to draw.io XML, PlantUML, and SVG output.

## Core principles
- Flat only: no gradients, shadows, glows, or 3D effects.
- Must read in grayscale — never rely on color alone.
- Sentence case for prose labels. Filenames and acronyms keep their casing.
- Two fonts: **Helvetica** for labels, **Courier New** for commands/hashes/filenames.
- 0.5 px borders. Quiet chrome.
- One visual grammar per figure — if it needs two, split into two figures.

## Palettes

**A — Difficulty** (tier cards):
- Beginner: fill `#EAF3DE`, border `#3B6D11`, text `#27500A`
- Advanced: fill `#FAEEDA`, border `#854F0B`, text `#633806`
- Expert:   fill `#FCEBEB`, border `#A32D2D`, text `#791F1F`

**B — Scoring** (comparison cells): same hex as A. Good / Neutral / Bad.

**C — Categorical** (entity types):
- Teal   `#E1F5EE` / `#0F6E56` / `#085041` — **tag** (annotated object)
- Purple `#EEEDFE` / `#534AB7` / `#3C3489` — **commit**
- Coral  `#FAECE7` / `#993C1D` / `#712B13` — **tree**
- Gray   `#F1EFE8` / `#5F5E5A` / `#2C2C2A` — **blob** / leaf / neutral / `.git` chrome
- Pink   `#FBEAF0` / `#72243E` / `#4B1528` — **references** (HEAD, Branch, lightweight tags)

Canonical assignment — never swap these across figures in the series.

**D — Zone** (sequence-diagram backgrounds):
- Local machine: `#FAF4E8`
- Remote server: `#EAF1F5`

**Neutral chrome** (all palettes):
- Border `#D3D1C7`, primary text `#2C2C2A`, secondary text `#5F5E5A`, arrow stroke `#444441`, white card `#FFFFFF`.

## Typography

| Use | Font | Size | Weight | Style |
|---|---|---|---|---|
| Card titles, headers | Helvetica | 14 px | Bold | — |
| Body labels, row names | Helvetica | 12 px | Regular | — |
| Commands, hashes, filenames | Courier New | 11–12 px | Regular | — |
| Captions, footnotes | Helvetica | 11–12 px | Regular | — |
| Descriptive notes, placeholders | Helvetica | 11 px | Regular | Italic |

Line height for stacked field lists: 20 px.

## Four patterns

Pick the closest fit. If content needs two, split.

**1. Card grid** — overview pages, grouped by tier.
- Cards 118 × 140 px, rx=7, 0.5 px tier-tinted border.
- 130 px horizontal pitch. Tier rows: widest on top, narrowest on bottom (funnel).
- Numeric badge (22 × 22 px circle) at top-left, title next to it, mono command list below.
- Legend top-right: 10 × 10 px colored dots + labels.
- Uses Palette A.

**2. Sequence diagram** — use **PlantUML**, not draw.io. Auto-layout handles lifelines.
- Drop the default sticky-note + yellow chrome. Transparent notes, `#FFFFFF` actors, `#888780` borders, `#444441` arrows.
- Zones via `box "..." #FAF4E8 ... end box` (Palette D).
- Commands inline: `<font:monospaced>git add</font>`. Non-command actions: `//edits//` (italic).

**3. Comparison matrix** — products × tiers × features.
- Canvas 1000 × 520 px. Label column 200 px. Tier column 80 px. Provider group 240 px.
- Row heights: data 24 px, provider header 40 px, tier header 24 px.
- Cell-merging rule: if all tiers of one provider share both value AND color, merge to one wide cell. Never merge across providers.
- Provider header: bold name + muted score on second line. No fill, border only.
- Uses Palette B.

**4. Object reference** — schema cards showing entity fields + pointers. Two sub-forms:
- **Schema-card form** (high detail): card has header (bold type + mono hash), divider at 30% opacity, mono field list. Used when reader needs to see internal fields.
- **Reference-graph form** (low detail): small pills (100 × 40 px, rx=8), just type name inside. Used when only pointer relationships matter.
- **Commit-chain panel variant**: side-by-side panels showing pointer movement over a command sequence. Gray commit circles (diameter 28) in a vertical chain, pink pill for branch on right of commit, italic pink "HEAD" on left when detached, merged `*main` pill when attached. Dashed arrow shows what moved.
- Uses Palette C.

## Arrow conventions

- Solid 1 px `#444441`, 6 × 6 px chevron head. Labels in clear space, never on the line.
- **Unlabeled** if meaning is obvious from endpoints.
- **Italic `#5F5E5A` label** for named relationships (`attached`, `parent`, `subtree`).
- **Dashed** (pattern `4 3`) for conditional or alternative paths.
- **Self-loop** (small arc above box corner) for recursive references. Not a second same-type box.

## Component vocabulary

- **Card**: rounded rect, rx=5–8, 0.5 px border, 10–12 px inner padding.
- **Pill**: rounded rect with rx = height/2. For tags, short pointer labels.
- **Badge**: filled circle, 20–22 px diameter, bold numeral inside.
- **Divider**: 0.5 px horizontal line at 30% opacity in parent's border color.
- **Zone background**: solid rect behind actors (sequence diagrams only).

## draw.io style string templates

```
# Card (colored, tier or categorical):
rounded=1;whiteSpace=wrap;html=1;fillColor=<fill>;strokeColor=<border>;strokeWidth=0.5;arcSize=7;shadow=0;

# Pill (shorter card, pill-rounded):
rounded=1;whiteSpace=wrap;html=1;fillColor=<fill>;strokeColor=<border>;strokeWidth=0.5;arcSize=20;shadow=0;fontSize=14;fontStyle=1;fontColor=<text>;fontFamily=Helvetica;verticalAlign=middle;align=center;

# Card title (bold sans):
text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;fontSize=14;fontStyle=1;fontColor=<text>;fontFamily=Helvetica;

# Field line (monospace):
text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=top;fontSize=11;fontColor=#2C2C2A;fontFamily=Courier New;

# Italic caption / secondary:
text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;fontSize=11;fontStyle=2;fontColor=#5F5E5A;fontFamily=Helvetica;

# Solid arrow:
endArrow=classic;html=1;strokeColor=#444441;strokeWidth=1;endFill=1;endSize=6;

# Dashed arrow:
endArrow=classic;html=1;strokeColor=#444441;strokeWidth=1;endFill=1;endSize=6;dashed=1;dashPattern=4 3;

# Divider line:
shape=line;strokeColor=<border>;strokeWidth=0.5;opacity=30;

# Legend dot (ellipse):
ellipse;fillColor=<border>;strokeColor=none;
```

## XML boilerplate

```xml
<mxfile host="app.diagrams.net">
  <diagram id="..." name="...">
    <mxGraphModel dx="1200" dy="700" grid="1" gridSize="10" page="1" pageWidth="..." pageHeight="..." math="0" shadow="0">
      <root>
        <mxCell id="0" />
        <mxCell id="1" parent="0" />
        <!-- cells go here -->
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>
```

- All cells `parent="1"`.
- Readable IDs: `card-commit`, `title-commit`, `arrow-commit-tree`.
- XML-escape all values: `&` → `&amp;`, `<` → `&lt;`, `>` → `&gt;`, `"` → `&quot;`. Newlines in values: `&#10;`.
- Prefer generating `.drawio` files with a Python script for anything non-trivial — easier to edit and regenerate than hand-written XML.
