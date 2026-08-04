# Chapter 2: The Paradox of Abundance

Status: Completed (v1.6, 2026-08-04, about 8500 words; acceptance passed 2026-07-25; v1.2 forward echo of market-side scissor gap; v1.3 five-gene root paragraph; v1.4 aside scaffolding cleanup; v1.5 prose-standard fluency pass; v1.6 per current standard, primarily whole-sentence rewriting; English terminology sync (principal-leader); open to ongoing public revision)

**Claim: A company that buys every AI tool on the market sees no order-of-magnitude gain in efficiency, because the gap is not on the technical side but on the organizational side: everyone holds unlimited execution power, yet each is executing a different judgment.**

---

## 1. Fourteen Months, Two Announcements

On February 27, 2024, Klarna, a Swedish fintech company, issued a press release that shook customer-service stocks. Its OpenAI-powered AI assistant had been live for only one month. It handled 2.3 million conversations—two-thirds of all customer-service volume—"equivalent to the workload of 700 full-time agents." Resolution time fell from eleven minutes to under two; repeat inquiries dropped 25%; projected profit uplift for the year was $40 million. The company paused hiring for more than a year, cutting headcount from about 5,000 to about 3,500.

On May 8, 2025, the same CEO, Sebastian Siemiatkowski, told Bloomberg something else: "Cost has unfortunately become too dominant an evaluation factor when we organize this, and the result is lower quality." Klarna announced it would hire human agents again, guaranteeing that complex and high-risk cases would always reach a person.

Set the two announcements side by side and discard two lazy readings first. The first: AI doesn't work. That doesn't hold. At the pullback, AI still covered the equivalent of about 853 agents, more than during the hype phase. What Klarna removed was not AI but the cost-only ruler. The second: Klarna was foolish. That holds even less. It is one of the companies that deployed AI fastest, hardest, and most thoroughly anywhere in the world.

The real issue sits in the grammar of the CEO's sentence. He did not say "the model wasn't good enough." He said the evaluation factors were wrong. That is **misplacement of judgment standards**. When cost becomes the sole ranking criterion, AI—with flawless execution—drives the company precisely where it should not go. Execution was never the problem; what directs execution is.

Execution tools have never been more abundant, yet organizational output has not moved by orders of magnitude. **The abundance of tools exposes the poverty of judgment.** The same scissors cut again on the market side: product abundance, attention scarcity.

## 2. The Median Cause of Failure: Not on the Technical Side

Klarna is not alone—only the loudest case. The pattern has aggregate data behind it.

In 2024, the RAND Corporation published *The Root Causes of Failure for AI Projects*, interviewing sixty-five data scientists and engineers with five or more years of experience. The report states: "According to some estimates, over 80% of AI projects fail—twice the failure rate of IT projects that do not involve AI" (RAND, 2024; a qualitative study whose original wording carries "according to some estimates"—read it as the vast majority failing, not a statistic precise to the single digit). Generative AI points the same way: MIT's Project NANDA found that roughly 95% of enterprise GenAI pilots produced no measurable income-statement return (MIT NANDA, 2025).

More valuable than the failure rate is the ranking of causes. RAND names five root causes: first, stakeholders misaligned on what problem to solve and communication distorted; second, the organization lacks the data accumulation needed to train models; third, chasing the latest technology instead of solving real problems; fourth, underinvestment in supporting infrastructure; fifth, applying AI to problems beyond current capability boundaries. Read line by line: the first, third, and fourth are purely organizational; the second is half organizational (data never accumulated because no one treated "leave usable data behind" as a standard); only the fifth barely counts as a technical boundary.

The median cause of failure is organizational, not technical. Projects lose not first to the model but to conflicting answers to "what are we actually doing?" The number-one killer is not getting the wrong answer—it is never agreeing on the question.

