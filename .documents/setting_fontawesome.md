# Font Awesome のインストール方法

## パッケージをインストール

```bash
npm install @fortawesome/fontawesome-svg-core
npm install @fortawesome/react-fontawesome
npm install @fortawesome/free-solid-svg-icons
npm install @fortawesome/free-regular-svg-icons
npm install @fortawesome/free-brands-svg-icons
```

## グローバル CSS 適用

`_app.js`を修正

```diff
    import "../styles/globals.css";
    import type { AppProps } from "next/app";

+   // Font AwesomeのCSSをインポートし、グローバルスタイルとして適用
+   import "@fortawesome/fontawesome-svg-core/styles.css";
+   // Font AwesomeのSVGコアが個別にCSSをを適用するのを無効化
+   import { config } from "@fortawesome/fontawesome-svg-core";
+   config.autoAddCss = false;

    function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
    }

    export default MyApp;
```

## コンポーネントで使用する

例えば、渡された SNS の種類に応じて、`Font Awesome`で包んで返すコンポーネントを作る。

`/src/components/atoms/SocialIcon/index.tsx`

```tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";

export type SocialIconProps = {
  media: "twitter" | "facebook";
};

export default function SocialIcon(props: SocialIconProps) {
  const { media } = props;
  let iconProp: IconDefinition;

  switch (media) {
    case "twitter":
      iconProp = faTwitter;
      break;
    case "facebook":
      iconProp = faFacebook;
      break;
  }

  return <FontAwesomeIcon icon={iconProp} />;
}
```

使う側はこんな感じ

```tsx
<SocialIcon media="twitter" />
```
