---
title: "History"
description: "Git recipes for viewing, formatting, and filtering commit history — log output, author filters, date ranges, and path-based searches."
section: "playbook/history"
order: 86
---

## History

### Compact one-line log

```text
$ git log --oneline
```

### Graph view with branches

```text
$ git log --oneline --graph --all
```

Shows the full branch topology in ASCII art.

### Filter by author

```text
$ git log --author="Branko" --oneline
```

Matches against the author name or email. Supports regex.

### Filter by date range

```text
$ git log --after="2025-01-01" --before="2025-06-30" --oneline
```

### Filter by file path

```text
$ git log -- path/to/file --oneline
```

Shows only commits that modified the specified file.

### Custom format

```text
$ git log --format="%h %an %s" -10
```

Common placeholders: `%h` (short hash), `%an` (author name),
`%s` (subject), `%ar` (relative date), `%d` (refs).

### Show changes in each commit

```text
$ git log -p -3
```

Combines log output with the full diff for the last 3 commits.

### Count commits per author

```text
$ git shortlog -sn
```

Useful for understanding contribution distribution.
