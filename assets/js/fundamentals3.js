let person = {};

// creating properties and assigning values to them
let personDetails = function() {
            console.log("printing person details");
            console.log(this.name);
            console.log(this.age);
            console.log(this.address);
}
function PersonConstructor(name, age, address) {
    return {
        name,
        age,
        address,
        printDetails : personDetails
    };
}

//creating person instance

let person1 = PersonConstructor("Nayan", 34, "Lakhimpur");
person1.printDetails();