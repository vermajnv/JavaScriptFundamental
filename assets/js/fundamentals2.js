/// object creation formula

// function PersonConstructor(name, age, address) {
//     let person = {};
//     person.name = name;
//     person.age = age;
//     person.address = address;
//     person.printDetails = function () {
//         console.log('printing details of person');
//         console.log(person.name);
//         console.log(person.age);
//         console.log(person.address);
//     }
//     return person;
// }
let printDetails = function () {
    console.log('printing details of this');
    console.log(this.name);
    console.log(this.age);
    console.log(this.address);
}
function PersonConstructor(name, age, address) {
    return {
        name,
        age,
        address,
        printDetails : printDetails 
    }
    
}
let person1 = PersonConstructor("Nayan", 32, "Lakhimpur");
let printDetails1 = person1.printDetails;

let person2 = PersonConstructor("Nayan", 32, "Lakhimpur");
let printDetails2 = person2.printDetails;

if(printDetails1 === printDetails2) {
    console.log('both are same objects');
}