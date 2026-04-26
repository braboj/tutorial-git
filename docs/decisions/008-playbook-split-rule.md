# ADR-008: Playbook split rule — standalone pages for substantial recipes

**Status:** Accepted
**Date:** 2026-04-25

## Context
The playbook chapter was split from a single file into individual recipe
pages for SEO (#129, #153). The question was which recipes justify their
own page versus staying grouped in a parent file.

## Decision
A recipe gets its own page only if it has enough substance to stand alone —
at minimum a command, an explanation, and a gotcha or variation. One-liner
recipes stay grouped in their parent file.

## Alternatives considered
- **Every recipe gets its own page**: Maximises long-tail SEO surface, but
  creates thin pages that dilute quality signals and fragment navigation
- **Keep everything grouped**: Simpler structure, but long pages rank poorly
  for focused queries like "how to remove a git submodule"
- **Split by search volume**: Data-driven but requires keyword research
  tooling and ongoing maintenance — too heavy for a one-person operation

## Consequences
- Recipes with multi-step workflows, scripts, or common gotchas become
  standalone pages (e.g. git bisect, pre-commit hook, SSH setup, remove
  submodule)
- Simple one-liner recipes stay grouped in their parent topic file
- The rule is content-driven, not data-driven — no dependency on keyword
  tools
- Issue #154 (improve thin recipes) should run before #153 (split into
  pages) to ensure substance exists before splitting
