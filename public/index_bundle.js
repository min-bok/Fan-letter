/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/CharacterInfo.js":
/*!*****************************!*\
  !*** ./js/CharacterInfo.js ***!
  \*****************************/
/***/ (() => {

eval("function paintCharacter() {\r\n    for (let i = 0; i < resultArr.length; i++) {\r\n        const characterWrap = document.createElement('div');\r\n        characterWrap.classList.add('container');\r\n        const frontCard = document.createElement('div');\r\n        frontCard.classList.add('front');\r\n        frontCard.classList.add('card');\r\n        const backCard = document.createElement('div');\r\n        backCard.classList.add('back');\r\n        backCard.classList.add('card');\r\n        const face = document.createElement('img');\r\n        const name = document.createElement('h1');\r\n        const age = document.createElement('p');\r\n        const who = document.createElement('p');\r\n    \r\n        characterInfo.appendChild(characterWrap);\r\n        characterWrap.appendChild(frontCard);\r\n        characterWrap.appendChild(backCard);\r\n        frontCard.appendChild(face);\r\n        frontCard.appendChild(name);\r\n        frontCard.appendChild(age);\r\n        backCard.appendChild(who);\r\n\r\n        face.src = `./img/${i}.png`\r\n        name.innerText = resultArr[i].name;\r\n        age.innerText = resultArr[i].age;\r\n        who.innerText = resultArr[i].who;\r\n    }\r\n}\r\n\r\nwindow.addEventListener('load', paintCharacter);\n\n//# sourceURL=webpack://fan-letter/./js/CharacterInfo.js?");

/***/ }),

/***/ "./js/clock.js":
/*!*********************!*\
  !*** ./js/clock.js ***!
  \*********************/
/***/ (() => {

eval("const clock = document.querySelector('#clock');\r\n\r\nfunction getClock() {\r\n    const date = new Date();\r\n    const hours = String(date.getHours()).padStart(2, '0');\r\n    const minutes = String(date.getMinutes()).padStart(2, '0');\r\n    const seconds = String(date.getSeconds()).padStart(2, '0');\r\n    clock.innerText = `${hours}:${minutes}:${seconds}`;\r\n}\r\n\r\ngetClock();\r\nsetInterval(getClock, 1000);\n\n//# sourceURL=webpack://fan-letter/./js/clock.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mainPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainPage */ \"./js/mainPage.js\");\n/* harmony import */ var _mainPage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mainPage__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./js/clock.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_clock__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _quotes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quotes */ \"./js/quotes.js\");\n/* harmony import */ var _quotes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_quotes__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weather */ \"./js/weather.js\");\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_weather__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _movePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movePage */ \"./js/movePage.js\");\n/* harmony import */ var _movePage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_movePage__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _testInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./testInfo */ \"./js/testInfo.js\");\n/* harmony import */ var _testInfo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_testInfo__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _resultInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resultInfo */ \"./js/resultInfo.js\");\n/* harmony import */ var _resultInfo__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_resultInfo__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./test */ \"./js/test.js\");\n/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_test__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _synopsis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./synopsis */ \"./js/synopsis.js\");\n/* harmony import */ var _synopsis__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_synopsis__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _CharacterInfo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CharacterInfo */ \"./js/CharacterInfo.js\");\n/* harmony import */ var _CharacterInfo__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_CharacterInfo__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _navBtn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navBtn */ \"./js/navBtn.js\");\n/* harmony import */ var _navBtn__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_navBtn__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _jquery_sakura__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./jquery-sakura */ \"./js/jquery-sakura.js\");\n/* harmony import */ var _jquery_sakura__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_jquery_sakura__WEBPACK_IMPORTED_MODULE_11__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// import css from \"../css/style.css\";\r\n// import sakura from \"../css/jquery-sakura.css\";\n\n//# sourceURL=webpack://fan-letter/./js/index.js?");

/***/ }),

/***/ "./js/jquery-sakura.js":
/*!*****************************!*\
  !*** ./js/jquery-sakura.js ***!
  \*****************************/
