# 文字色指定(xcolorパッケージ)

タグ: package, 体裁／文書構造

### xcolorパッケージ

---

- xcolorパッケージの利用により、graphixパッケージの挙動が不安定になることがある。
- この対策として、documentclassのオプションにdvipdfmxを加えておくと安心。
    
    ```latex
    \documentclass[dvipdfmx]{jsarticle}
    \usepackage{graphix}
    \usepackage{xcolor}
    ```
    
- optionなしでは、以下の色が使える。
    
    ![Untitled](%E6%96%87%E5%AD%97%E8%89%B2%E6%8C%87%E5%AE%9A(xcolor%E3%83%8F%E3%82%9A%E3%83%83%E3%82%B1%E3%83%BC%E3%82%B7%E3%82%99)%2040787c4055744304862a19130c6dd362/Untitled.png)
    
    ```latex
    %テキストの色を変更(書き方は2通り)
    %1
    \textcolor{red}{この文字は赤くなります。}
    %2
    {\color{blue}この文字は青くなります。}
    ```
    

### 使える色

---

- `\usepackage[オプション]{xcolor}`のように、オプションを指定して色数を増やせる。
    
    
    | **option** | **使える色** |
    | --- | --- |
    | なし | 上記の19色 |
    | `dvipsname` | 68色 |
    | `svgnames` | 151色 |
    | `x11names` | 317色 |
    - `dvipsname`
        
        ![Untitled](%E6%96%87%E5%AD%97%E8%89%B2%E6%8C%87%E5%AE%9A(xcolor%E3%83%8F%E3%82%9A%E3%83%83%E3%82%B1%E3%83%BC%E3%82%B7%E3%82%99)%2040787c4055744304862a19130c6dd362/Untitled%201.png)
        
    - `svgnames`
        
        ![Untitled](%E6%96%87%E5%AD%97%E8%89%B2%E6%8C%87%E5%AE%9A(xcolor%E3%83%8F%E3%82%9A%E3%83%83%E3%82%B1%E3%83%BC%E3%82%B7%E3%82%99)%2040787c4055744304862a19130c6dd362/Untitled%202.png)
        
    - `x11names`
    
    ![Untitled](%E6%96%87%E5%AD%97%E8%89%B2%E6%8C%87%E5%AE%9A(xcolor%E3%83%8F%E3%82%9A%E3%83%83%E3%82%B1%E3%83%BC%E3%82%B7%E3%82%99)%2040787c4055744304862a19130c6dd362/Untitled%203.png)
    
    ![Untitled](%E6%96%87%E5%AD%97%E8%89%B2%E6%8C%87%E5%AE%9A(xcolor%E3%83%8F%E3%82%9A%E3%83%83%E3%82%B1%E3%83%BC%E3%82%B7%E3%82%99)%2040787c4055744304862a19130c6dd362/Untitled%204.png)
    

```latex
\textcolor{Orchid}{e.g.\ Orchid(＝蘭色)という色にしてみました。}
```

$$
\textcolor{Orchid}{\mathrm{e.g.)\ Orchid(＝蘭色)という色にしてみました。}}
$$

- もっと自分で定義した色とかも使いたい！という場合：[(マクロ)色を定義して使う]((%E3%83%9E%E3%82%AF%E3%83%AD)%E8%89%B2%E3%82%92%E5%AE%9A%E7%BE%A9%E3%81%97%E3%81%A6%E4%BD%BF%E3%81%86%205c1a2371cfa74447a981ca7538cb98a6.md)

### 任意の色に指定

---

```latex
% \color[<model-list>]{<spec-list>}で絶対指定
\textcolor[cmyk]{0.25,1,0.5,0}{CMYKにしたい文字列} %各数字がそれぞれcyan, magenta, yellow, blackに対応。値は0~1の間をとる。
\textcolor[rgb]{0.8,0.3,0.4}{文字列} %各数字がそれぞれred, green, blueに対応。
\textcolor[HTML]{35A16B}{文字列} %HTMLの色コードでの指定。

```

### 色の混合

---

```latex
% 2色を混合できる。
\color{blue!20!} % 20%のblue + 80%のwhiteを表す。
\color{yellow!30!green} % 30%のyellowと70%のgreen
```

- **関連リンク**
    
    [(マクロ)色を定義して使う]((%E3%83%9E%E3%82%AF%E3%83%AD)%E8%89%B2%E3%82%92%E5%AE%9A%E7%BE%A9%E3%81%97%E3%81%A6%E4%BD%BF%E3%81%86%205c1a2371cfa74447a981ca7538cb98a6.md)