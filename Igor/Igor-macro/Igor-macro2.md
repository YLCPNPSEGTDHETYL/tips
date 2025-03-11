---
layout: md
withTOC: true
update: 2025/02/22 (Sat)
---



この記事では、いくつかの重要な構文を解説します。  
他のプログラミング言語を触ったことのある人には簡単すぎる内容かもしれません。
ご了承ください🙇


# If-ElseIf-Else文
---
条件分岐の例を見てみましょう。

```Igor
Function CheckValue(ii)
    Variable ii
    If (ii > 0) // 条件1
        Print "x is positive"
    ElseIf (ii < 0) // 条件2
        Print "ii is negative"
    Else // 条件3
        Print "ii is zero"
    EndIf
End
```
このCheckValue関数は、引数`ii`の値に応じて異なるメッセージを表示します。  
例えば、`CheckValue(5)`を実行すると、コマンドラインに`ii is positive`が表示されます。  

この例では、CheckValue関数は引数を持っています。  
引数は、必ず<span class="highlight-main">**関数やマクロの冒頭で**</span>データ型を指定してあげる必要があります。  
冒頭にない場合、Igorはエラーを返します。

```Igor
Function myfunc(varname,strname,mywavename)
    Variable varname
    String strname
    Wave mywavename
    // 以降、処理の内容を書く
End
```


# Forループ
---

以下の例では、`For`ループを使って `myWave`の各要素に`ii^2`を代入します。

```Igor
Function LoopExample()
    Variable ii
    Make/N=10 myWave // 10要素のWaveを作成

    For (ii = 0; ii < 10; ii += 1)
        myWave[ii] = ii * ii // 各要素に ii^2 を代入
    EndFor

    Print myWave // 結果を表示
End
```
この関数を実行すると、myWaveに`0, 1, 4, 9, ... `という値が入ります。  
構文の見た目はC言語に似ています。  
Igorでは、独自の操作関数（`Make`など）も、マクロや関数の中に組み込めます。


# Do-Whileループ
---

繰り返し処理のもう一つの方法として、Do-Whileループがあります。

```Igor
Function DoWhileExample()
    Variable ii = 0
    Do
        Print "Current value: ", ii
        ii += 1
    While (ii < 5)
End
```
この DoWhileExample関数を実行すると、`ii`が0から4までの値を表示します。  
Do-Whileループは、条件が False になるまで繰り返し処理を行います。


次記事は、より実践的に、データの名前付けの自動化について解説します。