The procurement department can buy the exact same tools as any rival: models are public, APIs are public, prices keep collapsing. There is no moat left on the technical side; everyone stands on the same starting line. Yet variance in outcomes is staggering: the same toolkit yields order-of-magnitude change in some companies and a mess in most. **Variance is not in the tools. Variance is in the organization.**

## 3. A More Traditional Specimen: A Sixty-Two Million Dollar Audit Report

Klarna at least succeeded loudly. For most organizations the version is: the money is spent, the story never starts.

In 2012, MD Anderson Cancer Center at the University of Texas—among the world's top cancer research institutions—signed with IBM to build an "oncology expert advisor" on Watson: AI-assisted treatment decisions and clinical-trial matching. It was the era's most lavish "buy all the tools" package: top institution, top vendor, top consulting (PwC on the business plan).

In February 2017, an audit by the University of Texas System closed the case. The contract had been renewed twelve times without competitive re-bid; cumulative spend reached about $62.1 million—roughly $39 million to IBM, roughly $23 million to PwC; a $11.59 million deficit in donated funds because money was spent before donations arrived. Multiple charges were set just under board-approval thresholds; IT governance was bypassed wholesale. The system never entered clinical use and was never piloted outside the hospital. The president resigned.

Two details are worth keeping.

First, the audit explicitly states: "These results should not be interpreted as an evaluation of the scientific basis or functional capabilities of the system." The auditors themselves took technology off the hook: they were not judging whether Watson worked but how the organization spent, decided, and governed. **Organizational failure, certified by the auditors.**

Second, the last technical straw: in 2016 the hospital migrated electronic records from ClinicStation to Epic, and Watson never learned to read the new format. A $60 million AI died because it did not share the same context as the organization. **Literal context misalignment killed the project.**

Put both specimens under the same microscope: Klarna died of misplacement of judgment standards (cost as the only metric); MD Anderson died of a double absence of standards and context (governance standards bypassed, machine and organization not sharing context). One aggressive, one traditional; one finance, one healthcare; one had succeeded, one never ran. Same pathology slide. Not coincidence. Genetic disease.

## 4. Why "No Order-of-Magnitude Change" Rather Than "No Change"

Companies that buy AI tools usually do see something: weekly reports faster, customer replies faster, boilerplate code faster—twenty to thirty percent speedups at the individual level are everywhere. The paradox is that these local gains do not add up to order-of-magnitude change at the company level. Money spent, speed felt, nothing to find on the P&L.

The reason is a plain systems law: **the chain moves at the speed of its slowest link, and execution is often no longer the slowest link.** Value creation is a chain: decide what to do → align understanding → execute → revise from feedback. AI makes the third link ten times faster; if links one, two, and four stay put, end-to-end speed barely budges. It is like raising one highway segment's limit from 120 to 1,200 while you sit at the toll booth—the full trip barely changes.

Worse, local gains are not only diluted by the bottleneck. Three mechanisms **eat** them:

- **Rework eats**: Wrong-direction work done faster means more rework. Two weeks for one bad plan becomes two days for five; correction load gets heavier, not lighter.
- **Waiting eats**: Execution accelerates; decisions do not. Output queues in the boss's inbox for as long as it used to take to produce it. The bottleneck moves from "slow to make" to "slow to decide"—same total time, different queue location.
- **Alignment eats**: Everyone doubles output; caliber stays unaligned; everything that must be checked or meeting-synced doubles too. Meetings rise, not fall. Many people feel more meetings after adopting AI.

Those three bills reconcile "everyone is faster, the company is not." They also explain why the paradox cannot be solved by buying more tools: tools act only on the execution loop; the bills accrue on judgment, alignment, and feedback. What blocks those three loops is the organization's default behavior.

## 5. Five Default Genes of the Old Organization

Pin down the term first. **Organizational genes** in this book are a metaphor: the default judgments and behaviors members adopt automatically when no one is watching. Not written in policy—written in muscle memory. New hires assimilate within three months; it runs when the boss is away. That is the organization's real operating system.

Old organizations carry at least five default genes. Under each: what it looks like after AI amplifies it.

