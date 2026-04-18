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
