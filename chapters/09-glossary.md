---
title: "Glossary"
section: "glossary"
order: 9
---

## Glossary

A reference of key Git terms used throughout this tutorial, with links to the chapter where each concept is covered.

| Term | Definition | Chapter |
|------|-----------|---------|
| Annotated tag | A tag object with author, date, and message — stored in `.git/objects/` | [2](02-building-blocks.md) |
| Bare repository | A repository with no working tree — only `.git/` internals | [2](02-building-blocks.md) |
| Bisect | Binary search through commit history to find the commit that introduced a bug | [6](06-expert-topics.md) |
| Blame | Show which commit and author last modified each line of a file | [7](07-playbook.md) |
| Blob | Object that stores the raw contents of a single file | [2](02-building-blocks.md) |
| Branch | A movable pointer to a commit, stored in `.git/refs/heads/` | [2](02-building-blocks.md) |
| Cherry-pick | Copy a single commit from one branch onto another, creating a new commit with a different hash | [3](03-branching-and-merging.md) |
| Clone | Create a local copy of a remote repository, including full history, origin remote, and tracking branches | [4](04-remote-repositories.md) |
| Commit | An object that records a snapshot of the project — references a tree, parent commits, author, and message | [2](02-building-blocks.md) |
| Conflict | When two branches modify the same lines and Git cannot merge them automatically | [3](03-branching-and-merging.md) |
| Detached HEAD | State where HEAD points directly to a commit instead of a branch — new commits are orphaned if you switch away | [2](02-building-blocks.md) |
| Fast-forward | A merge where the target branch simply moves forward to the source branch tip — no merge commit is created | [3](03-branching-and-merging.md) |
| Fetch | Download commits from a remote and update remote-tracking branches without modifying local branches | [4](04-remote-repositories.md) |
| Fork | A hosting-platform copy of someone else's repository under your account | [4](04-remote-repositories.md) |
| Garbage collection | Git's process for removing orphaned objects from `.git/objects/` | [6](06-expert-topics.md) |
| Hash | A unique 40-character identifier (SHA-1) computed from an object's content | [2](02-building-blocks.md) |
| HEAD | Reference to the current position — usually points to a branch, sometimes directly to a commit (detached) | [2](02-building-blocks.md) |
| Hook | A script in `.git/hooks/` that Git runs automatically before or after events like commit or push | [6](06-expert-topics.md) |
| Index | The staging area — a sorted list of tracked files prepared for the next commit, stored at `.git/index` | [2](02-building-blocks.md) |
| Interactive rebase | Editing, reordering, squashing, or dropping commits before sharing them | [6](06-expert-topics.md) |
| Lightweight tag | A tag that is just a file in `.git/refs/tags/` containing a commit hash — no object, no metadata | [2](02-building-blocks.md) |
| Merge | Combining changes from two branches into one, optionally creating a merge commit | [3](03-branching-and-merging.md) |
| Merge commit | A commit with two or more parents, created by a 3-way merge | [3](03-branching-and-merging.md) |
| Origin | Conventional name for the remote you cloned from | [4](04-remote-repositories.md) |
| Orphaned commit | A commit no branch or tag points to — eligible for garbage collection after reflog expiry | [6](06-expert-topics.md) |
| Pathspec | A pattern that matches files or directories in Git commands | [6](06-expert-topics.md) |
| Pull | Fetch from a remote and merge (or rebase) into the current branch | [4](04-remote-repositories.md) |
| Pull request | A hosting-platform feature for requesting review and merge of a branch | [4](04-remote-repositories.md) |
| Push | Upload local commits to a remote branch | [4](04-remote-repositories.md) |
| Rebase | Replay commits from one branch on top of another, producing a linear history | [3](03-branching-and-merging.md) |
| Reflog | A local log of every position HEAD and branch tips have been in — used to recover lost commits | [6](06-expert-topics.md) |
| Refspec | Syntax that maps references between a remote and a local repository (e.g. `+refs/heads/*:refs/remotes/origin/*`) | [6](06-expert-topics.md) |
| Remote | A named reference to another repository, stored in `.git/config` | [4](04-remote-repositories.md) |
| Remote-tracking branch | A read-only local reference that mirrors a remote branch (e.g. `origin/main`), updated by fetch and pull | [4](04-remote-repositories.md) |
| Repository | The `.git/` directory containing all objects, references, and configuration for a project | [2](02-building-blocks.md) |
| Reset | Move HEAD and optionally the branch tip to a different commit — `--soft`, `--mixed`, or `--hard` | [2](02-building-blocks.md) |
| Revert | Create a new commit that undoes a previous commit's changes without rewriting history | [7](07-playbook.md) |
| Squash merge | Combine all commits from a branch into a single change set on the target branch — no merge commit | [3](03-branching-and-merging.md) |
| Stash | Save uncommitted changes temporarily so you can switch branches with a clean working tree | [3](03-branching-and-merging.md) |
| Submodule | A reference to a specific commit in another repository — stores URL and hash, not files | [5](05-nested-repositories.md) |
| Subtree | A full copy of another repository merged into a subdirectory of the parent project | [5](05-nested-repositories.md) |
| Tag | A named reference to a commit — annotated (object with metadata) or lightweight (plain reference) | [2](02-building-blocks.md) |
| Tree | Object that represents a directory — lists blobs and other trees with names and permissions | [2](02-building-blocks.md) |
| Upstream | Conventional name for the original repository you forked from | [4](04-remote-repositories.md) |
| Working tree | The checked-out files on disk that you edit directly — everything outside `.git/` | [2](02-building-blocks.md) |
