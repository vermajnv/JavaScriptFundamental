"use strict"
function createContent() {
    let pObj = document.createElement('p');
    pObj.textContent = 'This is the paragraph...';
    let containerObj = document.querySelector('.Container');
    containerObj.appendChild(pObj);
}

document.querySelector('.btn').addEventListener('click', createContent);