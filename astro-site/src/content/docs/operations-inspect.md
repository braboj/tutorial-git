---
title: "Inspect"
section: "operations"
order: 3
subsection: "inspect"
subsectionOrder: 8
---

### git status

Show information about the status of the working tree. The working tree is the
collection of files and directories in the current project.

-------------------------------------------------------------------------------
### Syntax
```
$ git status [<options>]

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR
  
# Options
-------------------------------------------------------------------------------
--branch              : Show branches in short format
--short               : Short format with labels
--long                : Long format
--untracked           : Show also untracked files
--ignored             : Show also ignored files
--verbose             : Turn on/off verbose information

# Labels
M   = modified
T   = file type changed
A   = added
D   = deleted
R   = renamed
C   = copied
U   = updated but unmerged
??  = untracked
!!  = ignored 
```

-------------------------------------------------------------------------------
### Examples
```shell
$ git status --short
$ git status --short --branch
$ git status --short --untracked --ignored
```

### git log

Displays the commit history of the repository.

-------------------------------------------------------------------------------
### Syntax
```
$ git log [<options>] [<revision selector>]

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR

# Filtering options
-------------------------------------------------------------------------------
-<num>                  : Show the last <num> entries
--branches=<pattern>    : Show branches
--merges | --no-merges  : Show all merge commits
--tags=<pattern>        : Show tags
--remotes=<pattern>     : Show remotes  
--after=<date>          : Show all logs after date
--before=<date>         : Show all logs before date
--author=<pattern>      : Show all logs by author
--grep=<pattern>        : Show all logs matching pattern
-L <pattern>:<file>     : Show all logs for a pattern in file
-L <start, end>:<file>  : Show all logs for lines <start> to <end>

# Sorting options
-------------------------------------------------------------------------------
--date-order
--author-date-order
--topo-order
--reverse

# Formatting options
-------------------------------------------------------------------------------
--pretty=<format>         : oneline, medium, full, fuller, reference
--abbrev-commit           : Reduce hash code to 7 digits
--oneline                 : Shorthand for pretty=oneline --abbrev-commit
--graph                   : Show history graph
--parents                 : Show the parents 
--children                : Show the children
```

-------------------------------------------------------------------------------
### Examples
```shell
$ git log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short
$ git log --merges
$ git log --after="2 weeks ago" main
$ git log --name-status test ^release
```

### git blame

Display useful information about a line in a file using the last revision which modified it. 

-------------------------------------------------------------------------------
### Syntax
```
$ git blame file [<options>]
 
# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR

# Options
-------------------------------------------------------------------------------
-e                  : Show authors e-mail
-L <start, end>     : Show info about a range of lines
-L :<regexp>        : Show info about lines containing <regexp> 
-M                  : Detect lines moved or copied in the same file
-C                  : Detect Lines copied from another file
--show-stats        : Additional statistics
```

