# コントリビューションガイド

Tips プロジェクトへのコントリビューションをお考えいただき、ありがとうございます！
このガイドでは、プロジェクトへの貢献方法について説明します。

---

## 📋 目次

- [🔄 開発フロー](#-開発フロー)
- [🌿 ブランチ命名規則](#-ブランチ命名規則)
- [💬 コミットメッセージ規約](#-コミットメッセージ規約)
- [📋 Issue運用](#-issue運用)
- [📝 Pull Request規約](#-pull-request規約)
- [🎨 コーディング規約](#-コーディング規約)

---

## 🔄 開発フロー

### 基本的な流れ

1. **Issueの確認・作成**
   - 新機能や修正内容についてIssueで議論
   - 既存Issueがない場合は新規作成

2. **ブランチ作成**
   ```bash
   git checkout main
   git pull origin main
   git checkout -b <type>/<description>
   ```

3. **開発・コミット**
   ```bash
   git add .
   git commit -m "<type>: <description>"
   ```

4. **プッシュ・PR作成**
   ```bash
   git push origin <branch-name>
   # GitHubでPull Requestを作成
   ```

5. **レビュー・マージ**
   - CI チェックがすべてパス
   - レビュー承認後、main へマージ

---

## 🌿 ブランチ命名規則

### フォーマット

```
<type>/<description>
```

### タイプ一覧

| タイプ | 説明 | 例 |
|--------|------|-----|
| `feature` | 新機能の追加 | `feature/angular-migration` |
| `fix` | バグ修正 | `fix/markdown-rendering` |
| `hotfix` | 緊急の修正 | `hotfix/critical-error` |
| `refactor` | リファクタリング | `refactor/design-tokens` |
| `docs` | ドキュメント更新 | `docs/update-readme` |
| `test` | テスト追加・修正 | `test/add-component-tests` |
| `chore` | ビルド・設定変更 | `chore/update-dependencies` |
| `style` | コードスタイル修正 | `style/format-code` |
| `perf` | パフォーマンス改善 | `perf/optimize-rendering` |
| `ci` | CI/CD設定変更 | `ci/add-workflow` |

### 命名ルール

- **小文字のみ**使用
- **ハイフン**で単語を区切る
- **簡潔かつ説明的**に

### 例

- ✅ `feature/add-katex-support`
- ✅ `fix/navigation-bug`
- ✅ `refactor/token-system`
- ❌ `Feature/AddKatexSupport` （大文字使用）
- ❌ `fix_navigation_bug` （アンダースコア使用）

---

## 💬コミットメッセージ規約

### フォーマット（Conventional Commits）

```
<type>: <description>

[optional body]

[optional footer]
```

### タイプ一覧

| タイプ | 説明 |
|--------|------|
| `feat` | 新機能 |
| `fix` | バグ修正 |
| `docs` | ドキュメント変更 |
| `style` | コードスタイル（空白、セミコロン等） |
| `refactor` | リファクタリング |
| `perf` | パフォーマンス改善 |
| `test` | テスト追加・修正 |
| `build` | ビルドシステム変更 |
| `ci` | CI設定変更 |
| `chore` | その他の変更 |
| `revert` | 変更の取り消し |

### ルール

- **descriptionは小文字で開始**
- **現在形**で記述（"added"ではなく"add"）
- **簡潔に**（50文字以内推奨）
- **本文は必要に応じて追加**

### 例

```bash
feat: add markdown rendering support

Implement marked library for rendering markdown content.
Includes support for KaTeX math expressions.

Closes #123
```

```bash
fix: resolve navigation menu overlap issue
```

```bash
docs: update contributing guidelines
```

---

## 📋 Issue運用

### Issueタイトルの命名規則

**Conventional Commits形式**で記載（PRと同じ形式）：

```
<type>: <description>
```

- **typeは小文字**で開始
- **descriptionは小文字英語**で記述
- **簡潔に**（50文字以内推奨）

#### 例

- ✅ `feat: implement core ui components`
- ✅ `fix: resolve navigation menu overlap`
- ✅ `docs: add contributing guidelines`
- ❌ `Feature: Implement Core UI Components` （大文字使用）
- ❌ `コアコンポーネントの実装` （日本語使用）

### Issueを立てるタイミング

- 新機能の提案
- バグの報告
- ドキュメントの改善提案
- リファクタリング・最適化の提案

### Issueラベルの使い方（Conventional Commits準拠）

| ラベル | 用途 | 例 |
|--------|------|-----|
| `feat` | 新機能 | 新しいコンポーネント追加 |
| `fix` | バグ修正 | レイアウト崩れの修正 |
| `docs` | ドキュメント | README更新 |
| `style` | スタイル・デザイン | CSS調整 |
| `refactor` | リファクタリング | コード整理 |
| `perf` | パフォーマンス | 表示速度改善 |
| `test` | テスト | テストケース追加 |
| `build` | ビルドシステム | webpack設定変更 |
| `ci` | CI/CD | GitHub Actions設定 |
| `chore` | その他・メンテナンス | 依存関係更新 |
| `revert` | 変更の取り消し | 以前のコミットに戻す |

### 関連Issueの記載方法（PRで使用）

- `Closes #123` - PRマージ時にIssueを自動クローズ
- `Fixes #123` - 同上
- `Resolves #123` - 同上
- `Related to #123` - 関連Issue（クローズしない）

---

## 📝 Pull Request規約

### PRタイトル

**Conventional Commits形式**で記載：

```
<type>: <description>
```

例：
- `feat: add markdown content loader`
- `fix: resolve rendering issue`
- `docs: update setup instructions`

### PR説明

以下の内容を含める：

1. **変更内容の概要**
2. **関連Issue** (`Closes #123`形式)
3. **テスト方法**（必要に応じて）
4. **スクリーンショット**（UI変更の場合）

### レビュー

- **すべてのCIチェック**がパスすること
- **少なくとも1名のレビュー**承認が必要
- **コンフリクト**は解決してからマージ

---

## 🎨 コーディング規約

### Angular

- **Standalone Components**を使用
- **Signals**を使用して状態管理
- **OnPush Change Detection**を推奨

### TypeScript

- **厳格な型定義**を使用
- `any`型は避ける
- **明示的な型注釈**を推奨

### スタイル

- **デザインシステムのトークン**を使用
- **Tailwind CSSのユーティリティクラス**は禁止（デザインシステムのトークンを使用）
- **SCSSでコンポーネントスタイル**を定義

### 命名規則

- **ファイル名**: `kebab-case.component.ts`
- **クラス名**: `PascalCase`
- **変数・関数**: `camelCase`
- **定数**: `UPPER_SNAKE_CASE`
- **CSSクラス**: `tips-component-name` (prefix: `tips-`)

---

## 📚 参考資料

- [Angular Style Guide](https://angular.io/guide/styleguide)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow)
