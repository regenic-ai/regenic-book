import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  CapabilityDiagram,
  PageCta,
  PageHero,
  SectionHeading,
  TraceNote,
} from "@/components/marketing";
import { isPublishedLocale, type PublishedLocale } from "@/lib/i18n/config";
import { createLocalizedMetadata } from "@/lib/i18n/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isPublishedLocale(locale)) return {};
  return createLocalizedMetadata({
    locale,
    title: locale === "en" ? "Method" : "方法论",
    description: locale === "en"
      ? "The dual-capability model, standards engine, Clarity Method, and Interference Method for producing organizational judgment."
      : "双能力模型、标准机器，以及清晰术与干扰术如何共同生产组织判断力。",
    pathname: "/method",
  });
}

export default async function MethodPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isPublishedLocale(locale)) notFound();
  if (locale === "en") return <EnglishMethod locale={locale} />;

  return (
    <>
      <PageHero
        eyebrow="Regenic 方法论"
        title={
          <>
            把个人悟性，
            <br />
            变成组织资产。
          </>
        }
        description="“最后的稀缺”是名字，悟性是个人形态，判断力是组织形态，标准是存储格式。重写基因，就是完成这次从个人到组织的转化。"
        aside={
          <p>
            组织基因是管理隐喻：指成员在缺少监督和明确指令时仍会自动采用的默认判断与行为，不是生物学意义的基因。
          </p>
        }
      />

      <section className="marketing-section shell">
        <SectionHeading
          eyebrow="主框架"
          title="双能力模型"
          description="判断力要规模化，既要有共同的排序函数，也要让分散行动者拿到作出判断所需的信息。"
        />
        <CapabilityDiagram locale={locale} />
      </section>

      <section className="statement-band">
        <div className="shell machine-flow">
          <SectionHeading
            eyebrow="核心部件"
            title="标准机器：让判断进入循环。"
            description="标准不是静态制度墙，而是一台持续吸收反馈的循环泵。"
          />
          <ol aria-label="标准机器循环">
            <li>判断</li>
            <li>提炼</li>
            <li>标准</li>
            <li>下发</li>
            <li>执行</li>
            <li>回流</li>
            <li>迭代</li>
          </ol>
        </div>
      </section>

      <section className="marketing-section shell">
        <SectionHeading
          eyebrow="两条生产线"
          title="清晰术与干扰术"
          description="它们是组织进化的方法论，不是对 Transformer 或任何模型架构的科学等价描述。"
        />
        <div className="method-detail-grid">
          <article>
            <span className="method-index">01 / Clarity</span>
            <h3>清晰术扩大自己的选项</h3>
            <p className="formula">提炼标准 10% + 收集数据 10% + 以手段求优解 80%</p>
            <ol>
              <li>发现标准缺口</li>
              <li>借到标准与适用边界</li>
              <li>检查迁移条件</li>
              <li>用小成本实验验证</li>
              <li>修正并固化为组织标准</li>
            </ol>
            <p>
              赢家用来找机制，输家用来找边界。任何一侧缺失，结论只能标记为待验证假设。
            </p>
          </article>
          <article>
            <span className="method-index">02 / Interference</span>
            <h3>干扰术收窄对方的选项</h3>
            <p className="formula">分析用户共识 10% + 找到场景 10% + 制造共识 80%</p>
            <ol>
              <li>理解对方已有的共识</li>
              <li>选择事实可信度最高的场景</li>
              <li>选择性展示真实信息</li>
              <li>检验承诺能否被兑现</li>
              <li>让反馈回流并修正表达</li>
            </ol>
            <p>
              不隐瞒实质影响判断的信息，不制造假信息，并以“对方事后是否后悔”检验边界。
            </p>
          </article>
        </div>
        <TraceNote>
          清晰术推出判断标准“以价值去判断”；干扰术的滑落风险推出行为标准“诚以待人”。方法不是口号，必须以结果与失败记录持续校准。
        </TraceNote>
      </section>

      <section className="marketing-section shell">
        <div className="assembly-grid">
          <SectionHeading
            eyebrow="装配关系"
            title="不是三台机器，而是一台机器的逐层装配。"
          />
          <ol>
            <li>
              <span>核心部件</span>
              <strong>标准机器固化判断</strong>
            </li>
            <li>
              <span>两条生产线</span>
              <strong>清晰术与干扰术生产可用标准与共识</strong>
            </li>
            <li>
              <span>整机</span>
              <strong>共识机器复制判断</strong>
            </li>
            <li>
              <span>外部效应</span>
              <strong>文化外溢传播判断</strong>
            </li>
          </ol>
        </div>
        <Link className="text-link" href={`/${locale}/cases`}>
          查看方法如何接受双侧案例检验 →
        </Link>
      </section>

      <section className="marketing-section shell">
        <header className="section-heading">
          <p className="eyebrow">产品</p>
          <h2>方法讲清楚之后，用软件接住。</h2>
          <p>
            Regenic 把统一判断标准与统一上下文落成可运行的产品，供人与 Agent 共同使用。
          </p>
        </header>
        <Link className="button primary" href={`/${locale}/product`}>
          查看产品与路线图
        </Link>
      </section>

      <PageCta locale={locale} />
    </>
  );
}

