## git init
Creates a new repository in a given project folder. 

-------------------------------------------------------------------------------
### Syntax
```shell
$ git init <repo> --bare        # Create a repo folder
$ git init <project>            # Create .git in the project folder

# Legend
[]  : Optional
<>  : Replace
|   : OR
```

-------------------------------------------------------------------------------
### Examples
```shell
$ git init --bare project.git   # Bare folder names by convention
$ cd project.git                # Folder is visible

$ git init project              # Create .git in the project folder
$ cd project/.git               # Folder is hidden

$ git init                      # Create .git in the current folder
$ cd .git
```