// personDetails is drawback as it can be invoked from anywhere
// so we use prototype
// construnctor function
function PersonConstructor(name, age, address) {
    // let person = {};
    this.name = name;
    this.address = address;
    this.age = age; 
    // return person;
}

PersonConstructor.prototype.details = function() {
    return "My name is "+this.name + " and I am " + this.age + " year old";
}

PersonConstructor.prototype.doSomthing = function() {
    return "Doing Something";
}
let person1 = new PersonConstructor("Nayan", 24, "Delhi");
console.log(person1.details());
console.log(person1.doSomthing());

let person2 = new PersonConstructor("Anjali", 20, "Lakhimpur Kheri");
console.log(person2.details());
console.log(person2.doSomthing());

console.log(person1.details === person2.details);