## Branching Strategies

A branching strategy is a set of rules that a team agrees on for creating,
naming, merging, and deleting branches. Without a shared strategy, repositories
become cluttered with long-lived branches, merge conflicts grow, and releases
become unpredictable. Choosing the right strategy depends on team size, release
cadence, and deployment model.

-------------------------------------------------------------------------------
### Git Flow

Git Flow, introduced by Vincent Driessen in 2010, uses five branch types to
manage releases and parallel development.

**Branch types:**

| Branch | Lifetime | Purpose |
|--------|----------|---------|
| `main` | Permanent | Production-ready code. Every commit is a release. |
| `develop` | Permanent | Integration branch for the next release. |
| `feature/*` | Temporary | New functionality. Branches off `develop`, merges back into `develop`. |
| `release/*` | Temporary | Release preparation and stabilization. Branches off `develop`, merges into both `main` and `develop`. |
| `hotfix/*` | Temporary | Urgent production fixes. Branches off `main`, merges into both `main` and `develop`. |

**Typical workflow:**

1. Developers create `feature/*` branches from `develop`.
2. Completed features merge back into `develop`.
3. When `develop` is ready for release, a `release/*` branch is created.
4. Bug fixes go into the release branch; no new features are added.
5. The release branch merges into `main` (tagged) and back into `develop`.
6. Critical production bugs get a `hotfix/*` branch from `main`.

**When to use:**

- Products with versioned releases (v1.0, v2.0)
- Multiple environments (dev, staging, production)
- Teams that need to support older versions in parallel

**Pros:**

- Clear separation between development, stabilization, and production
- Supports multiple release versions simultaneously
- Well-defined process for hotfixes

**Cons:**

- High branch overhead — five branch types to manage
- Merge conflicts accumulate on long-lived `develop` and `release` branches
- Slower feedback loop — changes pass through multiple branches before release
- Overkill for teams that deploy continuously

-------------------------------------------------------------------------------
### GitHub Flow

GitHub Flow is a simplified strategy designed around continuous deployment. It
uses only two branch types: `main` and short-lived feature branches.

**Typical workflow:**

1. `main` is always deployable.
2. Create a feature branch from `main` for any change.
3. Commit to the feature branch and open a pull request.
4. The team reviews the pull request.
5. Merge into `main` and deploy immediately.

**When to use:**

- Web applications with continuous deployment
- Small to medium teams
- Projects where there is only one production version

**Pros:**

- Simple — only two branch types
- Fast feedback — changes reach production quickly
- Pull requests enforce code review as a natural part of the workflow
- Easy to automate with CI/CD pipelines

**Cons:**

- No built-in concept of releases or versioning
- Assumes `main` is always deployable, which requires strong test coverage
- Does not handle multiple supported versions well
- Hotfixes follow the same path as features — no fast lane

-------------------------------------------------------------------------------
### Trunk-Based Development

Trunk-Based Development (TBD) takes simplification further. Developers commit
directly to `main` (the trunk) or use very short-lived branches that are merged
within hours, not days.

**Key practices:**

- Branches live for less than one day whenever possible.
- Feature flags hide incomplete work so the trunk stays releasable.
- Continuous integration runs on every push to the trunk.
- Code review happens before merge (pair programming or rapid PR review).

**When to use:**

- Teams with mature CI/CD pipelines and high test coverage
- Experienced developers comfortable with small, incremental changes
- Organizations that deploy multiple times per day

**Pros:**

- Minimal merge conflicts because branches are short-lived
- Fastest possible integration feedback
- Encourages small, focused commits
- Reduces the complexity of branch management to near zero

**Cons:**

- Requires strong CI/CD infrastructure and automated testing
- Feature flags add code complexity and need cleanup
- Less suitable for teams with junior developers or infrequent releases
- Direct trunk commits can destabilize the build without discipline

-------------------------------------------------------------------------------
### Comparison

| Aspect | Git Flow | GitHub Flow | Trunk-Based |
|--------|----------|-------------|-------------|
| Branch types | 5 | 2 | 1–2 |
| Branch lifetime | Days to weeks | Hours to days | Hours |
| Release model | Versioned | Continuous | Continuous |
| Merge complexity | High | Low | Minimal |
| CI/CD requirement | Optional | Recommended | Essential |
| Multiple versions | Yes | No | No |
| Team size | Medium to large | Small to medium | Any (experienced) |
| Learning curve | Steep | Low | Low |

-------------------------------------------------------------------------------
### How to choose

There is no universally correct strategy. Use these questions to narrow down
the options:

1. **How often do you release?** If you release on a fixed schedule with version
   numbers, Git Flow gives you the structure for that. If you deploy on every
   merge, GitHub Flow or Trunk-Based Development is a better fit.

2. **Do you support multiple versions?** If customers run different versions in
   production and you need to ship patches to older releases, Git Flow handles
   this naturally. The other strategies assume a single production version.

3. **How strong is your CI/CD pipeline?** Trunk-Based Development depends on
   fast, reliable automated tests. Without them, broken commits reach production.
   If your test infrastructure is still maturing, GitHub Flow with pull request
   checks is a safer starting point.

4. **How large is the team?** Trunk-Based Development works well at any scale
   but requires discipline. Git Flow provides guardrails that help larger teams
   coordinate. GitHub Flow sits in the middle.

5. **Can you use feature flags?** If your tooling supports feature flags,
   Trunk-Based Development becomes practical even for large features. Without
   feature flags, short-lived branches may not be feasible for multi-week work.

Start simple. GitHub Flow is a good default for most teams. Move to Git Flow
when you need versioned releases or multi-version support. Move to Trunk-Based
Development when your CI/CD maturity and team discipline allow it.
