## git revert

[**Content**](../../README.md) |
[**Intro**](../../01-Introduction/introduction.md) |
[**Concepts**](../../02-Concepts/concepts.md) |
[**Operations**](../../03-Operations/operations.md) |
[**Dictionary**](../../04-Appendix/dictionary.md)
________________________________________________________________________________

Revert a previous commit by making a new one. This command is useful for 
reverting changes in remote repositories.

-------------------------------------------------------------------------------
### Syntax
```
$ git revert <commit to revert> <options>

# Legend
-------------------------------------------------------------------------------
  []  : Optional
  <>  : Replace
  |   : OR
  
# Options
-------------------------------------------------------------------------------
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
