const GITHUB_API_ACCEPT = "application/vnd.github+json";

export function formatStarCount(count: number): string {
  if (!Number.isFinite(count) || count < 0) return "0";

  const whole = Math.round(count);
  if (whole < 1000) return String(whole);

  if (whole < 1_000_000) {
    const value = whole / 1000;
    const rounded = value >= 100 ? Math.round(value) : Math.round(value * 10) / 10;
    return `${String(rounded).replace(/\.0$/, "")}k`;
  }

  const value = whole / 1_000_000;
  const rounded = Math.round(value * 10) / 10;
  return `${String(rounded).replace(/\.0$/, "")}M`;
}

function parseStarCount(value: unknown): number | null {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim()) {
    const parsed = Number(value.replace(/,/g, "").trim());
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
}

async function fetchStarsFromGithubApi(
  repoFullName: string,
): Promise<number | null> {
  const headers: HeadersInit = {
    Accept: GITHUB_API_ACCEPT,
    "User-Agent": "regenic-book-site",
  };

  const token = process.env.GITHUB_TOKEN ?? process.env.GH_TOKEN;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(
    `https://api.github.com/repos/${repoFullName}`,
    {
      headers,
      next: { revalidate: 3600 },
    },
  );

  if (!response.ok) return null;

  const data = (await response.json()) as { stargazers_count?: unknown };
  return parseStarCount(data.stargazers_count);
}

async function fetchStarsFromShields(
  repoFullName: string,
): Promise<number | null> {
  const response = await fetch(
    `https://img.shields.io/github/stars/${repoFullName}.json`,
    {
      headers: { Accept: "application/json" },
      next: { revalidate: 3600 },
    },
  );

  if (!response.ok) return null;

  const data = (await response.json()) as { value?: unknown };
  return parseStarCount(data.value);
}

export async function getGithubRepoStars(
  repoFullName: string,
): Promise<number | null> {
  try {
    return (
      (await fetchStarsFromGithubApi(repoFullName)) ??
      (await fetchStarsFromShields(repoFullName))
    );
  } catch {
    return null;
  }
}
