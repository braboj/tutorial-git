---
title: "Hooks"
description: "Git recipes for creating pre-commit and commit-msg hooks, sharing hooks across a team, and bypassing hooks when needed."
section: "playbook/hooks"
order: 83
---

## Hooks

### Create a pre-commit hook

```text
$ cat > .git/hooks/pre-commit << 'EOF'
#!/bin/sh
# Reject commits that contain TODO
if git diff --cached --quiet -S "TODO"; then
  exit 0
fi
echo "Error: commit contains TODO"
exit 1
EOF
$ chmod +x .git/hooks/pre-commit
```

The hook runs before every commit. A non-zero exit code aborts the
commit.

### Create a commit-msg hook

```text
$ cat > .git/hooks/commit-msg << 'EOF'
#!/bin/sh
# Enforce minimum message length
if [ $(wc -c < "$1") -lt 10 ]; then
  echo "Error: commit message too short"
  exit 1
fi
EOF
$ chmod +x .git/hooks/commit-msg
```

Receives the commit message file as `$1`. Useful for enforcing
message conventions.

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
