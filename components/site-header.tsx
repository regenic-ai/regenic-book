import Image from "next/image";
import Link from "next/link";

import { HeaderGithubLink } from "@/components/header-github-link";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { getGithubRepoStars } from "@/lib/github-stars";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

export async function SiteHeader({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const stars = await getGithubRepoStars("regenic-ai/regenic");
  const links = [
    { href: `/${locale}/book`, label: dictionary.nav.book },
    { href: `/${locale}/method`, label: dictionary.nav.method },
    { href: `/${locale}/product`, label: dictionary.nav.product },
    { href: `/${locale}/enterprise`, label: dictionary.nav.enterprise },
    { href: `/${locale}/about`, label: dictionary.nav.about },
  ];

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href={`/${locale}`}>
          <Image
            className="brand-mark"
            src="/brand/bioby-mark-white-background.svg"
            width={36}
            height={36}
            alt=""
            priority
          />
          <span>
            <strong>{dictionary.brand}</strong>
            <small>{dictionary.tagline}</small>
          </span>
        </Link>

        <div className="header-end">
          <nav className="desktop-nav" aria-label={dictionary.nav.ariaMain}>
            {links.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <LocaleSwitcher
              groupLabel={dictionary.languageGroupAria}
              locale={locale}
            />
            <HeaderGithubLink locale={locale} stars={stars} />
          </div>
        </div>

        <div className="header-mobile-tools">
          <HeaderGithubLink
            className="header-github-compact"
            locale={locale}
            stars={stars}
          />
          <details className="mobile-nav">
            <summary>{dictionary.nav.menu}</summary>
            <nav aria-label={dictionary.nav.ariaMobile}>
              {links.map((link) => (
                <Link href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
              <LocaleSwitcher
                className="locale-switcher-mobile"
                groupLabel={dictionary.languageGroupAria}
                locale={locale}
              />
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
