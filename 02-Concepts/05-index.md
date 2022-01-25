[**Up**](concepts.md) |
[**Content**](../README.md) |
[**Intro**](../01-Introduction/introduction.md) |
[**Concepts**](../02-Concepts/concepts.md) |
[**Operations**](../03-Operations/operations.md) |
[**Dictionary**](../04-Appendix/dictionary.md)

-------------------------------------------------------------------------------
## Index

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

\<Mode\> = (AAABBB)
  - AAA : Octal notation of the file type (100-regular, 120-symlink, 160-gitlink)
  - BBB : Octal notation of the access mode (644-read, 755-read/write)

-------------------------------------------------------------------------------
### Stage

The stage id is used when merging files. It has one of the following 
values:

- 0 (ok)
- 1 (base)
- 2 (ours)
- 3 (theirs)