-------------------------------------------------------------------------------
### Examples
```shell

# Show who worked on the README.md file
$ git blame README.md
7d3599a4 (braboj 2021-12-28 18:15:50 +0200  1) <p align='center'>
f314470b (braboj 2022-01-13 13:50:15 +0200  2)  <img src='Assets/banners/banner-bhai-branko.png' />
7d3599a4 (braboj 2021-12-28 18:15:50 +0200  3) </p>
4166563a (braboj 2021-12-28 12:49:54 +0200  4)
1f8716a4 (braboj 2022-01-11 12:26:13 +0200  5) ## Table of contents
4166563a (braboj 2021-12-28 12:49:54 +0200  6)
30a3d973 (braboj 2021-12-28 18:07:38 +0200  7) ### Introduction
3b7217de (braboj 2022-01-12 14:45:49 +0200  8) - [Overview](/01-Introduction/(tut-git-01-01)-git-features.md)
3b7217de (braboj 2022-01-12 14:45:49 +0200  9) - [Installation for Windows](/01-Introduction/(tut-git-01-02)-windows-installation.md)
3b7217de (braboj 2022-01-12 14:45:49 +0200 10) - [Installation for Linux](/01-Introduction/(tut-git-01-03)-linux-installation.md)
3b7217de (braboj 2022-01-12 14:45:49 +0200 11) - [Hosting Services](/01-Introduction/(tut-git-01-04)-hosting-services.md)
3b7217de (braboj 2022-01-12 14:45:49 +0200 12) - [Dataflow Diagram](01-Introduction/(tut-git-01-05)-dataflow-overview.md)
3b7217de (braboj 2022-01-12 14:45:49 +0200 13) - [Operations Overview](01-Introduction/(tut-git-01-06)-operations-overview.md)
9b81cece (braboj 2022-01-02 11:43:43 +0200 14)
30a3d973 (braboj 2021-12-28 18:07:38 +0200 15) ### Concepts

# Show lines form 5 to 12
$ git blame -L 5,12 README.md
1f8716a4 (braboj            2022-01-11 12:26:13 +0200  5) ## Table of contents
4166563a (braboj 2021-12-28 12:49:54 +0200  6)
30a3d973 (braboj 2021-12-28 18:07:38 +0200  7) ### Introduction
3b7217de (braboj 2022-01-12 14:45:49 +0200  8) - [Overview](/01-Introduction/(tut-git-01-01)-git-features.md)
3b7217de (braboj 2022-01-12 14:45:49 +0200  9) - [Installation for Windows](/01-Introduction/(tut-git-01-02)-windows-installation.md)
3b7217de (braboj 2022-01-12 14:45:49 +0200 10) - [Installation for Linux](/01-Introduction/(tut-git-01-03)-linux-installation.md)
3b7217de (braboj 2022-01-12 14:45:49 +0200 11) - [Hosting Services](/01-Introduction/(tut-git-01-04)-hosting-services.md)
3b7217de (braboj 2022-01-12 14:45:49 +0200 12) - [Dataflow Diagram](01-Introduction/(tut-git-01-05)-dataflow-overview.md)

# Show 5 lines starting from line 5
$ git blame -L 5,+5 README.md
1f8716a4 (braboj 2022-01-11 12:26:13 +0200  5) ## Table of contents
4166563a (braboj 2021-12-28 12:49:54 +0200  6)
30a3d973 (braboj 2021-12-28 18:07:38 +0200  7) ### Introduction
3b7217de (braboj 2022-01-12 14:45:49 +0200  8) - [Overview](/01-Introduction/(tut-git-01-01)-git-features.md)
3b7217de (braboj 2022-01-12 14:45:49 +0200  9) - [Installation for Windows](/01-Introduction/(tut-git-01-02)-windows-installation.md)
```

### git bisect

Find a bug using binary search or new features using the binary search algorithm. The algorithm 
will detach the HEAD and move it to a revision in the middle between a specified good and bad 
commit until all revisions are defined as either good or bad.

-------------------------------------------------------------------------------

<img src="/images/git-bisect.png" alt="Binary search" />

-------------------------------------------------------------------------------
### Syntax
```
$ git bisect start  : Start the binary search 
$ git bisect reset  : Stops the binary search
$ git bisect good   : Marks the revision as good
$ git bisect bad    : Marks the revision as bad
$ git bisect new    : Marks the revision as new
$ git bisect old    : Marks the revision as old
```

-------------------------------------------------------------------------------
### Examples
```shell
* a8c2f4e 2022-01-14 | bad (HEAD -> master) [braboj]
* e04b8f5 2022-01-14 | bad [braboj]
* 8b5ce19 2022-01-14 | good [braboj]
* a0f2e3d 2022-01-14 | good [braboj]
* 34a2157 2022-01-14 | good [braboj]

# Start the binary search
$ git bisect start

# First bad commit
$ git bisect bad HEAD

# First good commit
$ git bisect good 34a21

Bisecting: 1 revision left to test after this (roughly 1 step)
[8b5ce1918f88613614d0dfea8509446777ecf6cb] good

# The returned revision is good (see above)
$ git bisect good

Bisecting: 0 revisions left to test after this (roughly 0 steps)
[e04b8f53e471070089dc9c6b652e72b154fe4be9] bad

# The returned revision is bad (see above)
$ git bisect bad

e04b8f53e471070089dc9c6b652e72b154fe4be9 is the first bad commit
commit e04b8f53e471070089dc9c6b652e72b154fe4be9
Author: braboj <66906831+braboj@users.noreply.github.com>
Date:   Fri Jan 14 10:51:51 2022 +0200

    bad

# Stop the binary search
$ git bisect reset 
```

