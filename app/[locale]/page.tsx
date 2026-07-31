import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  CapabilityDiagram,
  EvidenceLabel,
  SectionHeading,
  TraceNote,
} from "@/components/marketing";
import { isPublishedLocale, type PublishedLocale } from "@/lib/i18n/config";
import { createLocalizedMetadata } from "@/lib/i18n/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isPublishedLocale(locale)) return {};
  return createLocalizedMetadata({
    locale,
    title: locale === "en" ? "Rewrite Organizational DNA" : "重写基因",
    description: locale === "en"
      ? "As AI makes execution cheaper, competition shifts to judgment. Regenic turns individual insight into shared standards and context."
      : "AI 降低执行成本后，组织的竞争转向判断力。Regenic 帮助组织把悟性固化为统一标准与上下文。",
    pathname: "",
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isPublishedLocale(locale)) notFound();
  if (locale === "en") return <EnglishHome locale={locale} />;

  return (
    <>
      <section className="hero home-hero shell">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">组织智能 · 持续运行版</p>
            <h1>
              执行正在变便宜。
              <br />
              判断力成为最后的稀缺。
            </h1>
            <p className="hero-copy">
              AI 原生组织不是买齐工具的旧组织，而是把个人悟性固化为统一判断标准与统一上下文的组织。
            </p>
            <div className="hero-actions">
              <Link className="button primary" href={`/${locale}/book`}>
                免费阅读《重写基因》
              </Link>
              <Link className="text-link" href={`/${locale}/method`}>
                查看方法论 →
              </Link>
            </div>
          </div>
          <aside className="hero-proof" aria-label="核心证据">
            <span className="proof-number">280×</span>
            <p>
              达到 GPT-3.5 水平的推理成本，在约两年间从每百万 token 20
              美元降至 0.07 美元。
            </p>
            <small>Stanford HAI《AI Index 2025》核算口径</small>
          </aside>
        </div>
      </section>

      <section className="evidence-strip">
        <div className="shell evidence-strip-grid">
          <p className="eyebrow">问题不只在技术</p>
          <p>
            RAND 对 65 名资深数据从业者的访谈，把项目失败的首要根因指向利益相关方对问题理解错位与沟通失真。
          </p>
          <EvidenceLabel tone="verified">外部研究已核</EvidenceLabel>
        </div>
      </section>

      <section className="marketing-section shell" id="method">
        <SectionHeading
          eyebrow="双能力模型"
          title="伟大组织需要的两种能力"
          description="标准决定如何判断，上下文决定能否一起行动。AI 可以降低执行成本，但这两种能力仍必须由组织生产并维护。"
        />
        <CapabilityDiagram locale={locale} />
      </section>

      <section className="statement-band">
        <div className="shell">
          <SectionHeading
            eyebrow="两条生产线"
            title="先扩大自己的选项，再收窄对方的选项。"
          />
          <div className="method-pair">
            <article>
              <span>清晰术</span>
              <h3>发现缺口，借到标准，验证迁移。</h3>
              <p>
                提炼标准、收集双侧数据，再以价值排序求优解。它反对的不是经验，而是经验未经验证就拥有最终解释权。
              </p>
            </article>
            <article>
              <span>干扰术</span>
              <h3>理解共识，选择场景，诚实地制造共识。</h3>
              <p>
                只允许选择性展示真实信息，不允许制造假信息。“诚以待人”是硬边界，不因增长压力而松动。
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="marketing-section shell">
        <div className="spillover-grid">
          <SectionHeading
            eyebrow="竞争推演"
            title="进化不会停在组织内部。"
            description="如果一家公司持续提升决策速度、纠偏能力与判断复制率，它会改变所在市场的人才、客户与资本分配。这是 Regenic 的战略推演，不是已经被证明的普遍规律。"
          />
          <ol className="spillover-chain">
            <li>
              <span>01</span>执行成本下降，判断差距放大
            </li>
            <li>
              <span>02</span>更快决策与纠偏形成竞争优势
            </li>
            <li>
              <span>03</span>人才、客户与资本重新选择
            </li>
            <li>
              <span>04</span>外部组织被迫重写自己的基因
            </li>
          </ol>
        </div>
        <TraceNote>
          “鲶鱼效应”在这里是可检验的竞争推演。后续将以决策速度、纠偏率、人才密度与外部采用记录持续验证。
        </TraceNote>
      </section>

      <section className="book-invitation">
        <div className="shell book-invitation-grid">
          <div>
            <p className="eyebrow">知识免费，判断不免费</p>
            <h2>这本书全文免费。</h2>
          </div>
          <div>
            <p>
              因为书里的主张就是：知识获取正在免费，稀缺的是读完之后发现标准缺口、判断迁移条件并验证修正的悟性。
            </p>
            <Link className="button light" href={`/${locale}/book`}>
              从前言开始阅读
            </Link>
          </div>
        </div>
      </section>

      <section className="marketing-section shell">
        <div className="lab-grid">
          <div>
            <p className="eyebrow">第一个实验场</p>
            <h2>bioby.ai 先用自己验证。</h2>
            <p>
              书中的组织标准、执行层重构与 90
              天装配顺序，首先在作者自己的公司运行。成功、失效与缺口使用同一套披露结构。
            </p>
          </div>
          <div className="lab-ledger">
            <div>
              <strong>已公开</strong>
              <span>标准母表、装配时间线、研发单元样本</span>
            </div>
            <div>
              <strong>仍待验证</strong>
              <span>部分产能口径、长期外溢结果、跨组织复现</span>
            </div>
            <EvidenceLabel tone="reported">内部自述 · 未经审计</EvidenceLabel>
          </div>
        </div>
      </section>

      <section className="pathways shell" aria-labelledby="pathways-title">
        <SectionHeading eyebrow="继续探索" title="从证据、方法或长期问题进入" />
        <h2 className="sr-only" id="pathways-title">
          继续探索
        </h2>
        <div className="pathway-grid">
          <Link href={`/${locale}/cases`}>
            <span>案例与证据</span>
            <strong>看哪些已核，哪些仍待验证</strong>
            <small>进入案例库 →</small>
          </Link>
          <Link href={`/${locale}/method`}>
            <span>方法论</span>
            <strong>理解双能力与两条生产线</strong>
            <small>查看完整框架 →</small>
          </Link>
          <Link href={`/${locale}/vision`}>
            <span>长期愿景</span>
            <strong>为什么最终问题是组织智能</strong>
            <small>阅读愿景 →</small>
          </Link>
        </div>
      </section>
    </>
  );
}

