// CharacterBtn.classList.add('hidden');
// synopsisBtn.classList.add('hidden');
// testBtn.classList.add('hidden');

// function displayBtn() {
//     CharacterBtn.classList.remove('hidden');
//     synopsisBtn.classList.remove('hidden');
//     testBtn.classList.remove('hidden');
// };

// function mouseoverBtn() {
//     CharacterBtn.classList.add('hidden');
//     synopsisBtn.classList.add('hidden');
//     testBtn.classList.add('hidden');
// };

// navBtn.addEventListener('mouseover', mouseoverBtn);
// navBtn.addEventListener('mouseout', mouseoverBtn);

const navBtn = document.querySelector('#nav-btn');
const characterBtn = document.querySelector('.character-btn');
const synopsisBtn = document.querySelector('.synopsis-btn');
const testBtn = document.querySelector('.test-btn');

characterBtn.classList.add('hidden');
synopsisBtn.classList.add('hidden');
testBtn.classList.add('hidden');

function displayBtn() {
    characterBtn.classList.remove('hidden');
    synopsisBtn.classList.remove('hidden');
    testBtn.classList.remove('hidden');
};

function mouseoutBtn() {
    characterBtn.classList.add('hidden');
    synopsisBtn.classList.add('hidden');
    testBtn.classList.add('hidden');
};

navBtn.addEventListener('mouseover', displayBtn);
navBtn.addEventListener('mouseout', mouseoutBtn);