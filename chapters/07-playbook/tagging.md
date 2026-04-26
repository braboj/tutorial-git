---
title: "Tagging"
description: "Git recipes for creating annotated tags, tagging past commits, pushing tags to remote, and deleting tags."
section: "playbook/tagging"
order: 78
---

## Tagging

### Create an annotated tag

```text
$ git tag -a v1.0.0 -m "First release"
```

### Tag a past commit

```text
$ git tag -a v0.9.0 -m "Beta release" <hash>
```

### Push tags to remote

```text
$ git push origin v1.0.0            # single tag
$ git push origin --tags            # all tags
```

### Delete a tag (local and remote)

```text
$ git tag -d v1.0.0                 # local
$ git push origin --delete v1.0.0   # remote
```
