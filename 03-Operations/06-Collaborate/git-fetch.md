## git fetch
Copies the commit history from the remote repository to the local repository 
and updates the state of the tracked remote branch. The tracked remote 
branch can be found in ***.git/refs/remotes/...***.

When no remote is specified, by default the ***origin*** remote will be used, 
unless there’s an upstream branch configured for the current branch.

-------------------------------------------------------------------------------
### Syntax
```shell
$ git fetch                         # Fetch origin
$ git fetch <remote repo>           # Fetch remote repo
$ git fetch <remote repo> <branch>  # Fetch a branch of the remote repo
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