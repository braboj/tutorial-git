## git config

#### Configuration levels
    git config --local <variable>
    git config --global <variable>
    git config --system <variable>

#### Edit configuration files
    git config --edit --local 
    git config --edit --global
    git config --edit --system

#### Show configuration
    
    # Show local configuration
    git config --list --local

    # Show all configuration options with their path
    git config --list --show-origin

    # Show all configuration options with their scope
    git config --list --show-scope

#### Query
    
    # Single value
    git config remote.origin.url
    git config --get remote.origin.url
    
    # Multiple values
    git config --get-all remote.origin.url

    # List all keys of section remote.origin
    git config --get-regexp remote

#### Add
    git config --add remote.origin.url https://github.com/braboj/demo.git

#### Set
    git config remote.origin.url https://github.com/braboj/demo.git

#### Unset
    git config --unset remote.origin.url
    git config --unset-all remote.origin.url

#### Replace
    git config --replace remote.origin.url https://gitlab.com/braboj/demo.git
    git config --replace-all remote.origin.url https://gitlab.com/braboj/demo.git

#### Popular configuration variables
 - core.editor
 - user.name
 - user.email
