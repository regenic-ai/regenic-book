import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

import { publicPaths } from "@/lib/i18n/routes";

const chapterPath = "/en/book/00-preface";
const criticalRoutes = [
  "/en",
  "/en/book",
  chapterPath,
  "/en/method",
  "/en/privacy",
  "/en/terms",
  "/en/tracking",
  "/en/ai-transparency",
  "/zh",
  "/zh/book",
];

const englishUiRoutes = publicPaths.map((pathname) =>
  pathname ? `/en${pathname}` : "/en",
);

test.describe("关键路由", () => {
  test("根路径默认跳转到英文", async ({ browser }) => {
    const context = await browser.newContext({ locale: "en-US" });
    await context.clearCookies();
    const page = await context.newPage();
    await page.goto("/");
    await expect(page).toHaveURL(/\/en$/);
    await context.close();
  });

  test("根路径可根据 Accept-Language 进入中文", async ({ browser }) => {
    const context = await browser.newContext({ locale: "zh-CN" });
    await context.clearCookies();
    const page = await context.newPage();
    await page.goto("/");
    await expect(page).toHaveURL(/\/zh$/);
    await context.close();
  });

  for (const route of criticalRoutes) {
    test(`${route} 返回完整页面且无控制台错误`, async ({ page }) => {
      const consoleErrors: string[] = [];
      page.on("console", (message) => {
        if (message.type() === "error") consoleErrors.push(message.text());
      });
      page.on("pageerror", (error) => consoleErrors.push(error.message));

      const response = await page.goto(route, { waitUntil: "networkidle" });

      expect(response?.status()).toBe(200);
      await expect(page.locator("h1")).toBeVisible();
      await expect(page.locator("main")).toHaveAttribute("id", "main-content");
      expect(consoleErrors).toEqual([]);
    });
  }

  test("未知章节返回 404", async ({ page }) => {
    const response = await page.goto("/en/book/not-a-real-chapter");

    expect(response?.status()).toBe(404);
  });
});

test("桌面与移动导航均可到达核心入口", async ({
  page,
  isMobile,
}) => {
  await page.goto("/en");

  if (isMobile) {
    await page.locator(".mobile-nav > summary").click();
    await page
      .getByRole("navigation", { name: "Mobile navigation" })
      .getByRole("link", { name: "Enterprise" })
      .click();
    await expect(page).toHaveURL(/\/en\/enterprise$/);
  } else {
    await page
      .getByRole("navigation", { name: "Main navigation", exact: true })
      .getByRole("link", { name: "Read" })
      .click();
    await expect(page).toHaveURL(/\/en\/book$/);
  }
});

test("所有英文公共入口除语言切换外不回退到中文", async ({ page }) => {
  for (const route of englishUiRoutes) {
    await page.goto(route);
    const text = (await page.locator("body").innerText()).replaceAll("中文", "");
    expect(text, `${route} contains untranslated Chinese UI`).not.toMatch(
      /[\u3400-\u9fff]/,
    );
  }
});

test("语言切换保留当前页面路径", async ({ page, isMobile }) => {
  await page.goto(chapterPath);

  const localeTrigger = isMobile
    ? page.locator(".mobile-nav .locale-dropdown summary")
    : page.locator(".header-actions .locale-dropdown summary");

  if (isMobile) {
    await page.locator(".mobile-nav > summary").click();
  }
  await localeTrigger.click();
  await page.getByRole("menuitem", { name: /中文/i }).click();
  await expect(page).toHaveURL(/\/zh\/book\/00-preface$/);

  if (isMobile) {
    await page.locator(".mobile-nav > summary").click();
  }
  await localeTrigger.click();
  await page.getByRole("menuitem", { name: /English/i }).click();
  await expect(page).toHaveURL(/\/en\/book\/00-preface$/);
});

test("中文页面设置 html lang", async ({ page }) => {
  await page.goto("/zh/book");
  await expect(page.locator("html")).toHaveAttribute("lang", "zh-CN");
});

test("首页、章节与企业页通过 axe 基础扫描", async ({ page }) => {
  for (const route of ["/en", chapterPath, "/zh/enterprise"]) {
    await page.goto(route);
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();

    expect(
      result.violations,
      `${route}: ${result.violations
        .map((violation) => violation.id)
        .join(", ")}`,
    ).toEqual([]);
  }
});

test("公开页面不暴露编辑与技术实现信息", async ({ page }) => {
  const internalPhrases = [
    "正文直接生成自仓库",
    "chapters/",
    "outline.md",
    "research/case-library.md",
    "standards/organization-standard.md",
    "【待补",
    "【图",
    "排版时插入",
    "内容源标注",
    "版本与来源",
    "首版内容建设中",
  ];

  for (const route of [chapterPath, "/en/book/13-ninety-days", "/zh/versions"]) {
    await page.goto(route);
    const bodyText = await page.locator("body").innerText();

    for (const phrase of internalPhrases) {
      expect(bodyText, `${route} 不应包含 ${phrase}`).not.toContain(phrase);
    }
  }
});

test("企业与投资人页改为 GitHub Issues 协作入口", async ({ page }) => {
  for (const route of ["/en/enterprise", "/en/investors", "/zh/enterprise"]) {
    await page.goto(route);
    const issueLink = page.getByRole("link", { name: /GitHub Issue/i }).first();
    await expect(issueLink).toBeVisible();
    await expect(issueLink).toHaveAttribute(
      "href",
      "https://github.com/regenic-ai/regenic-book/issues/new/choose",
    );
    await expect(page.locator("form")).toHaveCount(0);
    await expect(page.locator('input[name="email"]')).toHaveCount(0);
  }
});

test("SEO、结构化数据、sitemap 与 robots 可发现", async ({
  page,
  request,
}) => {
  await page.goto(chapterPath);

  await expect(page).toHaveTitle(/Regenic/);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    `https://regenic.ai${chapterPath}`,
  );
  await expect(
    page.locator('link[rel="alternate"][hreflang="en"]'),
  ).toHaveAttribute("href", `https://regenic.ai${chapterPath}`);
  await expect(
    page.locator('link[rel="alternate"][hreflang="zh-CN"]'),
  ).toHaveAttribute(
    "href",
    "https://regenic.ai/zh/book/00-preface",
  );
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    "content",
    /opengraph-image/,
  );
  await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
    "content",
    "summary_large_image",
  );
  expect(await page.locator('script[type="application/ld+json"]').count()).toBeGreaterThan(
    1,
  );

  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  const sitemapText = await sitemap.text();
  expect(sitemapText).toContain(`https://regenic.ai${chapterPath}`);
  expect(sitemapText).toContain("/en/");
  expect(sitemapText).toContain("/zh/");
  const sitemapUrls = [...sitemapText.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
    (match) => new URL(match[1]).pathname,
  );
  for (const path of sitemapUrls) {
    expect((await request.get(path)).status(), `sitemap URL ${path}`).toBe(200);
  }

  const robots = await request.get("/robots.txt");
  expect(robots.status()).toBe(200);
  expect(await robots.text()).toContain(
    "Sitemap: https://regenic.ai/sitemap.xml",
  );

  const ogImage = await request.get("/opengraph-image");
  expect(ogImage.status()).toBe(200);
  expect(ogImage.headers()["content-type"]).toContain("image/png");
});
