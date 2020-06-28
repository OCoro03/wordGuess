//I want to create a simple array holding my word options. My theme will be popular sitcoms.
let shows = ["friends", "seinfeld", "game of thrones"];
//Now I want to set up variables for randomization and container for current show being used. I will also initiate another var for my score 
let showIndex = Math.floor(Math.random() * shows.length);
let word = shows[showIndex];
let score = 0;

console.log(`Here's my random show: ${word}`);

function renderQuestion() {
    if (showIndex <= (shows.length - 1)) {
        document.querySelector("#currentWord").innerHTML = `<h3>${shows[showIndex].toUpperCase()}</h3>`;
    } else {
        document.querySelector("#currentWord").innerHTML = `Game Over!\nYour final score is: ${score}`;
    }
}

//I will now call my question function to display the current word 
renderQuestion();

//following function will run when key is typed
document.onkeyup = function (event) {
    //This variable will hold the user's on-click input 
    let userGuess = event.key.toLowerCase();
    console.log(userGuess);

    let newLetter;

    for (let i = 0; i < word.length; i++) {
        // console.log(word + " Here's my word");
        // console.log("Here's my letter " + word.charAt(0));
        let split = word.split("");
        console.log(split + " Here is my word split");

        let letter = word.charAt(i);
        while (condition) {

            if (userGuess === letter) {
                console.log("Your letter matches: " + letter);

            }
        };
        // if(letter === userGuess){
        //     console.log(`Here's your letter ${letter}`);

        // }
        // newLetter = letter;

    }
    // console.log("new letter: " + newLetter);

    //Create a for-loop that keeps track of my word and will cross check each of the letters one by one d5
    // document.getElementById("#lettersGuessed").innerHTML = "test";
} 