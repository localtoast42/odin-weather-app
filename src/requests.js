import { updateForecast } from "./display";

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

    updateForecast(forecast);
};

const API_BASE_URL = 'https://api.weatherapi.com/v1';
const API_KEY = '8c3933d6332d42e9b98220128242302';

export { handleWeatherData };