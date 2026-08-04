export type ChapterDisplayTitle = {
  kicker: string | null;
  main: string;
};

/** Split "第 N 章 …" / "Chapter N: …" so the page can stack kicker + title. */
export function splitChapterTitle(title: string): ChapterDisplayTitle {
  const zh = title.match(/^(第\s*\d+\s*章)[　\s]+(.+)$/u);
  if (zh) {
    return { kicker: zh[1].replace(/\s+/g, " ").trim(), main: zh[2].trim() };
  }

  const zhFront = title.match(/^(前言|前置页)[　\s]+(.+)$/u);
  if (zhFront) {
    return { kicker: zhFront[1], main: zhFront[2].trim() };
  }

  const en = title.match(/^(Chapter\s+\d+|Preface)\s*[:：]\s*(.+)$/i);
  if (en) {
    return { kicker: en[1].trim(), main: en[2].trim() };
  }

  return { kicker: null, main: title };
}
