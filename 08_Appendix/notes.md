## Git Notes

- In Git, you cannot commit empty folders, because Git does not actually save
  folders, only files. You'll have to create a placeholder file inside those
  directories if you actually want them to be "empty" (i.e. you have no
  committable content).

- If you’ve used SVN the past, it’s important not to confuse the git add command
  with svn add. With the svn add command, you can add a file to a repository.
  Instead, the git add command itself does not directly impact the repository at
  all. It isn’t until you use the git commit command that the changes are
  recorded in your repo. You’ll need to use git add each time you update a file.

- Check your commit history in GitHub
  with https://github.com/<user>/<repository>/commits

- Browse repositories in BitBucket with https://bitbucket.org/repo/all