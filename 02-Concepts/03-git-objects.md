## Objects

> TODO: Ask for permission to use this image or create a new one

![Git Objects](../Assets/images/git-objects-model.png)

Git uses the SHA-1 hash of the file content to create references to commit, 
trees and blobs.

-------------------------------------------------------------------------------
### Commit object

Store the metadata about a commit, such as the parent, the author, timestamps
and references to the file tree of this commit.

-------------------------------------------------------------------------------
### Tree object

A collection of references to either child trees or blob objects. Trees in 
git represent directories of the operating system.

-------------------------------------------------------------------------------
### Blob objects

Binary large objects or BLOBS are compressed files and the end of the tree
structure. They are the snapshots of a given file after a change has been 
added to the index.

-------------------------------------------------------------------------------
### Practice

1. Create a git repo
2. Check if the .git folder exists
3. Create a new file
4. Add the file to the index
5. Check if a blob object was created
6. Commit the file
7. Check if a tree and commit objects were created
8. Make a diagram of the object tree
