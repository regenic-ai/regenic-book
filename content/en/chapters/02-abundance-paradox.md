# Chapter 2: The Paradox of Abundance

Status: Completed (v1.4, 2026-07-31, about 8900 words; Acceptance passed 2026-07-25; v1.2 Added market side scissor difference forward response (pointing to Chapter 8 Attention Scarcity); v1.3 Five new general gene segments are added in the fifth section (energy saving/inertia - "The essence of human beings is inert, and the essence of organizational evolution is to fight against inertia"); v1.4 aside scaffolding cleanup; frozen after reading the whole book)

**Claim: There is no order of magnitude change in the efficiency of a company that buys all AI tools, because the gap is not on the technical side, but on the organizational side: everyone has unlimited execution power, but is executing their own different judgments. **

---

## One, fourteen months, two announcements

On February 27, 2024, Klarna, a Swedish financial technology company, issued a press release that shook the stock price of the entire customer service industry: its AI customer service assistant in cooperation with OpenAI has been online for one month and has handled 2.3 million conversations, accounting for two-thirds of all customer service conversations, "equivalent to the workload of 700 full-time customer service staff"; the problem resolution time has been reduced from 11 minutes to less than 2 minutes, repeated consultations have dropped by 25%, and profits are expected to increase that year. $40 million. The company immediately suspended hiring for more than a year, reducing its headcount from about 5,000 to about 3,500. If performing zeroing required a poster, this would be that poster.

On May 8, 2025, the same CEO Sebastian Simiatkovsky said something else to Bloomberg: "Cost has unfortunately become too dominant an evaluation factor when we organize this, and the result is lower quality." Klarna announced the re-recruitment of human customer service to ensure that complex and high-risk scenarios can always find people.

Putting these two announcements side by side, let’s first eliminate two lazy interpretations. The first interpretation is that AI is not good. This is not true: at the time of the retracement, AI was still responsible for the equivalent work of about 853 customer service personnel, more than during the high-profile period; what Klarna removed was not AI, but the "cost-only" ruler. The second interpretation is that Klarna is stupid. This is even more untrue: it is one of the companies in the world that uses AI the most, fastest, and most thoroughly.

The real interpretation lies in the grammar of the CEO’s statement. He didn't say "the model wasn't good enough", he said the "evaluation factors" were wrong. In the language of this book, this is called **misplacement of judgment standards**. When "cost" becomes the only ranking basis, AI pushes the company to exactly the wrong place with impeccable execution. Execution is not a problem, it never has been; the thing that guides execution is.

The tools for execution are more abundant than ever before, but the output of the organization has not changed by orders of magnitude. **The abundance of tools exposes the poverty of judgment**. The same scissors will cut again on the market side: the abundance of products creates a poverty of attention.

## 2. Median reason for failure: not on the technical side

Klarna isn't alone, it's just the most high-profile. There are overall data on this phenomenon.

A 2024 study by the RAND Corporation, "The Root Causes of AI Project Failure," interviewed 65 data scientists and engineers with more than five years of experience. The report stated: "According to some estimates, more than 80% of AI projects fail—twice the failure rate of IT projects that do not involve AI." (To explain the quality of this set of numbers: This is a qualitative study, 80% The original article carries the qualifier "according to some estimates." Please read it as "the vast majority of failures" rather than a statistic accurate to the single digit; the argument in this chapter only requires the former.) Updated data on generative AI: MIT's NANDA project in 2025 found that about 95% of enterprise GenAI pilots did not produce measurable income statement returns.

More valuable than the failure rate is the ranking of the causes of failure. RAND summarized five root causes: First, stakeholders have a misunderstanding of "what problem to solve" and distorted communication; second, the organization lacks the data accumulation required to train the model; third, chasing the latest technology itself instead of solving real problems; fourth, insufficient investment in infrastructure to support the project; fifth, using AI on problems beyond its current capabilities. Looking at them one by one: the first, third, and fourth items are purely organizational issues, the second item is half an organizational issue (data has not been accumulated because no one regarded "leaving usable data" as a standard in the past), and only the fifth item can barely be considered a technical boundary issue.

