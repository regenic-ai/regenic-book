# Chapter 1: Execution Approaches Zero

Status: Completed (v3.0, 2026-09-21; rewritten from the Chinese authority in English voice; open to ongoing public revision)

**Claim: When AI drives down both the cost of execution in digital knowledge work and the cost of retrieving knowledge that already exists, the hierarchies, approvals, reports, and output metrics built around "people are slow and know less" lose the economic case they were drawn on.**

---

## 1. What the same capability now sells for

What AI will eventually be able to do is still argued. The price change already on the record is more settled.

Stanford HAI, in *AI Index 2025*, picked a fixed capability line: a score of 64.8 on the MMLU general-knowledge benchmark, the level the report calls GPT-3.5. In November 2022, the cheapest way to reach that line cost $20 per million tokens. By October 2024, Gemini 1.5 Flash 8B crossed the same line at $0.07. The gap from start to finish is more than 280-fold (Stanford HAI, 2025).

Hold capability fixed, and the number that matters is the lowest price of that capability, not the list price of the newest model. Mix those two and you mix a rise in ability with a fall in price. For an organization, the useful number is what it costs today to finish this job.

That is still not the total price of a job. The AI Index measures API token prices, weighted three to one between input and output. Connecting the system, preparing the material, protecting the data, checking the result, reworking it, and taking responsibility are not inside the $0.07. From the dates the report lists, one thing is firm: the call price of a fixed benchmark capability has already fallen by more than two orders of magnitude.

The fall also shows up in real work. Noy and Zhang ran a preregistered randomized experiment in 2023 in which 453 college-educated professionals completed occupational writing tasks: press releases, analysis plans, short reports, and sensitive emails. The group allowed to use ChatGPT finished in 40% less time on average, and independent graders scored the quality 18% higher (Noy and Zhang, 2023). The tasks were short, and the background material was limited, so the result does not stand in for a merger memo or a production system. It does show that what fell was not only an API price list. Part of real execution time fell with it.

The venture firm a16z ran a different capability line in 2024: an MMLU score of at least 42, looking only at OpenAI, Anthropic, and Meta Llama models served by third parties, with input and output prices taken as a simple average. When GPT-3 crossed that line in November 2021, it cost about $60 per million tokens. Three years later, Llama 3.2 3B cost about $0.06. a16z summarized the roughly thousandfold change as a tenfold yearly drop in the price of a fixed capability, and called it LLMflation. The same report lists the limits: MMLU may be contaminated by training data, some scores used multiple attempts, and the model set is incomplete. It is an industry observation, not a law that will pay out every year from here (a16z, 2024).

Epoch AI then widened the frame to six benchmarks and several fixed capability thresholds, again weighting input and output three to one, and leaving out reasoning models that generate large volumes of intermediate tokens. Annual rates of decline ranged from 9-fold to 900-fold depending on the task and the threshold, with a median of 50-fold. Restrict the set to models after January 2024 and the median is about 200-fold. The fastest rates mostly come from less than a year of data, and the researchers are explicit that they may not last (Epoch AI, 2025).

Stanford HAI's 280-fold, a16z's tenfold a year, and Epoch AI's median of 50-fold a year are not three independent studies confirming the same curve. The AI Index worked with Epoch and extracted one fixed capability line. Epoch reports a distribution across six benchmarks and several thresholds. a16z used its own model set, a simple average of prices, and a lower MMLU bar. What the three methods share is the direction: when you hold capability fixed, the lowest call price of digital ability is falling fast.

API prices and the occupational writing experiment measure two different things. One is the call price of a unit of capability. The other is the time people spend on a particular task, and the quality of what they produce. They point the same way. They cannot stand in for each other, and they cannot be multiplied into a company's total cost reduction.

I call this **execution approaching zero**. Execution is not becoming zero as a mathematical fact. The describable, repeatable, checkable steps inside digital knowledge work are getting rapidly cheaper at the margin. First drafts, collation, formatting, code generation, and first-pass translation no longer have their price set only by human hours. The machine's call price has entered the quote.

A fall in execution cost, on its own, is an automation upgrade. What shakes the other base under jobs, hierarchies, and business models is the same fall in the cost of retrieving knowledge that already exists.

