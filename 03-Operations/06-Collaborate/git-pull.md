## git pull
Apply changes from a remote repository into the current branch. Combines git 
fetch and git merge.

-------------------------------------------------------------------------------
### Syntax
```shell
$ git pull                         # Fetch origin
$ git pull <remote repo>           # Fetch remote repo
$ git pull <remote repo> <branch>  # Fetch a branch of the remote repo
```

-------------------------------------------------------------------------------
### Examples
```shell
# Get the history of the remote repo and merge
$ git pull

# 
$ git pull origin test

```