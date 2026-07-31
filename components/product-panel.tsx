import Link from "next/link";

import { getProductPhases } from "@/lib/product-content";

type ProductPanelProps = {
  locale: string;
  variant?: "spotlight" | "full";
};

export function ProductPanel({ locale, variant = "spotlight" }: ProductPanelProps) {
  const en = locale === "en";
  const phases = getProductPhases(locale);

  if (variant === "spotlight") {
    return (
      <section className="marketing-section shell" id="product">
        <div className="lab-grid">
          <div>
            <p className="eyebrow">{en ? "Regenic product" : "Regenic 产品"}</p>
            <h2>
              {en
                ? "The default org-management software for AI-native organizations."
                : "AI 原生组织的默认管理软件。"}
            </h2>
            <p>
              {en
                ? "The book explains the method. Regenic implements it: unified judgment standards and shared context—so organizations stop paying for fragmented context with more hierarchy and control."
                : "书讲方法，Regenic 做产品：统一判断标准与统一上下文，让组织不再用更多层级和控制，去弥补分裂的上下文。"}
            </p>
            <div className="hero-actions">
              <Link className="button primary" href={`/${locale}/product`}>
                {en ? "Product overview and roadmap" : "产品说明与路线图"}
              </Link>
              <Link className="text-link" href={`/${locale}/method`}>
                {en ? "Explore the method →" : "查看方法论 →"}
              </Link>
            </div>
          </div>
          <div className="lab-ledger">
            <div>
              <strong>{en ? "Status" : "当前阶段"}</strong>
              <span>{en ? "Architecture RFCs (Phase 0)" : "架构 RFC（Phase 0）"}</span>
            </div>
            <div>
              <strong>{en ? "License" : "许可"}</strong>
              <span>MIT</span>
            </div>
            <div>
              <strong>{en ? "Focus" : "当前焦点"}</strong>
              <span>
                {en
                  ? "Standards and shared context"
                  : "判断标准与统一上下文"}
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="marketing-section shell">
        <header className="section-heading">
          <p className="eyebrow">{en ? "Dual-capability model" : "双能力模型"}</p>
          <h2>{en ? "What Regenic builds" : "Regenic 构建什么"}</h2>
          <p>
            {en
              ? "Regenic turns the method in Rewrite the DNA into software: two capabilities, one product surface for humans and agents."
              : "Regenic 把《重写基因》里的方法落成软件：两种能力、一个供人与 Agent 共用的产品界面。"}
          </p>
        </header>
        <div className="method-pair">
          <article>
            <span>{en ? "Capability 01" : "能力 01"}</span>
            <h3>{en ? "Unified judgment standards" : "统一判断标准"}</h3>
            <p>
              {en
                ? "Encode, version, apply, and revise the standards humans and agents share."
                : "编码、发布、应用与修订人与 Agent 共用的判断标准。"}
            </p>
          </article>
          <article>
            <span>{en ? "Capability 02" : "能力 02"}</span>
            <h3>{en ? "Shared context" : "统一上下文"}</h3>
            <p>
              {en
                ? "One organizational context layer with provenance—not another team chat export."
                : "带来源的组织级上下文层——不是又一个团队聊天导出。"}
            </p>
          </article>
        </div>
      </section>

      <section className="marketing-section shell">
        <header className="section-heading">
          <p className="eyebrow">{en ? "Roadmap" : "路线图"}</p>
          <h2>{en ? "Ship in layers, not in a big bang" : "分层交付，不搞大爆炸"}</h2>
          <p>
            {en
              ? "Each phase must be usable before the next begins—the same gate described in the book."
              : "每一层必须先能独立使用，再进入下一层——与书里的渐进式迭代闸门一致。"}
          </p>
        </header>
        <ol className="horizon-grid product-roadmap">
          {phases.map((phase) => (
            <li key={phase.id}>
              <span>{phase.label}</span>
              <strong>{phase.title}</strong>
              <p>{phase.summary}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
