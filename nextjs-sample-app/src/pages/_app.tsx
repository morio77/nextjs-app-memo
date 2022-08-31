import "../styles/globals.css";
import type { AppProps } from "next/app";

// Font AwesomeのCSSをインポートし、グローバルスタイルとして適用
import "@fortawesome/fontawesome-svg-core/styles.css";
// Font AwesomeのSVGコアが個別にCSSをを適用するのを無効化
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
