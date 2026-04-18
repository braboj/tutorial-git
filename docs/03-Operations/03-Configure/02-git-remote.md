[**Up**](../03-Configure/configure.md) |
[**Help**](../01-Help/help.md) |
[**Create**](../02-Create/create.md) |
[**Configure**](../03-Configure/configure.md) |
[**Track**](../04-Track/track.md) |
[**Branch**](../05-Branch/branch.md) |
[**Sync**](../06-Sync/sync.md) |
[**Revert**](../07-Revert/revert.md) |
[**Inspect**](../08-Inspect/inspect.md)

-------------------------------------------------------------------------------
### git remote

Adds or removes references to remote repositories.

-------------------------------------------------------------------------------
### Syntax
```
# Adds a new reference to a remote repo
$ git remote add <alias> <remote-url>

# Adds or deletes a url from the reference 
$ git remote set-url <--add> | <--delete> <alias> <remote-url>

# Renames the reference to the remote repo
$ git remote rename <old name> <new name>

# Deletes the reference to the remote repo
$ git remote remove <name>

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR
```

-------------------------------------------------------------------------------
### Examples
```shell
# Remove the remote reference from the cloning process 
git remote remove origin

# Add anew the reference origin
git remote add origin https://github.com/braboj/demo.git

# Add a new remote repo for pushing
git remote set-url --add origin https://gitlab.com/braboj/demo.git

# Remove a remote repo for pushing
git remote set-url --delete https://gitlab.com/braboj/demo.git
```

