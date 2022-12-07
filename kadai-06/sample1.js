//JSONについて

// const jsonstring = '{"key1": "value1"}'
// console.log(jsonstring.slice(3,5))
// const obj = {"key1":"value1"}
// console.log(obj.key1)


// const cat = {
//     "species": "cat",
//     "name": "Tama",
//     "age":2,
//     "sex":"male"
// }

// console.log(
//     JSON.stringify(cat, null, 2)
// )

const jsonstring = '{ "species": "cat", "name": "Tama" }'
const cat = JSON.parse(jsonstring)
console.log(typeof jsonstring, jsonstring)
console.log(typeof cat, cat)
