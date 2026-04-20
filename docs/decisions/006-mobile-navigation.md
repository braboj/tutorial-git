# ADR-006: Hamburger menu for mobile navigation

**Status:** Accepted
**Date:** 2026-04-20

## Context
The Git tutorial (Astro site) needed a mobile navigation pattern. The Azure
tutorial uses a hamburger menu; the Git tutorial initially used a horizontally
scrollable tab bar. With 9 chapters, off-screen tabs were hard to discover.

## Decision
Use a hamburger menu for mobile navigation (breakpoint at 768 px), matching
the Azure tutorial. This becomes the standard pattern across all Code with
Branko tutorials.

## Alternatives considered
- **Horizontal scroll tabs**: Always visible, but items off-screen are not
  discoverable — users don't know there are more chapters to the right
- **Collapsible sidebar**: More common in documentation sites, but heavier
  for a single-page tutorial layout

## Consequences
- Hamburger menu is the standard mobile nav for all tutorials
- Future tutorials inherit this pattern
- Navigation is hidden behind a tap but all 9 chapters are visible at once
  when opened
