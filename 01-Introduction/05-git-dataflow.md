## Git Dataflow

![Git Dataflow](../Assets/images/git-dataflow-diagram.png)

-------------------------------------------------------------------------------
### Repository

This is the **.git** directory in the project. It contains the files as well as
the history of the changes made to those files. The repository can be either **
local** or **remote**, whereby for git both types of repositories are absolutely
equivalent.

-------------------------------------------------------------------------------
### Workspace

When you work on your project and make some changes, you are dealing with your
project's working directory on your computer's filesystem. All the changes you
make will remain in the working directory until you add them to the staging area
or discard them.

-------------------------------------------------------------------------------
### Index

The staging area or also index is the place where the developer gathers the
changes before commit. It is the place where the developer can review the
changes before transferring the data to the local repository and acts as an
additional layer of security.

-------------------------------------------------------------------------------
### Practice

1. Create a remote repository
2. Clone the remote repository
3. Create a new file and add it to the index
4. Commit the file to the local repo
5. Push the file to the remote repo
6. Make a change in the file from the remote repo
7. Pull the changes from the remote repo