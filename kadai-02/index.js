//変数 firstName と familyName を作成して自分の名前などを代入してみる
const firstName = "Taro"
const familyName = "Nippon"

//文字列を結合する演算子を使って、フルネームを作成してを使って出力してみる
//変数fullName
const fullName = firstName + " " + familyName
//変数iam
const iam = 'I am '
console.log(iam + fullName + ".")

//1から10までの和を計算して出力してみる
const num = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
console.log(iam + num + " years old.")

//犬を飼っているかどうかの真偽値を格納する変数 dog と、猫を飼っているかどうかの真偽値を格納する変数 cat を作成して値を格納する
const dog = false
const cat = true

//「犬または猫を飼っている」場合の真偽値を計算して出力してみる
console.log("犬または猫を飼っている", dog || cat)

//「犬と猫の両方を飼っている」場合の真偽値を計算して出力してみる
console.log("犬も猫も飼っている", dog && cat)

//「犬も猫も飼っていない」場合の真偽値を計算して出力してみる
console.log("犬も猫も飼っていない", !(dog || cat))