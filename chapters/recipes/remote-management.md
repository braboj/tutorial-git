---
title: "Remote Management"
description: "Git recipes for adding, renaming, and removing remotes, switching remote URLs, and setting up SSH authentication."
section: "playbook/remote-management"
order: 84
---

## Remote Management

### List remotes

```text
$ git remote -v
```

Shows all configured remotes with their fetch and push URLs.

### Add a remote

```text
$ git remote add upstream <url>
```

Common when working with forks — `origin` is your fork, `upstream`
is the original repository.

### Rename a remote

```text
$ git remote rename origin old-origin
```

### Remove a remote

```text
$ git remote remove upstream
```

Also removes all remote-tracking branches for that remote.

### Switch a remote URL (HTTPS to SSH)

```text
$ git remote set-url origin git@github.com:<user>/<repo>.git
```

### Set up SSH authentication

See [SSH Setup](../ssh-setup/) for a full walkthrough — key
generation, agent configuration, GitHub registration, and
troubleshooting.
