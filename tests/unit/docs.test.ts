import { describe, expect, it, vi } from "vitest";

vi.mock("server-only", () => ({}));

import { getCollectionDocs, getDocBySlug } from "@/lib/content/docs";

describe("public standards and research docs", () => {
  it("loads matching public slugs for each locale", async () => {
    const enStandards = await getCollectionDocs("en", "standards");
    const zhStandards = await getCollectionDocs("zh", "standards");
    const enResearch = await getCollectionDocs("en", "research");
    const zhResearch = await getCollectionDocs("zh", "research");

    expect(enStandards.map((doc) => doc.slug).sort()).toEqual(
      zhStandards.map((doc) => doc.slug).sort(),
    );
    expect(enResearch.map((doc) => doc.slug).sort()).toEqual(
      zhResearch.map((doc) => doc.slug).sort(),
    );
    expect(enStandards.length).toBeGreaterThanOrEqual(3);
    expect(enResearch.length).toBeGreaterThanOrEqual(2);
  });

  it("renders a public standards document", async () => {
    const doc = await getDocBySlug("en", "standards", "book-standard");
    expect(doc?.title).toMatch(/Public book standards/i);
    expect(doc?.html).toContain("Judgment × Context");
    expect(doc?.html).not.toContain("internal-data-form");
  });
});
