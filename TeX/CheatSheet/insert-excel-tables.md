<!--22-->
<!--Excel等で作った表をTeXに挿入-->

### Tables Generator

---

- <span class="exlink">[**Tables Generator（外部リンク）**](https://www.tablesgenerator.com/latex_tables)</span>などのサイト上で行うとよい。
    - File>Paste tabe dataで、Excelの表をコピペしたのち、Generateボタンを押すと生成される。
    - 整列（左寄せ、中央、右寄せ）や罫線、行列のマージなどもでき、かなり複雑な表でも生成してくれるので便利。
    - 「Extra options…」で「caption above」および「Center table horizontally」のチェックをしておくとよい。

### 入力、出力結果

---

![Excelでつくった表をTeXに挿入](./insert-excel-tables/1.png "max-width=500px")

上がExcelで作った表。

```latex
    % Please add the following required packages to your document preamble:
    % \usepackage{multirow}
    \begin{table}[] %to be edited
        \centering
        \caption{} %to be edited
        \label{tab:my-table} %to be edited
        \begin{tabular}{ccc}
            地域                  & 都道府県 & 面積(km²)  \\
            \multirow{7}{*}{関東} & 東京    & 2,190.93  \\
                                 & 神奈川   & 2,415.83  \\
                                 & 埼玉    & 3,797.75  \\
                                 & 千葉    & 5,157.65  \\
                                 & 茨城    & 6,097.06  \\
                                 & 栃木    & 6,408.09  \\
                                 & 群馬    & 6,362.28  \\
            \multicolumn{2}{c}{合計}       & 32,429.59
        \end{tabular}
    \end{table}
```

<span class="exlink">[**Tables Generator（外部リンク）**](https://www.tablesgenerator.com/latex_tables)</span>で実際に出力された表。簡単な表だけでなく、セル間の結合があるような複雑な表でも簡単に作ってくれて便利。

なお、`\multirow`を使うためには、`\usepackage{multirow}`が必要。

---

- **関連リンク**

    <div class="related-link-wrapper">
      [modal-12]<!--図の挿入（figure環境）--><br>
      [modal-2]<!--表の挿入（tabular環境）-->
    </div>