## Dictionary
(source: <https://en.wikipedia.org/wiki/Version_control)

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