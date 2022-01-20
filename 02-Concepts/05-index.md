## Index
[**Content**](../README.md) |
[**Intro**](../01-Introduction) |
[**Concepts**](./) |
[**Operations**](../03-Operations) |
[**Dictionary**](../04-Appendix/dictionary.md)
________________________________________________________________________________

The index is a binary file in ***.git/index*** containing a sorted
list of file names with their access mode and the hashcode of the corresponding
blob object. 

```shell
$ git ls-files --stage
<mode> <object>                                 <stage> <file>
100644 63c918c667fa005ff12ad89437f2fdc80926e21c 0       .gitignore
100644 5529b198e8d14decbe4ad99db3f7fb632de0439d 0       .mailmap
```

-------------------------------------------------------------------------------
### Mode

The first three digits denote the file type can have the values 100 (regular), 
120 (symlink) and 160 (gitlink) in octal notation. The last digist denote the 
access mode of the object. Git supports only 644 (rw- r-- r--) or 755 (rwx rw- rw-).
The access mode follows the unix convention. The first triplet defines the owner
permission, the second triplet the group permission and the last triplet the
guest permissions.

-------------------------------------------------------------------------------
### Stage

The stage id is used when merging files. It has one of the following 
values:

- 0 (ok)
- 1 (base)
- 2 (ours)
- 3 (theirs)
