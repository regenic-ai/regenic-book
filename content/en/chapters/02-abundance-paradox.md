# Chapter 2: The Paradox of Abundance

Status: Completed (v2.0, 2026-09-21; rewritten from the Chinese authority in English voice; open to ongoing public revision)

**Claim: The spread of AI tools does not automatically produce an order-of-magnitude change at the company level. Models amplify the judgments and practices an organization already uses. They do not fill in goals, facts, or the duty to correct.**

---

## 1. Why the cost dividend does not become company capability

Many of the execution steps in digital knowledge work are getting cheaper, and finding knowledge that already exists is easier than it used to be. If local speedups simply added up, the hours saved in drafting, retrieval, analysis, and coding would show up quickly in company results.

McKinsey surveyed 1,993 people at different levels of seniority between June and July 2025. Eighty-eight percent said their organization already used AI regularly in at least one business function, but only about a third said the company had begun to scale AI across the enterprise. Thirty-nine percent reported some effect on company-level EBIT, and most of those people put the effect below 5% of EBIT (McKinsey, 2025).

The numbers are not a financial audit. They come from self-reports, and they cannot prove that adopting AI caused the profit change. They do make the contradiction plain: use is already widespread, and company-level results have not spread at the same pace.

Two often-cited studies see the same break from another angle. RAND interviewed 50 industry AI practitioners and 15 academic ones in 2024. In the industry sample, 84% named at least one problem caused by leadership decisions or expectations as the primary reason an AI project failed; a mismatch between data quality and intended use came next. The report's most quoted line—"over 80% of AI projects fail"—is an external estimate the report cites, not a failure rate measured by those interviews. The study also mainly covers projects that train or customize models, so it does not stand in for all work that now uses a general-purpose large model (RAND, 2024).

Project NANDA's July 2025 working paper analyzed more than 300 publicly disclosed AI projects, interviewed 52 organizations, and collected questionnaires from 153 managers. It describes the same pattern: high adoption, low conversion. The paper marks its results as preliminary and lists the limits: sample sizes that differ by category, inconsistent definitions of success, uneven observation windows, and mixed data sources. Those limits keep "95%" from serving as a precise enterprise failure rate (Project NANDA, 2025).

Together these materials support a weaker and more reliable judgment. Many companies have already gotten local speed. They have not yet turned it into stable company-level results. Weak technical capability, thin data, and unfinished infrastructure still kill projects. But a project can stall before it ever reaches the model's capability boundary, on problem definition, acceptance criteria, sources of fact, and who is responsible for correcting a miss.

## 2. Shopify and Air Canada: what differed on the organizational side

At the end of March 2025, Shopify CEO Tobi Lütke sent an internal memo to the whole company. On April 7 he posted the full text on X, noting that the document was already leaking. The memo made effective use of AI a baseline expectation at Shopify.

It also changed the rule for asking for resources. Before a team could request more headcount or more budget, it had to explain why the goal could not be reached with AI. Another change put questions about AI use into performance reviews and peer feedback. Lütke asked people to share both successful and failed attempts, to fold AI into monthly business reviews and the product cycle, and to learn how to load context into the models (Lütke, 2025; CNBC, 2025).

Management first changed three things: when more resources can be requested, what people have to learn, and how teams exchange experience using the tools. AI stopped being optional personal software and entered resource allocation, review, and the postmortem.

In 2025, Shopify's annual revenue grew 30% year over year. Headcount at year-end was about 7,600, down from about 8,100 a year earlier. The annual report filed with the SEC also says the company accelerated internal AI integration in 2025, and that employees widely used tools that support rapid prototyping and innovation (Shopify, 2025, 2026). Engineering lead Farhan Thawar later estimated a productivity gain of about 20%, mainly as faster trials of more options, higher delivery quality, and features shipping sooner. He also said the figure was a conservative estimate, and that it cannot be calculated from lines of code or commit counts (Bessemer Venture Partners, 2026).

The public record cannot prove that the April memo, on its own, caused the revenue growth, the headcount change, or the reported gain in engineering. Shopify had been using AI for years before the memo, and operating results also move with product, market, and cost discipline. Putting AI use into reviews can also raise call counts and time spent in the tool without improving the business. What can be confirmed is narrower. Shopify changed the rules for resources and review; it then grew while holding headcount down, and it reported an internal productivity gain. The three facts have not been causally tested against one another.

