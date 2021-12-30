## Index

The index is a binary file (generally kept in .git/index) containing a sorted
list of path names, each with permissions and the hashcode of a blob object; 

The content of the index can be inspected with the ***git ls-files*** command.

```shell
$ git ls-files --stage
<mode> <object>                                 <stage> <file>
100644 63c918c667fa005ff12ad89437f2fdc80926e21c 0       .gitignore
100644 5529b198e8d14decbe4ad99db3f7fb632de0439d 0       .mailmap
```

-------------------------------------------------------------------------------
### Mode

The first three digist denote the file type can have the values  
ox100 (regular), 120 (symlink) and 160 (gitlink). The last digist denote the 
access mode of the object. Git supports only 644 (rw- r-- r--) or 755 (rwx rw- 
rw-).

-------------------------------------------------------------------------------
### Stage

The stage parameter is used when merging files. It has one of the following 
values:

- 0 (ok)
- 1 (base)
- 2 (ours)
- 3 (theirs)