## 2. Finding what already exists is getting cheaper too

A senior employee's value usually has two parts. One is reliable judgment on a new problem. The other is a set of knowledge paths accumulated over years: which document to open, which colleague to ask, which precedent to cite, which way of writing to reuse. Those two were hard to pull apart, because getting the paths used to take seniority.

A workplace study pulled them apart once. Brynjolfsson, Li, and Raymond followed 5,172 customer-support agents at a Fortune 500 software company. The company rolled out a generative AI assistant in waves. The system read the live conversation and suggested replies in real time. Agents could ignore or edit the suggestions, and a person still owned the whole exchange.

After the rollout, issues resolved per hour rose 15% on average. Most of the change sat with less experienced and lower-skilled agents, whose resolutions per hour rose about 30%. Agents who had used the AI for two months reached the level of agents who had not used it and had been in the job more than six months. For experienced high performers, the gains were small, and the quality of some conversations even fell a little. The researchers also found the effect strongest on problems that were uncommon but well represented in the training data (Brynjolfsson, Li, and Raymond, 2025).

The same results show that solutions a support agent once had to get by training, search, and asking around now arrive while the question is still open. Common practice that used to take extra months on the job is compressed into a live suggestion. The researchers attribute part of the gain to generative AI capturing and spreading the behavior of high performers.

The study does not count how many minutes of searching the agents saved. It watches a later result: speed, quality, and how long a newcomer takes to walk the experience curve. So it is field evidence that getting existing practice has gotten cheaper, not a decline you can paste onto every industry.

In this study, a lower cost of knowledge acquisition looks like a shorter road from asking a question to having a usable starting point. Knowledge itself did not get cheaper, and facts did not become true on their own. Retrieval, first screening, summarizing, finding similar cases, and assembling existing practice used to be done step by step by people. A model can now do the first pass. A newcomer no longer has to know whom to ask, or the exact title of a document, before seeing a candidate answer.

The support study comes from one company and one kind of work. It does not extend on its own to a medical diagnosis, a legal opinion, or a scientific discovery. The tool spreads practice already present in the training data and in past conversations. Faced with a genuinely new problem, a wrong old practice, or thin material, it can also spread the old error faster. A person still has to go back to the source, check the facts, understand the conditions of use, and own the consequence of taking the suggestion.

**Retrieving existing knowledge** is not creating new knowledge. Finding a paper more cheaply still leaves the work of understanding it. A cheaper precedent still has to be checked against this case. A cheaper feasible plan still has to be judged worth running. "Knowledge is free" collapses retrieval, understanding, fit, and a value judgment into one phrase.

Even that is enough to reach the org chart. Companies used to pay a great deal of time for getting work done, and a seniority premium for knowing where to look. The first now has a model you can call. The second has a conversational front door. When both costs fall at once, a business that charged for them, as Chegg did, feels the pressure first.

## 3. Chegg: a business that sold both old scarcities

Chegg's core learning service long sold two things: worked-out answers, and help a student could reach when stuck. The first is finished execution. The second shortens the distance from a question to an answer. Both used to be worth money, because a student doing the solving, searching, and screening needed time, and needed to know where to look.

The first full term after ChatGPT launched, that pricing case began to loosen. On the May 2023 first-quarter call, then-CEO Dan Rosensweig said the company had not seen a clear effect on new-account growth at the start of the year, but that from March student interest in ChatGPT had risen sharply and new-customer growth was already affected. Chegg stopped giving full-year guidance and offered only the next quarter (Chegg, 2023).

Two years later the filings give a fuller result. Chegg's 2025 net revenue was $376.9 million, down 39% from 2024, with Academic Services, the bulk of revenue, down 43%. The company ran two restructurings, in May and October 2025, cutting about 640 people, roughly 56% of headcount at the time (Chegg, 2026).

Those figures do not prove that ChatGPT alone caused Chegg's decline. The 10-K also lists intensified competition, shifts in search traffic, and changes in student behavior. Google AI Overview sits in that list: the search page itself now shows the question and an answer, so a user no longer has to click through to Chegg. The company is explicit that the change cut site traffic and subscription conversion. Generative AI supplied a substitute for the answer and changed the door through which students find answers, acting on both the product of execution and the path of knowledge acquisition.

