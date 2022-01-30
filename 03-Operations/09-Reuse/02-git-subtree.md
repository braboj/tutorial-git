[**Up**](../09-Reuse/reuse.md) |
[**Help**](../01-Help/help.md) |
[**Create**](../02-Create/create.md) |
[**Configure**](../03-Configure/configure.md) |
[**Track**](../04-Track/track.md) |
[**Branch**](../05-Branch/branch.md) |
[**Sync**](../06-Sync/sync.md) |
[**Revert**](../07-Revert/revert.md) |
[**Inspect**](../08-Inspect/inspect.md)

-------------------------------------------------------------------------------
### git subtree

Performs a full copy of the target including files and history. The result 
is a transparent view of the local project with its dependencies as if it is 
one single project.

-------------------------------------------------------------------------------
### Syntax
```
git subtree [<options>] -P <prefix> add <local-commit>
git subtree [<options>] -P <prefix> add <repository> <remote-ref>
git subtree [<options>] -P <prefix> merge <local-commit>
git subtree [<options>] -P <prefix> split [<local-commit>]
git subtree [<options>] -P <prefix> pull <repository> <remote-ref>
git subtree [<options>] -P <prefix> push <repository> <refspec>

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR
  
# Options
-------------------------------------------------------------------------------
-q, --quiet  : Suppress unnecessary output messages on stderr.
-d, --debug  : Produce even more unnecessary output messages on stderr.
-P, --prefix : Specify the path in the repository to the subtree 
```

-------------------------------------------------------------------------------
### Examples
```shell
$ git status --short
$ git status --short --branch
$ git status --short --untracked --ignored
```