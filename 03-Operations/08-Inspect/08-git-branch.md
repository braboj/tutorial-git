## git branch
________________________________________________________________________________
[**Content**](../../README.md) |
[**Intro**](../../01-Introduction/introduction.md) |
[**Concepts**](../../02-Concepts/concepts.md) |
[**Operations**](../../03-Operations/operations.md) |
[**Dictionary**](../../04-Appendix/dictionary.md)
________________________________________________________________________________

Use git branch to inspect the branches of the local and remote repos.

-------------------------------------------------------------------------------
### Syntax
```
$ git branch [<options>]

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR

# Options
-------------------------------------------------------------------------------
-a (--all)        # Show all branches
-r (--remote)     # Show remote branches
-v (--verbose)    # Verbose information switch
```

-------------------------------------------------------------------------------
### Examples
```shell
# Show verbose information about local and remote branches
$ git branch -a
* main                3630e70 (Inspect) - Update git ls-file
  remotes/origin/HEAD -> origin/main
  remotes/origin/main 3630e70 (Inspect) - Update git ls-file
```