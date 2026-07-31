import { notFound } from "next/navigation";

import {
  EvidenceLabel,
  PageCta,
  PageHero,
  SectionHeading,
  TraceNote,
} from "@/components/marketing";
import { GITHUB_ISSUES_URL } from "@/lib/community";
import { isPublishedLocale } from "@/lib/i18n/config";
import { createLocalizedMetadata } from "@/lib/i18n/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isPublishedLocale(locale)) return {};
  return createLocalizedMetadata({
    locale,
    title: locale === "en" ? "About the author" : "关于作者",
    description: locale === "en"
      ? "Meet Jeson Li, author of Regenic and founder of its first organizational experiment."
      : "《重写基因》作者、Regenic.ai 发起人李必琪（Jeson Li）的介绍与实践承诺。",
    pathname: "/about",
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isPublishedLocale(locale)) notFound();
  if (locale === "en") {
    return (
      <>
        <PageHero
          eyebrow="About the author"
          title={<>Jeson Li</>}
          description="Author of Regenic, initiator of Regenic.ai, and founder of bioby.ai. His earlier ventures include co-founding Diffshop and Eezycollab."
          aside={<div><p>Public channel</p><a className="text-link" href={GITHUB_ISSUES_URL} rel="noreferrer">GitHub Issues</a></div>}
        />
        <section className="marketing-section shell">
          <div className="author-statement">
            <SectionHeading eyebrow="A testable commitment" title="Every standard in the book runs first inside the author&apos;s own company." />
            <div>
              <p>The organization standards, execution redesign, and 90-day sequence are operating practices at bioby.ai—not templates invented for publication.</p>
              <p>This does not prove universal validity. It establishes a minimum standard of credibility: the author will not recommend practices he is unwilling to run.</p>
            </div>
          </div>
        </section>
        <section className="statement-band">
          <div className="shell author-standards">
            <SectionHeading eyebrow="Standards in practice" title="From mission to daily judgment" />
            <ol>
              <li><span>Mission</span><strong>Use AI to raise human capability</strong></li>
              <li><span>Belief</span><strong>Human–AI collaboration is the future</strong></li>
              <li><span>Behavior</span><strong>Treat people with integrity</strong></li>
              <li><span>Judgment</span><strong>Decide by value</strong></li>
            </ol>
          </div>
        </section>
        <section className="marketing-section shell">
          <TraceNote locale={locale}>bioby.ai is the first internal sample, not the only evidence. Transferability still requires external comparisons and cross-organization testing.</TraceNote>
        </section>
        <section className="marketing-section shell">
          <div className="platform-relation">
            <SectionHeading eyebrow="Four carriers" title="Frozen, running, product, and practice" />
            <div>
              <article><span>Publication</span><h3>Rewrite the DNA</h3><p>A complete argument frozen at publication.</p></article>
              <article><span>Living edition</span><h3>regenic.ai</h3><p>Book, method, tools, cases, and this website.</p></article>
              <article><span>Product</span><h3>Regenic</h3><p>Open org-management software for AI-native organizations.</p></article>
              <article><span>First lab</span><h3>bioby.ai</h3><p>Real operating constraints and results.</p></article>
            </div>
          </div>
        </section>
        <PageCta locale={locale} title="Read the complete argument" />
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="关于作者"
        title={
          <>
            李必琪
            <br />
            Jeson Li
          </>
        }
        description="《重写基因》作者、Regenic.ai 发起人、bioby.ai 创始人。此前曾多次创业，并联合创立 Diffshop 与 Eezycollab。"
        aside={
          <div>
            <p>公开渠道</p>
            <a className="text-link" href={GITHUB_ISSUES_URL} rel="noreferrer">
              GitHub Issues
            </a>
          </div>
        }
      />

      <section className="marketing-section shell">
        <div className="author-statement">
          <SectionHeading
            eyebrow="一项可以当场检查的承诺"
            title="书里的每一条标准，都先在作者自己的公司运行。"
          />
          <div>
            <p>
              组织标准母表、执行层重构与 90
              天装配顺序，不是为了出版临时设计的模板。它们首先是 bioby.ai
              的日常工作方式，再被整理为书中的方法。
            </p>
            <p>
              这不证明方法适用于所有组织。它只建立一条最低限度的可信度：作者不会向读者推荐一套自己不愿执行的标准。
            </p>
          </div>
        </div>
      </section>

      <section className="statement-band">
        <div className="shell author-standards">
          <SectionHeading eyebrow="实践中的标准" title="从使命到每天怎么做" />
          <ol>
            <li>
              <span>使命</span>
              <strong>利用 AI 提升全人类水平</strong>
            </li>
            <li>
              <span>信念</span>
              <strong>人机协作是人类的未来</strong>
            </li>
            <li>
              <span>行为</span>
              <strong>诚以待人</strong>
            </li>
            <li>
              <span>判断</span>
              <strong>以价值去判断</strong>
            </li>
          </ol>
        </div>
      </section>

      <section className="marketing-section shell">
        <div className="disclosure-panel">
          <div>
            <p className="eyebrow">经营口径披露</p>
            <h2>对自己的数据，执行同一条诚实标准。</h2>
          </div>
          <div>
            <EvidenceLabel tone="reported">公司经营口径 · 未经审计</EvidenceLabel>
            <p>
              bioby.ai 成立一年以来持续盈利，营收数千万元，服务阿里、百度等 200
              多个品牌客户。以上信息来自公司经营口径，未经审计，不作为方法论普遍有效的证明。
            </p>
            <p>
              网站不会用未经授权的客户 Logo、客户证言或第三方背书替代可核验的实践记录。
            </p>
          </div>
        </div>
        <TraceNote>
          bioby.ai 是第一份内部样本，不是唯一证据。内部案例用于展示方法如何运行；方法是否可迁移，仍需外部双侧样本与跨组织实践检验。
        </TraceNote>
      </section>

      <section className="marketing-section shell">
        <div className="platform-relation">
          <SectionHeading eyebrow="三个载体" title="冻结、运行、产品与实验" />
          <div>
            <article>
              <span>出版冻结版</span>
              <h3>《重写基因》</h3>
              <p>在交稿时冻结的一次完整论证。</p>
            </article>
            <article>
              <span>持续运行版</span>
              <h3>regenic.ai</h3>
              <p>概念、原文、版本、工具与案例的权威源。</p>
            </article>
            <article>
              <span>开源产品</span>
              <h3>Regenic</h3>
              <p>面向 AI 原生组织的开源管理软件。</p>
            </article>
            <article>
              <span>第一个实验场</span>
              <h3>bioby.ai</h3>
              <p>让方法接受真实经营约束与结果检验。</p>
            </article>
          </div>
        </div>
      </section>

      <PageCta locale={locale} title="直接阅读作者的完整论证" />
    </>
  );
}
