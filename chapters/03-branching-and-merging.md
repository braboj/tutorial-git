---
title: "Branching and Merging"
section: "branching-and-merging"
order: 3
---

## Overview

This chapter covers the daily workflow of parallel development in Git —
creating branches, combining work through merging, resolving conflicts,
and temporarily shelving changes with the stash. These are the operations
you will use most often when working with others or managing multiple
features at once.

## Branching

As covered in [Building Blocks](02-building-blocks.md), a branch is a
pointer to a specific commit. Creating a branch is a "cheap" operation —
Git does not copy any files, it only creates a new reference. This
section focuses on how branches are used in practice.

### Branch workflow

Here is an example workflow showing how branches are created, used, and
merged.

> **Note:** The diagrams below use "Master" — the old default branch
> name. Modern Git uses `main`. The concepts are identical.

**1. Initial state** — a linear history with three commits:

![Initial repo](../assets/images/git-branch-before.png)

**2. Create a branch** — a new `bugfix` branch is created at the same
commit. Both branches point to commit #3:

![New branch](../assets/images/git-branch-new.png)

```shell
$ git branch bugfix
$ git switch bugfix
```

**3. Commit on the new branch** — commit #4 is added on `bugfix`.
`main` stays at commit #3:

![Change bugfix](../assets/images/git-branch-change-bugfix.png)

**4. Commit on main** — switching back to `main` and committing creates
a divergence. Both branches now have commits the other doesn't:

![Change main](../assets/images/git-branch-change-main.png)

```shell
$ git switch main
# ... make changes ...
$ git commit -m "Update on main"
```

