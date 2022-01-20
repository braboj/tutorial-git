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