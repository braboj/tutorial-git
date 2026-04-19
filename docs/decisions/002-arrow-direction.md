# ADR-002: Parent-direction arrows in diagrams

**Status:** Accepted
**Date:** 2026-04-19

## Context
Git internally stores parent pointers — each commit points to its parent,
not the other way around. The original PNG diagrams had inconsistent arrow
directions, some pointing forward in time, some backward.

## Decision
All commit arrows point from child to parent (right-to-left in horizontal
layouts). This matches Git's internal pointer direction and the ASCII
diagrams in the tutorial (`A ← B ← C`).

## Alternatives considered
- **Timeline direction** (left-to-right): More natural for reading time
  progression, but technically incorrect and contradicts the ASCII diagrams

## Consequences
- All draw.io diagrams must use child-to-parent arrows
- ASCII diagrams in chapters already use `←` — consistent
- Readers learn the correct mental model from day one
