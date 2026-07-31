#!/usr/bin/env node
/**
 * Fail the build if restricted material appears in the public tree.
 */
import { execSync } from "node:child_process";
import { readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const publicRoots = ["content", "app", "components", "lib", "public"];
const forbiddenPathFragments = [
  "internal-data-form",
  "distribution-standard",
  "organization-standard",
  "case-library.md",
  "book-standard-editorial",
];
const forbiddenContentPatterns = [
  /I2 研发执行层重构/i,
  /internal-data-form/i,
  /distribution-standard/i,
  /organization-standard\.md/i,
  /case-library\.md/i,
  /口述口径，未经审计/,
  /月度研发人力成本从约/,
];

function walkMarkdownFiles(directory) {
  const entries = readdirSync(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === ".next") continue;
      files.push(...walkMarkdownFiles(fullPath));
      continue;
    }
    if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(fullPath);
    }
  }

  return files;
}

function assertInternalNotTracked() {
  try {
    const tracked = execSync("git ls-files internal", {
      cwd: root,
      encoding: "utf8",
    })
      .trim()
      .split("\n")
      .filter(Boolean);

    if (tracked.length > 0) {
      throw new Error(
        "internal/ must not be tracked in the public repository. Use a separate private repo locally.",
      );
    }
  } catch (error) {
    if (String(error).includes("internal/ must not be tracked")) throw error;
    console.warn("Skipping internal tracking check.");
  }
}

function assertNoLegacyRootPaths() {
  for (const legacy of ["standards", "research"]) {
    const legacyPath = path.join(root, legacy);
    try {
      statSync(legacyPath);
      throw new Error(
        `Legacy path ${legacy}/ exists at repository root. Move material into content/ or a private checkout.`,
      );
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
  }
}

function assertPublicMarkdownClean() {
  const markdownFiles = publicRoots.flatMap((relativePath) => {
    const absolutePath = path.join(root, relativePath);
    try {
      return walkMarkdownFiles(absolutePath);
    } catch (error) {
      if (error.code === "ENOENT") return [];
      throw error;
    }
  });

  for (const file of markdownFiles) {
    const relative = path.relative(root, file);
    for (const fragment of forbiddenPathFragments) {
      if (relative.includes(fragment)) {
        throw new Error(`Forbidden public path fragment "${fragment}" in ${relative}`);
      }
    }

    const content = readFileSync(file, "utf8");
    for (const pattern of forbiddenContentPatterns) {
      if (pattern.test(content)) {
        throw new Error(
          `Forbidden content pattern ${pattern} found in public file ${relative}`,
        );
      }
    }
  }
}

function assertEditionManifest() {
  const editionPath = path.join(root, "content/edition.json");
  const edition = JSON.parse(readFileSync(editionPath, "utf8"));
  if (!edition.contentVersion || !edition.edition) {
    throw new Error("content/edition.json must define edition and contentVersion.");
  }
}

assertInternalNotTracked();
assertNoLegacyRootPaths();
assertEditionManifest();
assertPublicMarkdownClean();
console.log("Content boundary checks passed.");
