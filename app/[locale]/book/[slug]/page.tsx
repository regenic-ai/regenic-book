import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ChapterToc } from "@/components/chapter-toc";
import { JsonLd } from "@/components/json-ld";
import { ReadingProgress } from "@/components/reading-progress";
import {
  getChapterBySlug,
  getChapterSlugs,
} from "@/lib/content/chapters";
import {
  isPublishedLocale,
  publishedLocales,
} from "@/lib/i18n/config";
import { createLocalizedMetadata } from "@/lib/i18n/metadata";
import {
  absoluteUrl,
  AUTHOR_NAME,
  BOOK_NAME,
  breadcrumbJsonLd,
} from "@/lib/seo";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const entries = await Promise.all(
    publishedLocales.map(async (locale) => {
      const slugs = await getChapterSlugs(locale);
      return slugs.map((slug) => ({ locale, slug }));
    }),
  );
  return entries.flat();
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isPublishedLocale(locale)) return {};
  const chapter = await getChapterBySlug(locale, slug);
  if (!chapter) return {};

  return createLocalizedMetadata({
    locale,
    title: chapter.title,
    description: chapter.description,
    pathname: `/book/${slug}`,
    type: "article",
  });
}

export default async function ChapterPage({ params }: PageProps) {
  const { locale, slug } = await params;
  if (!isPublishedLocale(locale)) notFound();
  const chapter = await getChapterBySlug(locale, slug);
  if (!chapter) notFound();
  const en = locale === "en";

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "@id": `${absoluteUrl(`/${locale}/book/${slug}`)}#article`,
            headline: chapter.title,
            description: chapter.description,
            url: absoluteUrl(`/${locale}/book/${slug}`),
            mainEntityOfPage: absoluteUrl(`/${locale}/book/${slug}`),
            inLanguage: en ? "en" : "zh-CN",
            ...(chapter.updatedAt
              ? { dateModified: chapter.updatedAt }
              : {}),
            author: {
              "@type": "Person",
              name: AUTHOR_NAME,
            },
            publisher: {
              "@id": "https://regenic.ai/#organization",
            },
            isPartOf: {
              "@type": "Book",
              "@id": `${absoluteUrl(`/${locale}/book`)}#book`,
              name: en ? "Rewrite the DNA" : BOOK_NAME,
            },
          },
          breadcrumbJsonLd([
            { name: en ? "Home" : "首页", path: `/${locale}` },
            {
              name: en ? "Rewrite the DNA" : "《重写基因》",
              path: `/${locale}/book`,
            },
            { name: chapter.title, path: `/${locale}/book/${slug}` },
          ]),
        ]}
      />
      <ReadingProgress />
      <div className="shell reader-shell">
        <ChapterToc headings={chapter.headings} locale={locale} />
        <article className="reader">
          <nav
            className="reader-breadcrumb"
            aria-label={en ? "Breadcrumb" : "面包屑"}
          >
            <Link href={`/${locale}/book`}>
              {en ? "Rewrite the DNA" : "《重写基因》"}
            </Link>
            <span aria-hidden="true">/</span>
            <span>
              {en ? `Entry ${chapter.order + 1}` : `第 ${chapter.order + 1} 篇`}
            </span>
          </nav>
          <header className="chapter-header">
            <p className="eyebrow">
              {en ? "Rewrite the DNA · Living edition" : "《重写基因》· 持续运行版"}
            </p>
            <h1>{chapter.title}</h1>
            <p>{chapter.description}</p>
            <div className="chapter-meta">
              <span>
                {en
                  ? `About ${chapter.readingMinutes} min`
                  : `约 ${chapter.readingMinutes} 分钟`}
              </span>
              {chapter.updatedAt ? (
                <span>
                  {en ? "Content date" : "内容日期"} {chapter.updatedAt}
                </span>
              ) : null}
            </div>
          </header>
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: chapter.html }}
          />
          <nav
            className="chapter-pagination"
            aria-label={en ? "Chapter navigation" : "章节导航"}
          >
            {chapter.previous ? (
              <Link href={`/${locale}/book/${chapter.previous.slug}`}>
                <small>{en ? "Previous" : "上一篇"}</small>
                <strong>{chapter.previous.title}</strong>
              </Link>
            ) : (
              <span />
            )}
            {chapter.next ? (
              <Link
                className="next"
                href={`/${locale}/book/${chapter.next.slug}`}
              >
                <small>{en ? "Next" : "下一篇"}</small>
                <strong>{chapter.next.title}</strong>
              </Link>
            ) : (
              <Link className="next" href={`/${locale}/book`}>
                <small>{en ? "Finished" : "阅读完成"}</small>
                <strong>{en ? "Back to contents" : "返回目录"}</strong>
              </Link>
            )}
          </nav>
        </article>
      </div>
    </>
  );
}
