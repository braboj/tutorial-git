## git log
Displays the commit history of the repository.

-------------------------------------------------------------------------------
### Syntax
```shell
$ git log [filters] [revision selector]

# Legend
  []  : Optional

# Options

  # Filters
  -<num>                  : Show the last <num> entries
  --branches=<pattern>    : Show branches
  --merges | --no-merges  : Show all merge commits
  --tags=<pattern>        : Show tags
  --remotes=<pattern>     : Show remotes  
  --after=<date>          : Show all logs after date
  --before=<date>         : Show all logs before date
  --author=<pattern>      : Show all logs by author
  --grep=<pattern>        : Show all logs matching pattern
  -L <pattern>:<file>     : Show all logs for a pattern in file
  -L <start, end>:<file>  : Show all logs for lines <stat> to <end  
  
  # Sorting
  --date-order
  --author-date-order
  --topo-order
  --reverse
  
  # Formatting
  --pretty=<format>         : oneline, medium, full, fuller, reference
  --pretty=format:<string>  : Custom format string
  --abbrev-commit           : Reduce hash code to 7 digits
  --oneline                 : Shorthand for pretty=oneline --abbrev-comit 
  --graph                   : Show history graph
  --parents                 : Show the parents 
  --children                : Show the children
  
  # Placeholders for format string
  %h, %H  : Commit hash
  %t, %H  : Tree hash
  %p, %P  : Parent hash
  %a<mod> : Author (check git help log)
  %c<mod> : Commiter (check git help log)  
```

-------------------------------------------------------------------------------
### Examples
```shell
$ git log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short
$ git log --merges
$ git log --after="2 weeks ago" main
$ git log --name-status test ^release
```