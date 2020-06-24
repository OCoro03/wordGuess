
//following function will run when key is typed
document.onkeyup = function (event) {
    console.log(event.key);
    let letter = event.key.toLowerCase();
    document.getElementById("#lettersGuessed").innerHTML = "test";
} 