/***/ (() => {

eval("// jQuery출처: https://thinking1.tistory.com/783\r\n\r\n(function ($) {\r\n    // requestAnimationFrame Polyfill\r\n    (function () {\r\n        var lastTime = 0;\r\n        var vendors = ['ms', 'moz', 'webkit', 'o'];\r\n\r\n        for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {\r\n            window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];\r\n            window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];\r\n        }\r\n\r\n        if (!window.requestAnimationFrame)\r\n            window.requestAnimationFrame = function (callback, element) {\r\n                var currTime = new Date().getTime();\r\n                var timeToCall = Math.max(0, 16 - (currTime - lastTime));\r\n                var id = window.setTimeout(function () {\r\n                        callback(currTime + timeToCall);\r\n                    },\r\n                    timeToCall);\r\n                lastTime = currTime + timeToCall;\r\n\r\n                return id;\r\n            };\r\n\r\n        if (!window.cancelAnimationFrame)\r\n            window.cancelAnimationFrame = function (id) {\r\n                clearTimeout(id);\r\n            };\r\n    }());\r\n\r\n    // Sakura function.\r\n    $.fn.sakura = function (options) {\r\n        // We rely on these random values a lot, so define a helper function for it.\r\n        function getRandomInt(min, max) {\r\n            return Math.floor(Math.random() * (max - min + 1)) + min;\r\n        }\r\n\r\n        // Helper function to attach cross-browser events to an element.\r\n        var prefixes = ['moz', 'ms', 'o', 'webkit', ''];\r\n        var prefCount = prefixes.length;\r\n\r\n        function prefixedEvent(element, type, callback) {\r\n            for (var i = 0; i < prefCount; i++) {\r\n                if (!prefixes[i]) {\r\n                    type = type.toLowerCase();\r\n                }\r\n\r\n                element.get(0).addEventListener(prefixes[i] + type, callback, false);\r\n            }\r\n        }\r\n\r\n        // Defaults for the option object, which gets extended below.\r\n        var defaults = {\r\n            blowAnimations: ['blow-soft-left', 'blow-medium-left', 'blow-hard-left', 'blow-soft-right', 'blow-medium-right', 'blow-hard-right'],\r\n            className: 'sakura',\r\n            fallSpeed: 3,\r\n            maxSize: 14,\r\n            minSize: 9,\r\n            newOn: 300,\r\n            swayAnimations: ['sway-0', 'sway-1', 'sway-2', 'sway-3', 'sway-4', 'sway-5', 'sway-6', 'sway-7', 'sway-8']\r\n        };\r\n\r\n        var options = $.extend({}, defaults, options);\r\n\r\n        // Declarations.\r\n        var documentHeight = $(document).height();\r\n        var documentWidth = $(document).width();\r\n        var sakura = $('<div class=\"' + options.className + '\" />');\r\n\r\n        // Set the overflow-x CSS property on the body to prevent horizontal scrollbars.\r\n        $('body').css({ 'overflow-x': 'hidden' });\r\n\r\n        // Function that inserts new petals into the document.\r\n        var petalCreator = function () {\r\n            setTimeout(function () {\r\n                requestAnimationFrame(petalCreator);\r\n            }, options.newOn);\r\n\r\n            // Get one random animation of each type and randomize fall time of the petals.\r\n            var blowAnimation = options.blowAnimations[Math.floor(Math.random() * options.blowAnimations.length)];\r\n            var swayAnimation = options.swayAnimations[Math.floor(Math.random() * options.swayAnimations.length)];\r\n            var fallTime = (Math.round(documentHeight * 0.007) + Math.random() * 5) * options.fallSpeed;\r\n\r\n            var animations = 'fall ' + fallTime + 's linear 0s 1' + ', ' +\r\n                blowAnimation + ' ' + (((fallTime > 30 ? fallTime : 30) - 20) + getRandomInt(0, 20)) + 's linear 0s infinite' + ', ' +\r\n                swayAnimation + ' ' + getRandomInt(2, 4) + 's linear 0s infinite';\r\n            var petal = sakura.clone();\r\n            var size = getRandomInt(options.minSize, options.maxSize);\r\n            var startPosLeft = Math.random() * documentWidth - 100;\r\n            var startPosTop = -((Math.random() * 20) + 15);\r\n\r\n            // Apply Event Listener to remove petals that reach the bottom of the page.\r\n            prefixedEvent(petal, 'AnimationEnd', function () {\r\n                $(this).remove();\r\n            });\r\n\r\n            // Apply Event Listener to remove petals that finish their horizontal float animation.\r\n            prefixedEvent(petal, 'AnimationIteration', function (ev) {\r\n                if ($.inArray(ev.animationName, options.blowAnimations) != -1) {\r\n                    $(this).remove();\r\n                }\r\n            });\r\n\r\n            petal\r\n                .css({\r\n                    '-webkit-animation': animations,\r\n                    '-o-animation': animations,\r\n                    '-ms-animation': animations,\r\n                    '-moz-animation': animations,\r\n                    animation: animations,\r\n                    height: size,\r\n                    left: startPosLeft,\r\n                    'margin-top': startPosTop,\r\n                    width: size\r\n                })\r\n                .appendTo('body');\r\n        };\r\n\r\n\r\n        // Recalculate documentHeight and documentWidth on browser resize.\r\n        $(window).resize(function () {\r\n            documentHeight = $(document).height();\r\n            documentWidth = $(document).width();\r\n        });\r\n\r\n        // Finally: Start adding petals.\r\n        requestAnimationFrame(petalCreator);\r\n    };\r\n}(jQuery));\r\n\n\n//# sourceURL=webpack://fan-letter/./js/jquery-sakura.js?");

/***/ }),

/***/ "./js/mainPage.js":
/*!************************!*\
  !*** ./js/mainPage.js ***!
  \************************/
