# Chapter 1: Execution Approaches Zero

Status: Completed (v2.3, 2026-07-31, about 9200 words; passed the acceptance on 2026-07-25; v2.2 aside scaffolding cleanup; inserts pyramid-with-bases-pulled figure; frozen after reading the whole book)

**Claim: When AI simultaneously reduces execution costs and knowledge acquisition costs, organizational structures such as hierarchies, approvals, reporting, and KPIs built around "people do things slowly and know less" begin to fail as a whole. **

---

## 1. Your most expensive purchase is on sale and clearance

Open your company's income statement. Over the past two decades, no matter what industry you were in, the biggest expense was almost always the same: labor costs. Cutting it down one level further, the bulk of the labor cost is not judgment, but execution, that is, the man-hours that turn a decision into documents, code, reports, contracts, design drafts, customer service conversations, and marketing copywriting. You never think there's anything wrong with this because the entire business world is built on the same assumption: execution is expensive and must be sourced, organized, and monitored with great care.

This assumption is failing, and the rate at which it is failing has a precise scale.

Stanford University's Human-Centered Artificial Intelligence Institute (Stanford HAI) tracked a curve in the "AI Index" annual report: the inference cost to reach the GPT-3.5 capability level (MMLU benchmark 64.8 points) dropped from US$20 per million tokens in November 2022 to US$0.07 in October 2024. Within two years, the price dropped to about one-hundred and eighty-fold of its original price.

Notice the shape of this curve. It’s not a markdown: it’ll be $1.80 in August 2023, $0.18 in June 2024, and then continue to drop, at similar multiples almost every year. This means that the price cut is not a one-time event, but a ramp; you have not missed a dip, but are standing on a conveyor belt that continues to decline. Venture capital firm a16z gave this phenomenon a name, LLMflation: the price of a fixed level of capability, which falls approximately 10 times per year. Epoch AI, a research organization, calculates more aggressively based on specific tasks: the median rate of price decline is 50 times per year; looking only at data after January 2024, the median rises to 200 times per year.

