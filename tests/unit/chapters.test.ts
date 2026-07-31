import { describe, expect, it, vi } from "vitest";

vi.mock("server-only", () => ({}));

import {
  getAllChapters,
  getChapterBySlug,
  getChapterSlugs,
} from "@/lib/content/chapters";

describe("章节内容索引", () => {
  it.each(["en", "zh"] as const)("按文件名顺序加载 %s 全部公开章节", async (locale) => {
    const chapters = await getAllChapters(locale);
    const slugs = await getChapterSlugs(locale);

    expect(chapters.length).toBeGreaterThan(10);
    expect(slugs).toEqual(chapters.map(({ slug }) => slug));
    expect(chapters.map(({ order }) => order)).toEqual(
      chapters.map((_, index) => index),
    );
    expect(slugs[0]).toBe("00-front-matter");

    for (const chapter of chapters) {
      expect(chapter.title).not.toBe("");
      expect(chapter.description).not.toBe("");
      expect(chapter.readingMinutes).toBeGreaterThanOrEqual(1);
      expect(chapter.version).not.toBe("");
    }
  });

  it("渲染章节并建立前后导航", async () => {
    const chapter = await getChapterBySlug("en", "00-preface");

    expect(chapter).not.toBeNull();
    expect(chapter?.html).toContain("<");
    expect(chapter?.headings.length).toBeGreaterThan(0);
    expect(chapter?.previous?.slug).toBe("00-front-matter");
    expect(chapter?.next?.slug).toBe("01-execution-zero");
  });

  it("未知章节返回 null", async () => {
    await expect(
      getChapterBySlug("zh", "not-a-real-chapter"),
    ).resolves.toBeNull();
  });

  it("英文内容不含中文占位", async () => {
    for (const slug of await getChapterSlugs("en")) {
      const chapter = await getChapterBySlug("en", slug);
      expect(chapter?.title).not.toMatch(/[\u3400-\u9fff]/);
      expect(chapter?.html).not.toMatch(/[\u3400-\u9fff]/);
    }
  });

  it("en/zh 章节 slug 一一对应", async () => {
    const enSlugs = await getChapterSlugs("en");
    const zhSlugs = await getChapterSlugs("zh");
    expect(enSlugs).toEqual(zhSlugs);
  });
});
