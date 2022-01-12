## git clone
Copies an existing repository on the local machine. The cloning process 
supports several protocols such as Git, HTTP and HTTPS.

-------------------------------------------------------------------------------
### Syntax
```shell
$ git clone --bare <repo-url>   # Copy repo as bare
$ git clone <repo-url>          # Copy repo and create worktree
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