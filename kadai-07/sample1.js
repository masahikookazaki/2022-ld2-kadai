// //クラスとコンストラクタ

// class Person {
//     constructor(name, age){
//         // console.log("コンストラクタが実行されました")
//         this.name = name
//         this.age = age
//     }
//     hello(){
//         console.log("こんにちは、私は" + this.name + "です")
//     }
// }

// const Tama = new Person("タマ", 3)
// const Pochi = new Person("ポチ", 6)
// console.log(Tama.name, Tama.age)
// console.log(Pochi.name, Pochi.age)

// Tama.hello()


//クラスの例：ゲームのステータスづくり
class Character {
    constructor(name, energy, magic){
        this.name = name
        this.energy = energy
        this.magic = magic
    }
    train(){
        this.energy = this.energy + 10
    }
}

const main = new Character("主人公", 100, 50)
const nakama1 = new Character("仲間1", 80, 60)
const nakama2 = new Character("仲間2", 120, 40)

main.train()
console.log(main.energy)