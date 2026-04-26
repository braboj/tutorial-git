---
title: "Submodules"
description: "Git recipes for adding, cloning, updating, and removing submodules in a repository."
section: "playbook/submodules"
order: 79
---

## Submodules

### Add a submodule

```text
$ git submodule add <url> <path>
$ git commit -m "Add submodule"
```

### Clone a repo with submodules

```text
$ git clone --recurse-submodules <url>
```

Or after a regular clone:

```text
$ git submodule update --init --recursive
```

### Update a submodule to latest

```text
$ git submodule update --remote
$ git add <path>
$ git commit -m "Update submodule"
```

### Remove a submodule

```text
$ git submodule deinit <path>
$ git rm <path>
$ rm -rf .git/modules/<path>
$ git commit -m "Remove submodule"
```
