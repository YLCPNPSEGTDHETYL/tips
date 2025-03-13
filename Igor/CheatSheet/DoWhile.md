### Do-Whileの基本構文

---

`Do-While`ループは、条件を満たす限りループを繰り返します。少なくとも1回はループの本体が実行されるのが特徴です。

- **基本構文**
    
    ```igor
    do
      < loop body >
    while(< expression >)
    ```
    

この構文では、`<loop body>` が実行された後、`<expression>` が真である間ループが繰り返されます。

### 簡単なDo-Whileループの例

---

以下のファンクションは、`lim`までの数値を加算して合計を返します。

- **数値の累積計算**
    
    ```igor
    Function Test(lim)
      Variable lim // ループの上限値
      Variable sum=0
      Variable i=0 // ループ変数
      do
        sum += i // sum = sum + i
        i += 1 // ループ変数をインクリメント
      while(i < lim)
      return sum
    End
    ```
    

### ネストしたDo-Whileループ

---

Do-Whileループは入れ子（ネスト）にすることも可能です。

以下の例では、外側のループが`numOuterLoops`回、内側のループが`numInnerLoops`回繰り返されます。

- **ネストしたループの例**
    
    ```igor
    Variable numOuterLoops, numInnerLoops
    Variable i, j
    
    i = 0
    do
    	j = 0
    	do
    		//ここにループしたい文を書く
    		j += 1
    	while (j < numInnerLoops)
    	i += 1
    while (i < numOuterLoops)
    ```
    

### breakを使用したループの終了

---

無限ループを防ぐため、`break` を使ってループを途中で抜けることができます。

- **breakを使ったループの例**
    
    ```igor
    do
    	if (i > lim)
    		break // 条件を満たしたらループを抜ける
    	endif
    		//ここにループしたい文を書く
    		i += 1
    while(1) // 本来は無限ループだが、breakがあるため終了する
    ```
    

このように、`break` を使うことで、特定の条件を満たしたときにループを強制終了できます。

{詳しくは：}[modal-14]

---

- **関連リンク**

    <div class="related-link-wrapper">
      [modal-13]<!--ループ文（Forループ）--><br>
      [modal-14]<!--break文-->
    </div>