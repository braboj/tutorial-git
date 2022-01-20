## Refspec

[**Content**](../README.md) |
[**Intro**](../01-Introduction/introduction.md) |
[**Concepts**](../02-Concepts/concepts.md) |
[**Operations**](../03-Operations/operations.md) |
[**Dictionary**](../04-Appendix/dictionary.md)
________________________________________________________________________________


The refspec is a special syntax used by git to map remote branches to the 
local repository. 

-------------------------------------------------------------------------------
### Syntax
```
[+]＜src＞:＜dst＞  

+   : Force update of branch tip (fast forward)
src : Source location (remote branch)
dst : Destination location (local branch)
	 
```

-------------------------------------------------------------------------------
### Branch mapping
Refspecs are usually found in the .git/config file after ***cloning*** or 
configuration with ***git remote***. 

```shell
Example:
$ git config --local --edit

...
[remote "origin"]

    # Repository link     
    url = https://github.com/braboj/tutorial-git.git
	
    # Mapping for the fetch command
    fetch = +refs/heads/*:refs/remotes/origin/*
	
    # Mapping for the push command
    push = refs/heads/main:refs/heads/main
```

In the example above the first refspec is **fetch** and it maps all remote 
branches from origin to the folder **refs/remotes/origin** in the local 
repository. The second refspec will map the main branch from the local repo 
to the main branch in the remote repo.

-------------------------------------------------------------------------------
### Creating remote branches
Local branches can also be used to create remote branchesusing ***git push*** 
and refspecs.

```shell
git push origin main:refs/heads/test_master
```

-------------------------------------------------------------------------------
### Deleting remote branches
Remote branches can be deleted by leaving source in the refspec empty.

```shell
git push origin :refs/heads/feature
```

-------------------------------------------------------------------------------
### Commands accepting refspecs

- git remote
- git fetch
- git pull
- git push
