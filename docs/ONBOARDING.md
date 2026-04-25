# Onboarding

How to set up and start contributing to tutorial-git.


## 1. Prerequisites

- Git 2.23+ (for `git switch` / `git restore`)
- Node.js 22+ and npm
- A text editor with Markdown support
- draw.io desktop (for editing diagrams)


## 2. First-time setup

```bash
git clone --recurse-submodules https://github.com/braboj/tutorial-git.git
cd tutorial-git
cd astro-site && npm install
ln -s ../../../assets src/content/assets   # image symlink (Linux/macOS)
cd ..
```

On Windows, the symlink is created as a directory copy automatically.
The symlink is gitignored — each developer creates it locally.

If you cloned without `--recurse-submodules`:

```bash
git submodule update --init --recursive
```


## 3. Verify the setup

```bash
cd astro-site
npm run dev
```

Open `http://localhost:4321/tutorial-git/` — the Astro dev server should start. All 9
chapters are wired as single-page sections. The site is deployed to
`braboj.github.io/tutorial-git/` via GitHub Actions.


## 4. Key files

| File | Purpose |
|------|---------|
| `CLAUDE.md` | AI agent context and project rules |
| `chapters/*.md` | Tutorial content (canonical, SSG-agnostic) |
| `assets/drawio/*.drawio` | Diagram source files |
| `assets/images/*.png` | Exported diagram PNGs |
| `docs/dev-journal.md` | Development history and session log |
| `docs/PLAYBOOK.md` | How to add content, edit diagrams, release |


## 5. Project context

tutorial-git is part of the **Code with Branko** tutorial platform. It
teaches Git across three difficulty tiers — Beginner (chapters 1-2),
Advanced (chapters 3-5), and Expert (chapter 6). Chapters 7-9 are
reference material (playbook, appendix, glossary).

The content lives in `chapters/` as plain Markdown, independent of any
static site generator. The Astro site in `astro-site/` consumes these
files for the web version.

```
01-introduction.md         06-expert-topics.md
02-building-blocks.md      07-playbook.md
03-branching-and-merging.md 08-appendix.md
04-remote-repositories.md  09-glossary.md
05-nested-repositories.md
```

Chapter structure, writing conventions, and figure style rules are
documented in `CLAUDE.md`. Quality conventions (git workflow, docs,
code style) are inherited from the `docs/solid-ai-templates/` submodule.


## 6. Daily workflow

See `docs/PLAYBOOK.md` for:
- How to edit chapter content (section 1)
- How to create and export diagrams (section 2)
- How to run the Astro site locally (section 3)
- Git workflow and release process (section 4)