function EnglishHome({ locale }: { locale: PublishedLocale }) {
  return (
    <>
      <section className="hero home-hero shell">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">Organizational intelligence · Living edition</p>
            <h1>Execution is getting cheaper.<br />Judgment is becoming the last scarcity.</h1>
            <p className="hero-copy">An AI-native organization is not an old organization with every tool installed. It turns individual insight into shared judgment standards and shared context.</p>
            <div className="hero-actions">
              <Link className="button primary" href={`/${locale}/book`}>Read <em>Rewrite the DNA</em> free</Link>
              <Link className="text-link" href={`/${locale}/method`}>Explore the method →</Link>
            </div>
          </div>
          <aside className="hero-proof" aria-label="Core evidence">
            <span className="proof-number">280×</span>
            <p>The inference cost of reaching GPT-3.5-level performance fell from $20 to $0.07 per million tokens in roughly two years.</p>
            <small>Stanford HAI, AI Index 2025 methodology</small>
          </aside>
        </div>
      </section>
      <section className="evidence-strip">
        <div className="shell evidence-strip-grid">
          <p className="eyebrow">The problem is not only technical</p>
          <p>RAND interviews with 65 experienced data practitioners identified stakeholder misunderstanding and communication failure as the leading root cause of AI project failure.</p>
          <EvidenceLabel tone="verified">External research verified</EvidenceLabel>
        </div>
      </section>
      <section className="marketing-section shell" id="method">
        <SectionHeading eyebrow="Dual-capability model" title="Two capabilities great organizations need" description="Standards determine how to judge. Context determines whether people can act together. AI can lower execution cost, but the organization must still produce and maintain both." />
        <CapabilityDiagram locale={locale} />
      </section>
      <section className="statement-band">
        <div className="shell">
          <SectionHeading eyebrow="Two production lines" title="Expand your options, then narrow theirs." />
          <div className="method-pair">
            <article><span>Clarity</span><h3>Find the gap, borrow a standard, verify the transfer.</h3><p>Extract standards, collect evidence from winners and losers, then optimize by value. Experience matters only after validation.</p></article>
            <article><span>Interference</span><h3>Understand consensus, choose the scene, build consensus honestly.</h3><p>Selectively present true information without hiding material facts. “Treat People with Honesty” is a hard boundary.</p></article>
          </div>
        </div>
      </section>
      <section className="marketing-section shell">
        <div className="spillover-grid">
          <SectionHeading eyebrow="Competitive hypothesis" title="Evolution does not stop inside the organization." description="If a company repeatedly improves decision speed, correction, and judgment replication, talent, customers, and capital may reallocate. This is a testable strategic hypothesis, not a proven universal law." />
          <ol className="spillover-chain">
            <li><span>01</span>Execution costs fall; judgment gaps widen</li>
            <li><span>02</span>Faster decisions and correction compound</li>
            <li><span>03</span>Talent, customers, and capital reselect</li>
            <li><span>04</span>Other organizations must rewrite their DNA</li>
          </ol>
        </div>
        <TraceNote locale={locale}>The “catfish effect” is treated here as a measurable competitive hypothesis, to be tested through decision speed, correction rates, talent density, and adoption records.</TraceNote>
      </section>
      <section className="book-invitation">
        <div className="shell book-invitation-grid">
          <div><p className="eyebrow">Knowledge is free; judgment is not</p><h2>The complete book is free.</h2></div>
          <div><p>The claim is testable in the reading itself: what remains scarce is detecting standards gaps, judging transfer conditions, and correcting through evidence.</p><Link className="button light" href={`/${locale}/book`}>Start with the foreword</Link></div>
        </div>
      </section>
      <section className="pathways shell" aria-labelledby="pathways-title">
        <SectionHeading eyebrow="Continue" title="Enter through evidence, method, or the long-term question" />
        <h2 className="sr-only" id="pathways-title">Continue exploring</h2>
        <div className="pathway-grid">
          <Link href={`/${locale}/cases`}><span>Cases and evidence</span><strong>See what is verified and what remains open</strong><small>Open the case ledger →</small></Link>
          <Link href={`/${locale}/method`}><span>Method</span><strong>Understand the two capabilities and production lines</strong><small>View the framework →</small></Link>
          <Link href={`/${locale}/vision`}><span>Long-term vision</span><strong>Why the final question is organizational intelligence</strong><small>Read the vision →</small></Link>
        </div>
      </section>
    </>
  );
}
