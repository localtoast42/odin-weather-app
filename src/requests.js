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

function handleWeatherData(location) {
    const data = getWeather(location);
    const trimmedWeatherData = data.then(function(response) {
        const weatherData = response.current;
        const trimmedWeatherData = { 
            condition: weatherData.condition,
            temp_c: weatherData.temp_c,
            temp_f: weatherData.temp_f,
            feelslike_c: weatherData.feelslike_c,
            feelslike_f: weatherData.feelslike_f,
            humidity: weatherData.humidity,
        }

        return trimmedWeatherData
    });

    return trimmedWeatherData;
}

const API_BASE_URL = 'https://api.weatherapi.com/v1';
const API_KEY = '8c3933d6332d42e9b98220128242302';

export { handleWeatherData };