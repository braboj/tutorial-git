## Git Operations Overview

![Git Dataflow](../Assets/images/git-ops-overview.png)

-------------------------------------------------------------------------------
### 1. Help
Get help about any given command.

```shell
$ git help
$ git help --guides
$ git help --config
```
-------------------------------------------------------------------------------
### 2. Create
Create a local or remote repository.

```shell
$ git clone https://github.com/user/demo.git
```
-------------------------------------------------------------------------------
### 3. Config
Configure the local repository.

```shell
$ git config --global user.email "user@mail.com"
```

-------------------------------------------------------------------------------
### 4. Track
Save, track and label changes.

```shell
$ echo 123 > README.md
$ git add *
$ git status
$ git commit -m 'Commit message'
$ git status
$ git tag V1.0
$ git tag
$ git log
```

-------------------------------------------------------------------------------
### 5. Branch
Branch, switch and merge branches.

```shell
$ git branch test_branch
$ git branch
$ git switch test_branch
$ git branch

$ echo 3 >> README.md
$ git switch main
$ git stash
$ git stash list
$ git switch main
$ git switch test_branch
$ git stash pop

$ git add *
$ git commit -m 'File changed in branch'
$ git switch main
$ git merge test_branch

$ git checkout V1.0
$ git status
$ git switch main
```

-------------------------------------------------------------------------------
### 6. Sync
Collaborate with other developers.

```shell
$ git push
$ git push origin test_branch

$ git pull
$ git pull origin test_branch
```

-------------------------------------------------------------------------------
### 7. Revert
Revert changes to the project files using the index or the local commit history.

```shell
$ del README.md
$ git status
$ git restore
$ git status
$ echo ABCD > README.md
$ git restore --staged
$ git status
```
-------------------------------------------------------------------------------
### 8. Inspect
Inspect the commit history, check the author of the modifications, get the 
repository status and other operations.

-------------------------------------------------------------------------------
### 9. Rewrite
Delete, modify or filter out parts of the commit history.

-------------------------------------------------------------------------------
### 10. Automate
Use advanced techniques to automate some of the git operations.