Chegg's decline also cannot be blamed on a failure to use AI. The 10-K describes its machine learning, generative AI, and a personalized learning assistant in some detail. When a general model and a search front door can supply a good-enough answer at a lower price, the scarcity Chegg used to sell gets thinner. Putting AI into the existing product can cut Chegg's own costs. It does not automatically restore the reason a customer paid for the old value.

The same structure lives inside companies: turning material into a report, locating a precedent, producing a first draft from a template, collecting information and handing it up a chain. Those jobs will not vanish on the same day, and a great deal of checking, choosing, and accountability remains in them. But if a role's main premium is "I can produce it" or "I can find it," the basis of that price is already moving.

A fall in cost does not, by itself, imply a layoff. A task usually mixes execution, review, and responsibility. A model can draft a contract; it cannot take signing authority. It can collate supplier files; it cannot take the consequence of a bad choice off the procurement lead. It can generate a support reply; it cannot decide what promise may be made to a customer. Split those pieces and you can tell hours that are getting cheaper from duties that still need to be strengthened.

Chegg's product and delivery are highly digital. It can stand as a sample inside the boundary of execution approaching zero. It cannot stand for construction, nursing, delivery, or heavily regulated industries.

## 4. It starts in digital knowledge work

The more a job meets three conditions, the earlier it enters this range: the inputs are mainly digital, the output can be delivered digitally, and quality can be checked in a digital environment. Occupational writing, first-draft code, collation, translation, standardized design, online support, and routine legal documents all sit close to that range. They are not necessarily simple. They are easy to describe as material a model can take in and a result it can send back.

Physical execution is not on the same curve. AI can generate a construction plan; it cannot lay the bricks. It can plan a delivery route; it cannot put the package at the door. It can collate a medical record; that does not complete a surgery. Robots are advancing too, but they are constrained by hardware, by what changes on site, by safety requirements, and by capital spending. Token prices cannot be substituted for that decline.

Regulation and accountability do not fall in step with model prices either. Audit workpapers can be assembled faster; the audit procedures still have to be completed as the law requires. A contract can be drafted faster; the signer still bears the obligation. Drug files can be compiled faster; approval standards and clinical responsibility do not cancel. The reviews, records, and accountability that institutions require are often there precisely to stop "done fast" from replacing "done right."

Even when a job is entirely online, the model call price is not the whole cost. A company still has to bring internal material into the system, control permissions, check for hallucinations, handle exceptions, maintain the process, and correct the result when it is wrong. Those costs may fall as the tools mature. They do not vanish because a million tokens now cost a few cents.

The same digital task has at least three kinds of cost: the model generating a result, systems and people checking it, and an accountable person finally signing. Call prices cut the first kind directly, and they may cut some of the second. The third is set by business risk, legal liability, and the cost of being wrong. It does not fall in step with tokens. Execution approaching zero first describes the change in that first kind of cost.

"Approaching zero" names a direction, not an endpoint. The marginal price of repeatable execution in digital knowledge work is falling fast. It first changes the mix of hours inside a task, and only later may it change roles, departments, and companies. It does not mean all human work is heading toward free.

Inside and outside the boundary still affect each other. Bricklaying has not approached zero; quantity takeoffs, drawing checks, progress summaries, and first-draft contracts can get cheaper first. Surgery has not; record summaries, scheduling, follow-up copy, and imaging pre-screens can move first. Last-mile delivery has not; route analysis, exception sorting, and support handling can be automated first. Physical industries will not move at the same speed. They will reallocate cost first in the digital steps around the physical work.

Different speeds also sit inside one company. Equipment installation on a plant floor may barely change, while procurement comparisons and maintenance logs move first. Clinical responsibility in a hospital stays put, while record filing and follow-up text get cheaper first. A departmental average hides that split. The useful unit of analysis is the task and the step.

An industry label is not enough to judge the speed. "Manufacturing is far from AI" and "execution in a software company is already free" are both too coarse. The useful unit is each step: what goes in, what comes out, how it is checked, who is accountable. Only the part that meets the conditions enters execution approaching zero.

