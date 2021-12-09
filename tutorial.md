# Git Tutorial

## References
_______________________________________________________________________________

- https://www.atlassian.com/git/tutorials/learn-git-with-bitbucket-cloud
- https://blog.osteele.com/2008/05/my-git-workflow/
- https://tomayko.com/blog/2008/the-thing-about-git
- https://www.raywenderlich.com/books/advanced-git/v1.0/chapters/1-how-does-git-actually-work
- https://dev.to/shahabbukhari/git-simplified-working-collaboratively-with-gitgithub-5349
- https://www.thomas-krenn.com/en/wiki/Git_Basic_Terms
- https://workingcopyapp.com/manual/clone-catalog

## Version Control Systems
_______________________________________________________________________________

- Code is secured against system failure
- Code changes are orginized and can be traced
- Changes can be commited after reviewing process
- Source code can be tagged, branched and merged

## Basic Git
______________________________________________________________________________

![Inline-style link to an image](assets/git_data_flow_02.png)

### Repository

The repository is a storage place for files and the changes made to the files. Usually the project folder is also 
the repository folder. The repository can be either local or remote and as for distributed systems both types of 
repositories are absolutely equivalent.

### Index

The staging area or also index is the place where the developer gathers the changes before commit. It is like an 
additional layer of security between the working copy of the project and the local repository.

### Working Copy

The working copy is the source code which the developer is currently working on.

## Advanced Git
_______________________________________________________________________________

### Objects

- Git uses the SHA-1 hash of content to create references to commits, trees and blobs.
- A commit object stores the metadata about a commit, such as the parent, the author, timestamps and references to 
  the file tree of this commit.
- **Tree** object is a collection of references to either child trees or blob objects.
- **Blob** objects are compressed collections of files; usually, the set of files in a particular directory inside the 
  tree.
- git rev-parse will translate a short hash into a long hash.
- git cat-file will show you the pertinent metadata about an object.

```
##############################################################################
# Get the 5 last logs
##############################################################################

PS C:\Workspace\Tutorials\Git> git log -5 --oneline 
a6cc877 (HEAD -> master) [#####] - Name refactoring of some assets;
d5d064a (origin/master, origin/HEAD) [#####] - Cheat sheet added to assets;
269a11d [#####] - New asset;
4b760d2 [#####] - Git branching model;
d80d7b0 Initial commit

##############################################################################
# Get the long hash
##############################################################################

PS C:\Workspace\Tutorials\Git> git rev-parse a6cc877
a6cc8772b152ab7c2e40fd87dc944eab3ffb1e7d

##############################################################################
# Got to the .git directory and show content with dir
##############################################################################

PS C:\Workspace\Tutorials\Git> cd .git
PS C:\Workspace\Tutorials\Git> dir
Mode                 LastWriteTime         Length Name
d-----      8.12.2021 г.     10:50                hooks
d-----      8.12.2021 г.     10:50                info
d-----      8.12.2021 г.     10:50                logs
d-----      8.12.2021 г.     14:41                objects
d-----      8.12.2021 г.     10:50                refs

##############################################################################
# Show the commit object using the hash. The first two digits are the 
# directory, last digits the commpressed file.
##############################################################################

PS C:\Workspace\Tutorials\Git> cd objects
PS C:\Workspace\Tutorials\Git> dir

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----      8.12.2021 г.     12:00                26
d-----      8.12.2021 г.     10:52                33
d-----      8.12.2021 г.     10:53                39
d-----      8.12.2021 г.     13:55                3b
d-----      8.12.2021 г.     10:53                4b
d-----      8.12.2021 г.     11:57                5a
d-----      8.12.2021 г.     13:55                63
d-----      8.12.2021 г.     11:57                6d
d-----      8.12.2021 г.     13:49                6f
d-----      8.12.2021 г.     13:55                80
d-----      8.12.2021 г.     12:10                82
d-----      8.12.2021 г.     12:42                85
d-----      8.12.2021 г.     12:10                86
d-----      8.12.2021 г.     11:15                89
d-----      8.12.2021 г.     10:50                a1
d-----      8.12.2021 г.     13:55                a6
d-----      8.12.2021 г.     10:50                b2
d-----      8.12.2021 г.     11:56                c4
d-----      8.12.2021 г.     14:41                cc
d-----      8.12.2021 г.     12:10                d5
d-----      8.12.2021 г.     10:53                d7
d-----      8.12.2021 г.     10:50                d8
d-----      8.12.2021 г.     11:11                e6
d-----      8.12.2021 г.     11:56                f0
d-----      8.12.2021 г.     12:04                ff
d-----      8.12.2021 г.     10:50                info
d-----      8.12.2021 г.     10:50                pack

PS C:\Workspace\Tutorials\Git> cd a6 
PS C:\Workspace\Tutorials\Git> dir

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-ar---      8.12.2021 г.     13:55            181 cc8772b152ab7c2e40fd87dc944eab3ffb1e7d


##############################################################################
# Decompress the commit object using the short or long hash
##############################################################################

PS C:\Workspace\Tutorials\Git> git cat-file -p a6cc877

tree 3b9ab3a0ee2124dd51d91161ab18c284c279c927
parent d5d064a947ac9df07ed2113768f6ae894e102c0f
author braboj <braboj@googlemail.com> 1638964501 +0200
committer braboj <braboj@googlemail.com> 1638964501 +0200

[#####] - Name refactoring of some assets;

```

### Branching
### Merge
### Stashes
### Rebasing
### Revert

## Git Workflows
_______________________________________________________________________________

When evaluating a workflow for your team, it's most important that you consider your team’s culture. You want the 
workflow to enhance the effectiveness of your team and not be a burden that limits productivity. Some things to 
consider when evaluating a Git workflow are:

- Does this workflow scale with team size?
- Is it easy to undo mistakes and errors with this workflow?
- Does this workflow impose any new unnecessary cognitive overhead to the team?

### Centralized Workflow

#### Organization

 - Good for small teams and teams transitioning from SVN
 - One central and many local repositories
 - No other branches except main (trunk)
 - Each developer has his own isolated copy of the repository
 - Robust branching and merging model

#### Operations

  1. Create bare central repository on a remote server
  2. Clone the central repository
  3. Make changes and commit
  4. Pull changes before a new push
  5. Resolve any conflicts if necessary
  6. Push new commits to the central repository
  7. 

### Feature Branch Workflow
### Gitflow Workflow
### Forking Workflow

## Git Commands
_______________________________________________________________________________

#### init
#### clone
#### config
#### add
#### commit
#### push
#### pull
#### diff
#### stash
#### fetch
#### checkout
#### tag
#### branch
#### merge
#### blame
#### clean
#### revert
#### reset
#### rm
#### rebase
#### reflog