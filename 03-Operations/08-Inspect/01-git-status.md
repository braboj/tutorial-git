## git status
________________________________________________________________________________
[**Content**](../../README.md) |
[**Intro**](../../01-Introduction/introduction.md) |
[**Concepts**](../../02-Concepts/concepts.md) |
[**Operations**](../../03-Operations/operations.md) |
[**Dictionary**](../../04-Appendix/dictionary.md)
________________________________________________________________________________

Show information about the status of the working tree. The working tree is the
collection of files and directories in the current project.

-------------------------------------------------------------------------------
### Syntax
```
$ git status [<options>]

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR
  
# Options
-------------------------------------------------------------------------------
--branch              : Show branches in short format
--short               : Short format with labels
--long                : Long format
--untracked           : Show also untracked files
--ignored             : Show also ignored files
--verbose             : Turn on/off verbose information

# Labels
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