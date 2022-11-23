// //配列とループ
// const animals = ["猫", "犬", "兎"]

// for (let index = 0; index < animals.length ; index++) {
//     const animal = animals[index];
//     console.log(index, animal);
// }


// //for of ループ
// for (const animal of animals){
//     console.log(animal)
// }


// //forEachループ（おまけ：endwith）
const animals2 = ["dog", "cat", "rabbit", "bird"]
// animals2.forEach((animals2) => {
//     const endswithT = animals2.endsWith("t")
//     console.log(animals2, "tで終わる？", endswithT)
// })

// //mapメソッド（非破壊的）
// const result = animals2.map((animals2) => {
//     const isendwithT = animals2.endsWith("t")
//     return {
//         name: animals2,
//         "ｔで終わる？": isendwithT,
//     }
// })
// console.log(animals2)
// console.log(result)


const dish = {
    name:"ラーメン",
    price:1000,
    rate:"★★★",
}

const keys = Object.keys(dish)
const values = Object.values(dish)

console.log(keys)
console.log(values)
