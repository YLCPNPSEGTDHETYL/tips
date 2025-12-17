# PowerShellプロファイルに追加するコード
# このコードを $PROFILE に追加すると、ディレクトリ移動時に自動的にGitHubアカウントを切り替えます

# 現在のGitHubアカウントを保持する変数
$global:CurrentGitHubAccount = "M0G3K0"

# ディレクトリ変更時にGitHubアカウントを自動切り替えする関数
function Invoke-AutoGitHubSwitch {
    $currentPath = $PWD.Path
    $tusPath = "C:\Users\hmanako\Documents\project_TUS"
    
    # project_TUS配下にいるかチェック
    if ($currentPath -like "$tusPath*") {
        # TUSディレクトリ内 → YLCPNPSEGTDHETYLに切り替え
        if ($global:CurrentGitHubAccount -ne "YLCPNPSEGTDHETYL") {
            gh auth switch -u YLCPNPSEGTDHETYL 2>$null
            $global:CurrentGitHubAccount = "YLCPNPSEGTDHETYL"
            Write-Host "→ Switched to YLCPNPSEGTDHETYL" -ForegroundColor Cyan
        }
    }
    else {
        # TUSディレクトリ外 → M0G3K0に切り替え
        if ($global:CurrentGitHubAccount -ne "M0G3K0") {
            gh auth switch -u M0G3K0 2>$null
            $global:CurrentGitHubAccount = "M0G3K0"
            Write-Host "→ Switched to M0G3K0" -ForegroundColor Cyan
        }
    }
}

# プロンプト関数をオーバーライドして、ディレクトリ変更時にチェック
$global:OriginalPrompt = $function:prompt
function global:prompt {
    Invoke-AutoGitHubSwitch
    & $global:OriginalPrompt
}

# 初回起動時にもチェック
Invoke-AutoGitHubSwitch

Write-Host "✅ GitHub auto-switch enabled for project_TUS directory" -ForegroundColor Green
