## git tag
Tags a commit with a suitable name. Git supports lightweight and annotated 
tags. 

### Syntax
```shell
# Options
#   -a (--annotate)     : Annotate tag
#   -m (--message)      : Tag message
#   -d (--delete)       : Delete a tag
#   -l (--list)         : List tags

$ git tag <tagname> <-l or -d>                
$ git tag <tagname> <object>                 
$ git tag <tagname> <object> -a -m <message>
```


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
```
