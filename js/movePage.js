const body = document.querySelector('body');
const mainPage = document.querySelector('#mainPage');
const navBtn = document.querySelector('#navBtn');
const mainBtn = document.querySelector('.mainBtn'); 
const testBtn = document.querySelector('#navBtn button:nth-child(3)'); 
const test = document.querySelector('#test');
const result = document.querySelector('#result');
const synopsis = document.querySelector('#synopsis');
const characterInfo = document.querySelector('#characterInfo');
const CharacterBtn = document.querySelector('#navBtn button:nth-child(1)'); 
const synopsisBtn = document.querySelector('#navBtn button:nth-child(2)'); 

test.remove();
synopsis.remove();
characterInfo.remove();
result.remove();

function moveMainPage() {
    test.remove();
    synopsis.remove();
    characterInfo.remove();
    result.remove();
    body.prepend(mainPage);
}

function moveTestPage() {
    mainPage.remove();
    synopsis.remove();
    characterInfo.remove();
    result.remove();
    paintingTest();
    body.prepend(test);
}

function moveSynopsisPage() {
    mainPage.remove();
    test.remove();
    characterInfo.remove();
    result.remove();
    body.prepend(synopsis);
}

function moveCharacterPage() {
    mainPage.remove();
    test.remove();
    synopsis.remove();
    result.remove();
    body.prepend(characterInfo);
}

function rem() {
    result.remove();
}

synopsisBtn.addEventListener('click', moveSynopsisPage)
testBtn.addEventListener('click', moveTestPage);
CharacterBtn.addEventListener('click', moveCharacterPage);
mainBtn.addEventListener('click', moveMainPage);
mainBtn.addEventListener('click', rem);