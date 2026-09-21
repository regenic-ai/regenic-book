# Chapter 4: Judgment: Organizational Adaptive Insight

Status: Completed (v2.0, 2026-09-21; rewritten from the Chinese authority in English voice; open to ongoing public revision)

**Claim: Organizational judgment is personal adaptive insight after it has been settled, unified, and reused as an organizational asset. To get judgment out of a few heads, the organization must complete two unifications: unified judgment standards, and unified context.**

---

## 1. A hundred rulers still in people's heads

Everyone's head holds unwritten, unaligned rulers. Put a hundred people with adaptive insight into one company and you do not automatically get a hundredfold of it. A standard one person has borrowed, another cannot check. The same word can carry different marks in different hands. When the person who judged leaves, the conditions of use and the counterexamples leave too.

In the same product meeting, the product lead wants to ship now, citing new users. Support wants to wait, citing a rise in complaints. Engineering wants to release half first, citing another set of risk data. The three views rank growth, trust, and stability differently, and they do not cite the same facts. Even if the meeting produces a conclusion, a record of the final choice still cannot tell whether the split came from the standard or from the information.

When a person judges alone, the source of the standard, the conditions of use, and the counterexamples often never become a record. Inside an organization, the next person sees only the conclusion. After several retellings, the judgment is reduced to an order stripped of its conditions.

So personal adaptive insight is hard to scale by copying people. A company can hire more, but it cannot order a hundred copies of the same intuition. It can bring a gifted person into a meeting, but it cannot guarantee that anyone can rebuild the trade-off after that person leaves. For personal judgment to become an organizational capability, a plainer question has to be answered first: once a judgment leaves the person who made it, what, exactly, can remain?

## 2. Organizational judgment is not the boss's judgment

**Organizational judgment is personal adaptive insight after it has been settled, unified, and reused as an organizational asset.**

Settling keeps what sat before the conclusion: which standard was used to choose, which facts were recorded, which conditions were treated as holding, and which result would overturn the call. "Do not build this feature" copied into the minutes leaves an order. Later people can only comply; they cannot check. When the environment changes, they also cannot tell whether to keep going or to stop.

Unifying still allows different answers. What it requires is that the people in one judgment can at least confirm whether they are using the same priorities, boundaries, and standard of evidence, and whether they are working from the same version of the relevant facts. Views can still differ. The record has to separate a difference of standard from a difference of fact and from a gap in the reasoning.

Reuse has to survive a change of person. With the original author gone, can another team rebuild the judgment from the record, confirm its conditions of use, and revise it when new evidence appears? If only the person who wrote the sentence can use it, the document is that person's external memory. If someone else can check it and keep working it, it has begun to become an organizational asset.

Such an asset does not make the organization forever right. A written standard can expire, and shared facts can be wrong together. What organizational judgment adds is this: a judgment, once it has left the person, can still be traced, questioned, and improved. A boss who is right several times in a row has shown that personal judgment works. Other people continuing to judge from the same materials shows that the judgment has entered the organization.

## 3. Why these two unifications

A judgment has at least three parts: the person judging, the standard used to choose, and the context of the problem in front of them.

The person brings knowledge, experience, and the ability to reason. Adaptive insight lives at that layer. The difficulty is that the person cannot be copied directly. What the organization can actually take from that person and hand to someone else is the other two parts.

The first is a **judgment standard**. It answers what counts as good, what ranks higher, which boundaries cannot be crossed, and what an item of evidence has to satisfy before it is trusted. Faced with the same new product, ranking revenue first, user trust first, or safety risk first will produce wholly different choices. If the standard is never made clear, discussion slides easily into a contest of rank, volume, and stance.

The second is **context**. It includes present facts, how they have changed, constraints, assumptions still unconfirmed, and known uncertainties. The same standard, applied to the latest complaint data and to data from two months ago, will yield different conclusions. Asking for "aligned values" then does no work, because the object being measured is no longer the same.

Those two parts correspond to two different failures in an organization. When standards are not unified, the same facts get different rankings. When context is not unified, the same standard acts on different versions of the facts. Mix the two failures and the usual remedies shrink to "communicate more" or "execute harder." Separate them, and it becomes possible to tell whether the ruler needs aligning or the material needs filling in.

Strategy, culture, process, incentives, talent, and governance still matter. Capital does not lose its force because AI arrived, and execution has not left the physical world, regulatory duty, or complex coordination. The two unifications are not a complete set of sufficient conditions for a company's success. They answer a narrower, and more decisive, question: when personal adaptive insight is to become a shared judgment, which two kinds of input must be shareable and governable.

