---
title: "Playbook"
section: "playbook"
order: 7
---

## Overview

This chapter is a quick-reference collection of recipes for common
Git tasks. Each recipe shows the problem, the commands to solve it,
and what to watch out for.

For command syntax, see [Appendix](08-appendix.md). For definitions,
see [Glossary](09-glossary.md).

## Undoing changes

### Discard unstaged changes to a file

```shell
$ git restore <file>
```

Reverts the file in your working tree to match the last commit.
Uncommitted edits are lost.

### Unstage a file without losing changes

```shell
$ git restore --staged <file>
```

Removes the file from the index but keeps your edits in the working
tree.

### Undo the last commit but keep changes staged

```shell
$ git reset --soft HEAD~1
```

The commit is removed but your changes stay in the index, ready to
recommit.

### Undo the last commit and unstage changes

```shell
$ git reset HEAD~1
```

The default (`--mixed`). Changes go back to the working tree as
unstaged edits.

### Undo the last commit and discard all changes

```shell
$ git reset --hard HEAD~1
```

The commit and all changes are gone. Recover with `git reflog` if
needed.

### Revert a commit without rewriting history

```shell
$ git revert <hash>
```

Creates a new commit that undoes the changes. Safe to use on shared
branches.

### Recover a lost commit

```shell
$ git reflog                       # find the hash
$ git branch recovered <hash>      # or: git reset --hard <hash>
```

Works as long as the reflog entry has not expired (default: 30 days).

## Branching

### Create a branch and switch to it

```shell
$ git switch -c feature/name
```

### Delete a branch (local and remote)

```shell
$ git branch -d feature/name                # local (safe — only if merged)
$ git branch -D feature/name                # local (force — even if unmerged)
$ git push origin --delete feature/name     # remote
```

### Rename the current branch

```shell
$ git branch -m new-name
```

### See which branches are merged into main

```shell
$ git branch --merged main
```

Safe to delete any branch listed here (except `main` itself).

## Merging

### Merge a feature branch into main

```shell
$ git switch main
$ git merge feature/name
```

### Force a merge commit (no fast-forward)

```shell
$ git merge --no-ff feature/name
```

### Squash a branch into a single commit

```shell
$ git merge --squash feature/name
$ git commit -m "Add feature"
```

### Abort a conflicted merge

```shell
$ git merge --abort
```

Returns everything to the pre-merge state.

### Resolve a merge conflict

```shell
$ git status                        # identify conflicting files
# ... edit each file, remove markers ...
$ git add <file>                    # stage resolved file
$ git commit                        # complete the merge
```

## Rebasing

### Rebase a feature branch onto main

```shell
$ git switch feature/name
$ git rebase main
```

### Squash commits with interactive rebase

```shell
$ git rebase -i HEAD~3
# change "pick" to "squash" for commits to combine
```

### Abort a conflicted rebase

```shell
$ git rebase --abort
```

### Continue after resolving a rebase conflict

```shell
$ git add <file>
$ git rebase --continue
```

## Remote operations

### Push a new branch and set up tracking

```shell
$ git push -u origin feature/name
```

### Pull with rebase (avoid merge commits)

```shell
$ git pull --rebase origin main
```

### Fix a rejected push

```shell
$ git pull origin main              # fetch + merge
$ git push origin main              # retry
```

### Force push safely (after rebase)

```shell
$ git push --force-with-lease origin feature/name
```

Never use `--force` on shared branches.

### Sync a fork with upstream

```shell
$ git fetch upstream
$ git switch main
$ git merge upstream/main
$ git push origin main
```

### Fetch and inspect before merging

```shell
$ git fetch origin
$ git log main..origin/main --oneline    # what's new on remote
$ git diff main origin/main              # line-by-line changes
$ git merge origin/main                  # integrate when ready
```

## Cherry-picking

### Apply a single commit from another branch

```shell
$ git cherry-pick <hash>
```

### Cherry-pick without committing (stage only)

```shell
$ git cherry-pick --no-commit <hash>
```

Useful when you want to modify the change before committing.

## Stashing

### Save work in progress

```shell
$ git stash push -m "description"
```

### Save including untracked files

```shell
$ git stash push -u -m "description"
```

### Restore the latest stash

```shell
$ git stash pop                     # restore and remove from stash
$ git stash apply                   # restore but keep in stash
```

### List and drop stash entries

```shell
$ git stash list                    # show all entries
$ git stash drop stash@{0}          # delete a specific entry
$ git stash clear                   # delete all entries
```

## Tagging

### Create an annotated tag

```shell
$ git tag -a v1.0.0 -m "First release"
```

### Tag a past commit

```shell
$ git tag -a v0.9.0 -m "Beta release" <hash>
```

### Push tags to remote

```shell
$ git push origin v1.0.0            # single tag
$ git push origin --tags            # all tags
```

### Delete a tag (local and remote)

```shell
$ git tag -d v1.0.0                 # local
$ git push origin --delete v1.0.0   # remote
```

## Submodules

### Add a submodule

```shell
$ git submodule add <url> <path>
$ git commit -m "Add submodule"
```

### Clone a repo with submodules

```shell
$ git clone --recurse-submodules <url>
```

Or after a regular clone:

```shell
$ git submodule update --init --recursive
```

### Update a submodule to latest

```shell
$ git submodule update --remote
$ git add <path>
$ git commit -m "Update submodule"
```

### Remove a submodule

```shell
$ git submodule deinit <path>
$ git rm <path>
$ rm -rf .git/modules/<path>
$ git commit -m "Remove submodule"
```

## Debugging

### Find which commit introduced a bug

```shell
$ git bisect start
$ git bisect bad                    # current commit has the bug
$ git bisect good <hash>            # this older commit was fine
# ... test each midpoint, mark good/bad ...
$ git bisect reset                  # done — return to original branch
```

### Automated bisect with a test script

```shell
$ git bisect start HEAD <good-hash>
$ git bisect run ./test.sh
```

### See who last changed each line

```shell
$ git blame <file>
```

### Search commit messages

```shell
$ git log --grep="fix" --oneline
```

### Search file contents across history

```shell
$ git log -S "functionName" --oneline
```

## Configuration

### Set identity

```shell
$ git config --global user.name "Your Name"
$ git config --global user.email "you@example.com"
```

### Set default branch name

```shell
$ git config --global init.defaultBranch main
```

### Set default pull strategy to rebase

```shell
$ git config --global pull.rebase true
```

### Create an alias

```shell
$ git config --global alias.hist "log --oneline --graph --all"
```

### See where a setting comes from

```shell
$ git config --list --show-origin
```
