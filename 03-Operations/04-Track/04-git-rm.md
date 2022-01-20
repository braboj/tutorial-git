## git rm
________________________________________________________________________________
[**Content**](../../README.md) |
[**Intro**](../../01-Introduction/introduction.md) |
[**Concepts**](../../02-Concepts/concepts.md) |
[**Operations**](../../03-Operations/operations.md) |
[**Dictionary**](../../04-Appendix/dictionary.md)
________________________________________________________________________________

Remove files from the index and the working directory and stage them for
commit. This command is useful only when the files are part of the commit
history.

-------------------------------------------------------------------------------
### Syntax
```
$ git rm <pathspec> <options>

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR
  
# Options
-------------------------------------------------------------------------------
--cached    : Remove from the index but keep the local copy
-rm         : Recursive
```

-------------------------------------------------------------------------------
### Examples
```shell
# Create commit history
$ mkdir test
$ mkdir ./test/t2
$ echo t1 > ./test/t1.txt
$ echo t2 > ./test/t2/t2.txt
$ echo test > README.md
$ git add .
$ git commit -m 'test'

# Remove all files from a directory recursively
$ git rm ./test -r
rm 'test/t1.txt'   
rm 'test/t2/t2.txt'

# Check the status
$ git status
On branch main                                     
Changes to be committed:                           
  (use "git restore --staged <file>..." to unstage)
        deleted:    test/t1.txt                    
        deleted:    test/t2/t2.txt
              
# Remove file from index but keep the workfile
$ git rm README.md --cached
rm 'README.md'

# Check the status
$ git status
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        deleted:    README.md
        deleted:    test/t1.txt
        deleted:    test/t2/t2.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        README.md
```
