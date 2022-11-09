//引数aとbの積を計算する関数product
const product = (a, b) => {
    return a * b
}

//整数nを引数として与えると、1からnまでの和を計算する関数sum
const sum = (n) => {
    let total = 0
    for (let k = 0; k < n + 1; k = k + 1){
        total = total + k
    }
    return total
}

//定義した関数productとsumを使う
console.log(product(107,109))
console.log(sum(500))
