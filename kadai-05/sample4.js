// //オブジェクトと参照

// const A = {x:1, y:2}
// const B = A
// B.x = 10
// console.log("A.x:", A.x)
// console.log("B.x:", B.x)

// console.log("A:", A)
// console.log("B:", B)


// const arr1 = ["たま", "ぽち", "みけ"]
// console.log(arr1)
// const arr2= arr1
// arr2[1] = "Pochi"
// console.log(arr1)


// //関数と参照
// const func1= ()=> {console.log("Hello")}
// func1() 
// const func2 = func1
// func2()
// func2.test = "テスト"
// console.log(func2.test)
// console.log(func1.test)


//オブジェクトを破壊せずにプロパティを使い回す
const student1 = {
    name: "Yamada",
    score: 80
}

const student2 = { ...student1 }
student2.name = "Suzuki"
student2.score = 70

const student3 = Object.assign({}, student2)
student2.name = "Tanaka"
student2.score = 65

console.log(student1, student2, student3)

const student_default = {
    school:"Nippon",
    grade:2,
}

const student_a = {
    ...student_default,
    name: "中田", 
}
console.log(student_a)


