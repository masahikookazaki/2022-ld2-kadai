//継承 extends

class Animal {
    constructor(name){
        this.name = name
    }
    category = "animal"
}

class Cat extends Animal {
    call(){
        console.log("meow")
    }
}

class Dog extends Animal {
    call(){
        console.log("baw")
    }
}

const Tama = new Cat("タマ")
const Pochi = new Cat("ポチ")
console.log(Tama)
console.log(Pochi.name)

