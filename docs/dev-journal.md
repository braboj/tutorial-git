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