### git ls-files

Show information about files in the index and the working tree.

-------------------------------------------------------------------------------
### Syntax
```
$ git ls-files [<options>]

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR

# Options
-------------------------------------------------------------------------------
-c (--cached)           : Show staged files
-s (--staged)           : Show hash, mode, stage num, file name
-d (--deleted)          : Show deleted files
-m (--modified)         : Show modified files
-i (--ignored)          : Show ignored files
-o (--others)           : Show untracked files
-u (--unmerged)         : Show unmerged files
-x (--exclude) pattern  : Exclude files with pattern
--recurse-submodule     : Show files from submodules
--abbrev                : Use short hash
```

-------------------------------------------------------------------------------
### Examples
```shell
$ git ls-files --stage --abbrev

100644 b24d 0   .gitignore
100644 0235 0   01-Introduction/01-git-features.md
100644 491c 0   01-Introduction/02-windows-installation.md
100644 6c9b 0   01-Introduction/03-linux-installation.md
100644 059a 0   01-Introduction/04-hosting-services.md
100644 0f1a 0   01-Introduction/05-dataflow-overview.md
100644 39b5 0   01-Introduction/06-operations-overview.md
...
```

### git reflog

Show the history of operations on references such as branches, tags and 
others. This is useful because some references such as the HEAD or the tip 
of the branch are updated automatically after a commit.

-------------------------------------------------------------------------------
### Syntax
```
$ git reflog [<reflog selector>]

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR

# Filtering options
-------------------------------------------------------------------------------
-<num>                  : Show the last <num> entries
--branches=<pattern>    : Show branches
--merges | --no-merges  : Show all merge commits
--tags=<pattern>        : Show tags
--remotes=<pattern>     : Show remotes  
--after=<date>          : Show all logs after date
--before=<date>         : Show all logs before date
--author=<pattern>      : Show all logs by author
--grep=<pattern>        : Show all logs matching pattern
-L <pattern>:<file>     : Show all logs for a pattern in file
-L <start, end>:<file>  : Show all logs for lines <stat> to <end  

# Formatting options
-------------------------------------------------------------------------------
--pretty=<format>         : oneline, medium, full, fuller, reference
--pretty=format:<string>  : Custom format string
--abbrev-commit           : Reduce hash code to 7 digits
--oneline                 : Shorthand for pretty=oneline --abbrev-comit 
--parents                 : Show the parents 
--children                : Show the children

# Placeholders for format string
-------------------------------------------------------------------------------
%h, %H  : Commit hash
%t, %H  : Tree hash
%p, %P  : Parent hash
%a<mod> : Author (check git help log)
%c<mod> : Commiter (check git help log)  
```

-------------------------------------------------------------------------------
### Examples
```shell
git reflog stash
git reflog main
git reflog "HEAD@{1}"
git reflog "HEAD@{yesterday}"
git reflog "HEAD@{1.month.ago}"
```

### git cat-file

Use git branch to inspect the branches of the local and remote repos.

-------------------------------------------------------------------------------
### Syntax
```
$ git cat-file [<options>] object

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR

# Options
-------------------------------------------------------------------------------
-s  : Show object size
-t  : Show object type 
-p  : Show object content 
```

-------------------------------------------------------------------------------
### Examples
```shell
# Get object type
$ git cat-file -t HEAD
commit

# Get object size
$ git cat-file -s HEAD
276

# Dump object
$ git cat-file -p HEAD
tree dcaa11df47f9c64407f91f4f98c84fed45d6ed94                               
parent f8960d6bcae54f38c9bbf71c9e2d1efec5a9d50d                             
author braboj <66906831+braboj@users.noreply.github.com> 1642163242 +0200   
committer braboj <66906831+braboj@users.noreply.github.com> 1642163242 +0200

(Inspect) - Update git branch

# Define shortcut for object type
$ git config --global alias.dump cat-file -t
$ git type HEAD
commit
```

### git branch

Use git branch to inspect the branches of the local and remote repos.

