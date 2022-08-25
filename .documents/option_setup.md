# プロジェクト作成直後のオプションの設定

規模が大きくなり、ルートディレクトリが複雑にならないように、以下の設定をしておくのも1つの手。

* ルートディレクトリに`src`フォルダを作成する。
* `pages`フォルダと`styles`フォルダを`src`フォルダ直下に移動させる。
* `tsconfig.json`を以下のように修正する。
  * `baseUrl`オプションに`src`を追加して、基準のディレクトリを`src`にする。
  * `include`オプションに`src/**/*.ts`と`src/**/*.tsx`に変更する。

```diff
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
-   "incremental": true
+   "incremental": true,
+   "baseUrl": "src"    
  },
- "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
+ "include": ["next-env.d.ts", "src/**/*.ts", "src/**/*.tsx"],
  "exclude": ["node_modules"]
}
```