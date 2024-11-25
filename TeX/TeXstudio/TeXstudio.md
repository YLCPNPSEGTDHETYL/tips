---
layout: md
withTOC: true
update: 2024/11/26 (Tue)
---

# 前提

---

- TeXのインストール方法は、<span class="familylink">[TeX Liveのインストール](/TeX/TeXLive/TeXLive-install.md)</span>を参照してください。

# エディタとは

---

TeXでつくる文書はテキストベースなので、メモ帳などで書いてコンパイルしても良いのですが、TeXの記述に特化したエディタを使うことで作業効率を高めることができます。

筆者はTeXstudioというエディタを使用しています（使用環境はWindows11です）。

特にこだわりのエディタがない場合には、使い勝手が良いのでおすすめです。

また、Overleafなどのオンラインエディタもおすすめです。

ローカルに環境構築せずにLaTeX文書を打てるので、アカウントを持っておくと良いでしょう。

Overleafの導入については<span class="familylink">[オンラインエディタを使う(Overleafの場合)](/TeX/TeXLive/Overleaf.md)</span>を参照。

# TeXstudioの導入

---

1. <span class="exlink">[TeXstudioの公式サイト](https://www.texstudio.org/)</span>から、最新版をダウンロードします。
    
    ![TeXstudioの公式サイト](TeXstudio1.png "max-width=700px TeXstudioの公式サイト")
    
2. ダウンロード後、解凍してインストーラを起動します。TeX Liveと違ってすぐに終わります。

# コンパイラの初期設定

---

最初に使用する前にいくつか初期設定をします。

## コマンド設定

1. 左下の「高度なオプション」にチェックがない場合、チェックを入れます。
2. 上部メニューのオプション>コマンドから、コマンド設定を以下のように変更します。
    - **LaTeX：**<br>
    `uplatex.exe -synctex=1 -kanji=utf8 -no-guess-input-enc -interaction=nonstopmode %.tex`
    - **BibTeX：**<br>
    `upbibtex.exe %`
    
    ![コマンド設定](TeXstudio2.png "max-width=700px コマンド設定")
    

## コンパイラ設定

1. オプション>ビルドから、「ビルド＆表示」の欄の歯車マークを押します。
2. 「Ordered list of commands」が下のように<span class="wrap-btn-style">DVI→PDF Chain</span>のみになるようにします。
    
    ![「ビルド＆表示」の設定](TeXstudio3.png "max-width=700px 「ビルド＆表示」の設定")
    
3. 同様に、「既定のコンパイラ」は、<span class="wrap-btn-style">LaTeX　>　BibTeX　>　DVI→PDF Chain</span>の順になるようにします（順番に注意）。
    
    ![「既定のコンパイラ」の設定。](TeXstudio4.png "max-width=700px 「既定のコンパイラ」の設定")
    
    
4. 次のようになっていたらOKです。この設定で、キーボードの「F5」キーで通常のコンパイル、「F6」キーでBibTeXを含めたコンパイルができるようになります。
    
    ![コンパイラ設定完了](TeXstudio5.png "max-width=700px コンパイラ設定完了")
    

# 実際に文章を打ってみる

---

インストールおよびコンパイラの設定ができたら、実際にテストで文書をコンパイルしてみましょう。

テスト用の文書は<span class="familylink">[LaTeX文書を書いてみる](/TeX/LaTeX-beginner/LaTeX-beginner.md)</span> を参照。