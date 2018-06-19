// Arrary are objects too
// Arrays have many function which operates on the array items
let numbers = [];
console.log(numbers);
numbers.push(10);
console.log(numbers);
numbers.push(20);
numbers.push(30);
numbers.push(50);
console.log(numbers);

numbers.unshift(40);
console.log(numbers);

function iterate(item) {
    console.log(item);
}
numbers.forEach(iterate);

let clonedNumbers = numbers.concat([10,90]);
console.log(clonedNumbers);