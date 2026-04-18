## Exercises

Hands-on exercises for reinforcing the concepts covered in this section.
All exercises use a fresh, disposable repository unless stated otherwise.

---

### Exercise 1: Create and Inspect a Repository

**Task:** Initialize a new Git repository and explore its internal structure.

**Steps:**
1. Create a new directory called `concepts-lab` and navigate into it
2. Run `git init` to create a repository
3. List the contents of the `.git` directory
4. Identify the `objects`, `refs/heads`, and `refs/tags` subdirectories
5. Read the `HEAD` file and note what it points to
6. Create a bare repository called `concepts-lab.git` in a sibling directory using `git init --bare`
7. Compare the directory structure of the bare repository with the `.git` folder

**Verify:** The `.git` directory exists and contains `objects`, `refs`, `HEAD`, and `config`. The bare repository has the same internal structure but no working tree.

---

### Exercise 2: Configure User Identity at Two Levels

**Task:** Set user name and email at the local and global levels and observe which one takes precedence.

**Steps:**
1. Inside `concepts-lab`, set a global user name and email using `git config --global`
2. Set a different local user name and email using `git config --local`
3. Run `git config --list --show-origin` to see all active settings and their sources
4. Create a file, stage it, and commit it
5. Run `git log` and check which user name and email appear in the commit
6. Remove the local overrides using `git config --local --unset user.name` and `git config --local --unset user.email`
7. Make another commit and verify the global identity is now used

**Verify:** The first commit shows the local identity. The second commit shows the global identity. `git config --list --show-origin` displays both levels and marks which file each setting comes from.

---

### Exercise 3: Explore Git Objects

**Task:** Create blobs, trees, and commits, then inspect them with plumbing commands.

**Steps:**
1. In `concepts-lab`, create a file called `hello.txt` with the content `Hello, Git!`
2. Stage the file with `git add hello.txt`
3. Run `git ls-files --stage` and note the blob hash next to the file name
4. Inspect the blob content using `git cat-file -p <blob-hash>`
5. Inspect the blob type using `git cat-file -t <blob-hash>`
6. Commit the file
7. Run `git log --format=raw -1` to see the commit object and note the tree hash
8. Inspect the tree using `git cat-file -p <tree-hash>`
9. Verify that the tree references the same blob hash from step 3
10. Browse the `.git/objects` directory and locate the two-character subdirectory matching the first two characters of the blob hash

**Verify:** `git cat-file -p` on the blob prints `Hello, Git!`. The tree object lists the blob hash with mode `100644` and file name `hello.txt`. The corresponding object file exists on disk under `.git/objects`.

---

### Exercise 4: Lightweight and Annotated Tags

**Task:** Create both tag types and compare how Git stores them internally.

**Steps:**
1. In `concepts-lab`, make sure you have at least one commit
2. Create a lightweight tag called `v0.1` using `git tag v0.1`
3. Create an annotated tag called `v1.0` with the message `First release` using `git tag -a v1.0 -m "First release"`
4. List all tags with `git tag`
5. Read the lightweight tag reference file at `.git/refs/tags/v0.1` and note the hash
6. Read the annotated tag reference file at `.git/refs/tags/v1.0` and note the hash
7. Run `git cat-file -t` on both hashes and compare the object types
8. Run `git cat-file -p` on the annotated tag hash and inspect the tagger, date, message, and target reference

**Verify:** The lightweight tag hash points directly to a commit object (`git cat-file -t` prints `commit`). The annotated tag hash points to a tag object (`git cat-file -t` prints `tag`), which in turn references the commit.

---

### Exercise 5: Stage, Unstage, and Inspect the Index

**Task:** Use the index to selectively stage changes and observe its contents.

**Steps:**
1. In `concepts-lab`, create two files: `tracked.txt` and `experimental.txt`
2. Stage only `tracked.txt` with `git add tracked.txt`
3. Run `git ls-files --stage` to see what is in the index
4. Run `git status` and note which file is staged and which is untracked
5. Now stage `experimental.txt` with `git add experimental.txt`
6. Run `git ls-files --stage` again and confirm both entries appear
7. Remove `experimental.txt` from the index without deleting the file using `git rm --cached experimental.txt`
8. Run `git ls-files --stage` a final time and confirm only `tracked.txt` remains
9. Commit the staged file

