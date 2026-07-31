import type { Locale } from "./config";

const dictionaries = {
  zh: {
    brand: "Regenic",
    tagline: "重写组织基因",
    nav: {
      home: "首页",
      book: "免费阅读",
      method: "方法论",
      product: "产品",
      enterprise: "企业实践",
      about: "关于",
      githubStarLabel: "Star",
      githubStar: "在 GitHub 给 Regenic 点 Star",
      githubStarWithCount: "在 GitHub 给 Regenic 点 Star，当前 {count} 个",
      menu: "导航",
      ariaMain: "主导航",
      ariaMobile: "移动端主导航",
    },
    skipToContent: "跳到主要内容",
    languageGroupAria: "选择语言",
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
      product: "Product",
      enterprise: "Enterprise",
      about: "About",
      githubStarLabel: "Star",
      githubStar: "Star Regenic on GitHub",
      githubStarWithCount: "Star Regenic on GitHub, {count} stars",
      menu: "Menu",
      ariaMain: "Main navigation",
      ariaMobile: "Mobile navigation",
    },
    skipToContent: "Skip to main content",
    languageGroupAria: "Choose language",
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
