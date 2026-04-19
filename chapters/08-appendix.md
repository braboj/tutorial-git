---
title: "Appendix"
section: "appendix"
order: 8
---

## Overview

This appendix serves as a quick reference for Git commands, grouped by
category. For hands-on practice, see [Playbook](07-playbook.md). For
conceptual explanations, see [Building Blocks](02-building-blocks.md).

## Command Quick Reference

### Help

**`git help`** — Display help information about git commands, guides, and variables

```shell
git help -g                # List all guides
git help <command>         # Help for a specific command
git help -a                # List all available commands
git <command> -h           # Short help for a command
```

### Create

**`git init`** — Create a new repository in a project folder

```shell
git init                   # Initialize in current directory
git init <project>         # Create and initialize a new directory
git init <repo> --bare     # Create a bare repository
```

**`git clone`** — Copy an existing repository

```shell
git clone <repo-url>                      # Clone a repository
git clone --bare <repo-url>               # Clone as bare repository
git clone --recurse-submodules <repo-url> # Clone with submodules
```

### Configure

**`git config`** — Configure, query, or delete configuration parameters

```shell
git config --global user.name "name"      # Set user name
git config --list --show-origin           # List all settings with source
git config --get <parameter>              # Read a single setting
git config --edit --global                # Open global config in editor
```

**`git remote`** — Add or remove references to remote repositories

```shell
git remote add <alias> <url>              # Add a remote
git remote remove <name>                  # Remove a remote
git remote rename <old> <new>             # Rename a remote
git remote -v                             # List remotes with URLs
```

### Track

**`git add`** — Update the index using the working tree

```shell
git add <pathspec>         # Stage specific files
git add .                  # Stage all changes in current directory
git add -A                 # Stage all changes in entire repository
git add -p <file>          # Interactively stage hunks
```

**`git commit`** — Save staged changes to commit history

```shell
git commit -m <message>    # Commit with message
```

**`git tag`** — Put a label on a commit

```shell
git tag <name>                    # Create lightweight tag
git tag <name> -a -m <message>    # Create annotated tag
git tag -d <name>                 # Delete a tag
git tag -l                        # List all tags
```

**`git rm`** — Remove files from index and working directory

```shell
git rm <file>              # Remove from both index and disk
git rm --cached <file>     # Remove from index only (keep on disk)
git rm -r <directory>      # Remove directory recursively
```

**`git mv`** — Move or rename a file

```shell
git mv <old-path> <new-path>    # Move or rename a tracked file
```

### Branch

**`git branch`** — Create, remove, copy, or track branches

```shell
git branch                      # List local branches
git branch <name>               # Create a new branch
git branch -d <name>            # Delete a merged branch
git branch -m <name> <new>      # Rename a branch
git branch -a                   # List local and remote branches
```

**`git switch`** — Switch branches or create and switch to a new branch

```shell
git switch <branch>             # Switch to existing branch
git switch -c <new-branch>      # Create and switch to new branch
git switch --detach <commit>    # Detach HEAD at a specific commit
```

**`git checkout`** — Move HEAD to a new location in commit history

```shell
git checkout <branch>           # Switch to a branch
git checkout <commit>           # Detach HEAD to a commit
git checkout -b <new> <commit>  # Create branch from a specific commit
```

**`git stash`** — Temporarily save changes before switching branches

```shell
git stash push -m <message>     # Save changes with a label
git stash pop                   # Restore and remove latest stash
git stash apply                 # Restore without removing
git stash list                  # List all stash entries
git stash drop                  # Remove latest stash entry
```

**`git merge`** — Combine commit history of two branches

```shell
git merge <branch>              # Merge branch into current branch
```

**`git rebase`** — Reapply commits on top of another base commit

```shell
git rebase <branch>             # Rebase current branch onto target
git rebase --continue           # Continue after resolving conflicts
git rebase --abort              # Cancel and restore original state
```

**`git cherry-pick`** — Apply specific commits from another branch

```shell
git cherry-pick <commit>        # Apply a single commit
git cherry-pick -n <commit>     # Apply without committing
git cherry-pick --continue      # Continue after resolving conflicts
```

### Sync

**`git push`** — Copy local history to remote repository

```shell
git push                        # Push current branch to remote
git push <remote> <branch>      # Push specific branch
git push --tags                 # Push all tags
git push -d origin <branch>     # Delete remote branch
```

**`git pull`** — Fetch and merge changes from remote repository

```shell
git pull                        # Pull current tracking branch
git pull <remote> <branch>      # Pull specific branch
git pull --rebase origin main   # Pull with rebase instead of merge
```

**`git fetch`** — Download commit history from remote without merging

```shell
git fetch                       # Fetch from default remote
git fetch <remote>              # Fetch from specific remote
git fetch <remote> <branch>     # Fetch specific branch
```

