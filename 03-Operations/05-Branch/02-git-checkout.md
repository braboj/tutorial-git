## git checkout
________________________________________________________________________________
[**Content**](../../README.md) |
[**Intro**](../../01-Introduction/introduction.md) |
[**Concepts**](../../02-Concepts/concepts.md) |
[**Operations**](../../03-Operations/operations.md) |
[**Dictionary**](../../04-Appendix/dictionary.md)
________________________________________________________________________________

Move the HEAD to a new location in the commit history. The new location can 
be either a new branch, tag or simply a commit object. 

-------------------------------------------------------------------------------
### Syntax
```
$ git checkout <branch>
$ git checkout <commit object>

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR
```

-------------------------------------------------------------------------------
### Examples
```shell
# Detach HEAD
$ git checkout c5c3522

# Create a new tag at this location
$ git tag V1.0.0.0

# Create a new branch at this location
$ git branch test

# Re-attach the HEAD
$ git checkout test
```