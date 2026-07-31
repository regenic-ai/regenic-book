export type ProductPhase = {
  id: string;
  label: string;
  title: string;
  summary: string;
  status: "now" | "next" | "later";
};

export const productPhasesZh: ProductPhase[] = [
  {
    id: "architecture",
    label: "Phase 0 · 现在",
    title: "架构与 RFC",
    summary:
      "定义标准数据模型、上下文图谱，以及人与 Agent 共用的接口。公开标准与 regenic-book 对齐。",
    status: "now",
  },
  {
    id: "standards",
    label: "Phase 1",
    title: "统一判断标准",
    summary:
      "发布、应用、修订组织级标准；让人与 Agent 引用同一套可检验的判断依据。",
    status: "next",
  },
  {
    id: "context",
    label: "Phase 2",
    title: "统一上下文",
    summary:
      "组织级上下文层替代各团队各开聊天窗口；事实、边界与优先级有共同出处。",
    status: "next",
  },
  {
    id: "management",
    label: "Phase 3",
    title: "组织管理产品",
    summary:
      "在标准与上下文之上提供 AI 原生运营界面，而不是在旧 ERP 上堆聊天框。",
    status: "later",
  },
];

export const productPhasesEn: ProductPhase[] = [
  {
    id: "architecture",
    label: "Phase 0 · Now",
    title: "Architecture and RFCs",
    summary:
      "Define the standards model, context graph, and human + agent API surface. Align public schemas with regenic-book.",
    status: "now",
  },
  {
    id: "standards",
    label: "Phase 1",
    title: "Unified judgment standards",
    summary:
      "Publish, apply, and revise org-wide standards that humans and agents can cite and test.",
    status: "next",
  },
  {
    id: "context",
    label: "Phase 2",
    title: "Shared context",
    summary:
      "One organizational context layer instead of per-team chat silos, with provenance for every claim.",
    status: "next",
  },
  {
    id: "management",
    label: "Phase 3",
    title: "Org management product",
    summary:
      "AI-native operations built on standards and context—not legacy ERP with a chat box bolted on.",
    status: "later",
  },
];

export function getProductPhases(locale: string) {
  return locale === "en" ? productPhasesEn : productPhasesZh;
}
