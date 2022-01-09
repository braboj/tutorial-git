## path specs

- The pathspecs is a mechanism that git uses for limiting the scope of the command to a subset of a repository
- A pathspec is a pattern used to limit paths in Git commands

-------------------------------------------------------------------------------
### commonly-used Git commands that accept a pathspecs

- add
- log
- checkout
- clean
- diff
- grep
- ls-files
- rm

The pathspec is specified after the command arguments

-------------------------------------------------------------------------------
### File or Directory

```
git add .       # add current working directory
git add src/    # add src/ directory  
```

you can also add multiple pathspecs to a command

```
git add src/ server/
```

-------------------------------------------------------------------------------
### Wildcards

In addition to files & directories, you can match patterns using *** *, ?, and [] ***.

```
git log '*.js'      # log all javascript files
git log '.*'        # log all hidden files and directories
```

You can also use the ***'?'*** character as a wildcard for a single character.
The following command will match either ***mp3*** or ***mp4*** files.

```
git ls-files '*.mp?'
```

-------------------------------------------------------------------------------
### Bracket expressions

You can also use ***bracket expressions*** to match a single character out of a set.
The following command will match ***javascript*** or ***typescript*** files.

```
git ls-files '*.[jt]s'
```

-------------------------------------------------------------------------------
### Magic signatures

Pathspecs also have the special tool called ***Magic signatures*** which unlock some additional functionality to your pathspecs.
***Magic signatures*** called by using ***:(signature)*** at the beginning of your pathspec.

**top**

The ***top*** signature tells git to match the pattern from the root of the git repository rather than the current working directory.

```
git ls-files ':(top)*.ts'
```

**icase**

The ***icase*** signature tells git to not care about case when matching.

```
git ls-files ':(icase)*.jpg'
```

**literal**

The ***literal*** signature tells git to treat all of your characters literally.
This would be used if you want to treat characters such as * and ? as themselves, rather than as wildcards.

```
git log ':(literal)*.ts'    # log only *.ts file
```

**glob**

the ***glob*** signature can be useful if you want more fine-grained control over how you search through your project’s directory structure.

```
git ls-files ':(glob)src/components/*/*.jsx'     # 'top level' jsx components
git ls-files ':(glob)src/components/**/*.jsx'    # 'all' jsx components
```

**attr**

The ***attr*** signature can set attribute requirements for your pathspec.
- Git has ability to add attributes to specific files using .gitattributes file

```
git ls-files ':(attr:!vendored)*.ts'    # searches for non-vendored ts files
git ls-files ':(attr:vendored)*.ts'     # searches for vendored ts files
```

**exclude**

pathspecs with an ***exclude*** signature are resolved and then removed from the returned paths.

The following command will search through all your typescript files excluding ***.spec.ts*** files.

```
git grep 'foo' -- '*.ts' ':(exclude)*.spec.ts'      # search .ts files excluding .spec.ts
```
you can use '--' to separate pathspecs from command parameters

-------------------------------------------------------------------------------
### Combining signatures

There is nothing limiting you from using multiple magic signatures in a single pathspec.
You can use multiple signatures by separating your magic words with commas within your parenthesis.

```
git ls-files -- ':(top,icase,glob,attr:!vendored)src/components/*/*.jsx'
```

-------------------------------------------------------------------------------
