<!-- 10 -->
<!--大きなかっこ(数式)-->

<aside class="warning">
<div>
本項目は、分数などの縦に長い数式を括弧で囲むときに、括弧の高さを調節するということをメインに扱います。


- <div class="related-link-wrapper">
    {別行立ての数式の場合分け：}[modal-20]<!--場合分け(数式中)--> <br>
    {行列を書きたいとき：}[modal-19]<!--行列(数式)-->
  </div>

</div>
</aside>

### **大きさを変えられる文字一覧**

---

| **出力** | **コマンド** |
| --- | --- |
| $( )$ | `( )` , or `\lparen`  `\rparen` |
| $\{ \}$ | `\( \)` , or `\lbrace`  `\rbrace` |
| $[ ]$ | `[ ]` , or `\lbrack`  `\rbrack` |
| $\lvert \rvert$ | `\| \|` , `\vert`, or `\lvert`  `\rvert` |
| $\| \|$ | `\| \|` `\Vert`, or `\lVert`  `\rVert` |
| $\langle\rangle$ | `\langle`  `\rangle` |
| $\lfloor\rfloor$ | `\lfloor`  `\rfloor` |
| $\lceil \rceil$ | `\lceil`  `\rceil` |
| $\ulcorner \urcorner$ | `\ulcorner`  `\urcorner` |
| $\llcorner \lrcorner$ | `\llcorner`  `\lrcorner` |
| $\uparrow$ | `\uparrow` |
| $\downarrow$ | `\downarrow` |
| $\updownarrow$ | `\updownarrow` |
| $\backslash$ | `\backslash` |
| $\Uparrow$ | `\Uparrow` |
| $\Downarrow$ | `\Downarrow` |
| $\Updownarrow$ | `\Updownarrow` |

### **1. 自動調整(left, right)**

---


<aside class="warning">
<div>
<code>\left</code>・<code>\right</code> は万能なようですが、括弧周りに不自然な空きが生じる重大な欠陥があります。
必要に応じて、手動調整やphysics2パッケージを使うべきです。
</div>
</aside>

- left, rightは必ずペアで用いる。
- 中央の直線はmiddleで出す。
- 片方のみ出力したいときは、`\left( x^2\right.`とする。

**使用例**

```latex
\left( \frac{a}{b} \right)
```
<div>
$$
\left( \frac{a}{b} \right)
$$
<div>

```latex
\left\lvert \int f(x) dx \right\rvert
```

<div>
$$
\left\lvert \int f(x) dx \right\rvert
$$
</div>

```latex
\left\{ \frac{p}{q} \middle\vert p,q \in \mathbb{Q} \right\}
```

<div>
$$
\left\{ \frac{p}{q} \middle\vert p,q \in \mathbb{Q} \right\}
$$
</div>

### **2. 手動調整**

---

| **場所の指定なし** | **左** | **中央** | **右** |
| --- | --- | --- | --- |
| \big | \bigl | \bigm | \bigr |
| \Big | \Bigl | \Bigm | \Bigr |
| \bigg | \biggl | \biggm | \biggr |
| \Bigg | \Biggl | \Biggm | \Biggr |


  ```latex
  (\frac{a}{b})
  \bigl(\frac{a}{b}\bigr)
  \Bigl(\frac{a}{b}\Bigr)
  \biggl(\frac{a}{b}\biggr)
  \Biggl(\frac{a}{b}\Biggr)
  ```

<div>
$$
(\frac{a}{b})
\bigl(\frac{a}{b}\bigr)
\Bigl(\frac{a}{b}\Bigr)
\biggl(\frac{a}{b}\biggr)
\Biggl(\frac{a}{b}\Biggr)
$$
</div>

### **3. (高度)physics2パッケージ**

---


<aside class="warning">
<div>
physics パッケージの後継に相当する physics*2* パッケージが 2023/02/08 に公開されたので、今後はこちらの利用が推奨のようです。
</div>
</aside>

**physics2パッケージの実装**

