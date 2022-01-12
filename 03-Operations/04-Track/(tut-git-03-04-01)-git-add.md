## git add

- Updates the index using the working tree
- Can be performed multiple times before a commit.
- Ignored files are not added by default

-------------------------------------------------------------------------------

### Syntax
```shell
# Options
#   -A (--all)          : Add all files in the working tree
#   -f (--force)        : Add ignored files
#   -i (--interactive)  : Interactive mode
#   -e (--edit)         : Compare working tree with index

$ git add <pathspec>     
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