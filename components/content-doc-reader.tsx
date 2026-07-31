import Link from "next/link";

import type { ContentCollection, ContentDocSummary } from "@/lib/content/types";
import type { PublishedLocale } from "@/lib/i18n/config";

type ContentDocReaderProps = {
  locale: PublishedLocale;
  doc: ContentDocSummary & { html: string };
  previous: ContentDocSummary | null;
  next: ContentDocSummary | null;
};

function collectionLabel(collection: ContentCollection, locale: PublishedLocale) {
  if (collection === "standards") {
    return locale === "en" ? "Standards" : "标准";
  }
  return locale === "en" ? "Research" : "研究";
}

export function ContentDocReader({
  locale,
  doc,
  previous,
  next,
}: ContentDocReaderProps) {
  const en = locale === "en";
  const basePath = `/${locale}/${doc.collection}`;

  return (
    <div className="shell reader-shell">
      <article className="reader content-doc">
        <p className="reader-breadcrumb">
          <Link href={`/${locale}`}>{en ? "Home" : "首页"}</Link>
          <span aria-hidden="true"> / </span>
          <Link href={basePath}>{collectionLabel(doc.collection, locale)}</Link>
        </p>
        <header className="content-doc-header">
          <p className="eyebrow">{collectionLabel(doc.collection, locale)}</p>
          <h1>{doc.title}</h1>
          <p>{doc.description}</p>
        </header>
        <div
          className="chapter-content content-doc-body"
          dangerouslySetInnerHTML={{ __html: doc.html }}
        />
        <nav className="content-doc-nav" aria-label={en ? "Document navigation" : "文档导航"}>
          {previous ? (
            <Link href={`${basePath}/${previous.slug}`}>
              ← {previous.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`${basePath}/${next.slug}`}>
              {next.title} →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </article>
    </div>
  );
}
