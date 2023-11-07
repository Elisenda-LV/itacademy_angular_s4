interface WeatherData {
    name: string; // nom ciutat
    main: {
      temp: number; // Temperatura
    };
    weather: {
      main: string;
      description: string; // Descripció del temps
    }[];
}

const weather = document.getElementById("weather")as HTMLElement; 

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

document.addEventListener("DOMContentLoaded", () => { //afegim el listener xq quan detecti que es carregui web ja mostri el temps.
    showWeather()
      .then((datos) => {
        if (weather) {
          const kelvin  = 273.15;
          let celsius= (datos.main.temp - kelvin).toFixed(0);
          weather.innerHTML = datos.name + " " + celsius + "ºC  |  " + datos.weather[0].description;
        }
      })
      .catch((error) => {
        if (weather) {
          weather.innerHTML = "Ups, try again!";
          console.error(error);
        }
      });
  });