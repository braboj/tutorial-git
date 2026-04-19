# ADR-003: White background card on all diagrams

**Status:** Accepted
**Date:** 2026-04-19

## Context
The tutorial site may use a dark theme. Diagrams exported as PNGs with
transparent backgrounds would have dark arrow strokes and text labels
that become invisible on dark page backgrounds.

## Decision
Every diagram includes a white (`#FFFFFF`) rounded rectangle with a
neutral border (`#D3D1C7`) behind all content. PNGs are exported with
transparent background — the card provides the contrast.

## Alternatives considered
- **White background on PNG export**: Always readable but clashes with
  dark themes (white rectangle on dark page)
- **Two versions (light + dark)**: Correct but doubles maintenance
- **Transparent with no card**: Breaks on dark backgrounds

## Consequences
- All draw.io files must include a `bg-card` element as the first child
- The card must be sized to contain all diagram content with padding
- Works on both light and dark page backgrounds
