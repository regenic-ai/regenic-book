# Regenic

[**regenic.ai**](https://regenic.ai) 的开源网站与内容仓库。

**让组织再次伟大。**

方法论来自免费书稿 [**《重写基因：如何构建 AI 原生组织》**](https://regenic.ai/zh/book)（英文版：[Rewrite the DNA](https://regenic.ai/en/book)）。本仓库提供在线阅读站点、中英书稿、公开标准，以及开发与协作所需代码。

English: [README.md](README.md)

## 名称说明（请勿混用）

| 名称 | 指什么 |
| --- | --- |
| **《重写基因》** | 书名（副标题：如何构建 AI 原生组织） |
| **Regenic** | 本项目、regenic.ai 网站、方法论的持续运行版 |
| **bioby.ai** | 第一家在真实业务中运行该方法的实践公司 |

## 仓库内容

- **网站** — Next.js 16：书稿阅读、方法论、组织诊断八问、90 天路线，支持中英文
- **`content/`** — 中英章节、公开标准、研究索引
- **`lib/`** — 内容渲染、多语言、搜索引擎优化

## 路线图

基于书稿中的双能力模型，下一步做 **AI 应用工具**：

1. **统一判断标准** — 人与智能体共用、可检验、可修订的标准层
2. **统一上下文** — 组织级上下文，而不是每个团队各开一个聊天窗口
3. **组织管理产品** — 面向 AI 原生组织的管理软件，不是在旧系统上堆 AI 插件

当前阶段：**书稿 + 网站 + 公开方法论**。产品代码在
[`regenic-ai/genome`](https://github.com/regenic-ai/genome) — AI 原生组织的默认管理底座。

## 快速开始

需要 Node.js（兼容 Next.js 16）和 npm。

```bash
git clone https://github.com/regenic-ai/regenic.git
cd regenic
npm install
cp .env.example .env.local
npm run dev
```

浏览器打开 [http://localhost:3000](http://localhost:3000)（默认跳转到 `/en`，中文入口 [`/zh`](https://regenic.ai/zh)）。

## 常用命令

| 命令 | 说明 |
| --- | --- |
| `npm run dev` | 本地开发 |
| `npm run build` | 生产构建 |
| `npm run lint` | 代码检查 |
| `npm run typecheck` | 类型检查 |
| `npm test` | 单元测试 |
| `npm run test:e2e` | 端到端测试 |
| `npm run check:boundaries` | 检查公开目录是否混入敏感内容 |
| `npm run check:licenses` | 依赖许可检查 |

## 主要页面

| 路径 | 说明 |
| --- | --- |
| [`/zh/book`](https://regenic.ai/zh/book) | 《重写基因》全文在线阅读 |
| [`/zh/method`](https://regenic.ai/zh/method) | 方法论概览 |
| [`/zh/tools/diagnosis`](https://regenic.ai/zh/tools/diagnosis) | 组织诊断八问 |
| [`/zh/standards`](https://regenic.ai/zh/standards) | 公开标准 |
| [`/zh/research`](https://regenic.ai/zh/research) | 公开研究索引 |

## 参与贡献

议题与合并请求：[github.com/regenic-ai/regenic/issues](https://github.com/regenic-ai/regenic/issues)

提交前请阅读 [贡献指南](CONTRIBUTING.md)。安全问题见 [安全政策](SECURITY.md)。网站不提供联系表单。

## 许可

| 范围 | 许可 |
| --- | --- |
| 应用代码 | [MIT](LICENSE-CODE) |
| 书稿与公开方法论 | [CC BY-NC 4.0](LICENSE-CONTENT) |

商标见 [TRADEMARKS.md](TRADEMARKS.md)，第三方组件见 [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md)。
