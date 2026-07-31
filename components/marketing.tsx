import Link from "next/link";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  aside?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  aside,
}: PageHeroProps) {
  return (
    <header className="page-hero shell">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-lede">{description}</p>
      </div>
      {aside ? <aside className="page-hero-aside">{aside}</aside> : null}
    </header>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <header className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </header>
  );
}

export function CapabilityDiagram({ locale = "zh" }: { locale?: string }) {
  const en = locale === "en";
  return (
    <figure className="capability-diagram">
      <div className="capability">
        <span>{en ? "Capability 01" : "能力 01"}</span>
        <strong>{en ? "Shared judgment standards" : "统一判断标准"}</strong>
        <p>
          {en
            ? "Choose among N options using a shared ordering of value."
            : "面对 N 个选项，用共同的价值排序作出取舍。"}
        </p>
      </div>
      <div className="diagram-join" aria-hidden="true">
        ×
      </div>
      <div className="capability">
        <span>{en ? "Capability 02" : "能力 02"}</span>
        <strong>{en ? "Shared context" : "统一上下文"}</strong>
        <p>
          {en
            ? "Give people and AI the same facts, boundaries, priorities, and failure record."
            : "让人和 AI 共享事实、边界、优先级与失败记录。"}
        </p>
      </div>
      <figcaption>
        {en
          ? "Both are necessary: standards without context lose contact with reality; context without standards provides no shared ordering function."
          : "两者缺一不可：只有标准，行动会脱离现场；只有上下文，组织仍没有共同的排序函数。"}
      </figcaption>
    </figure>
  );
}

export function EvidenceLabel({
  tone,
  children,
}: {
  tone: "verified" | "reported" | "hypothesis";
  children: ReactNode;
}) {
  return <span className={`evidence-label ${tone}`}>{children}</span>;
}

export function TraceNote({
  children,
  locale = "zh",
}: {
  children: ReactNode;
  locale?: string;
}) {
  return (
    <aside className="trace-note">
      <p className="eyebrow">
        {locale === "en" ? "Evidence and boundaries" : "证据与边界"}
      </p>
      <p>{children}</p>
    </aside>
  );
}

export function PageCta({
  locale,
  title,
  description,
}: {
  locale: string;
  title?: string;
  description?: string;
}) {
  const en = locale === "en";
  const resolvedTitle =
    title ?? (en ? "Start with the full argument" : "从完整论证开始");
  const resolvedDescription =
    description ??
    (en
      ? "Rewrite the DNA is free to read in full. Read the argument before deciding what belongs in your organization."
      : "《重写基因》全文免费公开。先读原文，再决定哪些方法值得带回你的组织。");
  return (
    <section className="page-cta">
      <div className="shell page-cta-inner">
        <div>
          <p className="eyebrow">{en ? "Open access" : "开放阅读"}</p>
          <h2>{resolvedTitle}</h2>
          <p>{resolvedDescription}</p>
        </div>
        <Link className="button light" href={`/${locale}/book`}>
          {en ? "Read the complete book" : "免费阅读全书"}
        </Link>
      </div>
    </section>
  );
}
