## Repository
The repository is a special folder with the name ***.git***, where git stores 
files and the history of the changes, special files called references and 
the repository configuration files. 

### Bare Repository

The remote repository is often called a **bare repository**. It is
the git repository without any project files. As git doesn't allow
changes to this directory using git commands, it is considered safe for 
public use. 

```
git init --bare project.git

C:\WORKSPACE\TUTORIALS\TUTORIAL-GIT\PLAYGROUND\PROJECT.GIT
├───hooks
├───info
├───objects
│   ├───info
│   └───pack
└───refs
├───heads
└───tags
```

### Non-bare Repository

The command ***git clone <project.git>*** will copy the bare repository
***project.git*** to a hidden .git folder, create a folder named project and 
populate it with the project files from the latest commit.

```
git clone project.git

C:\WORKSPACE\TUTORIALS\TUTORIAL-GIT\PLAYGROUND\PROJECT
│   readme.md
└───.git
    ├───hooks
    ├───info
    ├───objects
    │   ├───info
    │   └───pack
    └───refs
        ├───heads
        └───tags
```

The latest versions of git support non-bare repositories to be used as 
remote repositories.

### Practice
1. Create a bare repository
2. Clone the bare repository
3. Commit a readme file to the local repository
4. Push the commit history
5. Delete the readme file
6. Pull the commit history