Does a method of reasoning make a third kind? If a method can be written as check steps, evidence requirements, or a stop condition, it belongs to the judgment standard. If it still lives only in one skilled head, it is still a personal capability and has not become an organizational asset. Newly arriving data enters context; it does not form a third kind. The two unifications leave organizational judgment a minimum interface: which ruler, and which set of facts it measures.

## 4. A mirror borrowed from large models

The way a large model handles information offers a picture of these two inputs.

In a Transformer, the same stretch of input goes through several learned projections in parallel, building relations among words and among positions, then combining the results. In the technical literature this is **multi-head attention** (Vaswani et al., 2017). The model, in other words, works the material from several angles at once, rather than reading down a single fixed thread.

The representation formed in one layer then enters the next, where modules of similar structure and different parameters keep working it. That continuous processing can be summarized as **multilayer isomorphic stacking**: after the same batch of material has been checked from several angles, the previous layer's result is processed again, and the relations and weights change with it.

How the model finally treats a stretch of material depends on two things. One is the weights learned in training, the task instructions, and the objective constraints. The other is the input it can read at that moment. Mapped onto an organization, the first corresponds to "from which angles and on what scale to judge"—the judgment standard. The second corresponds to "which facts are available to work with now"—context. The mapping is not one-to-one, yet it does explain why the same model, given a different instruction or missing a stretch of material, can return a different answer.

The analogy has a clear boundary. Attention heads are not several named experts around a conference table. Research has found that attention weights usually cannot be read directly as an explanation of why the model gave a particular answer; different attention patterns can even produce similar outputs (Jain & Wallace, 2019). Interpretability work can already extract some understandable features from inside a large model. Those features are still incomplete, and they do not show how the model combines them into each reply (Anthropic, 2024). A chain of reasoning the model writes down also cannot automatically serve as an audit trail. Experiments have observed that after a hidden prompt changes the answer, the model may generate an explanation consistent with the answer that never discloses the prompt's influence (Turpin et al., 2023).

So the model's internal way of judging does not automatically become a table of rules a person can read. Open weights can be copied, and that still does not mean the judgments inside them can be taken apart into clear clauses. A model that can answer "why" is not, on that account, faithfully reporting its internal computation. For an ordinary organization, that kind of judgment still cannot be seen, checked item by item, and handed to staff as it stands. Still less can it align, on its own, with the tacit standards in members' heads.

That is why an organization cannot copy the model's internal structure. A company needs the key judgments made into explicit common material, not a shared set of hidden parameters: standards that state the object of value, the ranking, the evidence required, and the boundaries; context that states facts, sources, assumptions, unknowns, and version; and a decision record that leaves the conclusion, the signal that would overturn it, and a time to look again. Then people and AI can work around the same thing that can be checked.

Between a large model and an organization there is only a structural analogy, not a proof. The structure of a Transformer cannot prove how a company must be organized, and it cannot prove that the two unifications are enough for success. The analogy supports two points: judgment has to work information from more than one angle, and the result of that work depends on what information the model actually received. An organization that wants to use people and AI in a stable way likewise cannot leave the angles of judgment in personal habit, and cannot let key information sit in places that do not connect.

## 5. Four states of the two unifications

Draw judgment standards and context as two axes and you have **the two unifications**. The horizontal axis is how far judgment standards are unified; the vertical axis is how far the relevant context is unified. High and low on the axes describe one judgment, or one class of judgment. They are not a permanent label for the company.

In the lower left, standards disagree and context disagrees. Each person chooses from different information, on a different scale. After the argument, the existing record cannot confirm whether the participants were answering the same question, and cannot locate whether the standard or the facts should be checked first. That is **untraceable disagreement**.

In the upper left, context is relatively aligned and standards are not. Participants use the same set of facts, and they rank value, priority, and risk boundaries differently. This state can still support exploration, because the disagreement is already visible. The organization can compare the sets of standards directly, rather than letting rank and volume decide. This position is **same facts, different standards**.

In the lower right, standards are relatively aligned and context is not. The organization uses the same values and decision rules, and the data, customer feedback, or risk information in participants' hands belong to different versions. The same ruler is measuring different objects, so the conclusions split. Nokia's filtering of bad news between 2005 and 2010 is an instance of this distortion (Vuori & Huy, 2016). A shared standard cannot repair distorted facts. This position is **same standards, different facts**.

