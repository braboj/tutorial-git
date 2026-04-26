---
title: "Commit-msg Hook"
description: "How to create a Git commit-msg hook that validates or enforces commit message conventions."
section: "playbook/commit-msg-hook"
order: 90
---

## Commit-msg Hook

A commit-msg hook runs after you write the commit message but before
the commit is finalized. It receives the path to a temporary file
containing the message as its first argument (`$1`). If the script
exits non-zero, the commit is aborted.

### Create the hook

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

### Common validations

- **Minimum length** — reject messages that are too terse to be
  meaningful.
- **Conventional Commits format** — check that the message matches
  `type(scope): description` using a regex.
- **Ticket reference** — require a Jira/Linear/GitHub issue key
  (e.g. `PROJ-123`) in the message.

### Example: enforce Conventional Commits

```text
$ cat > .git/hooks/commit-msg << 'EOF'
#!/bin/sh
pattern="^(feat|fix|docs|chore|refactor|test|ci|style)(\(.+\))?: .{3,}"
if ! grep -qE "$pattern" "$1"; then
  echo "Error: message must follow Conventional Commits format"
  exit 1
fi
EOF
$ chmod +x .git/hooks/commit-msg
```

### Sharing and bypassing

Same as other hooks — see the [Hooks](hooks.md) recipe for
`core.hooksPath` and `--no-verify`.
