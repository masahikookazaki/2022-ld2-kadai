class Person {
    get name(){
        console.log("getterを実行中")
        return this._name
    }
    set name (value){
        console.log("setterを実行中")
        this._name = value
    }
}

const person = new Person()
person.new = "鈴木"
console.log(person.name)
