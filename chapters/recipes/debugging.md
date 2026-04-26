---
title: "Debugging"
description: "Git recipes for finding bugs with bisect, blaming lines, and searching commit messages and file contents across history."
section: "playbook/debugging"
order: 80
---

## Debugging

### Find which commit introduced a bug

```text
$ git bisect start
$ git bisect bad                    # current commit has the bug
$ git bisect good <hash>            # this older commit was fine
# ... test each midpoint, mark good/bad ...
$ git bisect reset                  # done — return to original branch
```

### Automated bisect with a test script

```text
$ git bisect start HEAD <good-hash>
$ git bisect run ./test.sh
```

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
