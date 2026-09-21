import { notFound } from "next/navigation";

import { DiagnosisChecklist } from "@/components/conversion/diagnosis-checklist";
import { isPublishedLocale } from "@/lib/i18n/config";
import { createLocalizedMetadata } from "@/lib/i18n/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isPublishedLocale(locale)) return {};
  return createLocalizedMetadata({
    locale,
    title: locale === "en" ? "Eight-question organization diagnosis" : "八问组织诊断",
    description: locale === "en"
      ? "Test standards, value judgments, consensus, and learning through eight observable questions."
      : "不用工具清单验收 AI 原生转型：用八个可观察问题检查标准、价值判断、共识与学习闭环。",
    pathname: "/tools/diagnosis",
  });
}

export default async function DiagnosisPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string | string[] }>;
}) {
  const [{ locale }, query] = await Promise.all([params, searchParams]);
  if (!isPublishedLocale(locale)) notFound();
  const isEnglish = locale === "en";

  const rawAnswers = query.q
    ? Array.isArray(query.q)
      ? query.q
      : [query.q]
    : [];
  const selected = new Set(
    rawAnswers
      .map(Number)
      .filter((value) => Number.isInteger(value) && value >= 1 && value <= 8),
  );

  return (
    <div className="conversion-page">
      <header className="conversion-hero shell">
        <p className="eyebrow">{isEnglish ? "Eight-question diagnosis · Chapter 14" : "八问诊断 · 第 14 章"}</p>
        <h1>{isEnglish ? "Do not count tools. Test whether the organization can judge." : "别数买了多少工具，检查组织会不会自己判断。"}</h1>
        <p>
          {isEnglish ? "These questions test judgment and action when nobody is watching—not stated knowledge. No personal information is required, and answers are not sent to analytics." : "八问检验的不是认知，而是没人监督时仍会发生的判断与行动。全程无需留下个人信息，答案也不会发送到分析平台。"}
        </p>
      </header>
      <section className="shell conversion-body">
        <DiagnosisChecklist
          locale={locale}
          selected={selected}
          submitted={Boolean(query.q)}
        />
        <aside className="boundary-note">
          <p className="eyebrow">{isEnglish ? "Measurement discipline" : "测量纪律"}</p>
          <h2>{isEnglish ? "The same person cannot write the test and supply every answer." : "考卷和答案不能交给同一个人。"}</h2>
          <p>
            {isEnglish ? "The accountable leader asks others, not themselves. Sample three core members and use the lowest score; evaluate question eight only during a real conflict, using the first response." : "八问由一号位问别人，不许问自己。随机抽三名核心成员，取最差成绩；第八问必须等真实冲突现场，用第一反应验收。"}
          </p>
        </aside>
      </section>
    </div>
  );
}
