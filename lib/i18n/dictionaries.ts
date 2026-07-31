import type { Locale } from "./config";

const dictionaries = {
  zh: {
    brand: "Regenic",
    tagline: "重写组织基因",
    nav: {
      home: "首页",
      book: "免费阅读",
      method: "方法论",
      enterprise: "企业实践",
      about: "关于",
      diagnosis: "组织诊断",
      menu: "导航",
      ariaMain: "主导航",
      ariaMobile: "移动端主导航",
    },
    skipToContent: "跳到主要内容",
    languageGroupAria: "选择语言",
    footer: "让组织把判断固化为标准，让人和 AI 在统一上下文中行动。",
    notFound: {
      eyebrow: "404 · 页面不存在",
      title: "没有找到这页内容。",
      description: "链接可能已变更，或对应章节尚未公开。",
      homeEn: "返回英文首页",
      homeZh: "返回中文首页",
    },
  },
  en: {
    brand: "Regenic",
    tagline: "Rewrite organizational DNA",
    nav: {
      home: "Home",
      book: "Read",
      method: "Method",
      enterprise: "Enterprise",
      about: "About",
      diagnosis: "Organization diagnosis",
      menu: "Menu",
      ariaMain: "Main navigation",
      ariaMobile: "Mobile navigation",
    },
    skipToContent: "Skip to main content",
    languageGroupAria: "Choose language",
    footer: "The book is the frozen edition; Regenic.ai is the living edition.",
    notFound: {
      eyebrow: "404 · Page not found",
      title: "We could not find this page.",
      description: "The link may have changed, or the content may not be public yet.",
      homeEn: "Return to English home",
      homeZh: "Return to Chinese home",
    },
  },
} as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export type Dictionary = (typeof dictionaries)[Locale];
