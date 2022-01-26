const question = document.createElement('h1');
const firstAnswer = document.createElement('button');
const secondAnswer = document.createElement('button');

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
]

const ques = qnaArr[1].question;
const anOne = qnaArr[0].answerOne;
const anTwo = qnaArr[0].answerTwo;

question.innerText = `${ques}`;
firstAnswer.innerText = `${anOne}`;
secondAnswer.innerText = `${anTwo}`;

// console.log(qnaArr[0])