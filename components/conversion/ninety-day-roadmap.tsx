import {
  ninetyDayPhases,
  ninetyDayPhasesEn,
} from "@/lib/conversion/content";

export function NinetyDayRoadmap({ locale }: { locale: string }) {
  const isEnglish = locale === "en";
  const phases = isEnglish ? ninetyDayPhasesEn : ninetyDayPhases;
  return (
    <ol className="roadmap">
      {phases.map((phase, index) => (
        <li key={phase.weeks}>
          <article>
            <header>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <p>{phase.weeks}</p>
                <h2>{phase.title}</h2>
              </div>
            </header>
            <ul>
              {phase.actions.map((action) => (
                <li key={action}>{action}</li>
              ))}
            </ul>
            <dl>
              <div>
                <dt>{isEnglish ? "Deliverable" : "交付物"}</dt>
                <dd>{phase.deliverable}</dd>
              </div>
              <div>
                <dt>{isEnglish ? "Most common failure" : "最常见的死法"}</dt>
                <dd>{phase.failure}</dd>
              </div>
            </dl>
          </article>
        </li>
      ))}
    </ol>
  );
}
