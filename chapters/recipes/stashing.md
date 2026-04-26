---
title: "Stashing"
description: "Git recipes for saving work in progress, stashing untracked files, restoring stashes, and managing stash entries."
section: "playbook/stashing"
order: 77
---

## Stashing

### Save work in progress

Stashing saves your modified and staged files without creating a
commit — useful when you need to switch branches mid-task.

```text
$ git stash push -m "description"
```

Without `-m`, Git generates a message from the current HEAD commit,
which makes it harder to find the right stash later.

### Save including untracked files

```text
$ git stash push -u -m "description"
```

### Restore the latest stash

```text
$ git stash pop                     # restore and remove from stash
$ git stash apply                   # restore but keep in stash
```

### List and drop stash entries

Entries are numbered starting at 0 (most recent). Use the
`stash@{N}` syntax to target a specific entry.

```text
$ git stash list                    # show all entries
$ git stash drop stash@{0}          # delete a specific entry
$ git stash clear                   # delete all entries
```

`stash@{0}` is always the latest stash. After dropping an entry,
the remaining entries are renumbered.