In other words, the median cause of failure is organizational, not technical. Before the project was lost to the model, it was first lost to the different opinions on the issue of "what are we doing?" The number one cause of death was not even "getting the wrong answer", but "not answering the right question."Note what this conclusion means for position one. Your procurement department can buy the exact same tools as your competitors: the models are public, the APIs are public, and the prices, as mentioned in Chapter 1, are still collapsing. There is no moat to speak of on the technical side, and everyone is standing on the same starting line. But the variance of the results is surprisingly large: with the same tool, some companies get orders of magnitude changes, while most companies get nothing. **The variance is not in the tool, the variance is in the organization**. This gap is not on the technical side, but on the organizational side.

## 3. A more traditional sample: an audit report purchased for US$62 million

Klarna at least succeeded in a high-profile way. The version of more organizations is that the money has been spent and the story has not even begun.

In 2012, the world's top cancer research institution, the University of Texas MD Anderson Cancer Center, signed a contract with IBM to use Watson to create "oncology expert consultants" to teach AI to assist cancer treatment decisions and match clinical trials. This was the most luxurious "buying tool" of that era: top institutions, top suppliers, and top consulting (PricewaterhouseCoopers was responsible for the business plan).

In February 2017, an audit report from the University of Texas System put a damper on the program. Here are the numbers: The contract was renewed 12 times without competitive re-bid; cumulative expenditures were about $62.1 million, including about $39 million to IBM and about $23 million to PricewaterhouseCoopers; and an endowment deficit of $11.59 million due to spending of unpaid donations. Multiple charges were set just below dollar thresholds that did not require board approval; IT governance processes were bypassed entirely. The system has never been used clinically and has never been piloted outside the hospital. The dean resigned as a result.

There are two details in this specimen that are worthy of being framed and hung in the conference room of every transformation project.

First, the audit report specifically stated: "This result should not be interpreted as an evaluation of the scientific basis or functional capabilities of the system." This sentence is equivalent to the auditor personally taking the pot off the technical head. What they mean is: What we are reviewing is not whether Watson will work, but how your organization spends money, makes decisions, and governs it. **Organizational failure, certified by the auditor's seal. **

Second, the last technical straw that broke the project: In 2016, the hospital changed its electronic medical record system from ClinicStation to Epic, and Watson never learned to read the new format. An AI that cost $60 million died because it didn’t share the same set of context as the organization. **Literal "contextual inconsistency" killed the project**. The second part of this book will talk about the word "shared context" repeatedly, and MD Anderson demonstrates its opposite in the most expensive way.

Putting two samples into the same microscope: Klarna died from misplaced judgment standards (taking cost as the only evaluation criterion), and MD Anderson died from a double lack of standards and context (governance standards were bypassed, and machines and organizations did not share context). The two institutions are radical and traditional, financial and medical, one has been successful and the other has never been successful; but the pathological slides are the same. This is not a coincidence, this is a genetic disease.

## 4. Why is "no order of magnitude change" instead of "no change"

Before dissecting the genes, let’s pinpoint the shape of the paradox. Companies that buy AI tools are usually not without gains: front-line employees write weekly reports faster, customer service responds faster, programmers write sample code faster, and 20 to 30% speed improvements at the individual level can be seen everywhere. The paradox is that when these local improvements are added together, the overall output of the company does not change by an order of magnitude. The money was spent, and I felt the speed increase, but I couldn't find it on the report.

The reason is a simple system law: the speed of the chain is determined by the slowest link, and execution is often not the slowest link**. A company's value output is a chain: judging what to do → aligning everyone's understanding → executing → revising based on feedback. AI increases the speed of the third link ten times. If the first, second, and fourth links remain motionless, the speed increase of the entire chain will be embarrassingly small, just like raising the speed limit on a certain section of the highway from 120 to 1,200. The entire journey time will almost remain the same because you are stuck at the toll station.

