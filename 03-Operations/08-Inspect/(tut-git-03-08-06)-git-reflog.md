## git reflog
Show the history of operations on references such as branches, tags and 
others. This is useful because some references such as the HEAD or the tip 
of the branch are updated automatically after a commit.

-------------------------------------------------------------------------------
### Syntax
```shell
# Legend
    []  : Optional

# Options
    ... : See "git log"

$ git reflog [see reflog selector in chapter 'Concept']
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