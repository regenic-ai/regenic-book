import Link from "next/link";
import { notFound } from "next/navigation";

import { INVESTOR_EMAIL, INVESTOR_MAILTO } from "@/lib/community";
import { isPublishedLocale } from "@/lib/i18n/config";
import { createLocalizedMetadata } from "@/lib/i18n/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isPublishedLocale(locale)) return {};
  return createLocalizedMetadata({
    locale,
    title: locale === "en" ? "Investors" : "投资人",
    description: locale === "en"
      ? "Regenic thesis for investors: organizational intelligence as infrastructure, what is public today, and how to reach Jeson Li."
      : "面向投资人的 Regenic 论点：组织智能作为基础设施、当前公开资产，以及与 Jeson Li 的直接联系方式。",
    pathname: "/investors",
  });
}

const thesisSteps = {
  en: [
    {
      title: "Execution supply rises",
      body: "The marginal cost of code, content, analysis, and process work keeps falling.",
    },
    {
      title: "Judgment becomes the bottleneck",
      body: "More tools expose missing standards, conflicting value order, and fragmented context.",
    },
    {
      title: "Organizations that encode judgment win",
      body: "Shared standards and shared context let people and agents decide in the same frame—that is the infrastructure Regenic is building.",
    },
  ],
  zh: [
    {
      title: "执行供给上升",
      body: "代码、内容、分析与流程执行的边际成本持续下降。",
    },
    {
      title: "判断成为瓶颈",
      body: "工具越多，标准缺口、价值排序冲突与上下文分裂越明显。",
    },
    {
      title: "固化判断的组织胜出",
      body: "统一标准与统一上下文，让人和 Agent 在同一坐标系里决策——这是 Regenic 要建成的基础设施。",
    },
  ],
} as const;

const assets = {
  en: [
    {
      title: "Public methodology",
      body: "Thirteen-chapter book, eight-layer standards model, diagnosis tools, and a 90-day sequence—readable for free on this site.",
    },
    {
      title: "Product direction",
      body: "Regenic aims to become default management software for AI-native organizations: unified judgment standards × unified context. Architecture first; early stage.",
    },
    {
      title: "Operating sample",
      body: "bioby.ai runs the method in production as the first lab—useful evidence of assembly, not proof of market success at scale.",
    },
  ],
  zh: [
    {
      title: "公开方法论",
      body: "十三章书稿、八层标准母表、诊断工具与 90 天装配顺序，均可在本站免费阅读。",
    },
    {
      title: "产品方向",
      body: "Regenic 要做成 AI 原生组织的默认管理软件：统一判断标准 × 统一上下文。当前以架构为先，仍处早期。",
    },
    {
      title: "经营样本",
      body: "bioby.ai 作为第一个实验场在真实业务中运行这套方法——证明部件能装配，不等于规模化市场成功。",
    },
  ],
} as const;

export default async function InvestorsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isPublishedLocale(locale)) notFound();
  const en = locale === "en";
  const steps = en ? thesisSteps.en : thesisSteps.zh;
  const assetList = en ? assets.en : assets.zh;

  return (
    <div className="conversion-page investor-page">
      <header className="conversion-hero shell">
        <p className="eyebrow">{en ? "Investors" : "投资人"}</p>
        <h1>
          {en
            ? "When execution approaches zero cost, organizational intelligence becomes infrastructure."
            : "当执行价格趋近于零，组织智能成为新的基础设施。"}
        </h1>
        <p>
          {en
            ? "Regenic helps organizations encode judgment as shared standards and shared context—so people and AI act from the same frame."
            : "Regenic 帮助组织把判断固化为共享标准与共享上下文，让人和 AI 在同一坐标系里行动。"}
        </p>
        <div className="inline-actions">
          <a className="button primary" href={INVESTOR_MAILTO}>
            {en ? `Email ${INVESTOR_EMAIL}` : `邮件 ${INVESTOR_EMAIL}`}
          </a>
          <Link className="text-link" href={`/${locale}/book`}>
            {en ? "Read the methodology →" : "阅读方法论 →"}
          </Link>
        </div>
      </header>

      <section className="shell conversion-body">
        <section className="investor-thesis">
          <p className="eyebrow">{en ? "Thesis" : "论点"}</p>
          <h2>
            {en
              ? "More AI supply does not automatically create smarter organizations."
              : "AI 供给扩大，不会自动产生更聪明的组织。"}
          </h2>
          <div className="thesis-flow" aria-label={en ? "Three-step thesis" : "论点三步"}>
            {steps.map((step, index) => (
              <article key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="investor-assets">
          <p className="eyebrow">{en ? "What exists today" : "当前已有"}</p>
          <h2>
            {en
              ? "Book, product direction, and one operating lab."
              : "书稿、产品方向，和一个经营中的实验场。"}
          </h2>
          <div className="investor-asset-list">
            {assetList.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="investor-contact" id="contact">
          <p className="eyebrow">{en ? "Contact" : "联系"}</p>
          <h2>{en ? "Talk directly." : "直接沟通。"}</h2>
          <p>
            {en
              ? "For questions or collaboration, email Jeson Li."
              : "有问题或想协作，请邮件联系 Jeson Li。"}
          </p>
          <a className="investor-email" href={INVESTOR_MAILTO}>
            {INVESTOR_EMAIL}
          </a>
          <div className="inline-actions">
            <Link className="text-link" href={`/${locale}/about`}>
              {en ? "About the author →" : "关于作者 →"}
            </Link>
            <Link className="text-link" href={`/${locale}/method`}>
              {en ? "Method overview →" : "方法论概览 →"}
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
}
