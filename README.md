# pandacssを使ってNext.JS環境でcssする
## とりあえずyarnする
`zsh`
```
yarn create next-app
```
この際に**TailWindCss**は**No**にする.

## pandacssをinstall&initする
`zsh`
```
yarn add -D @pandacss/dev
yarn panda init -postcss
```
これによってpandacssをinstall&initすることができる.

## 各ファイルをpandacss用に書き換える

1. package.jsonを変更する

`package.json`
```
"scripts": {
    "prepare": "panda codegen",
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
```
`"prepare": "panda codegen",`を追加する.

2. .gitignoreを次のように変更する.

`.gitignore`
```
# dependencies
/node_modules
/.pnp
.pnp.js
/styled-system
```
`/styled-system`を追加する.

3. src/globals.cssを次のように変更する.

`globals.css`
```
@layer reset, base, tokens, recipes, utilities;
```

globals.css内の全てコードを削除して上記のコードに書き換える.

4. page.module.cssを削除する.

`src/page.module.css`はtailwindcssを使わないように作られるファイルであり今回は必要ないので削除する.

# Pandacss公式ドキュメントのconcenptを読んで実践してみる.
## CascadeLayersについて.
一つの要素に対してcssを複数適用する場面があると考えられる.

（例えば通常時は白色だがカーソルが合わさったら黒色になるなど）

その時の適用順序に関してCascadeLayersを利用して順序整理するためブラウザがCascadeLayersにサポートされている必要がある.

具体的な優先順位は次のようになる.

1. `utilities`
1. `recipes`
1. `tokens`
1. `base`
1. `reset`