**Cognitive inertia**: Reach first for the most familiar, least demanding explanation. Sales down? Market. Project dead? Bad execution. The first explanation wins because it costs the least thought. Amplified by AI: the most efficient "evidence supplier" in history. Argue anything, and it finds support. Two days of data digging becomes a two-minute report with charts. Inertia upgrades from "too lazy to think" to "thinking on autopilot"; wrong conclusions wear rigorous dress for the first time.

**Experiential authority**: "We've always done it this way" substitutes for verifiable standards. The most senior person holds final interpretive power, whether or not the experience was validated or where its boundary lies. Amplified by AI: authoritative experience feeds the model; training decks, talk tracks, and SOPs deploy at scale. Bad practice upgrades from word-of-mouth to system-level rollout—once a quarter to contaminate a region, now one prompt overnight across every customer touchpoint.

**Information hoarding**: Context lives in individual heads; information asymmetry protects position. "Only Wang knows this" is not oversight—it is Wang's moat. Amplified by AI: departments used to hoard documents; now they hoard privately tuned models. Marketing's AI and sales's AI answer "who is our core customer?" differently, each with full confidence, different caliber. Information silos become judgment silos, each with automated ramparts. MD Anderson's Watson, unable to read the new EMR, is this gene's $60 million specimen.

**Execution worship**: Busyness, speed, and volume substitute for value judgment. Full calendars as medals; overtime as loyalty; direction unchecked, questioning labeled disloyalty. Amplified by AI: output metrics explode. Content count, lines of code, deck versions—dashboards red, everyone "using AI for efficiency." Nobody can answer how much of it passes any value standard. Klarna is the premium case: 2.3 million conversations, eleven minutes to two, every execution metric perfect, the evaluation standard itself never calibrated.

**Feedback avoidance**: Blame people and luck; never revise the standard. Retrospectives become blame sessions or praise sessions, never producing an updated rule. Amplified by AI, most insidiously: the cost of papering over failure drops to zero. Polished postmortems, dignified failure narratives, never easier. Wrong standards stay wrong, better packaged, entering the next cycle with full execution behind them.

The five genes are not five unrelated flaws. They are one underlying force expressed five ways: **energy saving**. Cognitive inertia saves thinking; experiential authority saves verification; information hoarding saves the trouble of sharing; execution worship saves judgment (hands cheaper than brains); feedback avoidance saves the pain of facing error. Hardly surprising: the brain is roughly 2% of body weight yet consumes about 20% of resting energy—evolution factory-installed "don't think unless you must" (Raichle et al.).

The diagnosis can compress one level further: **human nature is inertial; organizational evolution is the fight against inertia.** But posture decides the outcome. Moral mobilization and willpower against factory settings lose in a few rounds. One winning move: **make the right path easier than the wrong path, and let inertia work for you.** Standards make "don't have to get smart all over again" the path of least resistance; shared context makes "ask the machine" faster than "ask Wang." People slide toward ease; organizational evolution is not blocking the slide but grading the exit toward the right place.

These five could survive diseased in the old era because expensive execution was a natural shock absorber: wrong judgment took long execution to become consequence—time to brake, correct, deflect, forget.

AI removed the shock absorber. **AI does not amplify efficiency. AI amplifies what already exists in your organization, including chaos.** Back to Klarna: cost-first evaluation lived in most service departments long before AI; AI let that standard execute flawlessly at 2.3 million conversations per month. A genetic defect that usually hid below threshold became, in fourteen months, a tumor the CEO had to acknowledge in public.

**AI will not eliminate human inertia. It will give inertia stronger execution.**

## 6. Gene Evolution

Building an AI-native organization is not bolting new tools onto the old one. Klarna and MD Anderson had tools galore. The work is completing an **organizational gene evolution**: replacing the five old genes one by one.

