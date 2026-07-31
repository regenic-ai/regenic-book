"use client";

import { useEffect } from "react";

import type { PublishedLocale } from "@/lib/i18n/config";
import { localeToHtmlLang } from "@/lib/i18n/routing";

export function SetHtmlLang({ locale }: { locale: PublishedLocale }) {
  useEffect(() => {
    document.documentElement.lang = localeToHtmlLang(locale);
  }, [locale]);

  return null;
}
