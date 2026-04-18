---
title: "Appendix"
section: "appendix"
order: 4
---

## Git Clients

- https://desktop.github.com/
- https://www.sourcetreeapp.com/
- https://tortoisegit.org/
- https://www.gitkraken.com/
- https://aurees.com/
- https://gitextensions.github.io/

## Dictionary
(from <https://en.wikipedia.org/wiki/Version_control>)

### Blame
A search for the author and revision that last modified a particular resource.

### Branch
A set of files under version control may be branched at a point in
time so that, from that time forward, two copies of those files may develop at
different speeds or in different ways independently of each other.

### Change
A change (or diff, or delta) represents a specific modification to a document
under version control. 

### Change list
A change list is a set of changes made before a commit.

### Checkout
To check out (or co) is to create a local working copy from the repository. A
user may specify a specific revision or obtain the latest. 

### Clone
Cloning means creating a repository containing the revisions from another
repository. 

### Commit (noun)
A 'commit' or 'revision' (SVN) is a modification that is applied to the
repository.

### Commit (verb)
To commit is to write or merge the changes made in the working copy to the 
repository. A commit contains metadata, typically the author information and 
a commit message that describes the change.

### Conflict
A conflict occurs when different parties make changes to the same document, and
the system is unable to reconcile the changes. A user must resolve the conflict
by combining the changes, or by selecting one change in favour of the other.

### Delta compression
Most revision control software uses delta compression, which retains only the
differences between successive versions of files. This allows for more efficient
storage of many file versions.

### Downstream
The flow of data from the original repository to the cloned repository.

### Export
Exporting is the act of obtaining the files from the repository. It is similar
to checking out except that it creates a clean directory tree without the
version-control metadata.

### Fetch
Fetch is sometimes used as a synonym for pull, or a pull followed by an update.

### Forward integration
The process of merging changes made in the main trunk into a development (
feature or team) branch.

### Head
Sometimes called tip, this refers to the most recent commit, either to the
trunk or to a branch. The trunk and each branch have their own head, though HEAD
is sometimes loosely used to refer to the trunk.

### Import
Importing is the act of copying a local directory tree (that is not currently a
working copy) into the repository for the first time.

### Index
See change list.

### Initialize
The act of creating a new, empty repository.

### Interleaved deltas
Some revision control software uses Interleaved deltas, a method that allows
storing the history of text based files in a more efficient way than by using
Delta compression.

### Label
See tag.

### Locking
When a developer locks a file, no-one else can update that file until it is
unlocked. Locking can be supported by the version control system, or via
informal communications between developers (aka social locking).

### Mainline
Similar to trunk, but there can be a mainline for each branch.

### Merge
A merge or integration is an operation in which two sets of changes are applied
to a file or set of files. 

### Origin
The name or alias of the link to the remote repository for pull operations. For
example the clone of the remote link is usually something
like https://github.com/user/project/repo.git. Internally git replaces this link
with ***origin***.

### Promote
The act of copying file content from a less controlled location into a more
controlled location. For example, from a user's workspace into a repository, or
from a stream to its parent.

### Pull
Copy revisions from one repository into another. Pull is initiated by the
receiving repository.

### Push
Copy revisions from one repository into another. Push is initiated by the source
repository.

### Pull request
A developer asking others to merge their "pushed" changes.

### Repository
The repository (or "repo") is where files' current and historical data are
stored, often on a server.

### Resolve
The act of user intervention to address a conflict between different changes to
the same document.

### Revision
Also version: A version is a change in any form.

### Share
The act of making one file or folder available in multiple branches at the same
time. When a shared file is changed in one branch, it is changed in other
branches.

### Staging area
See index.

### Tag
A tag or label refers to an important snapshot in time, consistent across many
files. These files at that point may all be tagged with a user-friendly,
meaningful name or revision number.

### Trunk
The unique line of development that is not a branch (sometimes also called
Baseline, Mainline or Master)

### Update
An update merges changes made in the remote repository into the local
working copy. 

### Unlocking
Releasing a lock.

### Upstream
The flow of data from the cloned repository to the original repository.

### Working copy
The working copy is the local copy of files from a repository, at a specific
time or revision. All work done to the files in a repository is initially done
on a working copy, hence the name. Conceptually, it is a sandbox.

## References

### Introduction
- http://git-scm.com/book/en/v2
- https://github.com/pluralsight/git-internals-pdf/releases
- http://think-like-a-git.net/
- https://www.raywenderlich.com/books/advanced-git/v1.0/chapters/1-how-does-git-actually-work
- http://shafiul.github.io/gitbook/index.html
- http://www-cs-students.stanford.edu/~blynn/gitmagic/index.html
- https://gitimmersion.com/index.html
- https://githowto.com/
- https://git.seveas.net/
- https://tomayko.com/blog/2008/the-thing-about-git

-------------------------------------------------------------------------------
### Q&A
- https://github.com/k88hudson/git-flight-rules
- https://ohshitgit.com/
- https://devconnected.com/how-to-delete-local-and-remote-tags-on-git/
- https://github.com/git/git/blob/master/Documentation/howto/revert-a-faulty-merge.txt
- https://opensource.com/article/20/4/git-merge-conflict
- https://stackoverflow.com/questions/35979642/what-is-git-tag-how-to-create-tags-how-to-checkout-git-remote-tags/35979751#35979751
- https://stackoverflow.com/questions/58003030/what-is-the-git-restore-command-and-what-is-the-difference-between-git-restor
- https://levelup.gitconnected.com/the-difference-between-git-merge-and-git-rebase-8f7d1b159931

-------------------------------------------------------------------------------
### Visualization

- https://livablesoftware.com/tools-to-visualize-the-history-of-a-git-repository/
- https://learngitbranching.js.org/
- https://onlywei.github.io/explain-git-with-d3/
- https://git-school.github.io/visualizing-git/
- https://github.com/acaudwell/Gource/wiki/Controls
- https://gmaster.io/
- https://gitup.co/

-------------------------------------------------------------------------------
### Wikis
- https://en.wikipedia.org/wiki/Git
- https://git.wiki.kernel.org/index.php/Main_Page

-------------------------------------------------------------------------------
### Tutorials
- http://think-like-a-git.net/
- http://guides.beanstalkapp.com/
- https://www.metaltoad.com/blog/beginners-guide-git-bisect-process-elimination
- https://rachelcarmena.github.io/2018/12/12/how-to-teach-git.html
- https://www.golinuxcloud.com/git-head-caret-vs-tilde-at-sign-examples/
- https://www.atlassian.com/git/tutorials/learn-git-with-bitbucket-cloud
- https://medium.com/@gabicle/git-ancestry-references-explained-bd3a84a0b821
- https://kgrz.io/git-intro-to-pathspec.html
- https://davidenunes.com/git-good/
- https://www.linux.com/training-tutorials/how-rebase-git/
- https://css-tricks.com/git-pathspecs-and-how-to-use-them/
- https://gitready.com/
- https://tom.preston-werner.com/2009/05/19/the-git-parable.html
- https://matthew-brett.github.io/curious-git/curious_git.html
- https://www.sbf5.com/~cduan/technical/git/
- https://medium.com/@willhayjr/the-architecture-and-history-of-git-a-distributed-version-control-system-62b17dd37742
- https://www.w3schools.com/git/
- https://www.javatpoint.com/git-init
- https://backlog.com/git-tutorial/reference/commands/
- https://mincong.io/2018/04/28/git-index/
- https://github.com/tpope/vim-pathogen/commits/master
- https://stackoverflow.blog/2021/04/05/a-look-under-the-hood-how-branches-work-in-git/
- https://github.com/git-guides/
- https://gist.github.com/brianclements/841ea7bffdb01346392c
- https://hackmd.io/@thomasburleson/mindspace-git-top10-rules
- https://jasonmccreary.me/articles/git-rebase/
- https://medium.com/hackernoon/understanding-git-index-4821a0765cf
- https://www.metaltoad.com/blog/beginners-guide-git-bisect-process-elimination
- https://medium.com/@gabicle/git-ancestry-references-explained-bd3a84a0b821
- https://levelup.gitconnected.com/the-difference-between-git-merge-and-git-rebase-8f7d1b159931

-------------------------------------------------------------------------------
### Workflows
- https://blog.osteele.com/2008/05/my-git-workflow/
- https://tomayko.com/blog/2008/the-thing-about-git
- https://dev.to/shahabbukhari/git-simplified-working-collaboratively-with-gitgithub-5349
- https://www.endoflineblog.com/oneflow-a-git-branching-model-and-workflow
- https://nvie.com/posts/a-successful-git-branching-model/
- https://gist.github.com/bryanbraun/8c93e154a93a08794291df1fcdce6918
- https://gist.github.com/jbenet/ee6c9ac48068889b0912
- https://www.toptal.com/software/trunk-based-development-git-flow
- https://buddy.works/blog/5-types-of-git-workflows

-------------------------------------------------------------------------------
### Criticism
- https://stevebennett.me/2012/02/24/10-things-i-hate-about-git/
- https://tom-vykes.medium.com/the-worst-things-about-github-8e8efc60fae3

-------------------------------------------------------------------------------
### Hosting Services
- https://jelvix.com/blog/bitbucket-vs-github-vs-gitlab
- https://www.geeksforgeeks.org/difference-between-bitbucket-and-github/
- https://medium.com/geekculture/bitbucket-vs-github-vs-gitlab-detailed-comparison-a02dfbe7a624
- https://www.g2.com/categories/version-control-hosting
- https://www.g2.com/products/github/competitors/alternatives
- https://www.g2.com/compare/bitbucket-vs-github-vs-gitlab
- https://disbug.io/en/blog/github-vs-gitlab-vs-bitbucket
- https://github.com/atlassian/github-for-jira
- https://about.gitlab.com/pricing/saas/feature-comparison/
- https://kreuzwerker.de/en/post/bye-bye-server
- https://www.atlassian.com/migration/assess/journey-to-cloud

## Git Notes

#### 1
In Git, you cannot commit empty folders, because Git does not actually save
folders, only files. You'll have to create a placeholder file inside those
directories if you actually want them to be "empty" (i.e. you have no
committable content).

#### 2
If you’ve used SVN the past, it’s important not to confuse the git add command
with svn add. With the svn add command, you can add a file to a repository.
Instead, the git add command itself does not directly impact the repository at
all. It isn’t until you use the git commit command that the changes are
recorded in your repo. You’ll need to use git add each time you update a file.

#### 3
Browse repositories in BitBucket with https://bitbucket.org/repo/all

#### 4
Changing the user email might change the commit log by showing a different
developer!
