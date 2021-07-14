/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/handlers.js":
/*!*************************!*\
  !*** ./src/handlers.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mousedownHandler": () => (/* binding */ mousedownHandler),
/* harmony export */   "mouseupHandler": () => (/* binding */ mouseupHandler),
/* harmony export */   "mousemoveHandler": () => (/* binding */ mousemoveHandler)
/* harmony export */ });
/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vars.js */ "./src/vars.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");




const mousedownHandler = event => {
    _index_js__WEBPACK_IMPORTED_MODULE_1__.default.isEditMode = true;

    _index_js__WEBPACK_IMPORTED_MODULE_1__.default.ctx.lineCap = 'round';
    _index_js__WEBPACK_IMPORTED_MODULE_1__.default.ctx.lineWidth = _vars_js__WEBPACK_IMPORTED_MODULE_0__.lineWidthElem.value;
    _index_js__WEBPACK_IMPORTED_MODULE_1__.default.ctx.strokeStyle = _vars_js__WEBPACK_IMPORTED_MODULE_0__.strokeStyleElem.value;

    _index_js__WEBPACK_IMPORTED_MODULE_1__.default.coords.x1 = event.offsetX;
    _index_js__WEBPACK_IMPORTED_MODULE_1__.default.coords.y1 = event.offsetY;
};

const mouseupHandler = event => {
    _index_js__WEBPACK_IMPORTED_MODULE_1__.default.isEditMode = false;
};

const mousemoveHandler = event => {
    if (!_index_js__WEBPACK_IMPORTED_MODULE_1__.default.isEditMode) return;

    _index_js__WEBPACK_IMPORTED_MODULE_1__.default.coords.x2 = event.offsetX;
    _index_js__WEBPACK_IMPORTED_MODULE_1__.default.coords.y2 = event.offsetY;

    _index_js__WEBPACK_IMPORTED_MODULE_1__.default.ctx.beginPath();
    _index_js__WEBPACK_IMPORTED_MODULE_1__.default.ctx.moveTo(_index_js__WEBPACK_IMPORTED_MODULE_1__.default.coords.x1, _index_js__WEBPACK_IMPORTED_MODULE_1__.default.coords.y1);
    _index_js__WEBPACK_IMPORTED_MODULE_1__.default.ctx.lineTo(_index_js__WEBPACK_IMPORTED_MODULE_1__.default.coords.x2, _index_js__WEBPACK_IMPORTED_MODULE_1__.default.coords.y2);
    _index_js__WEBPACK_IMPORTED_MODULE_1__.default.ctx.stroke();
    _index_js__WEBPACK_IMPORTED_MODULE_1__.default.ctx.closePath();

    _index_js__WEBPACK_IMPORTED_MODULE_1__.default.coords.x1 = _index_js__WEBPACK_IMPORTED_MODULE_1__.default.coords.x2;
    _index_js__WEBPACK_IMPORTED_MODULE_1__.default.coords.y1 = _index_js__WEBPACK_IMPORTED_MODULE_1__.default.coords.y2;
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _handlers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers.js */ "./src/handlers.js");
/* harmony import */ var _vars_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vars.js */ "./src/vars.js");




const imageEditor = {
    ctx: _vars_js__WEBPACK_IMPORTED_MODULE_1__.canvas.getContext('2d'),
    isEditMode: false,
    coords: {
        x1: null,
        y1: null,
        x2: null,
        y2: null
    }
};

_vars_js__WEBPACK_IMPORTED_MODULE_1__.canvas.addEventListener('mousedown', _handlers_js__WEBPACK_IMPORTED_MODULE_0__.mousedownHandler);

_vars_js__WEBPACK_IMPORTED_MODULE_1__.canvas.addEventListener('mouseup', _handlers_js__WEBPACK_IMPORTED_MODULE_0__.mouseupHandler);

_vars_js__WEBPACK_IMPORTED_MODULE_1__.canvas.addEventListener('mousemove', _handlers_js__WEBPACK_IMPORTED_MODULE_0__.mousemoveHandler);

_vars_js__WEBPACK_IMPORTED_MODULE_1__.clearCanvas.onclick = () => imageEditor.ctx.clearRect(0, 0, _vars_js__WEBPACK_IMPORTED_MODULE_1__.canvas.width, _vars_js__WEBPACK_IMPORTED_MODULE_1__.canvas.height);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (imageEditor);

/***/ }),

/***/ "./src/vars.js":
/*!*********************!*\
  !*** ./src/vars.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canvas": () => (/* binding */ canvas),
/* harmony export */   "lineWidthElem": () => (/* binding */ lineWidthElem),
/* harmony export */   "strokeStyleElem": () => (/* binding */ strokeStyleElem),
/* harmony export */   "clearCanvas": () => (/* binding */ clearCanvas)
/* harmony export */ });
const canvas = document.querySelector('#image-editor');
const lineWidthElem = document.querySelector('#line-width');
const strokeStyleElem = document.querySelector("#line-color");
const clearCanvas = document.querySelector('#canvas-clear');


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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map