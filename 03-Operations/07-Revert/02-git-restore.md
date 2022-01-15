## git restore
Restore the index or project files from the local repo. The default restore 
commit is HEAD.

-------------------------------------------------------------------------------
### Syntax
```shell
$ git restore <pathspec> <options>

# Legend
[]  : Optional
<>  : Replace
|   : OR
  
# Options
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