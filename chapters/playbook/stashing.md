---
title: "Stashing"
description: "Git recipes for saving work in progress, stashing untracked files, restoring stashes, and managing stash entries."
section: "playbook/stashing"
order: 77
---

## Stashing

### Save work in progress

```text
$ git stash push -m "description"
```

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

```text
$ git stash list                    # show all entries
$ git stash drop stash@{0}          # delete a specific entry
$ git stash clear                   # delete all entries
```
