## git pull
Apply changes from a remote repository into the current branch. Combines git 
fetch and git merge.

-------------------------------------------------------------------------------
### Syntax
```shell
$ git pull <remote repo> <branch>

# Legend
[]  : Optional
<>  : Replace
|   : OR
```

-------------------------------------------------------------------------------
### Examples
```shell
# Get the history of the default remote repo
$ git pull

# Get the commit history and branches of the remote repo
$ git pull origin test

# Get the history of a specific branch of the remote repo 
$ git pull origin test
```