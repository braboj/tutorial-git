---
title: "Rebasing"
description: "Git recipes for rebasing branches, squashing commits with interactive rebase, and handling rebase conflicts."
section: "playbook/rebasing"
order: 74
---

## Rebasing

### Rebase a feature branch onto main

```text
$ git switch feature/name
$ git rebase main
```

### Squash commits with interactive rebase

Squashing combines multiple commits into one, keeping history clean
before merging a feature branch.

```text
$ git rebase -i HEAD~3
# editor opens — change "pick" to "squash" (or "s") for commits to fold
# save and close — a second editor opens to combine the messages
```

If conflicts arise during the squash, resolve them and run
`git rebase --continue`.

### Abort a conflicted rebase

Restores the branch to its exact state before the rebase started.
Use this when conflicts are too tangled to resolve cleanly.

```text
$ git rebase --abort
```

Any conflict resolutions you made during the rebase are discarded.

### Continue after resolving a rebase conflict

```text
$ git add <file>
$ git rebase --continue
```
