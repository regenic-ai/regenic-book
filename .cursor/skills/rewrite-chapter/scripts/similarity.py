#!/usr/bin/env python3
"""查新稿里有多少句子只是原句换词。

用法：
    python3 similarity.py 原稿文件 新稿文件 [阈值]

阈值默认 0.6：一个新句和某个原句的相似度达到它，就算"换词"。
短句（少于 10 个字）和含数字的句子只列出、不计入——数字和出处本来就该保住。
退出码：计入的句子里超过一半相似则 1，否则 0。
"""
import difflib
import re
import sys


def sentences(text):
    # 去掉 markdown 记号，按中文句读切
    text = re.sub(r"[#>*`\-|\[\]()「」\"'：:，、]", " ", text)
    parts = re.split(r"[。！？；\n]", text)
    return [p.strip() for p in parts if len(p.strip()) >= 4]


def main():
    if len(sys.argv) < 3:
        print(__doc__)
        sys.exit(2)
    threshold = float(sys.argv[3]) if len(sys.argv) > 3 else 0.6
    old = sentences(open(sys.argv[1], encoding="utf-8").read())
    new = sentences(open(sys.argv[2], encoding="utf-8").read())

    eligible = 0
    hits = []
    skipped = []
    for s in new:
        best_ratio, best_old = 0.0, ""
        for o in old:
            r = difflib.SequenceMatcher(None, s, o).ratio()
            if r > best_ratio:
                best_ratio, best_old = r, o
        if len(s) < 10 or re.search(r"\d", s):
            if best_ratio >= threshold:
                skipped.append((best_ratio, s, best_old))
            continue
        eligible += 1
        if best_ratio >= threshold:
            hits.append((best_ratio, s, best_old))

    print(f"新句 {len(new)} 句；计入 {eligible} 句（短句和含数字的句子只列不计）")
    print(f"只是换词的：{len(hits)} 句")
    if eligible:
        pct = len(hits) / eligible
        print(f"占比：{pct:.0%}（超过一半算重写失败）")
    else:
        pct = 0.0

    if hits:
        print("\n--- 这些句子像原句换词 ---")
        for ratio, s, o in sorted(hits, reverse=True):
            print(f"\n[{ratio:.2f}] 新：{s}")
            print(f"        原：{o}")

    if skipped:
        print("\n--- 相似但含数字/很短（事实该保住，人来定） ---")
        for ratio, s, o in sorted(skipped, reverse=True):
            print(f"\n[{ratio:.2f}] 新：{s}")
            print(f"        原：{o}")

    sys.exit(1 if eligible and len(hits) / eligible > 0.5 else 0)


if __name__ == "__main__":
    main()
