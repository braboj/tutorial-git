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
