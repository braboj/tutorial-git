## git clean
Remove untracked files from the working tree.

-------------------------------------------------------------------------------
### Syntax
```shell
# Options
# -d            : Recurse directories
# -e <pattern>  : Exclude files
# -n            : Dry run  
# -x            : Remove ignored files, except those with -e
# -X            : Remove ignored files only

$ git clean <options> <pathspec> 
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