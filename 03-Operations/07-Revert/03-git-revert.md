## git revert
Revert a previous commit by making a new one. This command is useful for 
reverting changes in remote repositories.

-------------------------------------------------------------------------------
### Syntax
```
$ git revert <commit to revert> <options>

# Legend
  []  : Optional
  <>  : Replace
  |   : OR
  
# Options
-n (--no-commit)          : Update only the worktree and the index
-m (--mainline) <parent>  : Parent number for reverting merges
```

-------------------------------------------------------------------------------
### Examples
```shell
# Revert the parent commit
$ git revert HEAD~1

# Revert without committing
$ git revert HEAD~1 -n
```
