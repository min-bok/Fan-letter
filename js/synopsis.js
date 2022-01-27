const synopsisTitle = document.createElement('h1');
synopsisTitle.classList.add('synopsisTitle');
const synopsisOne = document.createElement('p');
const synopsisTwo = document.createElement('p');
const synopsisThree = document.createElement('p');
const synopsisFour = document.createElement('p');

synopsis.appendChild(synopsisTitle);
synopsis.appendChild(synopsisOne);
synopsis.appendChild(synopsisTwo);
synopsis.appendChild(synopsisThree);
synopsis.appendChild(synopsisFour);

synopsisTitle.innerText = `"안녕. 나의 빛, 나의 악몽"`;
synopsisOne.innerText = `1930년대 경성.`;
synopsisTwo.innerText = `카페에서 쉬던 세훈은
                         히카루라는 죽은 작가의 마지막 소설이 출산된다는 이야기와 함께
                         그녀의 진짜 정체도 밝혀진다는 충격적인 소식을 듣는다.`;
synopsisThree.innerText = `세훈은 유치장에 갇혀 있는 소설가. 이윤을 찾아가 유고집의 출간을 중지해달라고 부탁한다.
                           그러나 이윤은 출간을 중지해야 할 정확한 이유를 밝히라며,
                           소설가 김해진이 그녀에게 남긴 마지막 편지까지 꺼내 자랑한다.`;
synopsisFour.innerText = `세훈은 결국 히카루에 대한 숨겨왔던 이야기를 꺼내는데...`;