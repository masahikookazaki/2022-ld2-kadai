//2から10000までの全ての素数を出力する
let count = 0

for (let number = 2; number <= 10000; number = number + 1){
    let isPrime = true
    for (let index = 2; index < number; index++) {
        if(number % index === 0){
                isPrime = false
                break
        } 
    }    
    
    if(isPrime){
            console.log(number)
            count = count + 1
        }    
    }
    
console.log("以上、2 から 10,000 までの素数は全部で", count, "個です")
