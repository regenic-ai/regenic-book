import { describe, expect, it } from "vitest";

import nextConfig from "@/next.config";

describe("全站安全响应头", () => {
  it("配置 CSP、HSTS 与浏览器隔离策略", async () => {
    const rules = await nextConfig.headers?.();
    const headers = Object.fromEntries(
      (rules?.[0]?.headers ?? []).map(({ key, value }) => [key, value]),
    );

    expect(headers["Content-Security-Policy"]).toContain(
      "frame-ancestors 'none'",
    );
    expect(headers["Content-Security-Policy"]).toContain("object-src 'none'");
    if (process.env.NODE_ENV === "development") {
      expect(headers["Content-Security-Policy"]).toContain("'unsafe-eval'");
    } else {
      expect(headers["Content-Security-Policy"]).not.toContain("'unsafe-eval'");
    }
    expect(headers["Strict-Transport-Security"]).toContain(
      "includeSubDomains",
    );
    expect(headers).toMatchObject({
      "X-Frame-Options": "DENY",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    });
    expect(headers["Permissions-Policy"]).toContain("camera=()");
  });
});
