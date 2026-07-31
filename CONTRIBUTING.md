# Contributing to Regenic

Thank you for helping improve Regenic. Keep changes focused, reviewable, and
consistent with the project's public mission.

## Before opening a change

1. Search existing issues and pull requests.
2. Use an issue to discuss substantial product, methodology, or governance
   changes before implementation.
3. Never include credentials, personal data, private manuscripts, customer
   information, or confidential research.

Do not commit medium- or high-sensitivity operating material to this repository.
Run `npm run check:boundaries` before opening a pull request; CI runs the same check.

## Development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Maintainers with access to private archives should keep them in a **separate
repository or local checkout**, not in this tree.

Before submitting:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

Add or update tests when behavior changes. Keep user-facing language
accessible and identify machine-generated or unverified claims.

## Pull requests

- Explain the problem, approach, and validation performed.
- Link related issues and disclose breaking changes.
- Keep unrelated formatting or refactoring out of the change.
- Confirm that no secrets or restricted material appear in the diff or Git
  history.

Maintainers may edit titles, labels, and release notes, and may close changes
that do not fit the project scope.

## Contribution licensing

By submitting a contribution, you represent that you have the right to do so
and agree that it may be distributed under the license applicable to its
destination:

- code and software configuration: MIT (`LICENSE-CODE`);
- `content/`, the manuscript outline, and explicitly public Regenic
  methodology: CC BY-NC 4.0 (`LICENSE-CONTENT`).

Do not contribute third-party material unless its license is compatible and
its source and license are documented in `THIRD-PARTY-NOTICES.md`.

Participation is governed by [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
Security reports must follow [SECURITY.md](SECURITY.md), not public issues.
