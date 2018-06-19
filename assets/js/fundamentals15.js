console.dir(document);

function doingSomething() {
    console.log('doing something...');
}

let btnObj = document.querySelector(".btn1");
console.dir(btnObj);
console.log("hiii");

btnObj.onclick = doingSomething;