Old organizational structure is cost-constrained too. Hierarchy, approvals, reports, and KPIs all solved real and expensive problems. The two costs they were built to handle are no longer at the old price.

## 5. Why old organizations grew around slow people who knew less

Hierarchy, meetings, and approvals are arrangements for managing limited people under a given technology and a given set of costs. The costs include waiting and retelling. The return is a larger organization that can still be managed.

A person can hold only so much information at once, and one accountable leader cannot keep a high-frequency conversation with hundreds or thousands of people. Organizations therefore use hierarchy to shrink what each person has to handle: the front line compresses information for a manager, the manager compresses it again upward, and decisions travel the other way, decomposed layer by layer. Each extra layer adds waiting and loss in the retelling. When information could only be carried by people, that cost bought a manageable scale.

Many of the middle roles in that hierarchy are also how people find what they need. A newcomer usually depends on a manager's experience to get the files, the process path, and the reasons things are done this way. Higher rank usually means contact with more departments and a wider range of information, so "knows more" and "has the right to decide" get tied together. When information cannot reach everyone directly, concentrating it in a few people can lower the cost of everyone else finding it.

Approval is a different ledger. One pass of execution used to take many people many days, and a wrong direction burned a large amount of labor. Queuing a plan so that a few experienced people could gate it was often cheaper than doing it wrong and starting over. The economic case for approval is that trial and error is expensive and reliable judges are few, not the form itself. As long as the first cost sits well above the cost of waiting, another gate can pay.

Weekly reports, standing meetings, and status reviews then sync context. Project facts sit in different people's inboxes, documents, and memory, so a meeting becomes a timed way to pull the facts together. Ten people in a one-hour meeting costs ten person-hours. When shared records are thin, that cost buys a common picture of the project.

KPIs solve for visibility. Managers cannot watch continuously how much real value each person creates, so pieces completed, hours online, lines of code, response speed, and call counts become proxies. They are not value. They stand in for value when better observation is missing.

The parts of these structures that dispatch execution and carry information share two premises: human execution is expensive, and getting and moving information is expensive too. Hierarchy, approvals, reports, and metrics may also carry accountability, risk control, and legal duty. What AI changes is the part of their case that held only at the old cost.

That part of the case can be checked in the work record. Facts are already in a shared system, yet they are still rolled up by hand, layer by layer. A plan can be redone in hours, yet approval still queues for days. Piece counts keep rising, and customer results do not move with them. Those gaps are observable signals that the old cost structure is still running.

A job title is not enough to decide who stays. The same manager may forward information, train newcomers, handle conflict, make trade-offs, and own the result. AI lowers the cost of the first two. That does not make the last three disappear. The useful unit of reorganization is the duty, not names like "middle management" or "approval."

When frontline facts can be recorded, retrieved, and summarized continuously, a layer whose job is only to collect, compress, and forward information no longer has its old cost advantage. The organization still needs people who own results, handle conflict, and make trade-offs. It does not necessarily still need as many people to move information from one layer to the next. Management does not vanish. Carrying information and managing begin to come apart.

In some digital flows, a first-draft plan that used to take days now takes minutes, and the relation between the cost of trial and error and the cost of waiting changes with it. Approval still fits irreversible, high-risk, and regulated decisions. But if redoing the work is cheaper than queuing, sending a reversible trial down the same long chain is no longer reasonable.

Structure also changes in sequence. Flows with clear inputs and outputs, reversible trials, and results that are easy to check will shorten hierarchy and approval first. Flows that involve personal safety, major capital, legal liability, or an irreversible promise will move much more slowly. They face the same technology. They do not face the same risk ledger.

When project records can be queried at any time, a meeting no longer has to carry all of the information sync. Meetings that work through disagreement, choose a goal, and assign responsibility still matter. Reading progress around the table, repeating facts that already exist, gets harder to justify as worth everyone's same hour. Reports will not vanish either, but they need to move from "saying again what happened" toward "pointing to the facts that changed the judgment."

When AI can generate reports, code, images, and replies quickly, the correlation between output quantity and value weakens further. An employee can produce dozens of plans in a day; that does not mean any of them should run. Support can send more replies; that does not mean more problems got solved. Keep rewarding people with piece counts and hours, and the organization will produce the numbers a machine can amplify most easily.

