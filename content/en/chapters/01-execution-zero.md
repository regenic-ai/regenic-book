# Chapter 1: Execution Approaches Zero

Status: Completed (v2.4, 2026-08-04, about 8800 words; passed the acceptance on 2026-07-25; v2.2 aside scaffolding cleanup and pyramid figure inserted; v2.4 prose-standard fluency pass; English terminology sync (principal-leader), open to ongoing public revision)

**Claim: When AI simultaneously reduces execution costs and knowledge acquisition costs, organizational structures such as hierarchies, approvals, reporting, and KPIs built around "people do things slowly and know less" begin to fail as a whole.**

---

## 1. Your Most Expensive Purchase Is on Sale and Clearance

Open your company's income statement. Over the past two decades, no matter what industry you were in, the biggest expense was almost always the same: labor costs. Cutting one level further, the bulk of that cost is not judgment but execution—the man-hours that turn a decision into documents, code, reports, contracts, design drafts, customer service conversations, and marketing copy. Nobody thought there was anything wrong with this, because the entire business world rests on the same assumption: execution is expensive and must be sourced, organized, and supervised with care.

That assumption is failing—and at a measurable rate.

Stanford University's Human-Centered Artificial Intelligence Institute (Stanford HAI) tracked a curve in the *AI Index* annual report: the inference cost to reach GPT-3.5 capability (MMLU benchmark 64.8) fell from $20 per million tokens in November 2022 to $0.07 in October 2024—about one two-hundred-eightieth of the original (Stanford HAI, 2025). The shape matters more than the endpoint: $1.80 in August 2023, $0.18 in June 2024, then further decline at similar multiples, year after year. This is not a one-time sale but a ramp; you did not miss the bottom—you are standing on a conveyor belt that keeps moving down. a16z calls this LLMflation: the price of a fixed capability level falls roughly tenfold each year. Epoch AI's task-level estimates are more aggressive: a median decline of fiftyfold per year; looking only at data after January 2024, the median rises to two hundredfold per year. (The report uses medians rather than averages—different tasks range from ninefold to nine hundredfold per year, and averages get hijacked by extremes.)

Two boundaries are part of the claim.

First, what collapsed is the *price per unit of capability*, not the sticker price of the latest flagship. The strongest models are still not cheap; flagship list prices fall only about five- to tenfold per year—far slower than the "equal capability" curve. What matters to organizations is never the flagship price but the price of *the ability to do the job*. An analysis report that took a three-person team a week two years ago costs close to zero to invoke at that capability level today. The gap does not come from who can afford the most expensive model—everyone can buy one—but from who realizes first that what took a team yesterday is a single call today.

Second, this curve covers only the digital world. Section 4 draws the physical and regulatory boundary.

In the language of the CEO: **Your most expensive purchase used to be human time, and now it is on sale and clearance.** When a core factor of production falls by an order of magnitude every year, every institution designed around the old price—however elegant—must be recalculated. The steam engine redrew the factory; the shipping container redrew trade; this time, execution itself is being redrawn.

Three direct corollaries, each one level deeper than "cost reduction and efficiency":

- **Any long-term pricing of execution you do today will be wrong.** Three-year contracts, five-year budgets, and headcount plans negotiated at today's cost all rest on a price that shrinks by an order of magnitude every year. Planning should take not today's price but the slope of the ramp.
- **"Wait until the technology matures" has nowhere to wait.** The ramp is continuous; there is no station called "mature." Every year you wait, competitors compound another year of advantage.
- **The money saved is not profit—it is migration budget.** If resources freed by falling execution costs flow only back to the income statement, you sell off the window for organizational evolution. That money should go to the two things still rising in price: standards and context.

## 2. The Other Base: Knowing Where to Look

If execution alone got cheaper, the shock would be smaller. What makes this a geological shift is the second base being pulled away at the same time: the cost of knowledge acquisition.

