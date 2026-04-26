---
title: "Diffing"
description: "Git recipes for comparing unstaged changes, staged changes, branches, commits, and specific files."
section: "playbook/diffing"
order: 85
---

## Diffing

### Show unstaged changes

```text
$ git diff
```

Compares working tree against the index (staged snapshot).

### Show staged changes

```text
$ git diff --staged
```

Compares the index against the last commit — shows what will go into
the next commit.

### Compare two branches

```text
$ git diff main feature/name
```

Shows all differences between the tips of both branches.

### Compare two commits

```text
$ git diff abc1234 def5678
```

### Show changes introduced by a single commit

```text
$ git diff HEAD~1 HEAD
```

Or use `git show` for the same result with commit metadata:

```text
$ git show HEAD
```

### Diff a specific file

```text
$ git diff -- path/to/file
$ git diff --staged -- path/to/file
```

### Diff with statistics only

```text
$ git diff --stat main feature/name
```

Shows a summary of changed files and line counts without the full
patch.