Old structure "beginning to fail" does not mean firing every manager, deleting every approval, cancelling every meeting, and dropping every metric. It means those arrangements can no longer justify themselves only by "we have always needed them." The case to recalculate is the risk they intercept, set against the waiting, retelling, and distortion they create.

The same relation looks like a pyramid. The two blocks at the base are execution cost and knowledge-acquisition cost. Both are moving down, so the old structure above has to be recalculated. A fall in those two costs does not include judgment, or the responsibility of owning the result.

![After execution cost and knowledge-acquisition cost fall, the old organizational structure has to be recalculated](/figures/ch01-pyramid-en.svg)

*Figure: two old costs are falling, so hierarchy, approvals, reports, and metrics have to be recalculated. Judgment and accountability were not delivered with the call price.*

Inside the same job, hours spent generating a first version fall, and the weight of checking, releasing, and owning the result rises. Duolingo offers an observable sample of that shift in roles. Chegg offers the contrast of a business still charging for the old scarcities.

## 6. Duolingo and Chegg: two moves on the same curve

At the end of 2023, the language-learning company Duolingo reduced its external contractors by about 10%. The company said no full-time employees were affected, and that both the end of contracts and a change in production process were reasons. A spokesperson said the company no longer needed as many people to finish some of the work, and that part of the change came from AI (Bloomberg, 2024; TechCrunch, 2024).

The change concentrated in course content and translation. Duolingo's public account is that GPT can generate or translate sentences, and human experts check whether the output meets teaching quality and the CEFR levels. One of the contractors affected called the people who remained "content curators," saying their job was to check AI-generated content and then release it. That name comes only from the person who used it. What the company has confirmed is the process: the machine produces first, and a person accepts against an explicit standard.

In April 2025, CEO Luis von Ahn made the direction sharper in an all-hands memo: the company would gradually stop using contractors for work AI can already do, and teams would get added headcount only when they could not automate further. The memo also said that turning toward AI did not mean the company would stop caring about full-time staff, and that the aim was to put people on more creative problems (Duolingo, 2025).

That same week, the company said that with generative AI, a shared content system, and internal tools, it had launched 148 courses, mainly at beginner level. Duolingo said the first 100 courses had taken about twelve years, and this batch of nearly 150 had taken less than a year. On the company's own figures, the speed of course expansion changed by an order of magnitude. An independent quality assessment is still missing (Duolingo, 2025).

In 2025, Duolingo's revenue was $1.0376 billion, up 39% year over year, with 12.2 million paid subscribers at year-end, up 28% (Duolingo, 2026). Those figures can show that revenue and paid users were still growing while the production method changed. They cannot prove the growth came from AI or from the contractor adjustment.

Both companies are building AI products. The difference that matters is where AI sits in the value chain. Duolingo's process has AI generate content, and people own course goals, quality standards, and review. Chegg's main revenue is still heavily exposed to the falling price of answers, explanations, and the knowledge front door. The two companies differ in market, in what users need, and in where traffic comes from, so the comparison is of mechanism, not a controlled causal experiment.

So execution approaching zero first asks where people should remain, not how many to cut. If the answer is still "repeat the first draft," the role will keep taking price pressure. If the answer is set the goal, supply the necessary material, write the acceptance standard, handle exceptions, and own the result, then people have not left. The center of gravity of the work has moved.

One side keeps people on review and accountability. The other still charges for the old scarcities. The same question then sits in front of both: if machine execution is cheaper, and existing knowledge is easier to get, why does the judgment that remains get more expensive?

## 7. Why judgment gets more expensive

"More expensive" here is a relative price. It does not mean every manager will get a raise, and it does not mean every human judgment will cost more cash. As execution and retrieving existing knowledge take a smaller share of total cost, deciding what to do, how to accept the work, and who owns the result become more likely to be the bottleneck on the chain.

MMLU scores, token prices, and the support experiment do not answer those questions. An MMLU score can say what level a model reached on a set of items. It cannot tell a company which market to enter this year. The price per million tokens can price a call. It cannot tell a team which output may go to a customer. A support assistant can spread good practice from the past. It cannot guarantee that the old practice fits a case that has never appeared.

