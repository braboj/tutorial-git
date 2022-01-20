## git add

[**Content**](../../README.md) |
[**Intro**](../../01-Introduction/introduction.md) |
[**Concepts**](../../02-Concepts/concepts.md) |
[**Operations**](../../03-Operations/operations.md) |
[**Dictionary**](../../04-Appendix/dictionary.md)
________________________________________________________________________________

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