/***/ (() => {

eval("\r\nconst loginForm = document.querySelector('#login-form');\r\nconst loginInput = document.querySelector('#login-form input');\r\nconst greeting = document.querySelector('#greeting');\r\nconst todoForm = document.querySelector('#todo-form');\r\n\r\nconst HIDDEN_CLASSNAME = 'hidden';\r\nconst USERNAME_KEY = 'username';\r\n\r\nfunction onLoginSubmit(event) {\r\n    event.preventDefault();\r\n    loginForm.classList.add(HIDDEN_CLASSNAME);\r\n    const username = loginInput.value;\r\n    localStorage.setItem(USERNAME_KEY, username);\r\n    paintGreetings(username);\r\n}\r\n\r\nfunction paintGreetings(username) {\r\n    greeting.innerText = `${username}님, 안녕하세요`;\r\n    greeting.classList.remove(HIDDEN_CLASSNAME);\r\n    todoForm.classList.remove(HIDDEN_CLASSNAME);\r\n}\r\n\r\nconst savedUsername = localStorage.getItem(USERNAME_KEY);\r\n\r\nif (savedUsername === null) {\r\n    loginForm.classList.remove(HIDDEN_CLASSNAME);\r\n    loginForm.addEventListener('submit', onLoginSubmit);\r\n} else {\r\n    paintGreetings(savedUsername)\r\n}\r\n\r\n// main page - todo list\r\n\r\nconst toDoForm = document.getElementById('todo-form');\r\nconst toDoInput = toDoForm.querySelector('input');\r\nconst toDoList = document.getElementById('todo-list');\r\n\r\nconst TODOS_KEY = 'toDos';\r\n\r\nlet toDos = [];\r\n\r\nfunction saveToDos() {\r\n    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));\r\n}\r\n\r\nfunction deleteTodo(event) {\r\n    const li = event.target.parentElement;\r\n    li.remove();\r\n    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));\r\n    saveToDos();\r\n}\r\n\r\nfunction paintTodo(newTodo) {\r\n    const li = document.createElement('li');\r\n    li.id = newTodo.id;\r\n    const span = document.createElement('span');\r\n    span.innerText = newTodo.text;\r\n    const button = document.createElement('button');\r\n    button.innerText = '삭제';\r\n    li.appendChild(span);\r\n    li.appendChild(button);\r\n    toDoList.appendChild(li);\r\n    button.classList.add('btnSet');\r\n    button.addEventListener('click', deleteTodo);\r\n}\r\n\r\nfunction handleToDoSubmit(event) {\r\n    event.preventDefault();\r\n    const newTodo = toDoInput.value;\r\n    toDoInput.value = '';\r\n    const newTodoObj = {\r\n        text: newTodo,\r\n        id: Date.now()\r\n    };\r\n    toDos.push(newTodoObj);\r\n    paintTodo(newTodoObj);\r\n    saveToDos();\r\n}\r\n\r\ntoDoForm.addEventListener('submit', handleToDoSubmit);\r\n\r\nconst savedToDos = localStorage.getItem(TODOS_KEY);\r\n\r\nif (savedToDos !== null) {\r\n    const parsedToDos = JSON.parse(savedToDos);\r\n    toDos = parsedToDos;\r\n    parsedToDos.forEach(paintTodo);\r\n}\n\n//# sourceURL=webpack://fan-letter/./js/mainPage.js?");

/***/ }),

/***/ "./js/movePage.js":
/*!************************!*\
  !*** ./js/movePage.js ***!
  \************************/
/***/ (() => {

eval("const body = document.querySelector('body');\r\nconst mainPage = document.querySelector('#mainPage');\r\nconst navBtn = document.querySelector('#navBtn');\r\nconst mainBtn = document.querySelector('.mainBtn'); \r\nconst testBtn = document.querySelector('#navBtn button:nth-child(3)'); \r\nconst test = document.querySelector('#test');\r\nconst result = document.querySelector('#result');\r\nconst synopsis = document.querySelector('#synopsis');\r\nconst characterInfo = document.querySelector('#characterInfo');\r\nconst CharacterBtn = document.querySelector('#navBtn button:nth-child(1)'); \r\nconst synopsisBtn = document.querySelector('#navBtn button:nth-child(2)'); \r\n\r\ntest.remove();\r\nsynopsis.remove();\r\ncharacterInfo.remove();\r\nresult.remove();\r\n\r\nfunction moveMainPage() {\r\n    test.remove();\r\n    synopsis.remove();\r\n    characterInfo.remove();\r\n    result.remove();\r\n    body.prepend(mainPage);\r\n}\r\n\r\nfunction moveTestPage() {\r\n    mainPage.remove();\r\n    synopsis.remove();\r\n    characterInfo.remove();\r\n    paintingTest();\r\n    body.prepend(test);\r\n}\r\n\r\nfunction moveSynopsisPage() {\r\n    mainPage.remove();\r\n    test.remove();\r\n    characterInfo.remove();\r\n    result.remove();\r\n    body.prepend(synopsis);\r\n}\r\n\r\nfunction moveCharacterPage() {\r\n    mainPage.remove();\r\n    test.remove();\r\n    synopsis.remove();\r\n    result.remove();\r\n    body.prepend(characterInfo);\r\n}\r\n\r\nsynopsisBtn.addEventListener('click', moveSynopsisPage)\r\ntestBtn.addEventListener('click', moveTestPage);\r\nCharacterBtn.addEventListener('click', moveCharacterPage);\r\nmainBtn.addEventListener('click', moveMainPage);\n\n//# sourceURL=webpack://fan-letter/./js/movePage.js?");

/***/ }),

