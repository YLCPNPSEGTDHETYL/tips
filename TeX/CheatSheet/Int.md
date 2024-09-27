<!--25-->
<!--積分記号-->

### LaTeX標準機能のみ
---


- **出力例**
    | **種類**   | **記法**                             | **表現例**                              |
    |--------|----------------------------------|-------------------------------------|
    | 積分 | `\int`                          | $$ \int f(x) \, \mathrm{d}x $$        |
    | 2重積分 | `\iint`                         | $$ \iint f(x, y) \, \mathrm{d}x \, \mathrm{d}y $$ |
    | 3重積分 | `\iiint`                        | $$ \iiint f(x, y, z) \, \mathrm{d}x \, \mathrm{d}y \, \mathrm{d}z $$ |
    | 多重積分| `\idotsint`                         | $$ \int\cdots\int f(x_1\cdots x_n) \, \mathrm{d}x _1\cdots \mathrm{d}x_n$$       |
    | 周回積分| `\oint`                         | $$ \oint f(x) \, \mathrm{d}x $$       |
    | 定積分  | `\int_{a}^{b}`                  | $$ \int_{a}^{b} f(x) \, \mathrm{d}x $$ |
    | 広義積分  | `\int_{0}^{\infty}`                  | $$ \int_{0}^{\infty} f(x) \, \mathrm{d}x $$ |


### おまけ
---

- **dxのかき方**
    微分記号の`dx`を立体で出す流儀の場合は、physicsパッケージを用いると良い。
    ```latex
        \int_a^b f(x)\dd{x}
    ```

- **f(x)とdxの間のスペース**
    スペースを入れる場合は、小さいスペース`\,`を使うと良い。
    ```latex
        \int_a^b f(x)\, \dd{x}
    ```
---

- **関連リンク**

    <div class="related-link-wrapper">
        [modal-26]<!--微分記号-->
    </div>
    