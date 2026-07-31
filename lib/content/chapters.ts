import "server-only";

import { cache } from "react";
import { promises as fs } from "node:fs";
import path from "node:path";

import matter from "gray-matter";

import type { PublishedLocale } from "@/lib/i18n/config";

import {
  cleanChapterMarkdown,
  extractHeadings,
  removeLeadAssertion,
  renderMarkdown,
} from "./markdown";
import type { Chapter, ChapterSummary } from "./types";

const contentDirectory = path.join(process.cwd(), "content");
const chapterFilePattern = /^\d{2}-.+\.md$/;

function stripMarkdown(value: string) {
  return value
    .replace(/!\[[^\]]*]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)]\([^)]*\)/g, "$1")
    .replace(/[*_`>#]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function getReadingMinutes(markdown: string) {
  const plain = stripMarkdown(markdown);
  const chineseCharacters = plain.match(/[\u3400-\u9fff]/g)?.length ?? 0;
  const latinWords = plain.match(/[A-Za-z0-9]+(?:['’-][A-Za-z0-9]+)*/g)?.length ?? 0;
  return Math.max(1, Math.ceil(chineseCharacters / 400 + latinWords / 200));
}

function getSourceMetadata(raw: string, locale: PublishedLocale) {
  const status =
    raw.match(/^\s*(?:状态|Status)[：:]\s*(.+)$/im)?.[1] ?? "";
  const version =
    status.match(/\bv\d+(?:\.\d+)*\b/i)?.[0] ??
    (locale === "en" ? "Living edition" : "持续更新");
  const dates = [...status.matchAll(/\b20\d{2}-\d{2}-\d{2}\b/g)].map(
    (match) => match[0],
  );
  const updatedAt = dates.sort().at(-1) ?? null;

  return { version, updatedAt };
}

function getDescription(markdown: string, locale: PublishedLocale) {
  const assertion = markdown.match(
    /^\*\*(?:(?:论断|核心论断)|(?:Claim|Core claim))[：:]\s*(.+?)\*\*$/im,
  );
  if (assertion) return stripMarkdown(assertion[1]);

  const paragraph = markdown
    .split(/\n\s*\n/)
    .map(stripMarkdown)
    .find((part) => part && !part.startsWith("第 ") && part.length > 24);

  return (
    paragraph?.slice(0, locale === "en" ? 180 : 120) ??
    (locale === "en"
      ? "Read Rewrite the DNA online for free."
      : "《重写基因》免费公开阅读。")
  );
}

const loadChapterRecords = cache(async (locale: PublishedLocale) => {
  const chaptersDirectory = path.join(contentDirectory, locale, "chapters");
  const filenames = (await fs.readdir(chaptersDirectory))
    .filter((filename) => chapterFilePattern.test(filename))
    .sort((a, b) => a.localeCompare(b, "zh-CN"));

  return Promise.all(
    filenames.map(async (filename, order) => {
      const sourcePath = path.join(chaptersDirectory, filename);
      const raw = await fs.readFile(sourcePath, "utf8");
      const parsed = matter(raw);
      const cleaned = cleanChapterMarkdown(parsed.content);
      const title =
        cleaned.match(/^#\s+(.+)$/m)?.[1]?.trim() ??
        filename.replace(/^\d{2}-|\.md$/g, "");
      const body = cleaned.replace(/^#\s+.+\n+/, "");
      const description = getDescription(body, locale);
      const publicBody = removeLeadAssertion(body);
      const sourceMetadata = getSourceMetadata(raw, locale);

      const summary: ChapterSummary = {
        slug: filename.replace(/\.md$/, ""),
        order,
        title,
        description,
        readingMinutes: getReadingMinutes(publicBody),
        ...sourceMetadata,
      };

      return { summary, body: publicBody };
    }),
  );
});

export const getAllChapters = cache(async (
  locale: PublishedLocale,
): Promise<ChapterSummary[]> => {
  const records = await loadChapterRecords(locale);
  return records.map(({ summary }) => summary);
});

export const getChapterSlugs = cache(async (locale: PublishedLocale) => {
  const chapters = await getAllChapters(locale);
  return chapters.map(({ slug }) => slug);
});

export const getChapterBySlug = cache(
  async (locale: PublishedLocale, slug: string): Promise<Chapter | null> => {
    const records = await loadChapterRecords(locale);
    const index = records.findIndex(({ summary }) => summary.slug === slug);
    if (index < 0) return null;

    const record = records[index];
    return {
      ...record.summary,
      html: await renderMarkdown(record.body),
      headings: extractHeadings(record.body),
      previous: records[index - 1]?.summary ?? null,
      next: records[index + 1]?.summary ?? null,
    };
  },
);
