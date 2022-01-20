## git push
________________________________________________________________________________
[**Content**](../../README.md) |
[**Intro**](../../01-Introduction/introduction.md) |
[**Concepts**](../../02-Concepts/concepts.md) |
[**Operations**](../../03-Operations/operations.md) |
[**Dictionary**](../../04-Appendix/dictionary.md)
________________________________________________________________________________

Copies the local history to the remote repo. The default remote repository 
is ***origin***.

-------------------------------------------------------------------------------
### Syntax
```
$ git push <remote> <branch> <options>

# Legend
[]  : Optional
<>  : Replace
|   : OR
  
# Options
-d (--delete) : Delete a reference on the remote repo
--tags        : Push commit history, branches and tags
--force       : Force update of the remote repo (caution!!!)
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

# Delete a tag on a remote repository
$git push --delete origin V1.0.0

# Delete all tags with PowerShell
$ git tag | foreach-object -process { git push origin -d $_ }
```