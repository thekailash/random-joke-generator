let joke = document.querySelector("#joke");
let getJokeBtn = document.querySelector("#get-joke-btn");
let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let generatorjoke = () => {
    fetch(url)
    .then(data => data.json())
    .then(result => {
        joke.textContent = result.joke;
    });
    gsap.from("#joke", {
        y:20
    })


}

getJokeBtn.addEventListener("click", ()=>{
  generatorjoke();
})