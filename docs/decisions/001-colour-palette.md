# ADR-001: Convention-based colour palette for diagrams

**Status:** Accepted
**Date:** 2026-04-19

## Context
The original CLAUDE.md defined a purple/pink/coral palette (Palette C) for
Git diagrams. During chapter 02 review, the palette felt unfamiliar — it
didn't match any Git tool the reader would use.

## Decision
Adopt a convention-based palette (Option B) that matches common Git GUI
colours: gray commits, blue main branch, green feature branches, purple
merge commits, yellow tags.

## Alternatives considered
- **Option A (original)**: Purple commits, pink branches — aesthetically
  consistent but semantically meaningless to Git users
- **Option C (minimal)**: Two colours only — too limited to distinguish
  branch types

## Consequences
- Readers who use GitHub, VS Code, or GitKraken will recognise the colours
- All existing draw.io files must use the new palette
- CLAUDE.md Palette C updated to reflect the new values
