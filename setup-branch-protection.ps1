# ブランチ保護ルール設定スクリプト
# 適用対象: main, beta

$branches = @("main", "beta")
$owner = "YLCPNPSEGTDHETYL"
$repo = "tips"

# 設定JSON
$params = @{
    required_status_checks = @{
        strict = $true
        checks = @(
            @{ context = "Lint" },
            @{ context = "Test" },
            @{ context = "Build" }
        )
    }
    enforce_admins = $true
    required_pull_request_reviews = @{
        dismiss_stale_reviews = $true
        require_code_owner_reviews = $false
        required_approving_review_count = 0
    }
    restrictions = $null
} | ConvertTo-Json -Depth 5

# 一時ファイルに保存（UTF-8 No BOM）
$jsonFile = "protection-rules.json"
[System.IO.File]::WriteAllText($jsonFile, $params)

foreach ($branch in $branches) {
    Write-Host "Setting protection rules for branch: $branch" -ForegroundColor Cyan
    
    # APIリクエスト実行
    $uri = "repos/$owner/$repo/branches/$branch/protection"
    # gh api はファイルパスを直接受け取れないので、Get-Contentを使うか、input引数を使う
    # ここでは Get-Content をパイプするが、エンコーディングに注意
    
    # 最も確実な方法: gh api --input file
    gh api --method PUT $uri --input $jsonFile
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Successfully protected $branch" -ForegroundColor Green
    } else {
        Write-Host "❌ Failed to protect $branch" -ForegroundColor Red
    }
}

# 後始末
Remove-Item $jsonFile
