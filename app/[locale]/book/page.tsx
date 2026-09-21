import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BookCover, BOOK_COVER } from "@/components/book-cover";
import { JsonLd } from "@/components/json-ld";
import { getAllChapters } from "@/lib/content/chapters";
import { isPublishedLocale } from "@/lib/i18n/config";
import { createLocalizedMetadata } from "@/lib/i18n/metadata";
import {
  absoluteUrl,
  AUTHOR_NAME,
  BOOK_NAME,
  BOOK_SUBTITLE,
  breadcrumbJsonLd,
} from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isPublishedLocale(locale)) return {};
  return createLocalizedMetadata({
    locale,
    title: locale === "en" ? "Read Rewrite the DNA" : "免费阅读《重写基因》",
    description:
      locale === "en"
        ? "Read the complete English edition of Rewrite the DNA: How to Build an AI-Native Organization online for free."
        : "在线免费阅读《重写基因：如何构建 AI 原生组织》前言与全部十四章。",
    pathname: "/book",
  });
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isPublishedLocale(locale)) notFound();
  const chapters = await getAllChapters(locale);
  const en = locale === "en";

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Book",
            "@id": `${absoluteUrl(`/${locale}/book`)}#book`,
            name: en ? "Rewrite the DNA" : BOOK_NAME,
            alternateName: en
              ? "Rewrite the DNA: How to Build an AI-Native Organization"
              : `${BOOK_NAME}：${BOOK_SUBTITLE}`,
            description:
              en
                ? "A free book about turning individual adaptive insight into shared standards and context as AI makes execution cheaper."
                : "关于 AI 降低执行成本后，组织如何把悟性固化为统一判断标准与统一上下文的免费公开书稿。",
            url: absoluteUrl(`/${locale}/book`),
            inLanguage: en ? "en" : "zh-CN",
            isAccessibleForFree: true,
            image: absoluteUrl(BOOK_COVER.src),
            author: {
              "@type": "Person",
              name: AUTHOR_NAME,
            },
          },
          breadcrumbJsonLd([
            { name: en ? "Home" : "首页", path: `/${locale}` },
            {
              name: en ? "Rewrite the DNA" : "《重写基因》",
              path: `/${locale}/book`,
            },
          ]),
        ]}
      />
      <div className="shell book-index">
      <header className="book-index-header book-index-hero">
        <div>
          <p className="eyebrow">
            {en ? "Complete book · Free to read" : "完整书稿 · 免费公开"}
          </p>
          <h1>{en ? "Rewrite the DNA" : "《重写基因》"}</h1>
          <p>
            {en ? "How to Build an AI-Native Organization" : "如何构建 AI 原生组织"}
          </p>
          <div className="book-meta">
            <span>{en ? "By Jeson Li" : "李必琪（Jeson Li）著"}</span>
            <span>{en ? `${chapters.length} entries` : `${chapters.length} 篇`}</span>
            <span>{en ? "Living edition" : "持续更新版"}</span>
          </div>
        </div>
        <BookCover locale={locale} priority size="index" />
      </header>
      <ol className="chapter-list">
        {chapters.map((chapter) => (
          <li key={chapter.slug}>
            <Link href={`/${locale}/book/${chapter.slug}`}>
              <span className="chapter-number">
                {String(chapter.order).padStart(2, "0")}
              </span>
              <span className="chapter-list-main">
                <strong>{chapter.title}</strong>
                <small>{chapter.description}</small>
              </span>
              <span className="chapter-duration">
                {en
                  ? `${chapter.readingMinutes} min`
                  : `${chapter.readingMinutes} 分钟`}
              </span>
            </Link>
          </li>
        ))}
      </ol>
      </div>
    </>
  );
}
