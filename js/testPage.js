const question = document.createElement('h1');
const firstAnswer = document.createElement('button');
firstAnswer.classList.add('first');
const secondAnswer = document.createElement('button');
secondAnswer.classList.add('second');

testPage.appendChild(question);
testPage.appendChild(firstAnswer);
testPage.appendChild(secondAnswer);

const qnaArr = [
    {
        question: `'철인회'라는 단체가 생긴다는데 참여해볼까?`,
        answerOne: `아무리 그래도 글은 혼자 쓰는 게 편하지,
                    무슨 주의니 뭐니 나는 글만 쓰는 사람인데`,
        answerTwo: `고독은 문학을 낳고, 사교는 인격을 도야한다..
                    뜻이 맞는 사람끼리 모여 같이 활동을 하면 좋겠군!`,
    },
    {
        question: `새로운 급사가 왔다. 문학도라는데, 사정이 딱하다.
                   허드렛일이라도 시켜달라고 한다.`,
        answerOne: `글은 쓰니? 나중에 글 쓴거 가져와봐라.
                    내가 한 번 봐줄께.`,
        answerTwo: `마침 급사도 필요하던 참인데,
                    지용이 형 원고 좀 받아올래?`,
    },
    {
        question: `교정을 봐달라는 부탁을 받았는데,
                   어라? 이건 비문 같은데?`,
        answerOne: `이건 비문이다. 라고 사실대로 이야기 한다.`,
        answerTwo: `자존심이 상하지는 않을까? 내가 이야기 해도 되나?`,
    },
    {
        question: `이번에 나온 글이 반응이 영 그래.`,
        answerOne: `괜찮아. 괜찮아! 다음 번에는 아주 혼이 나가서 좋다고 할 글을 써 줘야지 내가.`,
        answerTwo: `그거 글은 볼 줄도 모르는 양반이 평론은 무슨 평론!`,
    },
    {
        question: `내 뮤즈에게서 답장이 오지를 않고 있다.`,
        answerOne: `사정이 있나 보지. 뭐.
                    금방 답장이 올 테니 괘념치 않고 기다린다.`,
        answerTwo: `내 글에 문제가 있었나.
                    내가 잘못해서 마음이 상한 것은 아닌가.
                    지금 즈음이면 답이 와야 하는데.`,
    },
    {
        question: `작품 완성이 목전인데, 몸 상태가 심상치 않다.
                    일생일대의 작품을 완성할 수 있는 마지막 순간이 될지도 모르는데...`,
        answerOne: `내 삶을 바쳐 완성할 수 있다면, 세상에 마지막 글이 남는다면,
                    나에게는 이 작품 뿐이다.`,
        answerTwo: `살아있어야 쓰지.
                    내 몸 망쳐가면서 쓰는 작품이 정말 의미가 있나? 회복에 전념한다.`,
    },
    {
        question: `동인회지를 발간하겠대!`,
        answerOne: `이미 쓰고 있다`,
        answerTwo: `뭘 써야하나... 어라? 친구집에 난이 피었었는데 향이... 이미 피어난 난 향기는...`,
    },
    {
        question: `동료들에게 거짓말을 한 걸 들켰다. 어쩌지?`,
        answerOne: `괜찮아 다 게획했던 거잖아?`,
        answerTwo: `솔직하게 말하고 용서해달라고 할까?`,
    },
    {
        question: `이번에 새로 나온 소설 봤어? 어떤 것 같아?`,
        answerOne: `촉이 왔어. 제목만 봐도 굉장한 작품일 거야`,
        answerTwo: `정말 이 작가... 공간에 대한 묘사와 드라마틱한 스토리! 정말 굉장한데?`,
    },
    {
        question: `누군가 칠인회를 고발하는 투서를 보냈다고 한다.`,
        answerOne: `침착하게 이 상황의 대비책을 고민한다. 일단 숨기고 태워! 지금은 그래야 해!`,
        answerTwo: `어떻게 하지? 문예지들도 다 태워야하나? 그렇게 하면 남는게 하나도 없겠어!`,
    },
    {
        question: `원고 마감이 언제 였더라...?`,
        answerOne: `괜찮아. 난 천재니까. 금방 쓰지 무얼. 술이나 마시러 가세...`,
        answerTwo: `일주일 남았으니 꼬박꼬박 써둬야 제때 보내겠군.`,
    },
    {
        question: `새로운 급사가 왔다. 문학도라는데, 사정이 딱하다.
                   허드렛일이라도 시켜달라고 한다.`,
        answerOne: `글은 쓰니? 나중에 글 쓴거 가져와봐라.
                    내가 한 번 봐줄께.`,
        answerTwo: `마침 급사도 필요하던 참인데,
                    지용이 형 원고 좀 받아올래?`,
    }
];

let i = 0;

question.innerText = qnaArr[i].question;
firstAnswer.innerText = qnaArr[i].answerOne;
secondAnswer.innerText =  qnaArr[i].answerTwo;

const firstBtn = document.querySelector('.first');
const secondBtn = document.querySelector('.second');

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
    } else if(i == 6) {
        i = i+1;
    } else if(i == 8) {
        i = i-5;
    }

    question.innerText = qnaArr[i].question;
    firstAnswer.innerText = qnaArr[i].answerOne;
    secondAnswer.innerText =  qnaArr[i].answerTwo;

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
    }
    else if(i == 4) {
        i = i+1;
    } else if(i ==6) {
        i =i+3;
    } else if(i == 8) {
        i = i-2;
    }

    question.innerText = qnaArr[i].question;
    firstAnswer.innerText = qnaArr[i].answerOne;
    secondAnswer.innerText =  qnaArr[i].answerTwo;

    return i;
}

// function loadLayout() {
//     const question = document.createElement('h1');
//     const firstAnswer = document.createElement('button');
//     firstAnswer.classList.add('first');
//     const secondAnswer = document.createElement('button');
//     secondAnswer.classList.add('second');

//     testPage.appendChild(question);
//     testPage.appendChild(firstAnswer);
//     testPage.appendChild(secondAnswer);
// }

// window.addEventListener('load', loadLayout);

firstBtn.addEventListener('click', first);
secondBtn.addEventListener('click', second);