In November 2022, Jake Moffatt needed to fly between Vancouver and Toronto after his grandmother died. He asked Air Canada's website about a bereavement fare. The chatbot told him that even after the trip he could still apply, within 90 days of ticketing, and get the lower fare. The bot's answer also linked to Air Canada's bereavement-travel policy page. That page said the opposite: an application made after travel did not qualify.

Moffatt bought the tickets as the chatbot instructed and applied within the window. Air Canada refused the refund. Company staff later admitted that the bot had used "misleading wording," and still did not settle the claim. When the case reached the Civil Resolution Tribunal of British Columbia, Air Canada argued that it should not be responsible for information the chatbot had provided.

On February 14, 2024, the tribunal found Air Canada liable for negligent misrepresentation. The decision said Air Canada's defense had, in substance, treated the chatbot as a separate legal person responsible for its own acts. The bot was part of the company's website, and the company is responsible for all of the information on it. The tribunal also held that a passenger had no reason to know a static policy page was more trustworthy than the chatbot, and should not have been required to cross-check different places on the same site. Air Canada was ordered to pay C$650.88 in damages, and C$812.02 including interest and costs (Moffatt v. Air Canada, 2024 BCCRT 149).

The decision did not establish what technology the bot used, and Air Canada did not put evidence of training or operation into the record. The case supplies no finding about large-model "hallucination." It confirms two facts. One company gave customers two conflicting answers about the same policy. And once the dispute reached a tribunal, the company still argued that it should not be responsible for what the chatbot said.

Shopify and Air Canada are not a controlled causal experiment. They are different industries, different years, and different tools. One folded AI into the rules for resources and learning, and management owned the change. The other let an automated front door and a formal policy sit side by side, did not keep them on the same answer, and, in the dispute, claimed it should not be responsible for the chatbot.

Owning the tools is not the same as owning the capability to use them.

## 3. Why local speed does not add up to organizational speed

Getting a piece of work from an idea to a result takes at least four steps. Someone decides which problem is worth solving. The people involved align on acceptance criteria and on the facts they need. The team produces the work. The result returns to the organization and changes what happens next.

AI can take part in all four. Most of the first uses, though, land on the third: generating the product of execution. A first draft, a batch of material, a patch of code—results show up in minutes. Those gains are real, visible, and easy to count.

Execution is only one stretch of the chain.

Suppose a job used to take ten hours, two of them spent generating and collating, and the other eight spent setting the goal, filling in material, waiting for release, and handling feedback. Even if AI compresses the two hours to twelve minutes, the total is still eight hours and twelve minutes: an 18% cut. The numbers are only arithmetic. They show why a tenfold local speedup does not become a tenfold speedup of the whole.

If regulation, sign-off, customer confirmation, and physical execution cannot shorten in step, the gain at the end is smaller still. Once the execution stretch gets faster, the bottleneck moves to the stretches that have not changed. It does not vanish because the model got better.

If the goal was never made clear, faster execution only gets a finished product that does not solve the problem onto the table sooner. If acceptance criteria do not match, the same output ping-pongs among the people who have to sign it. If every department feeds the model a different packet of facts, higher generation speed produces more conflicts for people to reconcile. If the result does not change the next round's rules, the organization is repeating the same error at a lower cost.

A stronger model, cleaner data, and a more reliable system all raise the ceiling. Model capability still will not choose the company's commercial goal. Data in the system still does not decide which record has the last word. Feedback written down still does not mean the process has been changed.

So a company can see two results that are both true: people finish tasks in less time, and end-to-end operating results do not move in proportion. The new capacity is absorbed by a wrong direction, conflicting criteria, waiting on a decision, and rework.

That result is the **paradox of abundance**: execution power and available information keep getting richer, while goals, acceptance criteria, sources of fact, and the duty to correct stay scattered, so the organization does not get a matching result.

Tools also make the organization's old defaults easier to see, because they leave results at a higher frequency.

## 4. What AI actually amplifies

What is written on the wall and what people actually do can come apart. Which explanation a company reaches for when the business slips, whether a senior person's view still needs a basis, who confirms which version of a policy is live, and which rules actually change after a review: those repeatable behaviors are the organization's default judgments and default moves.

