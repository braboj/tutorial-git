---
title: "Remote Operations"
description: "Git recipes for pushing, pulling, force pushing safely, syncing forks, and inspecting remote changes before merging."
section: "playbook/remote-operations"
order: 75
---

## Remote Operations

### Push a new branch and set up tracking

```text
$ git push -u origin feature/name
```

### Pull with rebase (avoid merge commits)

```text
$ git pull --rebase origin main
```

### Fix a rejected push

```text
$ git pull origin main              # fetch + merge
$ git push origin main              # retry
```

### Force push safely (after rebase)

```text
$ git push --force-with-lease origin feature/name
```

Never use `--force` on shared branches.

### Sync a fork with upstream

```text
$ git fetch upstream
$ git switch main
$ git merge upstream/main
$ git push origin main
```

### Fetch and inspect before merging

```text
$ git fetch origin
$ git log main..origin/main --oneline    # what's new on remote
$ git diff main origin/main              # line-by-line changes
$ git merge origin/main                  # integrate when ready
```
