---
title: "Subtrees"
description: "Git recipes for adding, pulling, pushing, and removing subtrees — embedding external repositories without submodules."
section: "playbook/subtrees"
order: 82
---

## Subtrees

### Add a subtree

```text
$ git subtree add --prefix=libs/utils <url> main --squash
$ git commit -m "Add utils subtree"
```

The `--squash` flag merges all upstream history into a single commit.

### Pull updates from the upstream repository

```text
$ git subtree pull --prefix=libs/utils <url> main --squash
```

Fetches upstream changes and merges them into the subtree directory.

### Push changes back to the upstream repository

```text
$ git subtree push --prefix=libs/utils <url> main
```

Extracts commits that touch the subtree directory and pushes them
upstream.

### Remove a subtree

```text
$ git rm -r libs/utils
$ git commit -m "Remove utils subtree"
```

Unlike submodules, there is no metadata to clean up — just remove
the directory.
