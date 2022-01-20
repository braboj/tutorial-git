## git branch
________________________________________________________________________________
[**Content**](../../README.md) |
[**Intro**](../../01-Introduction/introduction.md) |
[**Concepts**](../../02-Concepts/concepts.md) |
[**Operations**](../../03-Operations/operations.md) |
[**Dictionary**](../../04-Appendix/dictionary.md)
________________________________________________________________________________

Use git branch to inspect the branches of the local and remote repos.

-------------------------------------------------------------------------------
### Syntax
```
$ git cat-file [<options>] object

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR

# Options
-------------------------------------------------------------------------------
-s  : Show object size
-t  : Show object type 
-p  : Show object content 
```

-------------------------------------------------------------------------------
### Examples
```shell
# Get object type
$ git cat-file -t HEAD
commit

# Get object size
$ git cat-file -s HEAD
276

# Dump object
$ git cat-file -p HEAD
tree dcaa11df47f9c64407f91f4f98c84fed45d6ed94                               
parent f8960d6bcae54f38c9bbf71c9e2d1efec5a9d50d                             
author braboj <66906831+braboj@users.noreply.github.com> 1642163242 +0200   
committer braboj <66906831+braboj@users.noreply.github.com> 1642163242 +0200

(Inspect) - Update git branch

# Define shortcut for object type
$ git config --global alias.dump cat-file -t
$ git type HEAD
commit
```