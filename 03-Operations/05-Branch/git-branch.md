## git branch
Creates, removes, copies or tracks branches. 

-------------------------------------------------------------------------------
### Syntax

```shell
# Options
# -c (--copy)           : Copy branch
# -d (--delete)         : Delete branch
# -m (--move)           : Move branch
# -u (--set-upstream)   : Start tracking of a remote branch
# -f (--force)          : Force delete, move, copy

$ git branch
$ git branch <new branch>
$ git branch <any branch> -d
$ git branch <this branch> <-c, -m, -u> <other branch> 
```

-------------------------------------------------------------------------------
### Examples

```shell
$ git branch                      # Show branches and HEAD status
$ git branch test                 # Create new branch test
$ git branch test -m demo         # Move test to demo
$ git branch demo -c test         # Copy demo to test
$ git branch demo -d              # Delete branch demo
$ git branch test -u origin/test  # Track remote branch origin/test
```
    