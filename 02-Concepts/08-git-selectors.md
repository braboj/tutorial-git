> TODO:
> https://git-scm.com/book/en/v2/Git-Tools-Revision-Selection
> Best explained with an image
> 

## Selectors
Selectors are special type of operators used to select specific commits from 
the commit history. The selection can then be used to either move the HEAD 
back in history or to filter out specific commits.

### Select parent

![Git Selectors](../Assets/images/git-selectors.png)

#### ~
The tilde operator is used to move vertically in a linear commit history. 
This operator selects follows always the path of the first parent. In the 
diagram above this would be C1, C2, C4, C5 and C6.

Example:
```shell
$ git checkout HEAD~1   # Move HEAD to the parent (mother)
$ git checkout HEAD~2   # Move HEAD to the grandparent (grandmother)
```

#### ^
The caret operator is useful to move horizontally in a non-linear commit 
history. For example in the diagram above C3, C4, 

### Select range

#### ..
#### ...
git log --left-right master...experiment


^   : first parent (father)
^2  : second parent (mother)
^n  : n-th parent

~   : first parent (father)
~2  : first parent of parent (grandfather) 


, .., ..., @{}