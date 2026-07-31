import type { ReactNode } from "react";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/json-ld";
import { SetHtmlLang } from "@/components/set-html-lang";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  isPublishedLocale,
  publishedLocales,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return publishedLocales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isPublishedLocale(locale)) notFound();
  const dictionary = getDictionary(locale);
  const structuredData = [
    organizationJsonLd(locale),
    websiteJsonLd(locale),
  ];

  return (
    <>
      <SetHtmlLang locale={locale} />
      <a className="skip-link" href="#main-content">
        {dictionary.skipToContent}
      </a>
      <JsonLd data={structuredData} />
      <SiteHeader locale={locale} />
      <main id="main-content">{children}</main>
      <SiteFooter locale={locale} />
    </>
  );
}
