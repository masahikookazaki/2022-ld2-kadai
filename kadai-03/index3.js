//2から10000までの素数のうち、3で割ると1余るものと、3で割ると2余るものそれぞれの総和
let sum1 = 0
let sum2 = 0

for (let number = 2; number <= 10000; number = number + 1){
    let isPrime = true
    for (let index = 2; index < number; index++) {
        if(number % index === 0){
                isPrime = false
                console.log(number, "は", index, "で割り切れるので、素数ではありません")
                break
        } 
    }    
    
    if(isPrime){
            console.log(number, "は素数です")
            if(number % 3 === 1){
                sum1 = sum1 + number
            }
            if(number % 3 === 2){
                sum2 = sum2 + number
            }
        }    
    }
    

console.log("2 から 10,000 までの素数のうち、3で割ると1余るものの和", sum1)
console.log("2 から 10,000 までの素数のうち、3で割ると2余るものの和", sum2)
