## git status
Show information about the status of the working tree. The working tree is the
collection of files and directories in the current project.

-------------------------------------------------------------------------------
### Syntax
```shell
$ git status [options]

# Legend
[]  : Optional

# Options
--branch              : Show branches in short format
--short               : Short format
--long                : Long format
--untracked           : Show also untracked files
--ignored             : Show also ignored files
--verbose             : Turn on/off verbose information

# Short format labels
M   = modified
T   = file type changed
A   = added
D   = deleted
R   = renamed
C   = copied
U   = updated but unmerged
??  = untracked
!!  = ignored 
```

-------------------------------------------------------------------------------
### Examples
```shell
$ git status --short
$ git status --short --branch
$ git status --short --untracked --ignored
```