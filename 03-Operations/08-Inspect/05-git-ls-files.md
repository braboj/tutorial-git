## git ls-files
________________________________________________________________________________
[**Content**](../../README.md) |
[**Intro**](../../01-Introduction/introduction.md) |
[**Concepts**](../../02-Concepts/concepts.md) |
[**Operations**](../../03-Operations/operations.md) |
[**Dictionary**](../../04-Appendix/dictionary.md)
________________________________________________________________________________

Show information about files in the index and the working tree.

-------------------------------------------------------------------------------
### Syntax
```
$ git ls-files [<options>]

# Legend
[]  : Optional
<>  : Replace
|   : OR

# Options
-c (--cached)           : Show staged files
-s (--staged)           : Show hash, mode, stage num, file name
-d (--deleted)          : Show deleted files
-m (--modified)         : Show modified files
-i (--ignored)          : Show ignored files
-o (--others)           : Show untracked files
-u (--unmerged)         : Show unmerged files
-x (--exclude) pattern  : Exclude files with pattern
--recurse-submodule     : Show files from submodules
--abbrev                : Use short hash
```

-------------------------------------------------------------------------------
### Examples
```shell
$ git ls-files --stage --abbrev

100644 b24d 0   .gitignore
100644 0235 0   01-Introduction/01-git-features.md
100644 491c 0   01-Introduction/02-windows-installation.md
100644 6c9b 0   01-Introduction/03-linux-installation.md
100644 059a 0   01-Introduction/04-hosting-services.md
100644 0f1a 0   01-Introduction/05-dataflow-overview.md
100644 39b5 0   01-Introduction/06-operations-overview.md
...
```



