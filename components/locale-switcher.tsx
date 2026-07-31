"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { PublishedLocale } from "@/lib/i18n/config";
import {
  localeCookieName,
  localeToHrefLang,
  swapLocalePath,
} from "@/lib/i18n/routing";

type LocaleSwitcherProps = {
  locale: PublishedLocale;
  groupLabel: string;
  className?: string;
};

const localeOptions = [
  { code: "zh" as const, label: "中文", hint: "简体中文" },
  { code: "en" as const, label: "English", hint: "English" },
] as const;

function GlobeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M4 12h16M12 3.5c2.2 2.6 3.5 5.8 3.5 8.5s-1.3 5.9-3.5 8.5M12 3.5C9.8 6.1 8.5 9.3 8.5 12s1.3 5.9 3.5 8.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path
        d="m7 10 5 5 5-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path
        d="m7.5 12.5 2.5 2.5 6.5-6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function persistLocale(locale: PublishedLocale) {
  document.cookie = `${localeCookieName}=${locale};path=/;max-age=31536000;samesite=lax`;
}

export function LocaleSwitcher({
  locale,
  groupLabel,
  className,
}: LocaleSwitcherProps) {
  const pathname = usePathname();
  const current = localeOptions.find((option) => option.code === locale)!;

  return (
    <details
      className={
        className ? `locale-dropdown ${className}` : "locale-dropdown"
      }
    >
      <summary aria-label={groupLabel} className="locale-dropdown-trigger">
        <span className="locale-dropdown-icon" aria-hidden="true">
          <GlobeIcon />
        </span>
        <span className="locale-dropdown-label">{current.label}</span>
        <span className="locale-dropdown-chevron" aria-hidden="true">
          <ChevronIcon />
        </span>
      </summary>

      <div className="locale-dropdown-menu" role="menu" aria-label={groupLabel}>
        {localeOptions.map((option) => {
          const isActive = locale === option.code;
          const href = swapLocalePath(pathname, option.code);

          if (isActive) {
            return (
              <span
                key={option.code}
                className="locale-dropdown-option is-active"
                role="menuitem"
                aria-current="true"
              >
                <span className="locale-dropdown-option-copy">
                  <strong>{option.label}</strong>
                  <small>{option.hint}</small>
                </span>
                <span className="locale-dropdown-check" aria-hidden="true">
                  <CheckIcon />
                </span>
              </span>
            );
          }

          return (
            <Link
              key={option.code}
              className="locale-dropdown-option"
              href={href}
              hrefLang={localeToHrefLang(option.code)}
              lang={localeToHrefLang(option.code)}
              role="menuitem"
              onClick={() => persistLocale(option.code)}
            >
              <span className="locale-dropdown-option-copy">
                <strong>{option.label}</strong>
                <small>{option.hint}</small>
              </span>
            </Link>
          );
        })}
      </div>
    </details>
  );
}
