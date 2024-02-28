function updateForecast(forecast) {
    forecastDiv.textContent = '';
    days.forEach((day) => {
        forecastDiv.appendChild(day);
    });
}

const forecastDiv = document.querySelector('.forecast');
const days = [];

for (let i = 0; i < 3; i++) {
    const day = document.createElement('div');
    day.classList.add('day');
    days.push(day);
};

export { updateForecast };