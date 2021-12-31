## git push
Copies the local history to the remote repo. The default remote repository 
is ***origin***.

-------------------------------------------------------------------------------
### Syntax
```shell
# Options
# --tags  : Push commit history, branches and tags

$ git push <remote> <branch> <options>
```

-------------------------------------------------------------------------------
### Examples
```shell
# Push commit history and branches
$ git push

# Push commit history, branches and tags
$ git push --tags

# Push to a specific remote repo
$ git push origin

# Push a specific branch to the remote repo
$ git push origin main
```