/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateForecast: () => (/* binding */ updateForecast)
/* harmony export */ });
function updateForecast(forecast) {
    forecastDiv.textContent = '';
    days.forEach((day) => {
        forecastDiv.appendChild(day);
    });
}

const forecastDiv = document.querySelector('.forecast');
const days = [];

for (let i = 0; i < 3; i++) {
    const day = document.createElement('div');
    day.classList.add('day');
    days.push(day);
};



/***/ }),

/***/ "./src/requests.js":
/*!*************************!*\
  !*** ./src/requests.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleWeatherData: () => (/* binding */ handleWeatherData)
/* harmony export */ });
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ "./src/display.js");


async function getWeather(location) {
    const response = await fetch(createRequestURL(location));
    const weatherData = await response.json();
    return weatherData;
};

function createRequestURL(location) {
    let requestURL = 
        API_BASE_URL + 
        '/current.json' +
        '?key=' + API_KEY + 
        '&q=' + location;
    return requestURL;
};

async function handleWeatherData(location) {
    const data = await getWeather(location);
    console.log(data.current);
    const forecast = {
        condition: data.current.condition,
        temp_c: data.current.temp_c,
        temp_f: data.current.temp_f,
        feelslike_c: data.current.feelslike_c,
        feelslike_f: data.current.feelslike_f,
        humidity: data.current.humidity,
    }

    console.log(forecast);

    (0,_display__WEBPACK_IMPORTED_MODULE_0__.updateForecast)(forecast);
};

const API_BASE_URL = 'https://api.weatherapi.com/v1';
const API_KEY = '8c3933d6332d42e9b98220128242302';



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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requests */ "./src/requests.js");


(0,_requests__WEBPACK_IMPORTED_MODULE_0__.handleWeatherData)('boston');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUEsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZDJDOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxJQUFJLHdEQUFjO0FBQ2xCOztBQUVBO0FBQ0E7Ozs7Ozs7O1VDbkNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOK0M7O0FBRS9DLDREQUFpQixXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvcmVxdWVzdHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gdXBkYXRlRm9yZWNhc3QoZm9yZWNhc3QpIHtcbiAgICBmb3JlY2FzdERpdi50ZXh0Q29udGVudCA9ICcnO1xuICAgIGRheXMuZm9yRWFjaCgoZGF5KSA9PiB7XG4gICAgICAgIGZvcmVjYXN0RGl2LmFwcGVuZENoaWxkKGRheSk7XG4gICAgfSk7XG59XG5cbmNvbnN0IGZvcmVjYXN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcmVjYXN0Jyk7XG5jb25zdCBkYXlzID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgY29uc3QgZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGF5LmNsYXNzTGlzdC5hZGQoJ2RheScpO1xuICAgIGRheXMucHVzaChkYXkpO1xufTtcblxuZXhwb3J0IHsgdXBkYXRlRm9yZWNhc3QgfTsiLCJpbXBvcnQgeyB1cGRhdGVGb3JlY2FzdCB9IGZyb20gXCIuL2Rpc3BsYXlcIjtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihsb2NhdGlvbikge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goY3JlYXRlUmVxdWVzdFVSTChsb2NhdGlvbikpO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlcXVlc3RVUkwobG9jYXRpb24pIHtcbiAgICBsZXQgcmVxdWVzdFVSTCA9IFxuICAgICAgICBBUElfQkFTRV9VUkwgKyBcbiAgICAgICAgJy9jdXJyZW50Lmpzb24nICtcbiAgICAgICAgJz9rZXk9JyArIEFQSV9LRVkgKyBcbiAgICAgICAgJyZxPScgKyBsb2NhdGlvbjtcbiAgICByZXR1cm4gcmVxdWVzdFVSTDtcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZVdlYXRoZXJEYXRhKGxvY2F0aW9uKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFdlYXRoZXIobG9jYXRpb24pO1xuICAgIGNvbnNvbGUubG9nKGRhdGEuY3VycmVudCk7XG4gICAgY29uc3QgZm9yZWNhc3QgPSB7XG4gICAgICAgIGNvbmRpdGlvbjogZGF0YS5jdXJyZW50LmNvbmRpdGlvbixcbiAgICAgICAgdGVtcF9jOiBkYXRhLmN1cnJlbnQudGVtcF9jLFxuICAgICAgICB0ZW1wX2Y6IGRhdGEuY3VycmVudC50ZW1wX2YsXG4gICAgICAgIGZlZWxzbGlrZV9jOiBkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2MsXG4gICAgICAgIGZlZWxzbGlrZV9mOiBkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2YsXG4gICAgICAgIGh1bWlkaXR5OiBkYXRhLmN1cnJlbnQuaHVtaWRpdHksXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coZm9yZWNhc3QpO1xuXG4gICAgdXBkYXRlRm9yZWNhc3QoZm9yZWNhc3QpO1xufTtcblxuY29uc3QgQVBJX0JBU0VfVVJMID0gJ2h0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxJztcbmNvbnN0IEFQSV9LRVkgPSAnOGMzOTMzZDYzMzJkNDJlOWI5ODIyMDEyODI0MjMwMic7XG5cbmV4cG9ydCB7IGhhbmRsZVdlYXRoZXJEYXRhIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBoYW5kbGVXZWF0aGVyRGF0YSB9IGZyb20gXCIuL3JlcXVlc3RzXCI7XG5cbmhhbmRsZVdlYXRoZXJEYXRhKCdib3N0b24nKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=