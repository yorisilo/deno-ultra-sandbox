# deno-ultra-sandbox
deno で todo app を作成する

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
