---
title: "Pre-commit Hook"
description: "How to create a Git pre-commit hook that validates staged changes before every commit."
section: "playbook/pre-commit-hook"
order: 89
---

## Pre-commit Hook

A pre-commit hook runs automatically before every commit. If the
script exits with a non-zero code, the commit is aborted. Use it to
catch problems early — linting errors, TODO markers, large files,
or secrets.

### Create the hook

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

### How it works

1. You run `git commit`.
2. Git executes `.git/hooks/pre-commit` before opening the message
   editor.
3. If the script exits 0, the commit proceeds. Any other exit code
   aborts it.

### Common checks

- **Lint staged files** — run your linter on `git diff --cached --name-only`
  output.
- **Detect secrets** — search for API keys, tokens, or passwords in
  the diff.
- **Enforce file size limits** — reject files above a threshold.

### Sharing pre-commit hooks

Hooks in `.git/hooks/` are local and not committed. To share them
with the team, see the [Hooks](hooks.md) recipe for the
`core.hooksPath` approach.

### Bypassing

```text
$ git commit --no-verify -m "WIP: skip hooks"
```

Use sparingly — hooks exist for a reason.
