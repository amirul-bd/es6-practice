class Parent{
    constructor(){
        this.fatherName = 'unknown'
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        let fName = this.fatherName;
        return fName + " " + this.name;
    }
}

const baby = new Child('tasnim');
const baby2 = new Child('jara');
console.log(baby.getFullName());