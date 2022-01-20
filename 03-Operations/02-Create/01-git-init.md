[**Up**](../02-Create/create.md) |
[**Help**](../01-Help/help.md) |
[**Create**](../02-Create/create.md) |
[**Configure**](../03-Configure/configure.md) |
[**Track**](../04-Track/track.md) |
[**Branch**](../05-Branch/branch.md) |
[**Sync**](../06-Sync/sync.md) |
[**Revert**](../07-Revert/revert.md) |
[**Inspect**](../08-Inspect/inspect.md)

-------------------------------------------------------------------------------

### git init

Creates a new repository in a given project folder. 

-------------------------------------------------------------------------------
### Syntax
```
$ git init <repo> --bare        # Create a repo folder
$ git init <project>            # Create .git in the project folder

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR
```

-------------------------------------------------------------------------------
### Examples
```shell
$ git init --bare project.git   # Bare folder names by convention
$ cd project.git                # Folder is visible

$ git init project              # Create .git in the project folder
$ cd project/.git               # Folder is hidden

$ git init                      # Create .git in the current folder
$ cd .git
```