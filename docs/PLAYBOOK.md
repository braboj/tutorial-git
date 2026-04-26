# Playbook

Operational reference for common tasks in tutorial-git.


## 1. Content workflow

### 1.1 Editing a chapter

1. Open the chapter file in `chapters/`
2. Follow the structure defined in `CLAUDE.md` (overview, sections,
   exercises, quiz)
3. Use American English, capitalise Git in prose
4. Preview with any Markdown renderer — the content is SSG-agnostic

### 1.2 Adding a new chapter

1. Create `chapters/NN-slug.md` with frontmatter:
   ```yaml
   ---
   title: "Chapter Title"
   section: "slug"
   order: NN
   ---
   ```
2. Add `## Overview` as the first section
3. Add `## Exercises` and `## Quiz` at the end
4. Update `CLAUDE.md` project structure if the chapter list changed
5. Update cross-references in other chapters if needed

### 1.3 Adding exercises

- Place exercises at the end of the chapter under `## Exercises`
- Each exercise has: **Task**, **Steps** (numbered), **Verify**
- Exercises within a chapter use the same lab repository
- Cross-topic recipes go in `chapters/07-playbook/`

### 1.4 Adding quiz questions

- Place under `## Quiz` at the end of the chapter
- Format: `**Q1.** Question text` followed by `- A)` through `- D)`
- Vary correct answer positions across questions
- Add answers at the bottom under `### Answers`


## 2. Diagrams

### 2.1 Creating a new diagram

1. Open draw.io desktop
2. Follow the figure style rules in `CLAUDE.md` (palettes, arrows,
   components)
3. Save as `assets/drawio/git-<topic>-<variant>.drawio`
4. Use readable IDs: `card-commit-1`, `pill-main`, `arrow-3-2`

### 2.2 Exporting as PNG

**CLI (recommended for batch export):**

```bash
DRAWIO="/c/Program Files/draw.io/draw.io.exe"
"$DRAWIO" --export --format png --scale 2 --transparent \
  --output assets/images/<name>.png assets/drawio/<name>.drawio
```

**Manual (single diagram):**

1. Open the `.drawio` file in draw.io
2. File → Export as → PNG
3. Settings: transparent background, 2x scale
4. Save to `assets/images/` — use the same base name as the drawio file

### 2.3 Updating an existing diagram

1. Edit the `.drawio` source file
2. Re-export as PNG (section 2.2)
3. If the old image is being replaced with a different design, move the
   old PNG to `assets/archive/` before overwriting

### 2.4 Colour palette

Use Palette C (convention-based) from `CLAUDE.md`:
- Gray — regular commits
- Blue — main branch
- Green — feature branches
- Purple — merge commits
- Yellow — tags


## 3. Astro site

### 3.1 Running locally

```bash
cd astro-site
npm run dev       # http://localhost:4321/tutorial-git/
```

### 3.2 Content source

Chapters in `chapters/` are the single source for the Astro site. No
manual sync is needed. Cross-references use `NN-slug.md` format; the
remark plugin in `astro-site/src/plugins/remark-rewrite-links.ts`
rewrites them to Astro-compatible paths at build time.

### 3.3 Building for production

```bash
cd astro-site
npm run build     # output in dist/
npm run preview   # preview the production build
```

### 3.4 Deployment

Push to `main` — GitHub Actions builds and deploys to GitHub Pages
automatically. The CI creates the assets symlink before building.


## 4. Git workflow

### 4.1 Branch and commit

```bash
git switch main && git pull
git switch -c docs/chapter-name
# ... make changes ...
git add chapters/NN-slug.md
git commit -m "docs: description of change"
git push -u origin docs/chapter-name
```

### 4.2 Pull request

- PR title: concise, under 70 characters
- One chapter per PR when possible
- Verify content renders correctly before merging

### 4.3 After merge

```bash
git switch main && git pull
git branch -d docs/chapter-name
git push origin --delete docs/chapter-name
```

### 4.4 Updating the solid-ai-templates submodule

```bash
cd docs/solid-ai-templates
git checkout main && git pull
cd ../..
git add docs/solid-ai-templates
git commit -m "chore: update solid-ai-templates submodule"
```
