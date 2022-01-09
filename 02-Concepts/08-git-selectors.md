> TODO:
> https://git-scm.com/book/en/v2/Git-Tools-Revision-Selection
> Best explained with an image
> 

## Selectors
Selectors are special type of operators used to select specific commits from 
the commit history. The selection can then be used to either move the HEAD 
back in history or to filter out specific commits.

### Ancestry selection

![Git Selectors](../Assets/images/git-selectors.png)

#### ~
The tilde operator is used to move vertically in a linear commit history. 
This operator selects follows always the path of the first parent. In the 
diagram above this would be C1, C2, C4, C5 and C6. Formally it references 
the n-th first parent.

#### ^
The caret operator is useful to move horizontally in a non-linear commit 
history. For example in the diagram above C3, C4 and C5 are the parents of 
C6. The commit C3 as first parent can be referenceed by ^1, C4 as second 
parent by ^2 and C5 as third parent by ^3. Formally the caret 
operator references the n-th parent.

### Commit ranges


#### ..
The double dot operator resolves a range of commits that are reachable from 
one commit but aren’t reachable from another.

#### ...
git log --left-right master...experiment


^   : first parent (father)
^2  : second parent (mother)
^n  : n-th parent

~   : first parent (father)
~2  : first parent of parent (grandfather) 


, .., ..., @{}