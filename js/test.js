const question = document.createElement('h1');
const firstAnswer = document.createElement('button');
firstAnswer.classList.add('first');
const secondAnswer = document.createElement('button');

let i = 0;

function paintingTest() {
    test.appendChild(question);
    test.appendChild(firstAnswer);
    test.appendChild(secondAnswer);

question.innerText = testArr[0].question;
firstAnswer.innerText = testArr[0].answerOne;
secondAnswer.innerText =  testArr[0].answerTwo;
}

function resultOne() {
    test.remove();
    
    const CharacterImg = document.createElement('img');
    const CharacterName = document.createElement('p');
    CharacterName.classList.add('name');
    const CharacterInfo = document.createElement('p');
    CharacterInfo.classList.add('info');
    const CharacterDetail = document.createElement('p');
    CharacterDetail.classList.add('detail');

    result.appendChild(CharacterImg);
    result.appendChild(CharacterName);
    result.appendChild(CharacterInfo);
    result.appendChild(CharacterDetail);

    if(i == 5) {
        i = i-5;
    } else if(i == 7) {
        i = i-3;
    } else if(i == 9) {
        i = i-7
    } else if(i = 10) {
        i = i-9;
    }

    CharacterImg.src = `./img/P${i}.png`;
    CharacterName.innerText = resultArr[i].name;
    CharacterInfo.innerText = resultArr[i].intro;
    CharacterDetail.innerText = resultArr[i].detail;
}

function resultTwo() {
    test.remove();
    
    const result = document.querySelector('#result');
    const CharacterImg = document.createElement('img');
    const CharacterName = document.createElement('p');
    CharacterName.classList.add('name');
    const CharacterInfo = document.createElement('p');
    CharacterInfo.classList.add('info');
    const CharacterDetail = document.createElement('p');
    CharacterDetail.classList.add('detail');

    result.appendChild(CharacterImg);
    result.appendChild(CharacterName);
    result.appendChild(CharacterInfo);
    result.appendChild(CharacterDetail);

    if(i ==7) {
        i = i-2;
    } else if(i == 9) {
        i = i-6;
    } else if(i == 10) {
        i = i-4;
    }

    CharacterImg.src = `./img/P${i}.png`;
    CharacterName.innerText = resultArr[i].name;
    CharacterInfo.innerText = resultArr[i].intro;
    CharacterDetail.innerText = resultArr[i].detail;
}


function first() {
    if(i == 0) {
        i = i+1;
    } else if(i == 1) {
        i = i+3;
    } else if(i == 2) {
        i = i+1;
    } else if(i == 3){
        i =i+8;
    } else if(i == 4) {
        i = i+2;
    } else if(i == 5) {
        body.prepend(result);
        resultOne();
    } else if(i == 6) {
        i = i+1;
    } else if(i == 7) {
        body.prepend(result);
        resultOne();
    } else if(i == 8) {
        i = i-5;
    } else if(i == 9) {
        body.prepend(result);
        resultOne();
    } else if(i == 10) {
        body.prepend(result);
        resultOne();
    }

    question.innerText = testArr[i].question;
    firstAnswer.innerText = testArr[i].answerOne;
    secondAnswer.innerText =  testArr[i].answerTwo;

    return i;
}

function second() {
    if(i == 0) {
        i = i+2;
    } else if(i == 1){
        i = i+7;
    } else if (i == 2) {
        i = i+6;
    } else if(i == 3){
        i = i+7;
    } else if(i == 4) {
        i = i+1;
    } else if(i == 5) {
        i = i+5;
    } else if(i ==6) {
        i =i+3;
    } else if(i == 7) {
        body.prepend(result);
        resultTwo();
    } else if(i == 8) {
        i = i-2;
    }else if(i == 9) {
        body.prepend(result);
        resultTwo();
    } else if(i == 10) {
        body.prepend(result);
        resultTwo();
    } 

    question.innerText = testArr[i].question;
    firstAnswer.innerText = testArr[i].answerOne;
    secondAnswer.innerText =  testArr[i].answerTwo;

    return i; 
}

firstAnswer.addEventListener('click', first);
secondAnswer.addEventListener('click', second);
