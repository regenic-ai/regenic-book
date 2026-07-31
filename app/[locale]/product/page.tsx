import { notFound } from "next/navigation";

import { PageHero } from "@/components/marketing";
import { ProductPanel } from "@/components/product-panel";
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
              Not more control
              <br />
              on fragmented context.
            </>
          ) : (
            <>
              不是用更多控制
              <br />
              修补分裂的上下文。
            </>
          )
        }
        description={
          en
            ? "Legacy organizations run on hierarchy, approvals, and privately held information. Regenic encodes judgment as shared standards and shared context that humans and agents use together."
            : "旧组织靠层级、审批和各自囤积的信息运转。Regenic 把判断固化为共享标准与统一上下文，让人与 Agent 在同一套依据上行动。"
        }
        aside={
          <div>
            <p>{en ? "Current stage" : "当前阶段"}</p>
            <strong>{en ? "Architecture RFCs · Phase 0" : "架构 RFC · Phase 0"}</strong>
          </div>
        }
      />
      <ProductPanel locale={locale} variant="full" />
    </>
  );
}