What’s worse is that the local effect improvement is not only diluted by the bottleneck, but also **eaten** by three ways:

- **Rework eats**: The faster you do work in the wrong direction, the more rework you have to do. In the past, it took two weeks to make one wrong plan, but now I have to make five wrong plans in two days. The burden of error correction has become heavier.
- **Wait to eat**: Execution is accelerated, but decision-making is not accelerated. The time the output is queued in the boss's to-do list replaces the time spent doing the output in the past. The bottleneck has moved from "slow to do" to "slow to set". The total time remains the same, but the queuing location has changed.
- **Align and eat**: Everyone's output is doubled, but the caliber is not unified, and things that need to be checked and aligned with each other are also doubled. Meetings are increasing instead of decreasing. Everyone has this experience: after using AI, there are more meetings.

The sum of these three bills is a complete statement of "Everyone is fast, but the company is not fast". It also explains why the paradox cannot be solved by "buying more tools": tools only act on the execution loop, while bills are generated in the three loops of judgment, alignment, and feedback. What’s stuck in those three rings is the organization’s default behavior. It all depends on genes.

## 5. Five default genes of old tissueNow sequence this genetic disease.

Define the terms first. The "organizational DNA" mentioned in this book is a metaphor, which refers to the default judgments and behaviors that organizational members will automatically adopt when no one is supervising them. It's not written in the system, it's written in the muscles. Newcomers will be assimilated into it within three months of joining the company. It will continue to operate as usual when the boss is not present. It is the real operating system of the organization.

There are at least five default genes in old tissue. Below each gene is a picture of what it looks like after being enlarged by AI. Chances are you’ve seen a few of these in your own company.

**Cognitive inertia**: Prioritizing the most familiar and least thought-provoking explanation. The decline in sales is attributed to the market, and the decline in projects is attributed to poor execution. The first explanation that comes to mind saves effort, so it always wins. Amplified by AI: AI is the most efficient "evidence supplier" in history. Whatever you want to prove, it can find it for you. In the past, it took two days to look through data to find supporting materials for a misattribution. Now, an analysis report with pictures and texts can be generated in two minutes. Inertia has upgraded from "too lazy to think deeply" to "already thinking deeply", and for the first time, wrong conclusions have been put on a rigorous coat.

**Empirical Authority**: "I've always done it this way" is a substitute for verifiable standards. The person with the most seniority automatically has the final right to interpret, regardless of whether his experience has been verified or where the boundaries are. After being amplified by AI: authoritative experience is fed to AI, training materials, vocabulary libraries, and SOPs are generated in batches, and erroneous experience is upgraded from "word of mouth" to "system-level deployment." In the past, a wrong sales technique spread slowly through training, contaminating a large area every quarter; now a prompt is deployed to all customer touch points overnight.

**Information private**: Keep the context in the individual's mind and maintain position with information difference. "Only Lao Wang knows this" is not an oversight of the organization, but Lao Wang's moat. After being amplified by AI: In the past, department walls were stocked with documents, but now they are stocked with individually trained AIs. The AI ​​in the marketing department and the AI ​​in the sales department gave different answers to "Who are our core customers?", each with full confidence and a different caliber. Information islands have been upgraded to judgment islands, and each island has automated city defense. MD Anderson's Watson, which can't read the new medical record system, is a $60 million specimen of this gene.

**Execution Cult**: Replace value judgments with busyness, speed, and workload. The schedule is full of medals, and working overtime is loyalty; as for whether you are running in the right direction, no one asks, and asking means you are not dedicated. After being amplified by AI: the output figures exploded across the board, including the number of pieces of content, lines of code, and solution versions. The dashboard was all red, and everyone was "using AI to improve efficiency." But no one can answer: How many of these outputs pass the test of any value standard? Klarna is the top version of this gene: 2.3 million conversations, 11 minutes reduced to 2 minutes, every execution indicator is perfect, but the evaluation standard itself has not been calibrated.

