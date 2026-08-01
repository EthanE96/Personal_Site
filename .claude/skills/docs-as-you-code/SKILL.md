---
name: docs-as-you-code
description: "Use this skill as a wrap-up step whenever a coding task is functionally complete — before ending the turn, check whether the change needs matching documentation and write it if so, even if the user didn't explicitly ask for docs. Covers README/usage updates, lightweight Architecture Decision Records (ADRs) for significant technology or architecture choices, brief Key Design Decision (KDD) notes for smaller non-obvious calls, and short requirement/spec notes. Trigger on any nontrivial code change — new features, new endpoints/functions, schema or config changes, a library/architecture choice, or a bug fix that changes behavior. Do NOT trigger for typo fixes, formatting-only changes, or refactors with no behavior change. Documentation produced by this skill is deliberately light and concise, not a full technical-writing pass."
---

# Docs-as-you-code

Documentation usually drifts from code because it gets written separately, after the fact, or not at all. This skill folds a documentation check into the moment a coding task wraps up — while the full context and reasoning for the change is still at hand, which is the cheapest and most accurate time to write it down.

## Core principle: light and concise

Write the minimum that captures intent for a future reader (a teammate, or future-you six months from now) — not a narrative retelling of the code. Prefer:

- Bullet points and short entries over prose paragraphs
- One or two sentences of _why_ over a restatement of _what_ — the code already shows what it does
- Writing nothing at all when nothing meets the bar below

## Decide whether documentation is needed

Ask: does this change introduce something a future reader would need explained that isn't obvious from reading the code?

**Write something for:**

- A new feature, endpoint, command, or public function/class
- A schema, config, or API contract change
- A meaningful architecture or technology choice — a library, pattern, or approach picked over plausible alternatives
- A bug fix that changes previously documented or expected behavior
- A requirement or constraint that shaped the implementation

**Skip it for:**

- Typo fixes, formatting, comment-only changes
- Refactors with no behavior or interface change
- Trivial or throwaway code the user described as such

When in doubt, err toward a short KDD entry (below) rather than nothing — it's cheap to write and cheap to ignore later, and it's the category most often skipped even though it's what saves the most confusion down the line.

## Where documentation goes

Before creating anything, check whether the repo already has a documentation convention — an existing `docs/` folder, `CONTRIBUTING.md`, an `adr/` directory, a structured `README.md`, etc. — and follow it. Matching what's already there beats imposing a new structure on someone else's project.

If there's no existing convention, use this default layout:

```
docs/
├── decisions/           ADRs — significant, hard-to-reverse choices
│   └── 0001-<slug>.md
├── design-notes.md       running log of smaller KDDs — append, don't create a file per entry
└── requirements.md       running log of requirements/constraints as they emerge
```

The project-level `README.md` at the repo root stays the place for usage docs: what the project does, how to run it, how to use a new feature. Update it in place rather than creating a second README or a duplicate usage section elsewhere.

## Templates

### README update

Add or amend a section near related existing content — don't restructure the whole file for one addition.

```markdown
## <Feature name>

<One-sentence purpose.>

Usage:
`<command or code snippet>`
```

### ADR — for significant, hard-to-reverse choices

Use for a library/framework choice, a data model, an auth approach, a deployment or integration architecture — anything a future contributor could reasonably ask "why didn't we just do X instead?" about.
File: `docs/decisions/00NN-short-slug.md` (increment NN from the highest existing ADR)

```markdown
# ADR-00NN: <Decision title>

Status: Accepted
Date: <date>

## Context

<1-3 sentences: what problem or tension prompted this.>

## Decision

<1-3 sentences: what was chosen.>

## Alternatives considered

- <option>: <one-line reason it wasn't chosen>

## Consequences

<1-2 sentences: what this makes easier or harder going forward.>
```

### KDD (Key Design Decision) — for smaller, non-obvious calls

Use when a choice isn't big enough for a full ADR but also isn't self-evident from the code — a retry count and why, a naming convention, why validation happens client-side rather than server-side. Append a dated entry to `docs/design-notes.md`; don't create a new file per entry.

```markdown
## <date> — <short title>

<Decision, in one sentence> — <why, in one sentence>. <Optional: what was considered instead.>
```

### Requirement / spec note

When the implementation is driven by an explicit requirement or constraint — from the user, a client, or a system limitation — record it so it isn't lost the next time someone wonders why the code is shaped this way. Append to `docs/requirements.md`:

```markdown
## <short title>

<The requirement or constraint, in one or two sentences> — <where it came from, if relevant>.
```

## After writing

Tell the user in one line what was documented and where, e.g. "Added an ADR for the caching approach (docs/decisions/0003-response-caching.md) and a usage note in the README." Don't narrate the decision process — just the outcome. If nothing met the bar for documentation, say so briefly rather than silently skipping the step.
