import Link from "next/link";
import { notFound } from "next/navigation";

import { getCollectionDocs } from "@/lib/content/docs";
import type { ContentCollection } from "@/lib/content/types";
import { isPublishedLocale, publishedLocales } from "@/lib/i18n/config";
import { createLocalizedMetadata } from "@/lib/i18n/metadata";

type CollectionPageProps = {
  params: Promise<{ locale: string }>;
};

function collectionCopy(collection: ContentCollection, locale: "en" | "zh") {
  if (collection === "standards") {
    return locale === "en"
      ? {
          title: "Public standards",
          description:
            "Redacted Regenic standards that contributors can read, cite, and improve in the open repository.",
          eyebrow: "Standards",
        }
      : {
          title: "公开标准",
          description: "可在公开仓库阅读、引用与改进的 Regenic 标准。",
          eyebrow: "标准",
        };
  }

  return locale === "en"
    ? {
        title: "Public research index",
        description: "External case indexes and competitor notes.",
        eyebrow: "Research",
      }
    : {
        title: "公开研究索引",
        description: "外部案例索引与竞品对照。",
        eyebrow: "研究",
      };
}

export async function generateCollectionStaticParams(collection: ContentCollection) {
  void collection;
  return publishedLocales.map((locale) => ({ locale }));
}

export async function generateCollectionMetadata(
  collection: ContentCollection,
  { params }: CollectionPageProps,
) {
  const { locale } = await params;
  if (!isPublishedLocale(locale)) return {};
  const copy = collectionCopy(collection, locale);
  return createLocalizedMetadata({
    locale,
    title: copy.title,
    description: copy.description,
    pathname: `/${collection}`,
  });
}

export async function renderCollectionPage(
  collection: ContentCollection,
  { params }: CollectionPageProps,
) {
  const { locale } = await params;
  if (!isPublishedLocale(locale)) notFound();

  const docs = await getCollectionDocs(locale, collection);
  const copy = collectionCopy(collection, locale);
  const en = locale === "en";

  return (
    <div className="shell book-index">
      <header className="book-index-header">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p>{copy.description}</p>
        <p className="content-doc-note">
          {en
            ? "Contributions must stay redacted and citable. See CONTRIBUTING.md."
            : "贡献内容须可引用、已脱敏。详见 CONTRIBUTING.md。"}
        </p>
      </header>
      <ol className="chapter-list content-doc-list">
        {docs.map((doc) => (
          <li key={doc.slug}>
            <Link href={`/${locale}/${collection}/${doc.slug}`}>
              <strong>{doc.title}</strong>
              <span>{doc.description}</span>
            </Link>
          </li>
        ))}
      </ol>
      <p className="content-doc-note">
        {en ? "Also see " : "另见 "}
        <Link href={`/${locale}/versions`}>{en ? "version history" : "版本记录"}</Link>
        {" · "}
        <Link href="https://github.com/regenic-ai/regenic/blob/main/docs/OPEN_CORE.md">
          {en ? "Content boundary" : "内容边界说明"}
        </Link>
      </p>
    </div>
  );
}