**Feedback Avoidance**: Attributing errors to people and luck rather than correcting standards. The review meeting will be a criticism meeting or a commendation meeting, but it will not produce a revised standard. After being amplified by AI: This one is the most hidden. AI has also reduced the cost of "fooling things over" to zero: writing a beautiful review report and finding a decent narrative for failure have never been as easy as it is today. The wrong standards could not be corrected, and they also received more exquisite packaging, so they entered the next cycle with complete execution power.

The five genes are arranged together: they are not five unrelated diseases, but the expression of the same underlying force in five directions: **energy saving**. Cognitive inertia saves thinking, experience authority saves verification, private information saves the trouble of sharing, execution worship saves judgment (manual use saves energy than using the brain), feedback avoidance saves the pain of facing mistakes. This is not surprising: the brain accounts for about 2% of body weight, but consumes about 20% of resting energy. Evolution has written "if you can use your brain, don't use it" into the human factory setting. Therefore, the diagnosis in this chapter can be condensed one level further: **Human nature is inert, and the essence of organizational evolution is to fight against inertia**. But the stance of confrontation determines success or failure. Relying on moral mobilization and willpower against factory settings will not win a few rounds. There is only one winning way: **It takes less effort to build the right road than the wrong road, and let laziness do the work for you**. Standards make "don't have to be smart again" the least labor-intensive option, and shared context makes "asking the machine" faster than "asking the boss". People will definitely slide in the direction of saving effort. Organizational evolution is not to block this landslide, but to repair the exit of the landslide to the right place.

These five genes could survive with disease in the old times, because execution is expensive and acts as a natural shock absorber: wrong judgments will take a long time to be executed before they become consequences, and there will be time to brake, correct, blame, and forget along the way.

AI removed the shock absorbers. **AI does not amplify efficiency, AI amplifies what is already in your organization – including chaos**. Back to Klarna: Cost-oriented evaluation criteria have long existed in most customer service departments, AI is just making it possible to execute this criterion flawlessly for the first time at a scale of 2.3 million conversations per month. So a genetic defect that usually hid below the threshold grew into a tumor that the CEO had to publicly acknowledge within fourteen months.**AI will not eliminate human inertia, it will only make inertia stronger execution power. **

## 6. Gene evolution

After the diagnosis is completed, the name of the treatment plan is given.

Building an AI-native organization is not about installing a new set of tools for the old organization (there is no shortage of tools such as Klarna and MD Anderson), but completing an **organizational DNA evolution**: replacing five old genes with new genes one by one.

`Experiential authority → Explicit standards | Private information → Shared context | Cognitive inertia → Borrowing from the outside | Feedback avoidance → Continuous correction | Execution of worship → Judging by value`

The new gene must also meet the definition of "operating automatically when no one is supervising": when there is no standard, the default action is to stop and find the standard instead of "do it first and then talk about it"; when there is a disagreement in judgment, the default action is to return to the value ranking, rather than comparing seniority; when a mistake is made, the default action is to revise the standard instead of looking for the person responsible. First, one judgment: **AI-native is not a tool upgrade, but a rewriting of the organization's default behavior. **

Use this ruler to measure Klarna again: its disease is a misplaced judgment standard, but its corrective action is itself the demonstration—public admission within fourteen months, naming the cause (the evaluation standard is wrong), and immediate calibration (changing the standard rather than withdrawing the tool). Compare this to how many organizations you have seen. They would rather let the wrong standard run for another three years than let the principal leader say "our ruler is wrong." By continuing to correct this new gene, Klarna is setting a positive example. It is not shameful to fall on the road of transformation, but it is shameful to lie in denial.

## 7. The same person, two genes

No matter how different the genes are, the cleanest comparison is what the same person looks like in two tissues.

Liu Wei has been engaged in online education for many years and has been responsible for large-scale business in Gaotu. In May 2023, he co-founded the AI ​​education company "Dancing with Love" with Zhang Huaiting and others, a company designed according to AI's native logic from the first day: the five core positions of product, R&D, design, market operations, and sales are all restructured around human-machine collaboration, and data pools are shared across departments. Over two years, four rounds of financing of approximately US$150 million, and a valuation of nearly US$1 billion (company-reported basis disclosed by the founder to the media, non-audited data).

