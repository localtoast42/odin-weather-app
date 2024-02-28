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
    dateText.textContent = formatDate(forecastDay.date);

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

function formatDate(date) {
    const splitDate = date.split('-');

    let month = '';

    console.log(splitDate);

    switch (splitDate[1]) {
        case '01':
            month = 'Jan';
            break;
        case '02':
            month = 'Feb';
            break;
        case '03':
            month = 'Mar';
            break;
        case '04':
            month = 'Apr';
            break;
        case '05':
            month = 'May';
            break;
        case '06':
            month = 'Jun';
            break;
        case '07':
            month = 'Jul';
            break;
        case '08':
            month = 'Aug';
            break;
        case '09':
            month = 'Sep';
            break;
        case '10':
            month = 'Oct';
            break;
        case '11':
            month = 'Nov';
            break;
        case '12':
            month = 'Dec';
            break;
    }

    const dateString = `${month} ${splitDate[2]}, ${splitDate[0]}`;

    return dateString;
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


const cityInput = document.querySelector('#city');
const zipInput = document.querySelector('#zip');
const submitButton = document.querySelector('button');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (zipInput.value) {
        (0,_requests__WEBPACK_IMPORTED_MODULE_0__.handleWeatherData)(zipInput.value, 3);
    } else if (cityInput.value) {
        (0,_requests__WEBPACK_IMPORTED_MODULE_0__.handleWeatherData)(cityInput.value, 3);
    }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsT0FBTyxFQUFFLGFBQWEsSUFBSSxhQUFhOztBQUVqRTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RGMkM7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsYUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLElBQUksd0RBQWM7QUFDbEI7O0FBRUE7QUFDQTs7Ozs7Ozs7VUN6Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04rQzs7QUFFL0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNERBQWlCO0FBQ3pCLE1BQU07QUFDTixRQUFRLDREQUFpQjtBQUN6QjtBQUNBLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL3JlcXVlc3RzLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHVwZGF0ZUZvcmVjYXN0KGZvcmVjYXN0KSB7XG4gICAgZm9yZWNhc3REaXYudGV4dENvbnRlbnQgPSAnJztcbiAgICBmb3JlY2FzdC5mb3JFYWNoKChkYXkpID0+IHtcbiAgICAgICAgY29uc3QgZm9yZWNhc3REYXlEaXYgPSBjcmVhdGVGb3JlY2FzdERheShkYXkpO1xuICAgICAgICBmb3JlY2FzdERpdi5hcHBlbmRDaGlsZChmb3JlY2FzdERheURpdik7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvcmVjYXN0RGF5KGZvcmVjYXN0RGF5KSB7XG4gICAgY29uc3QgZm9yZWNhc3REYXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JlY2FzdERheURpdi5jbGFzc0xpc3QuYWRkKCdmb3JlY2FzdC1kYXknKTtcblxuICAgIGNvbnN0IGRhdGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBkYXRlVGV4dC50ZXh0Q29udGVudCA9IGZvcm1hdERhdGUoZm9yZWNhc3REYXkuZGF0ZSk7XG5cbiAgICBjb25zdCBjb25kaXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25kaXRpb25EaXYuY2xhc3NMaXN0LmFkZCgnY29uZGl0aW9uJyk7XG5cbiAgICBjb25zdCBjb25kaXRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBjb25kaXRpb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgIGNvbmRpdGlvblRleHQudGV4dENvbnRlbnQgPSBmb3JlY2FzdERheS5jb25kaXRpb24udGV4dDtcbiAgICBjb25kaXRpb25JbWcuc3JjID0gZm9yZWNhc3REYXkuY29uZGl0aW9uLmljb247XG4gICAgY29uZGl0aW9uRGl2LmFwcGVuZENoaWxkKGNvbmRpdGlvbkltZyk7XG4gICAgY29uZGl0aW9uRGl2LmFwcGVuZENoaWxkKGNvbmRpdGlvblRleHQpO1xuXG4gICAgY29uc3QgdGVtcGVyYXR1cmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGZvcmVjYXN0RGF5RGl2LmFwcGVuZENoaWxkKGRhdGVUZXh0KTtcbiAgICBmb3JlY2FzdERheURpdi5hcHBlbmRDaGlsZChjb25kaXRpb25EaXYpO1xuICAgIGZvcmVjYXN0RGF5RGl2LmFwcGVuZENoaWxkKHRlbXBlcmF0dXJlRGl2KTtcblxuICAgIHJldHVybiBmb3JlY2FzdERheURpdjtcbn1cblxuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG4gICAgY29uc3Qgc3BsaXREYXRlID0gZGF0ZS5zcGxpdCgnLScpO1xuXG4gICAgbGV0IG1vbnRoID0gJyc7XG5cbiAgICBjb25zb2xlLmxvZyhzcGxpdERhdGUpO1xuXG4gICAgc3dpdGNoIChzcGxpdERhdGVbMV0pIHtcbiAgICAgICAgY2FzZSAnMDEnOlxuICAgICAgICAgICAgbW9udGggPSAnSmFuJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcwMic6XG4gICAgICAgICAgICBtb250aCA9ICdGZWInO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJzAzJzpcbiAgICAgICAgICAgIG1vbnRoID0gJ01hcic7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnMDQnOlxuICAgICAgICAgICAgbW9udGggPSAnQXByJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcwNSc6XG4gICAgICAgICAgICBtb250aCA9ICdNYXknO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJzA2JzpcbiAgICAgICAgICAgIG1vbnRoID0gJ0p1bic7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnMDcnOlxuICAgICAgICAgICAgbW9udGggPSAnSnVsJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcwOCc6XG4gICAgICAgICAgICBtb250aCA9ICdBdWcnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJzA5JzpcbiAgICAgICAgICAgIG1vbnRoID0gJ1NlcCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnMTAnOlxuICAgICAgICAgICAgbW9udGggPSAnT2N0JztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcxMSc6XG4gICAgICAgICAgICBtb250aCA9ICdOb3YnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJzEyJzpcbiAgICAgICAgICAgIG1vbnRoID0gJ0RlYyc7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCBkYXRlU3RyaW5nID0gYCR7bW9udGh9ICR7c3BsaXREYXRlWzJdfSwgJHtzcGxpdERhdGVbMF19YDtcblxuICAgIHJldHVybiBkYXRlU3RyaW5nO1xufVxuXG5jb25zdCBmb3JlY2FzdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdCcpO1xuXG5leHBvcnQgeyB1cGRhdGVGb3JlY2FzdCB9OyIsImltcG9ydCB7IHVwZGF0ZUZvcmVjYXN0IH0gZnJvbSBcIi4vZGlzcGxheVwiO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGxvY2F0aW9uLCBudW1EYXlzKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChjcmVhdGVSZXF1ZXN0VVJMKGxvY2F0aW9uLCBudW1EYXlzKSk7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlUmVxdWVzdFVSTChsb2NhdGlvbiwgbnVtRGF5cykge1xuICAgIGxldCByZXF1ZXN0VVJMID0gXG4gICAgICAgIEFQSV9CQVNFX1VSTCArIFxuICAgICAgICAnL2ZvcmVjYXN0Lmpzb24nICtcbiAgICAgICAgJz9rZXk9JyArIEFQSV9LRVkgKyBcbiAgICAgICAgJyZxPScgKyBsb2NhdGlvbiArXG4gICAgICAgICcmZGF5cz0nICsgbnVtRGF5cztcbiAgICByZXR1cm4gcmVxdWVzdFVSTDtcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZVdlYXRoZXJEYXRhKGxvY2F0aW9uLCBudW1EYXlzKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFdlYXRoZXIobG9jYXRpb24sIG51bURheXMpO1xuICAgIGNvbnN0IGZvcmVjYXN0ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bURheXM7IGkrKykge1xuICAgICAgICBjb25zdCBmb3JlY2FzdERheSA9IHtcbiAgICAgICAgICAgIGRhdGU6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF0ZSxcbiAgICAgICAgICAgIGNvbmRpdGlvbjogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkuY29uZGl0aW9uLFxuICAgICAgICAgICAgbWF4dGVtcF9jOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5tYXh0ZW1wX2MsXG4gICAgICAgICAgICBtYXh0ZW1wX2Y6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1heHRlbXBfZixcbiAgICAgICAgICAgIG1pbnRlbXBfYzogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWludGVtcF9jLFxuICAgICAgICAgICAgbWludGVtcF9mOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5taW50ZW1wX2YsXG4gICAgICAgICAgICBhdmdodW1pZGl0eTogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkuYXZnaHVtaWRpdHksXG4gICAgICAgIH07XG4gICAgICAgIGZvcmVjYXN0LnB1c2goZm9yZWNhc3REYXkpO1xuICAgIH07XG5cbiAgICBjb25zb2xlLmxvZyhmb3JlY2FzdCk7XG5cbiAgICB1cGRhdGVGb3JlY2FzdChmb3JlY2FzdCk7XG59O1xuXG5jb25zdCBBUElfQkFTRV9VUkwgPSAnaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEnO1xuY29uc3QgQVBJX0tFWSA9ICc4YzM5MzNkNjMzMmQ0MmU5Yjk4MjIwMTI4MjQyMzAyJztcblxuZXhwb3J0IHsgaGFuZGxlV2VhdGhlckRhdGEgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGhhbmRsZVdlYXRoZXJEYXRhIH0gZnJvbSBcIi4vcmVxdWVzdHNcIjtcblxuY29uc3QgY2l0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHknKTtcbmNvbnN0IHppcElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ppcCcpO1xuY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG5cbnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh6aXBJbnB1dC52YWx1ZSkge1xuICAgICAgICBoYW5kbGVXZWF0aGVyRGF0YSh6aXBJbnB1dC52YWx1ZSwgMyk7XG4gICAgfSBlbHNlIGlmIChjaXR5SW5wdXQudmFsdWUpIHtcbiAgICAgICAgaGFuZGxlV2VhdGhlckRhdGEoY2l0eUlucHV0LnZhbHVlLCAzKTtcbiAgICB9XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=