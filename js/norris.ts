interface NorrisData {
    joke: string;
}

function showNorris(){
    return fetch ('https://api.chucknorris.io/jokes/random',options)
    .then(res => res.json())
    .then((data: NorrisData) => {
        console.log(data);
        return data; 
      })
      .then()
      .catch((error) => {
        console.error("Error:", error);
        throw error;
      });
}