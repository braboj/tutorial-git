## git remote
Show info about remote references.

-------------------------------------------------------------------------------
### Syntax
```shell
$ git remote [options]
$ git remote show [remote]

# Legend
  []  : Optional
  
# Options
  -v (--verbose)  : Enable or disable verbose information
```


-------------------------------------------------------------------------------
### Examples
```shell
# Show info about remote repository
$ git remote -v
origin  https://github.com/braboj/demo (fetch)
origin  https://github.com/braboj/demo (push)

# Show detailed info about remote repo with the name origin
$ git remote show origin
git remote show origin   
* remote origin
  Fetch URL: https://github.com/braboj/demo
  Push  URL: https://github.com/braboj/demo
  HEAD branch: main
  Remote branch:
    main tracked
  Local branch configured for 'git pull':
    main merges with remote main
  Local ref configured for 'git push':
    main pushes to main (fast-forwardable)
```
