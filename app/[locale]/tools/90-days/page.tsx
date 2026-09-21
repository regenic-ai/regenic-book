import Link from "next/link";
import { notFound } from "next/navigation";

import { NinetyDayRoadmap } from "@/components/conversion/ninety-day-roadmap";
import { isPublishedLocale } from "@/lib/i18n/config";
import { createLocalizedMetadata } from "@/lib/i18n/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isPublishedLocale(locale)) return {};
  return createLocalizedMetadata({
    locale,
    title: locale === "en" ? "The first 90-day evolution cycle" : "90 天第一轮组织进化",
    description: locale === "en"
      ? "A thirteen-week sequence from clarity audit through standards, consensus, and two pilots."
      : "四段十三周：清晰术审计、启动标准循环、建立共识、完成双试点，用可复测结果结束第一轮组织基因进化。",
    pathname: "/tools/90-days",
  });
}

export default async function NinetyDaysPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isPublishedLocale(locale)) notFound();
  const isEnglish = locale === "en";

  return (
    <div className="conversion-page">
      <header className="conversion-hero shell">
        <p className="eyebrow">{isEnglish ? "90-day roadmap · Four phases, thirteen weeks" : "90 天路线 · 四段十三周"}</p>
        <h1>{isEnglish ? "Set standards, build consensus, and redesign one real execution unit." : "立标准，建共识，坍缩一个真实执行单元。"}</h1>
        <p>
          {isEnglish ? "Ninety days does not promise a complete transformation. It completes one cycle: standards for recurring judgments, shared language among core members, and at least one redesigned unit with evidence from both success and failure." : "90 天不承诺完成全部转型。它只承诺完成第一轮：最高频的判断有了标准，核心成员开始使用同一种语言，至少一个执行单元完成改造并留下双侧证据。"}
        </p>
        <div className="inline-actions">
          <Link className="button primary" href={`/${locale}/tools/diagnosis`}>
            {isEnglish ? "Start with the diagnosis" : "先做八问诊断"}
          </Link>
            <Link className="text-link" href={`/${locale}/book/14-ninety-days`}>
            {isEnglish ? "Read the complete argument →" : "阅读完整论证 →"}
          </Link>
        </div>
      </header>
      <section className="shell conversion-body">
        <div className="scope-strip">
          <div>
            <b>{isEnglish ? "Designed scope" : "适用范围"}</b>
            <p>
              {isEnglish ? "Designed for up to 20 core members. The accountable leader must personally run the Feynman checks." : "按核心成员 20 人以内设计。一号位须能亲自完成核心成员费曼验收。"}
            </p>
          </div>
          <div>
            <b>{isEnglish ? "Larger organizations" : "更大组织"}</b>
            <p>
              {isEnglish ? "Keep the sequence and reduce the scope: choose one division or independent business unit." : "不改路线，改范围：选择一个事业部或独立业务单元走完十三周。"}
            </p>
          </div>
          <div>
            <b>{isEnglish ? "Prerequisite" : "启动前提"}</b>
            <p>
              {isEnglish ? "The accountable leader must reserve two to three hours a day. If the calendar has no room, do not start." : "一号位每天至少投入两至三小时；日历腾不出空间，就先不要启动。"}
            </p>
          </div>
        </div>
        <NinetyDayRoadmap locale={locale} />
        <section className="boundary-note">
          <p className="eyebrow">{isEnglish ? "Three boundaries" : "三条边界"}</p>
          <h2>{isEnglish ? "The first cycle is not the whole transformation, and a roadmap is not a guarantee." : "第一轮不是全部，路线图不是结果保证。"}</h2>
          <ul>
            {isEnglish ? <>
              <li>Most organizations need three to five cycles before new defaults stabilize.</li>
              <li>Every pilot freezes stop conditions before launch; failures and successes both enter the standards library.</li>
              <li>Evidence comes mainly from early-stage companies and mechanism comparisons, not thousand-person stress tests.</li>
            </> : <>
              <li>多数组织需要三至五轮，才能让新基因稳定表达。</li>
              <li>每个试点启动前必须冻结停止线，失败与成功同样进入标准库。</li>
              <li>样本主要来自早期公司和机制对照，尚未经过千人规模压力测试。</li>
            </>}
          </ul>
        </section>
      </section>
    </div>
  );
}
