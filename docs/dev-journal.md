# Development Journal

Architecture overview and chronological session log for tutorial-git.


## Architecture

- **Content**: Markdown files in `chapters/` (SSG-agnostic)
- **Assets**: `assets/images/` (PNGs), `assets/drawio/` (source diagrams)
- **Site**: Astro static site in `astro-site/` (not yet wired to chapters)
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
- ADR: Convention-based colour palette (Option B) over original purple/pink palette — see CLAUDE.md Palette C
- ADR: Arrows point from child to parent (matching Git's internal pointers)
- ADR: White background card on all diagrams for dark theme compatibility
- ADR: `git switch` taught as primary, `git checkout` mentioned as legacy in a note
- ADR: Scope guard added — one chapter per session default

**Created outside tutorial-git:**
- `projects/me-healthy/HEALTHY-ME.md` — new me! series project brief
- `cross-cutting/SPIKE-DOCS-CHATBOT.md` — chatbot options for static docs
- `solid-ai-templates/base/scope.md` — upstreamed scope guard template (PR #42 merged)

**Open issues:**
- #78 — Export draw.io diagrams as PNGs for chapter 02
