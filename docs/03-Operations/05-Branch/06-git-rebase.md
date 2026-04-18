[**Up**](../05-Branch/branch.md) |
[**Help**](../01-Help/help.md) |
[**Create**](../02-Create/create.md) |
[**Configure**](../03-Configure/configure.md) |
[**Track**](../04-Track/track.md) |
[**Branch**](../05-Branch/branch.md) |
[**Sync**](../06-Sync/sync.md) |
[**Revert**](../07-Revert/revert.md) |
[**Inspect**](../08-Inspect/inspect.md)

-------------------------------------------------------------------------------
### git rebase

Reapplies commits from the current branch on top of another base commit. Unlike
merge, rebase rewrites commit history to produce a linear sequence of commits
without merge commits. Each rebased commit gets a new hash.

-------------------------------------------------------------------------------
### Syntax
```
$ git rebase [options] <branch>
$ git rebase -i <commit>
$ git rebase --onto <newbase> <oldbase> [<branch>]

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR

# Options
-------------------------------------------------------------------------------
-i (--interactive)  : Open an editor to reorder, edit, squash, or drop commits
--onto <newbase>    : Rebase onto a specific commit instead of the branch tip
--continue          : Resume rebase after resolving a conflict
--abort             : Cancel the rebase and restore the original branch state
--skip              : Skip the current commit and continue with the next one
```

-------------------------------------------------------------------------------
### How it works

Given the following history where `feature` branched off `main`:

```
      A---B---C  (feature)
     /
D---E---F---G  (main)
```

Running `git rebase main` from the `feature` branch replays A, B, C on top of G:

```
              A'--B'--C'  (feature)
             /
D---E---F---G  (main)
```

Commits A', B', C' have the same changes as A, B, C but different hashes because
their parent commit changed.

-------------------------------------------------------------------------------
### Interactive rebase

Interactive rebase lets you edit the commit history before replaying it. Start
it by specifying how far back to go:

```shell
$ git rebase -i HEAD~3
```

This opens an editor with one line per commit:

```
pick a1b2c3d Add user login
pick e4f5g6h Fix typo in login form
pick i7j8k9l Add logout button
```

Change the command word on each line to control what happens to that commit:

| Command   | Effect                                              |
|-----------|-----------------------------------------------------|
| `pick`    | Keep the commit as-is                               |
| `reword`  | Keep the commit but edit its message                |
| `edit`    | Pause after applying so you can amend the commit    |
| `squash`  | Combine with the previous commit, keep both messages|
| `fixup`   | Combine with the previous commit, discard this message |
| `drop`    | Remove the commit entirely                          |

Save and close the editor to execute the rebase.

-------------------------------------------------------------------------------
### Rebase onto

The `--onto` flag rebases a range of commits onto an arbitrary base. This is
useful when a feature branch was started from the wrong point.

```
$ git rebase --onto <newbase> <oldbase> [<branch>]
```

Commits after `<oldbase>` up to `<branch>` (or HEAD) are replayed onto
`<newbase>`.

```shell
# Move commits that are on feature but not on develop onto main
$ git rebase --onto main develop feature
```

Before:
```
      o---o---o  (feature, branched from develop)
     /
D---E---F  (develop)
     \
      G---H  (main)
```

After:
```
              o'--o'--o'  (feature, now based on main)
             /
      G-----H  (main)
```

-------------------------------------------------------------------------------
### Aborting and continuing

When a conflict occurs during rebase, Git pauses and lets you resolve it.

```shell
# Fix the conflict in your editor, then stage the resolved files
$ git add <resolved-file>

# Continue the rebase with the resolved changes
$ git rebase --continue

# Or abort and return to the state before the rebase started
$ git rebase --abort

# Or skip the current commit entirely
$ git rebase --skip
```

-------------------------------------------------------------------------------
### Rebase vs merge

| Aspect         | Rebase                          | Merge                           |
|----------------|----------------------------------|---------------------------------|
| History        | Linear, no merge commits         | Preserves branch topology       |
| Commit hashes  | Rewritten (new hashes)           | Original hashes preserved       |
| Conflicts      | Resolved per replayed commit     | Resolved once in merge commit   |
| Use case       | Clean up local work before push  | Record that branches converged  |
| Shared branches| Never rebase shared branches     | Safe on any branch              |

Use rebase to keep a clean linear history on local feature branches. Use merge
when integrating work that has already been pushed and shared with others.

-------------------------------------------------------------------------------
### Golden rule

Never rebase commits that have been pushed to a shared repository. Rebase
rewrites commit hashes. Other developers who based work on the original commits
will have divergent histories and will need to force-reconcile, which risks
losing their work.

```shell
# Safe: rebase your local feature branch onto latest main before pushing
$ git fetch origin
$ git rebase origin/main

# Dangerous: rebasing after pushing to a shared branch
$ git push origin feature
$ git rebase main            # Rewrites already-pushed commits
$ git push --force origin feature  # Forces others to reset
```

-------------------------------------------------------------------------------
### Examples
```shell
# Rebase current branch onto main
$ git switch feature
$ git rebase main

# Interactive rebase: squash the last 3 commits into one
$ git rebase -i HEAD~3
# Change "pick" to "squash" on the second and third lines, save, and edit the
# combined commit message

# Reword the last commit message without changing any files
$ git rebase -i HEAD~1
# Change "pick" to "reword", save, then edit the message

# Rebase onto: move feature from develop to main
$ git rebase --onto main develop feature

# Abort a rebase in progress
$ git rebase --abort

# Pull with rebase instead of merge
$ git pull --rebase origin main
```
