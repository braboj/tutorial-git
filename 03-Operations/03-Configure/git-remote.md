## git remote 
Adds or removes references to remote repositories.

-------------------------------------------------------------------------------
### Syntax
```shell
# Adds a new reference to a remote repo
$ git remote add <alias> <remote-url>

# Adds or deletes a url from the reference 
$ git remote set-url <--add> or <--delete> <alias> <remote-url>

# Renames the reference to the remote repo
$ git remote rename <old name> <new name>

# Deletes the reference to the remote repo
$ git remote remove <name>
```

-------------------------------------------------------------------------------
### Examples
```shell
# Remove the remote reference from the cloning process 
git remote remove origin

# Add anew the reference origin
git remote add origin https://github.com/braboj/demo.git

# Add a new remote repository for pushing
git remote set-url --add origin https://gitlab.com/braboj/demo.git

# Remnote
git remote set-url --delete https://gitlab.com/braboj/demo.git
```

