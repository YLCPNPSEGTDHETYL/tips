<!--19-->
<!--行列(数式)-->

### (推奨) amsmath パッケージを使う

---

- **入力**
    
    ```latex
        %丸かっこの場合 
        \begin{align*}
            \begin{pmatrix}
                a_{11} & \cdots & a_{1i} & \cdots & a_{1n}\\
                \vdots & \ddots &        &        & \vdots \\
                a_{i1} &        & a_{ii} &        & a_{in} \\
                \vdots &        &        & \ddots & \vdots \\
                a_{n1} & \cdots & a_{ni} & \cdots & a_{nn}
            \end{pmatrix} 
        \end{align*}
    ```
    
- **出力**
    
    ![1](/TeX/CheatSheet/matrix-in-equations/1.png "max-width=285px")
    
- **括弧の種類一覧**
    
    
    | **環境** | **概要** | **見た目** |
    | --- | --- | --- |
    | matrix | かっこなし |  |
    | pmatrix | 丸かっこ、parentheses | $(~)$ |
    | bmatrix | 角かっこ、braket | $[~]$ |
    | vmatrix | 縦棒(行列式)、Vertical bar | $\|~\|$ |
    | Vmatrix | 2本の垂直棒 | $\|\|~\|\|$ |

### (非推奨)LaTeX標準機能のみ

---

- **入力**
    
    ```latex
        \begin{align*}
            \left(
            \begin{array}{ccccc}
                a_{11} & \cdots & a_{1i} & \cdots & a_{1n}\\
                \vdots & \ddots &        &        & \vdots \\
                a_{i1} &        & a_{ii} &        & a_{in} \\
                \vdots &        &        & \ddots & \vdots \\
                a_{n1} & \cdots & a_{ni} & \cdots & a_{nn}
            \end{array}
            \right)
        \end{align*}
    ```
    
- **出力**
    
    <div>
    $$
    \left(
    \begin{array}{ccccc}
        a_{11} & \cdots & a_{1i} & \cdots & a_{1n}\\
        \vdots & \ddots &        &        & \vdots \\
        a_{i1} &        & a_{ii} &        & a_{in} \\
        \vdots &        &        & \ddots & \vdots \\
        a_{n1} & \cdots & a_{ni} & \cdots & a_{nn}
    \end{array}
    \right)
    $$
    </div>

<aside class="warning">
<div>
array環境+left, rightは汎用的な書き方をできるが、少しごちゃっとする。また、かっことの間や文字間に余計な隙間が生まれてしまう。
amsmathパッケージを導入している場合は、matrix環境を使う方が良い(記述もこっちのほうが簡単)。
</div>
</aside>

---

- **関連リンク**
    
    <div class="related-link-wrapper">
      [modal-20]<!--場合分け(数式中)--><br>
      [modal-11]<!--大きなかっこ(数式)-->
    </div>