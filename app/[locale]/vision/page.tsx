import { notFound } from "next/navigation";

import {
  PageCta,
  PageHero,
  SectionHeading,
  TraceNote,
} from "@/components/marketing";
import { isPublishedLocale } from "@/lib/i18n/config";
import { createLocalizedMetadata } from "@/lib/i18n/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isPublishedLocale(locale)) return {};
  return createLocalizedMetadata({
    locale,
    title: locale === "en" ? "Vision" : "愿景",
    description: locale === "en"
      ? "Regenic's long-term vision: help organizations produce, reproduce, and revise judgment."
      : "Regenic 的长期愿景：让组织能够持续生产、复制与修正判断力。",
    pathname: "/vision",
  });
}

export default async function VisionPage({
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
          eyebrow="Long-term vision"
          title={<>Solve organizational intelligence,<br />not build another model.</>}
          description="Regenic studies how organizations discover gaps in standards, form shared judgment, move context, and correct themselves through reality."
          aside={<p>This is a long-term research and practice direction. It does not imply a partnership, capability comparison, or scientific equivalence with OpenAI.</p>}
        />
        <section className="marketing-section shell">
          <div className="vision-definition">
            <SectionHeading eyebrow="Organizational intelligence" title="Let judgment leave the individual while remaining reproducible, testable, and revisable." />
            <div className="definition-list">
              <article><span>Discover</span><p>Identify missing standards instead of hiding standardless execution behind activity.</p></article>
              <article><span>Encode</span><p>Turn tacit insight into standards with conditions, actions, and acceptance criteria.</p></article>
              <article><span>Share</span><p>Put facts, priorities, failures, and boundaries into common context.</p></article>
              <article><span>Correct</span><p>Let reality revise standards instead of protecting past judgment.</p></article>
            </div>
          </div>
        </section>
        <section className="statement-band"><div className="shell vision-thesis"><p className="eyebrow">Long-term direction</p><blockquote>Models make execution cheaper.<br />Organizational intelligence decides where cheap execution goes.</blockquote><p>AI can retrieve, generate, and execute. It cannot automatically supply mission, value order, boundaries, or final accountability.</p></div></section>
        <section className="marketing-section shell"><TraceNote locale={locale}>The competitive spillover described here is a strategic hypothesis, not an established fact. Regenic will test it through external adoption and documented practice.</TraceNote></section>
        <PageCta locale={locale} title="Start with a testable first step" />
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="长期愿景"
        title={
          <>
            解决组织智能，
            <br />
            不是再造一个模型。
          </>
        }
        description="Regenic 关注的长期问题，是组织如何发现标准缺口、形成共同判断、让上下文流动，并在现实反馈中持续纠偏。"
        aside={
          <p>
            这是一项长期组织研究与实践愿景。它不表示 Regenic 与 OpenAI
            存在合作、能力对标或科学等价关系。
          </p>
        }
      />

      <section className="marketing-section shell">
        <div className="vision-definition">
          <SectionHeading
            eyebrow="我们所说的组织智能"
            title="让判断脱离个人，仍能被复制、检验与修正。"
          />
          <div className="definition-list">
            <article>
              <span>发现</span>
              <p>成员能够主动识别标准缺口，而不是用忙碌掩盖无标准执行。</p>
            </article>
            <article>
              <span>固化</span>
              <p>把隐性悟性写成带条件、动作与验收口径的组织标准。</p>
            </article>
            <article>
              <span>共享</span>
              <p>让事实、优先级、失败样本与边界进入共同上下文。</p>
            </article>
            <article>
              <span>纠偏</span>
              <p>让现实反馈修改标准，而不是让组织保护过去的判断。</p>
            </article>
          </div>
        </div>
      </section>

      <section className="statement-band">
        <div className="shell vision-thesis">
          <p className="eyebrow">长期方向</p>
          <blockquote>
            模型让执行更便宜，
            <br />
            组织智能决定便宜的执行被用去哪里。
          </blockquote>
          <p>
            AI
            可以检索、生成与执行，但使命、价值排序、边界和最终责任不能被工具采购自动补齐。真正的 AI
            原生组织，必须重写自己的默认判断与行为。
          </p>
        </div>
      </section>

      <section className="marketing-section shell">
        <div className="spillover-grid">
          <SectionHeading
            eyebrow="外溢与竞争效应"
            title="一个组织变快，会迫使周围组织重新定价。"
            description="如果统一标准与上下文能提高胜率、纠偏率、复制率和迁移率，优势不会只表现为内部效率。"
          />
          <div className="effect-map">
            <article>
              <span>人才</span>
              <p>高判断密度的组织可能吸引希望获得更大决策权的人。</p>
            </article>
            <article>
              <span>客户</span>
              <p>更快理解需求、交付与纠偏，可能改变客户对响应速度的基准。</p>
            </article>
            <article>
              <span>资本</span>
              <p>更低的协调成本与可复制判断，可能改变增长质量的评价方式。</p>
            </article>
            <article>
              <span>行业语言</span>
              <p>当外部开始采用一套组织的判断标准，品牌才进一步成为文化外溢。</p>
            </article>
          </div>
        </div>
        <TraceNote>
          上述外溢链条是战略判断，不是已证事实。Regenic
          将区分“知道一个品牌”与“采用它的判断标准”，并用外部主动引用、制度采用与实践记录检验。
        </TraceNote>
      </section>

      <section className="marketing-section shell">
        <div className="horizon-grid">
          <SectionHeading eyebrow="从现在到长期" title="先跑通一轮，再讨论终局。" />
          <ol>
            <li>
              <span>现在</span>
              <strong>公开方法、原文、案例与缺口</strong>
              <p>建立可追溯的权威源，让每个论断都能回到证据与边界。</p>
            </li>
            <li>
              <span>下一步</span>
              <strong>跨组织验证第一轮进化</strong>
              <p>用相同起点、动作、停止线和前后指标记录企业实践。</p>
            </li>
            <li>
              <span>长期</span>
              <strong>形成可持续运行的组织智能系统</strong>
              <p>帮助组织不断生产自己的标准，而不是永久依赖外部答案。</p>
            </li>
          </ol>
        </div>
      </section>

      <PageCta locale={locale} title="从可检验的第一步开始" />
    </>
  );
}
