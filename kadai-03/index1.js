//プログラムに数字を取り込む
const number = parseInt(process.argv[2])


//素数かどうかを判定する（whileループ）
let isPrime = true

if(number === 1){
    console.log("1は素数ではありません。2以上の自然数を入力してください。")
    isPrime = false
} else {
    let index = 2
    while (index < number){
        if(number % index === 0){
            isPrime = false
            console.log(number, "は", index, "で割り切れるので、素数ではありません")
            break
        }
        index = index + 1
    }
} if(isPrime){
    console.log(number, "は素数です")
}
