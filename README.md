# Git Tutorial

A hands-on Git tutorial for developers who want to go from first commit
to confident daily use. It covers everything from installation to
advanced topics like rebase, bisect, and submodules. The content is
published as a static site built with Astro and deployed to GitHub Pages.

## Quick start

Prerequisites: [Node.js](https://nodejs.org/) 22+

```text
$ git clone https://github.com/braboj/tutorial-git.git
$ cd tutorial-git/astro-site
$ npm install
$ ln -s ../../../assets src/content/assets   # image symlink (Linux/macOS)
$ npm run dev
```

Open [localhost:4321/tutorial-git/](http://localhost:4321/tutorial-git/) in your browser.

On Windows, the symlink is created as a directory copy automatically.

## Usage

Read the tutorial on the live site:
[braboj.me/tutorial-git](https://braboj.me/tutorial-git/)

Chapters can also be read directly as Markdown files in the `chapters/`
directory.

| # | Chapter | Topics |
|---|---------|--------|
| 1 | [Introduction](chapters/01-introduction.md) | What Git is, installation, how it works, command overview |
| 2 | [Building Blocks](chapters/02-building-blocks.md) | Repositories, objects, references, HEAD, tags |
| 3 | [Branching and Merging](chapters/03-branching-and-merging.md) | Branches, merge strategies, rebase, cherry-pick, conflicts, stash |
| 4 | [Remote Repositories](chapters/04-remote-repositories.md) | Clone, push, pull, fetch, remote tracking, forking workflows |
| 5 | [Nested Repositories](chapters/05-nested-repositories.md) | Submodules and subtrees |
| 6 | [Expert Topics](chapters/06-expert-topics.md) | Configuration, selectors, refspecs, hooks, bisect |
| 7 | [Playbook](chapters/07-playbook.md) | Step-by-step recipes for common tasks |
| 8 | [Appendix](chapters/08-appendix.md) | Merge strategies, SSH setup, Git clients, references |
| 9 | [Glossary](chapters/09-glossary.md) | Key terms and definitions |

## Project structure

```
chapters/              # Canonical tutorial content (SSG-agnostic Markdown)
assets/
  images/              # PNG exports used in chapters
  drawio/              # draw.io source files (editable)
  banners/             # Banner images
astro-site/            # Astro static site
  src/
    components/        # Astro components (Header, ToC, TutorialLinks)
    layouts/           # Page layouts
    pages/             # Route definitions
    styles/            # Global CSS
    data/              # Site configuration (site.json)
docs/                  # Project docs, decisions, dev journal
  solid-ai-templates/  # Submodule — quality conventions
```

## Development setup

```text
$ git clone https://github.com/braboj/tutorial-git.git
$ cd tutorial-git/astro-site
$ npm install
$ npm run dev       # dev server with hot reload
$ npm run build     # production build to dist/
$ npm run preview   # preview production build
```

## Configuration reference

| Key | Location | Description |
|-----|----------|-------------|
| `site` | `astro.config.mjs` | Base URL for the deployed site |
| `base` | `astro.config.mjs` | Path prefix for GitHub Pages (`/tutorial-git/`) |
| `trailingSlash` | `astro.config.mjs` | URL style — set to `always` |
| `title` | `src/data/site.json` | Site title shown in header |
| `tabs` | `src/data/site.json` | Navigation tab labels and hrefs |
| `tutorials` | `src/data/site.json` | Links to other tutorials in the sidebar |

## Links

- [Live site](https://braboj.me/tutorial-git/)
- [Contribution guide](docs/ONBOARDING.md)
- [Dev journal](docs/dev-journal.md)
- [Playbook](docs/PLAYBOOK.md)

## Credits

- [Branimir Georgiev](https://github.com/braboj)
- [Marwan Rashed](https://github.com/marwan-rashed)

## License

[CC BY-NC-SA 4.0](LICENSE.md)