In the upper right, both reach a degree of alignment sufficient for the judgment at hand. The decision record states the standard of the trade-off, and participants can use the same version of the relevant facts. Even if different teams or an AI handle the work, the judgment can still be traced and reviewed. Upper right still allows disagreement. What it names is **auditable distributed judgment**. That is a foundation of an AI-native organization, and it is not the full definition of one.

![The two unifications as four quadrants: unified judgment standards on the horizontal axis, unified relevant context on the vertical; upper right is auditable distributed judgment](/figures/ch04-dual-capability-en.svg)

*Figure: the standard answers on what scale to choose; context answers which facts that scale acts on.*

"Unified" still needs two boundaries. First, a unified standard still allows different choices in different regions, for different customers, or at different stages. What has to stay consistent is the basis of ranking, the standard of evidence, and the boundaries that cannot be crossed. Second, unified context does not require the whole company to see all information. Pay, mergers, medical data, and security incidents all have permission requirements. What has to hold is that the people accountable for one judgment can use the same version of the necessary facts, and that the material also marks which information is restricted or not yet obtained.

Even in the upper right, a shared standard can still be biased, and shared data can still omit an important variable. The two unifications supply the conditions for checking error, not a guarantee against error. After an error, the record can locate the problem in a standard that needs revision or in context that needs filling in.

## 6. To unify a standard, start with value

If an organization is going to use a shared standard, the lowest starting point is this: **judge by value**.

It asks the organization, before it chooses, to state the ranking in full: what observable change this work brings, for whom; when the signal should appear; and which boundaries cannot be crossed for the sake of the result. A slogan that "there should be value," or a formula that promises to compute any answer on its own, will not do that work.

The same feature, for example, can raise short-term usage and also raise the risk of misleading users. Saying only "growth matters" or "users first" is not enough to judge. The team still has to say which users' situation is to be improved, what evidence will confirm that the improvement happened, and where the boundaries of safety, honesty, and compliance sit. Written that far, a slogan becomes a standard that can be checked.

Value also cannot replace a professional standard. Medical judgment still has to obey safety and evidence requirements; financial judgment still has to meet accounting and legal rules; product judgment still has to understand particular users. Judge by value supplies only the lowest ranking direction. When several plans can all be done, the choice is not made by the proposer's rank, by how busy the team is, or by the volume of the moment. The real changes they would create are put on the same sheet.

The standard is most useful before the fact. Defining "long-term value" after results appear cannot produce a testable criterion. Written in advance—object, result, and boundary—reality has a chance to falsify it. How money, time, and judgment are allocated is a problem of limiting resources.

## 7. Duan Yongping's influence circle: how a judgment becomes copyable language

OPPO's official recruiting page, vivo's statement of corporate culture, and Pinduoduo's prospectus filed with the U.S. Securities and Exchange Commission all use the same word: **benfen**.

OPPO's current recruiting page unfolds it into five items: do the right thing; think critically; look first to your own responsibility; do not take advantage of others; benfen above honesty. In an official 2014 statement, vivo explained benfen as keeping an ordinary mind, setting aside the interference of difficulty, pressure, and temptation, returning to the nature of things, persisting in doing the right thing, and striving to do the thing right. Pinduoduo's 2018 prospectus listed integrity and duty, not being swayed by outside pressure, not taking advantage of others, and examining oneself first when a problem appears, and it placed management's benfen on continuously creating value for consumers (OPPO, current recruiting page; vivo, 2014; Pinduoduo, 2018).

The wording is not identical line for line, yet the behaviors constrained overlap closely: keep the original ranking under outside pressure; check one's own responsibility first when something goes wrong; do not take advantage of the other party when one holds a bargaining edge; name the object of value when several options sit on the table. These are not operating steps for one product. They are a language of trade-offs used on different problems.

In the publicly compiled notes of a 2018 conversation at Stanford, Duan Yongping explained benfen and an ordinary mind as returning to the nature of things: "do the right thing, and do the thing right" (Duan Yongping, 2018, public compilation). The sentence compresses two different judgments: first confirm whether the direction is worth taking, then raise the ability to complete it. In the formal texts of OPPO, vivo, and Pinduoduo, it is unfolded again into more specific behavioral boundaries.

That language does not depend on Duan sending orders every day. In a public reply in 2019, he said he had never remotely controlled OPPO or vivo, and that he learned about the companies mainly from the internet; he also said it was not appropriate to call Huang Zheng a disciple (Duan Yongping, 2019). "Duan Yongping's influence circle" names a set of companies and people reached by a shared language of judgment. It is not a formal organization with a control relationship.

