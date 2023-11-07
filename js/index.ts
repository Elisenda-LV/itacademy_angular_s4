const options = {
headers: {
    'Accept': 'application/json' //a opcions afegim que volem mostrar dades en json.
  }
}

interface ReportData {//la interface defineix l'estructura de dades que esperem rebre.
  joke: string;
}

const newJoke = document.getElementById("card-joke")as HTMLElement; //mostra l'acudit nou
let currentJoke: string = ""; //variable global per guardar el joke actual.


function showJoke(): Promise<ReportData> { //especifica quin tipus de dades obtindrà la promesa, és per això que l'hem declarat a interface.
  return fetch("https://icanhazdadjoke.com/", options) //afegim options xq fa referencia al header. 
    .then(res => res.json())
    .then((data: ReportData) => {
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


async function nextJoke(){  //async/await x retornar promesa.
  try {
    const joke = await showJoke();
    if (newJoke) {
      newJoke.innerHTML = joke.joke;
      currentJoke = joke.joke
    }
  } catch (error) { //catch gestió dels errors.
    if (newJoke) {
      newJoke.innerHTML = "Ups, try again!";
      console.error("Error:", error);
      throw error;
    }
  }
}

document.addEventListener("DOMContentLoaded", () => { //afegim el listener xq quan detecti que es carregui web ja mostri un acudit.
  showJoke()
    .then((joke) => {
      if (newJoke) {
        newJoke.innerHTML = joke.joke;
      }
    })
    .catch((error) => {
      if (newJoke) {
        newJoke.innerHTML = "Ups, try again!";
        console.error(error);
      }
    });
});

// score

  async function addScore(inputId: string){
    const input = document.getElementById(inputId) as HTMLInputElement;
  
    if (input) {
      const todayDate = new Date().toISOString();
      const valorInput = input.value;
      
      const reportAcudits = {
        joke: {
          joke: currentJoke,
        },
        score: valorInput,
        date: todayDate,
      };
  
      console.log("Report Data:", reportAcudits);
    }
  }
