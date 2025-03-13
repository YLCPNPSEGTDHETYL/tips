

Igorのswitch文は2種類あります。

- 数値式に対して使用する`switch`文
- 文字列式に対して使用する`strswitch`文

それぞれは、構文自体はほとんど同じです。

### 数値式に対して使用するswitch文

---

```igor
switch(< numeric expression >) // numeric switch
		case < literal number or numeric constant >:
			< code >
			[break]
		case < literal number or numeric constant >:
			< code >
			[break]
		......
		[default:
			< code >]
endswitch
```

### 文字列式に対するstrswitch文

---

```igor
strswitch(< string expression >) // string switch
	case < literal string or string constant >:
		< code >
		[break]
	case < literal string or string constant >:
		< code >
		[break]
	......
	[default:
		< code >]
endswitch
```

### それぞれのswitch文の動作

---

1. `<numeric expression>` や `<string expression>` を評価し、結果に適合する `case` ラベルに対応するコードが実行される。
2. もし適合する `case` ラベルがない場合、`default` ラベルがあればそのコードが実行される。
3. `default` ラベルがなければ、何も実行せずに `switch` 文が終了する。
4. `case` ラベルは数値定数式または文字列定数式であり、`switch` 文内でユニークである必要がある。
5. 定数式はリテラル値か、`switch` 文には `constant`、`strswitch` 文には `strconstant` キーワードで宣言されている必要がある。
6. `break` 文は、`case` ラベルに続くコードの実行を終了させる。
7. `break` 文が省略されると、次の `case` ラベルのコードが続けて実行される。
8. 複数の評価結果に対して同じ処理を実行する場合、`break` 文を省略して次の `case` を実行する。

### switch文の使用例

---

以下に、`switch` 文を使用する例を示します。

### 数値式に対するswitch文

```igor
Constant kThree = 3  // 定数

Function NumericSwitch(a)
	Variable a
	switch(a)
	  // a が 1 の場合
	  case 1:
	      print "a is 1"
	      break
	  // a が 2 の場合
	  case 2:
	      print "a is 2"
	      break
	  // a が kThree (3)か 4 の場合
	  case kThree:
	  case 4:  
	      print "a is 3 or 4"
	      break
	  // 上記以外の場合
	  default:
	      print "a is none of those"
	      break
	endswitch
End

```

### 文字列式に対するstrswitch文

---

```igor
StrConstant ksHow = "how"　// 定数

Function StringSwitch(a)
	String a
	strswitch(a) // string switch
	  // a が "hello" の場合
		case "hello":
			print "a is hello"
			break
	  // a が "ksHow"（値 "how"）の場合
		case ksHow:
			print "a is how"
			break
		// a が "are" か "you" の場合
		case "are":
		case "you":
			print "a is are or you"
			break
		// 上記以外の場合
		default:
			print "a is none of those"
			break
	endswitch
End
```