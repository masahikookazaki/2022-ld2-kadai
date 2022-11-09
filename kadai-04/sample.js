// const timerId = setTimeout(() => {
//         console.log("Hello")
//     }, 3000)

// clearTimeout(timerId)

// setTimeout(() => {
//        console.log("bye") 
//     }, 2000);

let count = 0
const timerId = setInterval(() => {
    count = count + 1
    console.log("hello")
    if(count > 20){
        clearInterval(timerId)
    }
}, 100)

// const fs = require("fs")
// const file = fs.readFileSync("./kadai-03/sample.js")
// console.log(file)

// fs.readFile("./kadai-03/sample.js", (err, data) => {
//     console.log("読み込み完了")
// })
// console.log("readFileが呼ばれた")

