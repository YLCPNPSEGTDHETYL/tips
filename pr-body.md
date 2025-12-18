## 💡 概要
Markdownコンテンツ管理システムを実装しました。marked、KaTeX、Prism.jsを統合し、数式やコードハイライトをサポートしています。

## 📝 変更内容
- **ContentService**: Markdown → HTML変換、KaTeX数式レンダリング、Prismコードハイライトを統合
- **ArticleComponent**: ContentServiceを使用してMarkdownファイルを動的に読み込み、レンダリング
- **ライブラリ追加**: marked, katex, prismjs及び型定義をインストール
- **スタイル**: KaTeXとPrismのCSSをグローバルスタイルに追加
- **テスト用コンテンツ**: `src/assets/content/sample.md` を作成

## 🔗 関連Issue
Closes #2

## 📷 スクリーンショット（該当する場合）
(ローカルで `/article/sample` にアクセスすればMarkdownレンダリングを確認可能)

## ✅ チェックリスト
- [x] ビルドが成功する（`npm run build`）
- [x] Lintエラーがない（`npm run lint`）
- [x] テストが通る（`npm run test`）
- [x] コミットメッセージが規約に従っている（`feat:`）
- [x] ブランチ名が規約に従っている（`feature/`）
- [x] 必要に応じてドキュメントを更新した

## 📌 補足事項
- Prism.jsがCommonJSモジュールのため、ビルド時に警告が出ますが、動作に影響はありません
- 現在は `/article/sample` でテスト用コンテンツを表示
- 今後、既存の69個のMarkdownファイルを `src/assets/content/` に移行し、ルーティングを拡張する予定
