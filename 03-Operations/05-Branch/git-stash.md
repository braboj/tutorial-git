## git stash
Save temporarily the changes of a branch. This command is useful when the 
branch is not yet ready to be committed before switching to another branch. 

***Notes***

- LIFO (Last In First Out)
- At least one branch present



-------------------------------------------------------------------------------
### Syntax
```shell
$ git stash push          # Add to stash
$ git stash pop           # Remove from stash and apply
$ git stash apply         # Apply from stash                       
$ git stash drop          # Remove an element from stash
$ git stash clear         # Remove all stash entries
```

-------------------------------------------------------------------------------
### Examples
```shell
# Stash changes on the second branch
$ echo main >> main
$ git add .
$ git stash push
$ git stash list
stash@{0}: WIP on main: c05a558 1

# Stash changes on the first branch
$ git branch test
$ git switch test
$ echo test >> test
$ git add .
$ git stash push
$ git stash list
stash@{0}: WIP on test: c05a558 1
stash@{1}: WIP on main: c05a558 1

# Remove and apply the last change
$ git stash pop

# Drop the last element in the stash
$ git stash drop

```
