//継承とオーバーライド
class Person {
    constructor(name){
        this.name = name
    }
    hello(){
        console.log("こんにちは、私は" + this.name + "です。")
    }
}

class Student extends Person {
    constructor(name, major){
        super(name)
        this.major = major
    }
    hello(){
        super.hello()
        console.log("学生で、" + this.major + "を専攻しています。")
    }
    static hello(){
        console.log("こんにちは。")
    }
}

const tanaka = new Student("田中", "英文学")
tanaka.hello()

Student.hello()
