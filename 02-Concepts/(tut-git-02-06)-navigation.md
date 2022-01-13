## History navigation

Describe branches, how to move the HEAD with checkout and reset, how the 
history diverges, how remote and local branches are synchronized. Use 
graphics to explain the basic concepts, fewer words.

![Branch navigation](../Assets/images/git-branch-navigation.png)

-------------------------------------------------------------------------------
### Rewind
Move the HEAD and the branch tip to a previous revision.

```shell
$ git reset --hard 5
```

-------------------------------------------------------------------------------
### Fast-forward
Move the branch tip to HEAD if the current branch is ancestor of the target 
branch.

```shell
$ git rebase HEAD
```

-------------------------------------------------------------------------------
### Replay
Take commits from another branch and copy them to top of the target branch one 
by one.

```shell
$ git cherry-pick 1 2 3
```
