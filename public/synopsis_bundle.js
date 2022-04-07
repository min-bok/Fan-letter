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

/***/ "./js/synopsis.js":
/*!************************!*\
  !*** ./js/synopsis.js ***!
  \************************/
/***/ (() => {

eval("const synopsisTitle = document.createElement('h1');\r\nsynopsisTitle.classList.add('synopsisTitle');\r\nconst synopsisOne = document.createElement('p');\r\nconst synopsisTwo = document.createElement('p');\r\nconst synopsisThree = document.createElement('p');\r\nconst synopsisFour = document.createElement('p');\r\n\r\nsynopsis.appendChild(synopsisTitle);\r\nsynopsis.appendChild(synopsisOne);\r\nsynopsis.appendChild(synopsisTwo);\r\nsynopsis.appendChild(synopsisThree);\r\nsynopsis.appendChild(synopsisFour);\r\n\r\nsynopsisTitle.innerText = `\"안녕. 나의 빛, 나의 악몽\"`;\r\nsynopsisOne.innerText = `1930년대 경성.`;\r\nsynopsisTwo.innerText = `카페에서 쉬던 세훈은\r\n                         히카루라는 죽은 작가의 마지막 소설이 출산된다는 이야기와 함께\r\n                         그녀의 진짜 정체도 밝혀진다는 충격적인 소식을 듣는다.`;\r\nsynopsisThree.innerText = `세훈은 유치장에 갇혀 있는 소설가. 이윤을 찾아가 유고집의 출간을 중지해달라고 부탁한다.\r\n                           그러나 이윤은 출간을 중지해야 할 정확한 이유를 밝히라며,\r\n                           소설가 김해진이 그녀에게 남긴 마지막 편지까지 꺼내 자랑한다.`;\r\nsynopsisFour.innerText = `세훈은 결국 히카루에 대한 숨겨왔던 이야기를 꺼내는데...`;\n\n//# sourceURL=webpack://fan-letter/./js/synopsis.js?");

/***/ }),

/***/ "./source/synopsisPage.js":
/*!********************************!*\
  !*** ./source/synopsisPage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_synopsis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/synopsis */ \"./js/synopsis.js\");\n/* harmony import */ var _js_synopsis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_synopsis__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack://fan-letter/./source/synopsisPage.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./source/synopsisPage.js");
/******/ 	
/******/ })()
;