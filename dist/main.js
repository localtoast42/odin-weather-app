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
    forecast.forEach((day) => {
        const forecastDayDiv = createForecastDay(day);
        forecastDiv.appendChild(forecastDayDiv);
    });
}

function createForecastDay(forecastDay) {
    const forecastDayDiv = document.createElement('div');
    forecastDayDiv.classList.add('forecast-day');

    const dateText = document.createElement('h2');
    dateText.textContent = forecastDay.date;

    const conditionDiv = document.createElement('div');
    conditionDiv.classList.add('condition');

    const conditionText = document.createElement('h3');
    const conditionImg = document.createElement('img');

    conditionText.textContent = forecastDay.condition.text;
    conditionImg.src = forecastDay.condition.icon;
    conditionDiv.appendChild(conditionImg);
    conditionDiv.appendChild(conditionText);

    const temperatureDiv = document.createElement('div');

    forecastDayDiv.appendChild(dateText);
    forecastDayDiv.appendChild(conditionDiv);
    forecastDayDiv.appendChild(temperatureDiv);

    return forecastDayDiv;
}

const forecastDiv = document.querySelector('.forecast');



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


async function getWeather(location, numDays) {
    const response = await fetch(createRequestURL(location, numDays));
    const weatherData = await response.json();
    return weatherData;
};

function createRequestURL(location, numDays) {
    let requestURL = 
        API_BASE_URL + 
        '/forecast.json' +
        '?key=' + API_KEY + 
        '&q=' + location +
        '&days=' + numDays;
    return requestURL;
};

