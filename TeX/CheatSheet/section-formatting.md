# sectionなどの書式変更

オプションなど: 1.1節のように、書式の表示設定を変更する。
タグ: 体裁／文書構造, 基本
追加説明: section等のスタイルの書式および変更

| **命令** | **見出し** |
| --- | --- |
| ¥part{タイトル} | 部 |
| ¥chapter{タイトル} | 章（jsreport, jsbook） |
| ¥section{タイトル} | 節 |
| ¥subsection{タイトル} | 項（小節） |
| ¥subsubsection{タイトル} | 目（小々節） |
| ¥paragraph{タイトル} | 段落 |
| ¥subparagraph{タイトル} | 小段落 |

見出し番号をつけないときには、`\section*{タイトル}`のようにする。

### **書式指定の変更**

---

```latex
% 節.小節 の順にアラビア数字で表示する場合(1.1節など)
\renewcommand{\thesection}{\arabic{section}}
\renewcommand{\thesubsection}{\thesection.\arabic{subsection}}
```

- カウンタ一覧
    
    
    | **命令** | **出力形式** |
    | --- | --- |
    | ¥arabic{counter} | アラビア数字 (1, 2, …) |
    | ¥roman{counter} | (大)ローマ数字 (i, ii, …) |
    | ¥Roman{counter} | (小)ローマ数字 (I, II, …) |
    | ¥alph{counter} | (大)アルファベット (a, b, …) |
    | ¥Alph{counter} | (小)アルファベット(A, B, …) |

---

- **関連リンク**
    
    [ドキュメントクラス](%E3%83%88%E3%82%99%E3%82%AD%E3%83%A5%E3%83%A1%E3%83%B3%E3%83%88%E3%82%AF%E3%83%A9%E3%82%B9%2038f51f95af744e9a84a8ed33c4770ac6.md)