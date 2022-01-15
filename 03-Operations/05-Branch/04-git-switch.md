## git switch
Move the HEAD to a new location in the commit history. The new location can
be either a new branch, tag or simply a commit object.

-------------------------------------------------------------------------------
### Syntax
```
$ git switch <branch>
$ git switch --detach <commit object>

# Legend
[]  : Optional
<>  : Replace
|   : OR
```

-------------------------------------------------------------------------------
### Examples
```shell
# Detach HEAD c5c3522
$ git switch --detach c5c3522

# Create a new tag at this location
$ git tag V1

# Create a new branch at this location
$ git branch test

# Re-attach the HEAD
$ git switch test
```