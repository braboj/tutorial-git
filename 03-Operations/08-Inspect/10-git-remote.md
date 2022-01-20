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
### git remote

Show info about remote references.

-------------------------------------------------------------------------------
### Syntax
```
$ git remote [<options>]
$ git remote show [<remote reference>]

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR
  
# Options
-------------------------------------------------------------------------------
-v (--verbose)  : Enable or disable verbose information
```


-------------------------------------------------------------------------------
### Examples
```shell
# Show info about remote repository
$ git remote -v
origin  https://github.com/braboj/demo (fetch)
origin  https://github.com/braboj/demo (push)

# Show detailed info about remote repo with the name origin
$ git remote show origin  
* remote origin
  Fetch URL: https://github.com/braboj/demo
  Push  URL: https://github.com/braboj/demo
  HEAD branch: main
  Remote branch:
    main tracked
  Local branch configured for 'git pull':
    main merges with remote main
  Local ref configured for 'git push':
    main pushes to main (fast-forwardable)
```
