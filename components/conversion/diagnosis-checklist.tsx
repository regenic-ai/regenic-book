import Link from "next/link";

import {
  diagnosisQuestions,
  diagnosisQuestionsEn,
} from "@/lib/conversion/content";

type DiagnosisChecklistProps = {
  locale: string;
  selected: Set<number>;
  submitted: boolean;
};

export function DiagnosisChecklist({
  locale,
  selected,
  submitted,
}: DiagnosisChecklistProps) {
  const isEnglish = locale === "en";
  const questions = isEnglish ? diagnosisQuestionsEn : diagnosisQuestions;
  const score = selected.size;
  const result =
    score >= 6
      ? {
          title: isEnglish ? "The first cycle meets the acceptance line" : "第一轮进化达到验收线",
          copy: isEnglish ? "Six or more checks passed. Keep sampling weak points through observed behavior and write failures back into the standards." : "六问及以上通过。请继续用真实行为抽查薄弱项，并把失败样本写回标准库。",
        }
      : score < 4
        ? {
            title: isEnglish ? "Return to the Weeks 1–2 audit" : "回到第 1—2 周重新审计",
            copy: isEnglish ? "Fewer than four checks usually means the limiting resource was misidentified. Review spending and recurring judgments before adding tools." : "不足四问通常意味着限制性资源判断有误。先看支出流水和高频判断，不要急着加工具。",
          }
        : {
            title: isEnglish ? "The loop is not stable yet" : "闭环尚未稳定",
            copy: isEnglish ? "Four or five checks show local mechanisms, but no shared default. Fix the two questions with the greatest disagreement first." : "四至五问通过说明局部机制已经出现，但还没有形成统一默认值。优先修复答案分歧最大的两问。",
          };

  return (
    <form className="diagnosis-form" method="get">
      <fieldset>
        <legend>{isEnglish ? "Select only items verified by observed behavior" : "勾选已被真实行为验证为「是」的项目"}</legend>
        <p className="form-help">
          {isEnglish ? "Do not score self-reports. Ask three randomly selected core members separately, use the lowest score, and treat conflicting answers as a failure." : "不按自述打分。一号位随机抽三名核心成员分别作答，取最差成绩；答案互相矛盾按不通过计。"}
        </p>
        <ol className="diagnosis-list">
          {questions.map((question, index) => {
            const value = index + 1;
            return (
              <li key={question}>
                <label>
                  <input
                    defaultChecked={selected.has(value)}
                    name="q"
                    type="checkbox"
                    value={value}
                  />
                  <span>
                    <b>{String(value).padStart(2, "0")}</b>
                    {question}
                  </span>
                </label>
              </li>
            );
          })}
        </ol>
      </fieldset>
      <button className="button primary" type="submit">
        {isEnglish ? "View diagnosis" : "查看诊断"}
      </button>
      {submitted ? (
        <section className="diagnosis-result" aria-live="polite">
          <p className="eyebrow">{isEnglish ? "Result" : "结果"} · {score} / 8</p>
          <h2>{result.title}</h2>
          <p>{result.copy}</p>
          <div className="inline-actions">
            <Link className="text-link" href={`/${locale}/tools/90-days`}>
              {isEnglish ? "Open the 90-day roadmap →" : "打开 90 天路线 →"}
            </Link>
            <Link className="text-link" href={`/${locale}/book/14-ninety-days`}>
              {isEnglish ? "Read the source in Chapter 14 →" : "核对第 14 章原文 →"}
            </Link>
          </div>
        </section>
      ) : null}
    </form>
  );
}
