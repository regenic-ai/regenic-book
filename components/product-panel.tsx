import Link from "next/link";

import { TraceNote } from "@/components/marketing";
import {
  GITHUB_BOOK_REPO_URL,
  GITHUB_PRODUCT_REPO_URL,
  GITHUB_PRODUCT_ROADMAP_URL,
} from "@/lib/community";
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
                ? "The book explains the method. Regenic implements it: unified judgment standards and shared context that humans and agents operate from together—not another chat layer on legacy ERP."
                : "书讲方法，Regenic 做产品：统一判断标准与统一上下文，让人与 Agent 在同一套依据上协作——不是在旧系统上再堆一个聊天框。"}
            </p>
            <div className="hero-actions">
              <a
                className="button primary"
                href={GITHUB_PRODUCT_REPO_URL}
                rel="noreferrer"
              >
                {en ? "View Regenic on GitHub" : "在 GitHub 查看 Regenic 产品"}
              </a>
              <Link className="text-link" href={`/${locale}/product`}>
                {en ? "Product overview and roadmap →" : "产品说明与路线图 →"}
              </Link>
            </div>
          </div>
          <div className="lab-ledger">
            <div>
              <strong>{en ? "Open now" : "现已开源"}</strong>
              <span>
                <a href={GITHUB_PRODUCT_REPO_URL} rel="noreferrer">
                  regenic-ai/regenic
                </a>
              </span>
            </div>
            <div>
              <strong>{en ? "Method and site" : "书稿与网站"}</strong>
              <span>
                <a href={GITHUB_BOOK_REPO_URL} rel="noreferrer">
                  regenic-ai/regenic-book
                </a>
              </span>
            </div>
            <div>
              <strong>{en ? "Status" : "当前阶段"}</strong>
              <span>{en ? "Architecture RFCs (Phase 0)" : "架构 RFC（Phase 0）"}</span>
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
              ? "Regenic turns the method in Rewrite the DNA into software. Two capabilities, one product, one GitHub repository named after the brand."
              : "Regenic 把《重写基因》里的方法落成软件。两种能力、一个产品、一个与品牌同名的 GitHub 仓库。"}
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

      <section className="statement-band">
        <div className="shell">
          <header className="section-heading">
            <p className="eyebrow">{en ? "Open-source layout" : "开源布局"}</p>
            <h2>{en ? "One brand, two repositories" : "一个品牌，两个仓库"}</h2>
          </header>
          <div className="platform-relation">
            <div>
              <article>
                <span>{en ? "Product" : "产品"}</span>
                <h3>regenic-ai/regenic</h3>
                <p>
                  {en
                    ? "The Regenic application. MIT license. Product issues and RFCs live here."
                    : "Regenic 应用本体。MIT 许可。产品 Issue 与 RFC 在此仓库。"}
                </p>
                <a className="text-link" href={GITHUB_PRODUCT_REPO_URL} rel="noreferrer">
                  {en ? "Open repository ↗" : "打开仓库 ↗"}
                </a>
              </article>
              <article>
                <span>{en ? "Book and website" : "书稿与网站"}</span>
                <h3>regenic-ai/regenic-book</h3>
                <p>
                  {en
                    ? "This site, the manuscripts, and public methodology. Deploys to regenic.ai."
                    : "本网站、书稿与公开方法论。部署到 regenic.ai。"}
                </p>
                <a className="text-link" href={GITHUB_BOOK_REPO_URL} rel="noreferrer">
                  {en ? "Open repository ↗" : "打开仓库 ↗"}
                </a>
              </article>
            </div>
          </div>
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
        <TraceNote locale={locale}>
          {en ? (
            <>
              Full roadmap:{" "}
              <a href={GITHUB_PRODUCT_ROADMAP_URL} rel="noreferrer">
                github.com/regenic-ai/regenic
              </a>
            </>
          ) : (
            <>
              完整路线图见{" "}
              <a href={GITHUB_PRODUCT_ROADMAP_URL} rel="noreferrer">
                github.com/regenic-ai/regenic
              </a>
            </>
          )}
        </TraceNote>
      </section>
    </>
  );
}
