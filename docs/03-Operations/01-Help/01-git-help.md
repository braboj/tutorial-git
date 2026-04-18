[**Up**](../01-Help/help.md) |
[**Help**](../01-Help/help.md) |
[**Create**](../02-Create/create.md) |
[**Configure**](../03-Configure/configure.md) |
[**Track**](../04-Track/track.md) |
[**Branch**](../05-Branch/branch.md) |
[**Sync**](../06-Sync/sync.md) |
[**Revert**](../07-Revert/revert.md) |
[**Inspect**](../08-Inspect/inspect.md)

-------------------------------------------------------------------------------
### git help

Display help information about a git command or tutorial.

-------------------------------------------------------------------------------
### Syntax
```
$ git help              # Short help intro
$ git help <options>    # Listing of commands, guides and variables
$ git help <command>    # Help info for command
$ git help <guide>      # Help info for guides

# Legend
-------------------------------------------------------------------------------
[]  : Optional
<>  : Replace
|   : OR

# Options
-------------------------------------------------------------------------------
-a (--all)    : Show all commands
-c (--config) : Show all configuration variables
-g (--guides) : Show all guides
```

-------------------------------------------------------------------------------
### Examples
```shell
$ git help -g           # List all available guides

The Git concept guides are:                                                
   attributes          Defining attributes per path                        
   cli                 Git command-line interface and conventions          
   core-tutorial       A Git core tutorial for developers                  
   credentials         Providing usernames and passwords to Git            
   cvs-migration       Git for CVS users                                   
   diffcore            Tweaking diff output                                
   everyday            A useful minimum set of commands for Everyday Git   
   faq                 Frequently asked questions about using Git          
   glossary            A Git Glossary                                      
   hooks               Hooks used by Git                                   
   ignore              Specifies intentionally untracked files to ignore   
   mailmap             Map author/committer names and/or E-Mail addresses  
   modules             Defining submodule properties                       
   namespaces          Git namespaces                                      
   remote-helpers      Helper programs to interact with remote repositories
   repository-layout   Git Repository Layout                               
   revisions           Specifying revisions and ranges for Git             
   submodules          Mounting one repository inside another              
   tutorial            A tutorial introduction to Git                      
   tutorial-2          A tutorial introduction to Git: part two            
   workflows           An overview of recommended workflows with Git      

$ git help attributes   # Opens the page for this guide
$ git help init         # Opens the page for this command 

```
