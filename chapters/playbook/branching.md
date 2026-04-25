---
title: "Branching"
description: "Git recipes for creating, deleting, renaming, and inspecting branches."
section: "playbook/branching"
order: 72
---

## Branching

### Create a branch and switch to it

```text
$ git switch -c feature/name
```

### Delete a branch (local and remote)

```text
$ git branch -d feature/name                # local (safe — only if merged)
$ git branch -D feature/name                # local (force — even if unmerged)
$ git push origin --delete feature/name     # remote
```

### Rename the current branch

```text
$ git branch -m new-name
```

### See which branches are merged into main

```text
$ git branch --merged main
```

Safe to delete any branch listed here (except `main` itself).
