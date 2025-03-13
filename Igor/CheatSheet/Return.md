


`return`文は、関数の実行を中止し、呼び出し元に復帰値を返します。

`return`文は関数の最後に記述されることが多いですが、関数本体内であればどこでも記述することが可能です。複数の`return`文を使用することもできます。

`return`文が実行されると、関数は即座に実行を中止し、その時点で指定された値を呼び出し元に返します。
    

### 戻り値の種類

---

関数がどのように宣言されているかによって、`return`文で返す値が異なります。

- **数値関数**：数値を返します。
- **文字列関数**：文字列を返します。

例えば、文字列関数であれば、`return`文で文字列を返さなければならず、数値関数では数値を返さなければなりません。

- **文字列関数の例**
    
    ```igor
    Function/S FirstStr(str1, str2)
    	String str1, str2
    	String result
    	// str1 と str2 を比較し、アルファベット順で先に来る方を選択
    	if (CmpStr(str1,str2) < 0)
    		result = str1
    	else
    		result = str2
    	endif
    	return result // 比較結果に基づいて文字列を返す
    End
    ```
    
- **数値関数の例**
    
    ```igor
    Function Hypotenuse(side1, side2)
    	Variable side1, side2
    	Variable hyp
    	// ピタゴラスの定理を用いて斜辺の長さを計算
    	hyp = sqrt(side1^2 + side2^2)
    	return hyp // 斜辺の長さを返す
    End
    ```
    

### return文がない場合

---

`return`文が記述されていないか、`return`文が実行されずに関数が終了した場合、返される値は次のようになります。

- **数値関数の場合**：`NaN`（非数字）を返します。
- **文字列関数の場合**：`null`を返します。

例えば、数値関数が`return`文なしで終了した場合、呼び出し元でその`NaN`を使用すると、エラーが発生します。

---

- **関連リンク**

    <div class="related-link-wrapper">
      [modal-6]<!--Functionの構文-->
    </div>