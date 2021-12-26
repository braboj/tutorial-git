## Git Objects
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