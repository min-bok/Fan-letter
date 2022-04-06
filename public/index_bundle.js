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

/***/ "./js/clock.js":
/*!*********************!*\
  !*** ./js/clock.js ***!
  \*********************/
/***/ (() => {

eval("const clock = document.querySelector('#clock');\r\n\r\nfunction getClock() {\r\n    const date = new Date();\r\n    const hours = String(date.getHours()).padStart(2, '0');\r\n    const minutes = String(date.getMinutes()).padStart(2, '0');\r\n    const seconds = String(date.getSeconds()).padStart(2, '0');\r\n    clock.innerText = `${hours}:${minutes}:${seconds}`;\r\n}\r\n\r\ngetClock();\r\nsetInterval(getClock, 1000);\n\n//# sourceURL=webpack://fan-letter/./js/clock.js?");

/***/ }),

/***/ "./js/greeting.js":
/*!************************!*\
  !*** ./js/greeting.js ***!
  \************************/
/***/ (() => {

eval("const loginForm = document.querySelector('#login-form');\r\nconst loginInput = document.querySelector('#login-form input');\r\nconst greeting = document.querySelector('#greeting');\r\nconst todoForm = document.querySelector('#todo-form');\r\n\r\nconst HIDDEN_CLASSNAME = 'hidden';\r\nconst USERNAME_KEY = 'username';\r\n\r\nfunction onLonginSubmit(event) {\r\n    event.preventDefault();\r\n    loginForm.classList.add(HIDDEN_CLASSNAME);\r\n    const username = loginInput.value;\r\n    localStorage.setItem(USERNAME_KEY, username);\r\n    paintGreetings(username);\r\n}\r\n\r\nfunction paintGreetings(username) {\r\n    greeting.innerText = `${username}님, 안녕하세요`;\r\n    greeting.classList.remove(HIDDEN_CLASSNAME);\r\n    todoForm.classList.remove(HIDDEN_CLASSNAME);\r\n}\r\n\r\nconst savedUsername = localStorage.getItem(USERNAME_KEY);\r\n\r\nif (savedUsername === null) {\r\n    loginForm.classList.remove(HIDDEN_CLASSNAME);\r\n    loginForm.addEventListener('submit', onLonginSubmit);\r\n} else {\r\n    paintGreetings(savedUsername)\r\n}\n\n//# sourceURL=webpack://fan-letter/./js/greeting.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _greeting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./greeting */ \"./js/greeting.js\");\n/* harmony import */ var _greeting__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_greeting__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./js/clock.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_clock__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _quotes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quotes */ \"./js/quotes.js\");\n/* harmony import */ var _quotes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_quotes__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n// import css from \"../css/style.css\";\r\n// import sakura from \"../css/jquery-sakura.css\";\n\n//# sourceURL=webpack://fan-letter/./js/index.js?");

/***/ }),

/***/ "./js/quotes.js":
/*!**********************!*\
  !*** ./js/quotes.js ***!
  \**********************/
/***/ (() => {

eval("const quotes = [\r\n    {\r\n        quote: '그대의 한 줄로 내가 나날을 버티었소',\r\n        author: '김해진'\r\n    },\r\n    {\r\n        quote: '이 순진한 친구 조심하라구',\r\n        author: '이윤'\r\n    },\r\n    {\r\n        quote: '이게 심상치 않아 \\n 걸작이 될 것 같아',\r\n        author: '이태준'\r\n    },\r\n    {\r\n        quote: '가난해도 사랑은 알고 \\n 빼앗긴 들에도 봄은 올테니',\r\n        author: '김수남'\r\n    },\r\n    {\r\n        quote: '쏟아지는 별빛을 봐 \\n 마음껏 달려봐 두려워 마',\r\n        author: '히카루'\r\n    },\r\n    {\r\n        quote: '말 한마디가 너무 눈부셔서 \\n 난 바보처럼 눈물이 나',\r\n        author: '정세훈'\r\n    },\r\n    {\r\n        quote: '내 모든 걸 잃어도 좋으니 \\n 오늘밤 나의 창가에 찾아와주오',\r\n        author: '김환태'\r\n    },\r\n    {\r\n        quote: '편지의 주인을 \\n 나는 사랑하지 않을 수 없다',\r\n        author: '김해진'\r\n    },\r\n    {\r\n        quote: '믿어지지 않아 내가 그 사람의 곁에',\r\n        author: '정세훈'\r\n    }\r\n]\r\n\r\nconst quote = document.querySelector('#quote span:first-child');\r\nconst author = document.querySelector('#quote span:last-child');\r\n\r\nconst todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];\r\n\r\n    quote.innerText = todaysQuote.quote;\r\n    author.innerText = todaysQuote.author;\r\n    \r\n// function writeQuote() {\r\n//     quote.innerText = todaysQuote.quote;\r\n//     author.innerText = todaysQuote.author;\r\n// };\r\n\r\n// writeQuote();\r\n// setInterval(writeQuote, 1000);\n\n//# sourceURL=webpack://fan-letter/./js/quotes.js?");

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