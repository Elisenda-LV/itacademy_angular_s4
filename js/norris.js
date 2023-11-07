"use strict";
function showNorris() {
    return fetch('https://api.chucknorris.io/jokes/random', options)
        .then(res => res.json())
        .then((data) => {
        console.log(data);
        currentJoke = data.value;
        return { joke: data.value }; //adaptem a estructura dades joke!! Evitem l'undefined.
    })
        .then()
        .catch((error) => {
        console.error("Error:", error);
        throw error;
    });
}
