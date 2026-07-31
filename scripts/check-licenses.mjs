import { readFile } from "node:fs/promises";

const lockfile = JSON.parse(
  await readFile(new URL("../package-lock.json", import.meta.url), "utf8"),
);

const packages = Object.entries(lockfile.packages ?? {}).filter(
  ([path, metadata]) => path && metadata.version,
);
const deniedIdentifiers = new Set([
  "AGPL-1.0",
  "AGPL-1.0-only",
  "AGPL-1.0-or-later",
  "AGPL-3.0",
  "AGPL-3.0-only",
  "AGPL-3.0-or-later",
  "GPL-1.0",
  "GPL-1.0-only",
  "GPL-1.0-or-later",
  "GPL-2.0",
  "GPL-2.0-only",
  "GPL-2.0-or-later",
  "GPL-3.0",
  "GPL-3.0-only",
  "GPL-3.0-or-later",
]);

const violations = [];
const missing = [];

for (const [path, metadata] of packages) {
  const name = path.slice(path.lastIndexOf("node_modules/") + 13);
  const license = metadata.license;

  if (typeof license !== "string" || license.trim() === "") {
    missing.push(`${name}@${metadata.version}`);
    continue;
  }

  const identifiers = license.match(/[A-Za-z0-9.-]+/g) ?? [];
  const denied = identifiers.filter((identifier) =>
    deniedIdentifiers.has(identifier),
  );

  if (denied.length > 0) {
    violations.push(
      `${name}@${metadata.version}: ${license} (${denied.join(", ")})`,
    );
  }
}

console.log(`Checked licenses for ${packages.length} locked dependencies.`);

if (missing.length > 0) {
  console.error("\nDependencies without license metadata:");
  console.error(missing.map((entry) => `- ${entry}`).join("\n"));
}

if (violations.length > 0) {
  console.error("\nDependencies using denied strong-copyleft licenses:");
  console.error(violations.map((entry) => `- ${entry}`).join("\n"));
}

if (missing.length > 0 || violations.length > 0) {
  process.exitCode = 1;
}