How much have organizations paid to "know"? Senior employees cost more than newcomers; much of the premium buys not judgment but *knowing where to look, whom to ask, and what the industry norm is.* Databases, industry reports, consultants, training courses—all buy the same thing: shortening the distance from not knowing to knowing. That distance once supported several trillion-dollar industries—publishing, consulting, vocational education—essentially all arbitrageurs of knowledge-acquisition cost.

The search-engine era collapsed that distance once: from "know that person" to "find that document." The AI Q&A era collapses it another order of magnitude: from "find that document" to "ask that question." Retrieval, screening, reading, summarizing, and cross-checking are becoming internal steps in a single call, no longer billed to you separately.

The two bases are not parallel cost lines; they are the two load-bearing points of the old organizational structure. Execution was expensive, so work was finely divided, scheduled, and supervised. Information was scarce, so it moved through hierarchies, was priced by seniority, and synced in meetings. **Execution approaching zero is not an efficiency headline—it is organizational geology.** Remove one base and the structure can lean for a while; remove both at once and every beam above must be recalculated.

One company ran that calculation for everyone—using its own life.

## 3. The First Specimen: A Company That Sold Both Bases

Chegg is an American online education company that went public in 2013. In one sentence, its main business: a paid answer library plus on-demand experts—students pay up to $19.95 a month for pre-written textbook exercise answers and a network of experts available on demand.

In this chapter's terms, Chegg sold exactly the two bases being removed. The pre-written answer library sells the *product of execution*; the on-demand expert network sells *knowing where to look and whom to ask.* It did not use too little AI, and it was not disorganized. Its business model stood directly under the zeroing curve.

Remote learning during the pandemic pushed it to the peak: in February 2021, the stock was $113.51, market cap about $14.7 billion. Twenty-one months later, ChatGPT launched.

On the May 2023 earnings call, CEO Dan Rosenzweig acknowledged that ChatGPT was eroding subscriber growth. The company withdrew full-year guidance; the stock fell 48% that day. There has been no real rebound since: cumulative subscriber losses exceed 500,000; Q4 2024 subscribers were 3.6 million, down 21% year over year, full-year revenue down 24%; 441 layoffs in 2024 (about a quarter of staff), another 22% cut in May 2025, another 45% in October, with announcements citing "the new realities of AI." Market cap bottomed around $156 million—a 99% drop from the peak (Chegg filings; WSJ; CNBC).

The sharpest detail is not the fall but a comparison: Chegg itself uses AI. Filings show that with AI, capital spending on content production fell 56% year over year while user questions rose 2% in the same period. Same technology—they were not bad at using it. **Victims and beneficiaries use the same technology; the difference is only which side of the zeroing curve your business model stands on.** For Chegg, the question was not whether the tools worked but whether what it sold was still scarce. **If your business model is to sell execution, AI is not your tool—it is your substitute.**

This is not an "AI destroys everything" horror story. Chegg is a clean specimen: a business with almost no physical layer, no regulatory buffer, built purely on "execution + knowing"—what happens when both bases are pulled away. Your company is probably not Chegg, but several departments almost certainly run daily work that looks like its business model.

Look inward: mini-Cheggs usually take three forms:

- **Report factory**: roles that regularly produce weekly reports, monthly reports, and analysis briefs. If the value proposition is "turn data into readable prose," that is an internal pre-written answer library.
- **Human search desk**: legal precedent lookup, investment research comparables, procurement vendor comparison. If the moat is "knowing where to look," it sells Chegg's second service.
- **Template output line**: contract first drafts, bid frameworks, asset revisions. Clear input, clear output, execution by template—the form the zeroing curve absorbs fastest.

These three forms should not lead straight to layoffs—that reads the ledger too shallowly. They should lead to repricing: what becomes valuable in these roles is shifting from *output* to *release*—judging whether work passes and by what standard to release it.

## 4. Boundaries of the Claim: Where Zeroing Holds

"Zeroing" is one of the most misread words in this book. Without clear conditions, the claim slides into slogan.

