

### If-Else-EndIf文

---

MacroやFunction内で使える条件文です。

```igor
if ( < expression > )
　< TRUE part >
　else
　< FALSE part >
endif
```

単純な条件文の場合は、elseの処理を省略可。


### If-ElseIf-EndIf文

---

複数のTrueパートを持つ文です。

```igor
if ( < expression1 > )
  < TRUE part 1 >
elseif ( < expression2 > )
  < TRUE part 2 >
[else
  < FALSE part >]
endif
```

### 比較演算子

---

条件の指定には、比較演算子や論理演算子などが使用できます。  
それぞれの演算子には、どちらが先に適用されるかの優先順位があります。
<!-- 準備中 -->

| **演算子**  | **意味**         |
|------|------------|
| `==`  | 等しい |
| `!=`  | 等しくない|
| `<`   | より小さい|
| `<=`  | 以下   |
| `>`   | より大きい|
| `>=`  | 以上   |
| `~`  | ビットごとの補数   |
| `&`  | ビットごとのAND演算|
| `\|`  | ビットごとのOR演算 |
| `!`  | 論理NOT    |
| `&&` | 論理AND    |
| `\|\|` | 論理OR     |


---

### さまざまな例

---

　```igor
 // If-Else-EndIf文
　if ( x > 10 )
　　Print "x is greater than 10"
　else
   Print "x is 10 or less"
　endif 
```

```igor
 // If-ElseIf-EndIf文
  If (x > 10)
    Print "x is greater than 10"
  ElseIf (x == 10)
    Print "x is exactly 10"
  Else
    Print "x is less than 10"
  EndIf
```

```igor
 If (a+b != c+d)
  Print "a+b is not equal to c+d"
 endif
```

---

- **関連リンク**

    <div class="related-link-wrapper">
      [modal-9]<!--演算子-->
    </div>