import "server-only";

import { cache } from "react";
import { promises as fs } from "node:fs";
import path from "node:path";

import type { PublishedLocale } from "@/lib/i18n/config";

import { renderMarkdown } from "./markdown";
import type { ContentCollection, ContentDoc, ContentDocSummary } from "./types";

const contentDirectory = path.join(process.cwd(), "content");
const docFilePattern = /^[a-z0-9-]+\.md$/;

function stripMarkdown(value: string) {
  return value
    .replace(/!\[[^\]]*]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)]\([^)]*\)/g, "$1")
    .replace(/[*_`>#]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function getTitle(markdown: string) {
  return markdown.match(/^#\s+(.+)$/m)?.[1]?.trim() ?? "Untitled";
}

function getDescription(markdown: string, locale: PublishedLocale) {
  const paragraph = markdown
    .replace(/^#\s+.+\n+/, "")
    .split(/\n\s*\n/)
    .map(stripMarkdown)
    .find((part) => part.length > 24 && !part.startsWith(">"));

  return (
    paragraph?.slice(0, locale === "en" ? 180 : 120) ??
    (locale === "en" ? "Regenic public methodology document." : "Regenic 公开方法论文档。")
  );
}

const loadCollectionRecords = cache(
  async (locale: PublishedLocale, collection: ContentCollection) => {
    const directory = path.join(contentDirectory, locale, collection);
    const filenames = (await fs.readdir(directory))
      .filter(
        (filename) =>
          docFilePattern.test(filename) && filename.toLowerCase() !== "readme.md",
      )
      .sort((a, b) => a.localeCompare(b, locale === "en" ? "en" : "zh-CN"));

    return Promise.all(
      filenames.map(async (filename) => {
        const raw = await fs.readFile(path.join(directory, filename), "utf8");
        const slug = filename.replace(/\.md$/, "");
        const title = getTitle(raw);
        const body = raw.replace(/^#\s+.+\n+/, "");
        const description = getDescription(raw, locale);
        const summary: ContentDocSummary = { slug, title, description, collection };

        return { summary, body };
      }),
    );
  },
);

export const getCollectionDocs = cache(
  async (locale: PublishedLocale, collection: ContentCollection) => {
    const records = await loadCollectionRecords(locale, collection);
    return records.map(({ summary }) => summary);
  },
);

export const getCollectionSlugs = cache(
  async (locale: PublishedLocale, collection: ContentCollection) => {
    const docs = await getCollectionDocs(locale, collection);
    return docs.map(({ slug }) => slug);
  },
);

export const getDocBySlug = cache(
  async (
    locale: PublishedLocale,
    collection: ContentCollection,
    slug: string,
  ): Promise<ContentDoc | null> => {
    const records = await loadCollectionRecords(locale, collection);
    const index = records.findIndex(({ summary }) => summary.slug === slug);
    if (index < 0) return null;

    const record = records[index];
    return {
      ...record.summary,
      html: await renderMarkdown(record.body),
      previous: records[index - 1]?.summary ?? null,
      next: records[index + 1]?.summary ?? null,
    };
  },
);

export const contentCollections: ContentCollection[] = ["standards", "research"];
