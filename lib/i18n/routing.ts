import {
  defaultLocale,
  isPublishedLocale,
  type PublishedLocale,
} from "./config";

export const localeCookieName = "NEXT_LOCALE";

export function getAlternateLocale(locale: PublishedLocale): PublishedLocale {
  return locale === "en" ? "zh" : "en";
}

export function localeToHtmlLang(locale: PublishedLocale): string {
  return locale === "en" ? "en" : "zh-CN";
}

export function localeToHrefLang(locale: PublishedLocale): "en" | "zh-CN" {
  return locale === "en" ? "en" : "zh-CN";
}

export function parseLocaleFromPathname(pathname: string): PublishedLocale | null {
  const match = pathname.match(/^\/(en|zh)(?=\/|$)/);
  return match?.[1] && isPublishedLocale(match[1]) ? match[1] : null;
}

/** Remove `/en` or `/zh` prefix and return a path starting with `/`. */
export function stripLocalePrefix(pathname: string): string {
  const stripped = pathname.replace(/^\/(en|zh)(?=\/|$)/, "");
  return stripped ? (stripped.startsWith("/") ? stripped : `/${stripped}`) : "/";
}

export function localizedPath(
  locale: PublishedLocale,
  pathname: string,
): string {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const stripped = stripLocalePrefix(normalized);
  return stripped === "/" ? `/${locale}` : `/${locale}${stripped}`;
}

export function swapLocalePath(
  pathname: string,
  targetLocale: PublishedLocale,
): string {
  return localizedPath(targetLocale, stripLocalePrefix(pathname));
}

export function buildLanguageAlternates(pathname: string) {
  const stripped = stripLocalePrefix(pathname);
  return {
    en: localizedPath("en", stripped),
    "zh-CN": localizedPath("zh", stripped),
    "x-default": localizedPath(defaultLocale, stripped),
  };
}

export function negotiateLocaleFromAcceptLanguage(
  acceptLanguage: string | null,
): PublishedLocale {
  if (!acceptLanguage) return defaultLocale;

  const tokens = acceptLanguage
    .split(",")
    .map((part) => part.trim().split(";")[0]?.toLowerCase())
    .filter(Boolean);

  for (const token of tokens) {
    if (token.startsWith("zh")) return "zh";
    if (token.startsWith("en")) return "en";
  }

  return defaultLocale;
}
