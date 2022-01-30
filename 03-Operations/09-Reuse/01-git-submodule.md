[**Up**](../08-Inspect/inspect.md) |
[**Help**](../01-Help/help.md) |
[**Create**](../02-Create/create.md) |
[**Configure**](../03-Configure/configure.md) |
[**Track**](../04-Track/track.md) |
[**Branch**](../05-Branch/branch.md) |
[**Sync**](../06-Sync/sync.md) |
[**Revert**](../07-Revert/revert.md) |
[**Inspect**](../08-Inspect/inspect.md)

-------------------------------------------------------------------------------
### git submodule

Create a link to an external repository. The link can be either to the tip 
of a branch or to a specific revision of the submodule. 

-------------------------------------------------------------------------------
### Syntax
```
git submodule [<options>]
git submodule add [<options>] <repository> [<path>]
git submodule status [--cached] [--recursive] [<path>..]
git submodule init [<path>..]
git submodule deinit [-f|--force] (--all|[--] <path>..)
git submodule update [<options>] [--] [<path>..]
git submodule set-branch [<options>] [--] <path>
git submodule set-url [--] <path> <newurl>
git submodule summary [<options>] [--] [<path>..]
git submodule foreach [--recursive] <command>
git submodule sync [--recursive] [--] [<path>..]
git submodule absorbgitdirs [--] [<path>..]

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR
..  : Range

# Options
-------------------------------------------------------------------------------
--                  : Separator
--quiet             :
--cached            :
--jobs <n>          :
--recursive         :
--force             :
--all               :

```

-------------------------------------------------------------------------------
### Examples
```shell
$ git submodule add https://github.com/braboj/tutorial-git

```