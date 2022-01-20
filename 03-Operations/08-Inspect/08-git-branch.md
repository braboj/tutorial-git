[**Up**](../08-Inspect/inspect.md) |
[**Help**](../01-Help/help.md) |
[**Create**](../02-Create/create.md) |
[**Configure**](../03-Configure/configure.md) |
[**Track**](../04-Track/track.md) |
[**Branch**](../05-Branch/branch.md) |
[**Sync**](../06-Sync/sync.md) |
[**Revert**](../07-Revert/revert.md) |
[**Inspect**](../08-Inspect/inspect.md)

-------------------------------------------------------------------------------
### git branch

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