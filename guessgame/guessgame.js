
/* //statement which checks if the guess is correct 
let secret = 7;
let answer = prompt("please guess the secret number (1-20)");
if (answer == secret) {
    alert ("correct guess! ");
} else {
   alert ("opps , incorrect guess!! lets try again !" );

}


// combining line 2 and 3 
let secret = 7
let answer = prompt("please guess the secret number (1-20)");

//MAIN GAME LOOP
while (answer !== secret) {
    if (answer === null) {
        alert("You quit the game. Please try again next time.");
        break;
    } else if (answer > 20) {
        alert("TOO HIGH! Please enter numbers between (1-20)");
        answer = prompt(" lets try agian , please guess a number (1-20)");

    } else if (answer < 7) {
        alert("your answer is too LOW!");
        answer = prompt(" lets try agian , please guess a number (1-20)");

    } else if (answer > 7) {
        alert("your answer is too HIGH!");
        answer = prompt(" lets try agian , please guess a number (1-20)");
    }
    else {
        alert("WELL DONE ! you have guessed correctly ! the secret number is " + secret);
        break;
    }



} */

// secret random number 
let secret = Math.floor(Math.random() * 20 + 1)
let answer = prompt("please guess the secret number (1-20)");

while (answer !== secret) {
    if (answer === null) {
        alert("You quit the game. Please try again next time.");
        break;
    } else if (answer < secret) {
        alert("your answer is too LOW!");
        answer = prompt(" lets try agian , please guess a number (1-20)");

    } else if (answer > secret) {
        alert("your answer is too HIGH!");
        answer = prompt(" lets try agian , please guess a number (1-20)");
    }
    else {
        alert("WELL DONE ! you have guessed correctly ! the secret number is " + secret);
        break;
    }



} 