/***/ "./js/navBtn.js":
/*!**********************!*\
  !*** ./js/navBtn.js ***!
  \**********************/
/***/ (() => {

eval("CharacterBtn.classList.add('hidden');\r\nsynopsisBtn.classList.add('hidden');\r\ntestBtn.classList.add('hidden');\r\n\r\nfunction displayBtn() {\r\n    CharacterBtn.classList.remove('hidden');\r\n    synopsisBtn.classList.remove('hidden');\r\n    testBtn.classList.remove('hidden');\r\n};\r\n\r\nfunction mouseoverBtn() {\r\n    CharacterBtn.classList.add('hidden');\r\n    synopsisBtn.classList.add('hidden');\r\n    testBtn.classList.add('hidden');\r\n};\r\n\r\nnavBtn.addEventListener('mouseover', displayBtn);\r\nnavBtn.addEventListener('mouseout', mouseoverBtn);\r\n\r\n\n\n//# sourceURL=webpack://fan-letter/./js/navBtn.js?");

/***/ }),

/***/ "./js/quotes.js":
/*!**********************!*\
  !*** ./js/quotes.js ***!
  \**********************/
/***/ (() => {

eval("const quotes = [\r\n    {\r\n        quote: '그대의 한 줄로 내가 나날을 버티었소',\r\n        author: '김해진'\r\n    },\r\n    {\r\n        quote: '이 순진한 친구 조심하라구',\r\n        author: '이윤'\r\n    },\r\n    {\r\n        quote: '이게 심상치 않아 \\n 걸작이 될 것 같아',\r\n        author: '이태준'\r\n    },\r\n    {\r\n        quote: '가난해도 사랑은 알고 \\n 빼앗긴 들에도 봄은 올테니',\r\n        author: '김수남'\r\n    },\r\n    {\r\n        quote: '쏟아지는 별빛을 봐 \\n 마음껏 달려봐 두려워 마',\r\n        author: '히카루'\r\n    },\r\n    {\r\n        quote: '말 한마디가 너무 눈부셔서 \\n 난 바보처럼 눈물이 나',\r\n        author: '정세훈'\r\n    },\r\n    {\r\n        quote: '내 모든 걸 잃어도 좋으니 \\n 오늘밤 나의 창가에 찾아와주오',\r\n        author: '김환태'\r\n    },\r\n    {\r\n        quote: '편지의 주인을 \\n 나는 사랑하지 않을 수 없다',\r\n        author: '김해진'\r\n    },\r\n    {\r\n        quote: '믿어지지 않아 내가 그 사람의 곁에',\r\n        author: '정세훈'\r\n    }\r\n]\r\n\r\nconst quote = document.querySelector('#quote span:first-child');\r\nconst author = document.querySelector('#quote span:last-child');\r\n\r\nconst todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];\r\n\r\n    quote.innerText = todaysQuote.quote;\r\n    author.innerText = todaysQuote.author;\r\n    \r\n// function writeQuote() {\r\n//     quote.innerText = todaysQuote.quote;\r\n//     author.innerText = todaysQuote.author;\r\n// };\r\n\r\n// writeQuote();\r\n// setInterval(writeQuote, 1000);\n\n//# sourceURL=webpack://fan-letter/./js/quotes.js?");

/***/ }),

/***/ "./js/resultInfo.js":
/*!**************************!*\
  !*** ./js/resultInfo.js ***!
  \**************************/
