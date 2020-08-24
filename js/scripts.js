'use strict';
const myButton = document.getElementById('submitForm');
const weather = document.getElementById('weather')



const getWeather = (cityName) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a057026a79d7d75f7d9af47932463ce1&units=imperial`;

    get(url).then(function (fetchResponse){
        weather.innerHTML = fetchResponse.main.temp + "°";
})
    }
myButton.addEventListener('click', function (e) {
    e.preventDefault();
    const userInput = document.getElementById("cityInput");
    const cityName = userInput.value;
    getWeather(cityName);

});

