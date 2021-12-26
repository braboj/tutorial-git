## Dictionary

### HEAD

The HEAD is a pointer to a commit object in a branch we are working on. Usually
it points to the most recent commit in the current branch, but the HEAD can also
point to any particular commit from the commit history. In this case the HEAD
is ***detached***.

### Origin

The name or alias of the link to the remote repository for pull operations. For
example the clone of the remote link is usually something
like https://github.com/user/project/repo.git. Internally git replaces this link
with ***origin***.

### Downstream

The flow of data from the original repository to the cloned repository.

### Upstream

The flow of data from the cloned repository to the original repository.

### Pull/Merge Request

Originally a GitHub specific term for merge requests from the side of view of
the owner of the repository. Someone has pushed commits and want you to check
them and merge them with the repository. Other hosting platforms like GitLab
prefer to use the more meaningful name ***Merge Request***.