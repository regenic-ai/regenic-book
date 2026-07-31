import { notFound } from "next/navigation";

import {
  EvidenceLabel,
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
    title: locale === "en" ? "Cases and evidence" : "案例与证据",
    description: locale === "en"
      ? "Use winners to find mechanisms and failures to find boundaries."
      : "用赢家寻找机制，用输家寻找边界；公开 Regenic 方法论的证据成色与缺口。",
    pathname: "/cases",
  });
}

const comparisons = [
  {
    question: "相同的 AI 工具，为什么产生不同结果？",
    winner: "与爱为舞：成立即按人机协作重构核心岗位与共享数据。",
    loser: "Klarna：把成本设为过度主导的评价因素后，公开承认质量下降并重新引入真人客服。",
    note: "与爱为舞的融资、估值、收入与学员数据为创始人或公司口径；这里只比较组织设计机制。",
  },
  {
    question: "判断标准能否摆脱强人并被复制？",
    winner: "段永平影响圈：以“本分”等稳定语言连接多个独立组织，段永平自述并未遥控 OPPO、vivo。",
    loser: "王安电脑：判断高度集中于创始人，继任与纠偏都未形成可脱离个人运行的机制。",
    note: "只比较判断存储与复制机制，不比较行业、规模或总体业绩。",
  },
  {
    question: "上下文失真会怎样影响组织？",
    winner: "传神语联：以可运行 DEMO、业务问题与真实使用反馈作为 AI 项目的共同上下文。",
    loser: "诺基亚：学术访谈研究显示，恐惧导致坏消息被过滤，高层在失真的技术上下文中判断。",
    note: "传神的机制可多源交叉，经营效果仍缺第三方验证；诺基亚依据 2016 年 ASQ 论文。",
  },
];

export default async function CasesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isPublishedLocale(locale)) notFound();
  if (locale === "en") {
    const cases = [
      ["Why do identical AI tools produce different outcomes?", "Organizations redesigned around human–AI collaboration from inception.", "Klarna later acknowledged quality loss after making cost too dominant and brought human service back."],
      ["Can judgment standards outlive a strong founder?", "Stable language can connect independent organizations without remote control.", "Wang Laboratories concentrated judgment in its founder and failed to build an independent correction mechanism."],
      ["What happens when context is distorted?", "Runnable demos and real user feedback create shared context.", "Research on Nokia found that fear filtered bad news and distorted senior judgment."],
    ];
    return (
      <>
        <PageHero
          eyebrow="Cases and evidence"
          title={<>Find mechanisms in winners.<br />Find boundaries in failures.</>}
          description="A methodology without failure records is a survivor exhibition. Regenic compares both sides under similar constraints and marks unpaired claims as hypotheses."
          aside={<div className="evidence-key"><EvidenceLabel tone="verified">Public source verified</EvidenceLabel><EvidenceLabel tone="reported">Company or author report</EvidenceLabel><EvidenceLabel tone="hypothesis">Hypothesis</EvidenceLabel></div>}
        />
        <section className="case-ledger shell">
          <SectionHeading eyebrow="Comparison ledger" title="One question, evidence from both sides" description="Cases test decision mechanisms; they do not substitute celebrity stories for representative evidence." />
          <div className="comparison-list">
            {cases.map(([question, winner, loser], index) => (
              <article className="comparison-card" key={question}>
                <header><span>Comparison {String(index + 1).padStart(2, "0")}</span><h3>{question}</h3></header>
                <div className="comparison-sides"><div><small>Mechanism side</small><p>{winner}</p></div><div><small>Boundary side</small><p>{loser}</p></div></div>
              </article>
            ))}
          </div>
        </section>
        <section className="marketing-section shell">
          <TraceNote locale={locale}>Evidence is labeled by source quality. Missing counterparts remain open research questions rather than frozen universal standards.</TraceNote>
        </section>
        <PageCta locale={locale} title="Read the full argument behind the cases" />
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="案例与证据"
        title={
          <>
            赢家找机制，
            <br />
            输家找边界。
          </>
        }
        description="没有失败记录的方法论，是幸存者展览。Regenic 对照相近约束下的成功与失败，并把无法配对的结论降级为待验证假设。"
        aside={
          <div className="evidence-key">
            <EvidenceLabel tone="verified">公开资料已核</EvidenceLabel>
            <EvidenceLabel tone="reported">公司或作者口径</EvidenceLabel>
            <EvidenceLabel tone="hypothesis">待验证假设</EvidenceLabel>
          </div>
        }
      />

      <section className="case-ledger shell">
        <SectionHeading
          eyebrow="对照账本"
          title="同一问题，两侧取证"
          description="案例用于检验决策机制，不用明星故事代替总体，不跨行业比较规模与业绩。"
        />
        <div className="comparison-list">
          {comparisons.map((comparison, index) => (
            <article className="comparison-card" key={comparison.question}>
              <header>
                <span>对照 {String(index + 1).padStart(2, "0")}</span>
                <h3>{comparison.question}</h3>
              </header>
              <div className="comparison-sides">
                <div>
                  <small>机制侧</small>
                  <p>{comparison.winner}</p>
                </div>
                <div>
                  <small>边界侧</small>
                  <p>{comparison.loser}</p>
                </div>
              </div>
              <footer>{comparison.note}</footer>
            </article>
          ))}
        </div>
      </section>

      <section className="statement-band">
        <div className="shell evidence-feature">
          <div>
            <p className="eyebrow">审计级组织失败样本</p>
            <h2>系统没进入临床，但失败不能归因于科学基础。</h2>
          </div>
          <div>
            <p>
              MD 安德森癌症中心与 IBM Watson
              项目支出约 6,210 万美元，系统从未进入临床使用。得州大学系统审计指出采购、治理与集成问题，并明确声明结果不应被解读为对系统科学基础或功能能力的评价。
            </p>
            <EvidenceLabel tone="verified">官方审计报告</EvidenceLabel>
          </div>
        </div>
      </section>

      <section className="marketing-section shell">
        <div className="evidence-level-grid">
          <SectionHeading
            eyebrow="内部实验场"
            title="bioby.ai 的数据不享有例外。"
            description="作者自己的公司同样区分自述、已核与待验证结论，不用客户 Logo、证言或模糊背书替代证据。"
          />
          <div className="evidence-levels">
            <article>
              <EvidenceLabel tone="verified">已有记录</EvidenceLabel>
              <h3>组织动作</h3>
              <p>标准装配时间线、岗位构成变化、成功与过渡期质量下滑均有内部记录。</p>
            </article>
            <article>
              <EvidenceLabel tone="reported">未经审计</EvidenceLabel>
              <h3>经营与效果数据</h3>
              <p>营收、客户数量、产能、响应速度与 BUG 率来自公司或创始人口径，尚非第三方审计结果。</p>
            </article>
            <article>
              <EvidenceLabel tone="hypothesis">持续验证</EvidenceLabel>
              <h3>长期结果</h3>
              <p>完整季度时间数据、跨组织复现与文化外溢仍需建立基线并持续观察。</p>
            </article>
          </div>
        </div>
        <TraceNote>
          当前案例库已收录外部、输家、内部与一句话标准样本，但部分对照组仍缺一侧。缺侧结论不会冻结为普遍标准。
        </TraceNote>
      </section>

      <PageCta
        locale={locale}
        title="查看案例所在的完整论证"
        description="案例不是装饰。每一章都会说明它验证了什么、不能验证什么，以及下一步仍缺哪类证据。"
      />
    </>
  );
}
