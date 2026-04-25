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

```text
$ git rebase -i HEAD~3
# change "pick" to "squash" for commits to combine
```

### Abort a conflicted rebase

```text
$ git rebase --abort
```

### Continue after resolving a rebase conflict

```text
$ git add <file>
$ git rebase --continue
```
