# Git Tutorial

## Git Overview
___________________________________________________________________________________________________

- Code is secured against system failure
- Code changes are organized and can be traced
- Changes can be first reviewed and then committed
- Source code can easily  be tagged, branched and merged

## Git Dataflow
___________________________________________________________________________________________________

```
                                    Git Transport Diagram                                
                                                                                         
     ┌────────┐          ┌─────┐          ┌────────────────┐          ┌─────────────────┐
     │Worktree│          │Index│          │Local Repository│          │Remote Repository│
     └───┬────┘          └──┬──┘          └───────┬────────┘          └────────┬────────┘
         │       add        │                     │                            │         
         │ ────────────────>│                     │                            │         
         │                  │                     │                            │         
         │ restore --staged │                     │                            │         
         │ <────────────────│                     │                            │         
         │                  │                     │                            │         
         │                  │       commit        │                            │         
         │                  │────────────────────>│                            │         
         │                  │                     │                            │         
         │            restore --source            │                            │         
         │ <───────────────────────────────────────                            │         
         │                  │                     │                            │         
         │                  │                     │            push            │         
         │                  │                     │ ──────────────────────────>│         
         │                  │                     │                            │         
         │                  │                     │           fetch            │         
         │                  │                     │ <──────────────────────────│         
         │                  │                     │                            │         
         │                  merge                 │                            │         
         │ <───────────────────────────────────────                            │         
         │                  │                     │                            │         
         │                  │             pull    │                            │         
         │ <───────────────────────────────────────────────────────────────────│         
     ┌───┴────┐          ┌──┴──┐          ┌───────┴────────┐          ┌────────┴────────┐
     │Worktree│          │Index│          │Local Repository│          │Remote Repository│
     └────────┘          └─────┘          └────────────────┘          └─────────────────┘

```
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


## Git Branching
___________________________________________________________________________________________________

```
                     Git Branching Diagram                      
                                                                
     ┌───────┐          ┌──────┐          ┌──────┐              
     │Develop│          │Master│          │Hotfix│              
     └───┬───┘          └──┬───┘          └──┬───┘              
         │  tag            │  ╔═══════╗      │                  
 ──────────────────────────>  ║1.0.0 ░║      │                  
         │                 │  ╚═══════╝      │                  
         │     branch      │                 │                  
         │<────────────────│                 │                  
         │                 │                 │                  
         │     switch      │                 │                  
         │<────────────────│                 │                  
         │                 │                 │                  
         ────┐             │                 │                  
             │ add / commit│                 │                  
         <───┘             │                 │                  
         │                 │                 │                  
         │     merge       │                 │                  
         │────────────────>│                 │                  
         │                 │                 │                  
         │  tag            │  ╔═══════╗      │                  
 ──────────────────────────>  ║1.1.0 ░║      │                  
         │                 │  ╚═══════╝      │                  
         │                 │      branch     │                  
         │                 │ ────────────────>                  
         │                 │                 │                  
         │                 │      switch     │                  
         │                 │ ────────────────>                  
         │                 │                 │                  
         │                 │                 │─ ─ ┐             
         │                 │                 │    | add / commit
         │                 │                 │< ─ ┘             
         │                 │                 │                  
         │                 │      merge      │                  
         │                 │ <────────────────                  
         │                 │                 │                  
         │  tag            │  ╔═══════╗      │                  
 ──────────────────────────>  ║1.1.1 ░║      │                  
         │                 │  ╚═══════╝      │                  
         │     branch      │                 │                  
         │<────────────────│                 │                  
         │                 │                 │                  
         │     switch      │                 │                  
         │<────────────────│                 │                  
         │                 │                 │                  
         ────┐             │                 │                  
             │ add / commit│                 │                  
         <───┘             │                 │                  
     ┌───┴───┐          ┌──┴───┐          ┌──┴───┐              
     │Develop│          │Master│          │Hotfix│              
     └───────┘          └──────┘          └──────┘              

```


## Git Objects
___________________________________________________________________________________________________

Git uses the SHA-1 hash of content to create references to commit, trees and blobs.

#### Commit object
Store the metadata about a commit, such as the parent, the author,
timestamps and references to the file tree of this commit.

#### Tree object
A collection of references to either child trees or blob objects.

#### Blob objects
Compressed files and the end of the tree structure.


## Git Terms
___________________________________________________________________________________________________

### HEAD
Current branch

### Origin
The link to the remote repository for pull

### Upstream
The link to the remote repository for push

### Cherry-Picking

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


## Git Notes
___________________________________________________________________________________________________

- In Git, you cannot commit empty folders, because Git does not actually save folders, only files. 
You'll have to create a placeholder file inside those directories if you actually want them 
to be "empty" (i.e. you have no committable content).

- If you’ve used SVN the past, it’s important not to confuse the git add command with svn add. 
With the svn add command, you can add a file to a repository. Instead, the git add command 
itself does not directly impact the repository at all. It isn’t until you use the git commit 
command that the changes are recorded in your repo. You’ll need to use git add each time you 
update a file.


## Git Hosting
___________________________________________________________________________________________________

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
https://rushabhshah065.medium.com/lets-move-repository-from-bitbucket-to-github-with-all-branches-and-commits-f93c7d3bda67

## Git Clients
___________________________________________________________________________________________________

- https://desktop.github.com/
- https://www.sourcetreeapp.com/
- https://tortoisegit.org/
- https://www.gitkraken.com/
- https://aurees.com/


## References
___________________________________________________________________________________________________


### Tutorials
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

### Books
- http://git-scm.com/book/en/v2
- https://www.raywenderlich.com/books/advanced-git/v1.0/chapters/1-how-does-git-actually-work

### Workflows
- https://www.endoflineblog.com/oneflow-a-git-branching-model-and-workflow
- https://nvie.com/posts/a-successful-git-branching-model/
- https://gist.github.com/bryanbraun/8c93e154a93a08794291df1fcdce6918
- https://gist.github.com/jbenet/ee6c9ac48068889b0912
- https://www.toptal.com/software/trunk-based-development-git-flow

### Tools
- https://www.diagrams.net/
