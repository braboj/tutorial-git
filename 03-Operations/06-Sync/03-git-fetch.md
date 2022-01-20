[**Up**](../06-Sync/sync.md) |
[**Help**](../01-Help/help.md) |
[**Create**](../02-Create/create.md) |
[**Configure**](../03-Configure/configure.md) |
[**Track**](../04-Track/track.md) |
[**Branch**](../05-Branch/branch.md) |
[**Sync**](../06-Sync/sync.md) |
[**Revert**](../07-Revert/revert.md) |
[**Inspect**](../08-Inspect/inspect.md)

-------------------------------------------------------------------------------
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