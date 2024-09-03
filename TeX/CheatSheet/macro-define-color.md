<!-- 23 -->
<!--(マクロ)色を定義して使う-->


### **`definecolor`コマンド**

---

- xcolorパッケージに含まれている以外の色を定義して使いたいとき、definecolorで指定する。
    
    ```latex
    %プリアンブル
    \definecolor{myred}{rgb}{0.937255,0.411765,0.388235}
    ```
    
    - 色の指定方法については、[modal-12]<!--文字色指定(xcolorパッケージ)-->も参照。
    
    ```latex
    \textcolor{myred}{この文字は、myredという名前の色になります。}
    ```
    

---

- **関連リンク**
    
    <div class="related-link-wrapper">
        [modal-12]<!--文字色指定(xcolorパッケージ)-->
    </div>