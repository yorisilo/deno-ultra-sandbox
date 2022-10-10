# deno-ultra-sandbox
deno で todo app を作成する

## usage

``` shell
# サーバーを起動する (ホットリロードはないので、コードを更新するたびにブラウザを更新する必要がある)
deno task dev
```

## develop

``` shell
# ローカルに各種パッケージをダウンロードすることで、lsp の補完が効くようになる。
# imporMap.json 以外に直接ファイルに package の url を記述している場合は以下を用いると良い
# deno cache `find -E . -type f -regex "(.*.ts($|x)|importMap.json)"`
# importMap.json にのみ package の url を記載している場合は以下でローカルにダウンロードする。
deno cache importMap.json
```

## specification
- [x] todo 登録できる
- [x] todo を完了できる
  - [x] todo のチェックボタンをチェックにすると todo の done が true になる。チェックボタンのチェックを外すと todo の done が false になる。
- [x] todo を削除できる
  - [x] todo をドラッガブルにする
  - [x] ドラッグして一定時間経ったら、削除
  - [x] ある範囲外に出て、一定時間経って手を離したら、削除
  - [x] ある範囲内だったら、削除しない
- [ ] todo を編集できる

## component design
- todoApp
- inputTodo
- todolist
- todo

## optional
- Installation Tailwind CSS
