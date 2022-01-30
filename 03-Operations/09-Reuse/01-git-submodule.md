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
--branch            : Branch
--init              : Initialize submodule
--cached            : Show index entries
--jobs <n>          : Number of threads to use
--recursive         : Recursive search for nested submodules
--force             : Force operation despite warnings 
--all               : Peform on all submodules
```
-------------------------------------------------------------------------------
### Examples

> ##### Add a submodule using the default branch
> ```shell
> $ git submodule add https://github.com/braboj/demo
> ```

-------------------------------------------------------------------------------
> ##### Add a submodule using a specific branch
> ```shell
> $ git submodule add --branch main https://github.com/braboj/demo
> ```
-------------------------------------------------------------------------------
> ##### Clone a repository having submodules
> ```shell
> $ git clone --recurse-submodules https://github.com/braboj/demo
> ```

-------------------------------------------------------------------------------
> ##### Configure git status to show summary of submodule changes
> ```shell
> $ git config --global status.submoduleSummary true
> ```

-------------------------------------------------------------------------------
> ##### Checkout to a tag or commit
> ```shell
> $ cd demo
> $ git checkout V1.0.0
> $ git checkout 12345
> ```

-------------------------------------------------------------------------------
> ##### Remove submodule
> ```shell
> $ git submodule deinit -f demo
> $ rm -force -recurse .git/modules/demo
> $ git rm -f demo
> $ git rm -f .gitmodules
> ```

-------------------------------------------------------------------------------
> ##### Update submodule
> ```shell
> $ git submodule update --remote demo
> ```