/***/ (() => {

eval("// name, intro, detail 출처 : 뮤지컬 펜레터 공식 굿즈 신문\r\n// age, who 출처 : 나무위키 https://namu.wiki/w/%ED%8C%AC%EB%A0%88%ED%84%B0(%EB%AE%A4%EC%A7%80%EC%BB%AC)?from=%EB%AE%A4%EC%A7%80%EC%BB%AC%20%ED%8C%AC%EB%A0%88%ED%84%B0#s-3\r\n\r\nconst imgNum = '1';\r\n\r\nconst resultArr = [\r\n    {\r\n        img: `${imgNum}.jpg`,\r\n        name: `김해진`,\r\n        age: `29세 男. 천재 소설가.`,\r\n        intro: `\"그대의 한 줄로 내가 나날을 버티었소.\"`,\r\n        detail: `어떻게 보면 과묵해 보이지만 좋아하는 것에 있어서 그 누구보다 열정적이다.\r\n                 다만 어떤 일에 과하게 몰입하는 경향이 있다.\r\n                 건강을 해칠 수 있으니 이 부분은 주의하자!`,\r\n        who: `순수하고 열정적인 성격으로 \r\n              다소 내향적이고 고지식한 면이 있다. \r\n\r\n              폐결핵을 앓고 있으며 \r\n              불우한 가정환경 속에 자라 사랑을 하면 \r\n              금방 깊게 빠져들고 의지하곤 한다. \r\n              당대 최고의 천재적인 소설가로 \r\n              평가받고 있다. \r\n\r\n              히카루라는 사람을 사랑한 것인지,\r\n              혹은 히카루의 글을 사랑한 것인지는 \r\n              배우와 관객의 해석에 따라 달라지는 부분. \r\n\r\n              모티브는 김유정.`\r\n    },\r\n    {\r\n        img: `${imgNum}.jpg`,\r\n        name: `이윤`,\r\n        age: `27세 男. 시인이자 소설가. \r\n              순수문학을 추구하는 모더니스트`,\r\n        intro: `\"이 순진한 친구, 조심하라구.\"`,\r\n        detail: `개방적이고 자유로운 성격의 소유자지만 진취적이다.\r\n                 같이 있으면 사람을 기분 좋게 하는 분위기 메이커.\r\n                 하지만 마냥 가볍기만 한 사람은 아니니 오해는 금물!`,\r\n        who: `모더니즘의 기수. \r\n              염세적이고 현실주의적이지만 \r\n              문인으로서 사명감도 강하고 \r\n              정도 많은 성격.\r\n              \r\n              김해진의 절친한 친구로 같은 소설가에\r\n              폐결핵을 앓고 있어 공감대가 깊다. \r\n\r\n              술을 좋아하며 장난기 있고 \r\n              익살스러운 성격으로 \r\n              '칠인회'의 분위기 메이커다. \r\n\r\n              모티브는 이상.`\r\n    },\r\n    {\r\n        img: `${imgNum}.jpg`,\r\n        name: `이태준`,\r\n        age: `29세 男. 문인. \r\n              명일일보 학예부장`,\r\n        intro: `\"이게 심상치 않아. 걸작이 될 것 같아.\"`,\r\n        detail: `책임감 있고, 사람 보는 안목도 훌륭한 타고난 리더.\r\n                 현실적인 성격에 추진력까지 있다. 자기 주장이 확실한 편이지만\r\n                 납득할 수 있는 타당한 반박이라면 기꺼이 수용하는 너그러운 면도 있다.\r\n                 시간 활용을 잘 하는 편이라 일도 곧잘 한다.`,\r\n        who: `문학단체 '칠인회'의 학예부장으로 \r\n              가장 연장자이며 동생인 멤버들을 \r\n              잘 챙기고 세훈을 가장 아낀다. \r\n\r\n              이윤의 실력을 인정해주고 \r\n              글을 실어주고 있다. \r\n\r\n              모티브는 소설가 이태준.`\r\n    },\r\n    {\r\n        img: `${imgNum}.jpg`,\r\n        name: `김수남`,\r\n        age: `26세 男. 시인. \r\n              이윤의 절친한 벗`,\r\n        intro: `\"가난해도 사랑은 알고, 빼앗긴 들에도 봄은 올테니\"`,\r\n        detail: `솔직하고 다정한 성격에 감상적이고 낭만주의적인 면이 있다.\r\n                 사람과 어울리는 것도 좋고 대화하는 것도 좋아한다.\r\n                 칭찬을 곧잘 하는데 막상 들으면 부끄러워하는 타입.\r\n                 융통성이 좋아 좋은 게 좋은거지~하는 타입이지만, 단호한 면도 있다.`,\r\n        who : `'칠인회'의 멤버. \r\n\r\n                모티브는 시인 김기림.`\r\n    },\r\n    {\r\n        img: `${imgNum}.jpg`,\r\n        name: `히카루`,\r\n        age: `19세 女. 작가`,\r\n        intro: `\"쏟아지는 별빛을 봐. 마음껏 달려봐. 두려워마.\"`,\r\n        detail: `하고자 하는 일에 욕심과 재능을 모두 갖추고 있다.\r\n                 단호하고 자신만만한 성격에, 간섭 또한 싫어한다.\r\n                 자신의 의지로 행동하고, 앞으로 일어날 일에 대해 미리 생각하고 계획하는 편.\r\n                 자신의 기준이 명확한 편이라 그 기준에서 벗어나는 행동을 썩 좋아하지 않는다.\r\n                 쉽게 해내는 것보다는 성취감을 즐기는 편.`,\r\n        who: `김해진과 생전 서신을 \r\n              주고받았다는 신원미상의 인물. \r\n\r\n              문학에 대한 욕심이 많고 실력도 \r\n              당대의 천재작가 김해진이 인정하고 \r\n              심취할 정도로 출중하다. \r\n\r\n              자신감 있고 소유욕이 강한 성격이며, \r\n              폐결핵을 앓고 있다고 한다.\r\n              해진과는 연인 관계로 인간으로서의 \r\n              해진보다는 작가로서의 해진, \r\n              그리고 그의 문학작품들을 좋아한다.\r\n\r\n              김해진에게는 뮤즈나 다름 없는 인물.`\r\n    },\r\n    {\r\n        img: `${imgNum}.jpg`,\r\n        name: `정세훈`,\r\n        age: `18세 男. 작가 지망생`,\r\n        intro: `\"말 한마디가 너무 눈부셔서 난 바보처럼 눈물이 나.\"`,\r\n        detail: `성실하고, 이해심 깊은 성격에 낮가림도 있다.\r\n                 다만 밖으로 이야기를 하는 타입은 아니라, 티가 잘 나지는 않는다.\r\n                 신중한 편이라 하나를 시작하는 데에 오랜 시간이 걸리기도 하지만 몰입도가 상당하다.\r\n                 자기가 하는 일에 완벽을 추구하는 경향이 있지만 자존감은 낮아 스스로를 숨기기도 한다.\r\n                 마음 맞는 사람과 깊은 관계를 유지하는 편이다.`,\r\n        who: `친일파 사업가의 아들로 \r\n              어린 시절 어머니를 여의고 \r\n              강압적인 아버지 밑에서 자랐다.\r\n              \r\n              자존감이 낮고 감수성이 풍부한 성격. \r\n              문학에 깊게 심취하고 있으며 \r\n              문학가의 꿈을 가지고 있다. \r\n\r\n              글을 제대로 배운 적이 없음에도 \r\n              상도 받고 문학지에도 실리는 걸 보면 \r\n              재능도 있다.\r\n\r\n              많은 작가들을 좋아하지만 \r\n              특히 소설가 김해진의 열성팬이다.`\r\n    },\r\n    {\r\n        img: `${imgNum}.jpg`,\r\n        name: `김환태`,\r\n        age: `29세 男, 평론가.\r\n              큐슈대를 졸업한 엘리트`,\r\n        intro: `\"내 모든 걸 잃어도 좋으니 오늘밤 나의 창가에 찾아와주오\"`,\r\n        detail: `낮가림이 있어, 처음에는 어색할 수 있지만 친해지면 깊은 관계를 유지한다.\r\n                 논리적이고 분석적이지만 호기심도 많고, 다정한 성격에 소탈한 타입.\r\n                 하나에 꽂히면 깊게 파고드는 경향이 있다.\r\n                 보기에는 딱딱하게 느껴질 수 있지만 다정한 사람이니 먼저 다가와주면 금방 친해질 수 있을 것이다.`,\r\n        who: `해진과 함께 들어온 \r\n             '칠인회'의 새 멤버로 \r\n             소심한 성격이다. \r\n             \r\n             모티브는 비평가 김환태.`\r\n    }\r\n]\n\n//# sourceURL=webpack://fan-letter/./js/resultInfo.js?");

/***/ }),

