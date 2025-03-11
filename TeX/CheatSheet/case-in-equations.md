<!--20-->
<!--場合分け（数式中）-->

### （推奨） cases パッケージを使う

---

- **入力**
    
    ```latex
        \begin{align*}
            f(x)=
            \begin{cases}
                1 & (x \geq 0)\\
                0 & (x < 0)
            \end{cases}
        \end{align*}
    ```
    
- **出力**
    <div>
    $$
    f(x)=
    \begin{cases}
    1 & (x \geq 0)\\
    0 & (x < 0)
    \end{cases}
    $$
    </div>

### LaTeX標準機能のみ

---

- **入力**
    
    ```latex
    \begin{align*}
        f(x) = \left\{
        \begin{array}{ll}
            1 & (x \geq 0)\\
            0 & (x < 0)
        \end{array}
        \right.
    \end{align*}
    ```
    
- **出力**
    
    <div>
    $$
    f(x) = \left\{
    \begin{array}{ll}
    1 & (x \geq 0)\\
    0 & (x < 0)
    \end{array}
    \right.
    $$
    </div>

<aside class="warning">
<div>
array環境+left, rightは汎用的な書き方をできるが、少しごちゃっとする。また、かっことの間や文字間に余計な隙間が生まれてしまう。
場合分けを書くのに特化しているcases環境を使った方がよい。
</div>
</aside>

- 行列を作りたいときは、[modal-19]<!--行列（数式）-->へ。

---

- **関連リンク**

    <div class="related-link-wrapper">
      [modal-11]<!--大きなかっこ（数式）--><br>
      [modal-19]<!--行列（数式）-->
    </div>