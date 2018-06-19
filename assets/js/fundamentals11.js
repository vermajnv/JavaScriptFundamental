// fuctions = mechanism = how to do a task

// process to grow sugercane

function growSugerCane() {
    console.log("1. Plug the whole field");
    console.log("2. Drow whole in field with razor");
    console.log("3. Cut the cane in small pieces");
    console.log("4. place the pieaces of the suger cane in the dugged pits");
    console.log("5. Now plane the whole ground");
}

let person = {
    name : "Ayush",
    address : "Allahabad",
    doTask : function(task) {
        console.log("Analyse the task");
        console.log("Gethering the information regarding the task");
        task();
        console.log("task completed");
    }
};

person.doTask(growSugerCane);
 
let person2 = {
    name : "Golu",
    address : "Lakhimpur",
    doTask : function(task) {
        console.log("Analyse.......");
        console.log("Resource identification");
        console.log("Planning....");
        task();
        console.log("Progress Monitoring");
        console.log("task completed");
    }
}


person2.doTask(growSugerCane);