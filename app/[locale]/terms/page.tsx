import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { TrustPage } from "@/components/trust-page";
import { GITHUB_ISSUES_URL } from "@/lib/community";
import { isPublishedLocale } from "@/lib/i18n/config";
import { createLocalizedMetadata } from "@/lib/i18n/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isPublishedLocale(locale)) return {};
  return createLocalizedMetadata({
    locale,
    title: locale === "en" ? "Terms of Use" : "使用条款",
    description: locale === "en"
      ? "Terms, quotation permissions, and responsibilities for Regenic.ai and Rewrite the DNA."
      : "阅读 Regenic.ai 网站和《重写基因》公开内容时适用的使用边界、引用许可与责任说明。",
    pathname: "/terms",
  });
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isPublishedLocale(locale)) notFound();
  const en = locale === "en";

  return (
    <TrustPage
      locale={locale}
      title={en ? "Terms of Use" : "使用条款"}
      eyebrow={en ? "Trust and boundaries" : "信任与边界"}
      description={en ? "By accessing Regenic.ai, you acknowledge these terms. If you do not agree, stop using the site." : "访问或使用 Regenic.ai 即表示你理解并同意以下条款；如果不同意，请停止使用本站。"}
      publishedAt="2026-07-28"
      path={`/${locale}/terms`}
    >
      <section>
        <h2>{en ? "Free access does not waive rights" : "公开阅读不等于放弃权利"}</h2>
        <p>
          {en ? "Copyright in Rewrite the DNA and the site's original methods, writing, and diagrams belongs to Jeson Li or the relevant rights holder. Free online access transfers no intellectual-property rights." : "《重写基因》及本站原创方法、文字和图示的著作权归李必琪（Jeson Li）或对应权利人所有。本站允许免费在线阅读，但不因此转让任何知识产权。"}
        </p>
        <p>
          {en ? "You may reasonably quote short passages, framework diagrams, and concepts for sharing, teaching, and discussion when you credit the book, author, and original link. Without written permission, you may not reproduce, adapt, translate, scrape and republish the work in bulk, or use it in commercial publishing or paid content products." : "欢迎在注明书名、作者及原始链接的前提下，合理引用金句、框架图和概念术语用于分享、教学与讨论。未经书面许可，不得整体复制、改编、翻译、批量抓取后重新发布，或将本站内容用于商业出版和付费内容产品。"}
        </p>
      </section>
      <section>
        <h2>{en ? "Permitted and prohibited use" : "允许与禁止的使用"}</h2>
        <p>
          {en ? "You may access public pages through ordinary browsers and search engines. You may not bypass security, disrupt operation, attempt unauthorized access, or automate requests that impose unreasonable load." : "你可以通过正常浏览器和搜索引擎访问公开页面，不得绕过安全措施、干扰网站运行、尝试未授权访问，或以造成不合理负载的方式自动请求本站。"}
        </p>
      </section>
      <section>
        <h2>{en ? "Content boundaries" : "内容边界"}</h2>
        <p>
          {en ? "The site provides organizational methods, case analysis, and practical tools, not legal, financial, investment, or other professional advice. Cases identify sources and evidence quality where possible; strategic judgments, author reports, and unverified projections are not promises of results." : "本站内容用于提供组织方法论、案例分析和实践工具，不构成法律、财务、投资或其他专业意见。案例会尽力标明来源和数据成色；战略判断、作者自述与尚待验证的推演不应被理解为结果承诺。"}
        </p>
        <p>
          {en ? "The site is revised as practice evolves. We seek accuracy but do not guarantee completeness, freedom from error, or suitability for your circumstances. You are responsible for your judgment and results." : "网站会随实践继续修订。我们力求准确，但不保证内容始终完整、无误或适合你的具体情境。你应自行判断并对使用结果负责。"}
        </p>
      </section>
      <section>
        <h2>{en ? "Links, changes, and contact" : "链接、变更与联系"}</h2>
        <p>
          {en ? "External links provide context and do not imply control or endorsement. Material changes will be published here with a clear date; we do not backdate revisions." : "外部链接仅为提供上下文，不代表我们控制或认可其全部内容。条款发生实质变化时，我们会在本页发布新版本并明确标示日期，不把内容变动追溯为未发生的更新时间。"}
        </p>
        <p>
          {en ? "For permissions or questions, open a" : "授权申请或条款问题请打开"}
          {" "}
          <a href={GITHUB_ISSUES_URL} rel="noreferrer">
            GitHub Issue
          </a>
          {en ? "." : "。"}
        </p>
      </section>
    </TrustPage>
  );
}
