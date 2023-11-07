"use strict";
function showJoke() {
    return fetch("https://icanhazdadjoke.com/", options) //afegim options xq fa referencia al header. 
        .then(res => res.json())
        .then((data) => {
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