`Experiential Authority → Explicit Standards | Information Hoarding → Shared Context | Cognitive Inertia → Borrowing from Outside | Feedback Avoidance → Continuous Correction | Execution Worship → Value Judgment`

New genes must also run unsupervised: no standard → stop and find one, not "start first, talk later"; judgment conflict → return to value ranking, not seniority or volume; error → revise the standard, not hunt a scapegoat. One judgment up front: **AI-native is not a tool upgrade. It is a rewrite of the organization's default behavior.**

Measure Klarna again with this ruler: the disease was misplacement of judgment standards; the corrective action is the demonstration. Within fourteen months: public admission, naming the cause (wrong evaluation standard), immediate calibration (change the standard, not withdraw the tool). Contrast how many organizations let a wrong standard run three more years rather than have the principal leader say "our ruler was wrong." On continuous correction, Klarna is a positive example. Falling on the transformation path is not shameful; lying there in denial is.

## 7. The Same Person, Two Genes

The cleanest control is one person in two organizations.

Liu Wei spent years in online education, running large-scale business at Gaotu. In May 2023 he co-founded the AI education company Dancing with Love with Zhang Huaiting and others. The company was designed AI-native from day one: product, R&D, design, marketing operations, and sales all restructured around human–machine collaboration, with a shared cross-department data pool. In a bit over two years: four funding rounds totaling about $150 million, valuation near $1 billion (founder-disclosed company figures to media, not audited).

The numbers matter less than Liu Wei's own account of the two stretches. At Gaotu he "thought about org building and training every day"; facing business problems, he stacked headcount, teachers, variance reduction. At Dancing with Love he "refined product and debated tech—how to solve business problems with product and technology." His summary reads as if written for this chapter: "**Traditional online education was fundamentally an education business that happened to use tools; AI education is fundamentally an AI business that happens to land in education.**" He adds a sharper metaphor: traditional online education is "agriculture." How many people, how much land tilled.

Same person, same industry knowledge, same diligence. What changed was not the human but the organization's default genes: one defaults to "add people," the other to "change the system." The former scales with headcount; the latter with the quality of standards and context. **Not a people difference—a gene difference.** That answers the question many principal leaders ask: "Should I replace my team?" Probably not. Replacing genes is cheaper than replacing people; replace people without genes and newcomers match the old cohort in three months.

## 8. Background: Where the Word "Chasm" Comes From

This chapter keeps using "chasm." It has a specific origin.

Everett Rogers's diffusion-of-innovation theory sorts adopters into five groups: innovators (~2.5%) → early adopters (~13.5%) → early majority (~34%) → late majority (~34%) → laggards (~16%). Geoffrey Moore applied this to high-tech markets and located the critical break between early adopters and early majority. That is the original **chasm**. The break happens because **early adopters buy vision; the early majority buys certainty—and those two consensuses do not bridge on their own** (proportions are theoretical approximations, not fixed market quotas; classify users around the specific innovation and context).

This chapter's chasm is the organizational version: between "companies that bought AI tools" and "AI-native companies" lies not budget or vendor choice but replacement of the five genes. Tools cross procurement; they do not cross organizational genes. That is why eighty percent of projects fall into the ditch.

Two companies, same toolbox. Company A fires a hundred arrows in a hundred directions—each AI-powered, each chasing its own judgment; Company B fires a hundred arrows at one target. A crack runs between them; beneath it, five gene replacements. **A hundred people wielding a hundredfold execution, sprinting in a hundred directions—that is not transformation. It is accelerated disintegration.**

## 9. Boundaries of the Claim

This claim is easy to say; easy claims get overused. Boundaries:

**First, this chapter is not anti-tool.** "The gap is organizational" does not mean vendor choice doesn't matter or that the worst model will do. Tools set the ceiling; the organization sets what fraction you reach. For most organizations today the bottleneck is the latter. That is not license to "don't buy tools yet."

