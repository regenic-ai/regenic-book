export const diagnosisQuestions = [
  "核心成员能否用简单语言讲清八层标准？",
  "最近三个重要决策能否追溯到明确的价值判断？",
  "所有成员是否建立了与组织阶段匹配的 ROI 卡，且领先指标支持到期 ROI 大于 1？",
  "每位核心成员的决策权处于哪一级，升级条件是否清楚？",
  "每日反思是否持续产生新标准、标准修订或更优解法？",
  "AI 与人是否在同一上下文中按同一标准行动？",
  "研发是否明确当前用户共识、产品路径和单一待验证不确定性，并保留稳定核心与回滚方案？",
  "当经验与标准冲突时，成员是否会主动暂停、寻找双侧证据并修正判断，而不是诉诸资历或惯例？",
] as const;

export const diagnosisQuestionsEn = [
  "Can core members explain the eight-layer standards in plain language?",
  "Can the last three important decisions be traced to explicit value judgments?",
  "Does everyone have a stage-appropriate ROI card whose leading indicators support an ROI above 1 by the deadline?",
  "Is each core member's decision authority level—and the condition for escalation—clear?",
  "Does daily reflection consistently produce new standards, revisions, or better solutions?",
  "Do people and AI act from the same context and apply the same standards?",
  "Does product development share one user consensus, one product path, and one uncertainty under test, while preserving a stable core and rollback plan?",
  "When experience conflicts with a standard, do members pause, seek evidence from both sides, and revise the judgment instead of appealing to seniority or habit?",
] as const;

export const ninetyDayPhases = [
  {
    weeks: "第 1—2 周",
    title: "清晰术审计",
    actions: [
      "从支出流水识别现金、判断力或共识中的限制性资源",
      "统计过去一个月重复发生的判断，按频次取前三",
      "定位付费用户所处的采用层级与当前产品路径",
      "标出头部客户的阶段、排序条件与档差方向，规格对不上的不写进本周必拿",
    ],
    deliverable: "一页纸现状图",
    failure: "把审计开成动员大会，在标准出现前先宣布变革。",
  },
  {
    weeks: "第 3—6 周",
    title: "标准循环启动",
    actions: [
      "由一号位起草八层标准 v1，每条写成「条件 + 动作 + 验收」",
      "按组织阶段为全员建立 3、6 或 9—12 个月 ROI 卡",
      "把前三类高频判断写成标准，统计采用中位数",
    ],
    deliverable: "八层标准 v1 + 全员 ROI 卡",
    failure: "追求措辞完美，或把第一作者责任变成全员投票。",
  },
  {
    weeks: "第 7—10 周",
    title: "共识循环运转",
    actions: [
      "给关键标准命名，并放进所有成员随手可查的上下文",
      "逐个完成费曼验收：不用术语讲清、能回答边界、能指导判断",
      "冻结正向或共识逆向产品路径，并配置五条研发闸门",
    ],
    deliverable: "核心成员费曼验收 + 产品路径决议",
    failure: "把发过邮件、做过培训，误当成成员已经形成共识。",
  },
  {
    weeks: "第 11—13 周",
    title: "双试点",
    actions: [
      "选择足够小、足够真、足够疼的执行单元做 AI 化或外包化改造",
      "选择一个产品单元做单变量迭代，保留稳定核心与回滚方案",
      "启动前写死停止线，结束后用成功与失败两侧证据结账",
    ],
    deliverable: "双试点复盘 + 下一轮标准修订",
    failure: "质量下滑无法归因仍不暂停，或在失败后临时改验收线。",
  },
] as const;

export const ninetyDayPhasesEn = [
  {
    weeks: "Weeks 1–2",
    title: "Clarity audit",
    actions: [
      "Use spending records to identify the limiting resource: cash, judgment, or consensus",
      "Count recurring judgments from the past month and select the three most frequent",
      "Locate paying users on the adoption curve and identify the current product path",
      "Mark head customers’ stage, ranking conditions, and tier-gap direction; do not put a spec mismatch on this week’s must-win list",
    ],
    deliverable: "One-page current-state map",
    failure: "Turning the audit into a rally before any usable standard exists.",
  },
  {
    weeks: "Weeks 3–6",
    title: "Start the standards engine",
    actions: [
      "Have the accountable leader draft eight-layer standards v1 as condition + action + acceptance",
      "Create 3-, 6-, or 9–12-month ROI cards appropriate to the organization's stage",
      "Encode the three highest-frequency judgments and measure median adoption",
    ],
    deliverable: "Eight-layer standards v1 + ROI cards",
    failure: "Optimizing wording or replacing first-author accountability with a vote.",
  },
  {
    weeks: "Weeks 7–10",
    title: "Run the consensus engine",
    actions: [
      "Name key standards and place them in context every member can retrieve",
      "Run individual Feynman checks: explain plainly, answer boundaries, and guide a decision",
      "Freeze a forward or consensus-reverse product path and install five development gates",
    ],
    deliverable: "Core-member Feynman checks + product-path decision",
    failure: "Mistaking an email or training session for shared understanding.",
  },
  {
    weeks: "Weeks 11–13",
    title: "Run two pilots",
    actions: [
      "Choose a small, real, painful execution unit for AI or outsourcing redesign",
      "Run a single-variable product iteration with a stable core and rollback plan",
      "Freeze stop conditions before launch and close with evidence from success and failure",
    ],
    deliverable: "Two pilot reviews + standards revision",
    failure: "Continuing through unexplained quality loss or moving acceptance criteria after failure.",
  },
] as const;