A model price list now includes cheaper and cheaper "how to do it," and some of "where to look." It does not separately sell "what is worth doing." It does not promise to choose the acceptance standard for the organization, and it does not take the consequence off the person who signs. That gap is the starting point for the two unifications in Chapter 4.

Execution is already cheap, and companies have not obviously gotten faster, which means the bottleneck has moved. Where did it move?

Chapter 2 keeps following that bottleneck on the organizational floor. Many companies have already bought the models, opened the accounts, and run the training, and employees really are faster. Why has company-wide efficiency still not changed by an order of magnitude? The tools have entered the organization. That has not, by itself, made the organization AI-native. Where is the dividend in the cost curve stuck?

## What to Do Monday Morning (principal-leader view)

Make a **repricing table**. Do not start by changing headcount. Split four ledgers first:

1. **Revenue.** Write down, line by line, why the company gets paid. If customers mainly pay for "making a first version" or "finding an answer that already exists," mark that slice of revenue, and record how far general models and AI search already go.
2. **Tasks.** Pick the three processes that use the most people. Write each step as input, output, how it is checked, and who is accountable. For steps whose inputs and outputs are digital and whose results can be checked cheaply, list current human time against model time.
3. **Org lines.** On the org chart, separate three kinds of duty: moving information, generating the product of execution, and making a judgment and owning it. The first two are getting cheaper. The third cannot be waved through because the first two got cheaper.
4. **Waiting.** Take the longest approval chain. At each node, compare the loss the gate prevents by catching an error with the cost of queuing, reporting, and explaining the same thing again. Record the answer. Do not delete nodes yet.

The point of the table is not to prove how many people AI can replace. It is to find where the organization is still running at the old price. Individuals can use the same test: once first drafts and retrieval are done by a machine, the release standard, the basis of the judgment, and the person accountable still have to be explicit.

## Quotable Lines

1. Once the same capability sells at a new price, the jobs and processes drawn at the old price have to be recalculated.
2. AI lowered the cost of finding an answer. It did not take on the cost of believing one.
3. Hierarchy, approvals, reports, and KPIs did not suddenly get stupid. They are losing the price premises they were built on.
4. Duolingo changed where people sit. Chegg lost the scarcity of what it sold.
5. Repricing is not a layoff plan. It first asks the organization to separate execution, review, and accountability.
6. "How to do it" and "where to look" keep getting cheaper. "What is worth doing" is not on the model price list.

## Connections to Adjacent Chapters

- Continuing from the preface: the two costs falling together, tested with price series, a workplace study, and a company comparison, plus a boundary around digital knowledge work.
- Handed to Chapter 2: if the tools are already this cheap, why have most organizations not seen an order-of-magnitude change?
- Planted for Chapter 4: why does judgment get more expensive? This chapter only names the relative bottleneck. The two unifications wait.

## Chapter Acceptance Self-Check (against chapter acceptance standards)

1. Claim restatable in one sentence ✓: two costs fall, so structures built around "people are slow and know less" lose their old price case.
2. Seven-section spine and whiteboard figure ✓: price evidence → knowledge acquisition → Chegg → boundary → old structure → Duolingo/Chegg → the judgment question. The pyramid keeps "judgment and accountability" and does not preview Chapter 4's frame.
3. Evidence caliber ✓: Stanford HAI is one capability line extracted with Epoch, not a third independent study; a16z and Epoch thresholds, model sets, price weights, and limits are kept separate; Noy/Zhang and the QJE support study carry execution and retrieval of existing practice.
4. Main comparison and boundary ✓: Duolingo's role change, company-reported throughput, and public results are stated separately; Chegg uses the 2023 call and the 2025 10-K, without pinning the whole decline on ChatGPT. One main sample on each side; no invented cross-company median.
5. Claim boundary ✓: approaching zero applies first to repeatable execution in digital knowledge work; physical execution, regulation, accountability, and last-mile delivery are outside the same rate of decline.
6. Chapter handoff and action ✓: receives the preface, hands off to Chapter 2; Section 7 only raises the relative bottleneck; Monday list keeps four steps plus the personal test.
7. Fluency ✓: rewritten in English voice from the Chinese authority; current prose-standard.
