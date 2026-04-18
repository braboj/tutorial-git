---
title: "Sync"
section: "operations"
order: 3
subsection: "sync"
subsectionOrder: 6
---

### git push

Copies the local history to the remote repo. The default remote repository 
is ***origin***.

-------------------------------------------------------------------------------
### Syntax
```
$ git push <remote> <branch> <options>

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR
  
# Options
-------------------------------------------------------------------------------
-d (--delete) : Delete a reference on the remote repo
--tags        : Push commit history, branches and tags
--force       : Force update of the remote repo (caution!!!)
```

-------------------------------------------------------------------------------
### Examples
```shell
# Push commit history and branches
$ git push

# Push commit history, branches and tags
$ git push --tags

# Push to a specific remote repo
$ git push origin

# Push a specific branch to the remote repo
$ git push origin main

# Delete a tag on a remote repository
$ git push --delete origin V1.0.0

# Delete all tags with PowerShell
$ git tag | foreach-object -process { git push origin -d $_ }
```

### git pull

Apply changes from a remote repository into the current branch. Combines git 
fetch and git merge.

-------------------------------------------------------------------------------
### Syntax
```
$ git pull <remote repo> <branch>

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR
```

-------------------------------------------------------------------------------
### Examples
```shell
# Get the history of the default remote repo
$ git pull

# Get the commit history and branches of the remote repo
$ git pull origin test

# Get the history of a specific branch of the remote repo 
$ git pull origin test
```

### git fetch

Copies the commit history from the remote repository to the local repository 
and updates the state of the tracked remote branch. The tracked remote 
branch can be found in ***.git/refs/remotes/...***.

When no remote is specified, by default the ***origin*** remote will be used, 
unless there’s an upstream branch configured for the current branch.

-------------------------------------------------------------------------------
### Syntax
```
$ git fetch                         # Fetch origin
$ git fetch <remote repo>           # Fetch remote repo
$ git fetch <remote repo> <branch>  # Fetch a branch of the remote repo

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR
```

-------------------------------------------------------------------------------
### Examples
```shell
# Copies commit history, branches and tags
$ git fetch

# Go to the tip of the origin/main branch
$ git checkout origin/main

# Create a new local branch from the current location
$ git branch main

# Switch to the new branch
$ git switch main
```
