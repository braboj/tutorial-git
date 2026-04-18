---
title: "Playbook"
section: "playbook"
order: 3
---

## Overview

This chapter is a sequence of hands-on workflows that build on each other.
Start from Exercise 1 and work through in order — later exercises use
repositories created in earlier ones. Each exercise includes verification
steps so you can confirm the result before moving on.

For command syntax, see [Appendix](04-appendix.md). For definitions, see
[Glossary](05-glossary.md). For conceptual
background, see [Concepts](02-concepts.md).

---

### Exercise 1: First Repository

**Task:** Initialize a new repository, track files, and make your first commits.

**Steps:**

1. Create a new directory called `practice-repo` and initialize a git repository
2. Configure your name and email for this repository
3. Create a file called `README.md` with the text `# Practice Project`
4. Stage the file and commit it with the message `Initial commit`
5. Create a file called `app.py` with the text `print("hello")`
6. Create a file called `notes.txt` with the text `TODO: add tests`
7. Stage only `app.py` and commit with the message `Add application entry point`
8. Stage `notes.txt` and commit with the message `Add development notes`

**Verify:**

Run `git log --oneline` — you should see three commits in reverse
chronological order.

---

### Exercise 2: Inspecting History

**Task:** Use status, log, and diff to understand what changed and when.

**Steps:**

1. Continue in the `practice-repo` from Exercise 1
2. Edit `app.py` — change the print message to `print("hello, world")`
3. Run `git status` and note the file state
4. Run `git diff` to see the unstaged change
5. Stage the file, then run `git diff --staged` to see the staged change
6. Commit with the message `Update greeting message`
7. Run `git log --oneline --all` to see the full history
8. Run `git show HEAD` to inspect the latest commit in detail

**Verify:**

`git status` reports a clean working tree. `git log --oneline` shows
four commits.

---

### Exercise 3: Tagging a Release

**Task:** Create annotated and lightweight tags to mark specific commits.

**Steps:**

1. Continue in the `practice-repo` from Exercise 2
2. Create an annotated tag `v1.0.0` on the current commit with the message
   `First stable release`
3. Edit `app.py` — add a second line: `print("goodbye")`
4. Stage and commit with the message `Add farewell message`
5. Create a lightweight tag `v1.1.0-beta` on this commit
6. Run `git tag` to list all tags
7. Run `git show v1.0.0` to inspect the annotated tag

**Verify:**

`git tag` lists both `v1.0.0` and `v1.1.0-beta`. `git show v1.0.0`
displays the tag metadata and the commit it points to.

---

### Exercise 4: Removing and Moving Files

**Task:** Use git rm and git mv to manage tracked files properly.

**Steps:**

1. Continue in the `practice-repo` from Exercise 3
2. Remove `notes.txt` from tracking and from disk using `git rm`
3. Commit with the message `Remove development notes`
4. Rename `app.py` to `main.py` using `git mv`
5. Commit with the message `Rename app.py to main.py`
6. Run `git log --oneline --follow main.py` to trace the rename history

**Verify:**

`ls` shows only `README.md` and `main.py`. `git log --follow main.py`
shows commits from before and after the rename.

---

### Exercise 5: Feature Branch Workflow

**Task:** Create a feature branch, make changes, and merge back to main.

**Steps:**

1. Continue in the `practice-repo` from Exercise 4
2. Create and switch to a branch called `feature/add-config`
3. Create a file `config.yaml` with the text `debug: true`
4. Stage and commit with the message `Add configuration file`
5. Add another line to `config.yaml`: `port: 8080`
6. Stage and commit with the message `Add port setting`
7. Switch back to `main`
8. Merge `feature/add-config` into `main`

**Verify:**

`git log --oneline --graph` shows the merge. `config.yaml` exists on
`main` with both lines.

---

### Exercise 6: Comparing Branches with Diff

**Task:** Use diff to compare branches before merging.

**Steps:**

1. Continue in the `practice-repo` from Exercise 5
2. Create and switch to a branch called `feature/logging`
3. Create a file `logger.py` with the text `import logging`
4. Stage and commit with the message `Add logger module`
5. Edit `main.py` — add a line: `import logger`
6. Stage and commit with the message `Integrate logger into main`
7. Before merging, switch to `main` and run `git diff main..feature/logging`
8. Run `git diff main..feature/logging --stat` for a summary
9. Merge `feature/logging` into `main`

**Verify:**

`git diff main..feature/logging` produces no output after the merge
(the branches point to the same commit or the merge commit includes all changes).

---

### Exercise 7: Stashing Work in Progress

**Task:** Use stash to save incomplete work while switching branches for an
urgent fix.

**Steps:**

1. Continue in the `practice-repo` from Exercise 6
2. Create and switch to a branch called `feature/docs`
3. Edit `README.md` — add a line: `## Installation`
4. Stage the change but do not commit
5. An urgent fix is needed — stash your changes with the message `WIP: docs`
6. Switch to `main` and create a branch called `hotfix/typo`
7. Edit `config.yaml` — change `debug: true` to `debug: false`
8. Stage and commit with the message `Fix: disable debug in production`
9. Switch to `main` and merge `hotfix/typo`
10. Switch back to `feature/docs` and restore your stashed changes
11. Commit with the message `Add installation section to README`

