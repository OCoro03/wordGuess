//I want to create a simple array holding my word options. My theme will be popular sitcoms.
const shows = ["friends", "seinfeld", "game of thrones"];
//Now I want to set up variables for randomization and container for current show being used. I will also initiate another var for my score 
let showIndex = Math.floor(Math.random() * shows.length);
let word = shows[showIndex];
// let split = word.split(""); //This var will hold my random word while also splitting it
let lettersRemaining = word.length;
// let wordIndex = 0;
let wins = 0;
let losses = 0;
let guessesRemaining = 6; //This varible will hold the amount of chances the user has to keep guessing 
// let guesses = []; //I also want an array holding my previous letter guesses so the user can keep track of them 

console.log(`Here's my random show: ${word}`);
// console.log(`Here it is split: ${split}`);
// console.log(lettersRemaining);


let answerArray = [];



function renderQuestion() {
    if (showIndex <= (shows.length - 1)) {
        document.querySelector("#currentWord").innerHTML = `<h3>${answerArray}</h3>`;
        for (var i = 0; i < word.length; i++) {
            answerArray[i] = "_";
        }
    } //else {
    //     document.querySelector("#currentWord").innerHTML = `Game Over!\nYour final score is: ${score}`;
    // }
}
//I will now call my function that will render my question
renderQuestion();

// do{
//following function will run when key is typed
document.onkeyup = function (event) {
    //This variable will hold the user's on-click input 
    let userGuess = event.key.toLowerCase();
    console.log(userGuess);

    for (let i = 0; i < word.length; i++) {
        // console.log("Here's my letter " + word.charAt(0));

        let letter = word.charAt(i);
        // while (word.length) {

        if (userGuess === letter) {
            console.log("Your letter matches: " + letter);
            // document.querySelector(`#currentWord`).innerHTML = `${letter}`
            lettersRemaining--;
            answerArray.push(letter);
            console.log(lettersRemaining);
            console.log(answerArray);
            document.querySelector("#currentWord").innerHTML = `<h3>${answerArray}</h3>`;

        } else {
            guessesRemaining--;
        }
    }

}
    // }while (lettersRemaining > 0)
