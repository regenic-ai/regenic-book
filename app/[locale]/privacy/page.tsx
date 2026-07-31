import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { TrustPage } from "@/components/trust-page";
import { GITHUB_ISSUES_URL, GITHUB_SECURITY_URL } from "@/lib/community";
import { isPublishedLocale } from "@/lib/i18n/config";
import { createLocalizedMetadata } from "@/lib/i18n/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isPublishedLocale(locale)) return {};
  return createLocalizedMetadata({
    locale,
    title: locale === "en" ? "Privacy Policy" : "隐私政策",
    description: locale === "en"
      ? "How Regenic.ai handles personal information when you browse or read the site."
      : "了解 Regenic.ai 在访问网站与阅读内容时如何处理个人信息。",
    pathname: "/privacy",
  });
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isPublishedLocale(locale)) notFound();
  const en = locale === "en";

  return (
    <TrustPage
      locale={locale}
      title={en ? "Privacy Policy" : "隐私政策"}
      eyebrow={en ? "Trust and boundaries" : "信任与边界"}
      description={en ? "This policy explains what information Regenic.ai encounters, why it is processed, and how to reach the project." : "本政策说明 Regenic.ai 会接触哪些信息、为什么处理这些信息，以及你可以如何联系项目。"}
      publishedAt="2026-07-31"
      path={`/${locale}/privacy`}
    >
      <section>
        <h2>{en ? "Information we process" : "我们处理的信息"}</h2>
        <p>
          {en ? "You may read all public content without an account. The site currently has no payments, accounts, user profiling, or contact forms. Collaboration happens through the public GitHub repository." : "你可以直接阅读本站公开内容，无需注册账户。当前网站没有付费、账户、用户画像或联系表单功能。协作通过公开 GitHub 仓库进行。"}
        </p>
        <p>
          {en ? "Hosting and security providers may process IP addresses, browser type, access time, requested URLs, and error information in server logs to deliver pages, diagnose failures, and prevent abuse." : "网站托管与安全服务为交付页面、排查故障和抵御滥用，可能在服务器日志中处理 IP 地址、浏览器类型、访问时间、请求地址和错误信息。"}
        </p>
      </section>
      <section>
        <h2>{en ? "Purpose and retention" : "处理目的与保留"}</h2>
        <p>
          {en ? "Technical logs are used only for site operations, security, and troubleshooting. We do not sell personal information or use browsing data for ad targeting. Information you submit on GitHub is governed by GitHub&apos;s terms and privacy policy." : "技术日志仅用于网站运行、安全和故障排查。我们不会出售个人信息，也不会把浏览数据用于广告定向。你在 GitHub 提交的信息受 GitHub 服务条款与隐私政策约束。"}
        </p>
        <p>
          {en ? "Server logs are retained only as long as needed for these purposes, legal obligations, or dispute resolution, then deleted or anonymized." : "服务器日志只在实现上述目的、履行法律义务或解决争议所需的期限内保留；不再需要时会删除或匿名化。"}
        </p>
      </section>
      <section>
        <h2>{en ? "Providers and external links" : "服务提供方与外部链接"}</h2>
        <p>
          {en ? "Hosting and network providers may process necessary data on our behalf under their own terms and privacy policies. External sites such as GitHub and bioby.ai govern processing after you leave this site." : "托管与网络服务提供方可能代表我们处理必要数据，并受其服务条款和隐私政策约束。本站链接到 GitHub、bioby.ai 等外部网站；离开本站后的数据处理由对应网站说明。"}
        </p>
      </section>
      <section>
        <h2>{en ? "Your choices and contact" : "你的选择与联系我们"}</h2>
        <p>
          {en ? "For privacy questions about this website, open a GitHub Issue. For security vulnerabilities, use private GitHub Security Advisories." : "关于本站隐私问题，请打开 GitHub Issue。安全漏洞请使用 GitHub Security Advisories 私下报告。"}
          {" "}
          <a href={GITHUB_ISSUES_URL} rel="noreferrer">
            {en ? "GitHub Issues" : "GitHub Issues"}
          </a>
          {" · "}
          <a href={GITHUB_SECURITY_URL} rel="noreferrer">
            {en ? "Security Advisories" : "安全通告"}
          </a>
        </p>
      </section>
    </TrustPage>
  );
}