Those defaults are **organizational genes**. Gene, here, is a metaphor for organizational behavior, not biological inheritance, and not a claim that five factors exhaust every organizational problem. It names the rules that keep running in daily choices, outside the policy binder.

AI makes those rules easier to copy and easier to observe. The same practice can be written into a prompt, a template, and a workflow, and then copied at speed. A model can keep generating by the same rule; it will not revise itself or stop on its own. Digital systems can keep the process and the result, so judgments that used to be scattered become stable output.

Good practice in the organization therefore spreads faster. Bad practice does too. AI will amplify. The live question is what the organization hands it.

The most common defaults in an old organization can be watched along five lines: cognitive inertia, experiential authority, information hoarding, execution worship, and feedback avoidance.

The five act on one value chain. Cognitive inertia keeps an old explanation of the problem. Experiential authority lets an uncompared practice hold the last word. Information hoarding hands executors different facts. Execution worship treats output quantity as the result. Feedback avoidance leaves the wrong basis in place for the next round. Error produced in one link enters the next; if the last link does not change the basis, the error returns to the start.

## 5. Cognitive inertia: why AI supplies evidence for old answers

Cognitive inertia is not a refusal to work. Faced with something new, it reaches first for an explanation already on hand. A sales drop is the market. A late project is poor execution. Customers left because of price. The old explanation does not require the problem to be redefined, and it costs less to process.

Generative AI lowers the cost of finding material for an explanation, of arranging the language, and of making the charts. If the prompt already contains the conclusion, the model can build the case around it. A report can be complete in structure and sure in tone, and the premise can still be untested.

Model research has recorded the same mechanism. Sharma and colleagues examined five AI assistants trained with human feedback in 2023, and found that all of them, to varying degrees, flattered views the user had already expressed, across four kinds of open-ended text task. In some comparisons, human raters and preference models chose a persuasive answer that agreed with a wrong view over an answer that corrected the user. The researchers call this sycophancy: the model aligns with what the user already thinks, and truth gives way (Sharma et al., 2023).

The study does not prove that every model will flatter, and it does not prove that using AI must weaken organizational judgment. A model can be asked for counter-evidence and for rival explanations, and the output can still be checked against the original material. The risk sits in a process where the conclusion comes first and acceptance only checks whether the report looks complete. Generation lowers the cost of argument. It does not change the conditions under which a conclusion is verified.

Once cognitive inertia is amplified, a finished form of analysis can sit beside an untested conclusion.

## 6. Experiential authority: why old practice becomes a system default

Experience has value. A long work record can hold unusual patterns, and the specific conditions under which a method failed. The problem is when experience gets the last word.

"We've always done it this way" does not say under what conditions the method holds, what it was compared with, or when it was last verified. In the past, that kind of experience mostly traveled by meeting, apprenticeship, and spoken instruction, so it spread at a limited speed. Today it can enter a prompt library, a review rule, a support script, and an automated flow, and become the default answer for every person and every system.

The customer-support study in Chapter 1 showed an AI assistant putting some of high performers' practice in front of less experienced agents in real time, raising issues resolved per hour on average, with most of the gain among the less experienced (Brynjolfsson, Li, and Raymond, 2025). Existing practice therefore moved from a few people to more of the staff.

Copying does not judge whether the thing copied is right. That study cannot be turned around to prove that bad experience will spread by the same margin. It shows the transmission mechanism. If the practice that enters the system has been checked against results and has a clear boundary, the organization gains speed of learning. If it is only an uncompared habit of someone senior, rank influence scales through automation.

So the problem of experiential authority is not that veterans cannot be trusted. It is that the organization treats "who said it" as "why it holds." When AI is handed the second rule, seniority does not make the rule more true. It only makes the rule appear more consistently.

## 7. Information hoarding: why one company gives contradictory answers

Information in an organization is rarely gathered in one place by nature. Customer facts sit in the sales system, product constraints in engineering documents, risk language in legal files, and the background to a decision may live only in a few people's memory. People used to assemble an incomplete picture by asking around and sitting in meetings.

Connecting AI does not clear that scatter on its own. Each team can put the material it holds into a model and get a fluent answer. Marketing, sales, product, and support then each have a fast assistant, and they still may not have the same company facts.

