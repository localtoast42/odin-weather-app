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

export { updateForecast };