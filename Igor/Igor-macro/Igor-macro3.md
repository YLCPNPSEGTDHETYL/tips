---
layout: md
withTOC: true
update: 2025/03/11 (Tue)
---

それではいよいよ、実践的なマクロについてみていきましょう。  
まず、テキストデータをIgorウェーブに読み込むとき、名前付けを自動で行うマクロを紹介します。

# マクロ概要
---

このスクリプトは、メニューに「Load Waves」という項目を追加し、そこからゼーベック係数のデータファイル（.txt, .dat, .csv）を選択してロードする仕組みを実装しています。  
データのロード後、読み込んだWaveの名前を変更する処理を行います。  

```Igor
Menu "Load Waves" // メニューに「Load Waves」を追加
	"Load S Data File...", LoadSdata()
End

Proc LoadSdata()

     // データファイル読み込み
	Variable refNum
	String message="Select S data file"
	String fileFilters = "Data Files (*.txt,*.dat,*.csv):.txt,.dat,.csv;"
	fileFilters += "All Files:.*;"

		Open/R/M=message  refNum as ""
		if (refNum == 0)
			return -1
		endif
		String fullPath = S_fileName
		Close refNum

	LoadWave/J/D/W/A/K=0 fullPath　

    // リネーム
	rename wave0, time__s; rename wave1, Temp1__K; 
    rename wave2, V_L1_man__V; rename wave3, V_H1_con__V;
	rename wave4, Temp2__K; rename wave5, V_L2_man__V; 
    rename wave6, V_H2_con__V; rename wave7, Delta_V__V;
	rename wave8, Delta_T__K; rename wave9, avg_T__K; 
    rename wave10, V_s3__V; rename wave11, V_s4__V;
	rename wave12, V_s5__V; rename wave13, data_for_monitoring1; 
    rename wave14, data_for_monitoring2

End
```
以下では、各部分の記述について簡単に解説します。

# マクロ解説
---


## メニューに追加

```Igor
Menu "Load Waves" // メニューに「Load Waves」を追加
	"Load S Data File...", LoadSdata()
End
```

この部分では、Igor Proのメニューに「Load Waves」という新しいメニューを作成し、その中に「Load S Data File...」という項目を追加しています。  
この項目が選択されると、`LoadSdata()` 関数が呼び出される仕組みになっています。

## データファイル読み込み

```Igor
Proc LoadSdata()

     // データファイル読み込み
	Variable refNum
	String message="Select S data file"
	String fileFilters = "Data Files (*.txt,*.dat,*.csv):.txt,.dat,.csv;"
	fileFilters += "All Files:.*;"

		Open/R/M=message  refNum as ""
		if (refNum == 0)
			return -1
		endif
		String fullPath = S_fileName
		Close refNum

	LoadWave/J/D/W/A/K=0 fullPath　

    // 以下略

End
```

**処理の流れ**
- `Proc` を使って `LoadSdata()` というプロシージャを定義しています。
- `message = "Select S data file"` で、ダイアログのメッセージを設定します。
- `fileFilters` で、選択可能なファイルの種類を指定します（.txt, .dat, .csv形式）。
- `Open/R/M=message refNum as ""` により、ファイル選択ダイアログを表示します。
- ファイルが選択されなかった場合 (`refNum == 0`)、関数を終了 (`return -1`) します。
- `String fullPath = S_fileName` で、選択されたファイルのパスを取得します。
- `Close refNum` で、ファイルリファレンスを閉じます。
- `LoadWave/J/D/W/A/K=0 fullPath`で、取得したファイルパスのデータをロードします。
  
    | **フラグ** | **説明** |
    |--------|--------------------------------|
    | `J`    | ファイルが区切りテキスト形式であることを示す。 |
    | `D`    | 倍精度波を作成する。 |
    | `W`    | ファイル内のWaveの名前を探す。  |
    | `A`    | Waveの名前を入力するダイアログをスキップする。<br>`/W/A`を一緒に使用すると、ファイルからWave名を読み取り、通常のWave名ダイアログを表示せずにロードを続行できる。 |
    | `K=0`　  | ファイルの列が数値かテキストかを判断する方法を制御する（区切りテキスト・ファイルと固定フィールド・テキスト・ファイルのみ）。<br>k=0の場合、列の性質を自動的に推測する。 |


## Waveのリネーム（名前変更）

```Igor
rename wave0, time__s; rename wave1, Temp1__K; 
rename wave2, V_L1_man__V; rename wave3, V_H1_con__V;
rename wave4, Temp2__K; rename wave5, V_L2_man__V; 
rename wave6, V_H2_con__V; rename wave7, Delta_V__V;
rename wave8, Delta_T__K; rename wave9, avg_T__K; 
rename wave10, V_s3__V; rename wave11, V_s4__V;
rename wave12, V_s5__V; rename wave13, data_for_monitoring1; 
rename wave14, data_for_monitoring2
```
`LoadWave/J/D/W/A/K=0 fullPath`で、`/W/A`オプションを指定しているので、作成されるWaveは、生データの列の若い順に `wave0, wave1, wave2, ...` という風に名前が付けられます。  
この名前をリネームする処理をしています。  
今回の場合では、14個のWaveにそれぞれ名前を付けています。  
なお、Igorは基本的には1行に1つの操作関数しか使えませんが、`; `で繋ぐことで1行に2つ以上の操作関数を書くことができます。  
このリネームの記述を書き換えるだけで、他の測定データにも応用できます。


# 終わりに
---
3回に続いてマクロについて簡単に解説しましたが、Igorマクロはまだまだやれることがたくさんあります。  
これを機に、さまざまな処理を自動化してみましょう！