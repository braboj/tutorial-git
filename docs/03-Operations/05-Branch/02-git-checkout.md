[**Up**](../05-Branch/branch.md) |
[**Help**](../01-Help/help.md) |
[**Create**](../02-Create/create.md) |
[**Configure**](../03-Configure/configure.md) |
[**Track**](../04-Track/track.md) |
[**Branch**](../05-Branch/branch.md) |
[**Sync**](../06-Sync/sync.md) |
[**Revert**](../07-Revert/revert.md) |
[**Inspect**](../08-Inspect/inspect.md)

-------------------------------------------------------------------------------
### git checkout

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