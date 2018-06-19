let printDetailsWithArg = function(personObj) {
    console.log('function with arguments');
    console.log(personObj.name);
    console.log(personObj.age);
    console.log(personObj.address);
}

let printDetailsWithoutArg = function() {
    console.log('function without arguments');
    console.log(this.name);
    console.log(this.age);
    console.log(this.address);
}