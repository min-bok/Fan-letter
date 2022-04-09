const navBtn = document.querySelector('#nav-btn');
const characterBtn = document.querySelector('.character-btn');
const synopsisBtn = document.querySelector('.synopsis-btn');
const testBtn = document.querySelector('.test-btn');
const btn = navBtn.querySelector('button');

characterBtn.classList.add('hidden');
synopsisBtn.classList.add('hidden');
testBtn.classList.add('hidden');

function mouseoverBtn() {
    characterBtn.classList.remove('hidden');
    synopsisBtn.classList.remove('hidden');
    testBtn.classList.remove('hidden');
};

function mouseoutBtn() {
    characterBtn.classList.add('hidden');
    synopsisBtn.classList.add('hidden');
    testBtn.classList.add('hidden');
};

navBtn.addEventListener('mouseover', mouseoverBtn);
navBtn.addEventListener('mouseout', mouseoutBtn);