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
### git reflog

Show the history of operations on references such as branches, tags and 
others. This is useful because some references such as the HEAD or the tip 
of the branch are updated automatically after a commit.

-------------------------------------------------------------------------------
### Syntax
```
$ git reflog [<reflog selector>]

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR

# Filtering options
-------------------------------------------------------------------------------
-<num>                  : Show the last <num> entries
--branches=<pattern>    : Show branches
--merges | --no-merges  : Show all merge commits
--tags=<pattern>        : Show tags
--remotes=<pattern>     : Show remotes  
--after=<date>          : Show all logs after date
--before=<date>         : Show all logs before date
--author=<pattern>      : Show all logs by author
--grep=<pattern>        : Show all logs matching pattern
-L <pattern>:<file>     : Show all logs for a pattern in file
-L <start, end>:<file>  : Show all logs for lines <stat> to <end  

# Formatting options
-------------------------------------------------------------------------------
--pretty=<format>         : oneline, medium, full, fuller, reference
--pretty=format:<string>  : Custom format string
--abbrev-commit           : Reduce hash code to 7 digits
--oneline                 : Shorthand for pretty=oneline --abbrev-comit 
--parents                 : Show the parents 
--children                : Show the children

# Placeholders for format string
-------------------------------------------------------------------------------
%h, %H  : Commit hash
%t, %H  : Tree hash
%p, %P  : Parent hash
%a<mod> : Author (check git help log)
%c<mod> : Commiter (check git help log)  
```

-------------------------------------------------------------------------------
### Examples
```shell
git reflog stash
git reflog main
git reflog "HEAD@{1}"
git reflog "HEAD@{yesterday}"
git reflog "HEAD@{1.month.ago}"
```