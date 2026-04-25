---
title: "Selectors"
description: "Git recipes for navigating history with tilde, caret, double-dot, triple-dot, and reflog selectors."
section: "playbook/selectors"
order: 87
---

## Selectors

### Navigate to a parent commit (tilde)

```text
$ git show HEAD~1                   # parent
$ git show HEAD~3                   # great-grandparent
```

Tilde follows the first-parent chain. `HEAD~3` means "go back 3
commits along the first parent."

### Select a specific parent (caret)

```text
$ git show HEAD^1                   # first parent
$ git show HEAD^2                   # second parent (merge commits)
```

Caret selects which parent of a merge commit to follow. Only
meaningful on merge commits — `^1` and `^2` differ.

### Combine tilde and caret

```text
$ git show HEAD~1^2                 # second parent of the previous commit
```

### Commits on one branch but not another (double-dot)

```text
$ git log main..feature --oneline
```

Shows commits reachable from `feature` that are not reachable from
`main` — what would be merged.

### Symmetric difference (triple-dot)

```text
$ git log --left-right main...feature --oneline
```

Shows commits on either branch but not both. The `--left-right`
flag marks each commit with `<` (left) or `>` (right).

### Reflog selectors

```text
$ git show HEAD@{1}                 # previous position of HEAD
$ git show main@{yesterday}         # where main was yesterday
$ git show HEAD@{2.hours.ago}       # HEAD two hours ago
```

Reflog entries expire after 90 days (reachable) or 30 days
(unreachable) by default.