**5. Merge** — merging `bugfix` into `main` creates a merge commit (#6)
that combines both lines of work:

![Merge branches](../assets/images/git-branch-merge.png)

```shell
$ git merge bugfix
```

After merging, the `bugfix` branch can be safely deleted — its changes
are now part of `main`.

### Deleting branches

To **delete a branch** means that Git **removes only the named
reference** to the latest commit in this branch. Git offers two commands
to remove an existing branch:

```shell
git branch -d <branchName>
```
will delete the branch only after the changes in the branch are merged. And
the next command...

```shell
git branch -D <branchName>
```
will delete the branch even if there are unmerged commits. In this case the
commits will be orphaned and will be deleted by Git during the next
cleanup of the repository. The branch can thus be restored within a short
period of time, depending on the number of orphaned objects.

### Renaming branches

The current branch can be renamed using:
```shell
git branch -m <newName>
```

To rename a different branch:
```shell
git branch -m <oldName> <newName>
```

## Merging

Merging is a process of combining changes from different branches. Usually
this is required when people are working in parallel on the same source code.
The file versions in each branch are compared and analyzed line by line.

```shell
$ git switch main              # switch to the branch you want to merge into
$ git merge feature            # merge "feature" into "main"
```

![Merge concept](../assets/images/git-merge-concept.png)

Git chooses the merge strategy automatically based on the branch history:

### Fast-forward
When the target branch has no new commits since the source branch was
created, Git simply moves the target branch tip forward to the latest
commit on the source branch. No merge commit is created.

![Merge fast-forward](../assets/images/git-merge-fast-forward.png)

### 3-Way merge

When both branches have diverged with new commits, Git will analyze the
files to determine how to combine the differences. The 3-way merge algorithm
uses a common ancestor and the two branch tips to perform the analysis.

It looks for sections which are the same in two of the three revisions. This
indicates that the third revision is unique and the section will be added to
the merge result. Sections that are different in all three revisions are
marked as a conflict situation and left for the user to resolve.

![3-way merge concept](../assets/images/git-merge-3-way-concept.png)

## Rebasing

Rebasing is an **alternative to merging**. Instead of creating a merge
commit, it replays your branch's commits on top of another branch,
producing a linear history.

```shell
$ git switch feature           # switch to the branch you want to rebase
$ git rebase main              # replay feature commits on top of main
```

```
before:   A ← B ← C  (main)
                    ↖
                     D ← E  (feature, HEAD)

after:    A ← B ← C  (main) ← D' ← E'  (feature, HEAD)
```

D' and E' are **new commits** — they have the same changes as D and E
but different hashes because their parent changed. The original D and E
become orphaned.

> **Warning:** Rebasing **must** be used only on local (unpushed)
> history. Rebasing shared commits rewrites their hashes and causes
> conflicts for anyone who already has the originals.

| | Merge | Rebase |
|---|---|---|
| History | Preserves the branch structure (non-linear) | Produces a straight line (linear) |
| Creates | A merge commit with two parents | New copies of each commit |
| Safe on shared branches? | Yes | No — rewrites commit hashes |
| When to use | Combining finished work | Cleaning up local history before merging |

## Conflicts

A merge conflict occurs when Git cannot automatically combine changes from
two branches. This happens when both branches modify the same lines in the
same file, or when one branch deletes a file that the other branch modifies.
Git stops the merge and asks the user to resolve the conflict manually.

Conflicts are a normal part of collaborative development. They do not
indicate an error — they simply mean that Git needs human judgement to
decide which changes to keep.

### When conflicts occur

Conflicts can arise during any operation that combines work from different
sources:

 - **Merging** — `git merge` combines two branches and finds overlapping
   changes in the same file region
 - **Rebasing** — `git rebase` replays commits on top of another branch,
   and a replayed commit touches the same lines as an existing commit
 - **Cherry-picking** — `git cherry-pick` applies a single commit from
   another branch that conflicts with the current state
 - **Pulling** — `git pull` fetches and merges remote changes that overlap
   with local changes
 - **Stash application** — `git stash pop` or `git stash apply` restores
   stashed changes that conflict with the current working tree

### How Git marks conflicts

When Git detects a conflict it inserts conflict markers directly into the
affected file. The markers divide the conflicting sections into two parts:

```text
<<<<<<< HEAD
This is the content from the current branch (ours).
=======
This is the content from the incoming branch (theirs).
>>>>>>> feature-branch
```

| Marker | Meaning |
|--------|---------|
| `<<<<<<< HEAD` | Start of the current branch content |
| `=======` | Separator between the two versions |
| `>>>>>>> feature-branch` | End of the incoming branch content |

The text between `<<<<<<< HEAD` and `=======` is what exists on the
current branch. The text between `=======` and `>>>>>>>` is what the
incoming branch wants to introduce. The label after `>>>>>>>` shows the
name of the branch or commit being merged in.

A single file can contain multiple conflict blocks if several regions
of the file were changed by both branches.

### Step-by-step resolution workflow

Resolving a conflict follows a predictable sequence:

**1. Identify the conflicting files**

After a failed merge, `git status` lists every file that needs attention:

```shell
$ git status
On branch main
You have unmerged paths.

Unmerged paths:
  (use "git add <file>..." to mark resolution)
        both modified:   src/config.yaml
        both modified:   src/main.py
```

Files marked as `both modified` contain conflict markers.

**2. Open and understand the conflict markers**

Open each conflicting file in an editor. Read both versions carefully.
Understand what each branch intended before deciding how to resolve the
conflict. Look at the surrounding context — the unchanged lines above and
below the markers often clarify the intent of each change.

**3. Edit to resolve**

There are three common resolution strategies:

 - **Keep one side** — delete the markers and the content from the side
   you do not want
 - **Combine both** — merge the two versions into a single coherent result
   and remove all markers
 - **Rewrite** — discard both versions and write something entirely new
   that satisfies the intent of both changes

After editing the file must not contain any conflict markers. Any remaining
`<<<<<<<`, `=======`, or `>>>>>>>` lines will cause problems.

**4. Stage resolved files**

Once a file is resolved, stage it to tell Git the conflict is handled:

```shell
git add src/config.yaml
git add src/main.py
```

**5. Complete the merge**

After all conflicts are staged, finalize the merge with a commit:

```shell
git commit
```

Git pre-fills the commit message with merge information. You can accept
the default or edit it to describe how the conflicts were resolved.

### Aborting a conflicted merge

If the conflicts are too complex or the merge was started by mistake,
you can abandon it entirely:

```shell
git merge --abort
```

This restores the repository to the state it was in before the merge
began. All conflict markers and staged resolutions are discarded. The
working tree and index return to the pre-merge state.

This command is safe — it does not delete any commits or branches.

### Conflicts during rebase

Rebasing replays commits one at a time, so conflicts can occur at each
step. The workflow differs slightly from a merge conflict:

```shell
$ git rebase main
CONFLICT (content): Merge conflict in src/main.py
error: could not apply abc1234... Add feature X
```

**1.** Resolve the conflict in the file as described above.

**2.** Stage the resolved file:

```shell
git add src/main.py
```

**3.** Continue the rebase to process the next commit:

```shell
git rebase --continue
```

If more commits produce conflicts, Git stops again and the process
repeats. To abandon the entire rebase and return to the original state:

```shell
git rebase --abort
```

To skip the current conflicting commit entirely (dropping its changes):

```shell
git rebase --skip
```

### Using merge tools

Git can launch a graphical or terminal-based merge tool to help resolve
conflicts visually:

```shell
git mergetool
```

This opens each conflicting file in the configured tool. Popular merge
tools include **vimdiff**, **meld**, **kdiff3**, **Beyond Compare**, and
**VS Code**. To set a default tool:

```shell
git config --global merge.tool meld
```

Most merge tools display three panes — the base version (common ancestor),
the current branch version, and the incoming branch version — alongside a
result pane where you build the final output.

After the tool saves the resolved file, Git marks it as resolved. Some
tools create `.orig` backup files. To disable these:

```shell
git config --global mergetool.keepBackup false
```

### Preventing conflicts

Conflicts cannot be eliminated entirely, but their frequency and severity
can be reduced:

 - **Communicate** — coordinate with team members about who is working on
   which files to avoid overlapping changes
 - **Keep branches short-lived** — the longer a branch diverges from the
   main line, the higher the chance of conflicts
 - **Pull frequently** — regularly integrate upstream changes into your
   branch with `git pull` or `git rebase` to stay close to the latest state
 - **Make small, focused commits** — smaller changes are easier to merge
   and produce simpler conflicts when they do occur
 - **Avoid reformatting entire files** — whitespace-only or style-only
   changes across a whole file create conflicts with every other branch
   that touches that file
 - **Use `.gitattributes`** — define merge strategies for specific file
   types (e.g., always accept ours for generated lock files)

### Practical example

Two developers work on the same file. Alice changes a greeting on the
`main` branch, and Bob changes it on a `feature` branch.

**Initial file (`greeting.txt`) on both branches:**
```text
Hello, welcome to the project.
```

**Alice's change on `main`:**
```text
Hello, welcome to the project! We are glad you are here.
```

**Bob's change on `feature`:**
```text
Hi there, welcome to the project.
```

When Bob merges `main` into his branch, Git produces a conflict:

```shell
$ git merge main
Auto-merging greeting.txt
CONFLICT (content): Merge conflict in greeting.txt
Automatic merge failed; fix conflicts and then commit the result.
```

The file now contains:

```text
<<<<<<< HEAD
Hi there, welcome to the project.
=======
Hello, welcome to the project! We are glad you are here.
>>>>>>> main
```

Bob decides to combine both changes:

```text
Hi there, welcome to the project! We are glad you are here.
```

He removes all conflict markers, stages the file, and completes the merge:

```shell
git add greeting.txt
git commit -m "Merge main into feature, combine greeting changes"
```

The conflict is resolved and the repository history records the merge.

## Stashing

The stash allows changes to be saved without committing broken or untested
code before switching to another branch.

### When to use the stash

You are working on a feature branch and need to switch to `main` for an
urgent fix, but your changes are not ready to commit. The stash saves
your working tree and index state, restores a clean working tree, and
lets you come back later.

### Basic usage

```shell
$ git stash push -m "wip: feature X"   # save changes with a label
$ git stash list                        # list all stash entries
$ git stash pop                         # restore latest stash and remove it
$ git stash apply                       # restore latest stash but keep it
$ git stash drop                        # delete latest stash entry
```

By default, `git stash` saves only tracked files. To include untracked
files, add the `-u` flag:

```shell
$ git stash push -u -m "wip: including new files"
```

### How it works internally

Git stores each stash as a special commit object with three parents:
the original revision, a snapshot of the index, and a snapshot of the
working tree. When you run `git stash pop`, Git follows these parent
references to restore the files. The stash reference is stored in
`.git/refs/stash`.

## Exercises

All exercises use the `concepts-lab` repository created in
[Building Blocks](02-building-blocks.md). If you skipped that chapter, create a new
repository with at least one commit before starting.

### Exercise 1: Branch Lifecycle

**Task:** Practice creating, using, merging, and deleting a feature branch.

**Steps:**

1. In `concepts-lab`, confirm you are on `main` with `git branch`
2. Create and switch to a branch called `feature/greeting` using `git branch feature/greeting` then `git switch feature/greeting`
3. Create a file `greeting.txt` with the text `Hello from feature branch`
4. Stage and commit with the message `Add greeting`
5. Run `git log --oneline --all` to see both branches
6. Switch back to `main` — confirm `greeting.txt` does not exist on `main`
7. Merge the feature branch with `git merge feature/greeting`
8. Confirm `greeting.txt` now exists on `main`
9. Delete the feature branch with `git branch -d feature/greeting`
10. Run `git branch` to confirm only `main` remains

**Verify:**

`git log --oneline --graph` shows the merge. `greeting.txt` exists on `main`. `git branch` lists only `main`.

### Exercise 2: Three-Way Merge with a Conflict

**Task:** Create a merge conflict, inspect the conflict markers, and resolve it manually.

**Steps:**

1. In `concepts-lab`, create a file `config.txt` with the line `mode=production` and commit it on `main`
2. Create and switch to a branch `feature/debug` using `git switch -c feature/debug`
3. Change the line in `config.txt` to `mode=debug` and commit
4. Switch back to `main`
5. Change the same line in `config.txt` to `mode=staging` and commit
6. Run `git merge feature/debug`
7. Open `config.txt` and locate the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
8. Run `git ls-files --stage` and observe the three stage entries (base, ours, theirs) for `config.txt`
9. Edit `config.txt` to resolve the conflict by choosing one value or combining them
10. Stage the resolved file with `git add config.txt` and complete the merge with `git commit`

**Verify:**

After the merge commit, `git log --oneline --graph` shows the two branches converging. `git ls-files --stage` shows a single stage-0 entry for `config.txt`. The file contains the resolved content with no conflict markers.

### Exercise 3: Stash and Restore Work in Progress

**Task:** Use the stash to save uncommitted changes, switch branches, then restore them.

**Steps:**

1. In `concepts-lab`, make sure you are on `main` with a clean working tree
2. Create a file `notes.txt` with the content `Work in progress`
3. Stage the file with `git add notes.txt`
4. Run `git stash push -m "wip: notes"` to save the changes
5. Confirm the working tree is clean with `git status`
6. Run `git stash list` and note the stash entry `stash@{0}`
7. Inspect the stash reference at `.git/refs/stash` and run `git cat-file -p` on it
8. Create and switch to a new branch `feature/other`, make any commit, then switch back to `main`
9. Restore the stashed changes with `git stash pop`
10. Confirm `notes.txt` is back in the working tree and staged

**Verify:**

After `git stash pop`, `git status` shows `notes.txt` as a staged new file. `git stash list` is empty.

## Quiz

**Q1.** What happens during a fast-forward merge?

- A) Git creates a new merge commit with two parents
- B) Git copies files from one branch to another
- C) Git moves the target branch tip forward to the source branch tip — no merge commit is created
- D) Git rebases the source branch onto the target branch

