---
title: "Merging"
description: "Git recipes for merging branches — fast-forward, no-ff, squash merges, aborting, and resolving merge conflicts."
section: "playbook/merging"
order: 73
---

## Merging

### Merge a feature branch into main

```text
$ git switch main
$ git merge feature/name
```

### Force a merge commit (no fast-forward)

```text
$ git merge --no-ff feature/name
```

### Squash a branch into a single commit

```text
$ git merge --squash feature/name
$ git commit -m "Add feature"
```

### Abort a conflicted merge

```text
$ git merge --abort
```

Returns everything to the pre-merge state.

### Resolve a merge conflict

```text
$ git status                        # identify conflicting files
# ... edit each file, remove markers ...
$ git add <file>                    # stage resolved file
$ git commit                        # complete the merge
```
