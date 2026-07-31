import { describe, expect, it } from "vitest";

import { createLocalizedMetadata } from "@/lib/i18n/metadata";

describe("createLocalizedMetadata", () => {
  it("输出 canonical 与双语 hreflang", () => {
    const metadata = createLocalizedMetadata({
      locale: "en",
      title: "Method",
      description: "Regenic method overview",
      pathname: "/method",
    });

    expect(metadata.alternates?.canonical).toBe("/en/method");
    expect(metadata.alternates?.languages).toEqual({
      en: "/en/method",
      "zh-CN": "/zh/method",
      "x-default": "/en/method",
    });
    expect(metadata.openGraph?.locale).toBe("en_US");
    expect(metadata.openGraph?.alternateLocale).toEqual(["zh-CN"]);
  });
});