**Verify:** After step 7, `git ls-files --stage` shows only `tracked.txt`. After the commit, `git status` shows `experimental.txt` as untracked and the working tree is otherwise clean.

---

### Exercise 6: Create, Switch, and Delete Branches

**Task:** Practice the full branch lifecycle and observe how references change.

**Steps:**
1. In `concepts-lab`, confirm you are on the `main` branch with `git branch`
2. Read `.git/refs/heads/main` and note the commit hash
3. Create a new branch called `feature/greeting` using `git branch feature/greeting`
4. Read `.git/refs/heads/feature/greeting` and confirm it points to the same commit
5. Switch to the new branch with `git switch feature/greeting`
6. Read `.git/HEAD` and confirm it now references `refs/heads/feature/greeting`
7. Create a new file `greeting.txt`, stage, and commit it
8. Read `.git/refs/heads/feature/greeting` again and confirm it advanced to the new commit
9. Read `.git/refs/heads/main` and confirm it still points to the original commit
10. Switch back to `main` and delete the branch with `git branch -d feature/greeting`

**Verify:** After deletion, the file `.git/refs/heads/feature/greeting` no longer exists. `git branch` lists only `main`. The commit created on the feature branch becomes unreachable.

---

### Exercise 7: Three-Way Merge with a Conflict

**Task:** Create a merge conflict, inspect the conflict markers, and resolve it manually.

**Steps:**
1. In `concepts-lab`, create a file `config.txt` with the line `mode=production` and commit it on `main`
2. Create and switch to a branch `feature/debug` using `git switch -c feature/debug`
3. Change the line in `config.txt` to `mode=debug` and commit
4. Switch back to `main`
5. Change the same line in `config.txt` to `mode=staging` and commit
6. Run `git merge feature/debug`
7. Open `config.txt` and locate the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
8. Run `git ls-files --stage` and observe the three stage entries (base, ours, theirs) for `config.txt`
9. Edit `config.txt` to resolve the conflict by choosing one value or combining them
10. Stage the resolved file with `git add config.txt` and complete the merge with `git commit`

**Verify:** After the merge commit, `git log --oneline --graph` shows the two branches converging. `git ls-files --stage` shows a single stage-0 entry for `config.txt`. The file contains the resolved content with no conflict markers.

---

### Exercise 8: Stash and Restore Work in Progress

**Task:** Use the stash to save uncommitted changes, switch branches, then restore them.

**Steps:**
1. In `concepts-lab`, make sure you are on `main` with a clean working tree
2. Create a file `notes.txt` with the content `Work in progress`
3. Stage the file with `git add notes.txt`
4. Run `git stash push -m "wip: notes"` to save the changes
5. Confirm the working tree is clean with `git status`
6. Run `git stash list` and note the stash entry `stash@{0}`
7. Inspect the stash reference at `.git/refs/stash` and run `git cat-file -p` on it
8. Create and switch to a new branch `feature/other`, make any commit, then switch back to `main`
9. Restore the stashed changes with `git stash pop`
10. Confirm `notes.txt` is back in the working tree and staged

**Verify:** After `git stash pop`, `git status` shows `notes.txt` as a staged new file. `git stash list` is empty.

---

### Exercise 9: Partial Staging with the Index

**Task:** Stage only some changes from a single file to make a focused commit.

**Steps:**
1. In `concepts-lab`, create a file `multi.txt` with three lines: `line1`, `line2`, `line3` and commit it
2. Modify the file so that `line1` becomes `LINE1` and `line3` becomes `LINE3` (leave `line2` unchanged)
3. Run `git diff` to confirm both hunks appear
4. Use `git add -p multi.txt` to interactively stage only the first hunk (the change to `line1`)
5. Run `git diff --cached` and confirm only the `line1` change is staged
6. Run `git diff` and confirm the `line3` change remains in the working tree
7. Commit the staged hunk
8. Stage and commit the remaining change

**Verify:** `git log --oneline` shows two separate commits. Running `git diff HEAD~1 HEAD~2` shows only the `line1` change. Running `git diff HEAD HEAD~1` shows only the `line3` change.

---

### Exercise 10: Simulate a Branching Strategy

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

**Verify:** `main` and `develop` both contain the `v1.1` change and the `login.txt` file. The tag `v1.1` exists and points to the merge commit on `main`. The feature and release branches are deleted. The graph shows the expected merge topology.
