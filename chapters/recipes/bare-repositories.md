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

Git refuses because a push updates the branch reference but not the
working tree — this would leave the two out of sync and could cause
the recipient to unknowingly revert the pushed changes on their next
commit. For a full walkthrough of the problem, see
[Building Blocks — Why bare repositories exist](../02-building-blocks.md#why-bare-repositories-exist).

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