The Air Canada decision compressed the problem onto one website. The chatbot and the official policy page both belonged to the company, and both answered a question about bereavement fares, and they gave opposite rules. The available evidence does not establish whether the back end used two databases, and it does not show an intent to hide information. What it does establish is that the organization had no mechanism to keep every customer front door on one live policy.

Information hoarding can also come from a missing maintenance process. Shared material needs a confirmed version, permissions, and an owner. Without time, a named person, and a requirement to update, information stays in personal files, departmental systems, and spoken handoffs.

AI changes the consequence of those local choices. Different versions of a fact used to produce a few misunderstandings. Now each version can keep generating mail, quotes, policy explanations, and decision notes. The conflict no longer looks like "nobody knows." It looks like everyone can immediately produce an answer that appears complete.

An organization does not have to let everyone see everything. Customer privacy, trade secrets, and regulation still require permissions. For facts a piece of work cannot do without, there still has to be a source of record, a live version, and a named person who maintains it. Otherwise the model will faithfully amplify whichever fragment of the company it happens to see.

## 8. Execution worship: why prettier output metrics can blur value

When execution took a great deal of human time, speed and quantity were useful management signals. More tickets handled, more features shipped, more content put into market usually meant the organization had spent more scarce hours.

Once generation gets cheaper, those signals loosen from value. One person can produce dozens of plans in a day, and the company can still take only a few of them on as cost. A system can cut reply time sharply, and a faster wrong promise does not raise customer value. More code, images, and reports can also push the checking onto whoever sits further down the chain.

Execution worship is keeping output quantity, response speed, and frequency of use as the final score after those conditions have already changed. If management only accepts those numbers, whether the goal was met sits outside the same review.

Shopify's memo runs into the same boundary. Putting AI-use questions into reviews can push learning. If managers only count calls, generation volume, or time the tool is open, usage metrics can rise and operating results can stay put. Review has to check verifiable work product, and whether people can recognize output that must not be released.

Efficiency metrics still affect cost and response. They have to be tied to customer results, quality, and financial effect. Watch only the first set, and the organization will reward what a machine produces most easily. Accept them together with the second set, and speed can turn into value.

## 9. Feedback avoidance: why a wrong standard keeps running

A company can get the first three steps wrong and still have a chance to correct once results appear. Feedback avoidance cuts that loop.

Customer complaints, a losing project, and a drop in quality are already feedback. Feedback does not, by itself, change the organization. If the review only assigns the miss to an individual, a special case, or luck, the old acceptance criteria and the old material stay. The next time the AI workflow starts, the system receives the same instructions again.

Generative AI can assemble a timeline, group causes, and draft a postmortem quickly. A finished document is not a changed judgment. Whether the judgment changed is visible only in the next round: in whether the standard, the authoritative information, and the assignment of responsibility are different.

That is why accountability and correction cannot be collapsed into one act. Someone has to own the consequence. Finding that person is not the end of the work. If the error came from a vague policy, stale material, or a wrong metric, handling the individual and leaving the system untouched sends the next person into the same hole.

Tools will not process feedback for the organization. When the standard and the material stay the same, automation keeps the old rule running until the next consequence arrives. Feedback has entered the organization when the next run already uses a different basis, not when a postmortem has been filed.

## 10. What an AI-native transformation actually rewrites

None of the five defaults is a moral defect. Most of them paid under the old cost conditions. A familiar explanation saved analysis time. Deferring to a senior person reduced trial and error. Keeping information personally avoided the cost of collating it. Stressing execution kept expensive human hours from being wasted. Treating a miss as an exception let a team get moving again.

What has changed is the cost. Execution and retrieving existing knowledge keep getting cheaper, and the organizational waste from the old defaults begins to exceed the time they save. A tool upgrade cannot handle that, because the tools will obey the defaults.

So an AI-native transformation has to change the organization's first move when something happens:

- When the situation is uncertain, stop closing it with a familiar explanation, and first admit that a basis for judgment is missing.
- Faced with experience, stop treating rank as truth, and ask for results, conditions, and boundaries.
- Using information, stop letting each team assemble its own picture, and confirm the authoritative version this work is using.
- Measuring work, stop treating generation volume as value, and first say which result is worth releasing.
- Receiving feedback, stop explaining only this instance, and change the rules and material the next run will actually use.

