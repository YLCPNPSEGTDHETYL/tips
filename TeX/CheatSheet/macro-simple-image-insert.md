

```latex
% 1枚の図を貼るマクロ
% \newcommand{\inputpic}[2]{%
% 	\includegraphics[width={#2}\linewidth]{#1}}
	
% % 2枚の図を並列に貼るマクロ
% \newcommand{\twocolpage}[2]{%
% 	\begin{minipage}[b]{.5\linewidth}\centering #1\end{minipage}%
% 	\begin{minipage}[b]{.5\linewidth}\centering #2\end{minipage}}

% \newcommand{\twofigure}[4][h]{%
% 	\begin{figure}[#1]\centering\twocolpage{#2}{#3}#4\end{figure}}
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
    
    [図挿入(figure環境)](%E5%9B%B3%E6%8C%BF%E5%85%A5(figure%E7%92%B0%E5%A2%83)%20e818273dc31e44bfbce1eb5d7eac05ea.md) 
    
    [好きな位置に図表を配置(**float**パッケージ)](%E5%A5%BD%E3%81%8D%E3%81%AA%E4%BD%8D%E7%BD%AE%E3%81%AB%E5%9B%B3%E8%A1%A8%E3%82%92%E9%85%8D%E7%BD%AE(float%E3%83%8F%E3%82%9A%E3%83%83%E3%82%B1%E3%83%BC%E3%82%B7%E3%82%99)%209b4cfdcc219b4c09a9b859cb9551492b.md)