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
