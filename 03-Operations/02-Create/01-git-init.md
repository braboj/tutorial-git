## git init

[**Content**](../../README.md) |
[**Intro**](../../01-Introduction/introduction.md) |
[**Concepts**](../../02-Concepts/concepts.md) |
[**Operations**](../../03-Operations/operations.md) |
[**Dictionary**](../../04-Appendix/dictionary.md)
________________________________________________________________________________

Creates a new repository in a given project folder. 

-------------------------------------------------------------------------------
### Syntax
```
$ git init <repo> --bare        # Create a repo folder
$ git init <project>            # Create .git in the project folder

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR
```

-------------------------------------------------------------------------------
### Examples
```shell
$ git init --bare project.git   # Bare folder names by convention
$ cd project.git                # Folder is visible

$ git init project              # Create .git in the project folder
$ cd project/.git               # Folder is hidden

$ git init                      # Create .git in the current folder
$ cd .git
```