import {
  generateCollectionMetadata,
  generateCollectionStaticParams,
  renderCollectionPage,
} from "@/lib/content/collection-pages";

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  return generateCollectionMetadata("standards", props);
}

export function generateStaticParams() {
  return generateCollectionStaticParams("standards");
}

export default function StandardsIndexPage(props: {
  params: Promise<{ locale: string }>;
}) {
  return renderCollectionPage("standards", props);
}
