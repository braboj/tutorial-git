---
title: "Deep Internals"
section: "deep-internals"
order: 6
---

## Overview

This chapter covers power-user topics — revision selectors for navigating
complex histories, pathspec and refspec syntax, configuration layers,
and garbage collection. These concepts
are not needed for daily Git use but become essential as projects and
teams grow.

## Revision Selectors

Revision selectors (treeish) are special type of operators used to select single or
multiple revisions from the commit history. The selection can then be used to
either move the HEAD back in history or in combination with diagnostic tools.

### Ancestry selectors

#### ~
The tilde operator is used to move vertically in a linear commit history.
This operator follows always the path of the first parent. In the
diagram below this would be C1, C2, C4, C5 and C6. The other commits from
the diagram are not accessible using this operator.

![Tilde selector](../assets/images/git-selectors-tilde.png)

#### ^
The caret operator is useful to move horizontally in a non-linear commit
history. For example in the diagram below C3, C4 and C5 are the parents of
C6. The commit C3 as first parent can be referenced by ^1, C4 as second
parent by ^2 and C5 as third parent by ^3.

![Caret selector](../assets/images/git-selectors-caret.png)

### Range selectors

#### ..
The double dot operator is the difference between two sets A and B. If A
has {1, 2, 3} and B has {1, 2, 4} then the result of the double dot operator
will be {4}. The double dot operator can be replaced with ^ or --not for
queries requiring more than 2 branches.

```shell
$ git log refA..refB          # Reachable from B but not from A
$ git log refB ^refA          # Reachable from B but not from A
$ git log refB --not refA     # Reachable from B but not from A
```

![Double-dot selector](../assets/images/git-selectors-double-dot.png)

#### ...
The triple dot operator is the symmetric difference between two sets A and B.
If A has {1, 2, 3} and B has {2, 3, 4} then the result of the triple dot
operator will be {1, 4}. The symmetric difference returns elements unique to
each set.

```shell
git log --left-right main...test
```
![Triple-dot selector](../assets/images/git-selectors-triple-dot.png)

### Reflog selectors
The @ operator is used to browse the local reflog history relative to a
well-defined reference such as HEAD or a branch.

- 1.minute.ago
- 1.hour.ago
- 1.day.ago or yesterday
- 1.week.ago
- 1.month.ago
- 1.year.ago

```shell
# Show all reflogs starting from entry #1
$ git log "main@{now}"

# Show all reflogs starting from entry #1
$ git log "HEAD@{1}"

# Show all reflogs starting from yesterday
$ git log "HEAD@{yesterday}"

# Show all reflogs starting from 2 months ago
$ git log "HEAD@{2.months.ago}"
```

## Merge Strategies

Git automatically selects a merge strategy based on the branch history.
Most of the time you don't need to choose one manually. You can force a
specific strategy with the `-s` flag:

```shell
$ git merge -s <strategy> <branch>
```

### Recursive

The default strategy when merging two branches. It performs a 3-way
merge (see [Branching and Merging](03-branching-and-merging.md)) but
can also handle situations where the two branches share **multiple
common ancestors** — something that happens after criss-cross merges.

```
       A ← B ← C  (main)
      ↗         ↖
  base            merge
      ↖         ↗
       D ← E ← F  (feature)
```

In simple merges, there is one common ancestor. In criss-cross
histories, there can be several. The recursive strategy builds a
temporary merged ancestor from all of them and uses that as the base
for the 3-way comparison.

### Subtree

Used when one branch represents a **subdirectory** of another. Git
detects that the trees are nested and adjusts the paths before merging.

```
main:
├── src/
├── docs/
└── lib/           ← this is actually the root of another repo

lib-repo:
├── parser.py
└── utils.py
```

This is common when embedding an external library directly into a
project without using submodules.

```shell
$ git merge -s subtree lib-branch
```

### Octopus

Merges **more than two branches** at once in a single merge commit.
Git uses this automatically when you pass multiple branch names to
`git merge`. It only works if there are no conflicts — if any branch
conflicts, Git stops and asks you to merge them one at a time.

```
before:   A ← B  (main, HEAD)
               ↖   ↖   ↖
                C    D    E  (feature-1, feature-2, feature-3)

after:    A ← B ← M  (main, HEAD)
              ↗  ↑  ↖
             C   D   E
```

