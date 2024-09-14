<!--21-->
<!--(マクロ)シンプルに図を貼る-->

```latex
    % 1枚の図を貼るマクロ
    \newcommand{\inputpic}[2]{ %
        \includegraphics[width={#2}\linewidth]{#1}}
        
    % 2枚の図を並列に貼るマクロ
    \newcommand{\twocolpage}[2]{ %
        \begin{minipage}[b]{.5\linewidth}\centering #1\end{minipage}%
        \begin{minipage}[b]{.5\linewidth}\centering #2\end{minipage}}

    \newcommand{\twofigure}[4][h]{ %
        \begin{figure}[#1]\centering\twocolpage{#2}{#3}#4\end{figure}}
```

### 基本的な使い方

---

- **入力**
    
    ```latex
        % 図を1枚貼りたいとき
        % 通常のコマンドと大差ないかも
        \begin{figure}
            \centering
            \inputpic{Graph.pdf}{0.9}
            \caption{Caption.}
            \label{fig:label}
        \end{figure}
        
        % 2枚並列で貼りたいとき
        % かなりシンプルに書ける
        \twofigure[H]
            {\inputpic{Graph1.pdf}{.9}}
        {\inputpic{Graph2.pdf}{.9}}
            {\caption{Caption.}
            \label{fig:label}}    
    ```
    

---

- **関連リンク**
    
    <div class="related-link-wrapper">
      [modal-12]<!--図挿入(figure環境)--><br>
      [modal-9]<!--好きな位置に図表を配置(floatパッケージ)-->
    </div>
    