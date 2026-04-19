---
title: "Deep Internals"
section: "deep-internals"
order: 4
---

## Overview

This chapter covers power-user topics — revision selectors for navigating
complex histories, pathspec and refspec syntax, subproject management,
configuration layers, and branching strategies for teams. These concepts
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

## Subprojects

Very often a source code has to be **reused** in many projects. Code
which is reused is also called a **module**, a **library**, a **framework**,
or a **package**. It is not feasible to copy the code each time, as
each copy must be maintained manually. It is much easier to have a central
repository with the reused code and let git automate the copying and
synchronization of the files. Git offers two popular solutions for
this: **submodule** and **subtree**.

### Submodules

- A small footprint size
- A submodule is a **reference to a specific commit** of another repository
- A submodule **must be updated manually** to clone the submodule
- A special folder **.git/modules hosts the submodules objects** after update
- A submodule **links a branch or a specific revision**
- A repository can have **more than one** submodule
- Submodules can be **nested**

![Submodules](../assets/images/git-submodules.png)

#### Why submodules?
- Submodules are native to git
- Submodule repositories have their own commit history
- A new submodule version can be released without affecting the project
- A checkout to a different revision of the submodule doesn't affect the project
- Usually used for bigger project where checkout times can be significant

#### Submodules drawbacks
- No automatic updates for the submodule
- Use of additional set of commands to handle submodules
- Nested submodules are omitted by default
- Merging changes from the project into the submodules are difficult

### Subtrees

- A transparent view of the code base
- A subtree is a **full copy of another repository** with files and history
- A subtree can be handled **using standard commands**
- A repository can have **more than one subtree**
- Subtrees are **not nested**

![Subtrees](../assets/images/git-subtrees.png)

#### Why subtrees?
- A subtree can be updated using standard commands (clone or pull)
- A subtree is easier to use for branching and merging
- A subtree doesn't add metadata files
- Older version of git are supported (even before v1.5.2)
- Usually used for integrated projects with frequent commits

#### Subtree drawbacks
- Subtree is a tool and not native to git
- Subtrees require a deeper understanding of git merging strategies
- Special attention of not mixing project and subtree code in commits
- A checkout to a different revision will affect all the project files
- Not recommended when the amount of dependencies is too large.

### Which to use?

> **Git submodules** is more fit to a ***component-based development*** where
> the project depends on a specific version (commit) of an external
> repository and the user doesn't change the code of the submodule or the
> submodule doesn't change frequently.

> **Git subtrees** is more fit to a ***system-based development*** where the
> user wants to have a full copy all files and their history and the
> subtree will be changed frequently either by the maintainer or by the
> user himself.

### Other tools

