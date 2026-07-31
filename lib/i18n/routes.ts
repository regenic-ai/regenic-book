/** Public marketing and trust pages shared across locales (without locale prefix). */
export const publicPaths = [
  "",
  "/book",
  "/method",
  "/product",
  "/cases",
  "/tools/diagnosis",
  "/tools/90-days",
  "/enterprise",
  "/investors",
  "/vision",
  "/about",
  "/versions",
  "/standards",
  "/research",
  "/privacy",
  "/terms",
  "/tracking",
  "/ai-transparency",
] as const;

export type PublicPath = (typeof publicPaths)[number];
