import Link from "next/link";

import { getDictionary } from "@/lib/i18n/dictionaries";

export default function NotFound() {
  const en = getDictionary("en");
  const zh = getDictionary("zh");

  return (
    <div className="shell trust-page">
      <header className="trust-header">
        <p className="eyebrow">{en.notFound.eyebrow}</p>
        <h1>{en.notFound.title}</h1>
        <p>{en.notFound.description}</p>
      </header>
      <div className="inline-actions">
        <Link className="button primary" href="/en">
          {en.notFound.homeEn}
        </Link>
        <Link className="button" href="/zh">
          {zh.notFound.homeZh}
        </Link>
      </div>
    </div>
  );
}