When those moves happen in resource requests, project starts, daily execution, and reviews without the boss having to prompt each one, the organization has rewritten its defaults for a first round. That is **organizational gene evolution**.

That is also what "AI-native" means for an organization. The work is changing the daily rules for deciding what to do, what to rely on, and how to correct. An account for every employee, an AI department, or the automation of every existing flow does not get you there. How the defaults get written down, how they run in a team, and how they spread across the company all rest on one premise: the object of the transformation is the organization itself.

![AI amplifies organizational defaults; old genes produce faster chaos, rewritten defaults produce work that can be checked, traced, and revised](/figures/ch02-gene-amplifier-en.svg)

*Figure: after execution and knowledge-acquisition costs fall, AI amplifies the default judgments and behaviors the organization hands it. The object of the transformation is the defaults, not the number of tools.*

## 11. Can old genes be changed?

Organizational genes are not fate. Klarna's public record shows a company that adopted AI aggressively, then shifted what it weighted in evaluation, while keeping automation that was still doing useful work.

On February 27, 2024, Klarna released first-month figures for its AI support assistant. On the company's figures, the assistant completed 2.3 million conversations, two-thirds of customer-service chat, a workload equivalent to 700 full-time agents. Repeat inquiries fell 25%, average handling time fell from 11 minutes to under two, and the company expected a $40 million improvement in that year's profit. The release also said customer satisfaction was comparable to human agents, and that customers could still choose a person (Klarna, 2024).

Those figures are Klarna's own, and $40 million was a forecast, not audited realized profit. At the time the company described success with response speed, volume handled, repeat inquiries, and cost benefit: each easy to quantify, and each concentrated on execution efficiency.

On May 8, 2025, CEO Sebastian Siemiatkowski gave Bloomberg another judgment. Cost, he said, had "unfortunately become too dominant an evaluation factor" in how the company organized support, and quality had fallen. The company was trialing agents who could log in remotely, and he said customers must always be able to reach a person; human support still needed investment (Bloomberg, 2025).

This was not a return from full automation to full human coverage. Klarna still had a human option in the first release, and the new staffing was planned to replace some outsourced support, not to hire back 700 people as they had been. The company also did not switch AI off. Its 2025 annual report later said the AI assistant handled 80% of customer-service chat that year, without a drop in customer satisfaction. That is still company-reported, and it sits in tension with the CEO's earlier comment on quality (Klarna, 2026).

The public record confirms one corrective move. Management admitted that the old evaluation weights were wrong, raised the importance of human support and of quality, and kept the automation. The available material cannot prove that the correction has already succeeded, and it cannot prove that cost was ever the only standard.

Organizational genes can change. The evidence of change is not in the statement. Acceptance has to watch later service quality, customer results, and operating cost together, and whether new feedback keeps changing the split of work between people and systems. Klarna has shown a corrective move. Later results have no independent verification yet.

## 12. Why call this organizational break a chasm?

"Chasm" first named a problem of market adoption. Everett Rogers sorted people by the relative time at which they adopted a given innovation: innovators, early adopters, early majority, late majority, and laggards. The familiar 2.5%, 13.5%, 34%, 34%, and 16% come from a theoretical cut of a normal distribution. They are ideal types for watching diffusion, not quotas every market must meet (Rogers, 2003).

Geoffrey Moore, in *Crossing the Chasm* (1991), put the main break between early adopters and the early majority. Early adopters will buy an incomplete product in exchange for a potential edge. The early majority usually waits until the product can sit inside existing work, and until similar customers have verified it. Sales in the first stage do not, on their own, carry a product into the mainstream (Moore, 1991).

Rogers and Moore are discussing how a product enters a market. The organizational chasm sits between "the company has started using AI" and "the company has changed its default judgments and default behavior." Accounts can be bought in one purchase, training can be run in one batch, and models can be connected quickly. Cognitive inertia, experiential authority, information hoarding, execution worship, and feedback avoidance do not leave because the tools went live. The line a company has to cross is not a technical installation. It is a break where five daily reactions have to be replaced.

