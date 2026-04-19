---
title: "Branch"
section: "operations"
order: 3
subsection: "branch"
subsectionOrder: 5
---

### git branch

Creates, removes, copies or tracks branches. 

-------------------------------------------------------------------------------
### Syntax

```
$ git branch
$ git branch <new branch>
$ git branch <any branch> -d
$ git branch <this branch> <-c, -m, -u> <other branch> 

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR
  
# Options
-------------------------------------------------------------------------------
-c (--copy)           : Copy branch
-d (--delete)         : Delete branch
-m (--move)           : Move branch
-u (--set-upstream)   : Start tracking of a remote branch
-f (--force)          : Force delete, move, copy
```

-------------------------------------------------------------------------------
### Examples

```shell
$ git branch                      # Show branches and HEAD status
$ git branch test                 # Create new branch test
$ git branch test -m demo         # Move test to demo
$ git branch demo -c test         # Copy demo to test
$ git branch demo -d -f           # Delete branch demo without merge
$ git branch test -u origin/test  # Track remote branch origin/test
$ git branch -f test main         # Move tip of test to main
```

### git checkout

Move the HEAD to a new location in the commit history. The new location can 
be either a new branch, tag or simply a commit object. 

-------------------------------------------------------------------------------
### Syntax
```
$ git checkout <branch>
$ git checkout <commit object>

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR
```

-------------------------------------------------------------------------------
### Examples
```shell
# Detach HEAD
$ git checkout c5c3522

# Create a new tag at this location
$ git tag V1.0.0.0

# Create a new branch at this location
$ git branch test

# Re-attach the HEAD
$ git checkout test
```

### git stash

Save temporarily the changes of a branch. This command is useful when the 
branch is not yet ready to be committed before switching to another branch. 

***Notes***

- Only indexed files are stashed by default
- LIFO (Last In First Out)
- At least one branch is present

-------------------------------------------------------------------------------
### Syntax
```
# Sub-commands
-------------------------------------------------------------------------------
$ git stash push <options>      # Add to stash
$ git stash pop                 # Remove from stash and apply
$ git stash apply               # Apply from stash                       
$ git stash drop                # Remove an element from stash
$ git stash clear               # Remove all stash entries

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR
  
# Options
-------------------------------------------------------------------------------
-a (--all)        : Stash also untracked and ignored files
-u (--untracked)  : Stash also untracked files
-m (--message)    : Add context to stash entry
```

-------------------------------------------------------------------------------
### Examples
```shell
# Stash changes on the main branch
$ echo main >> main
$ git add .
$ git stash push
$ git stash list
stash@{0}: WIP on main: c05a558 1

# Stash changes on the test branch
$ git branch test
$ git switch test
$ echo test >> test
$ git add .
$ git stash push
$ git stash list
stash@{0}: WIP on test: c05a558 1
stash@{1}: WIP on main: c05a558 1

# Remove and apply the last change
$ git stash pop

# Drop the last element in the stash without applying it
$ git stash drop

```

### git switch

Move the HEAD to a new location in the commit history. The new location can
be either a new branch, tag or simply a commit object.

-------------------------------------------------------------------------------
### Syntax
```
$ git switch <branch>
$ git switch --detach <commit object>

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR
```

-------------------------------------------------------------------------------
### Examples
```shell
# Detach HEAD c5c3522
$ git switch --detach c5c3522

# Create a new tag at this location
$ git tag V1

# Create a new branch at this location
$ git branch test

# Re-attach the HEAD
$ git switch test
```

### git merge

Combines the commit history of two branches and creates a new merge commit. 
The merge commit has two parents compared to a regular commit. 

Before merging ensure that:

1. The HEAD points to the receiving branch
2. The source branch has the latest commits

-------------------------------------------------------------------------------
### Syntax
```
$ git merge <branch>

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR
```

-------------------------------------------------------------------------------
### Examples
```shell
$ git switch main     # Switch to the receiving branch
$ git merge test      # Merge test with main
```

### git rebase

Reapplies commits from the current branch on top of another base commit. Unlike
merge, rebase rewrites commit history to produce a linear sequence of commits
without merge commits. Each rebased commit gets a new hash.

