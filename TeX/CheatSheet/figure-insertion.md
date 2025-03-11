<!--12-->
<!--図挿入（figure環境）-->

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
    - 詳しくは：[modal-14]<!--長さの単位-->

- **出力**
    
    ![いらすとやさん：濡れて細くなった猫のイラスト](./figure-insertion/neko.png "max-width=250px")

---

- **関連リンク**

    <div class="related-link-wrapper">
      [modal-2]<!--表の挿入（tabular環境）--><br>
      [modal-21]<!--シンプルに図を貼る（マクロ）--><br>
      [modal-27]<!--ハイパーリンクをつける（hyperrefパッケージ）--><br>
      [modal-9]<!--好きな位置に図表を配置（floatパッケージ）-->
    </div>