## 💡 概要
Vercel GitHub連携を設定し、PRごとに自動プレビュー環境を作成する。

## 🎯 目的
PRを作成するたびに自動的にVercelがプレビューURLを生成し、GitHub Checks/Commentsで確認できるようにする。

## 📋 詳細
現在、Vercelの本番デプロイは動作している（https://tips-tau.vercel.app）が、GitHub連携が未完了のため、PRプレビューが作成されない。

### 試したこと
- Vercel Dashboard で GitHub Account 追加を試みた
- GitHub側でVercel Appをインストール済み
- `vercel git connect` コマンドを実行したが失敗
- ドロップダウンに「YLCPNPSEGTDHETYL」アカウントが表示されない

### 考えられる原因
- Vercel UIのバグ
- 複数GitHubアカウント（M0G3K0と YLCPNPSEGTDHETYL）の権限競合
- Vercel側のキャッシュ問題

## 📋 検討する解決策
1. `vercel unlink` / `vercel link` で再設定
2. GitHub ActionsでVercel CLIを使ってデプロイ（PRプレビューを自前で実装）
3. Vercelサポートへの問い合わせ
4. 別のVercelアカウントで試す

## ✅ 完了条件
- [ ] PRを作成すると自動的にVercelプレビューURLが作成される
- [ ] GitHub ChecksまたはCommentsにプレビューURLが表示される
- [ ] ブランチbetaへのマージ時に本番環境が自動更新される
