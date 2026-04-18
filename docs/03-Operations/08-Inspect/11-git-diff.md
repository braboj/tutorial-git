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
