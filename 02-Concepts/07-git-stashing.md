## Stashing

The stash allows changes to be saved without committing broken or untested 
code before switching to another branch.

-------------------------------------------------------------------------------
### Location
The stash is a file in the ***.git/refs*** directory. It contains a
reference to a temporary commit object reflecting the changes made to the 
work project.

```shell
$ type .git/refs/stash
095ad9c4de6932e47f2e59ea7c1e554274a52a37
```

-------------------------------------------------------------------------------
### Concept
The stash is a sequence of blob, tree and commit objects. When the stash 
command is applied, the following steps take place:

1. A blob object is created for each of changed file 
   - Tracked files
   - Untracked files (with the -u option)
   - Ignored files (with the -a option)
2. A tree object is created for each blob object from (1)
3. A commit object is created for changes above (stash)
4. A commit object is created for the index file
5. A commit object is created for the untracked files (-u option)
6. A commit object is created for the ignored files (-a option)

