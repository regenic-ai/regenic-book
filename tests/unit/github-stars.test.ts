import { describe, expect, it } from "vitest";

import { formatStarCount } from "@/lib/github-stars";

describe("formatStarCount", () => {
  it("保留千以下精确值", () => {
    expect(formatStarCount(0)).toBe("0");
    expect(formatStarCount(999)).toBe("999");
  });

  it("千级使用 k 缩写", () => {
    expect(formatStarCount(1000)).toBe("1k");
    expect(formatStarCount(1234)).toBe("1.2k");
    expect(formatStarCount(10500)).toBe("10.5k");
    expect(formatStarCount(100_500)).toBe("101k");
  });

  it("百万级使用 M 缩写", () => {
    expect(formatStarCount(1_000_000)).toBe("1M");
    expect(formatStarCount(1_250_000)).toBe("1.3M");
  });

  it("处理非法输入", () => {
    expect(formatStarCount(Number.NaN)).toBe("0");
    expect(formatStarCount(-3)).toBe("0");
  });
});
