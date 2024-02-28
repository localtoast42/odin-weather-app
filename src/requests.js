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

    updateForecast(forecast);
};

const API_BASE_URL = 'https://api.weatherapi.com/v1';
const API_KEY = '8c3933d6332d42e9b98220128242302';

export { handleWeatherData };