import GithubSlugger from "github-slugger";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import type { Options as SanitizeSchema } from "rehype-sanitize";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

import type { ChapterHeading } from "./types";

const scaffoldHeadings = [
  "金句候选",
  "与前后章的接口",
  "与前后章接口",
  "本章验收自查",
  "Candidate Quotes",
  "Quotable Lines",
  "Interfaces with Adjacent Chapters",
  "Connections to Adjacent Chapters",
  "Chapter Acceptance Self-Check",
  "Candidates for golden sentences",
  "Interface with previous and previous chapters",
  "This chapter accepts self-examination",
  "Self-examination for acceptance of this chapter",
  "Implementation of division of labor with Chapters 6 and 7",
];

const markdownSanitizeSchema = {
  ...defaultSchema,
  clobberPrefix: "",
  tagNames: [...(defaultSchema.tagNames ?? []), "figure", "figcaption"],
  attributes: {
    ...defaultSchema.attributes,
    a: [
      ...(defaultSchema.attributes?.a ?? []).filter(
        (attribute) =>
          !Array.isArray(attribute) || attribute[0] !== "className",
      ),
      ["className", "data-footnote-backref", "heading-anchor"] as [
        string,
        string,
        string,
      ],
      "ariaLabel",
    ],
    img: [
      ...(defaultSchema.attributes?.img ?? []),
      "alt",
      "title",
      "width",
      "height",
      "loading",
      "decoding",
      ["className", "chapter-figure-image"],
    ],
    figure: [["className", "chapter-figure"]],
    figcaption: [["className", "chapter-figure-caption"]],
    h1: [...(defaultSchema.attributes?.h1 ?? []), "id"],
    h2: [...(defaultSchema.attributes?.h2 ?? []), "id"],
    h3: [...(defaultSchema.attributes?.h3 ?? []), "id"],
    h4: [...(defaultSchema.attributes?.h4 ?? []), "id"],
    h5: [...(defaultSchema.attributes?.h5 ?? []), "id"],
    h6: [...(defaultSchema.attributes?.h6 ?? []), "id"],
  },
} satisfies SanitizeSchema;

export function cleanChapterMarkdown(markdown: string) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const kept: string[] = [];
  let skippedHeadingDepth: number | null = null;

  for (const line of lines) {
    if (/^\s*(?:状态|Status)[：:]/i.test(line)) continue;

    const heading = /^(#{1,6})\s+(.+?)\s*$/.exec(line);
    if (heading) {
      const depth = heading[1].length;
      const title = heading[2].replace(/\s*#+\s*$/, "").trim();

      if (
        scaffoldHeadings.some(
          (name) => title === name || title.startsWith(`${name}（`),
        )
      ) {
        skippedHeadingDepth = depth;
        continue;
      }

      if (skippedHeadingDepth !== null) {
        if (depth <= skippedHeadingDepth) skippedHeadingDepth = null;
        else continue;
      }
    }

    if (skippedHeadingDepth === null) kept.push(line);
  }

  return kept
    .join("\n")
    .replace(/^【图[^】]*】\s*$/gm, "")
    .replace(/【待补[^】]*】/g, "（相关证据持续验证中）")
    .replace(/(?<![A-Za-z])[EIL]\d+(?:-\d+)?/g, "")
    .replace(/仍待补齐?/g, "仍需验证")
    .replace(/待补齐?/g, "持续验证")
    .replace(/[（(]\s*[）)]/g, "")
    .replace(/\s+([，。；：])/g, "$1")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function removeLeadAssertion(markdown: string) {
  return markdown
    .replace(
      /^\s*\*\*(?:(?:论断|核心论断)|(?:Claim|Core claim))[：:][^\n]*\*\*\s*/i,
      "",
    )
    .replace(/^\s*---\s*/, "")
    .trim();
}

export function extractHeadings(markdown: string): ChapterHeading[] {
  const slugger = new GithubSlugger();

  return markdown
    .split("\n")
    .map((line) => /^(#{2,3})\s+(.+?)\s*$/.exec(line))
    .filter((match): match is RegExpExecArray => Boolean(match))
    .map((match) => {
      const text = match[2].replace(/\s*#+\s*$/, "").trim();
      return {
        depth: match[1].length as 2 | 3,
        text,
        id: slugger.slug(text),
      };
    });
}

export async function renderMarkdown(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      behavior: "append",
      properties: {
        className: ["heading-anchor"],
        ariaLabel: "Copy section link",
      },
      content: { type: "text", value: " #" },
    })
    .use(rehypeSanitize, markdownSanitizeSchema)
    .use(rehypeStringify)
    .process(markdown);

  return String(result);
}
