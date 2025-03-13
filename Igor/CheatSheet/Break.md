
### break文

---

`break`文は、**do-while ループ**、**for ループ**、**switch 文**の実行を中止します。

`break`文が実行されると、そのループまたは`switch`文の残りの処理はスキップされ、次のコード行に処理が移ります。

- **実行の流れ**
    
    `break`文が含まれているループ（`do-while`や`for`）または`switch`文の`endswitch`以降に記述されているコードが実行されます。
    

### Do-Whileループでのbreak文

---

以下の例では、外側と内側の`do-while`ループにおいて、`break`文を使ってループを中止します。
    
```igor
Variable i=0, j
do // ループ1開始
	if (i > numOuterLoops)
		break // ループ1から抜ける
	endif
		j = 0
		do // ループ2開始
		if (j > numInnerLoops)
		break // ループ2から抜ける
	endif
		j += 1
		while (1) // ループ2の終了
		// ループ2の終了後、ここから実行再開
		i += 1
while (1) // 外側ループの終了

// ループ1の終了後、ここから実行再開

```
    

このコードでは、`break #1`が外側のループを、`break #2`が内側のループを終了させます。


---

- **関連リンク**

    <div class="related-link-wrapper">
      [modal-12]<!--ループ文（Do-While）--><br>
      [modal-13]<!--ループ文（Forループ）-->
    </div>