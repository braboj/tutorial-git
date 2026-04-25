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
05-nested-repositories.md      ← NEW (split from deep internals)
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

### 2026-04-25 — Single-source content and chapter 4 rewrite

**Tool:** Claude Code (Opus 4.6)

**Key changes:**
- Merged PR #115 — single-source content model with remark plugin
  - Content collection now reads from `chapters/` directly
  - Remark plugin rewrites `NN-slug.md` links to `../slug/` at build time
  - Deleted 9 duplicate files from `astro-site/src/content/docs/`
  - Updated PLAYBOOK.md and CLAUDE.md
- Rewrote chapter 04 (Remote Repositories) for beginner clarity
  - Restructured: concepts first (remotes, tracking, config), commands after
  - Added branch tracking configuration with full pull chain explanation
  - Added `.git/refs/remotes/` tree view and `.git/config` refspec breakdown
  - Reordered subsections: remote-tracking branches before managing remotes
- Created 3 new zoom-in diagrams (fetch, merge, push)
  - Each highlights what changes (thick border) and dims what stays the same
- Redesigned flow diagram — remote-tracking inside Local Repo, connected arrows
- Redesigned clone diagram — local-left/remote-right, checkout arrow, .git/config box
- Polished all diagrams in draw.io desktop with consistent layout
- Fixed CI: mkdir -p before assets symlink, lychee link checker disabled (#121)
- Fixed cross-chapter anchor links (#3-merging, #6-conflicts)
- Added new quiz questions testing the mental model (where remotes stored, what fetch changes)

**Issues closed:**
- #105 — Eliminate dual-source content model (PR #115)
- #111 — Review images in Remote Repositories chapter (PR #120)

**Issues created:**
- #109 — Add interactive learning recommendations
- #110 — Improve mobile ToC access from hamburger menu
- #112 — Consider renaming Expert to Expert Topics
- #113 — Add team workflow best practices section
- #114 — Explore animated visualizations for Git concepts
- #116 — Add cross-chapter learning journey narrative
- #117 — Add feedback button for users without GitHub accounts
- #118 — Add interactive console for hands-on practice
- #119 — Hire designer for professional diagram illustrations
- #121 — Fix lychee link checker for Astro base path
- #122 — Review exercise design: self-contained vs cross-referenced
- #123 — Add SEO optimization: meta tags, sitemap, structured data

**Open issues:**
- #106, #109, #110, #112–#114, #116–#119, #121–#123

### 2026-04-25 — SEO, chapter names, link checker, marketing

**Tool:** Claude Code (Opus 4.6)

**Key changes:**
- Fixed lychee link checker — symlink for Astro base path, exclude_path for recursive scan, remove symlink before artifact upload
- Renamed chapter 05 from Subprojects to Nested Repositories (file, title, section, all cross-refs)
- Fixed tab labels: Branching → Branching & Merging, Remotes → Remote Repos, Expert → Expert Topics, Introduction → Intro
- Added inline `overflow:hidden` on tabs bar to prevent FOUC scrollbar flash
- Reduced tab padding for 10-tab layout
- Added SEO: unique meta descriptions per chapter, OG + Twitter Card tags, canonical URLs, JSON-LD (Course + Article), @astrojs/sitemap, robots.txt
- Set canonical domain to braboj.me (was braboj.github.io)
- Updated solid-ai-templates submodule to latest (7 merged PRs)
- Updated GitHub repo description and topics (8 topics)
- Submitted sitemap to Google Search Console

**PRs merged:**
- #124 — solid-ai-templates submodule update
- #125 — Lychee link checker fix
- #126 — Chapter names and tab labels
- #128 — SEO optimization
- #134 — Canonical domain fix
- #136 — robots.txt sitemap URL fix
- #137 — Lychee symlink exclude
- #138 — Remove symlink before artifact upload

**Issues closed:**
- #112 — Chapter names (renamed to "Assess all chapter names")
- #121 — Fix lychee link checker
- #123 — SEO optimization
- #130 — Submit sitemap to Google Search Console

**Issues created:**
- #127 — Explore heading styles: colors, separators, visual hierarchy
- #129 — Split playbook into individual recipe pages for SEO
- #130 — Submit sitemap to Google Search Console (closed)
- #131 — Republish top chapters on Dev.to and Hashnode
- #132 — Create YouTube companion videos
- #133 — Start LinkedIn content plan
- #135 — Migrate canonical domain to codewithbranko.com
- #139 — Improve home page with tutorial motivation
- #140 — Add AI chat widget for tutorial Q&A
- solid-ai-templates#55 — Add SEO conventions to templates

**Open issues:**
- #106, #109, #110, #113, #114, #116–#119, #122, #127, #129, #131–#133, #135, #139, #140

### 2026-04-25 — Playbook split, new recipes, UX improvements, home page

**Tool:** Claude Code (Opus 4.6)

**Key changes:**
- Split monolithic `07-playbook.md` into 11 individual recipe pages under `chapters/playbook/`
- Added 6 new recipe pages: subtrees, hooks, remote management, diffing, history, selectors (17 total)
- Organized playbook index into 5 sections: Everyday, Branching and Merging, Remote, Project Structure, Advanced
- Extended remark link-rewriting plugin to handle subdirectory and sibling file links
- Updated cross-references in glossary and appendix to point to specific recipe pages
- Added draggable sidebar splitters (JS, session-only, teal highlight on hover)
- Widened default sidebar from 12rem to 16rem
- Switched from Google Fonts (Roboto) to system fonts — eliminates font FOUC entirely
- Fixed theme FOUC — moved theme init from body to head
- Added favicon link with correct base path
- Increased tab button spacing to 0.75rem
- Rewrote home page: added "Why This Tutorial" section, personal origin story, AI workflow messaging
- Removed Quick start section (duplicated Introduction links)
- Renamed "Selected references" to "Further Reading"
- Fixed heading case to title case for consistency with chapters

**PRs merged:**
- #142 — Split playbook into individual recipe pages
- #143 — Add 6 new playbook recipe pages
- #144 — Playbook sidebar nav and FOUC fix
- #145 — Resizable sidebars, system fonts, favicon fix
- #148 — Home page rewrite with motivation and personal story

**Issues closed:**
- #129 — Split playbook into individual recipe pages
- #139 — Improve home page with motivation
- #146 — Fix font FOUC (switched to system fonts)

**Issues created:**
- #146 — Fix font FOUC (closed same session)
- #147 — Add AI prompt guides for learning Git

**Open issues:**
- #106, #109, #110, #113, #114, #116–#119, #122, #127, #131–#133, #135, #140, #147
