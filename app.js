const jokeElement = document.querySelector("#joke");
const authorElement = document.querySelector("#author");
const newJokeBtn = document.getElementById("new__joke");
let twitterShare = document.querySelector(".twitter-share-button");


console.log(twitterShare.href)

const fetJokes = () => {

const random = Math.floor(Math.random() * 801);

fetch("https://jacintodesign.github.io/quotes-api/data/quotes.json")
.then( response => response.json())
.then(jokes => {
    if(jokes.length == 0) {
        jokeElement.textContent = "LOADINGGGGG"
    } else {
        jokeElement.textContent = jokes[random].text;
        authorElement.textContent = `By: ${jokes[random].author}`;
        twitterShare.href = `https://twitter.com/intent/tweet?text=${jokeElement.textContent} ${authorElement.textContent}`;
    }
});

}
fetJokes();

newJokeBtn.addEventListener('click', fetJokes);
