## History navigation

The references model allows git to navigate between branches and commits by 
just replacing the referenced value. Git offers many commands for navigation,
depending on the context. Some of them move the HEAD, others both the branch 
tip and the HEAD. 

![Branch navigation](../Assets/images/git-branch-navigation.png)

---
### checkout
Checkout will detach the HEAD and move it to a new position. Useful to create
tags or new branches from revisions.

---
### reset
Moves the HEAD and the current branch tip to a new position. Useful to revert
the state of the project.

---
### branch
Creates a new branch or moves the branch to a new position. If the HEAD is
detached then only the branch tip is updated.

---
### switch
Moves the HEAD to a new branch tip.