-------------------------------------------------------------------------------
### Syntax
```
$ git branch [<options>]

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR

# Options
-------------------------------------------------------------------------------
-a (--all)        # Show all branches
-r (--remote)     # Show remote branches
-v (--verbose)    # Verbose information switch
```

-------------------------------------------------------------------------------
### Examples
```shell
# Show verbose information about local and remote branches
$ git branch -a
* main                3630e70 (Inspect) - Update git ls-file
  remotes/origin/HEAD -> origin/main
  remotes/origin/main 3630e70 (Inspect) - Update git ls-file
```

### git stash

Show stash entries and info about a specific stash entry.

-------------------------------------------------------------------------------
### Syntax
```
$ git stash list               
$ git stash show [<stash-entry>]

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR
```

-------------------------------------------------------------------------------
### Examples
```shell
$ git stash push
$ git stash list
$ git stash show 0
$ git stash pop
```

### git remote

Show info about remote references.

-------------------------------------------------------------------------------
### Syntax
```
$ git remote [<options>]
$ git remote show [<remote reference>]

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR
  
# Options
-------------------------------------------------------------------------------
-v (--verbose)  : Enable or disable verbose information
```


-------------------------------------------------------------------------------
### Examples
```shell
# Show info about remote repository
$ git remote -v
origin  https://github.com/braboj/demo (fetch)
origin  https://github.com/braboj/demo (push)

# Show detailed info about remote repo with the name origin
$ git remote show origin  
* remote origin
  Fetch URL: https://github.com/braboj/demo
  Push  URL: https://github.com/braboj/demo
  HEAD branch: main
  Remote branch:
    main tracked
  Local branch configured for 'git pull':
    main merges with remote main
  Local ref configured for 'git push':
    main pushes to main (fast-forwardable)
```

### git diff

Show changes between the working tree, the index (staging area), and commits.
Git diff compares two states and outputs the lines that were added, removed,
or modified. It is the primary tool for reviewing what has changed before
committing.

-------------------------------------------------------------------------------
### Syntax
```
$ git diff [<options>] [<commit>] [--] [<path>...]
$ git diff [<options>] <commit> <commit> [--] [<path>...]
$ git diff [<options>] <commit>..<commit> [--] [<path>...]

# Legend
-------------------------------------------------------------------------------
[]    : Optional
<>    : Replace
|     : OR
..    : Range between two refs
--    : Separates options from path arguments

# Comparison targets
-------------------------------------------------------------------------------
(none)                        : Working tree vs index (unstaged changes)
--staged | --cached           : Index vs last commit (staged changes)
<commit>                      : Working tree vs specified commit
<commit> <commit>             : Between two commits
<branch1>..<branch2>          : Between tips of two branches
HEAD                          : Working tree vs last commit

# Output options
-------------------------------------------------------------------------------
--stat                        : Show summary of insertions and deletions
--shortstat                   : Show only the totals line from --stat
--name-only                   : Show only names of changed files
--name-status                 : Show names and status (A/M/D) of changed files
--word-diff                   : Show changes at word level instead of line level
--color-words                 : Like --word-diff=color, highlights changed words
--no-color                    : Turn off colored output
--unified=<n>                 : Show <n> lines of context (default is 3)
-b | --ignore-space-change    : Ignore changes in amount of whitespace
-w | --ignore-all-space       : Ignore all whitespace differences

# Path filtering
-------------------------------------------------------------------------------
-- <path>                     : Limit diff to a specific file or directory
-- '*.js'                     : Limit diff to files matching a glob pattern
```

-------------------------------------------------------------------------------
### Output format

Git diff output uses a unified diff format. Each changed file section begins
with a header and contains marked lines showing what was removed and added.

```
diff --git a/file.txt b/file.txt       # Files being compared
index 83db48f..f735c4d 100644           # Blob hashes and file mode
--- a/file.txt                          # Old version marker
+++ b/file.txt                          # New version marker
@@ -1,4 +1,5 @@                        # Hunk header: old start,count new start,count
 unchanged line                         # Context line (no prefix)
-removed line                           # Line removed (minus prefix)
+added line                             # Line added (plus prefix)
+another added line                     # Line added (plus prefix)
 unchanged line                         # Context line (no prefix)
```

