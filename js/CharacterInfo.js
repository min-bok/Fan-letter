// name, intro, detail 출처 : 뮤지컬 펜레터 공식 굿즈 신문
// age, who 출처 : 나무위키 https://namu.wiki/w/%ED%8C%AC%EB%A0%88%ED%84%B0(%EB%AE%A4%EC%A7%80%EC%BB%AC)?from=%EB%AE%A4%EC%A7%80%EC%BB%AC%20%ED%8C%AC%EB%A0%88%ED%84%B0#s-3

const imgNum = '1';

const resultArr = [
    {
        img: `${imgNum}.jpg`,
        name: `김해진`,
        age: `29세 男. 천재 소설가.`,
        intro: `"그대의 한 줄로 내가 나날을 버티었소."`,
        detail: `어떻게 보면 과묵해 보이지만 좋아하는 것에 있어서 그 누구보다 열정적이다.
                 다만 어떤 일에 과하게 몰입하는 경향이 있다.
                 건강을 해칠 수 있으니 이 부분은 주의하자!`,
        who: `순수하고 열정적인 성격으로 
              다소 내향적이고 고지식한 면이 있다. 

              폐결핵을 앓고 있으며 
              불우한 가정환경 속에 자라 사랑을 하면 
              금방 깊게 빠져들고 의지하곤 한다. 
              당대 최고의 천재적인 소설가로 
              평가받고 있다. 

              히카루라는 사람을 사랑한 것인지,
              혹은 히카루의 글을 사랑한 것인지는 
              배우와 관객의 해석에 따라 달라지는 부분. 

              모티브는 김유정.`
    },
    {
        img: `${imgNum}.jpg`,
        name: `이윤`,
        age: `27세 男. 시인이자 소설가. 
              순수문학을 추구하는 모더니스트`,
        intro: `"이 순진한 친구, 조심하라구."`,
        detail: `개방적이고 자유로운 성격의 소유자지만 진취적이다.
                 같이 있으면 사람을 기분 좋게 하는 분위기 메이커.
                 하지만 마냥 가볍기만 한 사람은 아니니 오해는 금물!`,
        who: `모더니즘의 기수. 
              염세적이고 현실주의적이지만 
              문인으로서 사명감도 강하고 
              정도 많은 성격.
              
              김해진의 절친한 친구로 같은 소설가에
              폐결핵을 앓고 있어 공감대가 깊다. 

              술을 좋아하며 장난기 있고 
              익살스러운 성격으로 
              '칠인회'의 분위기 메이커다. 

              모티브는 이상.`
    },
    {
        img: `${imgNum}.jpg`,
        name: `이태준`,
        age: `29세 男. 문인. 
              명일일보 학예부장`,
        intro: `"이게 심상치 않아. 걸작이 될 것 같아."`,
        detail: `책임감 있고, 사람 보는 안목도 훌륭한 타고난 리더.
                 현실적인 성격에 추진력까지 있다. 자기 주장이 확실한 편이지만
                 납득할 수 있는 타당한 반박이라면 기꺼이 수용하는 너그러운 면도 있다.
                 시간 활용을 잘 하는 편이라 일도 곧잘 한다.`,
        who: `문학단체 '칠인회'의 학예부장으로 
              가장 연장자이며 동생인 멤버들을 
              잘 챙기고 세훈을 가장 아낀다. 

              이윤의 실력을 인정해주고 
              글을 실어주고 있다. 

              모티브는 소설가 이태준.`
    },
    {
        img: `${imgNum}.jpg`,
        name: `김수남`,
        age: `26세 男. 시인. 
              이윤의 절친한 벗`,
        intro: `"가난해도 사랑은 알고, 빼앗긴 들에도 봄은 올테니"`,
        detail: `솔직하고 다정한 성격에 감상적이고 낭만주의적인 면이 있다.
                 사람과 어울리는 것도 좋고 대화하는 것도 좋아한다.
                 칭찬을 곧잘 하는데 막상 들으면 부끄러워하는 타입.
                 융통성이 좋아 좋은 게 좋은거지~하는 타입이지만, 단호한 면도 있다.`,
        who : `'칠인회'의 멤버. 

                모티브는 시인 김기림.`
    },
    {
        img: `${imgNum}.jpg`,
        name: `히카루`,
        age: `19세 女. 작가`,
        intro: `"쏟아지는 별빛을 봐. 마음껏 달려봐. 두려워마."`,
        detail: `하고자 하는 일에 욕심과 재능을 모두 갖추고 있다.
                 단호하고 자신만만한 성격에, 간섭 또한 싫어한다.
                 자신의 의지로 행동하고, 앞으로 일어날 일에 대해 미리 생각하고 계획하는 편.
                 자신의 기준이 명확한 편이라 그 기준에서 벗어나는 행동을 썩 좋아하지 않는다.
                 쉽게 해내는 것보다는 성취감을 즐기는 편.`,
        who: `김해진과 생전 서신을 
              주고받았다는 신원미상의 인물. 

              문학에 대한 욕심이 많고 실력도 
              당대의 천재작가 김해진이 인정하고 
              심취할 정도로 출중하다. 

              자신감 있고 소유욕이 강한 성격이며, 
              폐결핵을 앓고 있다고 한다.
              해진과는 연인 관계로 인간으로서의 
              해진보다는 작가로서의 해진, 
              그리고 그의 문학작품들을 좋아한다.

              김해진에게는 뮤즈나 다름 없는 인물.`
    },
    {
        img: `${imgNum}.jpg`,
        name: `정세훈`,
        age: `18세 男. 작가 지망생`,
        intro: `"말 한마디가 너무 눈부셔서 난 바보처럼 눈물이 나."`,
        detail: `성실하고, 이해심 깊은 성격에 낮가림도 있다.
                 다만 밖으로 이야기를 하는 타입은 아니라, 티가 잘 나지는 않는다.
                 신중한 편이라 하나를 시작하는 데에 오랜 시간이 걸리기도 하지만 몰입도가 상당하다.
                 자기가 하는 일에 완벽을 추구하는 경향이 있지만 자존감은 낮아 스스로를 숨기기도 한다.
                 마음 맞는 사람과 깊은 관계를 유지하는 편이다.`,
        who: `친일파 사업가의 아들로 
              어린 시절 어머니를 여의고 
              강압적인 아버지 밑에서 자랐다.
              
              자존감이 낮고 감수성이 풍부한 성격. 
              문학에 깊게 심취하고 있으며 
              문학가의 꿈을 가지고 있다. 

              글을 제대로 배운 적이 없음에도 
              상도 받고 문학지에도 실리는 걸 보면 
              재능도 있다.

              많은 작가들을 좋아하지만 
              특히 소설가 김해진의 열성팬이다.`
    },
    {
        img: `${imgNum}.jpg`,
        name: `김환태`,
        age: `29세 男, 평론가.
              큐슈대를 졸업한 엘리트`,
        intro: `"내 모든 걸 잃어도 좋으니 오늘밤 나의 창가에 찾아와주오"`,
        detail: `낮가림이 있어, 처음에는 어색할 수 있지만 친해지면 깊은 관계를 유지한다.
                 논리적이고 분석적이지만 호기심도 많고, 다정한 성격에 소탈한 타입.
                 하나에 꽂히면 깊게 파고드는 경향이 있다.
                 보기에는 딱딱하게 느껴질 수 있지만 다정한 사람이니 먼저 다가와주면 금방 친해질 수 있을 것이다.`,
        who: `해진과 함께 들어온 
             '칠인회'의 새 멤버로 
             소심한 성격이다. 
             
             모티브는 비평가 김환태.`
    }
]

function paintCharacter() {
    for (let i = 0; i < resultArr.length; i++) {
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