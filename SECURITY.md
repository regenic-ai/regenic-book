# Security Policy

## Supported versions

Security fixes are applied to the current `main` branch. This project does not
currently promise security support for older snapshots or deployments.

## Reporting a vulnerability

Do not open a public issue or pull request. Use GitHub's **Report a
vulnerability** private security-advisory flow for this repository. Include:

- affected component and revision;
- reproduction steps or proof of concept;
- expected impact and prerequisites;
- any suggested mitigation; and
- whether the report is subject to a disclosure deadline.

Do not access data that is not yours, disrupt services, perform social
engineering, or retain sensitive data. Use synthetic test data.

Maintainers will aim to acknowledge a complete report within five business
days, assess severity, coordinate a fix, and agree on disclosure timing.
Please allow a reasonable remediation period before public disclosure.

## Secrets and exposed endpoints

If a credential, token, webhook, or private endpoint is exposed, treat it as
compromised even after deleting the file. Rotate or revoke it first, assess
logs and downstream access, then follow the history-cleanup decision process
in [OPEN_SOURCE_RELEASE.md](OPEN_SOURCE_RELEASE.md). Never place a real secret
in `.env.example`, an issue, a pull request, or a commit message.
