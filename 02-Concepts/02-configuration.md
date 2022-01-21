[**Up**](concepts.md) |
[**Content**](../README.md) |
[**Intro**](../01-Introduction/introduction.md) |
[**Concepts**](../02-Concepts/concepts.md) |
[**Operations**](../03-Operations/operations.md) |
[**Dictionary**](../04-Appendix/dictionary.md)
-------------------------------------------------------------------------------

## Configuration

![Configuration Model](../Assets/images/git-configuration-model.png)

-------------------------------------------------------------------------------
### Local configuration

The ***local configuration*** file is placed in the .git folder under the name
***config***. The local configuration file is used to manage only the parameters
of the current repository.

```shell
$ git config --local --edit
[core]
        repositoryformatversion = 0
        filemode = false
        bare = false
        logallrefupdates = true
        symlinks = false
        ignorecase = true
[remote "origin"]
        url = C:/Workspace/Tutorials/tutorial-git/Playground/project.git
        fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
        remote = origin
        merge = refs/heads/master
```

-------------------------------------------------------------------------------
### Global configuration

The location of the ***global configuration*** file vary depending on the
operating system used. The name of the file is ***.gitconfig***. Under Windows
the file is placed in ***C:\users\\<username\>***. The global configuration is
used to configure git for all repositories of the current user.

```shell
$ git config --global --edit
[filter "lfs"]
	clean = git-lfs clean -- %f
	smudge = git-lfs smudge -- %f
	process = git-lfs filter-process
	required = true
[user]
	name = Branimir Georgiev
	email = braboj@gmail.com
[core]
	longpaths = true
	autocrlf = true
	excludesfile = C:\\Users\\braboj\\Documents\\gitignore_global.txt
[credential]
	helper = manager
[gui]
	recentrepo = C:/Workspace/Tutorials/Dart
[credential "https://gitlab.com"]
	provider = generic
[init]
	defaultBranch = main
[alias]
	hist = log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short
	type = cat-file -t
	dump = cat-file -p        
```

-------------------------------------------------------------------------------
### System configuration

The ***system configuration*** file also depends on the operating system 
used. Its name is ***gitconfig*** and under Windows it is to be found in the 
installation folder of git. The system configuration is used to configure git
for all users and all repositories.

```shell
$ git config --system --edit
 
[diff "astextplain"]
	textconv = astextplain
[filter "lfs"]
	clean = git-lfs clean -- %f
	smudge = git-lfs smudge -- %f
	process = git-lfs filter-process
	required = true
[http]
	sslBackend = openssl
	sslCAInfo = C:/Program Files/Git/mingw64/ssl/certs/ca-bundle.crt
[core]
	autocrlf = true
	fscache = true
	symlinks = false
	editor = \"C:\\\\Program Files (x86)\\\\Notepad++\\\\notepad++.exe\" -multiInst -notabbar -nosession -noPlugin
[pull]
	rebase = false
[credential]
	helper = manager-core
[credential "https://dev.azure.com"]
	useHttpPath = true
[init]
	defaultBranch = master
```

-------------------------------------------------------------------------------
### Practice

1. Configure the username and email for the current user
2. Configure the editor for all users
