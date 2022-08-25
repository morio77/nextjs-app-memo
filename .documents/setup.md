# 環境構築について書く

上から順番に実施していく

## Node.jsのインストール

ここではHomebrewを使う

```bash
# nodejsのインストール
brew install node

# パスを通して
export PATH=/usr/local/opt/node/bin:$PATH

# 反映（shellによってどっちか）
source ~/.bash_profile
source ~/.zshrc

# 確認
node -v
npm -v
```

VoltaなどのNode.jsのバージョン管理ツールを使ってもいいかもしれない。

## Next.jsのプロジェクトを作成して開発サーバを起動

```bash
# プロジェクト作成
npx create-next-app@latest hoge-fuga --ts

# 開発サーバを起動
cd hoge-fuga
npx run dev
```