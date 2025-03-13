
### Forループの基本構文

---

`for`ループは、初期化、条件式、更新式を指定して、特定の回数だけ繰り返すループです。

- **基本構文**
    
    ```igor
    for(< initialize >;< continue test >;< update >)
    	< loop body >
    endfor
    ```
    

この構文では、`<initialize>`で初期化を行い、`<continue test>`でループを続ける条件を指定し、`<update>`でループ変数を更新します。

### 簡単なForループの例

---

以下の例では、`i`が0から4までの値で繰り返し、各値が表示されます。

- **簡単なForループの例**
    
    ```igor
    Function Example1()
      Variable i
      for(i=0;i<5;i+=1)
        print i
      endfor
    End
    ```
    

このファンクションでは、`i`の値が0から4まで変化し、各値が出力されます。

### ループの実行中にループを中止する方法

---

`for`ループの実行中に、`break`文や`return`文を使うことでループを中止できます。

また、`continue`文を使うと、ループ本体の残りのコードをスキップし、ループの次の繰り返しに進みます。

- **`break`文と`continue`文の使用例**
    
    ```igor
    Function Example2()
    	Variable i,j
    	for(i=0,j=10; ;i+=1,j*=2)
    		if( i==2 )
    			continue
    		endif
    			Print i,j
    			if( i==5 )
    			break
    		endif
    	endfor
    End
    ```
    

この例では、`i`が2のときに`continue`文が実行され、その後のコードがスキップされます。また、`i`が5のときに`break`文が実行され、ループが終了します。

---

- **関連リンク**

    <div class="related-link-wrapper">
      [modal-12]<!--ループ文（Do-While）--><br>
      [modal-14]<!--break文-->
    </div>