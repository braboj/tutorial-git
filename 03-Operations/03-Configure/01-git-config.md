[**Up**](../03-Configure/configure.md) |
[**Help**](../01-Help/help.md) |
[**Create**](../02-Create/create.md) |
[**Configure**](../03-Configure/configure.md) |
[**Track**](../04-Track/track.md) |
[**Branch**](../05-Branch/branch.md) |
[**Sync**](../06-Sync/sync.md) |
[**Revert**](../07-Revert/revert.md) |
[**Inspect**](../08-Inspect/inspect.md)

-------------------------------------------------------------------------------
### git config
Configure, list, query or delete configuration parameters.

-------------------------------------------------------------------------------
### Syntax
```
$ git config [<option..>] [<parameter>] [<value>]

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR
..  : One or more

# Options
-------------------------------------------------------------------------------
    alias.<name> <cmd>      : Define a shortcut for a complex command
  --local                   : Local scope
  --global                  : Global scope
  --system                  : System scope
  --edit                    : Edit file
  --file                    : Configuration file
  --list                    : Show paramters for a given scope
  --get <param>             : Get value of a parameter
  --get-all <param>         : Get all values of a parameter 
  --get-regexp <regexp>     : Get all keys matching regexp
  --add <name> <value>      : Add a new parameter
  --unset <param>           : Delete a variable matching name
  --unset-all <param>       : Delete all parameters matching name 
  --replace <param> <value> : Replace value of parameter
  --show-origin             : Show configuration file
  --show-scope              : Show configuration scope (local, global, system)
```

-------------------------------------------------------------------------------

### Configuration levels
    git config --edit --local
    git config --edit --global
    git config --edit --system

-------------------------------------------------------------------------------

### Popular aliases

```shell
$ git config --global alias.co checkout
$ git config --global alias.ci commit
$ git config --global alias.st status
$ git config --global alias.br branch
$ git config --global alias.hist "log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short"
$ git config --global alias.type 'cat-file -t'
$ git config --global alias.dump 'cat-file -p'
```

-------------------------------------------------------------------------------

### Show parameter
    # Show local configuration
    git config --list --local

    # Show all configuration options with their path
    git config --list --show-origin

    # Show all configuration options with their scope
    git config --list --show-scope

-------------------------------------------------------------------------------

### Query parameter
    # Single value key
    git config remote.origin.url
    git config --get remote.origin.url
    
    # Multiple value key
    git config --get-all remote.origin.url

    # List all keys of section remote.origin
    git config --get-regexp remote

-------------------------------------------------------------------------------

### Add parameter with value
    # Add the url key with a value to the 'remote.origin' section
    git config --add remote.origin.url https://github.com/braboj/demo.git

-------------------------------------------------------------------------------

### Set value
    # Set a new value for the url key in the remote.origin section
    git config remote.origin.url https://github.com/braboj/demo.git

-------------------------------------------------------------------------------

### Unset parameter
    # Delete a key name url from the remote.origin section 
    git config --unset remote.origin.url
    
    # Delete multiple value url from the remote.origin section
    git config --unset-all remote.origin.url

-------------------------------------------------------------------------------

### Replace value
    # Replace the url key in the remote.origin section
    git config --replace remote.origin.url https://gitlab.com/braboj/demo.git
    
    # Replace all keys with the name url in the remote.origin section
    git config --replace-all remote.origin.url https://gitlab.com/braboj/demo.git