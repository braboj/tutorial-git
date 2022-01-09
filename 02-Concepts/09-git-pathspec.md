## Pathspec

- A pathspec is a pattern used to match a path or a set of paths
- A path is a file or a directory
- A pattern can be a combination of names, wildcards and signatures
- Signatures are special words used to control the matching process

-------------------------------------------------------------------------------
### Files and directories

```
git add .               # Add current working directory
git add src/            # Add src/ directory  
git add src/ server/    # Add multiples paths
```

-------------------------------------------------------------------------------
### Wildcards

The asterics **(\*)** wildcard character matches any number of characters.

```
git log '*.js'      # Show history of all javascript files
git log '.*'        # Show history of all files and directories
git log 'qa*.js'    # Show history of all javascript files starting with qa 
```

The ***(?)*** wildcard character can be used to match a single symbol.

```
git ls-files '*.mp?'    # Files with 3 symbols and first two are mp
```

The brackets ***[ ]*** can be used to match a single character out of a set. 
The following command will match ***javascript*** or ***typescript*** files.

```
git ls-files '*.mp[34]'  # Only mp3 and mp4 files
```

The result from a pattern can be inverted with the exclamation mark **(!)*** 
symbol.  

```
git ls-files '!*.mp[34]'  # Every file except mp3 and mp4
```

-------------------------------------------------------------------------------
### Magic signatures
Magic signatures are special words provided by git to control the 
result of the matching process. 

```shell
# Syntax
:(signature)pattern

# Signatures
top (/), exclude (!), icase, literal, glob, attr
  
# Examples
':(top)*.mp3'           # All mp3 files starting form the repo root 
'*.jp* :(exclude)JPG'   # jpg and jpeg but not capital JPG
':(icase)*.jpg'         # Both lower and upper case for jpg
':(literal)Maybe?.mp3'  # File Maybe?.mp3 with ? in the name
':(attrib:!debug)*'     # All paths not having the attribute debug
':(top,icase)*.mp?'     # Combination of signatures   
```

-------------------------------------------------------------------------------
### top
Match the pattern from the root of the git repository rather than the 
current working directory.

-------------------------------------------------------------------------------
### exclude
First resolve other patterns and then use **exclude** to remove a set of 
paths from the result.

-------------------------------------------------------------------------------
### icase
Ignore case when matching.

-------------------------------------------------------------------------------
### literal
Treat all the characters literally. Useful to use wildcards as letters 
rather than wildcard symbols.

-------------------------------------------------------------------------------
### glob
Unix like matching when using the asterics (*) wildcard characters. In this 
case glob will change the matching behavior as follows:

- (*) will not match through directories
- (**) will match through directories

-------------------------------------------------------------------------------
### attr
Match folders using git attributes. Depending on the usecase git offers two 
locations to define attributes:

- .gitattribures (tracked)
- .git/info/attributes (untracked)

-------------------------------------------------------------------------------
### Commands accepting pathspecs

- add
- log
- checkout
- clean
- diff
- grep
- ls-files
- rm