このパッケージはモジュール化されているので、モジュールも同時にロードして使用する。


  ```latex
  \usepackage{physics2}
  \usephysicsmodule{ab}   % 括弧サイズの自動調整
  \usephysicsmodule{ab.braket}    % braket記法1
  \usephysicsmodule{braket}    % braket記法2
  \usephysicsmodule{diagmat}  % 対角行列
  \usephysicsmodule[showleft=2,showtop=2]{xmat}   % n×m行列
```

括弧サイズの自動調節は、`\ab`コマンドで実装される。


  ```latex
  \ab (\frac{1}{2})    \quad  %  ( )
  \ab [\frac{1}{2}]    \quad  %  [ ]
  \ab\{\frac{1}{2}\}   \quad  %  { }
  \ab |\frac{1}{2}|    \quad  %  | |
  \ab\|\frac{1}{2}\|   \quad  % \| \|
  \ab <\frac{1}{2}>           %  < >
```

![1](.\CheatSheet\big-brackets-in-equations\1.png)

画像はOverleafで出力。

また、以下の接頭辞を使って書くこともできる。

| **接頭辞** | **名** | **対応する括弧** | **使い方** |
| --- | --- | --- | --- |
| p | 丸括弧 | `(`・`)` | `\pab{}` |
| b | 角括弧 | `[`・`]` | `\bab{}` |
| B | 波括弧 | `\{`・`\}` または `\lbrace`・`\rbrace` | `\Bab{}` |
| v | 垂直棒 | `\|`・`\|` または `\lvert`・`\rvert` | `\vab{}` |
| V | 二重垂直棒 | `\\|`・`\\|` または `\lVert`・`\rVert` | `\Vab{}` |
| a | 山括弧 | `<`・`>` または `\langle`・`\rangle` | `aab{}` |

また、ab.braketモジュールやbraketモジュールを用いて山かっこの表現ができる。


  ```latex
  \braket< \psi >                           \quad
  \braket< \frac{\phi}{2} | \psi >          \quad
  \braket< \frac{\phi}{2} | H | \psi >      \quad
 ```

  ```latex
  \braket[1]{ \psi }                         \quad
  \braket{ \frac{\phi}{2} }{ \psi }          \quad
  \braket[3]{ \frac{\phi}{2} }{ H }{ \psi }  \quad
```

**参考**

- [脱 physics パッケージして physics2 パッケージを使おう](https://qiita.com/Yarakashi_Kikohshi/items/131e2324f401c3effb84)
- [【LaTeX】physicsパッケージを脱却し、physics2パッケージ（+α）へ移行すべきである](https://qiita.com/gawara-t/items/57834e06f7fd95c18d26)

### **4. (旧)physicsパッケージ**

---


  ```latex\usepackage{physics}
```

| **コマンド** | **quantity** | **出力** |
| --- | --- | --- |
| \qty(a), \ptqy{a} | Parentheses | $(a)$ |
| \qty{a}, \Bqty{a} | Brace | $\{a\}$ |
| \qty[a], \bqty{a} | Bracket | $[a]$ |
| \qty\|a\|, \vqty{a} | Vertical bar | $\|a\|$ |
| \abs{a} | absolutevalue | $\|a\|$ |
| \norm{a} | norm | $\\|a\\|$ |

physicsパッケージを使えば、通常は


  ```latex
  \left\{ \frac{1}{2} \right\}
  ```

とするところを、


  ```latex
  \qty{ \frac{1}{2} }
  ```

とするだけで記述できる。

- **パッケージpdf**
    
    [https://ftp.jaist.ac.jp/pub/CTAN/macros/latex/contrib/physics/physics.pdf](https://ftp.jaist.ac.jp/pub/CTAN/macros/latex/contrib/physics/physics.pdf)
    

---

- **関連リンク**
  <div class="related-link-wrapper">
    [modal-20]<!--場合分け(数式中)--><br>
    [modal-19]<!--行列(数式)-->
  </div>