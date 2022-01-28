function paintCharacter() {
    const characterWrap = document.createElement('div');
    const face = document.createElement('img');
    const name = document.createElement('h1');
    const age = document.createElement('p');

    characterInfo.appendChild(characterWrap);
    characterWrap.appendChild(face);
    characterWrap.appendChild(name);
    characterWrap.appendChild(age);

    let i = 0;

    name.innerText = resultArr[i].name;
    age.innerText = resultArr[i].age;
}

window.addEventListener('load', paintCharacter);

for (let i =1; i < resultArr.length; i++) {
    paintCharacter();
}