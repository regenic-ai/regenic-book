export type ChapterHeading = {
  depth: 2 | 3;
  text: string;
  id: string;
};

export type ChapterSummary = {
  slug: string;
  order: number;
  title: string;
  description: string;
  readingMinutes: number;
  version: string;
  updatedAt: string | null;
};

export type Chapter = ChapterSummary & {
  html: string;
  headings: ChapterHeading[];
  previous: ChapterSummary | null;
  next: ChapterSummary | null;
};

export type ContentCollection = "standards" | "research";

export type ContentDocSummary = {
  slug: string;
  title: string;
  description: string;
  collection: ContentCollection;
};

export type ContentDoc = ContentDocSummary & {
  html: string;
  previous: ContentDocSummary | null;
  next: ContentDocSummary | null;
};
