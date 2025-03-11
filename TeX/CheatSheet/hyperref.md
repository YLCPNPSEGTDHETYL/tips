<!--27-->
<!--ハイパーリンクをつける（hyperrefパッケージ）-->

### パッケージ読み込み

---

- `hyperref` パッケージは、基本プリアンブルの最後に読み込む。以下は例。
    
    ```latex
    %-- ハイパーリンク --%
    \usepackage[%
    dvipdfmx,%
    bookmarks=true,%
    bookmarksnumbered=true,%
    bookmarksdepth=3,%
    colorlinks=true,%
    linkcolor=black,%
    setpagesize=false,%
    citecolor=blue,% このあたりの色は好みで変更。
    filecolor=blue,%
    pagecolor=blue,%
    urlcolor=blue%
    ]{hyperref} % その他のパッケージを読み込んでから、最後に読み込む。
    \usepackage{pxjahyper} % ブックマークの指定。
    \usepackage[all]{hypcap} % 図表でのリンクの位置修正
    ```
    

- 以下は代表的なオプション。
    
    
    | オプション | 説明 |
    | --- | --- |
    | `pdftex`, `xetex`, `luatex` | 各エンジンに対応したドライバ設定。 |
    | `dvipdfmx` | dvipdfmxドライバを指定。欧文ではコメントアウトする。 |
    | `bookmarks` | PDFのブックマーク（目次）を作成するかどうか（`true`/`false`）。 |
    | `bookmarksnumbered` | ブックマークに番号を付けるかどうか（`true`/`false`）。 |
    | `bookmarksdepth=3` | ブックマークに表示する階層の深さを指定（ここでは`subsubsection`まで）。 |
    | `colorlinks` | リンクに色を付ける（デフォルトは`false`で、四角い枠が付く）。 |
    | `linkcolor` | 内部リンクの色を指定（例：`red`, `black`）。 |
    | `setpagesize=false` | PDFのページサイズを自動で設定しない。ユーザーが指定したサイズを保持。 |
    | `citecolor` | 引用リンクの色を指定。 |
    | `filecolor` | ファイルリンクの色を指定。 |
    | `pagecolor` | ページリンクの色を指定。 |
    | `urlcolor` | URLリンクの色を指定。 |
    | `breaklinks` | 長いリンクを改行可能にする（デフォルトは`false`）。 |
    | `bookmarksopen` | ブックマークを開いた状態にするかどうか。 |
    | `bookmarksopenlevel` | ブックマークを何レベルまで展開するかを指定。 |
    | `pdfborder` | リンクの周りのボーダーを設定（例：`{0 0 0}`で枠をなしにする）。 |
    | `pdfstartview` | PDFを開いたときの表示方法（例：`Fit`, `FitH`など）。 |
    | `pdftitle` | PDFのタイトルメタデータを指定。 |
    | `pdfauthor` | PDFの著者メタデータを指定。 |
    | `pdfsubject` | PDFのサブジェクトメタデータを指定。 |
    | `pdfkeywords` | PDFのキーワードメタデータを指定。 |
    | `pdfproducer` | PDFのプロデューサーメタデータを指定。 |
    | `pdfcreator` | PDFのクリエーターメタデータを指定。 |
    | `pdfpagemode` | PDFを開いたときの表示モード（例：`UseOutlines`でブックマーク表示）。 |
    | `pdfpagelayout` | PDFのページレイアウトを指定（例：`SinglePage`, `TwoPageRight`など）。 |
    | `pdfdisplaydoctitle` | ドキュメントタイトルをウィンドウタイトルに表示するかどうか（`true`/`false`）。 |
    | `hidelinks` | リンクの色や枠をすべて非表示にするオプション。 |
    | `hyperindex` | ハイパーリンク付きのインデックスを作成（`true`/`false`）。 |
    | `hyperfootnotes` | 脚注をハイパーリンクにするかどうか（`true`/`false`）。 |
    | `linktoc` | 目次のどの部分にリンクを設定するかを指定（`none`, `section`, `page`など）。 |
    | `unicode` | ユニコード文字をハイパーリンクに使用するかどうか（`true`/`false`）。 |
    | `baseurl` | 相対リンクの基準となるURLを指定。 |
    | `ocgcolorlinks` | 色付きリンクをPDFの可変グラフィックスコンテンツ（OCG）に変換。 |
- ほかにもいろいろあるので、詳しくは公式ドキュメント参照。

---

- **関連リンク**

    <div class="related-link-wrapper">
      [modal-12]<!--図の挿入（figure環境）--><br>
      [modal-13]<!--文字などの色を指定（xcolorパッケージ）--><br>
      [modal-2]<!--表の挿入（tabular環境）-->
    </div>