This material can confirm that a language of judgment was copied. One person's claim, after leaving the original speaker, entered other organizations' recruiting, brand statements, and listing documents. Other members can cite it, reinterpret it, and use it to check concrete behavior. A person's tacit judgment cannot be passed on word for word. A written standard can be discussed.

A corporate-culture page is the organization's self-description, not a recording of actual decisions. Shared use of "benfen" cannot prove that every member acts by it, and still less that several companies' operating results were caused by this one word. What Duan Yongping's influence circle can show is only this: a judgment turned into copyable language. It leaves direct textual evidence. Market share, valuation, or wins across cycles cannot stand in for those texts as proof of cause.

Once a judgment standard is written, a gap in context can still split a decision. If participants hold different facts, or if a key concern never enters the same packet of material, even a clear mission and a set of values cannot fill in the information. The OpenAI board events of November 2023 present that break.

## 8. OpenAI's five days: how context fractured at the top

On November 17, 2023, OpenAI's board announced that it had removed Sam Altman as CEO and as a director. The announcement attributed the removal to Altman not having been consistently candid in his communications, which had hindered the board in carrying out its duties (OpenAI, 2023a).

That public reason points to a gap in information from management to the board. The board's next moves then exposed a break in the opposite direction: the management team, employees, and key partners had not been given material sufficient to understand a decision of that size in advance.

Three days later, more than seven hundred employees signed an open letter. OpenAI had about 770 employees at the time (The New York Times, 2023). The letter asked that Altman and Greg Brockman be restored and the board reconstituted, or the signers might move to Microsoft. The headcount shows that the decision rapidly lost organizational support. It cannot show that the facts of the matter had been settled by a vote. A majority can change a governance outcome, and it still cannot replace a check of the original concerns.

On November 21, OpenAI decided to rehire Altman and Brockman; the company announced an agreement in principle on the 22nd. The stretch from the 17th to the 22nd is usually summarized as a five-day crisis. The formal announcement of return was issued on November 29, with a new initial board of Bret Taylor, Larry Summers, and Adam D'Angelo, who remained from the old board (OpenAI, 2023b).

In March 2024, OpenAI published a summary of a review by WilmerHale. The review team examined more than 30,000 documents and conducted dozens of interviews. The summary said that a breakdown in the relationship between the former board and Altman, and a loss of trust, had prompted the events of November 17; the removal was not driven by concerns about product safety, product security, the pace of development, the company's finances, or statements to investors, customers, and commercial partners (OpenAI, 2024).

The same summary noted that the former board had executed the decision in compressed time, had not given advance notice to key stakeholders, had not conducted a complete investigation, and had not given Altman a chance to respond to the board's concerns. The summary found that the board had the authority to remove him, and that his conduct did not necessarily require removal; the preparation of the decision also had not covered the disruption that followed at the company.

These facts present a two-way break in context. Management communication was described in the announcement as incomplete. Investigation, a chance to respond, and notice to stakeholders before the board decided were incomplete too. Both sides were bound by the formal mission of ensuring that artificial general intelligence benefits all of humanity, and they did not share facts, concerns, and procedure sufficient to check the judgment.

That does not mean the board was necessarily wrong, and it does not mean Altman's return proved him wholly right. The arrangement five days later was a new settlement produced by employees, partners, governance rights, and organizational stability acting together. It was not a court judgment, and still less a ruling on all of the disputed facts. What OpenAI later published is a review summary relayed by the new board; the full report has not been made public. What the former board meant by "not candid" still cannot be fully reconstructed from outside.

The public material supports one conclusion. When the highest layer of governance does not hold one checkable context, a formal mission, extraordinary talent, and advanced technology cannot fill in the missing information for the organization. A company that builds large models can still lose shared material in the place where shared judgment is needed most.

## 9. How different organizations write judgment down

Judgment standards and context do not exist only in commercial companies. Different kinds of organization use wholly different carriers to make them explicit. Comparing the carriers helps make the mechanism visible; scale and results cannot stand in as proof of the theory.

The Communist Party of China writes a large body of judgment standards into its program, constitution, and internal regulations. The 2022 Party Constitution states that thought and action are to be unified by theory and by the basic line, and it sets organizational requirements such as democratic centralism, requests and reports, the exchange of information between higher and lower levels, and openness of Party affairs. The Regulations on Requests and Reports on Major Matters go further, specifying which matters must be reported, who is responsible, and by what procedure they are handled (CPC Central Committee, 2019). A 2023 work plan on investigation and research then wrote problem-sorting, field research, deeper study, problem-solving, and follow-up inspection into formal steps (General Office of the CPC Central Committee, 2023).

