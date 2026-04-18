---
title: "Track"
section: "operations"
order: 3
subsection: "track"
subsectionOrder: 4
---

### git add

- Updates the index using the working tree
- Can be performed multiple times before a commit.
- Ignored files are not added by default

-------------------------------------------------------------------------------
### Syntax
```
$ git add <pathspec>     

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR
  
# Options
-------------------------------------------------------------------------------
-A (--all)          : Add all files in the working tree
-f (--force)        : Add ignored files
-i (--interactive)  : Interactive mode
-e (--edit)         : Compare working tree with index 
```

-------------------------------------------------------------------------------

### Examples
```shell
$ git add .               # add current directory
$ git add src/            # add src/ directory
$ git add README.md       # add only README.md
$ git add src/ include/   # adds both src/ and include
$ git add src/*.c         # adds all .c files in /src
$ git add '*.mp?'         # adds mp3 or mp4 files
$ git add '*.py[cod]'     # adds pyc, pyo, pyd files
```

### git commit

Saves the changes to the commit history with a short message describing the 
work done.

-------------------------------------------------------------------------------
### Syntax
```
$ git commit -m <message>

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR
```

### Examples
```shell
$ git commit -m 'Hello world!'
```

### git tag

Puts a label on a commit.  Git supports lightweight and annotated tags. The
lightweight tags are used for local releases and the annotated tags for public
releases.

-------------------------------------------------------------------------------
### Syntax
```
$ git tag <tagname> -l | -d                
$ git tag <tagname> <object>                 
$ git tag <tagname> <object> -a -m <message>

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR
  
# Options
-------------------------------------------------------------------------------
-a (--annotate)     : Annotate tag
-m (--message)      : Tag message
-d (--delete)       : Delete a tag
-l (--list)         : List tags
```

-------------------------------------------------------------------------------

### Examples
```shell
# Create a new lightweight tag
$ git tag V1.0.0.0 ba519

# Create a new annotated tag
$ git tag V1.0.0.0 ba519 -a -m 'Tag V1.0.0.0'

# Delete an existing tag
$ git tag V1.0.0.0 -d

# List tags with wildcards
$ git tag V1* -l

# Delete all tags with PowerShell
$ git tag | foreach-object -process { git tag -d $_ }

# Rename a tag
$ git tag V1
$ git tag V1 V1.0
$ git tag -d V1
```

### git rm

Remove files from the index and the working directory and stage them for
commit. This command is useful only when the files are part of the commit
history.

-------------------------------------------------------------------------------
### Syntax
```
$ git rm <pathspec> <options>

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR
  
# Options
-------------------------------------------------------------------------------
--cached    : Remove from the index but keep the local copy
-r          : Recursive
-f          : Do by force
```

-------------------------------------------------------------------------------
### Examples
```shell
# Create commit history
$ mkdir test
$ mkdir ./test/t2
$ echo t1 > ./test/t1.txt
$ echo t2 > ./test/t2/t2.txt
$ echo test > README.md
$ git add .
$ git commit -m 'test'

# Remove all files from a directory recursively
$ git rm ./test -r
rm 'test/t1.txt'   
rm 'test/t2/t2.txt'

# Check the status
$ git status
On branch main                                     
Changes to be committed:                           
  (use "git restore --staged <file>..." to unstage)
        deleted:    test/t1.txt                    
        deleted:    test/t2/t2.txt
              
# Remove file from index but keep on the local machine
$ git rm README.md --cached
rm 'README.md'

# Check the status
$ git status
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        deleted:    README.md
        deleted:    test/t1.txt
        deleted:    test/t2/t2.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        README.md
```

### git mv

Move or rename a file or a directory and stage the changes.

-------------------------------------------------------------------------------
### Syntax
```
$ git mv [<options>] <old pathspec> <new pathspec>

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR
  
# Options
-------------------------------------------------------------------------------
-f (--force)    : Force renaming or moving of a file even if the target exists
-v (--verbose)  : Report the names of files as they are moved.
```

-------------------------------------------------------------------------------
### Examples
```shell
$ mkdir test1
$ echo 1 > ./test1/test
$ git mv ./test1 ./test2
```
