import type { Metadata } from "next";

import {
  GITHUB_BOOK_REPO_URL,
  GITHUB_PRODUCT_REPO_URL,
} from "@/lib/community";
import type { PublishedLocale } from "@/lib/i18n/config";
import { localeToHtmlLang } from "@/lib/i18n/routing";

export const SITE_URL = "https://regenic.ai";
export const SITE_NAME = "Regenic";
export const BOOK_NAME = "重写基因";
export const BOOK_SUBTITLE = "如何构建 AI 原生组织";
export const AUTHOR_NAME = "李必琪（Jeson Li）";
export const AUTHOR_NAME_EN = "Jeson Li";
export const SOCIAL_IMAGE_PATH = "/opengraph-image";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  locale?: PublishedLocale;
};

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  type = "website",
  locale = "en",
}: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const socialTitle = `${title}｜${SITE_NAME}`;
  const bookLabel = locale === "en" ? "Regenic" : BOOK_NAME;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type,
      locale: locale === "en" ? "en_US" : "zh_CN",
      url,
      siteName: SITE_NAME,
      title: socialTitle,
      description,
      images: [
        {
          url: SOCIAL_IMAGE_PATH,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME}｜${bookLabel}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [SOCIAL_IMAGE_PATH],
    },
  };
}

export function organizationJsonLd(locale: PublishedLocale = "zh") {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    description:
      locale === "en"
        ? "Regenic builds open org-management software for AI-native organizations. regenic.ai publishes the Rewrite the DNA method, cases, and tools."
        : "Regenic 构建 AI 原生组织的开源管理软件。regenic.ai 发布《重写基因》方法、案例与工具。",
    founder: {
      "@type": "Person",
      name: locale === "en" ? AUTHOR_NAME_EN : AUTHOR_NAME,
    },
    sameAs: [GITHUB_PRODUCT_REPO_URL, GITHUB_BOOK_REPO_URL],
  };
}

export function websiteJsonLd(locale: PublishedLocale = "zh") {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: localeToHtmlLang(locale),
    description:
      locale === "en"
        ? "The free online edition of Rewrite the DNA and the living Regenic methodology for organizational intelligence."
        : "《重写基因》免费阅读站，以及 Regenic 组织智能方法论的持续运行版本。",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