The `@@` hunk header shows line ranges. `-1,4` means starting at line 1,
showing 4 lines from the old file. `+1,5` means starting at line 1, showing
5 lines in the new file.

-------------------------------------------------------------------------------
### Examples
```shell
# Unstaged changes — working tree vs index
$ git diff

# Staged changes — index vs last commit
$ git diff --staged
$ git diff --cached

# All changes since last commit (staged + unstaged)
$ git diff HEAD

# Changes between two commits
$ git diff abc1234 def5678

# Changes between two branches
$ git diff main..feature/login

# Diff a specific file only
$ git diff -- src/app.js

# Diff a specific file between two branches
$ git diff main..feature/login -- src/app.js

# Summary of changed files with insertion/deletion counts
$ git diff --stat

# Summary of staged changes
$ git diff --staged --stat

# Word-level diff instead of line-level
$ git diff --word-diff

# Show only names of changed files
$ git diff --name-only main..feature/login

# Ignore whitespace differences
$ git diff -w

# Show more context lines around each change
$ git diff --unified=10
```

### git show

Displays detailed information about a Git object. For commits, it shows the
commit metadata (author, date, message) followed by the diff introduced by that
commit. It can also display the contents of a file at a specific revision, or
the annotated data behind a tag.

-------------------------------------------------------------------------------
### Syntax
```
$ git show [<options>] [<object>]

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR

# Objects
-------------------------------------------------------------------------------
<commit>          : A commit hash, branch name, or symbolic ref (HEAD, HEAD~2)
<commit>:<file>   : A specific file at a given commit
<tag>             : An annotated or lightweight tag

# Display options
-------------------------------------------------------------------------------
--stat            : Show diffstat (files changed, insertions, deletions)
--name-only       : Show only the names of changed files
--name-status     : Show names and status (A/M/D) of changed files
--format=<fmt>    : Control the commit header format (oneline, short, full)
--no-patch        : Suppress the diff output, show only the commit header
-m                : Show diff for each parent of a merge commit
--first-parent    : Show diff against the first parent only
```

-------------------------------------------------------------------------------
### Show a specific commit
```shell
# Show the latest commit (HEAD)
$ git show

# Show a commit by hash
$ git show a1b2c3d

# Show a commit two steps behind HEAD
$ git show HEAD~2
```

-------------------------------------------------------------------------------
### Show a file at a specific commit
```shell
# Show the contents of main.py as of the given commit
$ git show a1b2c3d:main.py

# Show README.md as it was two commits ago
$ git show HEAD~2:README.md

# Show a file from another branch
$ git show feature:src/config.yaml
```

-------------------------------------------------------------------------------
### Show a tag
```shell
# Show an annotated tag (tag message + commit details)
$ git show v1.0.0

# Show a lightweight tag (commit details only)
$ git show v0.9-beta
```

-------------------------------------------------------------------------------
### Formatting options
```shell
# Show only the diffstat summary
$ git show --stat HEAD

# Show only the names of changed files
$ git show --name-only HEAD

# Show file names with their change status
$ git show --name-status HEAD

# Show commit metadata without the diff
$ git show --no-patch HEAD

# Use a custom format for the header
$ git show --format=short HEAD
```

-------------------------------------------------------------------------------
### Show a merge commit
```shell
# By default, git show produces no diff for merge commits.
# Use -m to show the diff against each parent separately.
$ git show -m a1b2c3d

# Show the diff against the first parent only (the branch merged into)
$ git show --first-parent a1b2c3d
```

-------------------------------------------------------------------------------
### Practical examples
```shell
# Quick summary of the last commit without the full diff
$ git show --no-patch --format='%h %s (%an, %ar)'

# Check what a colleague changed in a specific commit
$ git show --stat abc1234

# Retrieve a deleted file from an older commit
$ git show HEAD~5:path/to/deleted-file.txt > restored-file.txt

# Compare a file between two commits using show
$ diff <(git show HEAD~3:config.yaml) <(git show HEAD:config.yaml)

# Inspect the tag message and associated commit before deploying
$ git show --no-patch v2.1.0
```
