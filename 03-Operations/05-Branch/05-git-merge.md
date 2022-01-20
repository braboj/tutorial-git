## git merge
Combines the commit history of two branches and creates a new merge commit. 
The merge commit has two parents compared to a regular commit. 

Before merging ensure that:

1. The HEAD points to the receiving branch
2. The source branch has the latest commits

-------------------------------------------------------------------------------
### Syntax
```
$ git merge <branch>

# Legend
[]  : Optional
<>  : Replace
|   : OR
```

-------------------------------------------------------------------------------
### Examples
```shell
$ git switch main     # Switch to the receiving branch
$ git merge test      # Merge test with main
```