## Repository Layout

### Types of repositories

As seen in the git dataflow, there are two types of repositories: remote and
local. The remote repository is often a **bare repository**. It is
the git repository itself without any project files. As git doesn't allow
changes to this directory using git commands, it is considered safe for
public use.

> TODO: Insert here a picture of the remote repository layout

For example ***git clone <project.git>*** will copy the bare repository
***project.git*** as a hidden .git folder and create the project files from the
latest commit. The local repository will have also the project files, or
also the so called ***working tree***.

> TODO: Insert here a picture of the local repository layout

### Configuration Files

Git offers three levels of configuration: ***local***, ***global*** and
***system***.

- Configuration on the local level will affect only this repository.
- Configuration on the global level will affect the current user.
- Configuration on the system level will affect all the users


> TODO: Maybe a picture will be better here. It should show the typical
> use cases for local (aliases, coloring), global (user) and system (editor)
> configuration scenarios.

> TODO: Write more about the location fo the files