```shell
$ git merge feature-1 feature-2 feature-3
```

### Ours

Records a merge commit but **completely ignores** the other branch's
changes. The result is identical to the current branch — the incoming
branch's content is discarded. This is useful when you want to mark a
branch as merged (so it doesn't show up as unmerged) without actually
taking its changes.

```
before:   A ← B ← C  (main, HEAD)
                    ↖
                     D ← E  (abandoned-feature)

after:    A ← B ← C ← M  (main, HEAD)    ← content is identical to C
                    ↖   ↗
                     D ← E
```

```shell
$ git merge -s ours abandoned-feature
```

> **Note:** Do not confuse the **ours strategy** (`-s ours`) with the
> **ours option** (`-X ours`). The strategy ignores the entire branch.
> The option resolves individual conflicts by preferring the current
> branch's side but still includes non-conflicting changes from the
> other branch.

## Pathspec

- A pathspec is a pattern used to match a path or a set of paths
- A path is a file or a directory
- A pattern can be a combination of names, wildcards and signatures
- Signatures are special words used to control the matching process

### Files and directories

```shell
git add .               # Add current working directory
git add src/            # Add src/ directory
git add src/ header/    # Add multiples paths
```

### Wildcards

The asterisks **(\*)** wildcard character matches any number of characters.

```shell
git log '*.py'      # Show history of all python files
git log '.*'        # Show history of all files and directories
git log 'qa*.py'    # Show history of all python files starting with qa
```

The question mark ***(?)*** can be used to match a single symbol.

```shell
git ls-files '*.mp?'    # Files with 3 symbols and first two are 'mp'
```

The brackets ***[ ]*** can be used to match a single character out of a set.

```shell
git ls-files '*.mp[34]'  # Match exactly mp3 and mp4 files
```

### Magic signatures
Magic signatures are special words provided by git to control the
result of the matching process.

```shell
# Syntax
:(signature)pattern

# Signatures
top (/), exclude (!), icase, literal, glob, attr

# Examples
':/*.mp3'               # All mp3 files starting form the repo root
':!*.md'                # Everything except md files
':(icase)*.jpg'         # Both lower and upper case for jpg
':(literal)Maybe?.mp3'  # File Maybe?.mp3 with ? in the name
':(attrib:!debug)*'     # All paths not having the attribute debug
':(top,icase)*.mp?'     # Combination of signatures
```

### top
Match the pattern from the root of the git repository rather than the
current working directory.

### exclude
First resolve other patterns and then use **exclude** to remove a set of
paths from the result.

### icase
Ignore case when matching.

### literal
Treat all the characters literally. Useful to use wildcards as letters
rather than wildcard symbols.

### glob
Unix like matching when using the asterisks (*) wildcard characters. In this
case glob will change the matching behavior as follows:

- (*) will not match through directories
- (**) will match through directories

### attr
Match folders using git attributes. Depending on the usecase git offers two
locations to define attributes:

- .gitattributes (tracked)
- .git/info/attributes (untracked)

### Commands accepting pathspecs

- add
- log
- checkout
- clean
- diff
- grep
- ls-files
- rm

## Refspec

The refspec is a special syntax used by git to map remote branches to the
local repository.

### Syntax
```shell
[+]<src>:<dst>

+   : Force update of branch tip (fast forward)
src : Source location (remote branch)
dst : Destination location (local branch)
```

### Branch mapping
Refspecs are usually found in the .git/config file after ***cloning*** or
configuration with ***git remote***.

```shell
Example:
$ git config --local --edit

...
[remote "origin"]

    # Repository link
    url = https://github.com/user/project.git

    # Mapping for the fetch command
    fetch = +refs/heads/*:refs/remotes/origin/*

    # Mapping for the push command
    push = refs/heads/main:refs/heads/main
```

In the example above the first refspec is **fetch** and it maps all remote
branches from origin to the folder **refs/remotes/origin** in the local
repository. The second refspec will map the main branch from the local repo
to the main branch in the remote repo.

### Creating remote branches
Local branches can also be used to create remote branches using ***git push***
and refspecs.

```shell
git push origin main:refs/heads/test_master
```

### Deleting remote branches
Remote branches can be deleted by leaving source in the refspec empty.

```shell
git push origin :refs/heads/feature
```

### Commands accepting refspecs

- git remote
- git fetch
- git pull
- git push

## Configuration

![Configuration Model](../assets/images/git-configuration-model.png)

Git uses a layered configuration system. Settings at a more specific level
override those at a broader level: local > global > system.

### Local configuration

The ***local configuration*** file is placed in the .git folder under the name
***config***. The local configuration file is used to manage only the parameters
of the current repository.

```shell
$ git config --local --edit
[core]
        repositoryformatversion = 0
        filemode = false
        bare = false
        logallrefupdates = true
        symlinks = false
        ignorecase = true
[remote "origin"]
        url = /path/to/project.git
        fetch = +refs/heads/*:refs/remotes/origin/*
[branch "main"]
        remote = origin
        merge = refs/heads/main
```

### Global configuration

The location of the ***global configuration*** file vary depending on the
operating system used. The name of the file is ***.gitconfig***. Under Windows
the file is placed in ***C:\users\\<username\>***. The global configuration is
used to configure git for all repositories of the current user.

```shell
$ git config --global --edit
[user]
	name = Your Name
	email = your.email@example.com
[core]
	longpaths = true
	autocrlf = true
[credential]
	helper = manager
[init]
	defaultBranch = main
[alias]
	hist = log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short
	type = cat-file -t
	dump = cat-file -p
```

### System configuration

The ***system configuration*** file also depends on the operating system
used. Its name is ***gitconfig*** and under Windows it is to be found in the
installation folder of git. The system configuration is used to configure git
for all users and all repositories.

```shell
$ git config --system --edit

[diff "astextplain"]
	textconv = astextplain
[http]
	sslBackend = openssl
	sslCAInfo = /path/to/ssl/certs/ca-bundle.crt
[core]
	autocrlf = true
	fscache = true
	symlinks = false
[pull]
	rebase = false
[credential]
	helper = manager-core
[init]
	defaultBranch = main
```

## Garbage Collection

When you reset, rebase, or delete a branch, the commits that were on it
don't disappear immediately. They become **orphaned** — they still exist
in `.git/objects/` but no branch or tag points to them. Git's **garbage
collector** (`git gc`) is responsible for cleaning them up.

### When does garbage collection run?

Git runs garbage collection automatically when the number of loose
objects (unpacked files in `.git/objects/`) exceeds roughly 6,700. You
can also trigger it manually:

```shell
$ git gc                    # run garbage collection
$ git gc --aggressive       # more thorough, slower
```

### How long are orphaned commits kept?

Orphaned commits are protected by the **reflog** — a local log of
every position HEAD and branch tips have been in. As long as a commit
appears in the reflog, garbage collection will not delete it.

By default, reflog entries expire after:

| Type | Default expiry |
|------|---------------|
| Reachable commits (still on a branch) | 90 days |
| Unreachable commits (orphaned) | 30 days |

This means you have **30 days** to recover an orphaned commit using
`git reflog` before it becomes eligible for deletion.

### Changing the defaults

```shell
$ git config gc.reflogExpire 120.days.ago             # reachable: 120 days
$ git config gc.reflogExpireUnreachable 60.days.ago    # orphaned: 60 days
```

### Recovering an orphaned commit

Use the reflog to find the commit hash, then reset or create a branch:

```shell
$ git reflog                          # find the hash of the lost commit
$ git branch recovered abc1234        # create a branch pointing to it
```

Once a branch points to the commit again, it is no longer orphaned and
will not be removed by garbage collection.

## Exercises


### Exercise 1: Configure User Identity at Two Levels

**Task:** Set user name and email at the local and global levels and observe which one takes precedence.

**Steps:**

1. Inside `concepts-lab`, set a global user name and email using `git config --global`
2. Set a different local user name and email using `git config --local`
3. Run `git config --list --show-origin` to see all active settings and their sources
4. Create a file, stage it, and commit it
5. Run `git log` and check which user name and email appear in the commit
6. Remove the local overrides using `git config --local --unset user.name` and `git config --local --unset user.email`
7. Make another commit and verify the global identity is now used

**Verify:**

The first commit shows the local identity. The second commit shows the global identity. `git config --list --show-origin` displays both levels and marks which file each setting comes from.


## Quiz

**Q1.** What does `HEAD~3` refer to?

- A) The third parent of a merge commit
- B) The commit three steps back following the first parent
- C) The third branch in the repository
- D) The third file in the commit

### Answers

1. B — The commit three steps back following the first parent
