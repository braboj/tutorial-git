#### Configuration levels of a repository

    PS> git config --local user.email <email>   // Only this repository
    PS> git config --global user.email <email>  // All repositories of the user
    PS> git config --system user.email <email>  // All the users and all repositories

#### Create a new command alias

    PS> git config --global alias.<alias> <command>
    PS> git config --global alias.unstage 'reset --HEAD --'

#### Configure the editor

    PS> git config --global core.editor <editor + options>

#### Configure the merge tool

    PS> git config --globaal merge.tool <merge tool>