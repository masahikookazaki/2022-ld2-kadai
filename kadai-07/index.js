//Animalクラスの作成
class Animal{
    constructor(){
        this.energy = 100
    }
    eat(){
        this.energy = this.energy + 10    
    }
}

//Catクラスの作成
class Cat extends Animal {
    speak(){
        console.log("meow")
    }
}

//Catクラスのインスタンス化
const cat = new Cat()
cat.speak()
cat.eat()

//energyの表示
console.log(cat.energy)
