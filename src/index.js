async function getWeather(location) {
    const response = await fetch(createRequestURL(location));
}

function createRequestURL(location) {
    let requestURL = 
        API_BASE_URL + 
        '/current.json' +
        '?key=' + API_KEY + 
        '&q=' + location;
    return requestURL;
};

const API_BASE_URL = 'https://api.weatherapi.com/v1';
const API_KEY = '';