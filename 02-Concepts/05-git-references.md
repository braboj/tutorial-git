## References
References are files, which store the git hash of the referenced 
object. The location of the references is in ***.git / refs***.

```
$ tree .git /f          

C:.
│   HEAD                # Current commit object
│
├───heads               # Branches
│       main            # Tip of the main branch
│
├───remotes             # Remote branches
│   └───origin          # Remote repository 
│           HEAD        # Current commit object
│           main        # Tip of the origin/main branch
│
└───tags                # Tag references
        V1.0.0.0        # Reference to a commit object
```

-------------------------------------------------------------------------------
### HEAD
This is a file with a reference to the latest commit object. The head can 
point to the tip of a branch or to a previous commit. In the latter 
case the HEAD is detached.

```shell
$ type .git/HEAD
ref: refs/heads/main
```

-------------------------------------------------------------------------------
### heads
This folder contains the branches. Each branch is a file with a 
reference to a commit object inside it.

```shell
$ type .git/refs/heads/main
3002ad0adb4c6b24caea57b5f0e4be0b09de89af
```

-------------------------------------------------------------------------------
### remotes
Git stores the references to remote branches here. The remote branch has 
also a HEAD reference. If the hash value in the file ***origin / main*** are 
the same, then both branches are in sync.

```shell
$ type .git/refs/remotes/origin/main
3002ad0adb4c6b24caea57b5f0e4be0b09de89af
```

-------------------------------------------------------------------------------
### tags
```shell
$ type .git/refs/tags/V1.0.0.0
3002ad0adb4c6b24caea57b5f0e4be0b09de89af
```