**Verify:**

`git stash list` is empty. Both branches' work is committed.
`config.yaml` has `debug: false` and `README.md` has the Installation heading.

---

### Exercise 8: Resolving a Merge Conflict

**Task:** Create a merge conflict intentionally and resolve it.

**Steps:**

1. Continue in the `practice-repo` from Exercise 7
2. On `main`, edit `main.py` — change the first line to `print("hello from main")`
3. Stage and commit with the message `Update greeting on main`
4. Create and switch to a branch called `feature/greeting`
5. Edit `main.py` — change the first line to `print("hello from feature")`
6. Stage and commit with the message `Update greeting on feature`
7. Switch to `main` and attempt to merge `feature/greeting`
8. Git reports a conflict — open `main.py` and find the conflict markers
9. Resolve the conflict by keeping the text `print("hello from both")`
10. Stage the resolved file and complete the merge commit

**Verify:**

`git log --oneline --graph` shows the merge. `main.py` contains
`print("hello from both")` on the first line.

---

### Exercise 9: Rewriting History with Rebase

**Task:** Use rebase to create a linear history instead of a merge commit.

**Steps:**

1. Create a fresh repository called `rebase-practice` and initialize it
2. Create `index.html` with the text `<h1>Home</h1>`, stage, and commit
3. Create a branch called `feature/about` and switch to it
4. Create `about.html` with the text `<h1>About</h1>`, stage, and commit
5. Add a second line `<p>Company info</p>` to `about.html`, stage, and commit
6. Switch to `main` and add `<p>Welcome</p>` to `index.html`, stage, and commit
7. Switch to `feature/about` and rebase onto `main`
8. Switch to `main` and fast-forward merge `feature/about`

**Verify:**

`git log --oneline --graph` shows a straight line with no merge
commits. `index.html` and `about.html` both exist with their latest content.

---

### Exercise 10: Cherry-Picking a Hotfix

**Task:** Apply a specific commit from one branch to another without merging
the entire branch.

**Steps:**

1. Continue in the `rebase-practice` repository from Exercise 9
2. Create and switch to a branch called `feature/contact`
3. Create `contact.html` with the text `<h1>Contact</h1>`, stage, and commit
4. Edit `index.html` — fix a typo by changing `<h1>Home</h1>` to
   `<h1>Home Page</h1>`, stage, and commit with the message `Fix home page title`
5. Add `<p>Email us</p>` to `contact.html`, stage, and commit
6. Switch to `main` — you only need the title fix, not the contact page
7. Run `git log feature/contact --oneline` to find the hash of the title fix
8. Cherry-pick that single commit onto `main`

**Verify:**

`git log --oneline` on `main` shows the cherry-picked commit.
`index.html` contains `<h1>Home Page</h1>`. `contact.html` does not exist on
`main`.

---

### Exercise 11: Undoing Mistakes with Reset

**Task:** Practice the three reset modes to understand what each one preserves.

**Steps:**

1. Create a fresh repository called `reset-practice` and initialize it
2. Create `file.txt` with the text `line 1`, stage, and commit
3. Add `line 2` to `file.txt`, stage, and commit
4. Add `line 3` to `file.txt`, stage, and commit
5. Run `git log --oneline` and note the three commit hashes
6. Run `git reset --soft HEAD~1` — check `git status` and `git log`
7. Observe that `line 3` is staged but the commit is gone
8. Commit it again with the message `Re-add line 3`
9. Run `git reset --mixed HEAD~1` — check `git status` and `git log`
10. Observe that `line 3` is in the working directory but unstaged
11. Stage and commit it again with the message `Re-add line 3 again`
12. Run `git reset --hard HEAD~1` — check `git status` and the file contents
13. Observe that `line 3` is gone from the file entirely
14. Use `git reflog` to find the lost commit and restore it with
    `git reset --hard <hash>`

**Verify:**

After the final recovery, `file.txt` contains all three lines and
`git log --oneline` shows the restored commit.

---

### Exercise 12: Rebase Conflict Resolution

**Task:** Handle conflicts during a rebase and complete the operation.

**Steps:**

1. Create a fresh repository called `conflict-rebase` and initialize it
2. Create `shared.txt` with the text `original content`, stage, and commit
3. Create and switch to a branch called `feature/update`
4. Change `shared.txt` to `feature content`, stage, and commit
5. Switch to `main` and change `shared.txt` to `main content`, stage, and commit
6. Switch to `feature/update` and run `git rebase main`
7. Git pauses with a conflict — open `shared.txt` and find the conflict markers
8. Resolve by writing `merged content` as the file content
9. Stage the resolved file and run `git rebase --continue`
10. Switch to `main` and fast-forward merge `feature/update`

**Verify:**

`git log --oneline --graph` shows a linear history with no merge
commits. `shared.txt` contains `merged content`.
