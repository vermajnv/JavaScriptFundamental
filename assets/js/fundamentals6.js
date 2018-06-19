let personDetails = function() {
    return "My name is "+this.name + " and I am " + this.age + " year old";
}
// construnctor function
function PersonConstructor(name, age, address) {
    // let person = {};
    this.name = name;
    this.address = address;
    this.age = age;
    this.details = personDetails; 
    // return person;
}

let person1 = new PersonConstructor("Nayan", 24, "Delhi");
console.log(person1.details());