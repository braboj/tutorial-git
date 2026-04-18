[**Up**](../07-Revert/revert.md) |
[**Help**](../01-Help/help.md) |
[**Create**](../02-Create/create.md) |
[**Configure**](../03-Configure/configure.md) |
[**Track**](../04-Track/track.md) |
[**Branch**](../05-Branch/branch.md) |
[**Sync**](../06-Sync/sync.md) |
[**Revert**](../07-Revert/revert.md) |
[**Inspect**](../08-Inspect/inspect.md)

-------------------------------------------------------------------------------
### git restore

Restore the index or project files from the local repo. The default restore 
commit is HEAD.

-------------------------------------------------------------------------------
### Syntax
```
$ git restore <pathspec> <options>

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR
  
# Options
-------------------------------------------------------------------------------
-S (--staged)           : Restore the index
-W (--worktree)         : Restore the project files
-s (--source) <commit>  : Commit object used to restore   
```


-------------------------------------------------------------------------------
### Examples
```shell
# Restore current directory from HEAD
$ git restore .

# Restore the stage index from master
$ git restore . --source main

# Restore both work files and index
$ git restore . -SW
```