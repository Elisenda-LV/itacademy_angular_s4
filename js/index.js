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
let currentJoke = ""; //array per guardar el joke actual.
function showJoke() {
    return fetch("https://icanhazdadjoke.com/", options) //afegim options xq fa referencia al header. 
        .then(res => res.json())
        .then((data) => {
        console.log(data);
        currentJoke = data.joke;
        return data;
    })
        .then()
        .catch((error) => {
        console.error("Error:", error);
        throw error;
    });
}
function nextJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const joke = yield showJoke();
            if (newJoke) {
                newJoke.innerHTML = joke.joke;
                currentJoke = joke.joke;
            }
        }
        catch (error) { //catch gestió dels errors.
            if (newJoke) {
                newJoke.innerHTML = "Ups, try again!";
                console.error("Error:", error);
                throw error;
            }
        }
    });
}
document.addEventListener("DOMContentLoaded", () => {
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
