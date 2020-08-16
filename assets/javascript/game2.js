// $(document).ready(function(){
    //first of all I want to create a variable that will hold an array of shows
    const shows = ['friends', 'dexter', 'game of thrones', 'silicon valley', 'martin'];
    //next I want to randomize the show to user gets 
    let randomize = Math.floor(Math.random() * shows.length);

    let currentShow = shows[randomize];
    $("#currentWord").append(currentShow.toUpperCase());

    let wins = 0;
    let losses = 0;
    let lives = 7;
    //I want to create a var for the users remaining guesses
    let lettersRemaining = currentShow.length;
    //This will post the current word's lenght to the DOM
    $("#wins").append(wins);
    $("#losses").append(losses);
    $("#lettersRemaining").append(lettersRemaining);
    // $("#lives").html(lives);

    document.onkeyup = function(event){
        //this var will hold my user input 
        let userGuess = event.key.toLowerCase();
        // console.log(userGuess);

        $("#lettersGuessed").append(userGuess);
        
        //I want to create a for-loop to go through my current word 
        for(var i = 0; i <= currentShow.length; i++){
            let letter = currentShow.charAt(i);
            console.log(letter);
            
            //Create a if-else statement to crosscheck current word with user guess
            if(userGuess === letter){
                console.log(`Letter matches: ${userGuess}`);
                lettersRemaining--;
                console.log(lettersRemaining);
                $("#lettersRemaining").html(lettersRemaining);

            }else{
                lives--;
                // console.log(lives);
                $("#lives").html(lives);
            }
        } 
    } 
// })