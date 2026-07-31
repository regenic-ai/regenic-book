import {
  generateDocMetadata,
  generateDocStaticParams,
  renderDocPage,
} from "@/lib/content/doc-page";

export async function generateMetadata(props: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  return generateDocMetadata("standards", props);
}

export function generateStaticParams() {
  return generateDocStaticParams("standards");
}

export default function StandardsDocPage(props: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  return renderDocPage("standards", props);
}
