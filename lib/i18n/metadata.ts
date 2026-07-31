import type { Metadata } from "next";

import { createPageMetadata } from "@/lib/seo";

import type { PublishedLocale } from "./config";
import { buildLanguageAlternates, localeToHrefLang } from "./routing";

type LocalizedMetadataOptions = {
  locale: PublishedLocale;
  title: string;
  description: string;
  pathname: string;
  type?: "website" | "article";
};

export function createLocalizedMetadata({
  locale,
  title,
  description,
  pathname,
  type,
}: LocalizedMetadataOptions): Metadata {
  const path = `/${locale}${pathname}`;
  const metadata = createPageMetadata({
    title,
    description,
    path,
    type,
    locale,
  });

  const alternates = buildLanguageAlternates(pathname);

  return {
    ...metadata,
    alternates: {
      canonical: path,
      languages: alternates,
    },
    openGraph: {
      ...metadata.openGraph,
      locale: locale === "en" ? "en_US" : "zh_CN",
      alternateLocale: [
        locale === "en"
          ? localeToHrefLang("zh")
          : localeToHrefLang("en"),
      ],
    },
  };
}