- [google repo](https://gerrit.googlesource.com/git-repo/)
- [git subrepo](https://github.com/ingydotnet/git-subrepo#readme)
- [git slave](https://sourceforge.net/p/gitslave/code/ci/master/tree)

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

## Branching Strategies

A branching strategy is a set of rules that a team agrees on for creating,
naming, merging, and deleting branches. Without a shared strategy, repositories
become cluttered with long-lived branches, merge conflicts grow, and releases
become unpredictable. Choosing the right strategy depends on team size, release
cadence, and deployment model.

### Git Flow

Git Flow, introduced by Vincent Driessen in 2010, uses five branch types to
manage releases and parallel development.

**Branch types:**

| Branch | Lifetime | Purpose |
|--------|----------|---------|
| `main` | Permanent | Production-ready code. Every commit is a release. |
| `develop` | Permanent | Integration branch for the next release. |
| `feature/*` | Temporary | New functionality. Branches off `develop`, merges back into `develop`. |
| `release/*` | Temporary | Release preparation and stabilization. Branches off `develop`, merges into both `main` and `develop`. |
| `hotfix/*` | Temporary | Urgent production fixes. Branches off `main`, merges into both `main` and `develop`. |

**Typical workflow:**

1. Developers create `feature/*` branches from `develop`.
2. Completed features merge back into `develop`.
3. When `develop` is ready for release, a `release/*` branch is created.
4. Bug fixes go into the release branch; no new features are added.
5. The release branch merges into `main` (tagged) and back into `develop`.
6. Critical production bugs get a `hotfix/*` branch from `main`.

**When to use:**

- Products with versioned releases (v1.0, v2.0)
- Multiple environments (dev, staging, production)
- Teams that need to support older versions in parallel

**Pros:**

- Clear separation between development, stabilization, and production
- Supports multiple release versions simultaneously
- Well-defined process for hotfixes

**Cons:**

- High branch overhead — five branch types to manage
- Merge conflicts accumulate on long-lived `develop` and `release` branches
- Slower feedback loop — changes pass through multiple branches before release
- Overkill for teams that deploy continuously

### GitHub Flow

GitHub Flow is a simplified strategy designed around continuous deployment. It
uses only two branch types: `main` and short-lived feature branches.

**Typical workflow:**

1. `main` is always deployable.
2. Create a feature branch from `main` for any change.
3. Commit to the feature branch and open a pull request.
4. The team reviews the pull request.
5. Merge into `main` and deploy immediately.

**When to use:**

- Web applications with continuous deployment
- Small to medium teams
- Projects where there is only one production version

**Pros:**

- Simple — only two branch types
- Fast feedback — changes reach production quickly
- Pull requests enforce code review as a natural part of the workflow
- Easy to automate with CI/CD pipelines

**Cons:**

- No built-in concept of releases or versioning
- Assumes `main` is always deployable, which requires strong test coverage
- Does not handle multiple supported versions well
- Hotfixes follow the same path as features — no fast lane

### Trunk-Based Development

Trunk-Based Development (TBD) takes simplification further. Developers commit
directly to `main` (the trunk) or use very short-lived branches that are merged
within hours, not days.

**Key practices:**

- Branches live for less than one day whenever possible.
- Feature flags hide incomplete work so the trunk stays releasable.
- Continuous integration runs on every push to the trunk.
- Code review happens before merge (pair programming or rapid PR review).

**When to use:**

- Teams with mature CI/CD pipelines and high test coverage
- Experienced developers comfortable with small, incremental changes
- Organizations that deploy multiple times per day

**Pros:**

- Minimal merge conflicts because branches are short-lived
- Fastest possible integration feedback
- Encourages small, focused commits
- Reduces the complexity of branch management to near zero

**Cons:**

- Requires strong CI/CD infrastructure and automated testing
- Feature flags add code complexity and need cleanup
- Less suitable for teams with junior developers or infrequent releases
- Direct trunk commits can destabilize the build without discipline

### Comparison

| Aspect | Git Flow | GitHub Flow | Trunk-Based |
|--------|----------|-------------|-------------|
| Branch types | 5 | 2 | 1–2 |
| Branch lifetime | Days to weeks | Hours to days | Hours |
| Release model | Versioned | Continuous | Continuous |
| Merge complexity | High | Low | Minimal |
| CI/CD requirement | Optional | Recommended | Essential |
| Multiple versions | Yes | No | No |
| Team size | Medium to large | Small to medium | Any (experienced) |
| Learning curve | Steep | Low | Low |

### How to choose

There is no universally correct strategy. Use these questions to narrow down
the options:

1. **How often do you release?** If you release on a fixed schedule with version
   numbers, Git Flow gives you the structure for that. If you deploy on every
   merge, GitHub Flow or Trunk-Based Development is a better fit.

2. **Do you support multiple versions?** If customers run different versions in
   production and you need to ship patches to older releases, Git Flow handles
   this naturally. The other strategies assume a single production version.

3. **How strong is your CI/CD pipeline?** Trunk-Based Development depends on
   fast, reliable automated tests. Without them, broken commits reach production.
   If your test infrastructure is still maturing, GitHub Flow with pull request
   checks is a safer starting point.

4. **How large is the team?** Trunk-Based Development works well at any scale
   but requires discipline. Git Flow provides guardrails that help larger teams
   coordinate. GitHub Flow sits in the middle.

5. **Can you use feature flags?** If your tooling supports feature flags,
   Trunk-Based Development becomes practical even for large features. Without
   feature flags, short-lived branches may not be feasible for multi-week work.

Start simple. GitHub Flow is a good default for most teams. Move to Git Flow
when you need versioned releases or multi-version support. Move to Trunk-Based
Development when your CI/CD maturity and team discipline allow it.

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


### Exercise 2: Simulate a Branching Strategy

**Task:** Apply a simplified Git Flow workflow using branches and merges.

**Steps:**

1. Create a fresh repository called `flow-lab` and navigate into it
2. Create an initial commit on `main` with a file `app.txt` containing `v1.0`
3. Create a `develop` branch from `main` and switch to it
4. Create a `feature/login` branch from `develop`, add a file `login.txt`, and commit
5. Merge `feature/login` into `develop` and delete the feature branch
6. Create a `release/1.1` branch from `develop`
7. On the release branch, update `app.txt` to `v1.1` and commit the change
8. Merge `release/1.1` into `main` and tag `main` with an annotated tag `v1.1`
9. Merge `release/1.1` into `develop` to bring the version bump back
10. Delete the release branch
11. Run `git log --oneline --graph --all` to visualize the full history

**Verify:**

`main` and `develop` both contain the `v1.1` change and the `login.txt` file. The tag `v1.1` exists and points to the merge commit on `main`. The feature and release branches are deleted. The graph shows the expected merge topology.

## Quiz

**Q1.** Which branching strategy uses `main`, `develop`, `feature/*`, `release/*`, and `hotfix/*` branches?

- A) GitHub Flow
- B) Trunk-Based Development
- C) Git Flow
- D) Feature Branch Workflow

### Answers

1. C — Git Flow