function EnglishMethod({ locale }: { locale: PublishedLocale }) {
  return (
    <>
      <PageHero
        eyebrow="The Regenic method"
        title={<>Turn individual insight<br />into an organizational asset.</>}
        description="The last scarcity is the name; adaptive insight is its individual form; judgment is its organizational form; standards are its storage format. Rewriting organizational DNA completes that conversion."
        aside={<p>Organizational DNA is a management metaphor for the judgments and behaviors people default to without supervision or explicit instructions. It is not a biological claim.</p>}
      />
      <section className="marketing-section shell">
        <SectionHeading
          eyebrow="Primary framework"
          title="The dual-capability model"
          description="Judgment scales only when people share both an ordering function and the information required to apply it."
        />
        <CapabilityDiagram locale={locale} />
      </section>
      <section className="statement-band">
        <div className="shell machine-flow">
          <SectionHeading
            eyebrow="Core component"
            title="The standards engine puts judgment into a loop."
            description="A standard is not a static policy wall. It is a pump that continuously absorbs feedback."
          />
          <ol aria-label="Standards engine loop">
            {["Judge", "Extract", "Standardize", "Distribute", "Execute", "Return evidence", "Iterate"].map((step) => <li key={step}>{step}</li>)}
          </ol>
        </div>
      </section>
      <section className="marketing-section shell">
        <SectionHeading
          eyebrow="Two production lines"
          title="Clarity and Interference"
          description="These are organizational methods, not scientific equivalents of Transformer or any model architecture."
        />
        <div className="method-detail-grid">
          <article>
            <span className="method-index">01 / Clarity</span>
            <h3>Clarity expands your own options</h3>
            <p className="formula">Extract standards 10% + collect evidence 10% + optimize by means 80%</p>
            <ol>
              <li>Detect a standards gap</li><li>Borrow a standard with its boundaries</li><li>Test transfer conditions</li><li>Run a low-cost experiment</li><li>Correct and encode the result</li>
            </ol>
            <p>Winners expose mechanisms; losers expose boundaries. Without both sides, the conclusion remains a hypothesis.</p>
          </article>
          <article>
            <span className="method-index">02 / Interference</span>
            <h3>Interference narrows the other party&apos;s options</h3>
            <p className="formula">Analyze existing consensus 10% + choose the scene 10% + build consensus 80%</p>
            <ol>
              <li>Understand existing beliefs</li><li>Choose the most credible factual setting</li><li>Selectively present true information</li><li>Test whether the promise can be kept</li><li>Feed results back into the message</li>
            </ol>
            <p>Never hide material facts or invent information. The hard boundary is whether the other party would regret the choice after learning the full truth.</p>
          </article>
        </div>
        <TraceNote locale={locale}>Clarity yields the judgment standard “Judge by Value.” The failure mode of Interference yields the behavioral standard “Treat People with Honesty.” Both must be calibrated by outcomes and failure records.</TraceNote>
      </section>
      <section className="marketing-section shell">
        <div className="assembly-grid">
          <SectionHeading eyebrow="Assembly" title="Not three machines, but one machine assembled in layers." />
          <ol>
            <li><span>Core</span><strong>The standards engine stores judgment</strong></li>
            <li><span>Production</span><strong>Clarity and Interference produce usable standards and consensus</strong></li>
            <li><span>Whole system</span><strong>The consensus engine reproduces judgment</strong></li>
            <li><span>External effect</span><strong>Culture carries judgment beyond the organization</strong></li>
          </ol>
        </div>
        <Link className="text-link" href={`/${locale}/cases`}>See how cases test both sides of the method →</Link>
      </section>
      <section className="marketing-section shell">
        <header className="section-heading">
          <p className="eyebrow">Product</p>
          <h2>After the method is clear, software carries it.</h2>
          <p>
            Regenic turns unified judgment standards and shared context into software that humans and agents can run together.
          </p>
        </header>
        <Link className="button primary" href={`/${locale}/product`}>View product and roadmap</Link>
      </section>
      <PageCta locale={locale} />
    </>
  );
}
