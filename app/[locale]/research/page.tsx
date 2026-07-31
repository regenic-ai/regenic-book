import {
  generateCollectionMetadata,
  generateCollectionStaticParams,
  renderCollectionPage,
} from "@/lib/content/collection-pages";

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  return generateCollectionMetadata("research", props);
}

export function generateStaticParams() {
  return generateCollectionStaticParams("research");
}

export default function ResearchIndexPage(props: {
  params: Promise<{ locale: string }>;
}) {
  return renderCollectionPage("research", props);
}
