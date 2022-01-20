## git clone
________________________________________________________________________________
[**Content**](../../README.md) |
[**Intro**](../../01-Introduction/introduction.md) |
[**Concepts**](../../02-Concepts/concepts.md) |
[**Operations**](../../03-Operations/operations.md) |
[**Dictionary**](../../04-Appendix/dictionary.md)
________________________________________________________________________________

Copies an existing repository on the local machine. The cloning process 
supports several protocols such as Git, HTTP and HTTPS.

-------------------------------------------------------------------------------
### Syntax
```
$ git clone --bare <repo-url>   # Copy repo as bare
$ git clone <repo-url>          # Copy repo and create worktree

# Legend
[]  : Optional
<>  : Replace
|   : OR
```

-------------------------------------------------------------------------------
### Examples
```shell
$ git clone --bare <https://github.com/user/project.git>
$ cd project.git
$ dir

$ git clone <https://github.com/user/project.git>
$ cd project
$ dir
```