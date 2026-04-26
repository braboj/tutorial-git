---
title: "Undoing Changes"
description: "Git recipes for discarding edits, unstaging files, resetting commits, reverting safely, and recovering lost work with reflog."
section: "playbook/undoing-changes"
order: 71
---

## Undoing Changes

### Discard unstaged changes to a file

```text
$ git restore <file>
```

Reverts the file in your working tree to match the last commit.
Uncommitted edits are lost.

### Unstage a file without losing changes

```text
$ git restore --staged <file>
```

Removes the file from the index but keeps your edits in the working
tree.

### Undo the last commit but keep changes staged

```text
$ git reset --soft HEAD~1
```

The commit is removed but your changes stay in the index, ready to
recommit.

### Undo the last commit and unstage changes

```text
$ git reset HEAD~1
```

The default (`--mixed`). Changes go back to the working tree as
unstaged edits.

### Undo the last commit and discard all changes

```text
$ git reset --hard HEAD~1
```

The commit and all changes are gone. Recover with `git reflog` if
needed.

### Revert a commit without rewriting history

```text
$ git revert <hash>
```

Creates a new commit that undoes the changes. Safe to use on shared
branches.

### Recover a lost commit

```text
$ git reflog                       # find the hash
$ git branch recovered <hash>      # or: git reset --hard <hash>
```

Works as long as the reflog entry has not expired (default: 30 days).
