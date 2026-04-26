---
title: "Hooks"
description: "Git recipes for creating pre-commit and commit-msg hooks, sharing hooks across a team, and bypassing hooks when needed."
section: "playbook/hooks"
order: 83
---

## Hooks

### Create a pre-commit hook

See [Pre-commit Hook](../pre-commit-hook/) for a full walkthrough —
script creation, common checks, and sharing with the team.

### Create a commit-msg hook

See [Commit-msg Hook](../commit-msg-hook/) for a full walkthrough —
message validation, Conventional Commits enforcement, and examples.

### Share hooks with the team

```text
$ mkdir .githooks
$ cp .git/hooks/pre-commit .githooks/
$ git config core.hooksPath .githooks
$ git add .githooks/
$ git commit -m "Add shared hooks"
```

Everyone who clones the repo runs `git config core.hooksPath .githooks`
to activate the shared hooks.

### Bypass a hook

```text
$ git commit --no-verify -m "WIP: skip hooks"
$ git push --no-verify
```

Use sparingly — hooks exist for a reason.
