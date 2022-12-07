// //エラー処理：catchとthrow

// const plusone = (input)=> {
//     if(typeof input !== "number"){
//         throw new Error(input + "は数字ではありません。数字を入力してください。")
//     }
//     return input + 1
// }

// console.log(plusone(100))



const num = parseInt(process.argv[2])
if(Number.isNaN(num)){
    throw new Error("数字を入力してください。")
} else {
    console.log(num+1)
}
