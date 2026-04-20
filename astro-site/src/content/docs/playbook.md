---
title: "Playbook"
section: "playbook"
order: 7
---

## 1. Overview

This chapter is a quick-reference collection of recipes for common
Git tasks. Each recipe shows the problem, the commands to solve it,
and what to watch out for.

For command syntax, see [Appendix](../appendix/). For definitions,
see [Glossary](../glossary/).

In this chapter you will learn:

- How to undo changes at every level — unstage, reset, revert, and recover
- Branching recipes — create, delete, rename, and inspect branches
- Merging recipes — fast-forward, no-ff, squash, conflict resolution
- Rebasing — linearize history and squash commits interactively
- Remote operations — push, pull, force push safely, sync forks
- Cherry-picking — apply individual commits across branches
- Stashing — save and restore work in progress
- Tagging — create, push, and delete annotated tags
- Submodules — add, clone, update, and remove submodules
- Debugging — bisect, blame, and search commit history
- Configuration — identity, defaults, aliases, and diagnostics

## 2. Undoing changes

### Discard unstaged changes to a file

```text
$ git restore <file>
```

Reverts the file in your working tree to match the last commit.
Uncommitted edits are lost.

### Unstage a file without losing changes

```text
$ git restore --staged <file>
```

Removes the file from the index but keeps your edits in the working
tree.

### Undo the last commit but keep changes staged

```text
$ git reset --soft HEAD~1
```

The commit is removed but your changes stay in the index, ready to
recommit.

### Undo the last commit and unstage changes

```text
$ git reset HEAD~1
```

The default (`--mixed`). Changes go back to the working tree as
unstaged edits.

### Undo the last commit and discard all changes

```text
$ git reset --hard HEAD~1
```

The commit and all changes are gone. Recover with `git reflog` if
needed.

### Revert a commit without rewriting history

```text
$ git revert <hash>
```

Creates a new commit that undoes the changes. Safe to use on shared
branches.

### Recover a lost commit

```text
$ git reflog                       # find the hash
$ git branch recovered <hash>      # or: git reset --hard <hash>
```

Works as long as the reflog entry has not expired (default: 30 days).

## 3. Branching

### Create a branch and switch to it

```text
$ git switch -c feature/name
```

### Delete a branch (local and remote)

```text
$ git branch -d feature/name                # local (safe — only if merged)
$ git branch -D feature/name                # local (force — even if unmerged)
$ git push origin --delete feature/name     # remote
```

### Rename the current branch

```text
$ git branch -m new-name
```

### See which branches are merged into main

```text
$ git branch --merged main
```

Safe to delete any branch listed here (except `main` itself).

## 4. Merging

### Merge a feature branch into main

```text
$ git switch main
$ git merge feature/name
```

### Force a merge commit (no fast-forward)

```text
$ git merge --no-ff feature/name
```

### Squash a branch into a single commit

```text
$ git merge --squash feature/name
$ git commit -m "Add feature"
```

### Abort a conflicted merge

```text
$ git merge --abort
```

Returns everything to the pre-merge state.

### Resolve a merge conflict

```text
$ git status                        # identify conflicting files
# ... edit each file, remove markers ...
$ git add <file>                    # stage resolved file
$ git commit                        # complete the merge
```

## 5. Rebasing

### Rebase a feature branch onto main

```text
$ git switch feature/name
$ git rebase main
```

### Squash commits with interactive rebase

```text
$ git rebase -i HEAD~3
# change "pick" to "squash" for commits to combine
```

### Abort a conflicted rebase

```text
$ git rebase --abort
```

### Continue after resolving a rebase conflict

```text
$ git add <file>
$ git rebase --continue
```

## 6. Remote operations

### Push a new branch and set up tracking

```text
$ git push -u origin feature/name
```

### Pull with rebase (avoid merge commits)

```text
$ git pull --rebase origin main
```

### Fix a rejected push

```text
$ git pull origin main              # fetch + merge
$ git push origin main              # retry
```

### Force push safely (after rebase)

```text
$ git push --force-with-lease origin feature/name
```

Never use `--force` on shared branches.

### Sync a fork with upstream

```text
$ git fetch upstream
$ git switch main
$ git merge upstream/main
$ git push origin main
```

### Fetch and inspect before merging

```text
$ git fetch origin
$ git log main..origin/main --oneline    # what's new on remote
$ git diff main origin/main              # line-by-line changes
$ git merge origin/main                  # integrate when ready
```

## 7. Cherry-picking

### Apply a single commit from another branch

```text
$ git cherry-pick <hash>
```

### Cherry-pick without committing (stage only)

```text
$ git cherry-pick --no-commit <hash>
```

Useful when you want to modify the change before committing.

## 8. Stashing

### Save work in progress

```text
$ git stash push -m "description"
```

### Save including untracked files

```text
$ git stash push -u -m "description"
```

### Restore the latest stash

```text
$ git stash pop                     # restore and remove from stash
$ git stash apply                   # restore but keep in stash
```

### List and drop stash entries

```text
$ git stash list                    # show all entries
$ git stash drop stash@{0}          # delete a specific entry
$ git stash clear                   # delete all entries
```

## 9. Tagging

### Create an annotated tag

```text
$ git tag -a v1.0.0 -m "First release"
```

### Tag a past commit

```text
$ git tag -a v0.9.0 -m "Beta release" <hash>
```

### Push tags to remote

```text
$ git push origin v1.0.0            # single tag
$ git push origin --tags            # all tags
```

### Delete a tag (local and remote)

```text
$ git tag -d v1.0.0                 # local
$ git push origin --delete v1.0.0   # remote
```

## 10. Submodules

### Add a submodule

```text
$ git submodule add <url> <path>
$ git commit -m "Add submodule"
```

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

```text
$ git submodule deinit <path>
$ git rm <path>
$ rm -rf .git/modules/<path>
$ git commit -m "Remove submodule"
```

## 11. Debugging

### Find which commit introduced a bug

```text
$ git bisect start
$ git bisect bad                    # current commit has the bug
$ git bisect good <hash>            # this older commit was fine
# ... test each midpoint, mark good/bad ...
$ git bisect reset                  # done — return to original branch
```

### Automated bisect with a test script

```text
$ git bisect start HEAD <good-hash>
$ git bisect run ./test.sh
```

### See who last changed each line

```text
$ git blame <file>
```

### Search commit messages

```text
$ git log --grep="fix" --oneline
```

### Search file contents across history

```text
$ git log -S "functionName" --oneline
```

## 12. Configuration

### Set identity

```text
$ git config --global user.name "Your Name"
$ git config --global user.email "you@example.com"
```

### Set default branch name

```text
$ git config --global init.defaultBranch main
```

### Set default pull strategy to rebase

```text
$ git config --global pull.rebase true
```

### Create an alias

```text
$ git config --global alias.hist "log --oneline --graph --all"
```

### See where a setting comes from

```text
$ git config --list --show-origin
```
