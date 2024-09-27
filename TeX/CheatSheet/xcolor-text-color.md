<!--12-->
<!--文字色指定(xcolorパッケージ)-->

### xcolorパッケージ

---

- xcolorパッケージの利用により、graphixパッケージの挙動が不安定になることがある。
- この対策として、以下のようにdocumentclassのオプションにdvipdfmxを加えておくと安心。
    
    ```latex
        \documentclass[dvipdfmx]{jsarticle}
        \usepackage{graphix}
        \usepackage{xcolor}
    ```
    
- optionなしでは、以下の色が使える。
    
    ![1](./CheatSheet/xcolor-text-color/1.png)
    
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
        
        ![2](./CheatSheet/xcolor-text-color/2.png)
        
    - `svgnames`
        
        ![3](./CheatSheet/xcolor-text-color/3.png)
        
    - `x11names`
    
    ![4](./CheatSheet/xcolor-text-color/4.png)
    
    ![5](./CheatSheet/xcolor-text-color/5.png)
    
- **入力**
    ```latex
        \textcolor{Orchid}{e.g.\ Orchid(＝淡紫色)という色にしてみました。}
    ```
- **出力**
    <div>
    $$
    \textcolor{Orchid}{\mathrm{e.g.)\ Orchid(＝淡紫色)という色にしてみました。}}
    $$
    </div>

- もっと自分で定義した色とかも使いたい！という場合：[modal-23]<!--(マクロ)色を定義して使う-->


---

- **関連リンク**
    
    <div class="related-link-wrapper">
      [modal-23]<!--(マクロ)色を定義して使う-->
    </div>