### Revert

**`git clean`** — Remove untracked files from working tree

```shell
git clean -n -d                 # Dry run — show what would be removed
git clean -f -d                 # Remove untracked files and directories
```

**`git restore`** — Restore files from the repository or index

```shell
git restore <file>                       # Discard working tree changes
git restore --staged <file>              # Unstage a file
git restore --source <commit> <file>     # Restore file from a commit
```

**`git revert`** — Create a new commit that undoes a previous one

```shell
git revert <commit>             # Revert a commit
git revert -n <commit>          # Revert without auto-committing
```

**`git reset`** — Move HEAD to a specified commit

```shell
git reset --soft HEAD~1         # Undo commit, keep changes staged
git reset --mixed HEAD~1        # Undo commit, unstage changes
git reset --hard HEAD~1         # Undo commit, discard all changes
git reset HEAD -- <file>        # Unstage a single file
```

### Inspect

**`git status`** — Show status of working tree

```shell
git status                      # Full status
git status --short --branch     # Compact status with branch info
```

**`git log`** — Display commit history

```shell
git log --oneline               # One line per commit
git log --graph --oneline --all # Visual branch graph
git log --author=<pattern>      # Filter by author
git log -<n>                    # Show last n commits
```

**`git diff`** — Show changes between commits, branches, or working tree

```shell
git diff                        # Unstaged changes
git diff --staged               # Staged changes
git diff <commit1> <commit2>    # Changes between two commits
git diff --stat                 # Summary of changed files
```

**`git show`** — Display commit, file, or tag information

```shell
git show <commit>               # Show commit details and diff
git show <commit>:<file>        # Show file at a specific commit
```

**`git blame`** — Show commit information for each line in a file

```shell
git blame <file>                # Annotate each line with last change
git blame -L <start>,<end> <f>  # Annotate a specific line range
```

**`git bisect`** — Find bugs using binary search

```shell
git bisect start                # Start binary search
git bisect bad HEAD             # Mark current commit as bad
git bisect good <commit>        # Mark a known good commit
git bisect reset                # End bisect and return to original HEAD
```

**`git reflog`** — Show history of reference changes

```shell
git reflog                      # Show HEAD reflog
git reflog <ref>                # Show reflog for a specific ref
```

**`git cat-file`** — Inspect git objects

```shell
git cat-file -t <object>        # Show object type
git cat-file -p <object>        # Show object content
git cat-file -s <object>        # Show object size
```

**`git ls-files`** — Show files in index and working tree

```shell
git ls-files --stage            # Show index entries with hashes
git ls-files -o                 # Show untracked files
```

### Reuse

**`git submodule`** — Create links to external repositories

```shell
git submodule add <repository>             # Add a submodule
git submodule update --init --recursive    # Initialize and fetch
git submodule update --remote <path>       # Update to latest remote
```

## Git Clients

- [GitHub Desktop](https://desktop.github.com/)
- [Sourcetree](https://www.sourcetreeapp.com/)
- [TortoiseGit](https://tortoisegit.org/)
- [GitKraken](https://www.gitkraken.com/)
- [Aurees](https://aurees.com/)
- [Git Extensions](https://gitextensions.github.io/)

## References

### Introduction

- [Pro Git Book](http://git-scm.com/book/en/v2)
- [Git Internals PDF](https://github.com/pluralsight/git-internals-pdf/releases)
- [Think Like a Git](http://think-like-a-git.net/)
- [Git Immersion](https://gitimmersion.com/index.html)
- [Git How To](https://githowto.com/)
- [W3Schools Git Tutorial](https://www.w3schools.com/git/)

### Q&A

- [Git Flight Rules](https://github.com/k88hudson/git-flight-rules)
- [Oh Shit, Git!?!](https://ohshitgit.com/)

### Visualization

- [Learn Git Branching](https://learngitbranching.js.org/)
- [Explain Git with D3](https://onlywei.github.io/explain-git-with-d3/)
- [Visualizing Git](https://git-school.github.io/visualizing-git/)

### Workflows

- [A Successful Git Branching Model](https://nvie.com/posts/a-successful-git-branching-model/)
- [Trunk-Based Development vs Git Flow](https://www.toptal.com/software/trunk-based-development-git-flow)
- [OneFlow](https://www.endoflineblog.com/oneflow-a-git-branching-model-and-workflow)

## Notes

1. Git cannot commit empty folders. Add a placeholder file (e.g. `.gitkeep`)
   if you need an empty directory tracked.

2. Unlike `svn add`, `git add` does not permanently add a file — it stages
   changes for the next commit. You need to run `git add` each time a file
   is modified.

3. Changing the user email in configuration may cause commits to appear
   under a different author identity in the log.
