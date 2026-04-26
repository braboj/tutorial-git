---
title: "Submodules"
description: "Git recipes for adding, cloning, updating, and removing submodules in a repository."
section: "playbook/submodules"
order: 79
---

## Submodules

### Add a submodule

A submodule embeds an external repository at a fixed commit inside
your project. Use submodules when you need to track an upstream
library or shared component while keeping its history separate.

```text
$ git submodule add <url> <path>
$ git commit -m "Add submodule"
```

This creates a `.gitmodules` file (or appends to it) and records the
pinned commit in the index.

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

See [Remove a Submodule](remove-submodule.md) for a full
walkthrough — the three cleanup steps, what each does, and common
gotchas.