Numbers are not the focus of this case, the focus is Liu Wei’s own description of the two experiences. At Gaotu, he "thinks about organizational building and training every day." When encountering business problems, he thinks about how to accumulate manpower, recruit teachers, and reduce variance. In Dancing with Love, he "polishes products every day, discusses technology, and how to use technology and products to solve business problems." His summary is as precise as if it was written for this chapter: "**The original online education is essentially an education industry, followed by the use of tools; AI education is essentially an AI industry, but it is only implemented in the field of education**." He also has a more cruel metaphor: traditional online education is an "agricultural model", and how many people there are, how many fields are cultivated.

The same person, the same industry knowledge, the same diligence. What changes is not the people, but the default genes of the organization: when one organization encounters a problem, it defaults to "adding people", and another defaults to "changing the system." The size of the former is determined by the number of people, and the size of the latter is determined by the quality of standards and context. **It’s not a difference between people, it’s a difference in genes**. That answers the question many No. 1s like to ask: "Should I change a group of people?" The answer is most likely not. Replacing genes is cheaper than replacing people, and replacing people does not change genes. The new person will be exactly the same as the old person after three months.

## 8. Background board: the origin of the word chasm

This chapter uses the word "gap" repeatedly. This word is not my invention. It has a clear origin.

Everett Rogers' diffusion of innovation theory divides adopters of a new technology into five categories: innovators (about 2.5%) → early adopters (about 13.5%) → early majority (about 34%) → late majority (about 34%) → laggards (about 16%). Jeffrey Moore applied it to the high-tech market and pointed out that the key fault line is between the early adopters and the early majority, which is the original "chasm". The reason for the break is: **Early adopters buy vision, early majority buys certainty, there is no natural transition between these two consensuses**. (The ratio is a theoretical approximation, not a fixed quota for each market; user classification must be judged around specific innovations and scenarios.)

The "gap" in this chapter is the organizational version of this concept: between "companies that have purchased AI tools" and "AI-native companies", what separates them is not budget and technology selection, but the replacement of five genes. Tools can transcend the procurement process, but not organizational DNA. This is why 80% of projects fall into the ditch.

The picture closes: two companies, same toolbox. Company A shoots a hundred arrows in a hundred directions, each arrow carrying the thrust of AI, rushing towards its own judgment; Company B shoots a hundred arrows at the same target. There is a crack in the middle, and five groups of gene replacements are written below the crack. **A hundred people are running in a hundred directions with a hundred times the execution power. This is not called transformation, but accelerated disintegration. **

## 9. Boundaries of Judgment

Every assertion should clearly state what it does not include. This assertion is especially necessary because it is too smooth, and smooth assertions are most likely to be overused.

**First, this chapter is not anti-instrumentalism**. "The gap is on the organizational side" does not mean that tool selection is not important, nor does it mean that you can make do with the worst model. Tools determine your ceiling, and organization determines what percentage of the ceiling you can touch. This chapter only points out that the bottleneck of most organizations today is the latter. If someone uses this chapter to argue "don't buy tools first", he has read it backwards.

**Second, don't read 80% as an exact scale**. RAND's numbers come with the qualifier "according to some estimates," and 95% of MIT's counts "produced no measurable income statement returns" rather than "lost their money." The conclusion in this chapter relies only on a much weaker and harder fact: failure is the majority, and the primary cause of failure is organizational. Numbers can be debated, rankings hard to overturn.

**Third, genes can be changed, which is the reason for the existence of this book**. The "gene" metaphor has a dangerous side effect: it sounds like destiny. You don’t have a choice when it comes to biological genes. Organizational DNA is a human-determined default value, and the default value can be reset. Klarna has completed a public correction in fourteen months, and it is said that this twenty-year-old company has installed CAIO and energy gold mechanisms on itself (detailed in Chapter 9), which are living counterexamples. If genes were unchangeable, this book would have ended on this page; because they are changeable, there are still eleven chapters left.

