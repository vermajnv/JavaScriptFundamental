// let student1 = {
//     name : "Ayush",
//     marks : 59
// };

// let student2 = {
//     name : "Surabhi",
//     marks : 70
// }

// function isEligible(student) {
//     let flag = false;
//     if(student.marks > 60) {
//         flag = true;
//     }
//     return flag;
// }

// function interview(student, eligibilityTestingMechanism) {
//     let isEligible = eligibilityTestingMechanism(student);
//     if(isEligible) {
//         console.log("Student is eligible for interview");
//     }

//     else {
//         console.log("Student is not eligible for the interview");
//     }

//     return isEligible;
// }

// interview(student2, isEligible);

// Simple calculator

function calculator(number1, number2, operation) {
    return operation(number1, number2);
}

function sum(number1, number2) {
    return number1 + number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function substraction(number1, number2) {
    return number1 - number2;
}

let result = calculator(4, 5, sum);
console.log(result);

let result1 = calculator(40, 10, function(number1, number2) {
    return number1 / number2;
});

console.log(result1);