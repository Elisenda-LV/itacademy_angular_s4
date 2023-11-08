"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const options = {
    headers: {
        'Accept': 'application/json' //a opcions afegim que volem mostrar dades en json.
    }
};
const newJoke = document.getElementById("card-joke"); //mostra l'acudit nou
let currentJoke = ""; //variable global per guardar el joke actual.
// Funció per generar random jokes:
function randomJokes() {
    const randomApi = Math.random() < 0.5 ? showJoke : showNorris; //random per escollir funció joke si dad o norris, depen de si és més gran o no de 0,50.
    //svgRandom()
    return randomApi();
}
// Button següent acudit:
function nextJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const joke = yield randomJokes();
            if (newJoke) {
                //if per adaptar interface ja que la de norris i dadjoke és diferent.
                let jokeText;
                if ("joke" in joke) {
                    jokeText = joke.joke; // Si es de la API de chistes de papá
                }
                else if ("value" in joke) {
                    jokeText = joke.value; // Si es de la API de Chuck Norris
                }
                else {
                    jokeText = "Unknown joke format";
                }
                newJoke.innerHTML = jokeText;
                currentJoke = jokeText;
            }
        }
        catch (error) { //catch gestió dels errors.
            if (newJoke) {
                newJoke.innerHTML = "Ups, try again!";
                console.error("Error:", error);
                throw error;
            }
        }
        svgRandom();
    });
}
// Joke d'inici
document.addEventListener("DOMContentLoaded", () => {
    randomJokes()
        .then((joke) => {
        if (newJoke) {
            //if per adaptar interface ja que la de norris i dadjoke és diferent.
            let jokeText;
            if ("joke" in joke) {
                jokeText = joke.joke; // Si es de la API dadjokes
            }
            else if ("value" in joke) {
                jokeText = joke.value; // Si es de la API Norris
            }
            else {
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
function addScore(inputId) {
    return __awaiter(this, void 0, void 0, function* () {
        const input = document.getElementById(inputId);
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
    });
}
