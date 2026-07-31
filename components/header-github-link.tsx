import { GithubIcon } from "@/components/github-icon";
import { GITHUB_PRODUCT_REPO_URL } from "@/lib/community";
import { formatStarCount } from "@/lib/github-stars";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

type HeaderGithubLinkProps = {
  locale: Locale;
  stars: number | null;
  className?: string;
};

export function HeaderGithubLink({
  locale,
  stars,
  className,
}: HeaderGithubLinkProps) {
  const dictionary = getDictionary(locale);
  const countLabel =
    stars !== null && stars > 0 ? formatStarCount(stars) : null;
  const ariaLabel =
    countLabel === null
      ? dictionary.nav.githubStar
      : dictionary.nav.githubStarWithCount.replace("{count}", countLabel);

  return (
    <a
      className={["header-github", className].filter(Boolean).join(" ")}
      href={GITHUB_PRODUCT_REPO_URL}
      rel="noreferrer"
      target="_blank"
      aria-label={ariaLabel}
    >
      <GithubIcon className="header-github-mark" />
      <span className="header-github-label">{dictionary.nav.githubStarLabel}</span>
      {countLabel ? (
        <span className="header-github-count" aria-hidden="true">
          {countLabel}
        </span>
      ) : null}
    </a>
  );
}
