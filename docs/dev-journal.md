# Development Journal

Architecture overview and chronological session log for tutorial-git.


## Architecture

- **Content**: Markdown files in `chapters/` (SSG-agnostic)
- **Assets**: `assets/images/` (PNGs), `assets/drawio/` (source diagrams)
- **Site**: Astro static site in `astro-site/` (wired to chapters via content collection)
- **Templates**: `docs/solid-ai-templates/` submodule for CLAUDE.md generation
- **Hosting**: GitHub Pages via GitHub Actions


## Sessions

### 2026-04-19 — Chapter restructure and polish

**Tool:** Claude Code (Opus 4.6)

**Key changes:**
- Reviewed and scored chapter 01 (introduction) — polished to 10/10
- Split monolithic `02-concepts.md` into three chapters:
  - `02-building-blocks.md` — repository, object model, index, references, history navigation
  - `03-branching-and-merging.md` — branching, merging, conflicts, stashing
  - `04-deep-internals.md` — revision selectors, pathspec, refspec, subprojects, config, branching strategies, garbage collection
- Created `05-playbook.md` — 12 hands-on workflow exercises
- Created `06-appendix.md` — command quick reference, clients, references, notes
- Created `07-glossary.md` — extracted from appendix
- Removed 13 old operation chapter files, replaced with consolidated structure
- Added `assets/drawio/` with 5 branch workflow diagrams (Option B palette)
- Refactored CLAUDE.md to reference solid-ai-templates submodule

**Decisions:**
- [ADR-001](decisions/001-colour-palette.md) — Convention-based colour palette (Option B)
- [ADR-002](decisions/002-arrow-direction.md) — Parent-direction arrows in diagrams
- [ADR-003](decisions/003-background-card.md) — White background card for dark themes
- [ADR-004](decisions/004-git-switch.md) — git switch as primary, git checkout as legacy
- [ADR-005](decisions/005-scope-guard.md) — Scope guard for agent-assisted sessions

**Created outside tutorial-git:**
- `projects/me-healthy/HEALTHY-ME.md` — new me! series project brief
- `cross-cutting/SPIKE-DOCS-CHATBOT.md` — chatbot options for static docs
- `solid-ai-templates/base/scope.md` — upstreamed scope guard template (PR #42 merged)

**Open issues:**
- #78 — Export draw.io diagrams as PNGs for chapter 02

### 2026-04-19 — Full tutorial review and expansion

**Tool:** Claude Code (Opus 4.6)

**Key changes:**
- Reviewed and polished all 9 chapters to 10/10
- Created chapter 04 (Remote Repositories) — remotes, cloning, fetch, pull, push, forking
- Created chapter 05 (Subprojects) — split from deep internals, submodules and subtrees
- Renamed chapter 06 from Deep Internals to Expert Topics
- Added interactive rebase, git bisect, and hooks sections to chapter 06
- Removed branching strategies from chapter 06 (team workflow, not Git scope)
- Rewrote chapter 07 (Playbook) as ~50 recipe-based quick reference
- Trimmed chapter 08 (Appendix) — removed command reference, added SSH key setup
- Rewrote chapter 09 (Glossary) — 46 terms with chapter cross-references
- Fixed chapter 01 difficulty tiers (Inspect=Beginner, Branch=Advanced)
- Added object model diagram to chapter 02
- Chapter 03: added --no-ff, --squash, cherry-pick, rebase diagram, conflict workflow diagrams, stash internals
- Created 20+ draw.io diagrams in palette C style, all exported to PNG at 2x
- Automated draw.io → PNG export pipeline (draw.io CLI)
- Archived all old-style PNGs to assets/archive/
- Closed 11 GitHub issues (#18, #19, #20, #28, #29, #30, #31, #40, #49, #70, #78)

**Chapter structure after session:**
```
01-introduction.md
02-building-blocks.md
03-branching-and-merging.md
04-remote-repositories.md      ← NEW
05-subprojects.md              ← NEW (split from deep internals)
06-expert-topics.md            ← renamed, overhauled
07-playbook.md                 ← rewritten as recipes
08-appendix.md                 ← trimmed + SSH
09-glossary.md                 ← rewritten
```

**Open issues:**
- #72 — Deploy as GitHub Page (Astro site scaffolded, not wired to chapters)

### 2026-04-20 — Astro site wiring and content polish

**Tool:** Claude Code (Opus 4.6)

**Key changes:**
- Wired all 9 chapters to Astro site as single-page sections
- Removed operations subsections (10 files) and test pages (2 files)
- Renamed concepts to building-blocks to match canonical chapter
- Added assets symlink in `src/content/` for image resolution
- Switched CI pipeline from MkDocs to Astro (Node.js 22)
- Added `base: '/tutorial-git/'` for GitHub Pages deployment
- Disabled Shiki syntax highlighting — dark terminal code blocks
- Added hamburger menu for mobile nav (≤768px breakpoint)
- Numbered h2 headings across all chapters, added learning objectives
- Collapsible ToC — h2 visible, h3+ expandable on click
- Improved nav visibility — darker tab bar, WCAG AA contrast
- Teal underline on h2, muted h3 color for visual hierarchy
- Consolidated installation instructions (download → table → verify)
- Rewrote introduction exercises as linear flow (install → clone → add → commit → push → pull)
- Updated quiz to test core concepts (index, commit chain)
- Replaced object model diagram — vertical commit chain layout
- Created object types draw.io diagram with concrete example data
- Fixed broken cross-references in all chapters (file links → site URLs)
- Removed 9 dead tutorial sidebar links (only Azure and Python live)
- Updated home page, README (solid-ai-templates conformant)
- Upstreamed README spec change to solid-ai-templates (merged Overview into Title)
- Closed issues: #72, #83, #84, #88, #89, #90, #91, #92, #93, #94, #98

**Open issues:**
- #100 — Add search functionality
- #101 — Evaluate hamburger vs horizontal scroll for mobile nav

### 2026-04-20 — Structural audit and CI improvements

**Tool:** Claude Code (Opus 4.6)

**Key changes:**
- License changed from MIT to CC BY-NC-SA 4.0
- Removed old banner from README
- Fixed localhost URL in README, ONBOARDING, PLAYBOOK, CLAUDE.md (`localhost:4321/tutorial-git/`)
- Renamed semver tags: `V0.0.0.1` → `v0.0.1`, `V1.0.0` → `v1.0.0`, etc.
- Added `.bkp` to .gitignore (draw.io temp files)
- Moved 10 orphaned images to `assets/archive/`
- Deleted `git-object-model-prototype.drawio` (unused prototype)
- Deleted default Astro README (`astro-site/README.md`)
- Added `rel="noopener noreferrer"` to external links in TutorialLinks.astro
- Fixed ToC JS toggle — now only opens details on click, no longer fights native behavior
- Split CI into `build.yml` (PR validation) and `deploy.yml` (push to main)
- Pinned Node.js to 22.12.0 in both workflows
- Added npm cache and lychee link checker to both workflows
- Replaced generic issue template with 5 typed templates (epic, task, bug, incident, spike)

**Decisions:**
- [ADR-006](decisions/006-mobile-navigation.md) — Hamburger menu for mobile navigation

**Issues closed:**
- #100 — Search functionality (won't-fix — Ctrl+F sufficient for 9 chapters)
- #101 — Mobile nav evaluation (hamburger menu, matching tutorial-azure)

**Issues created:**
- #105 — Eliminate dual-source content model with remark plugin

**Open issues:**
- #105 — Eliminate dual-source content model
