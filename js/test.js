const question = document.createElement('h1');
const firstAnswer = document.createElement('button');
firstAnswer.classList.add('first');
const secondAnswer = document.createElement('button');

test.appendChild(question);
test.appendChild(firstAnswer);
test.appendChild(secondAnswer);

let i = 0;

question.innerText = testArr[i].question;
firstAnswer.innerText = testArr[i].answerOne;
secondAnswer.innerText =  testArr[i].answerTwo;

function result() {
    test.remove();
    
    const result = document.querySelector('#result');
    const CharacterImg = document.createElement('img');
    const CharacterName = document.createElement('p');
    CharacterName.classList.add('name');
    CharacterName.innerText = '김해진';
    const CharacterInfo = document.createElement('p');
    CharacterInfo.classList.add('info');
    CharacterInfo.innerText = '특징: 잘생김';
    const CharacterDetail = document.createElement('p');
    CharacterDetail.classList.add('detail');
    CharacterDetail.innerText = '이규형이 특히 귀엽다';

    result.appendChild(CharacterImg);
    result.appendChild(CharacterName);
    result.appendChild(CharacterInfo);
    result.appendChild(CharacterDetail);
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
        result();
    } else if(i == 6) {
        i = i+1;
    } else if(i == 8) {
        i = i-5;
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
    } else if(i == 8) {
        i = i-2;
    }

    question.innerText = testArr[i].question;
    firstAnswer.innerText = testArr[i].answerOne;
    secondAnswer.innerText =  testArr[i].answerTwo;

    return i; 
}

firstAnswer.addEventListener('click', first);
secondAnswer.addEventListener('click', second);