**Q2.** In a 3-way merge, what are the three revisions Git compares?

- A) HEAD, the index, and the working tree
- B) The first commit, the last commit, and the tag
- C) The local, global, and system configurations
- D) The common ancestor, the current branch tip, and the incoming branch tip

**Q3.** What does `git merge --abort` do?

- A) Deletes the branch that caused the conflict
- B) Commits the merge with conflict markers still in the files
- C) Restores the repository to the state before the merge began
- D) Reverts the last successful merge

**Q4.** Why should you avoid rebasing commits that have already been pushed?

- A) Rebase deletes the commits permanently
- B) Rebase only works on the main branch
- C) Rebase cannot handle merge conflicts
- D) Rebase rewrites commit hashes, causing conflicts for anyone who already has the originals

**Q5.** What does `git stash push -u` do that `git stash push` does not?

- A) It pushes the stash to the remote
- B) It saves untracked files in addition to tracked changes
- C) It saves ignored files
- D) It creates an annotated stash entry

### Answers

1. C — Git moves the target branch tip forward to the source branch tip — no merge commit is created
2. D — The common ancestor, the current branch tip, and the incoming branch tip
3. C — Restores the repository to the state before the merge began
4. D — Rebase rewrites commit hashes, causing conflicts for anyone who already has the originals
5. B — It saves untracked files in addition to tracked changes
