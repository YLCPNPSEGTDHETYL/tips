<!--17-->
<!--行送り、行間の調整-->

### 行間の変更

---

```latex
    % preamble
    \usepackage{setspace}
    \setstretch{1.05} % ページ全体の行間を設定

    \begin{document}
        ここに文章
    \end{document}
```

- 数字部分は、デフォルトを1として、倍率で行間が変化する（上なら1.05倍）。
- 和文は欧文に比べて行間が狭く見えやすいので、1.05~1.1倍程度に調整しておくのがよい。

### 文章中の一部だけ行間を変更

---

```latex
    \begin{spacing}{1.5}
        ここに文章
    \end{spacing}
```

- 引数の数字は`\setstretch`コマンドと同様。

### 行送り（行間＋文字の高さ）の変更

---

- **入力**
    
    ```latex
        \begin{document}
            なにか文章\\
            % documentの中に書く
            \setlength{\baselineskip}{18pt}
            ここから先の行送りが変更される。
        \end{document}
    ```
    
- **出力**
    
    行送り（行間＋文字の高さ）が18ptになる。
    こっちの書き方はあんまり推奨されない。
    

---

- **関連リンク**

    <div class="related-link-wrapper">
      [modal-14]<!--長さの単位--><br>
      [modal-15]<!--ページレイアウト--><br>
      [modal-18]<!--インデント（字下げ）調整--><br>
      [modal-3]<!--余白設定（geometryパッケージ）-->
    </div>