Musk's companies use another kind of carrier. In a 2013 TED interview, Musk explained first principles as reasoning upward from the most basic facts, rather than copying others' methods by analogy alone (Musk, 2013). Tesla published two versions of its master plan, in 2006 and 2016, writing long-term goals and the product path for employees, investors, and the outside to read. SpaceX's Starship flight-test records state test objectives, items not completed, directions of investigation, and the next round of changes; the company calls the method rapid iterative development (Musk, 2006, 2016; SpaceX, 2024).

What the two samples share is only that the carrier is visible. One relies on institutional texts and formal reporting relationships. The other depends heavily on a founder's language, public plans, and engineering feedback. Public material can confirm that these mechanisms were written down. It cannot, by itself, prove that they always work. The Party's institutional texts cannot prove that information is never filtered, that standards are never applied selectively, or that the two unifications have no ceiling of scale. Musk's public methods cannot prove that thousands of engineers all reason in the same way, or that results across companies were caused by these mechanisms. Development tests in a plan can produce important data; a failed test can still have safety consequences and face a regulatory investigation. The aim of learning does not turn every explosion into "not an accident." Documents give judgment an entrance at which it can be checked. Actual results test whether the mechanism in the document occurred.

## 10. Five tests: diagnose first, then talk metrics

"Our company has judgment" cannot be argued with, and so cannot help management. To check whether judgment has left the individual, look in five directions: win rate, correction rate, replication rate, migration rate, and spillover rate. Each name contains a "rate." At this stage none of them can be used to score a company out of ten and then produce a ranking. For each, it is necessary first to say what is counted, what it is divided by, and how often it is reviewed.

**Win rate** asks how many of a class of key judgments finally met the result agreed in advance. The denominator has to include all judgments in the same period that came due and should have been reviewed, not only the successes. The criterion of result also has to be written before action. One success may come from the environment, from execution, or from luck, so win rate can only be read against a historical baseline for similar tasks. It cannot, on its own, prove that the judgment standard is right.

**Correction rate** asks how often, after a falsifying signal appears, the organization revises or stops the original judgment inside an agreed time. Speed and cost matter too, and they should not be packed vaguely into the same "rate." Time from signal to completed revision, and loss from continuing the wrong action, can be reported separately. Without a prior statement of what signal counts as falsification, so-called correction easily becomes a change of story after the fact.

**Replication rate** asks whether, with the original judge absent, other teams can complete the judgment from the same standard and context, within an allowed margin of error. The test is not whether newcomers can recite a slogan. It is whether, after the person changes, someone can still state the reason for the trade-off, recognize the boundary, and get an acceptable result. Without a change-of-person test, the organization cannot tell whether the document is working, or whether the author is still working on the document's behalf.

**Migration rate** asks how often a judgment, moved from its original scene to a new region, task, or object, still holds under the conditions set in advance. Every attempt at migration should be registered; failures cannot disappear from the denominator. Distance of migration and difficulty of task also have to be similar, or the number has little meaning. Otherwise one cross-industry success and ten reuses in adjacent scenes cannot be compared.

**Spillover rate** asks whether people outside the organization actually adopt the language and the standards. Media mention of a word, or users remembering a slogan, can prove only fame. An outside team beginning to use the language to describe problems, record decisions, or constrain behavior comes closer to spillover. Because the target population is usually unclear, this item is, for now, better recorded as "signs of spillover" than turned into a precise percentage.

The first four, inside one organization, on similar tasks, and in the same time window, can gradually become internal metrics. Compared across industries and stages, the definitions distort easily. Spillover is still harder to give a reliable denominator. The five cannot be added into one total. They check, separately, whether judgment produces results, whether it can be corrected, whether it can be reused after the person changes, whether it still holds after the scene changes, and whether it is actually used outside the organization.

For personal adaptive insight to become an organizational asset, the judgment standard has to be written clearly, the relevant context has to sit in one version, and reuse and feedback have to leave a record. Even then, settling a judgment does not put it into unlimited supply. The number of matters a company needs judged keeps rising; reliable judges and chances to verify remain limited. Where limited judgment should go then becomes a problem of a limiting resource.

## What to Do Monday Morning

