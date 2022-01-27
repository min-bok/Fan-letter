function paintCharacter() {
    const characterWrap = document.createElement('div');
    const face = document.createElement('img');
    const name = document.createElement('h1');
    const age = document.createElement('p');

    characterInfo.appendChild(characterWrap);
    characterWrap.appendChild(face);
    characterWrap.appendChild(name);
    characterWrap.appendChild(age);

    name.innerText = resultArr[0].name;
    age.innerText = '29세 천재 소설가';
}

window.addEventListener('load', paintCharacter);