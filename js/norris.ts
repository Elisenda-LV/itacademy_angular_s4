interface NorrisData {
    value: string;
}

function showNorris(){
    return fetch ('https://api.chucknorris.io/jokes/random',options)
    .then(res => res.json())
    .then((data: {value: string}) => {
        console.log(data);
        currentJoke = data.value;
        return {joke: data.value}; //adaptem a estructura dades joke!! Evitem l'undefined.
      })
      .then()
      .catch((error) => {
        console.error("Error:", error);
        throw error;
      });
}