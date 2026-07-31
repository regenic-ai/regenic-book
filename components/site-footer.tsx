import Link from "next/link";

import {
  GITHUB_BOOK_REPO_URL,
  GITHUB_ISSUES_URL,
  GITHUB_PRODUCT_REPO_URL,
} from "@/lib/community";
import type { Locale } from "@/lib/i18n/config";

export function SiteFooter({ locale }: { locale: Locale }) {
  const en = locale === "en";

  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div className="footer-brand">
          <p className="eyebrow">
            {en ? "Organizational intelligence · Living" : "组织智能 · 持续运行"}
          </p>
          <strong className="footer-title">Regenic.ai</strong>
          <div className="footer-company">
            <span>
              {en ? "The methodology's first operating company" : "方法的第一个实践公司"}
            </span>
            <a href={`https://www.bioby.ai/${locale}`} rel="noreferrer">
              <strong>bioby.ai</strong>
              <small>{en ? "Company and products ↗" : "了解公司与产品 ↗"}</small>
            </a>
            <p>
              {en
                ? "Connecting brands with global creators through real collaboration data, with AI improving matching and execution while people own critical judgment and quality."
                : "以真实创作者合作数据连接品牌与全球达人，AI 提升匹配和执行效率，人工守住关键判断与质量边界。"}
            </p>
          </div>
        </div>
        <nav
          className="footer-links"
          aria-label={en ? "Footer navigation" : "页脚导航"}
        >
          <div>
            <strong>Regenic</strong>
            <Link href={`/${locale}/book`}>{en ? "Read free" : "免费阅读"}</Link>
            <Link href={`/${locale}/method`}>{en ? "Method" : "方法论"}</Link>
            <Link href={`/${locale}/product`}>{en ? "Product" : "产品"}</Link>
            <Link href={`/${locale}/cases`}>{en ? "Cases and evidence" : "案例与证据"}</Link>
            <Link href={`/${locale}/standards`}>{en ? "Standards" : "标准"}</Link>
            <Link href={`/${locale}/research`}>{en ? "Research" : "研究"}</Link>
            <Link href={`/${locale}/enterprise`}>{en ? "Enterprise" : "企业实践"}</Link>
            <Link href={`/${locale}/investors`}>{en ? "Investors" : "投资人"}</Link>
          </div>
          <div>
            <strong>{en ? "Open source" : "开源"}</strong>
            <a href={GITHUB_PRODUCT_REPO_URL} rel="noreferrer">
              {en ? "Regenic (product)" : "Regenic 产品"}
            </a>
            <a href={GITHUB_BOOK_REPO_URL} rel="noreferrer">
              {en ? "Regenic Book (site)" : "Regenic Book（本站）"}
            </a>
            <a href={GITHUB_ISSUES_URL} rel="noreferrer">
              {en ? "Book/site Issues" : "书稿与网站 Issues"}
            </a>
          </div>
          <div>
            <strong>{en ? "Company" : "公司"}</strong>
            <Link href={`/${locale}/about`}>{en ? "About the author" : "关于作者"}</Link>
            <a href={`https://www.bioby.ai/${locale}`} rel="noreferrer">
              bioby.ai
            </a>
          </div>
        </nav>
        <div className="fine-print">
          <span>
            {en
              ? "© 2026 Bioby AI Technology · All rights reserved"
              : "© 2026 Bioby AI Technology · 保留所有权利"}
          </span>
          <div className="footer-legal">
            <Link href={`/${locale}/privacy`}>{en ? "Privacy" : "隐私"}</Link>
            <Link href={`/${locale}/terms`}>{en ? "Terms" : "条款"}</Link>
            <Link href={`/${locale}/ai-transparency`}>
              {en ? "AI transparency" : "AI 透明度"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
