import type { ReactNode } from "react";
import Link from "next/link";

import { breadcrumbJsonLd } from "@/lib/seo";

import { JsonLd } from "./json-ld";

type TrustPageProps = {
  locale: string;
  title: string;
  eyebrow: string;
  description: string;
  publishedAt: string;
  path: string;
  children: ReactNode;
};

export function TrustPage({
  locale,
  title,
  eyebrow,
  description,
  publishedAt,
  path,
  children,
}: TrustPageProps) {
  const en = locale === "en";
  const trustLinks = [
    { slug: "privacy", label: en ? "Privacy Policy" : "隐私政策" },
    { slug: "terms", label: en ? "Terms of Use" : "使用条款" },
    {
      slug: "tracking",
      label: en ? "Cookies and Tracking" : "Cookie 与追踪说明",
    },
    {
      slug: "ai-transparency",
      label: en ? "AI Transparency" : "AI 透明度说明",
    },
  ];
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: en ? "Home" : "首页", path: `/${locale}` },
          { name: title, path },
        ])}
      />
      <article className="shell trust-page">
        <nav
          className="reader-breadcrumb"
          aria-label={en ? "Breadcrumb" : "面包屑"}
        >
          <Link href={`/${locale}`}>{en ? "Home" : "首页"}</Link>
          <span aria-hidden="true">/</span>
          <span>{title}</span>
        </nav>
        <header className="trust-header">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{description}</p>
          <small>
            {en ? "Published: " : "发布日期："}
            {publishedAt}
          </small>
        </header>
        <div className="trust-content">{children}</div>
        <nav
          className="trust-nav"
          aria-label={en ? "Trust and policy pages" : "信任与政策页面"}
        >
          {trustLinks.map((link) => (
            <Link key={link.slug} href={`/${locale}/${link.slug}`}>
              {link.label}
            </Link>
          ))}
        </nav>
      </article>
    </>
  );
}
