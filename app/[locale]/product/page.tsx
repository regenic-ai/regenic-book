import { notFound } from "next/navigation";

import { PageHero } from "@/components/marketing";
import { ProductPanel } from "@/components/product-panel";
import { GITHUB_PRODUCT_REPO_URL } from "@/lib/community";
import { isPublishedLocale } from "@/lib/i18n/config";
import { createLocalizedMetadata } from "@/lib/i18n/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isPublishedLocale(locale)) return {};
  return createLocalizedMetadata({
    locale,
    title: locale === "en" ? "Product" : "产品",
    description:
      locale === "en"
        ? "Regenic — open-source org-management software for AI-native organizations. Unified judgment standards and shared context."
        : "Regenic — AI 原生组织的开源管理软件。统一判断标准 × 统一上下文。",
    pathname: "/product",
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isPublishedLocale(locale)) notFound();
  const en = locale === "en";

  return (
    <>
      <PageHero
        eyebrow={en ? "Regenic product" : "Regenic 产品"}
        title={
          en ? (
            <>
              Not bolt-on AI
              <br />
              on legacy ERP.
            </>
          ) : (
            <>
              不是在旧 ERP 上
              <br />
              堆 AI 插件。
            </>
          )
        }
        description={
          en
            ? "Regenic is the open product that implements the method: help organizations encode judgment as shared standards and context that humans and agents use together."
            : "Regenic 是把方法论落地的开源产品：帮助组织把判断固化为共享标准与上下文，供人与 Agent 共同使用。"
        }
        aside={
          <div>
            <p>{en ? "Source" : "源码"}</p>
            <a className="text-link" href={GITHUB_PRODUCT_REPO_URL} rel="noreferrer">
              github.com/regenic-ai/regenic
            </a>
          </div>
        }
      />
      <ProductPanel locale={locale} variant="full" />
    </>
  );
}
