---
title: "Playbook"
description: "Step-by-step recipes for common Git tasks — undoing changes, branching, merging, rebasing, stashing, tagging, and debugging."
section: "playbook"
order: 7
---

## Overview

This chapter is a quick-reference collection of recipes for common
Git tasks. Each recipe shows the problem, the commands to solve it,
and what to watch out for.

For command syntax, see the [official Git reference](https://git-scm.com/docs).
For definitions, see [Glossary](09-glossary.md).

## Everyday

| Recipe | What you'll find |
|--------|-----------------|
| [Undoing Changes](playbook/undoing-changes.md) | Discard, unstage, reset, revert, and recover lost commits |
| [Diffing](playbook/diffing.md) | Unstaged, staged, between branches, commits, and files |
| [History](playbook/history.md) | Log formatting, filtering by author, date, and path |
| [Stashing](playbook/stashing.md) | Save and restore work in progress |

## Branching and Merging

| Recipe | What you'll find |
|--------|-----------------|
| [Branching](playbook/branching.md) | Create, delete, rename, and inspect branches |
| [Merging](playbook/merging.md) | Fast-forward, no-ff, squash, conflict resolution |
| [Rebasing](playbook/rebasing.md) | Linearize history and squash commits interactively |
| [Cherry-Picking](playbook/cherry-picking.md) | Apply individual commits across branches |

## Remote

| Recipe | What you'll find |
|--------|-----------------|
| [Remote Operations](playbook/remote-operations.md) | Push, pull, force push safely, sync forks |
| [Remote Management](playbook/remote-management.md) | Add, rename, remove remotes, switch URL, SSH setup |
| [SSH Setup](playbook/ssh-setup.md) | Key generation, agent, GitHub registration, troubleshooting |
| [Bare Repositories](playbook/bare-repositories.md) | Create, clone, convert, and use bare repos as local remotes |
| [Credentials](playbook/credentials.md) | Credential helpers (cache, store, GCM), HTTPS tokens, security |

## Project Structure

| Recipe | What you'll find |
|--------|-----------------|
| [Tagging](playbook/tagging.md) | Create, push, and delete annotated tags |
| [Submodules](playbook/submodules.md) | Add, clone, update, and remove submodules |
| [Remove a Submodule](playbook/remove-submodule.md) | Step-by-step cleanup — deinit, git rm, cached data |
| [Subtrees](playbook/subtrees.md) | Add, pull, push, and remove subtrees |

## Advanced

| Recipe | What you'll find |
|--------|-----------------|
| [Selectors](playbook/selectors.md) | Tilde, caret, double-dot, triple-dot, reflog refs |
| [Hooks](playbook/hooks.md) | Pre-commit, commit-msg, sharing hooks, bypassing |
| [Pre-commit Hook](playbook/pre-commit-hook.md) | Script creation, common checks, sharing and bypassing |
| [Commit-msg Hook](playbook/commit-msg-hook.md) | Message validation, Conventional Commits, examples |
| [Debugging](playbook/debugging.md) | Bisect, blame, and search commit history |
| [Git Bisect](playbook/git-bisect.md) | Binary search for the commit that introduced a bug |
| [Configuration](playbook/configuration.md) | Identity, defaults, aliases, and diagnostics |
