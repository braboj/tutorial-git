## Object Model
________________________________________________________________________________

![Git Objects](../Assets/images/objects-example.png)

Git uses the SHA-1 hash of content to create references to commit, trees and
blobs.

### Commit object

Store the metadata about a commit, such as the parent, the author, timestamps
and references to the file tree of this commit.

### Tree object

A collection of references to either child trees or blob objects.

### Blob objects

Binary large objects or BLOBS are compressed files and the end of the tree
structure.

### Practice

1. Create a bare repository
2. Clone the bare repository
3. Add a readme file
4. Commit the changes
5. Get the last commit log
6. Get the long hash of the commit
7. Got to the .git directory and show its content
8. Trace the commit object
9. Decompress the commit object
10. Follow the tree and blob objects
11. Make a diagram of the git objects