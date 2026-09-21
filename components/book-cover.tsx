import Image from "next/image";
import Link from "next/link";

export const BOOK_COVER = {
  src: "/covers/regenic-cover.png",
  width: 864,
  height: 1152,
} as const;

type BookCoverProps = {
  locale: string;
  href?: string;
  priority?: boolean;
  size?: "hero" | "index";
};

export function BookCover({
  locale,
  href,
  priority = false,
  size = "index",
}: BookCoverProps) {
  const en = locale === "en";
  const alt = en
    ? "Cover of Rewrite the DNA: How to Build an AI-Native Organization, by Jeson Li"
    : "《重写基因：如何构建AI原生组织》封面，李必琪著";

  const image = (
    <Image
      className="book-cover-image"
      src={BOOK_COVER.src}
      width={BOOK_COVER.width}
      height={BOOK_COVER.height}
      alt={href ? "" : alt}
      priority={priority}
      sizes={
        size === "hero"
          ? "(max-width: 900px) 220px, 300px"
          : "(max-width: 640px) 180px, 240px"
      }
    />
  );

  return (
    <figure className={`book-cover book-cover-${size}`}>
      {href ? (
        <Link href={href} aria-label={alt}>
          {image}
        </Link>
      ) : (
        image
      )}
    </figure>
  );
}