/***/ "./js/synopsis.js":
/*!************************!*\
  !*** ./js/synopsis.js ***!
  \************************/
/***/ (() => {

eval("const synopsisTitle = document.createElement('h1');\r\nsynopsisTitle.classList.add('synopsisTitle');\r\nconst synopsisOne = document.createElement('p');\r\nconst synopsisTwo = document.createElement('p');\r\nconst synopsisThree = document.createElement('p');\r\nconst synopsisFour = document.createElement('p');\r\n\r\nsynopsis.appendChild(synopsisTitle);\r\nsynopsis.appendChild(synopsisOne);\r\nsynopsis.appendChild(synopsisTwo);\r\nsynopsis.appendChild(synopsisThree);\r\nsynopsis.appendChild(synopsisFour);\r\n\r\nsynopsisTitle.innerText = `\"안녕. 나의 빛, 나의 악몽\"`;\r\nsynopsisOne.innerText = `1930년대 경성.`;\r\nsynopsisTwo.innerText = `카페에서 쉬던 세훈은\r\n                         히카루라는 죽은 작가의 마지막 소설이 출산된다는 이야기와 함께\r\n                         그녀의 진짜 정체도 밝혀진다는 충격적인 소식을 듣는다.`;\r\nsynopsisThree.innerText = `세훈은 유치장에 갇혀 있는 소설가. 이윤을 찾아가 유고집의 출간을 중지해달라고 부탁한다.\r\n                           그러나 이윤은 출간을 중지해야 할 정확한 이유를 밝히라며,\r\n                           소설가 김해진이 그녀에게 남긴 마지막 편지까지 꺼내 자랑한다.`;\r\nsynopsisFour.innerText = `세훈은 결국 히카루에 대한 숨겨왔던 이야기를 꺼내는데...`;\n\n//# sourceURL=webpack://fan-letter/./js/synopsis.js?");

/***/ }),

/***/ "./js/test.js":
/*!********************!*\
  !*** ./js/test.js ***!
  \********************/
