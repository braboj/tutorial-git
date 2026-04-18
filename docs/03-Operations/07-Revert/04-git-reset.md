### git reset

Move the current branch tip (HEAD) to a specified commit and optionally update
the staging index and working directory to match. Unlike `git revert`, reset
rewrites history — it removes commits rather than adding a new one to undo them.

-------------------------------------------------------------------------------
### Three Modes

Reset operates in three modes that differ in what they discard:

```
Mode          HEAD    Index    Working Dir
-------------------------------------------------------------------------------
--soft        Moved   Kept     Kept
--mixed       Moved   Reset    Kept          (default)
--hard        Moved   Reset    Reset
```

- **--soft** — moves HEAD only. Staged and unstaged changes are preserved. The
  diff between the old HEAD and the new HEAD appears as staged changes, ready
  to be committed again.
- **--mixed** — moves HEAD and resets the index to match the new HEAD. Working
  directory files are untouched. This is the default when no mode is given.
- **--hard** — moves HEAD, resets the index, and overwrites the working
  directory. All uncommitted changes are permanently lost.

-------------------------------------------------------------------------------
### Syntax
```
$ git reset [<mode>] [<commit>]
$ git reset [<commit>] -- <pathspec>

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR

# Modes
-------------------------------------------------------------------------------
--soft    : Move HEAD only
--mixed   : Move HEAD and reset the index (default)
--hard    : Move HEAD, reset the index, and reset the working directory

# Common commit references
-------------------------------------------------------------------------------
HEAD~1          : One commit before HEAD (the parent)
HEAD~3          : Three commits before HEAD
HEAD^           : Same as HEAD~1
<sha>           : A specific commit hash (full or abbreviated)
<branch-name>   : Tip of another branch
```

-------------------------------------------------------------------------------
### Unstaging Files

Reset a single file in the index back to its HEAD state without touching the
working directory. This effectively unstages the file.

```shell
# Unstage a single file
$ git reset HEAD -- file.txt

# Unstage everything (keep working directory changes)
$ git reset HEAD
```

These are equivalent to `git restore --staged file.txt` in modern Git.

-------------------------------------------------------------------------------
### Examples — --soft

```shell
# Undo the last commit but keep all changes staged
$ git reset --soft HEAD~1

# Squash the last 3 commits into one (changes remain staged)
$ git reset --soft HEAD~3
$ git commit -m "Combined commit message"
```

Use --soft when you want to rewrite a commit message, combine recent commits,
or move changes back to the staging area.

-------------------------------------------------------------------------------
### Examples — --mixed

```shell
# Undo the last commit and unstage its changes
$ git reset HEAD~1

# Unstage all staged files (working directory untouched)
$ git reset

# Unstage a specific file
$ git reset HEAD -- src/app.js
```

Use --mixed when you want to rework which files go into the next commit.

-------------------------------------------------------------------------------
### Examples — --hard

```shell
# Discard the last commit and all its changes completely
$ git reset --hard HEAD~1

# Reset to match a remote branch exactly
$ git reset --hard origin/main

# Discard all uncommitted changes (staged and unstaged)
$ git reset --hard HEAD
```

Use --hard when you need to throw away local work and return to a known state.

-------------------------------------------------------------------------------
### Recovering from Reset with git reflog

Even after a --hard reset, Git keeps a log of where HEAD has pointed. Use
`git reflog` to find the lost commit and restore it.

```shell
# Show the reflog
$ git reflog

# Example output:
# a1b2c3d HEAD@{0}: reset: moving to HEAD~2
# e4f5g6h HEAD@{1}: commit: Add feature X
# i7j8k9l HEAD@{2}: commit: Fix bug Y

# Restore to the commit before the reset
$ git reset --hard e4f5g6h
```

Reflog entries expire after 90 days by default. Recover lost commits promptly.

-------------------------------------------------------------------------------
### Reset vs Revert

| | git reset | git revert |
|---|---|---|
| **Mechanism** | Moves HEAD backward, removing commits from history | Creates a new commit that undoes a previous one |
| **History** | Rewrites history (commits disappear) | Preserves history (adds a new commit) |
| **Shared branches** | Dangerous — causes conflicts for others who pulled | Safe — no force push needed |
| **Use when** | Working locally, before pushing | Changes are already pushed and shared |

Rule of thumb: use `git reset` on local, unpushed work. Use `git revert` on
commits that others may have pulled.

-------------------------------------------------------------------------------
### Warning — Data Loss with --hard

`git reset --hard` permanently deletes uncommitted changes in the working
directory and index. There is no undo for unstaged modifications. Always check
`git status` and `git stash` before running --hard.

Committed work can be recovered via `git reflog`, but uncommitted edits are
gone forever.
