---
title: "Configuration"
description: "Git recipes for setting identity, default branch name, pull strategy, aliases, and diagnosing configuration sources."
section: "playbook/configuration"
order: 81
---

## Configuration

### Set identity

```text
$ git config --global user.name "Your Name"
$ git config --global user.email "you@example.com"
```

### Set default branch name

```text
$ git config --global init.defaultBranch main
```

### Set default pull strategy to rebase

```text
$ git config --global pull.rebase true
```

### Create an alias

```text
$ git config --global alias.hist "log --oneline --graph --all"
```

### See where a setting comes from

```text
$ git config --list --show-origin
```
