import Link from "next/link";
import { notFound } from "next/navigation";

import { CommunityPanel } from "@/components/community-panel";
import { GITHUB_NEW_ISSUE_URL } from "@/lib/community";
import { isPublishedLocale } from "@/lib/i18n/config";
import { createLocalizedMetadata } from "@/lib/i18n/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isPublishedLocale(locale)) return {};
  return createLocalizedMetadata({
    locale,
    title: locale === "en" ? "Investor dialogue" : "投资人沟通",
    description: locale === "en"
      ? "Explore Regenic's organizational-intelligence thesis, evidence, and unresolved questions."
      : "了解 Regenic 的组织智能愿景、市场推演、bioby.ai 内部验证及仍待验证和决议的关键议题。",
    pathname: "/investors",
  });
}

export default async function InvestorsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isPublishedLocale(locale)) notFound();
  if (locale === "en") {
    return (
      <div className="conversion-page investor-page">
        <header className="conversion-hero shell">
          <p className="eyebrow">Investor dialogue · Not a public solicitation</p>
          <h1>When execution approaches zero cost, organizational intelligence becomes infrastructure.</h1>
          <p>Regenic&apos;s long-term direction is to help organizations encode judgment as standards so people and AI act from shared context. This is a strategic thesis, not a completed product or a claim of scientific equivalence.</p>
          <div className="inline-actions">
            <a className="button primary" href={GITHUB_NEW_ISSUE_URL} rel="noreferrer">
              Open a GitHub Issue
            </a>
            <Link className="text-link" href="/en/book">Review the methodology →</Link>
          </div>
        </header>
        <section className="shell conversion-body">
          <section className="investor-thesis">
            <p className="eyebrow">Market thesis · Under continuing test</p>
            <h2>More AI supply does not automatically create smarter organizations.</h2>
            <div className="thesis-flow" aria-label="Three-step market thesis">
              <article><span>01</span><h3>Execution supply rises</h3><p>The marginal cost of code, content, analysis, and process execution keeps falling.</p></article>
              <article><span>02</span><h3>Judgment bottlenecks surface</h3><p>More tools expose value-order conflicts, missing standards, and fragmented context.</p></article>
              <article><span>03</span><h3>Resources may reallocate</h3><p>If evolved organizations gain speed, cost, and talent-density advantages, customers, talent, and capital may move toward them.</p></article>
            </div>
            <p className="evidence-caveat">Resource reallocation is a testable competitive hypothesis, not an established fact.</p>
          </section>
          <section className="evidence-split">
            <article><p className="eyebrow">Assets in place</p><h2>Methodology and a public operating base</h2><ul><li>A complete thirteen-chapter method and eight-layer standards model</li><li>An eight-question diagnosis and 90-day test structure</li><li>A living public record of tools, cases, revisions, and boundaries</li></ul></article>
            <article><p className="eyebrow">bioby.ai validation</p><h2>A first internal experiment, not proof of success</h2><p>Initial practices show that the components can run together in an early-stage company. They have not passed thousand-person stress tests, and long-term quantitative results remain under validation.</p></article>
          </section>
          <CommunityPanel intent="investors" locale={locale} />
        </section>
      </div>
    );
  }

  return (
    <div className="conversion-page investor-page">
      <header className="conversion-hero shell">
        <p className="eyebrow">投资人沟通 · 非公开募资邀约</p>
        <h1>当执行价格趋近于零，组织智能成为新的基础设施。</h1>
        <p>
          Regenic 的长期愿景是解决组织智能：让组织把判断固化为标准，让人和 AI 在统一上下文里行动。这是战略方向，不是已经完成的产品或科学等价声明。
        </p>
        <div className="inline-actions">
          <a className="button primary" href={GITHUB_NEW_ISSUE_URL} rel="noreferrer">
            打开 GitHub Issue
          </a>
          <Link className="text-link" href={`/${locale}/book`}>
            审阅方法论原文 →
          </Link>
        </div>
      </header>
      <section className="shell conversion-body">
        <section className="investor-thesis">
          <p className="eyebrow">市场推演 · 待持续验证</p>
          <h2>AI 供给扩大，不会自动产生更聪明的组织。</h2>
          <div className="thesis-flow" aria-label="市场推演三步">
            <article>
              <span>01</span>
              <h3>执行供给上升</h3>
              <p>代码、内容、分析和流程执行的边际成本继续下降。</p>
            </article>
            <article>
              <span>02</span>
              <h3>判断瓶颈暴露</h3>
              <p>工具越多，价值排序、标准缺口和上下文分裂越明显。</p>
            </article>
            <article>
              <span>03</span>
              <h3>资源重新分配</h3>
              <p>
                若进化组织形成决策速度、成本和人才密度优势，客户、人才与资本可能向其迁移。
              </p>
            </article>
          </div>
          <p className="evidence-caveat">
            “资源重新分配”是可检验的竞争推演，不是已证事实；OpenAI
            等机构只能作为“组织通过统一标准与上下文放大智能”的有限类比，不代表合作，也不与模型架构作科学等价。
          </p>
        </section>
        <section className="evidence-split">
          <article>
            <p className="eyebrow">已形成的资产</p>
            <h2>方法论与公开运行母体</h2>
            <ul>
              <li>《重写基因》十三章完整方法论及八层组织标准母表</li>
              <li>八问诊断、90 天路线与可复测的试点验收结构</li>
              <li>Regenic.ai 持续公开工具、版本、案例与论断边界</li>
            </ul>
          </article>
          <article>
            <p className="eyebrow">bioby.ai 验证</p>
            <h2>第一个内部实验场，不是成功证明</h2>
            <p>
              2026 年 2—7 月，bioby.ai
              逐步装配清晰术、干扰术、招人标准、ROI 卡、研发单元改造与时间配比。内部样本证明这些部件能在早期公司共同运行，但尚未通过千人规模压力测试，长期定量结果仍需持续验证。
            </p>
            <Link className="text-link" href={`/${locale}/book/13-ninety-days`}>
              查看样本成色与时间线 →
            </Link>
          </article>
        </section>
        <section className="open-questions">
          <p className="eyebrow">待决议题 · 不伪装成答案</p>
          <h2>开放传播与商业壁垒如何同时成立？</h2>
          <div className="boundary-grid">
            <div>
              <b>确定开放</b>
              <p>
                全书、核心概念、诊断框架和基础工具保持公开，接受引用与复测。
              </p>
            </div>
            <div>
              <b>尚待决议</b>
              <p>
                企业数据、实施工作台、专用评估模型与服务流程中，哪些闭源才能保护客户并形成可持续能力。
              </p>
            </div>
            <div>
              <b>决议标准</b>
              <p>
                不能以锁住知识制造稀缺；必须同时满足客户隐私、方法可验证和长期可持续。
              </p>
            </div>
          </div>
        </section>
        <CommunityPanel intent="investors" locale={locale} />
      </section>
    </div>
  );
}