async function handleWeatherData(location, numDays) {
    const data = await getWeather(location, numDays);
    const forecast = [];

    for (let i = 0; i < numDays; i++) {
        const forecastDay = {
            date: data.forecast.forecastday[i].date,
            condition: data.forecast.forecastday[i].day.condition,
            maxtemp_c: data.forecast.forecastday[i].day.maxtemp_c,
            maxtemp_f: data.forecast.forecastday[i].day.maxtemp_f,
            mintemp_c: data.forecast.forecastday[i].day.mintemp_c,
            mintemp_f: data.forecast.forecastday[i].day.mintemp_f,
            avghumidity: data.forecast.forecastday[i].day.avghumidity,
        };
        forecast.push(forecastDay);
    };

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


(0,_requests__WEBPACK_IMPORTED_MODULE_0__.handleWeatherData)('boston', 3);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25DMkM7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsYUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLElBQUksd0RBQWM7QUFDbEI7O0FBRUE7QUFDQTs7Ozs7Ozs7VUN6Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04rQzs7QUFFL0MsNERBQWlCLGMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9yZXF1ZXN0cy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB1cGRhdGVGb3JlY2FzdChmb3JlY2FzdCkge1xuICAgIGZvcmVjYXN0RGl2LnRleHRDb250ZW50ID0gJyc7XG4gICAgZm9yZWNhc3QuZm9yRWFjaCgoZGF5KSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0RGF5RGl2ID0gY3JlYXRlRm9yZWNhc3REYXkoZGF5KTtcbiAgICAgICAgZm9yZWNhc3REaXYuYXBwZW5kQ2hpbGQoZm9yZWNhc3REYXlEaXYpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb3JlY2FzdERheShmb3JlY2FzdERheSkge1xuICAgIGNvbnN0IGZvcmVjYXN0RGF5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9yZWNhc3REYXlEaXYuY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3QtZGF5Jyk7XG5cbiAgICBjb25zdCBkYXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgZGF0ZVRleHQudGV4dENvbnRlbnQgPSBmb3JlY2FzdERheS5kYXRlO1xuXG4gICAgY29uc3QgY29uZGl0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uZGl0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ2NvbmRpdGlvbicpO1xuXG4gICAgY29uc3QgY29uZGl0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgY29uZGl0aW9uSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICBjb25kaXRpb25UZXh0LnRleHRDb250ZW50ID0gZm9yZWNhc3REYXkuY29uZGl0aW9uLnRleHQ7XG4gICAgY29uZGl0aW9uSW1nLnNyYyA9IGZvcmVjYXN0RGF5LmNvbmRpdGlvbi5pY29uO1xuICAgIGNvbmRpdGlvbkRpdi5hcHBlbmRDaGlsZChjb25kaXRpb25JbWcpO1xuICAgIGNvbmRpdGlvbkRpdi5hcHBlbmRDaGlsZChjb25kaXRpb25UZXh0KTtcblxuICAgIGNvbnN0IHRlbXBlcmF0dXJlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBmb3JlY2FzdERheURpdi5hcHBlbmRDaGlsZChkYXRlVGV4dCk7XG4gICAgZm9yZWNhc3REYXlEaXYuYXBwZW5kQ2hpbGQoY29uZGl0aW9uRGl2KTtcbiAgICBmb3JlY2FzdERheURpdi5hcHBlbmRDaGlsZCh0ZW1wZXJhdHVyZURpdik7XG5cbiAgICByZXR1cm4gZm9yZWNhc3REYXlEaXY7XG59XG5cbmNvbnN0IGZvcmVjYXN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcmVjYXN0Jyk7XG5cbmV4cG9ydCB7IHVwZGF0ZUZvcmVjYXN0IH07IiwiaW1wb3J0IHsgdXBkYXRlRm9yZWNhc3QgfSBmcm9tIFwiLi9kaXNwbGF5XCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIobG9jYXRpb24sIG51bURheXMpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGNyZWF0ZVJlcXVlc3RVUkwobG9jYXRpb24sIG51bURheXMpKTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVSZXF1ZXN0VVJMKGxvY2F0aW9uLCBudW1EYXlzKSB7XG4gICAgbGV0IHJlcXVlc3RVUkwgPSBcbiAgICAgICAgQVBJX0JBU0VfVVJMICsgXG4gICAgICAgICcvZm9yZWNhc3QuanNvbicgK1xuICAgICAgICAnP2tleT0nICsgQVBJX0tFWSArIFxuICAgICAgICAnJnE9JyArIGxvY2F0aW9uICtcbiAgICAgICAgJyZkYXlzPScgKyBudW1EYXlzO1xuICAgIHJldHVybiByZXF1ZXN0VVJMO1xufTtcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlV2VhdGhlckRhdGEobG9jYXRpb24sIG51bURheXMpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0V2VhdGhlcihsb2NhdGlvbiwgbnVtRGF5cyk7XG4gICAgY29uc3QgZm9yZWNhc3QgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtRGF5czsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0RGF5ID0ge1xuICAgICAgICAgICAgZGF0ZTogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXRlLFxuICAgICAgICAgICAgY29uZGl0aW9uOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5jb25kaXRpb24sXG4gICAgICAgICAgICBtYXh0ZW1wX2M6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1heHRlbXBfYyxcbiAgICAgICAgICAgIG1heHRlbXBfZjogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWF4dGVtcF9mLFxuICAgICAgICAgICAgbWludGVtcF9jOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5taW50ZW1wX2MsXG4gICAgICAgICAgICBtaW50ZW1wX2Y6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1pbnRlbXBfZixcbiAgICAgICAgICAgIGF2Z2h1bWlkaXR5OiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5hdmdodW1pZGl0eSxcbiAgICAgICAgfTtcbiAgICAgICAgZm9yZWNhc3QucHVzaChmb3JlY2FzdERheSk7XG4gICAgfTtcblxuICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0KTtcblxuICAgIHVwZGF0ZUZvcmVjYXN0KGZvcmVjYXN0KTtcbn07XG5cbmNvbnN0IEFQSV9CQVNFX1VSTCA9ICdodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MSc7XG5jb25zdCBBUElfS0VZID0gJzhjMzkzM2Q2MzMyZDQyZTliOTgyMjAxMjgyNDIzMDInO1xuXG5leHBvcnQgeyBoYW5kbGVXZWF0aGVyRGF0YSB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaGFuZGxlV2VhdGhlckRhdGEgfSBmcm9tIFwiLi9yZXF1ZXN0c1wiO1xuXG5oYW5kbGVXZWF0aGVyRGF0YSgnYm9zdG9uJywgMyk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9