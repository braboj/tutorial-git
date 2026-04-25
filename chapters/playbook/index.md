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
For definitions, see [Glossary](../09-glossary.md).

## Everyday

| Recipe | What you'll find |
|--------|-----------------|
| [Undoing Changes](undoing-changes.md) | Discard, unstage, reset, revert, and recover lost commits |
| [Diffing](diffing.md) | Unstaged, staged, between branches, commits, and files |
| [History](history.md) | Log formatting, filtering by author, date, and path |
| [Stashing](stashing.md) | Save and restore work in progress |

## Branching and Merging

| Recipe | What you'll find |
|--------|-----------------|
| [Branching](branching.md) | Create, delete, rename, and inspect branches |
| [Merging](merging.md) | Fast-forward, no-ff, squash, conflict resolution |
| [Rebasing](rebasing.md) | Linearize history and squash commits interactively |
| [Cherry-Picking](cherry-picking.md) | Apply individual commits across branches |

## Remote

| Recipe | What you'll find |
|--------|-----------------|
| [Remote Operations](remote-operations.md) | Push, pull, force push safely, sync forks |
| [Remote Management](remote-management.md) | Add, rename, remove remotes, switch URL, SSH setup |

## Project Structure

| Recipe | What you'll find |
|--------|-----------------|
| [Tagging](tagging.md) | Create, push, and delete annotated tags |
| [Submodules](submodules.md) | Add, clone, update, and remove submodules |
| [Subtrees](subtrees.md) | Add, pull, push, and remove subtrees |

## Advanced

| Recipe | What you'll find |
|--------|-----------------|
| [Selectors](selectors.md) | Tilde, caret, double-dot, triple-dot, reflog refs |
| [Hooks](hooks.md) | Pre-commit, commit-msg, sharing hooks, bypassing |
| [Debugging](debugging.md) | Bisect, blame, and search commit history |
| [Configuration](configuration.md) | Identity, defaults, aliases, and diagnostics |
