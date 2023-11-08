const options = {
headers: {
    'Accept': 'application/json' //a opcions afegim que volem mostrar dades en json.
  }
}

const newJoke = document.getElementById("card-joke")as HTMLElement; //mostra l'acudit nou
let currentJoke: string = ""; //variable global per guardar el joke actual.

// Funció per generar random jokes:

function randomJokes(): Promise<ReportData | NorrisData> {
  const randomApi = Math.random() < 0.5 ? showJoke : showNorris; //random per escollir funció joke si dad o norris, depen de si és més gran o no de 0,50.
  //svgRandom()
  return randomApi();

}

// Button següent acudit:

async function nextJoke(){  //async/await x retornar promesa.
  try {
    const joke = await randomJokes();
    if (newJoke) {
       //if per adaptar interface ja que la de norris i dadjoke és diferent.
      let jokeText;
      if ("joke" in joke) {
        jokeText = joke.joke; // Si es de la API de chistes de papá
      } else if ("value" in joke) {
        jokeText = joke.value; // Si es de la API de Chuck Norris
      } else {
        jokeText = "Unknown joke format";
      }
      newJoke.innerHTML = jokeText;
      currentJoke = jokeText;
    }
    }catch (error) { //catch gestió dels errors.
    if (newJoke) {
      newJoke.innerHTML = "Ups, try again!";
      console.error("Error:", error);
      throw error;
    }
  }
  svgRandom()
}


// Joke d'inici

document.addEventListener("DOMContentLoaded", () => { //afegim el listener xq quan detecti que es carregui web ja mostri un acudit.
  randomJokes()
    .then((joke) => {
      if (newJoke) {
        //if per adaptar interface ja que la de norris i dadjoke és diferent.
        let jokeText;
      if ("joke" in joke) {
        jokeText = joke.joke; // Si es de la API dadjokes
      } else if ("value" in joke) {
        jokeText = joke.value; // Si es de la API Norris
      } else {
        jokeText = "Unknown joke format";
      }
      newJoke.innerHTML = jokeText;
      currentJoke = jokeText;
      }
    })
    .catch((error) => {
      if (newJoke) {
        newJoke.innerHTML = "Ups, try again!";
        console.error(error);
      }
    });
});


// Scoring dels jokes.

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
