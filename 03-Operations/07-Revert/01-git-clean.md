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
### git clean

Remove untracked files from the working tree.

-------------------------------------------------------------------------------
### Syntax
```
$ git clean <options> <pathspec>

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR
  
# Options
-------------------------------------------------------------------------------
-d            : Recurse directories
-e <pattern>  : Exclude files
-n            : Dry run  
-x            : Remove ignored files, except those with -e
-X            : Remove ignored files only 
```

-------------------------------------------------------------------------------
### Examples
```shell
# Remove all untracked files in the current directory
$ git clean

# Remove all untracked files recursively
$ git clean -d 

# Remove untracked and ignored files, except *.md
$ git clean -e *.md -x
```