Execution zeroing applies first and mainly to **digital knowledge work**: writing, code, analysis, design, customer service, legal documents, reports, translation. What they share is digital inputs and outputs, with quality checkable in the digital world. Chegg's answer library, Duolingo's course translation, marketing's first-draft copy—all sit in this set.

Physical execution has not zeroed. A wall on a construction site, a cut on an operating table, last-mile delivery—AI has not made them much cheaper. Regulatory processes have not either: audit, compliance, licensing—cost structures set by institutions, not technology. Construction sites and operating rooms do not refute a claim about knowledge work; the collapse speed of knowledge work does not scare every industry equally.

Inside and outside the boundary are not insulated. Every physical execution is wrapped in a digital shell: scheduling, documentation, decisions, quality checks, settlement. That shell is knowledge work, and zeroing is pushing inward along that interface. A construction company's bricklaying cost has not fallen, but drawing development, quantity takeoffs, progress reporting, and contract review are approaching zero. A hospital's surgery has not zeroed, but records, imaging pre-screening, and follow-up notes are. Speed differs; direction is the same.

This book's claims default to holding within this boundary. If your organization sits mainly outside it, the timetable is looser—but the direction unchanged. Competitors will evolve first on the digital shell, then meet you in the physical world with saved cost and shorter cycles.

## 5. Organizational Archaeology: Why Every Line Exists

Put the org chart on the table and ask a question most CEOs rarely ask seriously: what problem was each line, box, and process invented to solve?

The answer is uncomfortable: **almost everything was designed for "people do things slowly and know less."**

**Hierarchy is an information relay tree.** A person can effectively manage only so many direct reports (textbooks say 7±2; in practice rarely more than 10) and can hold even less information in real time. Organizations grow tree-shaped: information rolls up from leaves to root, compressed and re-told at each layer; instructions roll down from root to leaves, translated and amplified at each layer. Hierarchy is not power hunger—it is an engineering compromise for "people know less": when there is no better way to sync, a tree is the best way to connect ten thousand people. The cost is in every textbook—loss at every relay, delay at every rollup. Organizations have paid that coordination tax for a century because there was no alternative.

**Approval is a queue for judgment.** Judgment is scarce, so it concentrates in a few vetted people and matters line up to use them. Every node essentially says: the cost of trial and error exceeds the cost of waiting. When execution was expensive, that almost always held—a bad plan burning three person-weeks was worth two days in the director's inbox. Approval is not bureaucracy invented for its own sake; it is rationing in an era of judgment shortage.

**Reporting is human-powered context sync.** Weekly reports, standing meetings, performance reviews, alignment sessions batch-sync context scattered across minds using the most expensive medium—human time. Inefficient, lossy, high-latency: ten people in a one-hour meeting costs ten person-hours, and what gets synced still decays with attention. When context lived only in heads, there was no other medium. The meeting room was the old organization's only highway for information sync.

**KPIs are stand-ins for value.** Managers cannot see everyone's execution or directly measure "value," so they approximate with countable output: pieces, hours, lines, tickets, response time. Not because managers are foolish—because in an era of poor observation, you measure what you can measure and hope it correlates with what you care about.

These four are not bureaucratic disease. In their time, each was the optimal solution. Mockery is easy and cheap; the people who designed them made the right engineering call under their constraints. A theme this book will return to: **standards have boundaries; when the environment shifts, yesterday's optimum becomes today's liability—and the hardest organizational act is admitting it.**

With both bases pulled away, recalculate each one:

- **Hierarchy**: frontline context can appear losslessly and instantly to anyone; the tree still pays coordination tax on information that is no longer scarce—and the tax rate has not changed.
- **Approval**: redoing a plan went from three person-days to three seconds; trial and error is no longer costly—but the gate still charges the old price; two days in queue now costs orders of magnitude more than the risk it intercepts.
- **Reporting**: what meetings sync could live in shared human–AI context, queryable anytime, never decaying—yet the organization still spends everyone's same hour on sync a machine can do in real time.
- **KPIs**: when AI can generate unlimited "output," counting output loses meaning. Pieces, lines, hours can all be maxed out; the assumed correlation between output numbers and real value breaks.

