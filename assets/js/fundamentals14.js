// More about arrays

class Student {
    constructor(name, address, marks) {
        this.name = name;
        this.address = address;
        this.marks = marks;
    }
}

function createStudents(name, address, marks) {
    let students = [];
    students.push(new Student("Nayan", "Delhi", 60));
    students.push(new Student("Kiran", "Lakhimpur", 40));
    students.push(new Student("Lokesh", "Basti", 90));
    students.push(new Student("Rakesh", "Gorakhpur", 30));
    students.push(new Student("Pinki", "Lucknow", 70));
    // without using student class
    students.push({name : "Rishabh", address : "Lalganj", marks : 67});
    return students;
}

let students = createStudents();

// problems 

// 1. Find the students whose name === "Nayan";

function findWhome(student) {
    return student.name === "Nayan";
}
// 2. Find students whose marks are greater than 60
function findStudent(student) {
    return student.marks > 60;
}
let student = students.find(findWhome);
console.log(student);


let filteredStudent = students.filter(findStudent);
console.log(filteredStudent);

let index = students.findIndex(findStudent);
console.log(index);

// 3. Add 2 marks to students whose numbers are greater than 70

let updatedStuMarks = students.filter(function(student) {
    return student.marks > 70;
}).map(function(student) {
    student.marks += 2;
    return student;
});

console.log(updatedStuMarks);