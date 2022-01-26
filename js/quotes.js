const quotes = [
    {
        quote: '그대의 한 줄로 내가 나날을 버티었소',
        author: '김해진'
    },
    {
        quote: '이 순진한 친구 조심하라구',
        author: '이윤'
    },
    {
        quote: '이게 심상치 않아 \n 걸작이 될 것 같아',
        author: '이태준'
    },
    {
        quote: '가난해도 사랑은 알고 \n 빼앗긴 들에도 봄은 올테니',
        author: '김수남'
    },
    {
        quote: '쏟아지는 별빛을 봐 \n 마음껏 달려봐 두려워 마',
        author: '히카루'
    },
    {
        quote: '말 한마디가 너무 눈부셔서 \n 난 바보처럼 눈물이 나',
        author: '정세훈'
    },
    {
        quote: '내 모든 걸 잃어도 좋으니 \n 오늘밤 나의 창가에 찾아와주오',
        author: '김환태'
    },
    {
        quote: '편지의 주인을 \n 나는 사랑하지 않을 수 없다',
        author: '김해진'
    },
    {
        quote: '믿어지지 않아 내가 그 사람의 곁에',
        author: '정세훈'
    }
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;