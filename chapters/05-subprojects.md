---
title: "Subprojects"
section: "subprojects"
order: 5
---

## Overview

Projects often depend on code from other repositories — shared
libraries, frameworks, or configuration templates. Copying the code
manually means maintaining every copy independently. Git offers two
built-in solutions to include external repositories: **submodules**
and **subtrees**.

## Submodules

A submodule is a reference to a specific commit in another repository.
Git stores only the URL and the commit hash — it does not copy the
files into the parent repository until you explicitly initialize and
update the submodule.

![Submodules](../assets/images/git-submodules.png)

### Adding a submodule

```shell
$ git submodule add https://github.com/user/lib.git libs/lib
$ git commit -m "Add lib as submodule"
```

This creates two entries:
- `.gitmodules` — records the URL and path
- A special directory entry in the index pointing to the pinned commit

### Cloning a repository with submodules

```shell
$ git clone --recurse-submodules https://github.com/user/project.git
```

If you already cloned without `--recurse-submodules`:

```shell
$ git submodule update --init --recursive
```

### Updating a submodule

```shell
$ cd libs/lib
$ git fetch origin
$ git switch main
$ git pull
$ cd ../..
$ git add libs/lib
$ git commit -m "Update lib submodule"
```

Or update all submodules at once:

```shell
$ git submodule update --remote
```

### Advantages

- Native to Git — no extra tools required
- Small footprint — only stores a commit reference
- Each submodule has its own independent history
- Pin to a specific version without affecting the parent project

### Drawbacks

- Requires extra commands (`submodule init`, `submodule update`)
- Nested submodules are skipped by default (need `--recursive`)
- Contributors must remember to initialize after cloning
- Merging changes back from the parent into the submodule is awkward

## Subtrees

A subtree is a full copy of another repository — files and history —
merged directly into a subdirectory of the parent project. Unlike
submodules, the files are part of the parent repository and can be
managed with standard Git commands.

![Subtrees](../assets/images/git-subtrees.png)

### Adding a subtree

```shell
$ git subtree add --prefix=libs/lib https://github.com/user/lib.git main --squash
```

The `--squash` flag collapses the subtree's history into a single
commit, keeping the parent history clean.

### Pulling updates

```shell
$ git subtree pull --prefix=libs/lib https://github.com/user/lib.git main --squash
```

### Pushing changes back

If you modify subtree files in the parent and want to push them back
to the original repository:

```shell
$ git subtree push --prefix=libs/lib https://github.com/user/lib.git main
```

### Advantages

- No extra commands for contributors — files are already in the repo
- Works with standard `git clone`, `git pull`, `git push`
- No `.gitmodules` or special metadata files
- Supports older Git versions (pre-1.5.2)

### Drawbacks

- Increases repository size — full copy of files and history
- Must be careful not to mix parent and subtree changes in commits
- Requires understanding of Git's merge strategies
- Updating to a new version overwrites local subtree changes

## Which to use?

| Aspect | Submodules | Subtrees |
|--------|-----------|----------|
| Storage | Commit reference only | Full file copy |
| Contributor setup | Must run `submodule init` | Nothing extra |
| Update method | Manual (`submodule update`) | Standard (`subtree pull`) |
| Pin to version | Yes — by commit hash | No — always latest at pull time |
| Repo size impact | Minimal | Larger |
| Best for | Libraries pinned to a version | Frequently modified dependencies |

Use **submodules** for component-based development where you depend on
a specific version of an external repository and rarely modify the
dependency. Use **subtrees** for system-based development where you
want a full copy of the code and expect to modify it alongside your
project.

## Other tools

- [google repo](https://gerrit.googlesource.com/git-repo/) — manages
  many Git repositories as a single project
- [git subrepo](https://github.com/ingydotnet/git-subrepo#readme) —
  alternative to subtrees with cleaner UX
- [git slave](https://sourceforge.net/p/gitslave/code/ci/master/tree) —
  runs Git commands across multiple repositories

## Exercises

All exercises use the `concepts-lab` repository from previous chapters.

### Exercise 1: Add and use a submodule

**Task:** Add an external repository as a submodule, update it, and
verify the pinned commit.

**Steps:**

1. In `concepts-lab`, add a public repository as a submodule:
   `git submodule add https://github.com/braboj/tutorial-testing.git libs/testing`
2. Run `git status` — note the new `.gitmodules` file and the `libs/testing` entry
3. Commit with the message `Add testing as submodule`
4. Run `cat .gitmodules` to see the URL and path
5. Run `git submodule status` to see the pinned commit hash
6. Enter `libs/testing` and run `git log --oneline -3` to see its history
7. Back in the parent, run `git diff --cached --submodule` to confirm the reference

**Verify:**

`.gitmodules` lists the submodule. `git submodule status` shows the
pinned commit hash. The submodule directory contains the external
repository's files.

### Exercise 2: Clone a repository with submodules

**Task:** Simulate a fresh clone and verify submodules need explicit
initialization.

**Steps:**

1. Clone `concepts-lab` into a new directory without `--recurse-submodules`:
   `git clone <url> concepts-lab-fresh`
2. Enter `concepts-lab-fresh/libs/testing` — it should be empty
3. Run `git submodule update --init`
4. Check `libs/testing` again — files should now be present
5. Run `git submodule status` to confirm the correct commit is checked out

**Verify:**

Before `submodule update --init`, the directory is empty. After, it
contains the submodule's files at the pinned commit.

### Exercise 3: Add a subtree

**Task:** Add an external repository as a subtree and verify the files
are part of the parent repository.

**Steps:**

1. In `concepts-lab`, add a subtree:
   `git subtree add --prefix=libs/docs https://github.com/braboj/tutorial-testing.git main --squash`
2. Run `git log --oneline -3` — note the squash merge commit
3. List `libs/docs/` to confirm the files are present
4. Run `git status` — the working tree should be clean (files are committed)
5. Edit a file in `libs/docs/`, commit the change
6. Run `git log --oneline -5` to see both the subtree add and your edit

**Verify:**

The subtree files are committed directly in the parent repository.
`git log` shows the squash merge and your edit as normal commits.
No `.gitmodules` file was created.

## Quiz

**Q1.** What does a submodule store in the parent repository?

- A) A full copy of all files and history
- B) A URL and a pinned commit hash
- C) A compressed archive of the source code
- D) A symbolic link to another directory

**Q2.** What happens when you clone a repository with submodules
without using `--recurse-submodules`?

- A) Git refuses to clone
- B) The submodule directories exist but are empty
- C) Git automatically downloads all submodules
- D) The submodule entries are deleted

**Q3.** What is the main advantage of subtrees over submodules?

- A) Subtrees use less disk space
- B) Subtrees pin to a specific commit
- C) Contributors need no extra commands — files are already in the repo
- D) Subtrees support nested dependencies

**Q4.** When should you prefer submodules over subtrees?

- A) When you frequently modify the dependency
- B) When you want the dependency files in your repository
- C) When you need to pin to a specific version and rarely change the dependency
- D) When you want to avoid `.gitmodules`

### Answers

1. B — A URL and a pinned commit hash
2. B — The submodule directories exist but are empty
3. C — Contributors need no extra commands — files are already in the repo
4. C — When you need to pin to a specific version and rarely change the dependency
