<!-- 11 -->
<!--図挿入(figure環境)-->

- **入力**
    
    ```latex
    \begin{figure}[htbp]
    	\centering
    	\label{fig1}
    	\includegraphics[width=0.9\linewidth]{neko.png}
    	\caption{これは猫です。}
    \end{figure}
    ```
    
    - 長さの指定は、pxなどではなく`\linewidth`で指定すれば、勝手にテキスト幅にそろってくれるので便利。
    - 
        <div class="related-link-wrapper">
            {詳しくは：}[modal-14]<!--長さの単位-->
        </div>
- **出力**
    
    ![1](./CheatSheet/figure-insertion/neko.png)
    
    <div>
    $$
    図1　これは猫です。
    $$
    </div>

---

- **関連リンク**
<div class="related-link-wrapper">
    [modal-8]<!--好きな位置に図表を配置(floatパッケージ)--><br>
    [modal-21]<!--(マクロ)シンプルに図を貼る-->
</div>
