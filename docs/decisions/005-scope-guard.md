# ADR-005: Scope guard for agent-assisted sessions

**Status:** Accepted
**Date:** 2026-04-19

## Context
During the first tutorial-git session, work expanded from reviewing one
chapter to restructuring the entire chapter hierarchy, creating draw.io
diagrams, adding a new project (me-healthy), and writing a chatbot spike.
The agent agreed with each expansion instead of flagging scope creep.

## Decision
Add a scope guard to CLAUDE.md that limits sessions to one logical unit
of work by default. The agent must flag scope expansion explicitly and
ask before continuing. The rule was also upstreamed to
`solid-ai-templates/base/scope.md` (PR #42) for all projects to inherit.

## Alternatives considered
- **No guard**: Relies on user discipline — failed in practice
- **Hard limit (refuse out-of-scope work)**: Too rigid — sometimes
  expansion is the right call

## Consequences
- CLAUDE.md includes a scope guard section
- The agent asks before expanding scope
- Default: one chapter per session for content work
- Current work is committed before switching to a new task
