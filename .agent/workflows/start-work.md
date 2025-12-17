---
description: このプロジェクトで作業を開始する方法
---

# Tipsプロジェクト作業開始手順

## ⚠️ 必須: 認証設定

**このプロジェクトで作業する前に、必ず以下のコマンドを実行してください：**

```powershell
. .\setup-gh-auth.ps1
```

このコマンドは、現在のPowerShellセッションでのみ有効です。新しいターミナルを開いたら、再度実行してください。

## 理由

このプロジェクト（Tips）はYLCPNPSEGTDHETYLアカウントで管理されていますが、グローバルなGitHub CLI設定はM0G3K0アカウントです。

`setup-gh-auth.ps1`を実行することで、このセッションだけでYLCPNPSEGTDHETYLアカウントを使用できます。

## 確認方法

以下のコマンドで、正しいアカウントが使われているか確認できます：

```powershell
gh auth status
```

「✓ Logged in to github.com account YLCPNPSEGTDHETYL」と表示されればOKです。

## 作業フロー

1. **認証設定**
   ```powershell
   . .\setup-gh-auth.ps1
   ```

2. **ブランチ作成・開発**
   ```bash
   git checkout beta
   git pull origin beta
   git checkout -b feature/your-feature
   # 開発作業...
   ```

3. **コミット・プッシュ**
   ```bash
   git add .
   git commit -m "feat: your change"
   git push -u origin feature/your-feature
   ```

4. **PR作成**
   ```bash
   gh pr create --base beta
   ```
