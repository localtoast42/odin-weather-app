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
    temperatureDiv.classList.add('temperature');
    const highText = document.createElement('p');
    highText.textContent = 'High';
    const lowText = document.createElement('p');
    lowText.textContent = 'Low';
    const highTemp = document.createElement('p');
    highTemp.textContent = forecastDay.maxtemp_f;
    const lowTemp = document.createElement('p');
    lowTemp.textContent = forecastDay.mintemp_f;
    temperatureDiv.appendChild(highText);
    temperatureDiv.appendChild(lowText);
    temperatureDiv.appendChild(highTemp);
    temperatureDiv.appendChild(lowTemp);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCQUEwQixPQUFPLEVBQUUsYUFBYSxJQUFJLGFBQWE7O0FBRWpFO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkcyQzs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixhQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsSUFBSSx3REFBYztBQUNsQjs7QUFFQTtBQUNBOzs7Ozs7OztVQ3pDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTitDOztBQUUvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0REFBaUI7QUFDekIsTUFBTTtBQUNOLFFBQVEsNERBQWlCO0FBQ3pCO0FBQ0EsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvcmVxdWVzdHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gdXBkYXRlRm9yZWNhc3QoZm9yZWNhc3QpIHtcbiAgICBmb3JlY2FzdERpdi50ZXh0Q29udGVudCA9ICcnO1xuICAgIGZvcmVjYXN0LmZvckVhY2goKGRheSkgPT4ge1xuICAgICAgICBjb25zdCBmb3JlY2FzdERheURpdiA9IGNyZWF0ZUZvcmVjYXN0RGF5KGRheSk7XG4gICAgICAgIGZvcmVjYXN0RGl2LmFwcGVuZENoaWxkKGZvcmVjYXN0RGF5RGl2KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9yZWNhc3REYXkoZm9yZWNhc3REYXkpIHtcbiAgICBjb25zdCBmb3JlY2FzdERheURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcmVjYXN0RGF5RGl2LmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0LWRheScpO1xuXG4gICAgY29uc3QgZGF0ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGRhdGVUZXh0LnRleHRDb250ZW50ID0gZm9ybWF0RGF0ZShmb3JlY2FzdERheS5kYXRlKTtcblxuICAgIGNvbnN0IGNvbmRpdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbmRpdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdjb25kaXRpb24nKTtcblxuICAgIGNvbnN0IGNvbmRpdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IGNvbmRpdGlvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgY29uZGl0aW9uVGV4dC50ZXh0Q29udGVudCA9IGZvcmVjYXN0RGF5LmNvbmRpdGlvbi50ZXh0O1xuICAgIGNvbmRpdGlvbkltZy5zcmMgPSBmb3JlY2FzdERheS5jb25kaXRpb24uaWNvbjtcbiAgICBjb25kaXRpb25EaXYuYXBwZW5kQ2hpbGQoY29uZGl0aW9uSW1nKTtcbiAgICBjb25kaXRpb25EaXYuYXBwZW5kQ2hpbGQoY29uZGl0aW9uVGV4dCk7XG5cbiAgICBjb25zdCB0ZW1wZXJhdHVyZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRlbXBlcmF0dXJlRGl2LmNsYXNzTGlzdC5hZGQoJ3RlbXBlcmF0dXJlJyk7XG4gICAgY29uc3QgaGlnaFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaGlnaFRleHQudGV4dENvbnRlbnQgPSAnSGlnaCc7XG4gICAgY29uc3QgbG93VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsb3dUZXh0LnRleHRDb250ZW50ID0gJ0xvdyc7XG4gICAgY29uc3QgaGlnaFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaGlnaFRlbXAudGV4dENvbnRlbnQgPSBmb3JlY2FzdERheS5tYXh0ZW1wX2Y7XG4gICAgY29uc3QgbG93VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsb3dUZW1wLnRleHRDb250ZW50ID0gZm9yZWNhc3REYXkubWludGVtcF9mO1xuICAgIHRlbXBlcmF0dXJlRGl2LmFwcGVuZENoaWxkKGhpZ2hUZXh0KTtcbiAgICB0ZW1wZXJhdHVyZURpdi5hcHBlbmRDaGlsZChsb3dUZXh0KTtcbiAgICB0ZW1wZXJhdHVyZURpdi5hcHBlbmRDaGlsZChoaWdoVGVtcCk7XG4gICAgdGVtcGVyYXR1cmVEaXYuYXBwZW5kQ2hpbGQobG93VGVtcCk7XG5cbiAgICBmb3JlY2FzdERheURpdi5hcHBlbmRDaGlsZChkYXRlVGV4dCk7XG4gICAgZm9yZWNhc3REYXlEaXYuYXBwZW5kQ2hpbGQoY29uZGl0aW9uRGl2KTtcbiAgICBmb3JlY2FzdERheURpdi5hcHBlbmRDaGlsZCh0ZW1wZXJhdHVyZURpdik7XG5cbiAgICByZXR1cm4gZm9yZWNhc3REYXlEaXY7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xuICAgIGNvbnN0IHNwbGl0RGF0ZSA9IGRhdGUuc3BsaXQoJy0nKTtcblxuICAgIGxldCBtb250aCA9ICcnO1xuXG4gICAgY29uc29sZS5sb2coc3BsaXREYXRlKTtcblxuICAgIHN3aXRjaCAoc3BsaXREYXRlWzFdKSB7XG4gICAgICAgIGNhc2UgJzAxJzpcbiAgICAgICAgICAgIG1vbnRoID0gJ0phbic7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnMDInOlxuICAgICAgICAgICAgbW9udGggPSAnRmViJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcwMyc6XG4gICAgICAgICAgICBtb250aCA9ICdNYXInO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJzA0JzpcbiAgICAgICAgICAgIG1vbnRoID0gJ0Fwcic7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnMDUnOlxuICAgICAgICAgICAgbW9udGggPSAnTWF5JztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcwNic6XG4gICAgICAgICAgICBtb250aCA9ICdKdW4nO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJzA3JzpcbiAgICAgICAgICAgIG1vbnRoID0gJ0p1bCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnMDgnOlxuICAgICAgICAgICAgbW9udGggPSAnQXVnJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcwOSc6XG4gICAgICAgICAgICBtb250aCA9ICdTZXAnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJzEwJzpcbiAgICAgICAgICAgIG1vbnRoID0gJ09jdCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnMTEnOlxuICAgICAgICAgICAgbW9udGggPSAnTm92JztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcxMic6XG4gICAgICAgICAgICBtb250aCA9ICdEZWMnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0ZVN0cmluZyA9IGAke21vbnRofSAke3NwbGl0RGF0ZVsyXX0sICR7c3BsaXREYXRlWzBdfWA7XG5cbiAgICByZXR1cm4gZGF0ZVN0cmluZztcbn1cblxuY29uc3QgZm9yZWNhc3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3QnKTtcblxuZXhwb3J0IHsgdXBkYXRlRm9yZWNhc3QgfTsiLCJpbXBvcnQgeyB1cGRhdGVGb3JlY2FzdCB9IGZyb20gXCIuL2Rpc3BsYXlcIjtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihsb2NhdGlvbiwgbnVtRGF5cykge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goY3JlYXRlUmVxdWVzdFVSTChsb2NhdGlvbiwgbnVtRGF5cykpO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlcXVlc3RVUkwobG9jYXRpb24sIG51bURheXMpIHtcbiAgICBsZXQgcmVxdWVzdFVSTCA9IFxuICAgICAgICBBUElfQkFTRV9VUkwgKyBcbiAgICAgICAgJy9mb3JlY2FzdC5qc29uJyArXG4gICAgICAgICc/a2V5PScgKyBBUElfS0VZICsgXG4gICAgICAgICcmcT0nICsgbG9jYXRpb24gK1xuICAgICAgICAnJmRheXM9JyArIG51bURheXM7XG4gICAgcmV0dXJuIHJlcXVlc3RVUkw7XG59O1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVXZWF0aGVyRGF0YShsb2NhdGlvbiwgbnVtRGF5cykge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyKGxvY2F0aW9uLCBudW1EYXlzKTtcbiAgICBjb25zdCBmb3JlY2FzdCA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1EYXlzOyBpKyspIHtcbiAgICAgICAgY29uc3QgZm9yZWNhc3REYXkgPSB7XG4gICAgICAgICAgICBkYXRlOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRhdGUsXG4gICAgICAgICAgICBjb25kaXRpb246IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmNvbmRpdGlvbixcbiAgICAgICAgICAgIG1heHRlbXBfYzogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWF4dGVtcF9jLFxuICAgICAgICAgICAgbWF4dGVtcF9mOiBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5tYXh0ZW1wX2YsXG4gICAgICAgICAgICBtaW50ZW1wX2M6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1pbnRlbXBfYyxcbiAgICAgICAgICAgIG1pbnRlbXBfZjogZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWludGVtcF9mLFxuICAgICAgICAgICAgYXZnaHVtaWRpdHk6IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmF2Z2h1bWlkaXR5LFxuICAgICAgICB9O1xuICAgICAgICBmb3JlY2FzdC5wdXNoKGZvcmVjYXN0RGF5KTtcbiAgICB9O1xuXG4gICAgY29uc29sZS5sb2coZm9yZWNhc3QpO1xuXG4gICAgdXBkYXRlRm9yZWNhc3QoZm9yZWNhc3QpO1xufTtcblxuY29uc3QgQVBJX0JBU0VfVVJMID0gJ2h0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxJztcbmNvbnN0IEFQSV9LRVkgPSAnOGMzOTMzZDYzMzJkNDJlOWI5ODIyMDEyODI0MjMwMic7XG5cbmV4cG9ydCB7IGhhbmRsZVdlYXRoZXJEYXRhIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBoYW5kbGVXZWF0aGVyRGF0YSB9IGZyb20gXCIuL3JlcXVlc3RzXCI7XG5cbmNvbnN0IGNpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5Jyk7XG5jb25zdCB6aXBJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN6aXAnKTtcbmNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuXG5zdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoemlwSW5wdXQudmFsdWUpIHtcbiAgICAgICAgaGFuZGxlV2VhdGhlckRhdGEoemlwSW5wdXQudmFsdWUsIDMpO1xuICAgIH0gZWxzZSBpZiAoY2l0eUlucHV0LnZhbHVlKSB7XG4gICAgICAgIGhhbmRsZVdlYXRoZXJEYXRhKGNpdHlJbnB1dC52YWx1ZSwgMyk7XG4gICAgfVxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9