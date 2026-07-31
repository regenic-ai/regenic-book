import { notFound } from "next/navigation";

import { ContentDocReader } from "@/components/content-doc-reader";
import { getDocBySlug, getCollectionSlugs } from "@/lib/content/docs";
import {
  isPublishedLocale,
  publishedLocales,
} from "@/lib/i18n/config";
import { createLocalizedMetadata } from "@/lib/i18n/metadata";
import type { ContentCollection } from "@/lib/content/types";

type DocPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateDocStaticParams(collection: ContentCollection) {
  const entries = await Promise.all(
    publishedLocales.map(async (locale) => {
      const slugs = await getCollectionSlugs(locale, collection);
      return slugs.map((slug) => ({ locale, slug }));
    }),
  );
  return entries.flat();
}

export async function generateDocMetadata(
  collection: ContentCollection,
  { params }: DocPageProps,
) {
  const { locale, slug } = await params;
  if (!isPublishedLocale(locale)) return {};
  const doc = await getDocBySlug(locale, collection, slug);
  if (!doc) return {};

  return createLocalizedMetadata({
    locale,
    title: doc.title,
    description: doc.description,
    pathname: `/${collection}/${slug}`,
    type: "article",
  });
}

export async function renderDocPage(
  collection: ContentCollection,
  { params }: DocPageProps,
) {
  const { locale, slug } = await params;
  if (!isPublishedLocale(locale)) notFound();
  const doc = await getDocBySlug(locale, collection, slug);
  if (!doc) notFound();

  return (
    <ContentDocReader
      doc={doc}
      locale={locale}
      next={doc.next}
      previous={doc.previous}
    />
  );
}
