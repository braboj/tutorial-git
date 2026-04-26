---
title: "Remove a Submodule"
description: "Step-by-step guide to fully removing a Git submodule — deinit, git rm, and cleaning up cached module data."
section: "playbook/remove-submodule"
order: 92
---

## Remove a Submodule

Removing a submodule is not a single command — it requires three
cleanup steps to fully clear the submodule from your repository.

### Steps

```text
$ git submodule deinit <path>       # 1. unregister from .git/config
$ git rm <path>                     # 2. remove from working tree and index
$ rm -rf .git/modules/<path>        # 3. delete cached clone
$ git commit -m "Remove submodule"
```

### What each step does

1. **`deinit`** — removes the submodule entry from `.git/config` and
   clears the working directory at `<path>`. The submodule's URL
   remains in `.gitmodules` until the next step removes it.
2. **`git rm`** — removes the submodule entry from `.gitmodules` and
   from the index (staging area). Also deletes the working directory
   if `deinit` did not already.
3. **`rm -rf .git/modules/<path>`** — deletes the cached bare clone
   that Git keeps under `.git/modules/`. Without this step, re-adding
   a submodule at the same path can use stale data.

### Common gotchas

- **Forgetting step 3** — the cached clone stays behind. If you later
  add a submodule at the same path, Git may reuse the old checkout
  and you get confusing state.
- **Uncommitted changes in the submodule** — `deinit` will refuse to
  run. Use `--force` if you are certain the changes are not needed.
- **Nested submodules** — if the submodule itself contains submodules,
  you need to deinit recursively or clean up `.git/modules/` manually.
