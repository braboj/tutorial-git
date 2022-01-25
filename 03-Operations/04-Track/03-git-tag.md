[**Up**](../04-Track/track.md) |
[**Help**](../01-Help/help.md) |
[**Create**](../02-Create/create.md) |
[**Configure**](../03-Configure/configure.md) |
[**Track**](../04-Track/track.md) |
[**Branch**](../05-Branch/branch.md) |
[**Sync**](../06-Sync/sync.md) |
[**Revert**](../07-Revert/revert.md) |
[**Inspect**](../08-Inspect/inspect.md)

-------------------------------------------------------------------------------
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
