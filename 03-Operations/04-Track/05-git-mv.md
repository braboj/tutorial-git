## git mv
Move or rename a file or a directory and stage the changes.

-------------------------------------------------------------------------------
### Syntax
```shell
$ git mv [<options>] <old pathspec> <new pathspec>

# Legend
[]  : Optional
<>  : Replace
|   : OR
  
# Options
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
