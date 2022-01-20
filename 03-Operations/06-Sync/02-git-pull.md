## git pull
________________________________________________________________________________
[**Content**](../../README.md) |
[**Intro**](../../01-Introduction/introduction.md) |
[**Concepts**](../../02-Concepts/concepts.md) |
[**Operations**](../../03-Operations/operations.md) |
[**Dictionary**](../../04-Appendix/dictionary.md)
________________________________________________________________________________

Apply changes from a remote repository into the current branch. Combines git 
fetch and git merge.

-------------------------------------------------------------------------------
### Syntax
```
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