// Introdction to clasess

// js class = prototyple Fun + public Properties + constructor Function
class Person {
    constructor(name, age, address) {
        this.name = name;
        this.address = address;
        this.age = age;
    }

    details() {
        return "My name is " + this.name + " and my age is " + this.age;
    }

    doSomething() {
        console.log("Doing somthing");
    }
}

let person1 = new Person("Golu", 34, "Lucknow");
console.log(person1.details());
person1.doSomething();

let person2 = new Person("Nayan", 90, "Gola");
console.log(person2.details());
person2.doSomething();


class Student extends Person {
    constructor(name, age, address, id, college) {
        super(name, age, address);
        this.id = id;
        this.college = college;
    }

    details() {
        return super.details() + " id : " + this.id + " college : " + this.college;
    }
}

let student1 = new Student("Rakesh", 31, "Behjam", 1, "UCER");
console.log(student1.details());