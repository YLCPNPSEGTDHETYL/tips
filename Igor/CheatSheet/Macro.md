
### Macroで始まるプロシージャ

---

`Macro`は、一連の操作を自動化するために使用されます。

主にGUI操作や複数のコマンドを連続して実行する際に便利です。

- **マクロの例**
    
    ```igor
    Macro mymacro()
    	Display "This is a macro"
    	NewDataFolder/O root:TestFolder
    	Make/O/N=10 testWave
    	myfunc(testWave)
    EndMacro
    
    Function myfunc(testwave)
    	wave testwave
    	//ここにファンクションの内容を書く
    End
    ```
    

この`mymacro`を実行すると、メッセージが表示され、新しいデータフォルダが作成され、10ポイントの波形が生成されます。

また、作成した`testwave` を`myfunc` 関数の引数として渡して、Macro内でFunctionを実行できます。

Functionはコンパイルをしますが、Macroは一行ずつ読んで実行するので、ループ回数が非常に多い計算などはFunctionで行うのがベストです（ループが多いほど、計算速度に差が出てきます）。

また、Macroは戻り値をとれません。

Macroの使い道としては、GUIからFunctionをまとめて実行するなどの操作に使うとよいです。

### Functionとの対比

---

コマンドライン、ファンクション、マクロはそれぞれ得意な役割があります。

| **項目名** | **得意なこと** | **使えるコマンド例** |
| --- | --- | --- |
| **コマンドウィンドウ** | 単発の操作
簡単な処理の実行 | 操作関数（`Display`、`Print`、`Make`など） |
| **ファンクション** | ループや条件分岐のある計算 | 操作関数＋条件文、ループ文（`If-ElseIf-EndIf`、`For`、`Do-While`など） |
| **マクロ** | 定型的な処理
複数のファンクションを順に実行 | 操作関数＋条件文、ループ文 |

{ファンクションとマクロの違いの詳細は：}[modal-14]

---

- **関連リンク**

    <div class="related-link-wrapper">
      [modal-15]<!--MacroとFunctionの違い--><br>
      [modal-16]<!--Procedureでの$の使用--><br>
      [modal-6]<!--Functionの構文-->
    </div>