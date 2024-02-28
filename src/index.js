import { handleWeatherData } from "./requests";

const cityInput = document.querySelector('#city');
const zipInput = document.querySelector('#zip');
const submitButton = document.querySelector('button');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (zipInput.value) {
        handleWeatherData(zipInput.value, 3);
    } else if (cityInput.value) {
        handleWeatherData(cityInput.value, 3);
    }
});