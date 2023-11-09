interface WeatherData {
    name: string; // nom ciutat
    main: {
      temp: number; // Temperatura
    };
    weather: {
      main: string;
      description: string; // Descripció del temps
      icon: string;
    }[];
}

interface IconMapping {
  [key: string]: string;
}

function showWeather(): Promise<WeatherData>{
    const options = {
        headers: { 
            'Accept': 'application/json', //a opcions afegim que volem mostrar dades en json.
        },
    };


    return fetch("https://api.openweathermap.org/data/2.5/weather?lat=41.388&lon=2.159&appid=55f9cfa68015e464a801d0da9491c382", options)
    .then(res => res.json())
    .then((weatherData: WeatherData) => {
    console.log(weatherData);
    return weatherData;
    })
    .then((weatherData) => {
        console.log(weatherData);
        return weatherData;
    });
    
}

const weather = document.getElementById("weather")as HTMLElement; 
const weatherIcon = document.getElementById("weather-icon")as HTMLElement; 

document.addEventListener("DOMContentLoaded", () => { //afegim el listener xq quan detecti que es carregui web ja mostri el temps.
    showWeather()
      .then((datos) => {
        if (datos) {
          const kelvin  = 273.15;
          let celsius= (datos.main.temp - kelvin).toFixed(0);

          //mapping d'icons i api + interficie
          const mapping: IconMapping = {
            "01d": "/icons/01d@2x.png",
            "01n": "/icons/01d@2x.png",
            "02d": "/icons/02d@2x.png",
            "02n": "/icons/02d@2x.png",
            "03d": "/icons/03d@2x.png",
            "03n": "/icons/03d@2x.png",
            "04d": "/icons/04d@2x.png",
            "04n": "/icons/04d@2x.png",
            "09d": "/icons/09d@2x.png",
            "09n": "/icons/09d@2x.png",
            "10d": "/icons/10d@2x.png",
            "10n": "/icons/10d@2x.png",
            "11d": "/icons/11d@2x.png",
            "11n": "/icons/11d@2x.png",
            "13d": "/icons/13d@2x.png",
            "13n": "/icons/13d@2x.png",
            "50d": "/icons/50d@2x.png",
            "50n": "/icons/50d@2x.png",
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
