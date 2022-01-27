const body = document.querySelector('body');
const mainPage = document.querySelector('#mainPage');
const navBtn = document.querySelector('#navBtn'); 
const testBtn = document.querySelector('#navBtn button:nth-child(3)'); 
const test = document.querySelector('#test');

test.remove();

function moveTestPage() {
    mainPage.remove();
    body.prepend(test);
}

testBtn.addEventListener('click', moveTestPage);



