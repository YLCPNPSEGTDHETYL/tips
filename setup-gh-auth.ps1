# このプロジェクト専用のGitHub CLI認証設定
# YLCPNPSEGTDHETYL アカウント用

# 使い方:
# 1. このファイルをコピーして setup-gh-auth-local.ps1 を作成
# 2. setup-gh-auth-local.ps1 内のYOUR_TOKEN_HEREを実際のトークンに置き換え
# 3. . .\setup-gh-auth-local.ps1 を実行

# グローバル設定を一時的にYLCPNPSEGTDHETYLに切り替え
gh auth switch -u YLCPNPSEGTDHETYL

Write-Host "✅ GitHub CLI switched to YLCPNPSEGTDHETYL account" -ForegroundColor Green
Write-Host "   Remember to switch back when done: gh auth switch -u M0G3K0" -ForegroundColor Yellow
