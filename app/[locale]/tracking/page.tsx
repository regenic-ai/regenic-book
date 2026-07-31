import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { TrustPage } from "@/components/trust-page";
import { isPublishedLocale } from "@/lib/i18n/config";
import { createLocalizedMetadata } from "@/lib/i18n/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isPublishedLocale(locale)) return {};
  return createLocalizedMetadata({
    locale,
    title: locale === "en" ? "Cookies and Tracking" : "Cookie 与追踪说明",
    description: locale === "en"
      ? "How Regenic.ai currently uses cookies, access logs, analytics, and external links."
      : "了解 Regenic.ai 当前使用 Cookie、访问日志、分析工具和第三方链接的情况。",
    pathname: "/tracking",
  });
}

export default async function TrackingPage({
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
      title={en ? "Cookies and Tracking" : "Cookie 与追踪说明"}
      eyebrow={en ? "Data transparency" : "数据透明"}
      description={en ? "The site is readable without consent prompts and does not trade access for advertising surveillance or cross-site profiling." : "本站以无须同意即可阅读为默认，不通过广告追踪或跨站画像换取访问量。"}
      publishedAt="2026-07-28"
      path={`/${locale}/tracking`}
    >
      <section>
        <h2>{en ? "Current use" : "当前使用情况"}</h2>
        <p>
          {en ? "We use no advertising networks, remarketing pixels, or cross-site profiles, and set no cookies for marketing or personalized ads. Site infrastructure may still process necessary request logs to deliver pages, prevent abuse, and diagnose errors." : "本站没有接入广告网络、再营销像素或跨站用户画像，也没有主动设置用于营销或个性化广告的 Cookie。网站基础设施仍可能处理必要的请求日志，以交付页面、防止滥用和排查错误。"}
        </p>
      </section>
      <section>
        <h2>{en ? "External links and email" : "外部链接与邮件"}</h2>
        <p>
          {en ? "External sites and email services may use cookies or record visits under their own policies. Regenic.ai does not control that processing." : "点击 bioby.ai 等外部链接或邮件地址后，对应服务可能按自己的政策使用 Cookie 或记录访问。本站不控制外部服务的处理方式；请在目标网站查看其说明。"}
        </p>
      </section>
      <section>
        <h2>{en ? "If analytics are introduced" : "未来启用分析时"}</h2>
        <p>
          {en ? "We will prefer privacy-friendly, data-minimizing analytics and will not send email addresses or similar personal information in analytics events. If consent is legally required, we will provide a choice before activation and update this page." : "如果未来启用访问分析，我们会优先选择隐私友好、数据最小化的方案，不在分析事件中发送邮箱等个人信息。若所选方案依法需要同意，我们会在启用前提供选择机制并同步更新本页。"}
        </p>
      </section>
      <section>
        <h2>{en ? "Search crawling is not ad tracking" : "搜索抓取不是广告追踪"}</h2>
        <p>
          {en ? "Public pages permit ordinary search-engine crawling so readers can discover and cite them. Crawl requests may appear in server logs, but are not used to build advertising profiles. For AI search and model-training boundaries, see" : "公开页面允许正常搜索引擎抓取，以便读者发现和引用内容。抓取请求可能出现在服务器日志中，但本站不会据此建立个人广告档案。AI 搜索与模型训练爬虫的具体边界见"}
          <a href={`/${locale}/ai-transparency`}>
            {en ? " AI Transparency" : " AI 透明度说明"}
          </a>
          {en ? "." : "。"}
        </p>
      </section>
    </TrustPage>
  );
}
