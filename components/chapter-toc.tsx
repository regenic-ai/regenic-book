import type { ChapterHeading } from "@/lib/content/types";

function TocLinks({ headings }: { headings: ChapterHeading[] }) {
  return (
    <ol>
      {headings.map((heading) => (
        <li className={`toc-depth-${heading.depth}`} key={heading.id}>
          <a href={`#${heading.id}`}>{heading.text}</a>
        </li>
      ))}
    </ol>
  );
}

export function ChapterToc({
  headings,
  locale,
}: {
  headings: ChapterHeading[];
  locale: string;
}) {
  if (headings.length === 0) return null;
  const isEnglish = locale === "en";

  return (
    <>
      <aside className="chapter-toc desktop-toc" aria-label={isEnglish ? "Chapter contents" : "本章目录"}>
        <p className="eyebrow">{isEnglish ? "Chapter contents" : "本章目录"}</p>
        <TocLinks headings={headings} />
      </aside>
      <details className="mobile-toc">
        <summary>{isEnglish ? "Chapter contents" : "本章目录"} · {headings.length} {isEnglish ? "sections" : "节"}</summary>
        <TocLinks headings={headings} />
      </details>
    </>
  );
}
