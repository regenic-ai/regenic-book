# Open-core boundary

Regenic uses a simple public/private split:

| Layer | Location | License |
| --- | --- | --- |
| Application code | repository root | MIT |
| Public book and methodology | `content/` | CC BY-NC 4.0 |
| Sensitive operating material | **Not in this repository** | Maintainers only |

## Versioning

- **Application** — semver via `package.json` and git tags `v*.*.*`
- **Public content** — `content/edition.json` (`contentVersion` + `edition` date)

## Checks

```bash
npm run check:boundaries
```

CI runs the same script on every pull request.