From the company's last three important decisions, pick one. Find someone who was not in the room, and prepare one sheet.

On the top half, write the judgment standard: what value this decision is to create, for whom; what the priority is; which boundaries cannot be crossed; and what evidence counts. On the bottom half, write the context: facts already confirmed, assumptions still in use, items not yet confirmed, sources of the material, and when they were updated. Add only two lines at the end: what signal would overturn the present conclusion, and when to come back and look again.

Give the sheet to the person who was not in the meeting. It can also be given to an AI at the same time. Ask that person to restate why the choice was made, to point out the weakest assumption, and to say what new fact would require a different answer. If they can only repeat the conclusion, the judgment is still in the original author's head. If they can restate it, question it, and keep working it, that judgment has begun to move from personal adaptive insight to organizational judgment.

## Quotable Lines

1. Put a hundred people with adaptive insight into one company and you do not automatically get a hundredfold of it.
2. Once a judgment leaves the person who made it, what, exactly, can remain?
3. "Do not build this feature" copied into the minutes leaves an order.
4. A boss who is right several times in a row has shown that personal judgment works. Other people continuing to judge from the same materials shows that the judgment has entered the organization.
5. The two unifications leave organizational judgment a minimum interface: which ruler, and which set of facts it measures.
6. Open weights can be copied, and that still does not mean the judgments inside them can be taken apart into clear clauses.
7. A company needs the key judgments made into explicit common material, not a shared set of hidden parameters.
8. The two unifications supply the conditions for checking error, not a guarantee against error.
9. Defining "long-term value" after results appear cannot produce a testable criterion. Written in advance, reality has a chance to falsify it.
10. A person's tacit judgment cannot be passed on word for word. A written standard can be discussed.
11. A majority can change a governance outcome, and it still cannot replace a check of the original concerns.
12. A company that builds large models can still lose shared material in the place where shared judgment is needed most.
13. Documents give judgment an entrance at which it can be checked. They cannot guarantee that the mechanism in the document has actually occurred.
14. For each metric, first say what is counted, what it is divided by, and how often it is reviewed.
15. If they can only repeat the conclusion, the judgment is still in the original author's head. If they can restate it, question it, and keep working it, it has begun to become organizational judgment.

## Connections to Adjacent Chapters

- Continuing from Chapter 3: everyone's head holds unwritten, unaligned rulers; personal adaptive insight cannot be scaled by copying people. This chapter takes the problem to the organization, and asks what a judgment can leave behind after the author.
- This chapter only: defines organizational judgment, delivers the two unifications as the one main frame, uses Duan Yongping's influence circle and the OpenAI board to present copied standards and fractured context, then uses five diagnostic tests to check whether judgment has become an asset.
- Handed to Chapter 5: settling a judgment does not put it into unlimited supply. Why it becomes the limiting resource of an AI-native organization, and where limited judgment should go, is the next chapter.
- Left blank: Chapter 5's ROI, Chapter 6's standards cycle, and Chapter 9's consensus cycle; Duan's "dare to be last" stays in Chapters 7 and 12.

## Chapter Acceptance Self-Check (against chapter acceptance standards)

1. Claim restatable in one sentence ✓: organizational judgment is settled, unified, reused adaptive insight; the two unifications are the shareable inputs, not a complete recipe for success.
2. Ten-section spine and whiteboard figure ✓: personal landing → definition → why two unifications → model analogy → four states → judge by value → Duan → OpenAI → carriers → five diagnostic tests. Quadrants no longer equate upper right with a complete AI-native organization, or context with consensus.
3. Evidence caliber ✓: Vaswani; Jain & Wallace; Anthropic; Turpin. Duan from OPPO, vivo, Pinduoduo texts and the 2019 public reply; language adoption only, no operating cause. OpenAI dates and WilmerHale summary distinguished; five-day settlement not written as a verdict; full report marked unpublished.
4. Case contract ✓: Duan circle for copied standards; OpenAI for fractured context; CCP and Musk as visible carriers only, no scale or performance comparison. Wang Laboratories is out.
5. Metrics ✓: five names kept; units, denominators, windows, and comparison bounds supplied; 1–10 scores and a cross-industry ranking removed; spillover recorded as signs.
6. Chapter boundary ✓: no ROI, standards cycle, consensus cycle, or three-layer judgment system in the body. Klarna and MD Anderson are out; Nokia is one echo.
7. Fluency ✓: rewritten in English voice from the Chinese authority; current prose-standard.
