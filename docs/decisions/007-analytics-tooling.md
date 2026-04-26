# ADR-007: Analytics tooling — GSC for tutorials, Plausible for Wuseria

**Status:** Accepted
**Date:** 2026-04-25

## Context
The tutorial site needed analytics to measure search performance and reader
engagement. The options ranged from free (Google Search Console, Google
Analytics) to privacy-focused paid tools (Plausible, Fathom).

## Decision
Use Google Search Console (GSC) for all Code with Branko tutorials. Reserve
Plausible for commercial products (Wuseria) where privacy-first analytics
justify the cost.

## Alternatives considered
- **Google Analytics**: Free and full-featured, but heavy JavaScript bundle,
  cookie banners required, and privacy concerns for a developer audience
- **Plausible for everything**: Clean and privacy-first, but costs money per
  site — unnecessary for free tutorials where GSC covers the key metrics
  (impressions, clicks, indexing)
- **No analytics**: Leaves content decisions ungrounded — no way to know
  which chapters attract readers or which queries drive traffic

## Consequences
- GSC is free and sufficient for tutorials — covers search performance,
  indexing, and sitemap validation
- No client-side analytics script on tutorial pages — faster load, no
  cookie banner
- Plausible cost is only incurred for commercial products
