
### `$`演算子の役割

---

`$` 演算子は、文字列式をオブジェクト参照に変換します。この参照は通常、ウェーブに関連しますが、グローバル数値変数やグローバル文字列変数にも使用できます。

主な用途としては以下になります。

- 文字列を動的にウェーブ名として使用
- アルゴリズムによって生成したウェーブ名を参照

以下の例では、`$` 演算子を使用して文字列パラメータをウェーブ参照に変換しています。

```igor
Function DisplayXY(xWaveName, yWaveName)
	String xWaveName, yWaveName
	Display $yWaveName vs $xWaveName
End
```

このFunctionでは、`yWaveName` と `xWaveName` の文字列変数に格納されているウェーブ名を表示します。

逆に、`$` 演算子を使用しない場合を考えます。

```igor
Display yWaveName vs xWaveName
```

この状態だと、`Display` 操作が文字列として処理されるため、ウェーブが見つからずエラーとなります。

すなわち、`$` 演算子は、IgorがStringとして認識しているものをWaveの名前として認識しなおさせるための演算子だと思えばよいです。

### （発展）グローバル変数への参照

---

`$` 演算子は、ウェーブ以外にもグローバル数値変数やグローバル文字列変数への参照を作成する際にも使用できます。

```igor
Function Test(vStr, sStr, wStr)
	String vStr, sStr, wStr
	NVAR v = $vStr // v: グローバル数値変数のローカル名
	v += 1
	SVAR s = $sStr // s: グローバル文字列変数のローカル名
	s += "Hello"
	Wave w = $wStr // w: グローバルウェーブのローカル名
	w += 1
End
```

ここでは、`$vStr`、`$sStr`、`$wStr` によって、グローバル変数 `gVar`、`gStr`、`gWave` が参照され、それぞれ数値、文字列、ウェーブとして操作されます。実行時に次のように呼び出します。

```igor
Variable/G gVar = 0; String/G gStr = ""
Make/O/N=5 gWave = p
Test("gVar", "gStr", "gWave")
```

Function内で、`NVAR`、`SVAR`、`Wave` の宣言を使って、コンパイラに処理するオブジェクトの型を通知する必要があります。



上記ではFunctionでのグローバル変数の参照を見ました。  
Macro内でも`$` 演算子を使用してグローバル変数やウェーブへの参照を作成できます。

```igor
Macro MacroTest(vStr, sStr, wStr)
	String vStr, sStr, wStr
	$vStr += 1
	$sStr += "Hello"
	$wStr += 1
End
```

Macro内で、`$vStr`、`$sStr`、`$wStr` を使うことにより、グローバル変数 `gVar`、`gStr`、`gWave` の値を変更します。

Macroを次のように呼び出します。

```igor
Variable/G gVar = 0; String/G gStr = ""
Make/O/N=5 gWave = p
MacroTest("gVar", "gStr", "gWave")
```

このMacroによって、グローバル変数やウェーブの値を動的に操作できます。

---

- **関連リンク**

    <div class="related-link-wrapper">
      [modal-6]<!--Functionの構文--><br>
      [modal-7]<!--Macroの構文-->
    </div>