# Git Tutorial

## Git Overview
_______________________________________________________________________________

- Code is secured against system failure
- Code changes are organized and can be traced
- Changes can be first reviewed and then committed
- Source code can easily  be tagged, branched and merged

## Git Dataflow
______________________________________________________________________________

![Inline-style link to an image](assets/git_data_flow_02.png)

### Workspace

When you work on your project and make some changes, you are dealing with 
your project's working directory. This project directory is available on 
your computer's filesystem. All the changes you make will remain in the working 
directory until you add them to the staging area.

### Index

The staging area or also index is the place where the developer gathers the 
changes before commit. It is the place where the developer can review the 
changes before transferring the data to the local repository and acts as an 
additional layer of security.

### Repository

Repository is a data structure to store metadata for project files. It contains 
the files as well as the history of the changes made to those files. A 
repository has all the project-related data and distinct projects have 
distinct repositories. The repository can be either **local** or **remote** 
and for distributed systems both types of repositories are absolutely 
equivalent.


### Exercise

#### 1. Create project folder
    $ mkdir test

#### 2. Create the local repository in the project folder
    $ cd test
    $ git init

#### 3. Add some files
    $ echo 123 > test.txt

#### 4. Transfer the changes to the index
    $ git add  *

#### 5. Go to the repository
    $ cd .git

#### 6. Check the index file
    $ notepad index

#### 7. Commit the changes to the local repository
    $ cd ..
    $ git commit -m 'First commit'

#### 8. Create the remote repository
    $ cd ..
    $ git init --bare --shared=all test.git

#### 9. Connect the local repository to the remote repository
    $ cd test
    $ git remote add origin ./test.git

#### 10. Push the changes to the remote repository
    $ git push --set-upstream origin master

#### 11. Pull changes from the remote repository to the workspace
    $ git pull


## Git Index

## Git Objects
_______________________________________________________________________________

https://git-scm.com/book/en/v2/Git-Internals-Git-Objects

Git uses the SHA-1 hash of content to create references to commit, trees and blobs.

### Commit object
Store the metadata about a commit, such as the parent, the author, 
timestamps and references to the file tree of this commit.

### Tree object
A collection of references to either child trees or blob objects.

### Blob objects
Compressed files and the end of the tree structure.

### Exercises

