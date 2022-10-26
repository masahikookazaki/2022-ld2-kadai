// //（条件分岐）テストの合否判定
// const score = 68

// if(score >= 60){
//     console.log("合格です")
// } else {
//     console.log("不合格です")
// }

// if(score >= 90){
//     console.log("成績はAです")
// } else if (score >= 80){
//     console.log("成績はBです")
// } else if (score >= 60){
//     console.log("成績はCです")
// } else {
//     console.log("成績はFです")
// }


// //（forループ）1から1000までの総和
// let sum = 0
// for (let index = 1; index <= 1000; index = index+1){
//     sum = sum + index
//     console.log(sum)
// }


// //（forループ）1から1000までのうち３で割ると１余る数の総和
// let sum2 = 0
// for (let index2 = 1; index2 <= 1000; index2 = index2 + 1){
//     if(index2 % 3 === 1){
//         sum2 = sum2 + index2
//     console.log(index2)
//     }
// }
// console.log(sum2)

//（whileループ）1から1000までの総和
let sum3 = 0
let index3 = 1
while (index3 <= 1000){
    sum3 = sum3 + index3
    index3 = index3 + 1
}
console.log(sum3)
