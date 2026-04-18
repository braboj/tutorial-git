[**Up**](../04-Track/track.md) |
[**Help**](../01-Help/help.md) |
[**Create**](../02-Create/create.md) |
[**Configure**](../03-Configure/configure.md) |
[**Track**](../04-Track/track.md) |
[**Branch**](../05-Branch/branch.md) |
[**Sync**](../06-Sync/sync.md) |
[**Revert**](../07-Revert/revert.md) |
[**Inspect**](../08-Inspect/inspect.md)

-------------------------------------------------------------------------------
### git mv

Move or rename a file or a directory and stage the changes.

-------------------------------------------------------------------------------
### Syntax
```
$ git mv [<options>] <old pathspec> <new pathspec>

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR
  
# Options
-------------------------------------------------------------------------------
-f (--force)    : Force renaming or moving of a file even if the target exists
-v (--verbose)  : Report the names of files as they are moved.
```

-------------------------------------------------------------------------------
### Examples
```shell
$ mkdir test1
$ echo 1 > ./test1/test
$ git mv ./test1 ./test2
```
