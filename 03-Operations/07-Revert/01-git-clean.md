## git clean
Remove untracked files from the working tree.

-------------------------------------------------------------------------------
### Syntax
```shell
$ git clean <options> <pathspec>

# Legend
[]  : Optional
<>  : Replace
|   : OR
  
# Options
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