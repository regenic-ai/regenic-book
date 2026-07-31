import { describe, expect, it } from "vitest";

import {
  cleanChapterMarkdown,
  extractHeadings,
  removeLeadAssertion,
  renderMarkdown,
} from "@/lib/content/markdown";

describe("章节 Markdown 处理", () => {
  it("移除状态行和编辑脚手架，同时保留后续正文", () => {
    const source = [
      "# 第一章",
      "状态：v7 · 2026-07-28",
      "",
      "## 正文",
      "公开段落。",
      "",
      "## 金句候选（内部）",
      "不应公开。",
      "### 子项",
      "也不应公开。",
      "",
      "## 下一节",
      "应继续公开。",
    ].join("\r\n");

    const cleaned = cleanChapterMarkdown(source);

    expect(cleaned).toContain("## 正文");
    expect(cleaned).toContain("## 下一节");
    expect(cleaned).not.toContain("状态：");
    expect(cleaned).not.toContain("金句候选");
    expect(cleaned).not.toContain("不应公开");
  });

  it("提取二三级标题并为重复中文标题生成稳定锚点", () => {
    expect(extractHeadings("## 判断标准\n### 验证\n## 判断标准")).toEqual([
      { depth: 2, text: "判断标准", id: "判断标准" },
      { depth: 3, text: "验证", id: "验证" },
      { depth: 2, text: "判断标准", id: "判断标准-1" },
    ]);
  });

  it("移除正文中的编辑占位符、内部案例编号和排版备注", () => {
    const source = [
      "# 第一章",
      "",
      "这是案例（I2），数据【待补：I4 季度数据】。",
      "",
      "【图 7-x：logo（assets/logo.png）——排版时插入】",
      "",
      "外部案例 E7 仍待补齐。",
    ].join("\n");

    const cleaned = cleanChapterMarkdown(source);

    expect(cleaned).not.toContain("I2");
    expect(cleaned).not.toContain("I4");
    expect(cleaned).not.toContain("E7");
    expect(cleaned).not.toContain("【图");
    expect(cleaned).not.toContain("待补");
    expect(cleaned).toContain("相关证据持续验证中");
    expect(cleaned).toContain("仍需验证");
  });

  it("保留章节摘要并从正文移除重复论断", () => {
    const body = [
      "**论断：这是页面顶部已经展示的摘要。**",
      "",
      "---",
      "",
      "## 正文",
      "",
      "从这里开始阅读。",
    ].join("\n");

    expect(removeLeadAssertion(body)).toBe(
      "## 正文\n\n从这里开始阅读。",
    );
  });

  it("移除前置页标题后的多余分隔线", () => {
    expect(
      removeLeadAssertion("---\n\n## 版权声明\n\n公开内容。"),
    ).toBe("## 版权声明\n\n公开内容。");
  });

  it("渲染服务端 HTML 并添加可访问的标题锚点", async () => {
    const html = await renderMarkdown("## 统一上下文\n\n正文");

    expect(html).toContain('id="统一上下文"');
    expect(html).toContain('class="heading-anchor"');
    expect(html).toContain('aria-label="Copy section link"');
    expect(html).toContain("<p>正文</p>");
  });

  it("显式净化危险 HTML 与链接协议且保留正常书稿内容", async () => {
    const html = await renderMarkdown(
      [
        "## 安全章节",
        "",
        '<script>alert("xss")</script>',
        "",
        "[危险链接](javascript:alert(1))",
        "",
        "[正常链接](https://example.com/research)",
      ].join("\n"),
    );

    expect(html).not.toContain("<script");
    expect(html).not.toContain("javascript:");
    expect(html).toContain("安全章节");
    expect(html).toContain('href="https://example.com/research"');
  });

  it("保留章节插图的 src 与 alt", async () => {
    const html = await renderMarkdown(
      "![正态分布六档标准阶梯](/figures/ch12-normal-distribution-zh.svg)",
    );

    expect(html).toContain('src="/figures/ch12-normal-distribution-zh.svg"');
    expect(html).toContain('alt="正态分布六档标准阶梯"');
  });
});
