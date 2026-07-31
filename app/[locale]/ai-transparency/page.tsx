import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { TrustPage } from "@/components/trust-page";
import { GITHUB_ISSUES_URL } from "@/lib/community";
import { isPublishedLocale } from "@/lib/i18n/config";
import { createLocalizedMetadata } from "@/lib/i18n/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isPublishedLocale(locale)) return {};
  return createLocalizedMetadata({
    locale,
    title: locale === "en" ? "AI Transparency" : "AI 透明度说明",
    description: locale === "en"
      ? "How Regenic.ai uses AI assistance, human review, evidence boundaries, and crawler controls."
      : "Regenic.ai 关于 AI 辅助、人工审核、事实边界，以及 AI 搜索与模型训练抓取的公开说明。",
    pathname: "/ai-transparency",
  });
}

export default async function AiTransparencyPage({
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
      title={en ? "AI Transparency" : "AI 透明度说明"}
      eyebrow={en ? "AI-assisted · Human-accountable" : "AI 辅助 · 人工负责"}
      description={en ? "Regenic discusses and uses AI, while people remain responsible for selection, judgment, boundaries, and publication." : "Regenic 讨论 AI，也使用 AI 辅助工作；但公开内容的选择、判断、边界与发布责任由人承担。"}
      publishedAt="2026-07-28"
      path={`/${locale}/ai-transparency`}
    >
      <section>
        <h2>{en ? "Where AI may assist" : "AI 可以参与什么"}</h2>
        <p>
          {en ? "AI may assist with research organization, structural suggestions, language review, code, and consistency checks. Its output is candidate material, not automatically fact, opinion, or publishable content." : "AI 可用于资料整理、结构建议、语言检查、代码辅助和一致性检查。AI 的输出是候选材料，不因生成速度或表达完整而自动成为事实、观点或发布内容。"}
        </p>
      </section>
      <section>
        <h2>{en ? "Human review and responsibility" : "人工审核与责任"}</h2>
        <p>
          {en ? "People decide what to adopt and perform final review. For data, cases, and external claims, we seek verifiable sources and distinguish primary facts, company-reported figures, author accounts, strategic judgments, and unverified projections. Errors are corrected and versions dated when revisions actually occur." : "公开内容由人决定是否采用并完成最终审核。涉及数据、案例和外部论断时，我们尽力回到可核验来源，并区分一手事实、公司口径、作者自述、战略判断和待验证推演。发现错误后会修正，并从实际修订时点记录版本。"}
        </p>
        <p>
          {en ? "AI assistance does not transfer author responsibility or imply error-free content. Send questions or corrections through a" : "AI 辅助不转移作者责任，也不意味着内容没有错误。问题或纠错线索请通过"}
          {" "}
          <a href={GITHUB_ISSUES_URL} rel="noreferrer">
            GitHub Issue
          </a>
          {en ? "." : " 提出。"}
        </p>
      </section>
      <section>
        <h2>{en ? "AI search and model-training crawlers differ" : "AI 搜索与模型训练抓取不同"}</h2>
        <p>
          {en ? "OAI-SearchBot helps public pages appear in OpenAI search results; GPTBot may collect material for generative-model training. Their purposes and controls differ, so allowing one does not allow the other." : "OAI-SearchBot 用于让公开网页进入 OpenAI 的搜索结果；GPTBot 用于可能参与生成式 AI 模型训练。二者用途和控制标识不同，允许前者并不等于允许后者。"}
        </p>
        <p>
          {en ? "Ordinary search engines and OAI-SearchBot may discover, index, and cite public pages. robots.txt disallows GPTBot training crawls. Tools that fetch a page at a user's request are not categorically blocked by that training restriction." : "当前默认允许普通搜索引擎与 OAI-SearchBot 发现、索引和引用公开页面，同时在 robots.txt 中拒绝 GPTBot 的训练抓取。用户主动请求访问页面的工具不因这一训练限制被一并屏蔽。"}
        </p>
      </section>
      <section>
        <h2>{en ? "Citations still require context" : "引用仍需保留上下文"}</h2>
        <p>
          {en ? "Search snippets and AI answers may compress an argument. When citing the book or methodology, retain the source link and check the evidence quality, applicability boundaries, and version information in the full text." : "搜索摘要或 AI 回答可能压缩论证。引用本书与方法论时，请保留来源链接，并同时核对正文中的证据成色、适用边界和版本信息。"}
        </p>
      </section>
    </TrustPage>
  );
}
