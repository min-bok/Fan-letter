CharacterBtn.classList.add('hidden');
synopsisBtn.classList.add('hidden');
testBtn.classList.add('hidden');

function displayBtn() {
    CharacterBtn.classList.remove('hidden');
    synopsisBtn.classList.remove('hidden');
    testBtn.classList.remove('hidden');
};

mainBtn.addEventListener('toggle', displayBtn);
