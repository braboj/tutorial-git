## Conflicts

A merge conflict occurs when Git cannot automatically combine changes from
two branches. This happens when both branches modify the same lines in the
same file, or when one branch deletes a file that the other branch modifies.
Git stops the merge and asks the user to resolve the conflict manually.

Conflicts are a normal part of collaborative development. They do not
indicate an error — they simply mean that Git needs human judgement to
decide which changes to keep.

-------------------------------------------------------------------------------
### When conflicts occur

Conflicts can arise during any operation that combines work from different
sources:

 - **Merging** — `git merge` combines two branches and finds overlapping
   changes in the same file region
 - **Rebasing** — `git rebase` replays commits on top of another branch,
   and a replayed commit touches the same lines as an existing commit
 - **Cherry-picking** — `git cherry-pick` applies a single commit from
   another branch that conflicts with the current state
 - **Pulling** — `git pull` fetches and merges remote changes that overlap
   with local changes
 - **Stash application** — `git stash pop` or `git stash apply` restores
   stashed changes that conflict with the current working tree

-------------------------------------------------------------------------------
### How Git marks conflicts

When Git detects a conflict it inserts conflict markers directly into the
affected file. The markers divide the conflicting sections into two parts:

```
<<<<<<< HEAD
This is the content from the current branch (ours).
=======
This is the content from the incoming branch (theirs).
>>>>>>> feature-branch
```

| Marker | Meaning |
|--------|---------|
| `<<<<<<< HEAD` | Start of the current branch content |
| `=======` | Separator between the two versions |
| `>>>>>>> feature-branch` | End of the incoming branch content |

The text between `<<<<<<< HEAD` and `=======` is what exists on the
current branch. The text between `=======` and `>>>>>>>` is what the
incoming branch wants to introduce. The label after `>>>>>>>` shows the
name of the branch or commit being merged in.

A single file can contain multiple conflict blocks if several regions
of the file were changed by both branches.

-------------------------------------------------------------------------------
### Step-by-step resolution workflow

Resolving a conflict follows a predictable sequence:

**1. Identify the conflicting files**

After a failed merge, `git status` lists every file that needs attention:

```
$ git status
On branch main
You have unmerged paths.

Unmerged paths:
  (use "git add <file>..." to mark resolution)
        both modified:   src/config.yaml
        both modified:   src/main.py
```

Files marked as `both modified` contain conflict markers.

**2. Open and understand the conflict markers**

Open each conflicting file in an editor. Read both versions carefully.
Understand what each branch intended before deciding how to resolve the
conflict. Look at the surrounding context — the unchanged lines above and
below the markers often clarify the intent of each change.

**3. Edit to resolve**

There are three common resolution strategies:

 - **Keep one side** — delete the markers and the content from the side
   you do not want
 - **Combine both** — merge the two versions into a single coherent result
   and remove all markers
 - **Rewrite** — discard both versions and write something entirely new
   that satisfies the intent of both changes

After editing the file must not contain any conflict markers. Any remaining
`<<<<<<<`, `=======`, or `>>>>>>>` lines will cause problems.

**4. Stage resolved files**

Once a file is resolved, stage it to tell Git the conflict is handled:

```
git add src/config.yaml
git add src/main.py
```

**5. Complete the merge**

After all conflicts are staged, finalize the merge with a commit:

```
git commit
```

Git pre-fills the commit message with merge information. You can accept
the default or edit it to describe how the conflicts were resolved.

-------------------------------------------------------------------------------
### Aborting a conflicted merge

If the conflicts are too complex or the merge was started by mistake,
you can abandon it entirely:

```
git merge --abort
```

This restores the repository to the state it was in before the merge
began. All conflict markers and staged resolutions are discarded. The
working tree and index return to the pre-merge state.

This command is safe — it does not delete any commits or branches.

-------------------------------------------------------------------------------
### Conflicts during rebase

Rebasing replays commits one at a time, so conflicts can occur at each
step. The workflow differs slightly from a merge conflict:

```
$ git rebase main
CONFLICT (content): Merge conflict in src/main.py
error: could not apply abc1234... Add feature X
```

**1.** Resolve the conflict in the file as described above.

**2.** Stage the resolved file:

```
git add src/main.py
```

**3.** Continue the rebase to process the next commit:

```
git rebase --continue
```

If more commits produce conflicts, Git stops again and the process
repeats. To abandon the entire rebase and return to the original state:

```
git rebase --abort
```

To skip the current conflicting commit entirely (dropping its changes):

```
git rebase --skip
```

-------------------------------------------------------------------------------
### Using merge tools

Git can launch a graphical or terminal-based merge tool to help resolve
conflicts visually:

```
git mergetool
```

This opens each conflicting file in the configured tool. Popular merge
tools include **vimdiff**, **meld**, **kdiff3**, **Beyond Compare**, and
**VS Code**. To set a default tool:

```
git config --global merge.tool meld
```

Most merge tools display three panes — the base version (common ancestor),
the current branch version, and the incoming branch version — alongside a
result pane where you build the final output.

After the tool saves the resolved file, Git marks it as resolved. Some
tools create `.orig` backup files. To disable these:

```
git config --global mergetool.keepBackup false
```

-------------------------------------------------------------------------------
### Preventing conflicts

Conflicts cannot be eliminated entirely, but their frequency and severity
can be reduced:

 - **Communicate** — coordinate with team members about who is working on
   which files to avoid overlapping changes
 - **Keep branches short-lived** — the longer a branch diverges from the
   main line, the higher the chance of conflicts
 - **Pull frequently** — regularly integrate upstream changes into your
   branch with `git pull` or `git rebase` to stay close to the latest state
 - **Make small, focused commits** — smaller changes are easier to merge
   and produce simpler conflicts when they do occur
 - **Avoid reformatting entire files** — whitespace-only or style-only
   changes across a whole file create conflicts with every other branch
   that touches that file
 - **Use `.gitattributes`** — define merge strategies for specific file
   types (e.g., always accept ours for generated lock files)

-------------------------------------------------------------------------------
### Practical example

Two developers work on the same file. Alice changes a greeting on the
`main` branch, and Bob changes it on a `feature` branch.

**Initial file (`greeting.txt`) on both branches:**
```
Hello, welcome to the project.
```

**Alice's change on `main`:**
```
Hello, welcome to the project! We are glad you are here.
```

**Bob's change on `feature`:**
```
Hi there, welcome to the project.
```

When Bob merges `main` into his branch, Git produces a conflict:

```
$ git merge main
Auto-merging greeting.txt
CONFLICT (content): Merge conflict in greeting.txt
Automatic merge failed; fix conflicts and then commit the result.
```

The file now contains:

```
<<<<<<< HEAD
Hi there, welcome to the project.
=======
Hello, welcome to the project! We are glad you are here.
>>>>>>> main
```

Bob decides to combine both changes:

```
Hi there, welcome to the project! We are glad you are here.
```

He removes all conflict markers, stages the file, and completes the merge:

```
git add greeting.txt
git commit -m "Merge main into feature, combine greeting changes"
```

The conflict is resolved and the repository history records the merge.
