# Open-Source Release Checklist

This checklist is a review plan, not authorization to publish, rotate
production resources, or rewrite Git history. Record an owner and evidence for
each completed item.

## 1. Scope and identity

- [ ] Confirm the public repository and default branch are correct.
- [ ] Use **Regenic** consistently for the project and brand.
- [ ] Describe **The Last Scarcity** only as a concept or subtitle.
- [ ] Confirm `package.json` still has `"private": true`.
- [ ] Exclude internal drafts, personal data, customer data, contracts,
      credentials, private research, and nonredistributable assets.

## 2. License and provenance

- [ ] Confirm original code and software configuration can be released under
      MIT (`LICENSE-CODE`).
- [ ] Confirm `content/`, `outline.md`, and material expressly
      designated as public Regenic methodology can be released under
      CC BY-NC 4.0 (`LICENSE-CONTENT`).
- [ ] Verify every contributor had the right to submit their contribution.
- [ ] Review dependency and asset licenses; update
      `THIRD-PARTY-NOTICES.md`.
- [ ] Confirm no licensed material uses Regenic marks as an implied trademark
      grant.

## 3. Secret and endpoint inventory

Contact-form delivery has been removed. Public collaboration uses GitHub Issues
only.

- [ ] Scan the working tree, every branch intended for publication, tags, and
      full reachable history with an approved secret scanner.
- [ ] Inventory API keys, OAuth credentials, webhook secrets, deploy tokens,
      cloud credentials, analytics keys, signed URLs, and private hostnames.
- [ ] Confirm the site no longer exposes `/api/contact` or contact-form UI.
- [ ] Classify each value as public configuration, restricted endpoint, or
      secret. Do not assume an endpoint is safe merely because it has no token
      in its URL.
- [ ] Verify `.env.example` documents GitHub collaboration and contains no
      live secrets.

## 4. Rotate and contain exposures

Complete this section before considering history cleanup. Removing a value
from Git does not invalidate it.

- [ ] Revoke or rotate every exposed credential at its provider.
- [ ] Rotate webhook signing secrets and invalidate old delivery URLs.
- [ ] Disable or retire any legacy contact-delivery endpoints that remain in
      history or production configuration.
- [ ] Apply least-privilege scopes, origin/network restrictions, rate limits,
      and expiration where supported.
- [ ] Review access and delivery logs from first possible exposure; document
      suspicious use and incident-response actions.
- [ ] Verify the old values and endpoints no longer work.
- [ ] Update CI, hosting, and local secret stores with replacements.

## 5. Decide on Git history cleanup

- [ ] Make a written inventory of exact files, paths, commits, branches, and
      tags containing restricted data.
- [ ] Decide whether rotation alone is sufficient or whether legal, privacy,
      contractual, or data-minimization requirements require history
      rewriting.
- [ ] Obtain repository-owner and security approval before any rewrite.
- [ ] Create and verify a protected backup accessible only to the incident
      owner; define its deletion/retention policy.
- [ ] Prepare a reviewed `git filter-repo` or equivalent plan in a disposable
      clone. Never experiment on the canonical repository.
- [ ] Account for pull-request refs, forks, mirrors, releases, caches,
      artifacts, package registries, search indexes, and local clones; a force
      push cannot erase all copies.
- [ ] Schedule a contribution freeze and notify collaborators that a fresh
      clone will be required.
- [ ] Preserve required release tags and provenance, or document replacements.

**Stop here unless the rewrite has been separately approved. This document
does not instruct an agent or contributor to execute a force push or history
rewrite.**

## 6. Validate a separately approved cleanup

- [ ] In an isolated clone, verify the rewritten object graph and run a full
      secret scan before publication.
- [ ] Have a second reviewer confirm targeted data is absent and expected
      source, tags, and attribution remain.
- [ ] Coordinate canonical remote replacement, branch protection, fork and
      mirror handling, cache invalidation, and contributor recovery.
- [ ] Keep credentials revoked even if all known copies were removed.

## 7. Build and release validation

- [ ] Run `npm ci`, lint, typecheck, unit tests, end-to-end tests, and build.
- [ ] Run production dependency audit and license review.
- [ ] Review generated output, source maps, logs, fixtures, screenshots, and
      build artifacts for restricted data.
- [ ] Verify security reporting and repository private-vulnerability
      reporting are enabled.
- [ ] Review README files, governance templates, changelog, and release notes.
- [ ] Require final approval from the repository owner and security reviewer.

## 8. After publication

- [ ] Monitor secret scanning, dependency alerts, security reports, endpoint
      traffic, and abuse signals.
- [ ] Recheck public archives and mirrors for unintended material.
- [ ] Record the release revision, approvals, scans, rotations, and known
      residual risks without recording secret values.
