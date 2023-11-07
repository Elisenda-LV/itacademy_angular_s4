interface ReportData {//la interface defineix l'estructura de dades que esperem rebre.
    joke: string;
}

function showJoke(): Promise<ReportData> { //especifica quin tipus de dades obtindrà la promesa, és per això que l'hem declarat a interface.
    return fetch("https://icanhazdadjoke.com/", options) //afegim options xq fa referencia al header. 
      .then(res => res.json())
      .then((data:{ joke: string }) => {
        console.log(data);
        currentJoke = data.joke; //afegim el joke actual per dsp fer scoring. 
        return data; 
      })
      .then()
      .catch((error) => {
        console.error("Error:", error);
        throw error;
      });
  }

  