**Every line on the org chart was drawn to manage expensive human execution; once execution is free, those lines become decoration one by one.**

A pyramid, two bases—execution cost and knowledge-acquisition cost—pulled away at once; the superstructure hangs. Not everything suspended is scrap. Three things hang mid-air with no taker—exactly what AI cannot take: **choosing the goal, adopting the standard, and unifying context.**

![Pyramid with both bases pulled out: execution and knowledge-access costs dashed empty, superstructure suspended on goals, standards, context](/figures/ch01-pyramid-en.svg)

*Figure: org-chart lines were drawn for expensive human execution; what hangs are the three things AI cannot take.*

## 6. Industry Microscope: Translation

Macro curves numb; Chegg can be dismissed as bad luck. Turn the microscope to a full industry: translation—where execution zeroes hardest.

It is almost a pure sample of digital knowledge work: text in, text out, quality checkable digitally, no physical buffer, no license moat. If zeroing has a ground zero, it is here.

Ground zero already has first-hand job records. In late 2023, Duolingo cut about 10% of external contractors in two waves (August and December), mainly course translation and writing roles; the company confirmed to Bloomberg that GPT-4 could already generate translation and course content. Those who remained changed shape: one or two per team, titles shifted to "content curators"—review AI output, then release.

That is the claim in micro-slice: **executors become reviewers.** Machines take output; what stays on humans is judgment—whether it passes and by what standard to release. A four-person translation team becomes two curators: execution hours vanish; judgment hours remain. That shape shift will replay in every category of digital knowledge work.

Two company types stand on the same collapse band. One is like Chegg: business model built on selling execution and selling "knowing"—bases pulled, business zeroed. Another made the opposite bet. Transn (传神语联), a long-established Chinese language services company, sits at the center of the collapse band. It did not train translators to work faster—that is high jump on a sinking floor—but rewrote the company into another form: a Chief AI Officer (CAIO), an AI Native decision committee, a rule that no meeting proceeds without a runnable demo, and "energy gold" so internal AI apps grow by market rules. Founder He Enpei's line works as a footnote: "**Rather than wait for employees to become AI experts, let the organization grow AI capability.**"

That sentence bets not on people learning tools but on organizational form changing. Popular narrative: AI is here, run training fast. This chapter: the problem was never employee tool fluency but every line of the org still drawn at the old price of expensive execution. In industries where the execution layer is absorbed first, the survivors who moved earliest were not those who executed faster but those who admitted earliest that "execution is no longer valuable" and rewrote themselves as "standards + context."

Credit where due. Transn's mechanisms are cross-reported in multiple outlets and hold up; operating results—whether revenue and profit improved because of them—have no third-party data yet, so this chapter cites mechanisms only, not outcomes. Chegg's side is filing-grade and complete. The two are different industries; what compares is mechanism, not performance: both in digital knowledge work, one sells "execution + knowing," one rewrites it as a cost item. A same-caliber loser inside translation (a translation company that held to execution-mode and declined) has not been found yet; until then, "self-transformers live better" stays a hypothesis to test. This chapter's claim does not rest on that comparison—cost curves and Chegg are independent evidence chains.

## 7. The Opposite of "Thinking Is Free": Why Judgment Gets More Expensive

In popular talk, some summarize this wave as "AI makes thinking free." This book says the opposite—and that opposite is the starting point for everything that follows.

What actually got cheaper? Two things: **how to do it** (execution) and **where to look** (knowledge acquisition). Writing code, building reports, checking cases, finding precedents—all are approaching zero. Together they are not thinking. Thinking has a core left: **what is worth doing**—choosing one option among infinite possibilities, excluding all others for it, and bearing the cost of that exclusion. AI has not discounted that core by a cent.

If anything, it got more expensive. Scarcity is relative. When execution took three months, mediocre judgment could hide behind long execution; when results arrived, nobody remembered who decided. When execution takes three hours, judgment stands naked in the result: decide in the morning, see outcomes by afternoon; within a week the whole company can see whose judgment was worth something and whose was only rank echo. The cheaper execution gets, the larger judgment's share of total cost—and the higher the relative price of getting it wrong. **When "how to do it" and "where to look" both get cheap, the only thing left expensive is "what is worth doing."**

