# Changelog

All notable public changes to Regenic will be documented here.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and releases should use [Semantic Versioning](https://semver.org/) where it is
meaningful for the software.

## [Unreleased]

### Added

- Open-core content boundary: public `content/{locale}/standards` and
  `content/{locale}/research`; sensitive material stays out of this repository.
- `/standards` and `/research` site indexes with boundary checks in CI.
- `content/edition.json` for content edition versioning separate from app semver.

### Changed

- Rewrote README and README.zh-CN around the product north star: unified
  judgment standards and shared context as AI-native organizational management
  tools.
- Standardized the project and brand name as Regenic.
- Clarified that “The Last Scarcity” is a concept and subtitle.
- Defined MIT licensing for code and CC BY-NC 4.0 licensing for publishable
  content, manuscript, and public methodology.
- Removed contact-form collection and `/api/contact`; enterprise, investor,
  about, footer, and legal pages now point to GitHub Issues and related
  open-source channels.

### Removed

- Contact form UI, bioby contact delivery client, and related unit tests.
