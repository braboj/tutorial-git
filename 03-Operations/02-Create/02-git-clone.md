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
### git clone

Copies an existing repository on the local machine. The cloning process 
supports several protocols such as Git, HTTP and HTTPS.

-------------------------------------------------------------------------------
### Syntax
```
$ git clone --bare <repo-url>   # Copy repo as bare
$ git clone <repo-url>          # Copy repo and create worktree

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR
```

-------------------------------------------------------------------------------
### Examples
```shell
$ git clone --bare <https://github.com/user/project.git>
$ cd project.git
$ dir

$ git clone <https://github.com/user/project.git>
$ cd project
$ dir
```