-------------------------------------------------------------------------------
### Syntax
```
$ git rebase [options] <branch>
$ git rebase -i <commit>
$ git rebase --onto <newbase> <oldbase> [<branch>]

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR

# Options
-------------------------------------------------------------------------------
-i (--interactive)  : Open an editor to reorder, edit, squash, or drop commits
--onto <newbase>    : Rebase onto a specific commit instead of the branch tip
--continue          : Resume rebase after resolving a conflict
--abort             : Cancel the rebase and restore the original branch state
--skip              : Skip the current commit and continue with the next one
```

-------------------------------------------------------------------------------
### How it works

Given the following history where `feature` branched off `main`:

```
      A---B---C  (feature)
     /
D---E---F---G  (main)
```

Running `git rebase main` from the `feature` branch replays A, B, C on top of G:

```
              A'--B'--C'  (feature)
             /
D---E---F---G  (main)
```

Commits A', B', C' have the same changes as A, B, C but different hashes because
their parent commit changed.

-------------------------------------------------------------------------------
### Interactive rebase

Interactive rebase lets you edit the commit history before replaying it. Start
it by specifying how far back to go:

```shell
$ git rebase -i HEAD~3
```

This opens an editor with one line per commit:

```
pick a1b2c3d Add user login
pick e4f5g6h Fix typo in login form
pick i7j8k9l Add logout button
```

Change the command word on each line to control what happens to that commit:

| Command   | Effect                                              |
|-----------|-----------------------------------------------------|
| `pick`    | Keep the commit as-is                               |
| `reword`  | Keep the commit but edit its message                |
| `edit`    | Pause after applying so you can amend the commit    |
| `squash`  | Combine with the previous commit, keep both messages|
| `fixup`   | Combine with the previous commit, discard this message |
| `drop`    | Remove the commit entirely                          |

Save and close the editor to execute the rebase.

-------------------------------------------------------------------------------
### Rebase onto

The `--onto` flag rebases a range of commits onto an arbitrary base. This is
useful when a feature branch was started from the wrong point.

```
$ git rebase --onto <newbase> <oldbase> [<branch>]
```

Commits after `<oldbase>` up to `<branch>` (or HEAD) are replayed onto
`<newbase>`.

```shell
# Move commits that are on feature but not on develop onto main
$ git rebase --onto main develop feature
```

Before:
```
      o---o---o  (feature, branched from develop)
     /
D---E---F  (develop)
     \
      G---H  (main)
```

After:
```
              o'--o'--o'  (feature, now based on main)
             /
      G-----H  (main)
```

-------------------------------------------------------------------------------
### Aborting and continuing

When a conflict occurs during rebase, Git pauses and lets you resolve it.

```shell
# Fix the conflict in your editor, then stage the resolved files
$ git add <resolved-file>

# Continue the rebase with the resolved changes
$ git rebase --continue

# Or abort and return to the state before the rebase started
$ git rebase --abort

# Or skip the current commit entirely
$ git rebase --skip
```

-------------------------------------------------------------------------------
### Rebase vs merge

| Aspect         | Rebase                          | Merge                           |
|----------------|----------------------------------|---------------------------------|
| History        | Linear, no merge commits         | Preserves branch topology       |
| Commit hashes  | Rewritten (new hashes)           | Original hashes preserved       |
| Conflicts      | Resolved per replayed commit     | Resolved once in merge commit   |
| Use case       | Clean up local work before push  | Record that branches converged  |
| Shared branches| Never rebase shared branches     | Safe on any branch              |

Use rebase to keep a clean linear history on local feature branches. Use merge
when integrating work that has already been pushed and shared with others.

-------------------------------------------------------------------------------
### Golden rule

Never rebase commits that have been pushed to a shared repository. Rebase
rewrites commit hashes. Other developers who based work on the original commits
will have divergent histories and will need to force-reconcile, which risks
losing their work.

```shell
# Safe: rebase your local feature branch onto latest main before pushing
$ git fetch origin
$ git rebase origin/main

# Dangerous: rebasing after pushing to a shared branch
$ git push origin feature
$ git rebase main            # Rewrites already-pushed commits
$ git push --force origin feature  # Forces others to reset
```