**Second, do not read 80% as a precise dial.** RAND's figure carries "according to some estimates"; MIT's 95% counts pilots with no measurable P&L return, not total wipeout. This chapter needs only a weaker, harder fact: failure is the majority, and the top cause is organizational. Debate the numbers; the ranking is hard to overturn.

**Third, genes can change.** The metaphor's side effect: it sounds like fate. Biological genes you don't choose; organizational genes are human-set defaults, and defaults can be reset. Klarna's public correction in fourteen months; Transn, a twenty-year-old company, installing a CAIO and an "energy gold" mechanism—living counterexamples. If genes were immutable, the book stops here; because they are not, there is more to write.

**Fourth, the five genes are not moral indictments.** Cognitive inertia is the brain's energy budget; information hoarding can be individually rational; execution worship was virtue when execution was expensive. They are not evil—obsolete. They were optimal for a dead cost structure, and that cost structure is gone. Insults don't transform organizations; changing the environment that makes these behaviors individually optimal does.

## What to Do Monday Morning (principal-leader view)

Run a **same-question test**—forty minutes, no consultants:

1. **Sample**: Pick three teams actively using AI. Do not warn them in advance.
2. **Same question**: Ask each the identical question: "For what your team produces with AI, what counts as good enough?"
3. **Grade**: Compare the three answers. Three different standards—or no answer at all—and you are at the chasm's edge. Tools are amplifying three contradictory judgments.
4. **Check the ruler**: Ask each team: "Who set this standard, and when was it last revised?" Answers like "always this way" or "each person decides" sample both experiential authority and information hoarding.

Use results for diagnosis, not blame (blame is the old feedback-avoidance reflex)—to answer one question: do we fix tools first, or standards? Individuals and teams can ask themselves the same two questions. Those who cannot answer are not failures; the system has not given them executable standards. Charge that to the system, not the person.

## Quotable Lines

1. AI does not amplify efficiency. AI amplifies what already exists in your organization—including chaos.
2. A hundred people wielding a hundredfold execution, sprinting in a hundred directions—that is not transformation. It is accelerated disintegration.
3. The abundance of tools exposes the poverty of judgment.
4. Early adopters buy vision; the early majority buys certainty—and those two consensuses do not bridge on their own.
5. AI-native is not a tool upgrade. It is a rewrite of the organization's default behavior.
6. AI will not eliminate human inertia. It will give inertia stronger execution.
7. Variance is not in the tools. Variance is in the organization.
8. Replacing genes is cheaper than replacing people; replace people without genes and newcomers match the old cohort in three months.
9. Execution was never the problem; what directs execution is.
10. The chain moves at the speed of its slowest link, and execution is often no longer the slowest link.
11. Two weeks for one wrong plan becomes two days for five wrong plans.
12. Human nature is inertial; organizational evolution is the fight against inertia.
13. Make the right path easier than the wrong path, and let inertia work for you.

## Connections to Adjacent Chapters

- Carries forward from Chapter 1: execution is nearly free, yet the company has not grown stronger.
- Hands off to Chapter 3: the gap is organizational, but organizations are made of people—the thing that has not zeroed out gets a name at the personal level first: adaptive insight.

## Chapter Acceptance Self-Check (against chapter acceptance criteria)

1. Claim restatable in one sentence ✓, and an inference from the core claim (when tools are abundant, missing organizational judgment drives failure).
2. Whiteboard framework ✓ (hundred arrows / hundred targets vs. hundred arrows / one target + five gene replacements + adoption lifecycle backdrop).
3. External comparisons and data ✓: winner side E4 Dancing with Love (company figures flagged); loser side E7 Klarna (official release + Bloomberg) + MD Anderson (audit-grade); aggregate E2 RAND (qualifiers included) + MIT NANDA; brain 2%/20% energy (Raichle et al.).
4. Thirteen quotable lines ✓.
5. "What to Do Monday Morning" same-question test, four steps + individual note ✓.
6. Fluency ✓: per current `prose-standard.md`, primarily whole-sentence rewriting; framework orientation kept; no literary-quota rewrite.
