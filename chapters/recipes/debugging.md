---
title: "Debugging"
description: "Git recipes for finding bugs with bisect, blaming lines, and searching commit messages and file contents across history."
section: "playbook/debugging"
order: 80
---

## Debugging

### Find which commit introduced a bug

Use [Git Bisect](../git-bisect/) for a full walkthrough of manual and
automated binary search through commit history.

### See who last changed each line

```text
$ git blame <file>
```

### Search commit messages

```text
$ git log --grep="fix" --oneline
```

### Search file contents across history

```text
$ git log -S "functionName" --oneline
```
