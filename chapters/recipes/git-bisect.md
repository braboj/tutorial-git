---
title: "Git Bisect"
description: "How to use git bisect to find the exact commit that introduced a bug, with manual and automated workflows."
section: "playbook/git-bisect"
order: 88
---

## Git Bisect

Bisect performs a binary search through your commit history to find
which commit introduced a bug. Instead of checking each commit
one-by-one, it halves the search space at every step.

### Manual bisect

```text
$ git bisect start
$ git bisect bad                    # current commit has the bug
$ git bisect good <hash>            # this older commit was fine
```

Git checks out a midpoint commit. Test it, then mark it:

```text
$ git bisect good                   # midpoint is clean
$ git bisect bad                    # midpoint has the bug
```

Repeat until Git identifies the first bad commit, then clean up:

```text
$ git bisect reset                  # return to original branch
```

### Automated bisect with a test script

If you have a script that exits 0 for good and non-zero for bad,
bisect can run unattended:

```text
$ git bisect start HEAD <good-hash>
$ git bisect run ./test.sh
```

Git runs the script at each midpoint and reports the first bad
commit when done.

### Tips

- The good and bad commits do not have to be on the same branch —
  bisect works across the entire reachable history.
- If a midpoint commit cannot be tested (e.g. broken build), use
  `git bisect skip` to move past it.
- Use `git bisect log` to replay or share a bisect session.

For blame, log search, and other debugging tools, see the
[Debugging](../debugging/) recipe.
