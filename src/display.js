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

export { updateForecast };