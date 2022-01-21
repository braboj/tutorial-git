[**Up**](concepts.md) |
[**Content**](../README.md) |
[**Intro**](../01-Introduction/introduction.md) |
[**Concepts**](../02-Concepts/concepts.md) |
[**Operations**](../03-Operations/operations.md) |
[**Dictionary**](../04-Appendix/dictionary.md)
-------------------------------------------------------------------------------

## Merging

Merging is a process of combining changes from different branches. Usually 
this is required when people are working in parallel on the same source code.
The file versions in each branch are compared and analysed line by line.

![Merge Fast Forward](../Assets/images/git-merge-concept.png)

-------------------------------------------------------------------------------
### Fast-forward
When only one of the branches changes the file, then git will just move the 
branch tip of the target branch to match the latest revision of the file.

![Merge Fast Forward](../Assets/images/git-merge-fast-forward.png)

-------------------------------------------------------------------------------
### Rebase
The rebasing command will copy commits from the current branch and place 
them on top of another branch. Rebasing **MUST** be used only on the local 
history as it can break down the development process.

![Merge Fast Forward](../Assets/images/git-merge-rebase.png)

-------------------------------------------------------------------------------
### 3-Way merge

When two branches have changes in the same file, then git will analyse the 
files to determine how to combine the differences. The 3-way merge algorithm 
uses a common ancestor and the two branch tips to perform the analysis.

It looks for sections which are the same in two of the three revisions. This 
indicates that the third revision is unique and the section will be added to 
the merge result. Sections that are different in all three revisions are 
marked as a conflict situation and left for the user to resolve.

![Merge Fast Forward](../Assets/images/git-merge-3-way-concept.png)



-------------------------------------------------------------------------------
### Other merge strategies

 - Recursive 3-Way on two branches
 - Subtree on two branches
 - Octopus on more than two branches
 - Ours on more than two branches
 

