# 静的解析と自動フォーマットを行う設定

VSCode で開発することを前提としている。

参考：https://zuma-lab.com/posts/next-eslint-prettier-settings

## `prettier`(フォーマッター)をインストール

```bash
npm install -D prettier eslint-config-prettier
```

## `.eslintrc.json`を編集する

```diff
{
- "extends": "next/core-web-vitals"
+ "extends": ["next/core-web-vitals", "prettier"]
}
```

## (場合によって)`package.json`の`lint`コマンドに `--dir src` を追記

ソースファイル一式を`src`ディレクトリ配下に移動している場合は設定する。

```diff
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
-   "lint": "next lint"
+   "lint": "next lint --dir src"
  },
```

## (任意)`.prettierrc.json`を作成する

作成するならルートディレクトリに配置。

## VSCode の拡張機能をインストール

- [ESLint(ESLint 拡張機能)](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter(Prettier 拡張機能)](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## `.vscode/settings.json`を作成して、自動フォーマットの設定を記載

```json
{
  // formatter
  "editor.formatOnSave": true, // ファイル保存時の自動フォーマット有効
  "editor.formatOnPaste": true, // ペーストした文字の自動フォーマット有効
  "editor.formatOnType": true, // 文字入力行の自動フォーマット有効
  "editor.defaultFormatter": "esbenp.prettier-vscode", // デフォルトフォーマッターをPrettierに指定
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true // ファイル保存時に ESLint でフォーマット
  }
}
```

## VSCode を再起動
