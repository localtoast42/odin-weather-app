async function getWeather(location) {
    const response = await fetch(createRequestURL(location));
    const weatherData = await response.json();
    console.log(weatherData.current);
};

function createRequestURL(location) {
    let requestURL = 
        API_BASE_URL + 
        '/current.json' +
        '?key=' + API_KEY + 
        '&q=' + location;
    return requestURL;
};

const API_BASE_URL = 'https://api.weatherapi.com/v1';
const API_KEY = '8c3933d6332d42e9b98220128242302';

export { getWeather };