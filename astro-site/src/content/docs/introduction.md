---
title: "Introduction"
section: "introduction"
order: 1
---

## Overview

Git is a version control system used to track changes of text files and to a 
limited extent of binary files. Some advantages of using a software tracking 
system are:

- Code is secured against system failure
- Code changes are organized and can be traced
- Changes can be first reviewed and then saved
- Source code can easily be tagged, branched and merged
- Facilitates the management of software projects

## Features
Git is a distributed control systems, which means that the repository 
resides on the local machine and can be synced with other repositories. This 
allows very flexible workflows compared to centralized version control 
systems such as Subversion (SVN). 

- Open Source
- Distributed
- Multiple workflows
- Non-linear development
- Small and fast

## Install on Windows

1. Browse to the official Git website: https://git-scm.com/downloads
2. Click the download link for Windows and allow the download to complete.
3. Browse to the download location
4. Double-click the file to launch the installer.
5. Follow the installation steps with the default options
6. Open PowerShell after the installation
7. Type ***git --version*** to test the installation

## Install on Linux

### Ubuntu
    apt-get install git

### Fedora
    yum install git (up to Fedora 21)
    dnf install git (Fedora 22 and later)

### Debian
    apt-get install git

### Gentoo
    emerge --ask --verbose dev-vcs/git

### Arch Linux
    pacman -S git

### openSUSE
    zypper install git

### Mageia
    urpmi git

### Nix/NixOS
    nix-env -i git

### FreeBSD
    pkg install git

### Solaris 9/10/11 (OpenCSW)
    pkgutil -i git

### Solaris 11 Express
    pkg install developer/versioning/git

### OpenBSD
    pkg_add git

### Alpine
    apk add git

### Slitaz
    tazpkg get-install git

## Hosting

Git hosting is a software service, which offers storage place and git as 
technology to manage and track source code. This saves money from buying 
expensive hardware and saves also time from a time-consuming configuration of 
a local server. 

-------------------------------------------------------------------------------
### Main competitors

- https://github.com/
- https://bitbucket.org/
- https://about.gitlab.com/

-------------------------------------------------------------------------------
### Comparison

The comparison will be based on a practical approach by using the hosting 
services with a demo project and the information from the official sites of 
the hosting services. In the comparison only the offers for individuals and 
small team sizes are relevant. Professionals looking for solutions involving 
bigger teams or advanced features might have different selection criteria.

<img src="/images/git-hosting.png" alt="Git Hosting Comparison" />

## Git Dataflow

The following diagram shows an overview of the git data model and the 
basic commands used to transfer data between the storage locations.

<img src="/images/git-dataflow-diagram.png" alt="Git Dataflow" />

-------------------------------------------------------------------------------
### Repository
The repo contains the files as well as the history of the changes made to those 
files. The history is a collection of snapshots at different points of time.
The repository can be either **local** or **remote**. For git both types of 
repositories are equivalent.

-------------------------------------------------------------------------------
### Workspace
The workspace or worktree is the project on the local machine's filesystem. 
All the changes will remain in the working directory until they are 
added to the staging area or discarded.

-------------------------------------------------------------------------------
### Index
The index or also ***staging area*** is the place where the developer gathers and 
groups the changes before commit.

-------------------------------------------------------------------------------
### Practice
1. Create a remote repository on GitHub
2. Clone the remote repository
3. Create a new file test.txt and add it to the index
4. Add the file to the index
5. Commit the file to the local repo
6. Push the file to the remote repo
7. Change the file test.txt on GitHub
8. Pull the changes from the remote repo
9. Check the contents of the file test.txt

## Git Operations Overview

<img src="/images/git-ops-overview.png" alt="Git Dataflow" />

-------------------------------------------------------------------------------
### 1. Help
Get help about any given command, guide or configuration 

```shell
$ git help
$ git help --guides
$ git help --config
```
-------------------------------------------------------------------------------
### 2. Create
Create a local or remote repository.

```shell
$ git clone https://github.com/user/demo.git
```
-------------------------------------------------------------------------------
### 3. Config
Configure the local repository.

```shell
# =============================================================================
# Configure and verify the user email
# =============================================================================

$ git config --global user.email "user@mail.com"
$ git config user.email

# =============================================================================
# Create aliases
# =============================================================================

$ git config --global alias.hist "log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short"
$ git config --global alias.type 'cat-file -t'
$ git config --global alias.dump 'cat-file -p'

# =============================================================================
# Use aliases
# =============================================================================

$ git dump HEAD
```

-------------------------------------------------------------------------------
### 4. Track
Save, track and label changes.

```shell
# =============================================================================
# Add changes
# =============================================================================

$ echo 123 > README.md

# =============================================================================
# Start tracking
# =============================================================================

$ git add *

# =============================================================================
# Save the changes
# =============================================================================

$ git commit -m 'Commit message'

# =============================================================================
# Label a specific revision
# =============================================================================

$ git tag V1.0 HEAD
$ git tag

# =============================================================================
# Show the history
# =============================================================================

$ git log

```

-------------------------------------------------------------------------------
### 5. Branch
Create and merge branches, stash changes and move the HEAD.

