<!--23-->
<!--(マクロ)色を定義して使う-->

### **`definecolor`コマンド**

---

- xcolorパッケージ([modal-12]<!--文字色指定(xcolorパッケージ)-->)に含まれている以外の色を定義して使いたいとき、definecolorで指定する。
    
    ```latex
        %プリアンブル
        \definecolor{myred}{rgb}{0.937255,0.411765,0.388235}
        %

        \textcolor{myblue}{この文字は、myblueという名前の色になります。}
    ```

### 色の指定方法の種類

- cmyk, rgb, HTMLなどの形式で指定できる。
---

```latex    
    \definecolor{mypurple}{cmyk}{0.25,1,0.5,0} %各数字がそれぞれcyan, magenta, yellow, blackに対応。値は0~1の間をとる。
    \definecolor{myred}{rgb}{0.8,0.3,0.4} %各数字がそれぞれred, green, blueに対応。値は0~1の間をとる。
    \definecolor{mygreen}{HTML}{35A16B} %HTMLの色コードでの指定。
```
- 文中で`\color[cmyk]{0.25,1,0.5,0}{なんか文字列}`としてもよい。

### (おまけ)色の混合

---

```latex
    % 以下のように2色を混合できる。
    \color{blue!20!} % 20%のblue + 80%のwhiteを表す。
    \color{yellow!30!green} % 30%のyellowと70%のgreen
```

---

- **関連リンク**
    
    <div class="related-link-wrapper">
      [modal-12]<!--文字色指定(xcolorパッケージ)-->
    </div>
    