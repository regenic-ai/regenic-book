import type { MetadataRoute } from "next";

import { getAllChapters } from "@/lib/content/chapters";
import { contentCollections, getCollectionSlugs } from "@/lib/content/docs";
import { publishedLocales } from "@/lib/i18n/config";
import { publicPaths } from "@/lib/i18n/routes";
import { buildLanguageAlternates } from "@/lib/i18n/routing";
import { absoluteUrl } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const chaptersByLocale = await Promise.all(
    publishedLocales.map(async (locale) => ({
      locale,
      chapters: await getAllChapters(locale),
    })),
  );
  const docsByLocale = await Promise.all(
    publishedLocales.flatMap((locale) =>
      contentCollections.map(async (collection) => ({
        locale,
        collection,
        slugs: await getCollectionSlugs(locale, collection),
      })),
    ),
  );
  const languages = (pathname: string) => {
    const alternates = buildLanguageAlternates(pathname);
    return {
      en: absoluteUrl(alternates.en),
      "zh-CN": absoluteUrl(alternates["zh-CN"]),
      "x-default": absoluteUrl(alternates["x-default"]),
    };
  };

  return [
    ...publishedLocales.flatMap((locale) =>
      publicPaths.map((pathname) => ({
        url: absoluteUrl(`/${locale}${pathname}`),
        alternates: { languages: languages(pathname) },
      })),
    ),
    ...chaptersByLocale.flatMap(({ locale, chapters }) =>
      chapters.map((chapter) => {
        const pathname = `/book/${chapter.slug}`;
        return {
          url: absoluteUrl(`/${locale}${pathname}`),
          alternates: { languages: languages(pathname) },
          ...(chapter.updatedAt ? { lastModified: chapter.updatedAt } : {}),
        };
      }),
    ),
    ...docsByLocale.flatMap(({ locale, collection, slugs }) =>
      slugs.map((slug) => {
        const pathname = `/${collection}/${slug}`;
        return {
          url: absoluteUrl(`/${locale}${pathname}`),
          alternates: { languages: languages(pathname) },
        };
      }),
    ),
  ];
}