/***/ (() => {

eval("const question = document.createElement('h1');\r\nconst firstAnswer = document.createElement('button');\r\nfirstAnswer.classList.add('first');\r\nconst secondAnswer = document.createElement('button');\r\n\r\nlet i = 0;\r\n\r\nfunction paintingTest() {\r\n    test.appendChild(question);\r\n    test.appendChild(firstAnswer);\r\n    test.appendChild(secondAnswer);\r\n\r\nquestion.innerText = testArr[0].question;\r\nfirstAnswer.innerText = testArr[0].answerOne;\r\nsecondAnswer.innerText =  testArr[0].answerTwo;\r\n}\r\n\r\nfunction resultOne() {\r\n    test.remove();\r\n    \r\n    const CharacterImg = document.createElement('img');\r\n    const CharacterName = document.createElement('p');\r\n    CharacterName.classList.add('name');\r\n    const CharacterInfo = document.createElement('p');\r\n    CharacterInfo.classList.add('info');\r\n    const CharacterDetail = document.createElement('p');\r\n    CharacterDetail.classList.add('detail');\r\n\r\n    result.appendChild(CharacterImg);\r\n    result.appendChild(CharacterName);\r\n    result.appendChild(CharacterInfo);\r\n    result.appendChild(CharacterDetail);\r\n\r\n    if(i == 5) {\r\n        i = i-5;\r\n    } else if(i == 7) {\r\n        i = i-3;\r\n    } else if(i == 9) {\r\n        i = i-7\r\n    } else if(i = 10) {\r\n        i = i-9;\r\n    }\r\n\r\n    CharacterImg.src = `./img/P${i}.png`;\r\n    CharacterName.innerText = resultArr[i].name;\r\n    CharacterInfo.innerText = resultArr[i].intro;\r\n    CharacterDetail.innerText = resultArr[i].detail;\r\n}\r\n\r\nfunction resultTwo() {\r\n    test.remove();\r\n    \r\n    const result = document.querySelector('#result');\r\n    const CharacterImg = document.createElement('img');\r\n    const CharacterName = document.createElement('p');\r\n    CharacterName.classList.add('name');\r\n    const CharacterInfo = document.createElement('p');\r\n    CharacterInfo.classList.add('info');\r\n    const CharacterDetail = document.createElement('p');\r\n    CharacterDetail.classList.add('detail');\r\n\r\n    result.appendChild(CharacterImg);\r\n    result.appendChild(CharacterName);\r\n    result.appendChild(CharacterInfo);\r\n    result.appendChild(CharacterDetail);\r\n\r\n    if(i ==7) {\r\n        i = i-2;\r\n    } else if(i == 9) {\r\n        i = i-6;\r\n    } else if(i == 10) {\r\n        i = i-4;\r\n    }\r\n\r\n    CharacterImg.src = `./img/P${i}.png`;\r\n    CharacterName.innerText = resultArr[i].name;\r\n    CharacterInfo.innerText = resultArr[i].intro;\r\n    CharacterDetail.innerText = resultArr[i].detail;\r\n}\r\n\r\n\r\nfunction first() {\r\n    if(i == 0) {\r\n        i = i+1;\r\n    } else if(i == 1) {\r\n        i = i+3;\r\n    } else if(i == 2) {\r\n        i = i+1;\r\n    } else if(i == 3){\r\n        i =i+8;\r\n    } else if(i == 4) {\r\n        i = i+2;\r\n    } else if(i == 5) {\r\n        body.prepend(result);\r\n        resultOne();\r\n    } else if(i == 6) {\r\n        i = i+1;\r\n    } else if(i == 7) {\r\n        body.prepend(result);\r\n        resultOne();\r\n    } else if(i == 8) {\r\n        i = i-5;\r\n    } else if(i == 9) {\r\n        body.prepend(result);\r\n        resultOne();\r\n    } else if(i == 10) {\r\n        body.prepend(result);\r\n        resultOne();\r\n    }\r\n\r\n    question.innerText = testArr[i].question;\r\n    firstAnswer.innerText = testArr[i].answerOne;\r\n    secondAnswer.innerText =  testArr[i].answerTwo;\r\n\r\n    return i;\r\n}\r\n\r\nfunction second() {\r\n    if(i == 0) {\r\n        i = i+2;\r\n    } else if(i == 1){\r\n        i = i+7;\r\n    } else if (i == 2) {\r\n        i = i+6;\r\n    } else if(i == 3){\r\n        i = i+7;\r\n    } else if(i == 4) {\r\n        i = i+1;\r\n    } else if(i == 5) {\r\n        i = i+5;\r\n    } else if(i ==6) {\r\n        i =i+3;\r\n    } else if(i == 7) {\r\n        body.prepend(result);\r\n        resultTwo();\r\n    } else if(i == 8) {\r\n        i = i-2;\r\n    }else if(i == 9) {\r\n        body.prepend(result);\r\n        resultTwo();\r\n    } else if(i == 10) {\r\n        body.prepend(result);\r\n        resultTwo();\r\n    } \r\n\r\n    question.innerText = testArr[i].question;\r\n    firstAnswer.innerText = testArr[i].answerOne;\r\n    secondAnswer.innerText =  testArr[i].answerTwo;\r\n\r\n    return i; \r\n}\r\n\r\nfirstAnswer.addEventListener('click', first);\r\nsecondAnswer.addEventListener('click', second);\r\n\n\n//# sourceURL=webpack://fan-letter/./js/test.js?");

/***/ }),

/***/ "./js/testInfo.js":
/*!************************!*\
  !*** ./js/testInfo.js ***!
  \************************/
