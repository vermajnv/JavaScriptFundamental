console.log('hello');

// literal object representation

let person1 = {
    name : "Nayan",
    address : "Delhi",
    age : 55,
    printDetails : function printDetails() {
        // console.log(personObj.name);
        console.log('.........printing person details');
        console.log("person name : ",person1.name);
        console.log("age :",person1.age);
    }
};

let person2 = {
    name : "Vimal",
    address : "Lucknow",
    age : 58,
    printDetails : function printDetails() {
        // console.log(personObj.name);
        console.log('.........printing person details');
        console.log("person name : ",person2.name);
        console.log("age :",person2.age);
    }
};

let person3 = {
    name : "Vishal",
    address : "Kanpur",
    age : 56,
    printDetails : function printDetails() {
        // console.log(personObj.name);
        console.log('.........printing person details');
        console.log("person name : ",person3.name);
        console.log("age :",person3.age);
    }
};

// Empty object

let person4 = {};
person4.name = "Rakesh";
person4.address = "Sudan";
person4.age = 45;
person4.printDetails = function printDetails() {
    // console.log(personObj.name);
    console.log('.........printing person details');
    console.log("person name : ",person4.name);
    console.log("age :",person4.age);
}

let register = [person1, person2, person3, person4];
// console.log(register[0]);
person1.printDetails();

// first add two numbers then square the result

let addAndSquare = function (number1, number2) {
    let sum = number1 + number2;
    let squareOfTheSum = sum*sum;
    return squareOfTheSum;
}

// console.log(addAndSquare(3, 6));

