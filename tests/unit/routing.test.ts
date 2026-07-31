import { describe, expect, it } from "vitest";

import {
  buildLanguageAlternates,
  getAlternateLocale,
  localizedPath,
  negotiateLocaleFromAcceptLanguage,
  parseLocaleFromPathname,
  stripLocalePrefix,
  swapLocalePath,
} from "@/lib/i18n/routing";

describe("i18n routing", () => {
  it("解析 locale 前缀", () => {
    expect(parseLocaleFromPathname("/en/book")).toBe("en");
    expect(parseLocaleFromPathname("/zh")).toBe("zh");
    expect(parseLocaleFromPathname("/book")).toBeNull();
  });

  it("切换语言时保留当前路径", () => {
    expect(swapLocalePath("/en/book/00-preface", "zh")).toBe(
      "/zh/book/00-preface",
    );
    expect(swapLocalePath("/zh/tools/diagnosis", "en")).toBe(
      "/en/tools/diagnosis",
    );
    expect(swapLocalePath("/en", "zh")).toBe("/zh");
  });

  it("生成本地化路径与 hreflang 映射", () => {
    expect(localizedPath("en", "/method")).toBe("/en/method");
    expect(stripLocalePrefix("/zh/book")).toBe("/book");
    expect(buildLanguageAlternates("/book/00-preface")).toEqual({
      en: "/en/book/00-preface",
      "zh-CN": "/zh/book/00-preface",
      "x-default": "/en/book/00-preface",
    });
  });

  it("返回另一语言", () => {
    expect(getAlternateLocale("en")).toBe("zh");
    expect(getAlternateLocale("zh")).toBe("en");
  });

  it("根据 Accept-Language 协商默认语言", () => {
    expect(negotiateLocaleFromAcceptLanguage("zh-CN,zh;q=0.9,en;q=0.8")).toBe(
      "zh",
    );
    expect(negotiateLocaleFromAcceptLanguage("en-US,en;q=0.9")).toBe("en");
    expect(negotiateLocaleFromAcceptLanguage(null)).toBe("en");
  });
});
