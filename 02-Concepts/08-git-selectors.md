> TODO:
> https://git-scm.com/book/en/v2/Git-Tools-Revision-Selection
> Best explained with an image
> 

## Selectors
Selectors are special type of operators used to select specific commits from 
the commit history. The selection can then be used to either move the HEAD 
back in history or to filter out specific commits.

-------------------------------------------------------------------------------
### Ancestry selectors

#### ~
The tilde operator is used to move vertically in a linear commit history. 
This operator follows always the path of the first parent. In the 
diagram above this would be C1, C2, C4, C5 and C6. The other commits from 
the diagram are not accessible using this operator.

![Git Selectors](../Assets/images/git-selectors-tilde.png)

#### ^
The caret operator is useful to move horizontally in a non-linear commit 
history. For example in the diagram above C3, C4 and C5 are the parents of 
C6. The commit C3 as first parent can be referenceed by ^1, C4 as second 
parent by ^2 and C5 as third parent by ^3. 

![Git Selectors](../Assets/images/git-selectors-caret.png)


-------------------------------------------------------------------------------
### Range selectors

#### ..
The double dot operator is the difference between two sets A and B. If A 
has {1, 2, 3} and B has {2, 3, 4} then the result of the double dot operator 
will be {4}. The double dot operator can be replaced with ^ or --not for 
queries requiring more than 2 branches. 

```shell
$ git log refA..refB          # Reachable from B but not from A
$ git log refB ^refA          # Reachable from B but not from A
$ git log refB --not refA     # Reachable from B but not from A
```



#### ...
The triple dot operator is the symmetric difference between two sets A and B.
If A has {1, 2, 3} and B has {2, 3, 4} then the result of the triple dot 
operator will be {1, 4}. The symmetric difference returns elements unique to 
each set.

```shell
git log --left-right master...experiment
```

-------------------------------------------------------------------------------
### Reflog selectors
The @ operator is used to browse the local reflog history relative to a 
well-defined reference such as HEAD or a branch.

```shell
$ git log "HEAD@{1}"
$ git log "HEAD@{yesterday}"
$ git log "HEAD@{2.months.ago}"
```
