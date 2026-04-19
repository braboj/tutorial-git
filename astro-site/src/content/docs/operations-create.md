---
title: "Create"
section: "operations"
order: 3
subsection: "create"
subsectionOrder: 2
---

### git init

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

### git clone

Copies an existing repository on the local machine. The cloning process 
supports several protocols such as Git, HTTP and HTTPS.

-------------------------------------------------------------------------------
### Syntax
```
$ git clone --bare <repo-url>   # Copy repo as bare
$ git clone <repo-url>          # Copy repo and create worktree

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR
```

-------------------------------------------------------------------------------
### Examples
```shell
$ git clone --bare <https://github.com/braboj/demo.git>
$ cd demo.git
$ dir

$ git clone <https://github.com/demo/demo.git>
$ cd demo
$ dir
```
