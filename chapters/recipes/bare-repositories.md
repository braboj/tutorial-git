---
title: "Bare Repositories"
description: "Git recipes for creating, cloning, and working with bare repositories — the standard layout for central and shared repositories."
section: "playbook/bare-repositories"
order: 93
---

## Bare Repositories

A bare repository has no working tree — only the Git internals (objects,
refs, config). It is the standard layout for central repositories that
multiple developers push to. Hosting services like GitHub and GitLab
store every repository as bare on the server.

For the theory behind bare vs non-bare repositories, see
[Building Blocks](../02-building-blocks.md#2-repository).

### Create a bare repository

```text
$ git init --bare project.git
Initialized empty Git repository in /home/user/project.git/
```

The `.git` suffix is a convention, not a requirement — it signals that
the directory is a bare repository.

### Compare the layouts

```text
# Bare — no working tree, internals at the top level
project.git/
├── HEAD
├── config
├── hooks/
├── objects/
└── refs/

# Non-bare — working tree + .git folder
project/
├── .git/
│   ├── HEAD
│   ├── config
│   ├── hooks/
│   ├── objects/
│   └── refs/
└── README.md
```

In a bare repository, what normally lives inside `.git/` sits at the
top level. There is no place to check out files.

### Use a bare repository as a local remote

This is the most common use case — simulate a central server on your
own machine for practice or local collaboration.

```text
# 1. Create the bare (central) repository
$ git init --bare /tmp/central.git

# 2. Clone it into a working copy
$ git clone /tmp/central.git /tmp/dev-alice
$ cd /tmp/dev-alice

# 3. Make a commit and push
$ echo "Hello" > greeting.txt
$ git add greeting.txt
$ git commit -m "Add greeting"
$ git push origin main

# 4. Clone again to simulate a second developer
$ git clone /tmp/central.git /tmp/dev-bob
$ cd /tmp/dev-bob
$ cat greeting.txt
Hello
```

Both clones push to and pull from the same bare repository, exactly
like working with GitHub.

### Convert a non-bare repository to bare

```text
$ git clone --bare project project.git
```

This copies only the Git data — no working tree files. The result is
a bare repository you can use as a central remote.

You can also convert in place:

```text
$ cd project
$ mv .git ../project.git
$ cd ..
$ rm -rf project
$ cd project.git
$ git config --bool core.bare true
```

### Clone a bare repository

```text
$ git clone --bare https://github.com/user/project.git
```

Useful for creating mirrors or backup copies that do not need a
working tree.

### Push to a non-bare repository (and why it fails)

Pushing to a non-bare repository is rejected by default:

```text
$ git push /tmp/dev-alice main
remote: error: refusing to update checked out branch: refs/heads/main
```

To understand why, remember that a push only updates the branch
reference inside `.git/` — it does **not** touch the working tree.
These are two separate operations, and only the first one happens.

Imagine Alice and Bob working on the same local network. Bob has
Alice's repository configured as a remote (pointing directly at her
machine, not at a server like GitHub). This means Bob can push
commits straight into Alice's `.git/` directory — no fetch required
on Alice's side.

1. Alice checks out `main`. Her working tree has the files from
   commit `A`.
2. Alice edits `report.txt` but has not committed yet.
3. Bob runs `git push alice-machine main`, which writes his new
   commit `B` directly into Alice's `.git/` and updates her
   reference `.git/refs/heads/main` to point to `B` — but Alice's
   working tree is not updated. Her files on disk are still from
   commit `A`, plus her uncommitted edits.
4. Alice's repository is now in a broken state:
   - `HEAD` → `main` → commit `B` (moved by the push)
   - Working tree → files from commit `A` + uncommitted edits (untouched)
5. If Alice runs `git status`, Git compares her working tree against
   commit `B`. Every file Bob changed shows up as a difference —
   mixed in with Alice's real edits. She cannot tell which changes
   are hers and which are artifacts of the branch moving under her.

Git prevents step 3 entirely. A bare repository avoids this problem
because there is no working tree — updating the branch reference is
always safe when there are no files to desynchronize.

If you need to accept pushes on a non-bare repository (rare), you
can enable it:

```text
$ git config receive.denyCurrentBranch updateInstead
```

This tells Git to update both the branch and the working tree on push.
Use this only for special setups like deployment targets — not for
regular development.

### Gotchas

- **You cannot run `git add` or `git commit` in a bare repository** —
  there is no working tree to stage files from. All changes must arrive
  via `git push` from another repository.
- **The `.git` suffix is convention only.** Git does not require it,
  but omitting it makes the directory harder to identify.
- **Bare does not mean read-only.** A bare repository accepts pushes,
  runs hooks, and stores the same history as a non-bare one.
- **`git clone` of a bare repository produces a non-bare clone by
  default.** Use `git clone --bare` if you want another bare copy.
