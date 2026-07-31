import Link from "next/link";
import { notFound } from "next/navigation";

import {
  EvidenceLabel,
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
    title: locale === "en" ? "Version history" : "版本记录",
    description: locale === "en"
      ? "Track the relationship, status, and revision rules of the Regenic book and living website."
      : "追踪《重写基因》与 Regenic.ai 的版本关系、当前状态和变更原则。",
    pathname: "/versions",
  });
}

export default async function VersionsPage({
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
          eyebrow="Version history"
          title={<>Publication freezes.<br />The method keeps running.</>}
          description="The book records a complete argument at publication. Regenic.ai continues to absorb cases, field feedback, and revisions while preserving change boundaries."
          aside={<div><EvidenceLabel tone="verified">Current public status</EvidenceLabel><p>English and Chinese living editions</p></div>}
        />
        <section className="version-ledger shell">
          <SectionHeading eyebrow="Latest update" title="English-first open-source edition" description="The complete English reading edition, bilingual routes, open governance, and public quality gates are now part of the repository." />
          <div className="version-entry"><time dateTime="2026-07-30">2026.07.30</time><div><h2>English-first open-source release prepared</h2><p>Added the full English manuscript, retained the Chinese edition, documented the dual-license model, and introduced reproducible security and CI checks.</p></div></div>
          <div className="version-entry"><time dateTime="2026-07-28">2026.07.28</time><div><h2>Chinese public reading edition launched</h2><p>Published the free reading site, methods, evidence labels, tools, and the relationship among the book, Regenic.ai, and bioby.ai.</p></div></div>
        </section>
        <section className="statement-band"><div className="shell change-rules"><SectionHeading eyebrow="Revision discipline" title="What may change—and what must never change silently" /><div><article><span>May update</span><p>Verified cases, missing comparisons, factual corrections, practice results, explanations, and tools.</p></article><article><span>Must disclose</span><p>Definition changes, downgraded claims, corrected data, boundaries, and stop conditions.</p></article><article><span>Never disguise</span><p>Launch dates as content dates, or deleted failures as a clean narrative.</p></article></div></div></section>
        <section className="marketing-section shell"><TraceNote locale={locale}>Material changes to definitions, evidence, or applicability will state what changed and why.</TraceNote><Link className="button primary" href={`/${locale}/book`}>Read Regenic</Link></section>
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="版本记录"
        title={
          <>
            出版会冻结，
            <br />
            方法继续运行。
          </>
        }
        description="《重写基因》记录出版时刻的完整论证；Regenic.ai 继续吸收案例、实践反馈与修订，并保留变更边界。"
        aside={
          <div>
            <EvidenceLabel tone="verified">当前公开状态</EvidenceLabel>
            <p>中文公开阅读版 · 持续更新</p>
          </div>
        }
      />

      <section className="version-ledger shell">
        <SectionHeading
          eyebrow="最近更新"
          title="Regenic.ai 持续运行版"
          description="新增案例、实践反馈和重要修订会在这里公开说明。"
        />
        <div className="version-entry">
          <time dateTime="2026-07-28">2026.07.28</time>
          <div>
            <h2>中文公开阅读版上线</h2>
            <p>
              建立免费阅读站与品牌内容页面，公开双能力模型、清晰术/干扰术、案例证据成色、长期愿景与载体关系。
            </p>
            <ul>
              <li>主书名统一为《重写基因》，英文名 Regenic。</li>
              <li>“最后的稀缺”保留为第二部标题与诊断概念。</li>
              <li>明确《重写基因》、Regenic.ai 与 bioby.ai 的载体分工。</li>
              <li>外溢效应标记为战略推演，未经审计数据保留来源性质。</li>
            </ul>
          </div>
        </div>
        <div className="version-entry">
          <time dateTime="2026-07-27">2026.07.27</time>
          <div>
            <h2>书稿命名与载体关系更新</h2>
            <p>
              主书名统一为《重写基因》，并明确出版读物、持续更新的网站与企业实践之间的关系。
            </p>
          </div>
        </div>
      </section>

      <section className="statement-band">
        <div className="shell change-rules">
          <SectionHeading eyebrow="变更纪律" title="哪些可以更新，哪些不能悄悄改变" />
          <div>
            <article>
              <span>可以更新</span>
              <p>新增已核案例、补齐缺失对照、修正事实错误、公开实践结果、优化解释与工具。</p>
            </article>
            <article>
              <span>必须说明</span>
              <p>核心定义变化、案例结论降级、数据口径修正、适用边界变化与停止条件变化。</p>
            </article>
            <article>
              <span>不会伪装</span>
              <p>不把网站上线日期冒充内容更新时间，不删除失败记录来保持叙事整齐。</p>
            </article>
          </div>
        </div>
      </section>

      <section className="marketing-section shell">
        <div className="source-map">
          <SectionHeading
            eyebrow="公开承诺"
            title="定义、证据与修订都可追溯"
            description="读者看到的是完整内容与必要边界，不展示编辑流程和技术实现细节。"
          />
          <dl>
            <div>
              <dt>完整论证</dt>
              <dd>全书正文免费公开阅读</dd>
            </div>
            <div>
              <dt>概念与结构</dt>
              <dd>以方法论页面和书中定义为准</dd>
            </div>
            <div>
              <dt>案例与证据</dt>
              <dd>明确标注已核事实、公司口径与待验证推演</dd>
            </div>
            <div>
              <dt>组织定义</dt>
              <dd>关键标准公开适用条件、边界和验收方式</dd>
            </div>
          </dl>
        </div>
        <TraceNote>
          重要定义、数据口径或适用边界发生变化时，会说明变化内容与原因；失败记录不会因叙事需要而删除。
        </TraceNote>
        <Link className="button primary" href={`/${locale}/book`}>
          阅读《重写基因》
        </Link>
      </section>
    </>
  );
}
