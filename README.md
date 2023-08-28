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