Chegg fits the same structure: not short on execution (twenty years of answer library), not short on knowledge access (expert network)—short on judgment about *what is worth doing* around November 2022. When what you sell starts going free, the answer is not "sell harder." Judgment errors always cost; execution zeroing just compressed the accounting period from years to quarters.

This is not a technical limit but a definitional one: if AI someday fully decides what is worth doing for you, the company is effectively theirs. As long as the company is yours, "what is worth doing" stays on your ledger—and now it is the only line still rising in price.

So the sharper question surfaces: execution is cheap, tools are affordable to all—why have companies that bought every AI tool not seen order-of-magnitude efficiency gains? Money spent, tools deployed—where did the dividend promised in the curve go?

The next chapter answers.

## What to Do Monday Morning (principal-leader view)

Draw your company's **seismic zone map** in four steps:

1. **Mirror first**: Start with the Chegg question—how much revenue sells "products of execution" or "knowing where to look"? That slice is the red zone of the business model. Most companies are not Chegg, but almost every one has a product line or department that is a mini-Chegg.
2. **List execution work**: Have each department list every "pure execution" role and step—clear input, clear output, digitally verifiable quality. For each, mark how much today's AI can do; mark red if it can do 80% or more.
3. **Audit org-chart lines**: For every line on the chart, ask: does this manage execution or judgment? Lines that manage execution lose their reason as the red zone grows; lines that manage judgment are the skeleton of the future org.
4. **Count approval gates**: Pick the longest approval flow and ask at each node: is the risk this gate intercepts still more expensive than the gate itself today? The nodes where the answer is no are idle approval gates.

This map does not require cutting anything today—it is the base map for what follows. Individuals and teams can ask too: how much of my work sits in the red zone? Does my value hang on execution or judgment? If the team went from four people to two "curators," would I be one who stays?

## Quotable Lines

1. Every line on the org chart was drawn to manage expensive human execution—once execution is free, those lines become decoration one by one.
2. Your most expensive purchase used to be human time, and now it is on sale and clearance.
3. Execution approaching zero is not an efficiency headline—it is organizational geology.
4. When "how to do it" and "where to look" both get cheap, the only thing left expensive is "what is worth doing."
5. If your business model is to sell execution, AI is not your tool—it is your substitute.
6. Victims and beneficiaries use the same technology; the difference is only which side of the zeroing curve you stand on.
7. Standards have boundaries: when the environment shifts, yesterday's optimum becomes today's liability.
8. The cheaper execution gets, the more exposed judgment quality becomes.
9. The meeting room was the old organization's only highway for information sync.

## Connections to Adjacent Chapters

- Continuing from the preface: execution really is approaching zero (this chapter supplies curves, specimens, and boundaries).
- Handed to Chapter 2: if the tools are this strong and everyone can afford them, why have companies that bought the tools not gotten stronger?

## Chapter Acceptance Self-Check (against chapter acceptance standards)

1. Claim restatable in one sentence ✓, and a corollary of the core claim (cost zeroing → structural failure).
2. Whiteboard framework ✓ (pyramid with both bases pulled, three suspended items above).
3. External comparison and data ✓: winner side E3 Transn (mechanisms verified) + E14 Duolingo job evidence; loser side L8 Chegg (filing-grade verified); caliber differences stated explicitly; statistics report medians (Epoch AI). Same-caliber loser inside translation still to be added, marked as hypothesis to verify.
4. Nine quotable lines ✓.
5. "What to Do Monday Morning" four CEO steps + personal note ✓.
6. Fluency ✓: English terminology sync (principal-leader); per `prose-standard.md`, tour-guide asides, method-demo parentheses, and mid-argument bookshelf self-reference removed; sources moved to in-text author–year or end-of-sentence parenthetical cites.
