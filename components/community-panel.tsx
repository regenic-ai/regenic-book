import {
  CONTRIBUTING_URL,
  GITHUB_DISCUSSIONS_URL,
  GITHUB_ISSUES_URL,
  GITHUB_NEW_ISSUE_URL,
  GITHUB_SECURITY_URL,
} from "@/lib/community";
import type { PublishedLocale } from "@/lib/i18n/config";

type CommunityPanelProps = {
  locale: PublishedLocale;
  intent?: "enterprise" | "investors" | "general";
};

type CommunityChannel = {
  id: string;
  title: string;
  description: string;
  href: string;
  action: string;
  external?: boolean;
};

function IssueIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="2.5" fill="currentColor" />
    </svg>
  );
}

function DiscussionIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v6A2.5 2.5 0 0 1 17.5 15H9l-4.5 3.5V15H6.5A2.5 2.5 0 0 1 4 12.5v-6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ContributingIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 4.5h10A1.5 1.5 0 0 1 18.5 6v12A1.5 1.5 0 0 1 17 19.5H7A1.5 1.5 0 0 1 5.5 18V6A1.5 1.5 0 0 1 7 4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M9 9h6M9 12.5h6M9 16h4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SecurityIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3.5 18 6v5.8c0 3.6-2.4 6.9-6 8.2-3.6-1.3-6-4.6-6-8.2V6l6-2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="m9.5 12 1.8 1.8L15 10.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const channelIcons = {
  issues: IssueIcon,
  discussions: DiscussionIcon,
  contributing: ContributingIcon,
  security: SecurityIcon,
} as const;

function getChannels(
  locale: PublishedLocale,
  intent: NonNullable<CommunityPanelProps["intent"]>,
): CommunityChannel[] {
  const en = locale === "en";

  const issueDescription =
    intent === "enterprise"
      ? en
        ? "Pilot questions, methodology gaps, and implementation feedback. Browse existing threads before opening a duplicate."
        : "试点问题、方法缺口与实施反馈。开新 Issue 前可先浏览已有讨论，避免重复。"
      : intent === "investors"
        ? en
          ? "Thesis questions, evidence gaps, and collaboration ideas. This is a public channel, not a solicitation."
          : "论点、证据缺口与协作设想。这是公开讨论通道，不是募资邀约。"
        : en
          ? "Bug reports, content corrections, and feature ideas belong in tracked Issues."
          : "缺陷报告、内容勘误与功能建议请走 Issue，便于追踪与协作。";

  return [
    {
      id: "issues",
      title: en ? "GitHub Issues" : "GitHub Issues",
      description: issueDescription,
      href: GITHUB_NEW_ISSUE_URL,
      action: en ? "Open a GitHub Issue" : "打开 GitHub Issue",
      external: true,
    },
    {
      id: "discussions",
      title: en ? "Discussions" : "讨论区",
      description: en
        ? "Open-ended questions, methodology debates, and ideas that do not need a formal ticket yet."
        : "开放式问题、方法论讨论与尚未需要正式工单的想法。",
      href: GITHUB_DISCUSSIONS_URL,
      action: en ? "Join discussions" : "进入讨论区",
      external: true,
    },
    {
      id: "contributing",
      title: en ? "Contributing" : "贡献指南",
      description: en
        ? "License boundaries, pull request workflow, and how to propose content or code changes."
        : "许可边界、Pull Request 流程，以及如何提交内容与代码改动。",
      href: CONTRIBUTING_URL,
      action: en ? "Read the guide" : "阅读贡献指南",
      external: true,
    },
    {
      id: "security",
      title: en ? "Security" : "安全报告",
      description: en
        ? "Report vulnerabilities privately through GitHub Security Advisories instead of public Issues."
        : "请通过 GitHub Security Advisories 私下报告漏洞，不要公开开 Issue。",
      href: GITHUB_SECURITY_URL,
      action: en ? "Report privately" : "私下报告漏洞",
      external: true,
    },
  ];
}

function getIntro(
  locale: PublishedLocale,
  intent: NonNullable<CommunityPanelProps["intent"]>,
) {
  const en = locale === "en";

  if (intent === "enterprise") {
    return {
      eyebrow: en ? "Open collaboration" : "开源协作",
      title: en ? "Continue in the public repository" : "在公开仓库继续沟通",
      description: en
        ? "Regenic no longer collects contact forms. Continue book, site, and product feedback through the public GitHub channels below."
        : "Regenic 已不再收集联系表单。书稿、网站与产品反馈请通过下方公开 GitHub 通道继续沟通。",
    };
  }

  if (intent === "investors") {
    return {
      eyebrow: en ? "Public project channel" : "公开项目通道",
      title: en ? "Discuss long-term questions in the open" : "在公开仓库讨论长期议题",
      description: en
        ? "For thesis questions, evidence gaps, or collaboration ideas, use the channels below. Sensitive security matters stay off public Issues."
        : "关于论点、证据缺口或协作设想，请使用下方通道。敏感安全问题请勿公开开 Issue。",
    };
  }

  return {
    eyebrow: en ? "Community" : "社区协作",
    title: en ? "Work with us in the open" : "在开源社区与我们协作",
    description: en
      ? "Questions, corrections, and contributions go through GitHub—the same workflow used by most open-source projects."
      : "问题、勘误与贡献请走 GitHub，沿用常见开源项目协作方式。",
  };
}

export function CommunityPanel({
  locale,
  intent = "general",
}: CommunityPanelProps) {
  const en = locale === "en";
  const intro = getIntro(locale, intent);
  const channels = getChannels(locale, intent);

  return (
    <section className="community-panel" id="community">
      <div className="community-intro">
        <p className="eyebrow">{intro.eyebrow}</p>
        <h2>{intro.title}</h2>
        <p>{intro.description}</p>
      </div>

      <div className="community-grid">
        {channels.map((channel) => {
          const Icon = channelIcons[channel.id as keyof typeof channelIcons];

          return (
            <article key={channel.id} className="community-card">
              <div className="community-card-icon">
                <Icon />
              </div>
              <h3>{channel.title}</h3>
              <p>{channel.description}</p>
              <a
                className="community-card-link"
                href={channel.href}
                rel="noreferrer"
              >
                {channel.action}
                <span aria-hidden="true">→</span>
              </a>
            </article>
          );
        })}
      </div>

      <p className="community-footnote">
        {en ? "Already tracking something?" : "已有相关讨论？"}
        <a href={GITHUB_ISSUES_URL} rel="noreferrer">
          {en ? "Browse existing Issues" : "浏览现有 Issues"}
        </a>
      </p>
    </section>
  );
}
