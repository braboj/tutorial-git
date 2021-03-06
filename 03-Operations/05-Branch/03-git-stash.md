[**Up**](../05-Branch/branch.md) |
[**Help**](../01-Help/help.md) |
[**Create**](../02-Create/create.md) |
[**Configure**](../03-Configure/configure.md) |
[**Track**](../04-Track/track.md) |
[**Branch**](../05-Branch/branch.md) |
[**Sync**](../06-Sync/sync.md) |
[**Revert**](../07-Revert/revert.md) |
[**Inspect**](../08-Inspect/inspect.md)

-------------------------------------------------------------------------------
### git stash

Save temporarily the changes of a branch. This command is useful when the 
branch is not yet ready to be committed before switching to another branch. 

***Notes***

- Only indexed files are stashed by default
- LIFO (Last In First Out)
- At least one branch is present

-------------------------------------------------------------------------------
### Syntax
```
# Sub-commands
-------------------------------------------------------------------------------
$ git stash push <options>      # Add to stash
$ git stash pop                 # Remove from stash and apply
$ git stash apply               # Apply from stash                       
$ git stash drop                # Remove an element from stash
$ git stash clear               # Remove all stash entries

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR
  
# Options
-------------------------------------------------------------------------------
-a (--all)        : Stash also untracked and ignored files
-u (--untracked)  : Stash also untracked files
-m (--message)    : Add context to stash entry
```

-------------------------------------------------------------------------------
### Examples
```shell
# Stash changes on the main branch
$ echo main >> main
$ git add .
$ git stash push
$ git stash list
stash@{0}: WIP on main: c05a558 1

# Stash changes on the test branch
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

# Drop the last element in the stash without applying it
$ git stash drop

```