```shell
# =============================================================================
# Create a branch and switch to it
# =============================================================================

$ git branch test
$ git switch test

# =============================================================================
# Do some work
# =============================================================================

$ echo 1 > README.md
$ git add *
$ git commit
$ echo 2 > README.md
$ git add *

# =============================================================================
# Try to switch to main without committing changes
# =============================================================================

$ git switch main

# =============================================================================
# Save changes to the stash temporarily
# =============================================================================

$ git stash
$ git stash list
$ git stash show

# =============================================================================
# Now switch to main
# =============================================================================

$ git switch main

# =============================================================================
# Switch back to test, restore changes and commit
# =============================================================================

$ git switch test
$ git stash pop
$ git commit -m 'File changed in branch'

# =============================================================================
# Merge changes from test to main
# =============================================================================

$ git switch main
$ git merge test

# =============================================================================
# Detach the HEAD
# =============================================================================

$ git checkout V1.0

# =============================================================================
# Attach the HEAD
# =============================================================================

$ git switch main

```

-------------------------------------------------------------------------------
### 6. Sync
Collaborate with other developers.

```shell
# =============================================================================
# Write changes to remote repository
# =============================================================================

$ git push
$ git push origin test

# =============================================================================
# Read changes from remote repository
# =============================================================================

$ git pull
$ git pull origin test
```

-------------------------------------------------------------------------------
### 7. Revert
Revert changes to the project files using the index or the local commit history.

```shell
# =============================================================================
# Restore file from index
# =============================================================================

$ del README.md
$ git status
$ git restore *
$ git status

# =============================================================================
# Restore index from commit history
# =============================================================================

$ echo ABCD > README.md
$ git add *
$ git status
$ git restore --staged
$ git status
```
-------------------------------------------------------------------------------
### 8. Inspect
Inspect the commit history, check the author of the modifications, get the 
repository status and other operations.

```shell
# =============================================================================
# Get the last 5 entries
# =============================================================================

$ git log -5

# =============================================================================
# Check the status of the working tree
# =============================================================================

$ git status --short

# =============================================================================
# Check the content of an object
# =============================================================================

$ git cat-file -p HEAD

# =============================================================================
# Show info about branches
# =============================================================================

$ git branch -av

# =============================================================================
# Show info about remote references
# =============================================================================

$ git remote -v
```

## Exercises

Hands-on exercises for the Introduction section. Use the reference pages
in this chapter if you get stuck. Do not skip the verification steps.

### Exercise 1: Verify Your Git Installation

**Task:** Confirm that Git is installed and check which version you are running.

**Steps:**

1. Open a terminal (PowerShell on Windows, a shell on Linux/macOS)
2. Run the command to display the installed Git version
3. Run the command to display the built-in help overview

**Verify:**

The version command prints a line starting with `git version` followed by
a version number. The help command prints a list of common Git commands grouped
by category.

---

### Exercise 2: Configure Your Identity

**Task:** Set up the user name and email that Git will attach to every commit
you make.

**Steps:**

1. Set your global user name using `git config`
2. Set your global email address using `git config`
3. Read back both values to confirm they are stored correctly
4. Display the full list of configuration settings with `git config --list`

**Verify:**

The read-back commands print exactly the name and email you entered.
Both entries also appear in the `--list` output.

---

### Exercise 3: Create a Local Repository

**Task:** Initialise a brand-new local Git repository and make your first commit.

**Steps:**

1. Create a new directory called `git-exercises` and enter it
2. Initialise a Git repository inside the directory
3. Create a file called `hello.txt` with some text in it
4. Check the status of the working tree
5. Add the file to the staging area (index)
6. Check the status again to see the file is staged
7. Commit the staged file with the message `Add hello.txt`

**Verify:**

Running `git log` shows one commit with the message `Add hello.txt`.
Running `git status` reports a clean working tree with nothing to commit.

---

### Exercise 4: Explore the Dataflow

**Task:** Walk through each storage location in the Git dataflow — workspace,
index, and local repository — by making a change and moving it through
the pipeline.

**Steps:**

1. Inside the `git-exercises` repository, edit `hello.txt` and add a second line
2. Run `git status` to see the file listed as modified (workspace)
3. Run `git diff` to see the exact change
4. Add the file to the index with `git add`
5. Run `git status` again to see the file listed as staged (index)
6. Run `git diff --staged` to see what will be committed
7. Commit the change with a descriptive message
8. Run `git log` to confirm the new commit appears in the local repository

**Verify:**

`git status` reports a clean working tree. `git log` shows two commits
in chronological order.

---

### Exercise 5: Inspect the Repository

**Task:** Use several inspection commands to examine commit history,
object contents, and repository status.

**Steps:**

1. Run `git log` to see the full commit history
2. Run `git log --oneline` to see a compact view
3. Copy the short hash of the first commit from the oneline output
4. Run `git cat-file -t <hash>` to check the object type (replace `<hash>`)
5. Run `git cat-file -p <hash>` to display the commit object contents
6. Note the tree hash printed in the output, then run `git cat-file -p <tree-hash>`
   to list the files recorded in that commit

**Verify:**

The `-t` command prints `commit`. The `-p` command on the commit shows
author, committer, tree hash, and the commit message. The `-p` command on the tree
lists the `hello.txt` blob.

---

### Exercise 6: Connect to a Remote Repository

**Task:** Create a repository on a hosting service, link it to your local
repository, and push your commits.

**Steps:**

1. Sign in to GitHub (or another hosting service from the reference page)
2. Create a new empty repository named `git-exercises` — do not add a README
   or any other files
3. Copy the HTTPS URL of the new repository
4. In your local `git-exercises` repository, add the remote with
   `git remote add origin <url>`
5. Run `git remote -v` to confirm the remote is registered
6. Push the local commits to the remote with `git push -u origin main`
7. Refresh the repository page in the browser

**Verify:**

The hosting service shows all committed files and the full commit
history matches what `git log` displays locally. Running `git branch -av`
shows both the local and remote branch pointing to the same commit.