**Fourth, the five genes are not moral accusations**. Cognitive inertia is the energy-saving mechanism of the human brain, information privacy is an individual's rational choice, and execution worship is indeed a virtue in an era when execution is expensive. They're not evil, they're obsolete, optimal solutions to an old cost structure that died in Chapter 1. It is useless to curse people when mobilizing for transformation. It is useful to replace the environment settings that make these behaviors "individually optimal".

## What to Do Monday Morning (No. 1 perspective)

Take a **same question test** for forty minutes, no need to consult the company:

1. **Sampling**: Pick three teams that are using AI, and don’t say hello in advance.
2. **Same question**: Ask the same question respectively: "What kind of things you use AI to produce are considered qualified?"
3. **Judgement**: Get three answers and compare them: If three teams give three sets of standards (or fail to answer), you are already standing on the edge of the chasm, and the tool is amplifying three sets of conflicting judgments.
4. **Check the ruler**: Ask each team the second question: "Who set this qualification standard, and when was it last revised?" If the answer is "It has always been like this" or "Everyone has their own control", congratulations on completing the company's gene sequencing, and both experience authority and private information have been sampled.

Test results are not used for accountability (that's the old reflex of feedback avoidance), but for answering a question: Should we fix the tool first, or the standard? Note (individual and team perspectives): Ask your own team the same two questions. Those who cannot answer the questions are not unqualified, but the organization has not given them enforceable standards. This account will be recorded in the system, not on the head of the person.

## Quotable Lines

1. AI doesn’t amplify efficiency, AI amplifies what already exists in your organization—including chaos.
2. A hundred people running in a hundred directions with a hundred times the execution power is not called transformation, it is called accelerated disintegration.
3. The abundance of tools exposes the poverty of judgment.
4. Early adopters buy vision, and the early majority buys certainty—there is no natural transition between these two consensuses.
5. AI-native is not a tool upgrade, but a rewriting organizational DNA of the organization’s default behavior.
6. AI will not eliminate human inertia, but will only make inertia stronger execution power.
7. The variance is not in the tool, the variance is in the organization.
8. Replacing genes is cheaper than replacing people; if you replace people without changing genes, the new person will be exactly the same as the old person after three months.
9. Execution is never a problem, it is the thing that guides execution.
10. The speed of the chain is determined by the slowest link, and execution is no longer the slowest link.
11. It used to take two weeks to make one wrong plan, but now it takes two days to make five wrong plans.
12. Human nature is inert, and the essence of organizational evolution is to fight against inertia.
13. It takes less effort to build the right road than the wrong road, and let laziness do the work for you.



## Connections to Adjacent Chapters

- Continuation of Chapter 1: Execution has been free, but the company has not become stronger.
- Handed over to Chapter 3: The gap is on the organizational side, but organizations are made up of people - that thing that has not been returned to zero, let's name it from the personal level first: adaptive insight.



## Chapter Acceptance Self-Check (compare with the five acceptance standards of the chapter)1. The assertion can be restated in one sentence ✓, and is an inference of the core assertion (the core assertion asserts that adaptive insight is scarce → this chapter proves that when tools are abundant, the lack of organizational judgment leads to failure).
2. Whiteboard framework diagram ✓ (One hundred arrows and one target vs. One hundred arrows and one target + five groups of gene replacement + using the life cycle background board).
3. External controls and data ✓: Winner side E4 and Love Dance (company-reported basis has been marked); loser side E7 Klarna (official press release + original words of Bloomberg) + MD Anderson (audit report level data); overall data E2 RAND (qualifier with) + MIT NANDA; P1 control group has been balanced; brain 2% body weight / about 20% resting energy consumption is textbook-level physiological common sense (Raichle etc.), the source can be added before publication.
4. 13 golden sentence candidates ✓ (v1.3 adds two new sentences about lazy root).
5. "What to Do Monday Morning" four-step test on the same question from the No. 1 perspective + personal notes ✓.