function paintCharacter() {
    for (let i =0; i < resultArr.length; i++) {
        const characterWrap = document.createElement('div');
        characterWrap.classList.add('container');
        const frontCard = document.createElement('div');
        frontCard.classList.add('front');
        frontCard.classList.add('card');
        const backCard = document.createElement('div');
        backCard.classList.add('back');
        backCard.classList.add('card');
        const face = document.createElement('img');
        const name = document.createElement('h1');
        const age = document.createElement('p');
        const who = document.createElement('p');
    
        characterInfo.appendChild(characterWrap);
        characterWrap.appendChild(frontCard);
        characterWrap.appendChild(backCard);
        frontCard.appendChild(face);
        frontCard.appendChild(name);
        frontCard.appendChild(age);
        backCard.appendChild(who);

        face.src = `../img/${i}.png`
        name.innerText = resultArr[i].name;
        age.innerText = resultArr[i].age;
        who.innerText = resultArr[i].who;
    }
}

window.addEventListener('load', paintCharacter);