# ADR-004: Teach git switch as primary, git checkout as legacy

**Status:** Accepted
**Date:** 2026-04-19

## Context
In Git 2.23 (2019), `git checkout` was split into `git switch` (for
changing branches) and `git restore` (for discarding file changes). The
old `checkout` command does both, which confuses beginners — typing the
wrong argument can discard work instead of switching branches.

## Decision
Teach `git switch` and `git restore` as the primary commands. Mention
`git checkout` once in chapter 01's introduction as a note so readers
recognise it in older tutorials.

## Alternatives considered
- **Teach checkout only**: Matches most existing tutorials but perpetuates
  a confusing interface
- **Teach both equally**: Overloads the reader with two ways to do
  everything

## Consequences
- All chapter examples use `git switch` for branch changes
- All chapter examples use `git restore` for discarding changes
- `git checkout` appears only in a note explaining the split
- Exercises use `git switch -c` for creating and switching in one step
