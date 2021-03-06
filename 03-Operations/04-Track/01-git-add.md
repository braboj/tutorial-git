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
### git add

- Updates the index using the working tree
- Can be performed multiple times before a commit.
- Ignored files are not added by default

-------------------------------------------------------------------------------
### Syntax
```
$ git add <pathspec>     

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR
  
# Options
-------------------------------------------------------------------------------
-A (--all)          : Add all files in the working tree
-f (--force)        : Add ignored files
-i (--interactive)  : Interactive mode
-e (--edit)         : Compare working tree with index 
```

-------------------------------------------------------------------------------

### Examples
```shell
$ git add .               # add current directory
$ git add src/            # add src/ directory
$ git add README.md       # add only README.md
$ git add src/ include/   # adds both src/ and include
$ git add src/*.c         # adds all .c files in /src
$ git add '*.mp?'         # adds mp3 or mp4 files
$ git add '*.py[cod]'     # adds pyc, pyo, pyd files
```
