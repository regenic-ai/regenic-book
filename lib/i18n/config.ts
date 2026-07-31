export const locales = ["en", "zh"] as const;
export const publishedLocales = ["en", "zh"] as const;
export const defaultLocale = "en";

export type Locale = (typeof locales)[number];
export type PublishedLocale = (typeof publishedLocales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function isPublishedLocale(value: string): value is PublishedLocale {
  return publishedLocales.includes(value as PublishedLocale);
}