-------------------------------------------------------------------------------
### Examples
```shell
# Rebase current branch onto main
$ git switch feature
$ git rebase main

# Interactive rebase: squash the last 3 commits into one
$ git rebase -i HEAD~3
# Change "pick" to "squash" on the second and third lines, save, and edit the
# combined commit message

# Reword the last commit message without changing any files
$ git rebase -i HEAD~1
# Change "pick" to "reword", save, then edit the message

# Rebase onto: move feature from develop to main
$ git rebase --onto main develop feature

# Abort a rebase in progress
$ git rebase --abort

# Pull with rebase instead of merge
$ git pull --rebase origin main
```

### git cherry-pick

Apply one or more commits from another branch onto the current branch. Each
selected commit is replayed as a new commit with a new hash but the same changes
and commit message. Unlike merge, cherry-pick does not bring in the full branch
history — only the commits you choose.

***Notes***

- The current branch must be clean before cherry-picking
- Cherry-picked commits get new hashes (they are replays, not moves)
- Conflicts are resolved the same way as during merge

-------------------------------------------------------------------------------
### Syntax
```
$ git cherry-pick <commit>
$ git cherry-pick <commit1> <commit2> ...
$ git cherry-pick <commit1>..<commit2>
$ git cherry-pick --continue
$ git cherry-pick --abort

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR

# Options
-------------------------------------------------------------------------------
-n (--no-commit)  : Apply changes without creating a commit
-e (--edit)       : Edit the commit message before committing
-x                : Append a line noting the source commit hash
--continue        : Resume after resolving conflicts
--abort           : Cancel the cherry-pick and restore original state
```

-------------------------------------------------------------------------------
### Single commit

Apply a specific commit from another branch to the current branch.

```shell
$ git switch main
$ git cherry-pick a1b2c3d
```

-------------------------------------------------------------------------------
### Multiple commits

Apply several commits at once. They are applied in the order listed.

```shell
$ git cherry-pick a1b2c3d e4f5g6h
```

-------------------------------------------------------------------------------
### Range of commits

Apply a range of commits. The start commit is excluded and the end commit is
included (`(start, end]`).

```shell
# Apply all commits after a1b2c3d up to and including e4f5g6h
$ git cherry-pick a1b2c3d..e4f5g6h

# Include both endpoints (use three dots for start-inclusive ranges)
$ git cherry-pick a1b2c3d^..e4f5g6h
```

-------------------------------------------------------------------------------
### Without committing

Stage the changes from the picked commit without creating a new commit. This is
useful when you want to combine several cherry-picks into a single commit or
inspect the changes before committing.

```shell
$ git cherry-pick --no-commit a1b2c3d
$ git status                           # Review staged changes
$ git commit -m "Backport fix"         # Commit manually
```

-------------------------------------------------------------------------------
### Handling conflicts

When a cherry-pick results in conflicts, Git pauses and lets you resolve them.

```shell
$ git cherry-pick a1b2c3d
# CONFLICT (content): Merge conflict in file.txt

# 1. Open the conflicting files and resolve the markers
# 2. Stage the resolved files
$ git add file.txt

# 3. Continue the cherry-pick
$ git cherry-pick --continue
```

To cancel the cherry-pick and return to the state before it started:

```shell
$ git cherry-pick --abort
```

-------------------------------------------------------------------------------
### When to use cherry-pick

- **Hotfixes** — apply a bug fix from a development branch directly to a
  release or production branch without merging unrelated changes
- **Selective backports** — bring a specific feature or fix into an older
  maintenance branch
- **Recovering commits** — rescue a commit from a branch that was deleted or
  abandoned

-------------------------------------------------------------------------------
### Examples
```shell
# Apply the latest commit from the feature branch to main
$ git switch main
$ git log feature --oneline -1
a1b2c3d Fix null check in parser
$ git cherry-pick a1b2c3d

# Backport two fixes to a release branch without committing
$ git switch release/1.0
$ git cherry-pick --no-commit f1a2b3c d4e5f6g
$ git commit -m "Backport parser fixes to release/1.0"

# Cherry-pick with source tracking
$ git switch main
$ git cherry-pick -x a1b2c3d
# Commit message will include: (cherry picked from commit a1b2c3d)

# Abort a cherry-pick that has conflicts you do not want to resolve
$ git cherry-pick a1b2c3d
# CONFLICT ...
$ git cherry-pick --abort
```
