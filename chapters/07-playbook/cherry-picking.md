---
title: "Cherry-Picking"
description: "Git recipes for applying individual commits from another branch — with or without committing."
section: "playbook/cherry-picking"
order: 76
---

## Cherry-Picking

### Apply a single commit from another branch

```text
$ git cherry-pick <hash>
```

### Cherry-pick without committing (stage only)

```text
$ git cherry-pick --no-commit <hash>
```

Useful when you want to modify the change before committing.
