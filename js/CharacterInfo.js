function paintCharacter() {
    for (let i =0; i < resultArr.length; i++) {
        const characterWrap = document.createElement('div');
        const face = document.createElement('img');
        const name = document.createElement('h1');
        const age = document.createElement('p');
        const who = document.createElement('p');
    
        characterInfo.appendChild(characterWrap);
        characterWrap.appendChild(face);
        characterWrap.appendChild(name);
        characterWrap.appendChild(age);
        characterWrap.appendChild(who);

        face.src = `../img/${i}.png`
        name.innerText = resultArr[i].name;
        age.innerText = resultArr[i].age;
        who.innerText = resultArr[i].who;
    }
}

window.addEventListener('load', paintCharacter);