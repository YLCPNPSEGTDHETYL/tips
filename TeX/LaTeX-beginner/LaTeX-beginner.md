---
layout: md
withTOC: true
---

# 前提

---

- ローカル環境で書く場合、TeXのインストール方法は、<span class="familylink">[TeX Liveのインストール](/TeX/TeXLive/TeXLive-install.md)</span>を参照してください。
- TeXのエディタの設定が完了していない場合は、先に<span class="familylink">[エディタの準備(TeX Studioの場合)](/TeX/TeXstudio/TeXstudio.md)</span> または<span class="familylink">[オンラインエディタを使う(Overleafの場合)](/TeX/Overleaf/Overleaf.md)</span> で準備を進めてください。

# 実際に文章を書いてみる

---

以下はテスト用のtexファイルです。

新規作成した文書に、以下の内容をコピペしてコンパイルが上手く通るかを確認してください。

- TeXStudioの場合、「F5」キーでコンパイル。
- Overleafの場合、「Ctrl+S」(Win)あるいは「Command+S」(Mac)でコンパイル。

```latex
\RequirePackage{plautopatch} % (u)pLaTeXのときのおまじない。
\documentclass[10pt,dvipdfmx,a4j]{jsarticle} %ドキュメントクラスの指定。ドライバ名(dvipdfmx)を必ずオプションに書く。
\usepackage{bxpapersize} % 印刷時の用紙サイズ調整
\usepackage[1.7]{bxpdfver} % PDFバージョン
\usepackage{bmpsize} % png等の画像の出力を調整

%%% package %%%
\usepackage[dvipdfmx]{graphicx} % 画像
\usepackage[svgnames]{xcolor} % 色
\usepackage{float} % 図表配置指定
\usepackage{amsthm,amsmath,amssymb,amsfonts} % AMS系
\usepackage{enumitem} % 箇条書きパッケージ
\usepackage[T1]{fontenc} % 8bitエンコード設定。おまじないだと思って必ず記述。
\usepackage{newtxtext,newtxmath} % フォントの指定

\author{あなたの名前}
\date{\today}
\title{はじめての\LaTeX}

\begin{document}

\maketitle

\section{はじめに}
\LaTeX ではコマンドを使って文章を書いていきます。

2回改行を挟むことで、出力のpdfでも改行されます。
\verb|%|の後ろはコメントアウトされます。% 例えばこの文章はpdfには出力されません。

\section{プリアンブルについて}
この文書で、\verb|\begin{document}|より前に書かれた記述のことを、「プリアンブル(preamble)」と言います。
\verb|\documentclass[10pt,dvipdfmx,a4j]{jsarticle} |と書いた部分は、ドキュメントクラスとよばれる\TeX のテンプレートを指定する記述です。

また、\verb|\usepackage{...}|の部分では、パッケージというのを読み込んでいます。
パッケージというのは、\TeX の機能を拡張するものだと思ってください。
例えば、\verb|\usepackage{amsthm,amsmath,amssymb,amsfonts}|という記述では、\TeX で高度な数式を書くためのAMS系パッケージ群を読み込んでいます。

プリアンブルに書いてあることは、最初はよくわからないと思いますが、おまじないだと思って記述しておいてください。

\section{数式の書き方}
\LaTeX は数式の表示が得意です。

数式を文章の中に組み込む)(インライン数式)は、AMS系のパッケージを使う場合、\verb|\(|と\verb|\)|で囲みます。
例えば、\(E = mc^2\)のように書くことができます。

また、別行立ての数式は、以下のように書くことができます。	
\begin{align}
    \mathrm{e}^{i\pi}+1=0 \label{eq:Euler}
\end{align}

\TeX では、このように\verb|\begin{○○}|と\verb|\end{○○}|で囲んだコマンドもよく使われます。
これは\TeX では「○○環境」と呼ばれます。
上記の場合は、○○にあたるのが\verb|align|なので、align環境と呼びます。

別行立ての数式を出力する方法は様々ありますが、特別な事情がなければalign環境を使えばよいです。

\section{箇条書き}
箇条書きを作成するには、itemize環境を使います。
以下の例を見てください。
    
    \begin{itemize}
        \item これは最初の項目です。
        \item これは次の項目です。
        \item 箇条書きの項目は、\verb|\item| コマンドで追加できます。
    \end{itemize}
    
また、番号付き箇条書きを書くときは、プリアンブルで\verb|\usepackage{enumitem}|としたうえで、以下のように書きます。

    \begin{enumerate}
        \item これは最初の項目です。
        \item これは次の項目です。
    \end{enumerate}

\section{図表}
表はtable環境の中にtablular環境入れ子にする形で書きます。

\verb|\caption{}|でキャプションを書き、\verb|\label{}|でラベルを付けます。ラベルは相互参照に使います。

\verb|\begin{table}[H]|の\verb|[H]|は、プリアンブルでfloatパッケージを読み込む必要があります。

これは、図表を挿入した位置に挟み込むためのパッケージです。

\begin{table}[H]
    \centering
    \caption{おいしいたべもの}
    \label{tab:oisii}
    \begin{tabular}{ccc}% 列の数だけc を書く。
        \hline\hline
        果物& 野菜& その他\\\hline
        りんご& キャベツ& 牛乳\\
        みかん& トマト& チョコレート\\
        ぶどう& 玉ねぎ& プロテイン\\
        \hline\hline
    \end{tabular}
\end{table}

図はfigure環境で挿入します。

\begin{figure}[htbp]
    \centering
    \label{fig:fig1}
    \includegraphics[width=0.5\linewidth]{example-image}
    \caption{dummy画像}
\end{figure}

\verb|\includegraphics[width=0.5\linewidth]{example-image}|が、差し込む図を指定する記述です。
\verb|example-image-a|部分に差し込みたい画像の名前(fig1.pngなど)を書きます(今はダミーの画像を入れています)。

画像は、ラスター画像ならpngやjpg、ベクター画像ならpdfにするのがオススメです。 

\section{相互参照}
相互参照機能は、ドキュメント内で別の場所にあるラベル（セクション、図、表など）を簡単に参照するための便利な機能です。
\verb|\label{key}|コマンドで任意のラベルを設定し、\verb|\ref{key}|などを使ってその場所やページ番号を参照できます。
これにより、文書の更新時にも参照先が自動で正確に更新されます。

例えば、この文書では\ref{tab:oisii}つ目の表に\verb|\label{tab:oisii}|というラベルを付けています。
このラベルを付けた部分を参照したい場合は、表\ref{tab:oisii}とします。

相互参照の強みは、新たに上に表が追加され、表番号がずれた場合にも、文中の表○○の数字を書き換える必要がないことにあります。

\section{おわりに}
ここで紹介したのは、\TeX の一部の機能にすぎません。

重要なテクニックはほかにもたくさんありますが、それはまた別の機会に。。。

\end{document}
```

上手くpdfが出力されたらOKです。

<aside>
💡 TeXはコンパイル時に複数のファイルが生成されるので、フォルダの中に保存すると良いです。

</aside>