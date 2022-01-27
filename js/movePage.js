const body = document.querySelector('body');
const mainPage = document.querySelector('#mainPage');
const navBtn = document.querySelector('#navBtn'); 
const testBtn = document.querySelector('#navBtn button:nth-child(3)'); 
const test = document.querySelector('#test');
const synopsis = document.querySelector('#synopsis');
const CharacterBtn = document.querySelector('#navBtn button:nth-child(1)'); 
const synopsisBtn = document.querySelector('#navBtn button:nth-child(2)'); 

test.remove();
synopsis.remove();

function moveTestPage() {
    mainPage.remove();
    body.prepend(test);
}

function moveSynopsisPage() {
    mainPage.remove();
    body.prepend(synopsis);
}

synopsisBtn.addEventListener('click', moveSynopsisPage)
testBtn.addEventListener('click', moveTestPage);



