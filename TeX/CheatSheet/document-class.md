<!--8-->
<!--ドキュメントクラス-->

### **概要**

---

欧文がメインの場合にはjsの付かないクラス（article, report, book）、和文がメインの場合はjsの付くクラス（jsarticle, jsreport, jsbook）を用います。

| **名称** | **用途** | **特徴** |
| --- | --- | --- |
| article<br>jsarticle | ・短いレポート<br>・雑誌記事<br>・論文<br>※もっとも一般的 | \sectionが最上位。<br>\chapterはない。 |
| report<br>jsreport | ・やや長めの報告書 | \chapterが最上位。 |
| book<br>jsbook | ・本 | \chapterが最上位。<br>奇数ページ、偶数ページのレイアウトが異なる（ノド側の余白が大きい）。 |

<aside class="warning">
<div>
    和文用には、jシリーズというクラス（jarticle, jreport, jbook）もありますが、これらは非推奨です。
    jシリーズのフォントメトリック（文字の組み方）は「min10」という古いデフォルトです。
    小さい文字（拗音）、括弧、行間、インデント等の組版が不自然なので、原則使用しません。
</div>
</aside>

### **オプション一覧**

---

- ドキュメントクラスにはいろいろなオプションがある。
    
    
    | **名称** | **概要** |
    | --- | --- |
    | 10pt | 本文の欧文文字サイズを10ptにする（デフォルト）。<br>jsシリーズではこのほかに、9pt, 11pt, 12pt, 14pt, 17pt, 21pt, 25pt, 30pt, 36pt, 43pt, 12Q, 14Qがある。 |
    | a4paper | 用紙サイズをA4（297 mm×210 mm）にする<br>（和文クラスのデフォルト）。 |
    | a5paper | 用紙サイズをA5（210 mm×148 mm）にする。 |
    | b4paper | 用紙サイズをB4（364 mm×257 mm）にする<br>（欧文クラスにはない）。 |
    | b5paper | 用紙サイズをB5（257 mm×182 mm）にする。<br>欧文用ではISOのB5判（250 mm×176 mm）になる。 |
    | letterpaper | 用紙サイズをレター判（11 in×8.5 in）にする<br>（欧文クラスのデフォルト）。 |
    | legalpaper | 用紙サイズをリーガル判（14 in×8.5 in）にする。 |
    | executivepaper | 用紙サイズをエグゼキュティブ判（10.5 in×7.25 in）にする。 |
    | landscape | 用紙の向きを横置きにする。 |
    | papersize | 用紙サイズオプションに従ってPDFのページサイズを設定<br>（jsシリーズ） |
    | tombow | 四隅に神の裁断位置を示すトンボを描く（和文のみ）。<br>トンボの脇にファイル名・一時も出力される。 |
    | tombo | ファイル名・日時なしのトンボが描かれる（和文のみ）。 |
    | mentuke | ファイル名・日時なし・太さゼロのトンボが描かれる（和文のみ）。<br>面付けに便利。 |
    | oneside | 奇数ページと偶数ページのレイアウトを同じにする。<br>article, reportでのデフォルト。 |
    | twoside | 奇数ページと偶数ページのレイアウトを変える。<br>bookのデフォルト。 |
    | onecolumn | 段組をしない（デフォルト）。 |
    | twocolumn | 2段組にする。<br>左右の段の距離を変えたい場合はプリアンブルに<br>`\setlength{\columnsep}{2zw}`<br>のように指定（`2zw`は和文2文字分のスペース）。<br>罫線を引きたい場合は<br>`\setlength{\columnseprule}{0.4pt}`<br>のように指定。<br>※3段組以上はmulticolパッケージを使う。 |
    | titlepage | `\maketitle`で出力される表紙、abstract環境で出力する概要を、どちらも単独ページに出力。<br>jsbookのデフォルト。 |
    | notitlepage | タイトル、概要が本文の1ページの上部に出力される。<br>jsarticle, jsreportのデフォルト。 |
    | openright | 章を右ページ起こしにする。jsbookのデフォルト。<br>章のないarticleでは使えない。 |
    | openany | 章を左右どちらのページからも始める。jsreportのデフォルト。 |
    | draft | 校正用オプション。<br>行分割がうまくいかず、右端からはみ出した行がある場合に、<br>その場所に長方形のマークを出力する。 |
    | final | 最終出力用。<br>はみ出した行の黒四角を表示しない（デフォルト）。 |

---

- **関連リンク**

    <div class="related-link-wrapper">
      [modal-15]<!--ページレイアウト--><br>
      [modal-16]<!--sectionなどの書式変更-->
    </div>