let printDetails = function () {
    console.log('...printing Detaails...');
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

console.dir(PersonConstructor);

let person1 = PersonConstructor("Nayan", 33, "Lucknow");
console.dir(person1);