### 1. Create a new repository
No objects, no refs/heads, no logs

### 2. Add a new file to the index
Each change and add will generate a bloc object
git ls-files --stage

### 3. Commit new file
The commit will create a commit object and a tree object.
The refs/heads will be initialized
 
git log
git cat-file -p <hash-code>

### 4. Ammend the commit
A new commit object is created and the main branch points now to this new 
commit. The old commit object is not deleted

### 5. Detach HEAD and move around
Use checkout to move HEAD to any commit desired, detached HEAD. Use switch
to restore HEAD to point to a branch.




