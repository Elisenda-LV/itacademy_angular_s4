"use strict";
function showWeather() {
    const options = {
        headers: {
            'Accept': 'application/json', //a opcions afegim que volem mostrar dades en json.
        },
    };
    return fetch("https://api.openweathermap.org/data/2.5/weather?lat=41.388&lon=2.159&appid=55f9cfa68015e464a801d0da9491c382", options)
        .then(res => res.json())
        .then((weatherData) => {
        console.log(weatherData);
        return weatherData;
    })
        .then((weatherData) => {
        console.log(weatherData);
        return weatherData;
    });
}
const weather = document.getElementById("weather");
const weatherIcon = document.getElementById("weather-icon");
document.addEventListener("DOMContentLoaded", () => {
    showWeather()
        .then((datos) => {
        if (datos) {
            const kelvin = 273.15;
            let celsius = (datos.main.temp - kelvin).toFixed(0);
            //mapping d'icons i api + interficie
            const mapping = {
                "01d": "/icons/01d@2x.png",
                "01n": "/icons/01d@2x.png",
                "02d": "02d@2x.png",
                "02n": "02d@2x.png",
                "03d": "03d@2x.png",
                "03n": "03d@2x.png",
                "04d": "04d@2x.png",
                "04n": "04d@2x.png",
                "09d": "09d@2x.png",
                "09n": "09d@2x.png",
                "10d": "10d@2x.png",
                "10n": "10d@2x.png",
                "11d": "11d@2x.png",
                "11n": "11d@2x.png",
                "13d": "13d@2x.png",
                "13n": "13d@2x.png",
                "50d": "50d@2x.png",
                "50n": "50d@2x.png",
            };
            if (weatherIcon) {
                const iconCode = datos.weather[0].icon;
                if (mapping[iconCode]) {
                    weatherIcon.style.backgroundImage = `url(${mapping[iconCode]})`;
                }
            }
            if (weather) {
                weather.innerHTML = `  |    ${celsius}ºC`;
            }
        }
    })
        .catch((error) => {
        if (weather) {
            weather.innerHTML = "Ups, try again!";
            console.error(error);
        }
    });
});
