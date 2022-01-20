## Repository
[**Content**](../README.md) | 
[**Intro**](../01-Introduction) |
[**Concepts**](./) | 
[**Operations**](../03-Operations) | 
[**Dictionary**](../04-Appendix/dictionary.md)  
________________________________________________________________________________

The repository is a special folder with the name ***.git***, where git stores:
- project files
- history of the project files
- configuration files

-------------------------------------------------------------------------------
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

-------------------------------------------------------------------------------
### Non-bare Repository

The command ***git clone <project.git>*** will copy the bare repository
***project.git*** to a hidden .git folder, create a folder named project and 
populate it with the project files using the history.

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

-------------------------------------------------------------------------------
### Practice

1. Create a bare repository
2. Clone the bare repository
3. Commit a readme file to the local repository
4. Push the commit history
5. Delete the readme file
6. Pull the commit history
