[**Up**](concepts.md) |
[**Content**](../README.md) |
[**Intro**](../01-Introduction/introduction.md) |
[**Concepts**](../02-Concepts/concepts.md) |
[**Operations**](../03-Operations/operations.md) |
[**Dictionary**](../04-Appendix/dictionary.md)
________________________________________________________________________________

## Stashing

The stash allows changes to be saved without committing broken or untested 
code before switching to another branch.

-------------------------------------------------------------------------------
### Location
The stash is a file in the ***.git/refs*** directory. It contains a
reference to a temporary commit object reflecting the changes made to the 
work project.

```shell
$ cat .git/refs/stash
095ad9c4de6932e47f2e59ea7c1e554274a52a37
```

-------------------------------------------------------------------------------
### Concept
The stash is a sequence of blob, tree and commit objects. When the stash 
command is applied, the following steps take place:

1. A blob object is created for each
   - Modified tracked file
   - Untracked file (with the -u option)
   - Ignored file (with the -a option)
2. A tree object is created for each blob object from (1)
3. A commit object is created for the tracked files
4. A commit object is created for the untracked files
5. A commit object is created representing the stashed changes

The last step creates a commit object with three parents: the original
revision, the revision of the tracked files and the revision of the 
untracked files.

```shell
PS C:\Workspace\demo\.git\objects\30> git cat-file e2ec -p
tree 4984c1da7bd1e1e5ad45660e0dc183be624de8e9
parent 1cb1d1549ceb4149dc5cc36e9ba3d06ca6f0bdc2 # Last revision
parent 595518729d768588acd2068dc70605a415af26f1 # Revision of tracked files
parent 48708dc0278f7a470b5adee6f3c0097fceaa2ca2 # Revision of untracked files
author Branimir Georgiev <braboj@gmail.com> 1641674534 +0200
committer Branimir Georgiev <braboj@gmail.com> 1641674534 +0200

WIP on main: 1cb1d15 init
```
When the stashed changes are restored, git will follow the parents of the 
stash commit to restore the files in the project folder. 
