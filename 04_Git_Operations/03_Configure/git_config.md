## git config

#### Levels
    git config --local <variable>
    git config --global <variable>
    git config --system <variable>

-------------------------------------------------------------------------------

#### Edit
    git config --edit --local 
    git config --edit --global
    git config --edit --system

-------------------------------------------------------------------------------

#### Show
    # Show local configuration
    git config --list --local

    # Show all configuration options with their path
    git config --list --show-origin

    # Show all configuration options with their scope
    git config --list --show-scope

-------------------------------------------------------------------------------

#### Query
    # Single value key
    git config remote.origin.url
    git config --get remote.origin.url
    
    # Multiple value key
    git config --get-all remote.origin.url

    # List all keys of section remote.origin
    git config --get-regexp remote

-------------------------------------------------------------------------------

#### Add
    # Add the url key with a value to the 'remote.origin' section
    git config --add remote.origin.url https://github.com/braboj/demo.git

-------------------------------------------------------------------------------

#### Set
    # Set a new value for the url key in the remote.origin section
    git config remote.origin.url https://github.com/braboj/demo.git

-------------------------------------------------------------------------------

#### Unset
    # Delete a key name url from the remote.origin section 
    git config --unset remote.origin.url
    
    # Delete multiple value url from the remote.origin section
    git config --unset-all remote.origin.url

-------------------------------------------------------------------------------

#### Replace
    # Replace the url key in the remote.origin section
    git config --replace remote.origin.url https://gitlab.com/braboj/demo.git
    
    # Replace all keys with the name url in the remote.origin section
    git config --replace-all remote.origin.url https://gitlab.com/braboj/demo.git

-------------------------------------------------------------------------------

#### Popular configuration variables
- core.editor
- user.name
- user.email
