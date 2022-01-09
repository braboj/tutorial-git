## Objects
Git objects are files with a specific structure consisting of type, size and 
content. Git offers 4 types of object: **blob**, **tree**, **commit** and 
**tag**. Git stores the objects in .git/objects.

Each object has a unique 40 bytes long identification code. A hash function 
is used to generate the code. Hash functions have the special property to 
transform data sets of any size to data sets of a fixed size.

```shell
$ git log -1
commit db79ba36b521373fcfaff3c2e422326a59fe26f6 (HEAD -> main, origin/main, origin/HEAD)
Author: Branimir Georgiev <-@->
Date:   Sun Jan 9 20:05:15 2022 +0200
```
In the example above the value **db79ba36b521373fcfaff3c2e422326a59fe26f6** is 
also the identification code for the commit object. Investigating further 
the objects directory shows that git takes the first two symbols to create a 
directory and the rest to create the object file. 


```
$ tree /f ./git/objects

C:\WORKSPACE\TUTORIAL-GIT\.GIT\OBJECTS
│  
├───db
│       79ba36b521373fcfaff3c2e422326a59fe26f6
│
├───info
└───pack
```

Generally speaking hash objects are files with a specific structure, whose 
names are generated using a hash function called SHA-1. 

-------------------------------------------------------------------------------
### Object model

![Git Objects](../Assets/images/git-objects-model.png)

#### Commit object
Store the metadata about a commit, such as the parent, the author, timestamps
and references to the file tree of this commit.

#### Tree object
A collection of references to either child trees or blob objects. Trees in 
git represent directories of the operating system.

#### Blob objects
Binary large objects or BLOBS are compressed files and the end of the tree
structure. They are the snapshots of a given file after a change has been 
added to the index.

#### Tag objects
Tag objects in structure resemble commit objects. Annotated tags contain 
some additional information about the creator of the tag and the date of the 
tagging and appear in the commit history as tag objects.

-------------------------------------------------------------------------------
### Inspecting objects

```shell
# Show object content
$ git cat-file -p db79ba36b521373fcfaff3c2e422326a59fe26f6

# Show object type
$ git cat-file -t db79ba36b521373fcfaff3c2e422326a59fe26f6
```
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