(A statistical detail that exemplifies this book's approach: We report medians rather than averages. The slowdowns for different tasks range from 9x to 900x per year, and the average is hijacked by extreme tasks, leaving the median honest. This rule applies throughout the book, and Chapter 6 explains why.)

Before translating this curve into any conclusions, label it with two boundaries. Boundaries are not a disclaimer but part of the assertion. A judgment with wrong boundaries is more dangerous than no judgment at all.

First, what collapsed was the "price per unit of capability", not the price tag of the latest flagship model. Today's most powerful models are still not cheap, and flagship list prices are falling much more slowly, at about 5-10x per year by independent estimates, well below the rate of decline on the "equal capabilities" curve. But for organizations, what matters is never the price of the flagship, but the price of "the ability to do it." An analysis report that required a team of three people to complete in a week two years ago would cost close to zero today at the level of capability required. The competitive gap does not come from whether you can use the most expensive model (that everyone can buy), but from whether you realize that yesterday it required a team to execute, but today it has become a call.

Second, this curve only covers the digital world. This boundary unfolds in Section 4.

Before that, let’s translate this curve into the language of Position 1: **Your most expensive purchase used to be human time, and now it’s on sale for clearance**. When the price of a core factor of production falls by an order of magnitude every year, all institutional arrangements designed around its old price, no matter how sophisticated they once were, need to be recalculated. Every price collapse of production factors in history has redrawn the shape of organizations: the steam engine redrawn the factory, the container redrawn trade, this time it is the turn of execution itself.

For position 1, this curve has three direct corollaries, each of which is one level deeper than "cost reduction and efficiency improvement":

- **Any long-term pricing for execution capabilities today would be wrong**. Any three-year contract, five-year budget, or headcount plan negotiated based on today's implementation costs are all based on a price that shrinks by an order of magnitude every year. The correct approach to planning is not to take today's price, but to take the slope of the slope.
- **"Wait until the technology matures before taking action" is not qualified to wait**. The ramp is continuous, and there is no "mature" station for you to get on; if you do it every night for a year, your opponent will get one more year of compound interest.
- **The money saved is not profit, it is migration budget**. If the resources released by the reduction in execution costs only flow back to the income statement, you will have sold the window period for organizational evolution. This money should go to the two things that are still rising in price and will be discussed later in this book.



## 2. Another base: know where to look

If only execution got cheaper, the story wouldn't be so dramatic. What really constitutes "geological change" is that the second base has been taken away at the same time: the cost of knowledge acquisition.Think back to how much organizations have paid to "know." Senior employees are more expensive than newcomers. A large part of the premium is not for his judgment, but for his "knowing where to look, who to ask, and what the industry practices are." When companies pay for databases, industry reports, consultants, and training courses, they are buying the same thing: shortening the distance from "don't know" to "knowing." This distance was once so expensive that it alone supported several trillion-dollar industries: publishing, consulting, and vocational education, all of which were essentially arbitrageurs of knowledge acquisition costs.

In the age of search engines, this distance has collapsed once: from "knowing that person" to "finding that document." In the era of AI question and answer, it has collapsed by another order of magnitude: from "finding that document" to "asking that question." All the links in the middle, including retrieval, screening, read-through, summarization, and cross-validation, are becoming internal processes that are called once and are no longer priced at you.

Pay attention to the relationship between these two bases: they are not two parallel costs, but two supporting points of the old organizational structure. Execution is expensive, so organizations must divide labor, schedule, and supervise execution carefully; information is scarce, so organizations must use hierarchies to deliver it, seniority to price it, and meetings to synchronize it. **Execution zeroing is not efficiency news, it is a geological change in the organization**. If only one piece of the base is removed, the structure can still stand sideways for a while; if two pieces are removed at the same time, every beam of the superstructure will have to be recalculated.

A company did this calculation for everyone, using their own lives.

## 3. The first sample: a company that treats two bases as a business

Chegg is an American online education company that went public in 2013. Its main business can be described in one sentence, a paid answer library plus on-demand experts: students can pay up to $19.95 per month to buy pre-written answers to textbook exercises and a network of experts who can ask questions at any time.

To re-describe the business in the language of this chapter: Chegg sells exactly the two bases that are being removed. The pre-written answer library sells execution products; the on-demand expert network sells "knowing where to look and knowing who to ask." It’s not that it uses too little AI, or that it’s disorganized. Its business model itself stands directly below the zeroing curve.

Distance learning during the pandemic pushed it to the top: in February 2021, the stock price was $113.51, with a market capitalization of approximately $14.7 billion. Twenty-one months later, ChatGPT was released.

During an earnings call in May 2023, CEO Dan Rosenzweig made what would become an oft-quoted admission: ChatGPT was starting to erode subscriber growth. The company withdrew its full-year guidance and its stock price fell 48% that day. Since then, there has been a downward slope without a rebound: ChatGPT has lost more than 500,000 subscribers since its release; in the fourth quarter of 2024, there were 3.6 million subscribers, a year-on-year decrease of 21%, and full-year revenue decreased by 24%; 441 people (about a quarter of employees) will be laid off in 2024, and another 22% will be laid off in May 2025, and another 45% will be laid off in October. The original attribution in the announcement is "AI "the new realities of AI". The market capitalization dropped to a minimum of approximately US$156 million, a 99% drop from the peak.

The sharpest detail in this case is not the drop, but a set of comparisons: Chegg itself is also using AI. Its financial report shows that with the help of AI, capital expenditures on content production fell by 56% year-on-year, and the number of user questions increased by 2% during the same period. It's the same technology, but it's not bad at all. **Victims and beneficiaries use the same technology, the only difference is which side of the zeroing curve your business model is on**. For Chegg, AI is not a question of whether the tools are good or not, but that the things it sells are no longer scarce. **If your business model is to sell execution, AI is not your tool, it is your substitute. **

Let’s stop here for a moment. This story could easily be told as an "AI destroys everything" horror movie, and that's not the argument of this chapter. The significance of Chegg is that it is a clean sample: a business with almost no physical links, no regulatory buffers, and purely composed of "doing + knowing", what happens when the two bases are removed. Your company is most likely not Chegg, but there must be several departments in your company whose daily work is exactly the same as Chegg's business model.

If you look inside, the small version of Chegg usually comes in three forms:

- **Report Factory**: Those positions that regularly produce weekly reports, monthly reports, and analytical briefings. If its value proposition is "organize data into readable text", it's an internal version of a library of pre-written answers.
- **Human flesh retrieval platform**: legal precedent checking, investment research to find comparable suppliers, and procurement comparison suppliers. If the moat of this position is "know where to look," it's selling Chegg's second service.
- **Template production line**: first draft of contract, bidding document framework, material revision. A production line with clear inputs, clear outputs, and execution according to templates is the form in which the zeroing curve is absorbed the fastest.

These three situations should not trigger the urge to lay off employees. That would be a shallow reading of this chapter. What they should trigger is repricing: for people in these positions, the valuable part is moving from "output" to "release", that is, judging whether the output is up to standard and what standards should be used for release.

(The data in this section comes from Chegg’s financial reports over the years, as well as reports from the Wall Street Journal and CNBC. Chegg and Chuanshen later in this chapter belong to different industries; compare mechanisms, not performance.)

## 4. Boundary of Judgment: Where is zeroing established?

"Return to zero" is the most important word in the book and the most easily misunderstood, so establish the boundary first and then the argument. Any standard has applicable conditions. An assertion without clearly stating the applicable conditions is not an insight, but a slogan. I have to abide by this rule myself first.

The implementation of zeroing first and mainly occurs in **digital knowledge work**: writing, coding, analysis, design, customer service, legal documents, reports, and translation. What these efforts have in common is that the input and output are digital information, and the quality can be checked in the digital world. Chegg’s answer library, Duolingo’s course translations, and your marketing department’s first draft of copy are all in this collection.

Physical execution is not zeroed. A wall on the construction site, a knife on the operating table, and last-mile delivery, AI has not made them much cheaper. The regulatory process has not been reset to zero: auditing, compliance, and licensing. The cost structure of these links is determined by the system, not by technology. Therefore, please do not use construction sites and operating rooms to refute an assertion about knowledge work; conversely, please do not use the speed of collapse of knowledge work to scare every industry. I reject both abuses.

But the inside and outside of the border are not insulated. Every execution in the physical world is wrapped in a digital shell: scheduling, documentation, decision-making, quality inspection, and settlement. This shell belongs to knowledge work, and Zeroing is continuing to advance inward along this interface. A construction company's cost of building walls has not dropped, but its drawing details, project quantity calculations, progress reports, and contract reviews are approaching zero. A hospital's operations are not being reset, but medical records, preliminary imaging screening, and follow-up records are being reset. The speed of change is different, but the direction is the same.

All the assertions in this book are by default established within this boundary. If the main body of your organization is outside the boundary, the timetable in this book is more relaxed for you, but the direction judgment remains unchanged, because your competitors will first complete the evolution on the digital shell, and then come to meet you in the physical world with the cost savings and faster development cycle.

## 5. Organizational Structure Archeology: Why does each thread exist?

Now do some archeology. Put your organizational chart on the table and ask a question that most No. 1s have never asked: What problem was each line, box, and process on this chart originally invented to solve?

The conclusion of archeology is disturbing: almost everything is designed for "people who do it slowly and know little". **

**The hierarchy is an information passing tree**. The number of direct subordinates a person can effectively manage is limited (management textbooks say 7±2, but in practice it rarely exceeds 10), and the information a person can master in real time is even more limited. Therefore, the organization can only grow into a tree shape: information is summarized layer by layer from the leaves to the root, and each layer is compressed and translated; instructions are distributed layer by layer from the root to the leaves, and each layer is translated and encoded. Hierarchy is not the product of desire for power, it is an engineering compromise for "people know less": when there is no better means of information synchronization, the tree shape is the optimal structure to connect ten thousand people. The price has long been written in textbooks. There is loss in every level of translation, and there is delay in every aggregation. Organizations have been silently paying this coordination tax for a hundred years because they have no other choice.

**Approval is the queuing window for judgment**. Judgment is scarce, so organizations focus it on a few proven people and then queue them up for all matters requiring judgment. Every node in the approval process is essentially saying: the trial and error cost of this matter is higher than the cost of waiting in line. In an era when execution was expensive, this account almost always held true: a poorly done plan cost three people a week of work, and it was a good deal to let it sit in the director's inbox for two days. Approval is not a bureaucratic invention; it is a rationing system in an era of judgment shortage.

**Reporting is done manually and contextually synchronized**. Weekly reports, regular meetings, work debriefings, and alignment meetings are essentially a batch synchronization of the context scattered in each mind using the most expensive medium (human time). It is inefficient, lossy, and has high latency: a one-hour meeting with ten people costs ten man-hours, and the synchronized information also decays with everyone's attention. But in an era when context exists only in the human mind, no other medium is available. Meeting rooms were the only way for old organizations to synchronize information.

**KPI is a stand-in for value**. Managers cannot see everyone's execution process, let alone measure "value" directly, so they have to settle for the next best thing and approximate it with countable outputs: number of pieces, duration, number of lines, unit quantity, and response time. KPI is not that managers are stupid, but it is an inevitable choice in an era when observation methods are poor: you cannot measure what you want to measure, you can only measure what can be measured, and then pray that the two are related.Please pay attention to the attitude of archeology this time: these four things are not bureaucratic diseases, they are the optimal solutions in their own era. It's easy to laugh at them, but ridicule is cheap and the people who designed them made good engineering decisions within their own constraints. This is a theme that will appear repeatedly in this book: all standards have applicable boundaries; the environment changes, and yesterday's optimal solution will become today's negative equity, and the most difficult action for the organization is to admit this. **

Now take away the two bases and re-check them one by one:

- **Level**: AI can make front-line context appear in front of anyone losslessly and instantly, and information can reach any node in real time; but the tree structure is still paying coordination tax for information that is no longer scarce, and the tax rate has not changed.
- **Approval**: The cost of redoing a plan has changed from three people per day to three seconds, and trial and error is no longer expensive; the gate itself is still charging at the old price, and the two-day queue time is now several orders of magnitude more expensive than the risk it intercepts.
- **Report**: The information synchronized in regular meetings could have been in the context shared by one person and AI, and could be checked at any time and never decayed. However, the organization is still using the most expensive resource (the same hour for everyone) to do the synchronization that AI can complete in real time.
- **KPI**: When AI can generate unlimited "outputs", counting outputs loses its meaning. The number of pieces, the number of lines, and the duration can all be filled up by the machine, and the assumption of correlation between the output numbers and the real value is officially broken.

**Every line in the organizational chart is drawn for human execution, which is expensive to manage; after execution is free, these lines will become decorations one by one. **

Compress the chapter into one picture: a pyramid, two bases (execution costs, knowledge acquisition costs) are removed at the same time, and the superstructure is suspended. Not all the suspended parts were scrapped. If you look carefully, there are still three things hanging in the air that no one can take over. They are exactly what AI cannot take over: **What target to choose, what standards to use, and how to share context**. What these three things are, why AI cannot take over, and how to turn them into organizational capabilities is what the chapters ahead will unfold.

![Pyramid with both bases pulled out: execution and knowledge-access costs dashed empty](/figures/ch01-pyramid-en.svg)

*Figure: org-chart lines were drawn for expensive human execution; what hangs is what AI cannot take.*

## 6. Industry microscope: translation industry

The macro curve can easily make people numb, and Chegg may be regarded as an "unlucky case." We put the microscope on an entire industry: the translation industry, the place where execution is at its worst.

The translation industry was chosen because it is almost a pure sample of "digital knowledge work": the input is text, the output is text, the quality can be tested in the digital world, there is no buffer of physical links, and there is no moat of licenses and supervision. If there was a first place for execution zeroing, it was here.

There are already first-hand job records at the first site. At the end of 2023, the language learning company Duolingo laid off about 10% of its external contractors in two waves (August and December), mainly course translation and writing positions; the company confirmed to Bloomberg that this was partly because GPT-4 could already generate translation and course content. The laid-off contractors described to the media the new form of those who remained: "Each team will retain one or two people, and their titles will be changed to 'content curators'. Their job is to review the output of AI before releasing it."

Read this sentence a few times, it's a microscopic slice of this chapter's assertion: **Doers become reviewers**. The action of output is taken away by the machine, and what remains in the human body is judgment, that is, judging whether the output of the AI ​​​​is qualified and according to what standards it should be released. A four-person translation team became two curators. What disappeared were execution hours and what remained were judgment hours. This morphological migration will be repeated in every type of digital knowledge work.

There are two types of companies standing on the same collapse zone. One is like Chegg: the business model is built on selling execution and selling "knowledge". When the base is removed, the business returns to zero. Another made the opposite choice. Chuanshen Yulian, a long-established Chinese language service company, is located in the center of the collapse zone. It did not choose to train translators faster, because that would be equivalent to practicing high jump on a sinking floor; its action was to rewrite the entire company into another form: establishing a chief intelligence officer (CAIO), establishing an AI Native decision-making committee, establishing a hard rule of "no meeting if there is no runnable DEMO", and using the "energy gold" mechanism to allow internal AI applications to grow according to market rules. What matters here is the industry signal. The judgment of founder He Enpei can be directly used as a footnote to this chapter: "**Instead of waiting for employees to become AI masters, it is better to let the organization develop AI capabilities**."

Pay attention to the structure of this sentence: it does not bet on "people learning tools", but on "changes in organizational form". This is where this chapter diverges from the popular narrative. Popular narratives say that AI is coming, so quickly organize training courses for employees; this chapter says that the problem has never been employees’ tool proficiency, but that every line of the organization is still drawn at the old price of expensive execution. In industries where the executive layer was absorbed first, the survivors who acted first were not the companies that executed faster, but the companies that were the first to admit that "execution is no longer valuable" and rewrite themselves into a "standards + context" form.The quality of this set of comparisons is explained truthfully. Chuanshen's mechanism comes from cross-reporting by multiple media and is reliable; but its operating results (whether revenue and profits have really improved as a result) are currently unavailable from third-party data. Therefore, I only quote its mechanism and do not draw conclusions for it. One side of Chegg is financial report-level data, complete. It should also be noted: the two companies are in different industries, and what is comparable is not their performance, but their mechanisms. Both companies are involved in digital knowledge work. One treats "execution + knowing" as a product for sale, and the other treats it as a cost item to rewrite. I have yet to find a loser of the same caliber within the translation industry (translation companies that insist on execution-oriented models and decline). Until I find one, "self-renovators live better" can only be regarded as a hypothesis to be verified. Fortunately, the conclusion in this chapter does not rely on this comparison. The cost curve (section 1) and Chegg (section 3) are two independent chains of evidence.

## 7. The opposite of "thinking is free": why judgment is more expensive

There is a popular saying in this wave of discussions. Kaifu Lee and others describe it as "AI makes thinking free." The opposite is stated in this book, and this opposite is the starting point of the argument throughout the book and deserves an entire section to make it clear.

Let’s take it apart first to see what is cheaper. The answer is two things: "**how to**" (execution) and "**where to find**" (knowledge acquisition). Writing code, making reports, checking cases, looking for precedents, these are really approaching zero. But they don’t add up to thinking. There is another core in thinking: "**What is worth doing**", that is, choosing one among infinite options, excluding all others for it, and bearing the consequences of this exclusion. This core, AI has not dropped a penny in price.

And not only has the price not dropped, it's getting more expensive. Scarcity is relative. When the execution takes three months, a mediocre judgment can hide behind the long execution. When the results come out, no one remembers who made the decision in the first place, and the review meeting becomes a Rashomon; when the execution only takes three hours, the quality of the judgment will be immediately exposed in the results: the decision is made in the morning and the result will be seen in the afternoon. Whose judgment is valuable and whose judgment is just an echo of the rank, which can be seen by the whole company within a week. The cheaper the execution, the higher the proportion of judgment in the total cost, and the greater the relative cost of misjudgment. **When "how to do it" and "where to find it" become cheap at the same time, the only thing that is really expensive is "what is worth doing". **

The story of Chegg actually has the same structure: it does not lack execution (the accumulation of the answer library for twenty years), it does not lack the knowledge entrance (the expert network), but it lacks the judgment of "what is worth doing" at that point in November 2022. When what you sell becomes free, the answer isn't "sell harder." Errors in judgment always have a price, but the implementation of zeroing has compressed the accounting period from several years to a few quarters.

This is not a technical limitation, but a matter of definition: if one day AI completely decides for you what is worth doing, then the company will in fact belong to it. As long as the company is yours, "what's worth doing" will still be on your account; now, it's the only item on your account that's still increasing in price.

So a more acute question emerged: Since execution is free and the tools are affordable to everyone, why do companies that have bought all AI tools see no order of magnitude change in efficiency? The money has been spent, the tools have been installed, but where have the dividends promised in the curve gone?

This is the question for the next chapter.

## What to Do Monday Morning (No. 1 perspective)

Draw your company’s **seismic zone map** in four steps:

1. **Look in the mirror first**: Let’s start with a Chegg question: How much of our income comes from selling “execution products” or “knowing where to look”? This part of the revenue is the red zone of your business model. Most companies are not Chegg, but almost every company has a product line or division that is a small version of Chegg.
2. **Make an execution list**: Let each department list all "pure execution" positions and processes, that is, links with clear input, clear output, and digital quality inspection. Label each: How many of these can today’s AI do? Those who can complete more than 80% are marked red.
3. **Review the organizational structure lines**: Ask each line on the architecture diagram: Does this line manage execution or judgment? The line of management execution will lose its reason for existence as the red area expands; the line of management judgment is the skeleton of your future organization.
4. **Number of approval points**: Pick the longest approval flow and ask node by node: Is the risk of this gate interception still more expensive than the gate itself today? Count the nodes where the answer is "no". This number is the number of approval gates that are idling in your organization.

This map does not require you to cut anything today. It is the base map for all actions in the next twelve chapters. Side note (individual vs. team perspective): The same question can be asked about your own position. How much of my job is in the red zone? Does my value lie in execution or judgment? If my team went from four people to two "curators" tomorrow, would I be the one left?

## Quotable Lines1. Every line in the organization chart is drawn for human execution, which is expensive to manage - after execution is free, these lines become decoration one by one.
2. Your most expensive purchase used to be human time, and now it’s on sale for clearance.
3. Execution zeroing is not efficiency news, it is a geological change in the organization.
4. When "how to do it" and "where to find it" become cheap at the same time, the only thing that is really expensive is "what is worth doing".
5. If your business model is to sell execution, AI is not your tool, it is your substitute.
6. Victims and beneficiaries use the same technology, the only difference is which side of the zeroing curve you are on.
7. Standards have application boundaries: the environment changes, and yesterday’s optimal solution will become today’s negative equity.
8. The cheaper the execution, the more exposed the quality of the judgment.
9. Meeting rooms were the only way for old organizations to synchronize information.



## Connections to Adjacent Chapters

- Continuing from the preface: Execution is really zeroing out (this chapter gives curves, samples and boundaries).
- Over to Chapter 2: Since the tools are so powerful and everyone can afford them, why don’t the companies that buy the tools become stronger?



## Chapter Acceptance Self-Check (compare with the five acceptance standards of the chapter)

1. The assertion can be restated in one sentence ✓, and is an inference of the core assertion (the core assertion asserts that the cost is zeroed → this chapter proves zeroing and infers structural failure).
2. Whiteboard frame diagram ✓ (pyramid-with-bases-pulled figure inserted and three suspended upper parts).
3. External comparison and data ✓: E3 Expression on the winner side (mechanism has been verified) + E14 Duolingo job evidence; L8 Chegg on the loser side (financial report level data has been verified); caliber differences (cross-industry, same digital knowledge work) have been explicitly stated in the text; statistical report median (Epoch AI slowdown median). The losers of the same caliber in the translation industry still need to be compensated, and have been marked as hypotheses to be verified.
4. Candidate 9 golden sentences ✓.
5. "What to Do Monday Morning" Four-step checklist from the No. 1 perspective + personal notes ✓.