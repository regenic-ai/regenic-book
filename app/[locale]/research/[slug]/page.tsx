import {
  generateDocMetadata,
  generateDocStaticParams,
  renderDocPage,
} from "@/lib/content/doc-page";

export async function generateMetadata(props: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  return generateDocMetadata("research", props);
}

export function generateStaticParams() {
  return generateDocStaticParams("research");
}

export default function ResearchDocPage(props: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  return renderDocPage("research", props);
}