/***/ (() => {

eval("const testArr = [\r\n    {\r\n        question: `'철인회'라는 단체가 생긴다는데 참여해볼까?`,\r\n        answerOne: `아무리 그래도 글은 혼자 쓰는 게 편하지,\r\n                    무슨 주의니 뭐니 나는 글만 쓰는 사람인데`,\r\n        answerTwo: `고독은 문학을 낳고, 사교는 인격을 도야한다..\r\n                    뜻이 맞는 사람끼리 모여 같이 활동을 하면 좋겠군!`,\r\n    },\r\n    {\r\n        question: `새로운 급사가 왔다. 문학도라는데, 사정이 딱하다.\r\n                   허드렛일이라도 시켜달라고 한다.`,\r\n        answerOne: `글은 쓰니? 나중에 글 쓴거 가져와봐라.\r\n                    내가 한 번 봐줄께.`,\r\n        answerTwo: `마침 급사도 필요하던 참인데,\r\n                    지용이 형 원고 좀 받아올래?`,\r\n    },\r\n    {\r\n        question: `교정을 봐달라는 부탁을 받았는데,\r\n                   어라? 이건 비문 같은데?`,\r\n        answerOne: `이건 비문이다. 라고 사실대로 이야기 한다.`,\r\n        answerTwo: `자존심이 상하지는 않을까? 내가 이야기 해도 되나?`,\r\n    },\r\n    {\r\n        question: `이번에 나온 글이 반응이 영 그래.`,\r\n        answerOne: `괜찮아. 괜찮아! 다음 번에는 아주 혼이 나가서 좋다고 할 글을 써 줘야지 내가.`,\r\n        answerTwo: `그거 글은 볼 줄도 모르는 양반이 평론은 무슨 평론!`,\r\n    },\r\n    {\r\n        question: `내 뮤즈에게서 답장이 오지를 않고 있다.`,\r\n        answerOne: `사정이 있나 보지. 뭐.\r\n                    금방 답장이 올 테니 괘념치 않고 기다린다.`,\r\n        answerTwo: `내 글에 문제가 있었나.\r\n                    내가 잘못해서 마음이 상한 것은 아닌가.\r\n                    지금 즈음이면 답이 와야 하는데.`,\r\n    },\r\n    {\r\n        question: `작품 완성이 목전인데, 몸 상태가 심상치 않다.\r\n                    일생일대의 작품을 완성할 수 있는 마지막 순간이 될지도 모르는데...`,\r\n        answerOne: `내 삶을 바쳐 완성할 수 있다면, 세상에 마지막 글이 남는다면,\r\n                    나에게는 이 작품 뿐이다.`,\r\n        answerTwo: `살아있어야 쓰지.\r\n                    내 몸 망쳐가면서 쓰는 작품이 정말 의미가 있나? 회복에 전념한다.`,\r\n    },\r\n    {\r\n        question: `동인회지를 발간하겠대!`,\r\n        answerOne: `이미 쓰고 있다`,\r\n        answerTwo: `뭘 써야하나... 어라? 친구집에 난이 피었었는데 향이... 이미 피어난 난 향기는...`,\r\n    },\r\n    {\r\n        question: `동료들에게 거짓말을 한 걸 들켰다. 어쩌지?`,\r\n        answerOne: `괜찮아 다 게획했던 거잖아?`,\r\n        answerTwo: `솔직하게 말하고 용서해달라고 할까?`,\r\n    },\r\n    {\r\n        question: `이번에 새로 나온 소설 봤어? 어떤 것 같아?`,\r\n        answerOne: `촉이 왔어. 제목만 봐도 굉장한 작품일 거야`,\r\n        answerTwo: `정말 이 작가... 공간에 대한 묘사와 드라마틱한 스토리! 정말 굉장한데?`,\r\n    },\r\n    {\r\n        question: `누군가 칠인회를 고발하는 투서를 보냈다고 한다.`,\r\n        answerOne: `침착하게 이 상황의 대비책을 고민한다. 일단 숨기고 태워! 지금은 그래야 해!`,\r\n        answerTwo: `어떻게 하지? 문예지들도 다 태워야하나? 그렇게 하면 남는게 하나도 없겠어!`,\r\n    },\r\n    {\r\n        question: `원고 마감이 언제 였더라...?`,\r\n        answerOne: `괜찮아. 난 천재니까. 금방 쓰지 무얼. 술이나 마시러 가세...`,\r\n        answerTwo: `일주일 남았으니 꼬박꼬박 써둬야 제때 보내겠군.`,\r\n    },\r\n    {\r\n        question: `새로운 급사가 왔다. 문학도라는데, 사정이 딱하다.\r\n                   허드렛일이라도 시켜달라고 한다.`,\r\n        answerOne: `글은 쓰니? 나중에 글 쓴거 가져와봐라.\r\n                    내가 한 번 봐줄께.`,\r\n        answerTwo: `마침 급사도 필요하던 참인데,\r\n                    지용이 형 원고 좀 받아올래?`,\r\n    }\r\n];\n\n//# sourceURL=webpack://fan-letter/./js/testInfo.js?");

/***/ }),

/***/ "./js/weather.js":
/*!***********************!*\
  !*** ./js/weather.js ***!
  \***********************/
/***/ (() => {

eval("const API_KEY = '58df8615efe73067fbead169c0274ab8';\r\n\r\nfunction onGeoOk(position) {\r\n    const lat = position.coords.latitude;\r\n    const lng = position.coords.longitude;\r\n    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;\r\n    fetch(url)\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n        const weather = document.querySelector('#weather span:first-child');\r\n        const city = document.querySelector('#weather span:last-child');\r\n        city.innerText = data.name;\r\n        weather.innerText = `${data.weather[0].main} / ${parseInt(data.main.temp)}°C`});\r\n}\r\n\r\nfunction onGeoError() {\r\n    alert(`Can't find you, No weather for you.`);\r\n}\r\n\r\nnavigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)\n\n//# sourceURL=webpack://fan-letter/./js/weather.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;