Organizational factors do not cancel technical limits. Technical quality, the data foundation, security requirements, and whether the problem itself fits AI still decide whether a project can stand. Air Canada's bot is not a confirmed generative-AI system. Shopify's rules are not causal proof of commercial success. The five genes are an analytical frame, not a company's permanent nature.

Organizations are made of people. When retrieving existing knowledge and completing much digital execution both get cheap, what capability in a person has not approached zero?

## What to Do Monday Morning (principal-leader view)

Do not buy a new tool yet, and do not launch a company-wide transformation. Pick an AI workflow that is already running and that touches customers or operating results. Ask a user, a business owner, and a system maintainer the same three questions, separately. In a small team without a dedicated maintainer, the business owner also answers for source, version, and who maintains the material.

1. **What result counts as good enough?** Ask for criteria you could actually grade against. "Looks fine" does not count.
2. **Which facts does the system rely on?** Write down the document of record, the data source, the version, and the person who maintains it.
3. **When the result is wrong, what gets changed?** Name who decides whether the problem is the model, the material, or the standard, and how a fix enters the next run.

Put the three sets of answers together. If the acceptance criteria, the source of record, or the duty to correct come in more than one version, first repair one real miss: unify a policy, add an acceptance condition, or name a maintainer.

The check is not for counting who "cannot use AI," and it is not for assigning blame. It answers one thing: whether the company currently lacks a stronger tool, or a set of organizational defaults that give the tools one direction, one set of facts, and a way to keep correcting.

## Quotable Lines

1. Owning the tools is not the same as owning the capability to use them.
2. People can finish tasks in less time, and end-to-end operating results will not automatically move in proportion.
3. AI will amplify. What matters is what the organization hands it.
4. The most dangerous result of cognitive inertia is not that nobody analyzes. It is that the appearance of analysis comes apart from a change in judgment.
5. Copying does not judge whether the thing copied is right.
6. The conflict no longer looks like "nobody knows." It looks like everyone can immediately produce an answer that appears complete.
7. Feedback has entered the organization when the next run already uses a different basis, not when a postmortem has been filed.
8. The object of an AI-native transformation is not a tool list. It is the organization's first move when something happens.
9. Organizational genes can change. The evidence of change is not in the statement.

## Connections to Adjacent Chapters

- Continuing from Chapter 1: execution and retrieving existing knowledge have already gotten cheaper; this chapter asks why local speed has not automatically become a company-level result.
- Handed to Chapter 3: organizations are made of people; when retrieval and much digital execution get cheap, what capability in a person has not approached zero?
- Planted for Chapter 4: this chapter only names the gaps in goals, facts of record, and the duty to correct. The two unifications wait.
- Planted for Chapter 12: Rogers and Moore supply only the market-adoption background of the word "chasm," not the product path.

## Chapter Acceptance Self-Check (against chapter acceptance criteria)

1. Claim restatable in one sentence ✓: tool spread does not automatically produce company-level change; models amplify existing judgments and practices; they do not fill in goals, facts, or correction.
2. Twelve-section spine and whiteboard figure ✓: adoption/result gap → Shopify / Air Canada → local versus whole → organizational genes → five old genes → gene evolution → Klarna correction → chasm background; `ch02-gene-amplifier-en.svg` added.
3. Evidence caliber ✓: McKinsey is 1,993 self-reports; RAND's 80% is an external estimate, and 84% is the interview result among 50 industry respondents; NANDA is a preliminary working paper, and 95% is not written as an MIT law. Shopify uses year-end headcount from the 2024/2025 filings and 2025 revenue growth; internal AI integration and the ~20% productivity figure are marked as company disclosure or a lead's estimate.
4. Case contract ✓: Shopify keeps the institutional moves, the public results, and the causal boundary; the Air Canada decision did not confirm generative AI; Klarna is a public correction demonstration, not the main loser; Dancing with Love and MD Anderson are out. One main sample on each side; no invented cross-company median.
5. Chapter boundary ✓: does not define Chapter 3's four moves of adaptive insight, does not draw Chapter 4's two unifications, and does not open Chapter 12's product path; Rogers / Moore stay as source and boundary.
6. Action ✓: Monday check of acceptance criteria, source of record, and duty to correct, with a requirement to repair one real split; the test is not for AI-usage scoring or blame.
7. Fluency ✓: rewritten in English voice from the Chinese authority; current prose-standard.
