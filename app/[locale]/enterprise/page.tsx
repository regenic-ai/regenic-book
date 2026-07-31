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
    title: locale === "en" ? "90-day enterprise pilot" : "企业 90 天试点",
    description: locale === "en"
      ? "Identify the limiting resource, encode standards, freeze acceptance criteria, and run one testable cycle."
      : "帮助企业识别限制性资源、提炼标准、冻结验收口径并组织第一轮验证；不替一号位判断，不接管转型。",
    pathname: "/enterprise",
  });
}

const serviceAreas = [
  {
    title: "适用对象",
    items: [
      "已经投入 AI 工具，但组织效率没有出现结构性变化",
      "创始人、CEO 或事业部负责人愿意亲自作为标准第一作者",
      "能选出一个失败可承受、有真实流量、成本可见的业务单元",
      "愿意在启动前冻结基线、停止线与结果披露边界",
    ],
  },
  {
    title: "核心交付物",
    items: [
      "限制性资源与前三类高频判断的一页纸现状图",
      "企业自己写出的八层标准与关键 ROI 卡",
      "核心成员费曼验收记录与产品路径决议",
      "双试点复盘、双侧证据和下一轮标准修订",
    ],
  },
  {
    title: "成功指标",
    items: [
      "八问至少六问通过，并以三名核心成员最差成绩计",
      "前三类高频判断可追溯到明确标准与价值排序",
      "试点结果相对冻结基线可归因、可回滚、可复测",
      "服务结束后，企业能脱离 Regenic 继续运行下一轮",
    ],
  },
] as const;

const serviceAreasEn = [
  { title: "Who it fits", items: ["AI tools are in place but structural efficiency has not changed", "The founder, CEO, or business leader will be the first author of standards", "A real unit can be selected where failure is tolerable and costs are visible", "Baseline, stop conditions, and disclosure boundaries can be frozen before launch"] },
  { title: "Core deliverables", items: ["One-page map of the limiting resource and three recurring judgments", "Your own eight-layer standards and key ROI cards", "Feynman-check records and a product-path decision", "Two pilot reviews, two-sided evidence, and the next standards revision"] },
  { title: "Success criteria", items: ["At least six of eight diagnosis questions pass, using the lowest of three core-member scores", "The three recurring judgments trace to explicit standards and value order", "Pilot outcomes are attributable, reversible, and repeatable against the frozen baseline", "The organization can run the next cycle without Regenic"] },
] as const;

export default async function EnterprisePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isPublishedLocale(locale)) notFound();
  const isEnglish = locale === "en";
  const areas = isEnglish ? serviceAreasEn : serviceAreas;

  return (
    <div className="conversion-page">
      <header className="conversion-hero shell">
        <p className="eyebrow">{isEnglish ? "Enterprise practice · First 90-day cycle" : "企业实践 · 90 天第一轮"}</p>
        <h1>{isEnglish ? "Complete the rewrite without outsourcing the transformation." : "陪你完成重写，不替你把转型外包。"}</h1>
        <p>
          {isEnglish ? "Regenic helps identify the limiting resource, encode standards, freeze acceptance criteria, and organize the first validation cycle. The deliverable is not a report; it is a loop your organization can continue to run." : "Regenic 只帮助四件事：识别限制性资源、提炼标准、冻结验收口径、组织第一轮验证。服务的交付不是报告，而是一套企业自己能继续运行的闭环。"}
        </p>
        <div className="inline-actions">
          <a className="button primary" href={GITHUB_NEW_ISSUE_URL} rel="noreferrer">
            {isEnglish ? "Open a GitHub Issue" : "打开 GitHub Issue"}
          </a>
          <Link className="text-link" href={`/${locale}/tools/90-days`}>
            {isEnglish ? "Review the full roadmap →" : "先看完整路线 →"}
          </Link>
        </div>
      </header>
      <section className="shell conversion-body">
        <div className="service-grid">
          {areas.map((area, index) => (
            <article key={area.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{area.title}</h2>
              <ul>
                {area.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <section className="boundary-note boundary-dark">
          <p className="eyebrow">{isEnglish ? "Service boundaries" : "服务边界"}</p>
          <h2>{isEnglish ? "Three responsibilities stay with the accountable leader." : "有三件事必须由一号位完成。"}</h2>
          <div className="boundary-grid">
            <div>
              <b>{isEnglish ? "No delegated judgment" : "不替判断"}</b>
              <p>{isEnglish ? "Value order and direction cannot be outsourced; Regenic challenges and validates." : "价值排序和方向选择不能委托；Regenic 负责质询与校验。"}</p>
            </div>
            <div>
              <b>{isEnglish ? "No ghostwritten standards" : "不代写标准"}</b>
              <p>{isEnglish ? "We provide structure and feedback, not polished documents detached from operating reality." : "可以提供结构和反馈，不交付一套脱离企业现场的漂亮文档。"}</p>
            </div>
            <div>
              <b>{isEnglish ? "No takeover" : "不接管转型"}</b>
              <p>{isEnglish ? "Ninety days is one cycle, and consultants do not replace organizational muscle." : "不承诺 90 天完成全部，不用顾问团队替代组织肌肉。"}</p>
            </div>
          </div>
        </section>
        <CommunityPanel intent="enterprise" locale={locale} />
      </section>
    </div>
  );
}