#### 1. Get the 5 last logs

    $ git log -5 --oneline 
    a6cc877 (HEAD -> master) [#####] - Name refactoring of some assets;
    d5d064a (origin/master, origin/HEAD) [#####] - Cheat sheet added to assets;
    269a11d [#####] - New asset;
    4b760d2 [#####] - Git branching model;
    d80d7b0 Initial commit


#### 2. Get the long hash

    $ git rev-parse a6cc877
    a6cc8772b152ab7c2e40fd87dc944eab3ffb1e7d

#### 3. Got to the .git directory and show content with dir

    $ cd .git
    $ dir
    Mode                 LastWriteTime         Length Name
    d-----      8.12.2021 г.     10:50                hooks
    d-----      8.12.2021 г.     10:50                info
    d-----      8.12.2021 г.     10:50                logs
    d-----      8.12.2021 г.     14:41                objects
    d-----      8.12.2021 г.     10:50                refs

#### 4. Show the commit object using the hash
The first two digits are the directory, last digits the compressed file.

    $ cd objects
    $ dir
    Mode                 LastWriteTime         Length Name
    ----                 -------------         ------ ----
    d-----      8.12.2021 г.     12:00                26
    d-----      8.12.2021 г.     10:52                33
    d-----      8.12.2021 г.     10:53                39
    d-----      8.12.2021 г.     13:55                3b
    d-----      8.12.2021 г.     10:50                info
    d-----      8.12.2021 г.     10:50                pack

    $ cd a6 
    $ dir

    Mode                 LastWriteTime         Length Name
    ----                 -------------         ------ ----
    -ar---      8.12.2021 г.     13:55            181 cc8772b152ab7c2e40fd87dc944eab3ffb1e7d


#### 5. Decompress the commit object using the short or long hash

    $ git cat-file -p a6cc877
    tree 3b9ab3a0ee2124dd51d91161ab18c284c279c927
    parent d5d064a947ac9df07ed2113768f6ae894e102c0f
    author braboj <braboj@googlemail.com> 1638964501 +0200
    committer braboj <braboj@googlemail.com> 1638964501 +0200


## Git Operations

### Stage changes
The staging are is a place for grouping changes before commit. For example a developer can work 
on several features at the same time and want to commit changes specific to a feature. The **git 
add** command allows specific files to be added to the index.

### Commit changes

### Update workspace
The workspace can be updated by using the **git pull** command.

### Merge changes

### Create branches
A branch is a version of the repository that diverges from the main working project.

### Stash changes
### Rebase history
### Revert changes


## Git Workflows
_______________________________________________________________________________

When evaluating a workflow for your team, it's most important that you consider your team’s 
culture. You want the workflow to enhance the effectiveness of your team and not be a burden 
that limits productivity. Some things to consider when evaluating a Git workflow are:

- Does this workflow scale with team size?
- Is it easy to undo mistakes and errors with this workflow?
- Does this workflow impose any new unnecessary cognitive overhead to the team?

### Centralized Workflow

This workflow is good for small teams or teams migrating from SVN. There is one central 
repository which allows only push and pull operations. Each user will have a local copy of the 
central repository and changes will be made there. The developers can stage and commit freely in 
their local repositories. 

The changes can then be committed to the master branch. If there are changes made by other users,
the developer must pull them first and merge them with the local copy. After both master 
branches of the remote and local repositories are equal, the developers are permitted to 
commit their changes.

```
###############################################################################
# Create a cental repository
###############################################################################

> git init --bare --shared=all project.git

###############################################################################
# Clone the central repository
###############################################################################

> git clone project.git

###############################################################################
# Create a new file
###############################################################################

> cd project
> echo Hello world! > README.txt

###############################################################################
# Commit changes to the central repository
###############################################################################

> git add *
> git commit -m 'First Change'

###############################################################################
# Push changes to the remote repository
###############################################################################

> git push

##############################################################################
# Test changes by cloning to a new local repository
###############################################################################

> cd ..
> git clone project.git test

###############################################################################
# Check the content of the new local repository
###############################################################################

> cd test
> dir 

Directory: C:\Workspace\Tutorials\Git\test

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----      9.12.2021 г.     14:06             30 README.md

###############################################################################
# Simulate merge conflict
###############################################################################

> echo 'REAMDE changed in the test folder.' > README.txt
> git add *
> git commit -m 'Tester changed the README file'
> git push
> cd ..\project
> echo 'README changed in the project folder.' > README.txt
> git add *
> git commit -m 'Project lead changed the README file'
> git push

 ! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'C:/Workspace/Tutorials/Git/.\project.git\'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.

###############################################################################
# Resolve merge conflict
###############################################################################

> git pull


```

### Feature Branch Workflow
### Gitflow Workflow
### Forking Workflow

## Git Commands
_______________________________________________________________________________

#### init
#### clone
#### config
#### add
#### restore
#### checkout
#### commit
#### diff
#### fetch
#### init
#### merge
#### pull
#### push
#### rebase
#### reset
#### revert
#### rm
#### stash
#### tag

## Git Terms
_______________________________________________________________________________

### Origin
### Cherry-Picking
### Upstream
### Downstream
### Pull Request

When you're ready for feedback, submit a pull request. Pull requests are a **feature specific to 
GitHub**. They provide a simple, web-based way to submit your work (often called “patches”) to a 
project. It's called a pull request because you're asking the project to pull changes from your 
fork.

A "pull request" is you requesting the target repository to accept your changes. When you send a 
pull request, you're asking (requesting) the official repo owner to pull some changes from your 
own repo. Hence, "pull request".

Pull Requests are the heart of collaboration on GitHub. When you open a pull request, you're 
proposing your changes and requesting that someone review and pull in your contribution and 
merge them into their branch. Pull requests show diffs, or differences, of the content from both 
branches.

### Push Request
A "push request" would be the target repository requesting you to push your changes.


## Git Hosting

### Hosting Services
- https://github.com/
- https://bitbucket.org/
- https://about.gitlab.com/

### Comparison
- https://jelvix.com/blog/bitbucket-vs-github-vs-gitlab
- https://www.geeksforgeeks.org/difference-between-bitbucket-and-github/
- https://medium.com/geekculture/bitbucket-vs-github-vs-gitlab-detailed-comparison-a02dfbe7a624
- https://www.g2.com/products/github/competitors/alternatives
- https://www.g2.com/compare/bitbucket-vs-github-vs-gitlab
- https://disbug.io/en/blog/github-vs-gitlab-vs-bitbucket

### Migration
- https://rushabhshah065.medium.com/lets-move-repository-from-bitbucket-to-github-with-all-branches-and-commitsf93c7d3bda67


## Git Notes
_______________________________________________________________________________

- In Git, you cannot commit empty folders, because Git does not actually save folders, only files. 
You'll have to create a placeholder file inside those directories if you actually want them 
to be "empty" (i.e. you have no committable content).

- If you’ve used SVN the past, it’s important not to confuse the git add command with svn add. 
With the svn add command, you can add a file to a repository. Instead, the git add command 
itself does not directly impact the repository at all. It isn’t until you use the git commit 
command that the changes are recorded in your repo. You’ll need to use git add each time you 
update a file.

## References
_______________________________________________________________________________


### Git Clients
- https://www.sourcetreeapp.com/
- https://desktop.github.com/
- https://workingcopyapp.com/manual/clone-catalog

### Git Tutorials
- http://guides.beanstalkapp.com/
- https://www.atlassian.com/git/tutorials/learn-git-with-bitbucket-cloud
- https://www.w3schools.com/git/
- https://www.javatpoint.com/git-init
- https://blog.osteele.com/2008/05/my-git-workflow/
- https://tomayko.com/blog/2008/the-thing-about-git
- https://dev.to/shahabbukhari/git-simplified-working-collaboratively-with-gitgithub-5349
- https://mincong.io/2018/04/28/git-index/
- https://opensource.com/article/20/4/git-merge-conflict
- https://backlog.com/git-tutorial/reference/commands/

### Git Books
- http://git-scm.com/book/en/v2
- https://www.raywenderlich.com/books/advanced-git/v1.0/chapters/1-how-does-git-actually-work

### Git Terms
- https://www.thomas-krenn.com/en/wiki/Git_Basic_Terms

### Git Workflow
- https://www.endoflineblog.com/oneflow-a-git-branching-model-and-workflow
- https://nvie.com/posts/a-successful-git-branching-model/
- https://gist.github.com/bryanbraun/8c93e154a93a08794291df1fcdce6918
- https://gist.github.com/jbenet/ee6c9ac48068889b0912

### Git Tools
- https://www.diagrams.net/
