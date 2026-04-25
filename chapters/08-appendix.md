---
title: "Appendix"
description: "Reference material — merge strategies, SSH key setup, Git clients, and external resources."
section: "appendix"
order: 8
---

## 1. Overview

This appendix contains reference material that supports the tutorial
chapters — merge strategies, Git clients, external resources, and
notes. For step-by-step recipes, see the [Playbook](playbook/index.md).
For command help, run `git help <command>`.

In this chapter you will learn:

- Merge strategies — when Git uses each strategy and how to force one
- SSH key setup — generate keys, configure the agent, and connect to GitHub
- Git clients — popular graphical tools for each platform
- References — books, troubleshooting guides, visualizations, and workflow models

## 2. Merge Strategies

Git selects a merge strategy automatically. You can force one with
`git merge -s <strategy>`.

| Strategy | When Git uses it | What it does |
|----------|-----------------|--------------|
| `recursive` | Default for two branches | 3-way merge; handles multiple common ancestors (criss-cross) |
| `ort` | Default in Git 2.34+ | Faster replacement for recursive; same behavior |
| `octopus` | Default when merging 3+ branches | Merges all at once; fails if any conflicts |
| `ours` | Manual only (`-s ours`) | Records merge but ignores incoming changes entirely |
| `subtree` | Manual only (`-s subtree`) | Adjusts paths when one branch is a subdirectory of another |

> **Note:** Do not confuse the **ours strategy** (`-s ours`) with the
> **ours option** (`-X ours`). The strategy discards the entire branch.
> The option resolves individual conflicts by preferring the current
> branch but still includes non-conflicting changes.

## 3. SSH Key Setup

SSH lets you authenticate with remotes without entering a password
each time. This is the recommended method for frequent use.

### Generate a key

```text
$ ssh-keygen -t ed25519 -C "you@example.com"
```

Accept the default file location (`~/.ssh/id_ed25519`). Set a
passphrase when prompted — it protects the key if your machine is
compromised.

### Add the key to the SSH agent

```text
$ eval "$(ssh-agent -s)"             # start the agent
$ ssh-add ~/.ssh/id_ed25519          # add your key
```

On Windows (Git Bash), use the same commands. On macOS, add
`--apple-use-keychain` to avoid re-entering the passphrase.

### Add the public key to GitHub

```text
$ cat ~/.ssh/id_ed25519.pub          # copy this output
```

On GitHub: Settings → SSH and GPG keys → New SSH key → paste the
public key.

### Test the connection

```text
$ ssh -T git@github.com
Hi username! You've successfully authenticated...
```

### Switch a repository from HTTPS to SSH

```text
$ git remote set-url origin git@github.com:user/repo.git
```

## 4. Git Clients

| Client | Platform | Notes |
|--------|----------|-------|
| [GitHub Desktop](https://desktop.github.com/) | Windows, macOS | Simple, GitHub-focused |
| [Sourcetree](https://www.sourcetreeapp.com/) | Windows, macOS | Full-featured, free |
| [GitKraken](https://www.gitkraken.com/) | Windows, macOS, Linux | Visual, cross-platform |
| [TortoiseGit](https://tortoisegit.org/) | Windows | Shell integration |
| [Git Extensions](https://gitextensions.github.io/) | Windows | Lightweight, open source |

## 5. References

### Books and tutorials

- [Pro Git Book](http://git-scm.com/book/en/v2) — comprehensive, free, official
- [Git Internals PDF](https://github.com/pluralsight/git-internals-pdf/releases) — deep dive into Git's object model
- [Think Like a Git](http://think-like-a-git.net/) — mental models for Git
- [Git Immersion](https://gitimmersion.com/index.html) — guided hands-on tour

### Troubleshooting

- [Git Flight Rules](https://github.com/k88hudson/git-flight-rules) — what to do when things go wrong
- [Oh Shit, Git!?!](https://ohshitgit.com/) — common mistakes and fixes

### Visualization

- [Learn Git Branching](https://learngitbranching.js.org/) — interactive branching exercises
- [Visualizing Git](https://git-school.github.io/visualizing-git/) — real-time commit graph

### Workflows

- [A Successful Git Branching Model](https://nvie.com/posts/a-successful-git-branching-model/) — Git Flow (Vincent Driessen)
- [Trunk-Based Development](https://www.toptal.com/software/trunk-based-development-git-flow) — comparison with Git Flow
- [OneFlow](https://www.endoflineblog.com/oneflow-a-git-branching-model-and-workflow) — simplified alternative to Git Flow

## 6. Notes

1. Git cannot commit empty folders. Add a placeholder file (e.g.
   `.gitkeep`) if you need an empty directory tracked.

2. Unlike `svn add`, `git add` does not permanently track a file — it
   stages changes for the next commit. Run `git add` each time a file
   is modified.

3. Changing the user email in configuration causes future commits to
   appear under a different identity. Past commits are not affected.
