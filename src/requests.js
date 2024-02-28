import { updateForecast } from "./display";

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
    const forecast = {
        condition: data.condition,
        temp_c: data.temp_c,
        temp_f: data.temp_f,
        feelslike_c: data.feelslike_c,
        feelslike_f: data.feelslike_f,
        humidity: data.humidity,
    }

    updateForecast(forecast);
};

const API_BASE_URL = 'https://api.weatherapi.com/v1';
const API_KEY = '8c3933d6332d42e9b98220128242302';

export { handleWeatherData };