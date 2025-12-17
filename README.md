# Tips - Research Repository

既存のJekyllサイトをAngularに移行するプロジェクト

## 🚀 開発環境セットアップ

### 前提条件
- Node.js v20.19以上 または v22.12以上
- npm 11.x以上
- Angular CLI 17.3以上

### 初回セットアップ

```bash
# 依存関係をインストール
npm install

# このプロジェクト専用のGitHub CLI認証を設定
. .\setup-gh-auth.ps1
```

### 開発サーバー起動

```bash
# 開発サーバー起動
npm start
```

ブラウザで `http://localhost:4200/` にアクセス

## 📋 開発ワークフロー

### ⚠️ 重要: 作業開始時の手順

**このプロジェクトで作業する前に、必ず以下を実行してください：**

```powershell
# YLCPNPSEGTDHETYL認証を有効化（このセッションのみ有効）
. .\setup-gh-auth.ps1
```

このコマンドを実行しないと、GitHub CLIコマンド（`gh`）がM0G3K0アカウントで実行されてしまいます。

### ブランチ戦略

```
main (現行Jekyllサイト - 保護)
  ↑
beta (Angular統合ブランチ)
  ↑
feature/* (機能開発ブランチ)
```

- `main`: 現在動作しているJekyllサイト（触らない）
- `beta`: Angular開発用の統合ブランチ
- `feature/*`: 各機能の開発ブランチ

### 新機能開発フロー

1. **認証設定を有効化**
   ```powershell
   . .\setup-gh-auth.ps1
   ```

2. **betaブランチから新しいブランチを作成**
   ```bash
   git checkout beta
   git pull origin beta
   git checkout -b feature/your-feature-name
   ```

3. **開発・コミット**
   ```bash
   # タスクごとに細かくコミット
   git add .
   git commit -m "feat: add specific feature"
   ```

4. **プッシュ・PR作成**
   ```bash
   git push -u origin feature/your-feature-name
   gh pr create --base beta --title "feat: your feature" --body-file pr-body.md
   ```

5. **CIチェックとレビュー**
   - すべてのCIチェックがパス
   - レビュー承認後、betaへマージ

### ブランチ切り替え時の注意

`.gitignore`されていないファイル（`issue-*-body.md`など）は、ブランチ切り替え前に`git stash`してください：

```bash
git stash
git checkout other-branch
git stash pop  # 必要に応じて
```

## 🏗️ プロジェクト構成

```
tips/
├── src/
│   ├── app/
│   │   ├── pages/          # ページコンポーネント
│   │   ├── components/     # 再利用可能コンポーネント
│   │   ├── services/       # サービス
│   │   └── data/          # 静的データ
│   ├── assets/            # 画像、アイコン
│   └── styles/
│       └── tokens/        # デザイントークン
├── .github/
│   ├── workflows/         # CI/CD設定
│   └── ISSUE_TEMPLATE/    # Issueテンプレート
└── issue-*-body.md       # Issue編集用（git管理外）
```

## 📚 参考資料

- [CONTRIBUTING.md](./CONTRIBUTING.md) - コントリビューションガイド
- [Angular公式ドキュメント](https://angular.io/)
- [デザインシステム](./src/styles/tokens/) - トークンベースのデザインシステム