
/*//GET A SECRET WORD
let words = ["javascript", "monkey", "amazing", "pancake"];
let word = words[Math.floor(Math.random() * words.length)]

//CREATE AN EMPTY ANSWER ARRAY
let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";

}
let remainingLetters = word.length;

//main game loop
while (remainingLetters > 0) {
    // Game code goes here
    // Show the player their progress
    alert(answerArray.join(" "));
    // Take input from the player
    guess = prompt("guess a single letter or click cancel to end the game.");
    if(guess === null){
        alert("You quit the game. pkease try next time again.");
        break;
    } else if (guess.length !== 1) {
        alert("please enter a single letter");
    }
    // Update answerArray and remainingLetters for every correct guess
    for(let j = 0; j < word.length; j++)
        if(word[j] = guess){
            answerArray[j] = guess;
            remainingLetters--;
        }

}
if(remainingLetters === 0);
alert("congratulations!")
alert(`Thee answer was ${word}`); 

//RANDOM NAME
let words = [
    "money",
    "power",
    "chocolate",
    "flowers"
];
let word = pickWord();

//CREATING ARRAY
let answerArray = [];
setupAnswerArray();
let remainingLetters = word.length;
let guess;
let numberOfGuesses = word.length * 2;

//while loop 
while (remainingLetters > 0 && numberOfGuesses > 0) {
    showPlayerProgress();
    guess = getGuess();
    if (guess === null) {
        guess = prompt("Guess a single letter or click 'Cancel' to quit game.");
        break;
    } else if (guess.length !== 1) {
        alert("Please guess a single letter only");
    } else   {
        var correctGuesses = updateGameState();
        remainingLetters -= correctGuesses;
        guess = guess.toLowerCase();
    }
       

}  
showAnswerAndCongratulatePlayer();

function pickWord() {
    // Return a random word
    return words[Math.floor(Math.random() * words.length)];
}
function setupAnswerArray() {
    // Return the answer array
    for (let i = 0; i < word.lengthength; i++) {
        answerArray[i] = "_";
    }
   
}
function showPlayerProgress() {
    // Use alert to show the player their progress
    alert(answerArray.join(" "));

}
function getGuess() {
    // Use prompt to get a guess
    return prompt("Guess a single letter or click 'Cancel' to quit game.");
}
function updateGameState() {
    // Update answerArray and return a number showing how many
    // times the guess appears in the word so remainingLetters
    // can be updated
    let correctGuesses = 0
    for (let j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            if (answerArray[j] === "_") {
                answerArray[j] = guess;
                correctGuesses++;

            } else {
                alert(`you have already guessed this letter correctly: ${guess}`);
                break;
            }

        }
    }
    return correctGuesses;
}
function showAnswerAndCongratulatePlayer(answerArray) {
    // Use alert to show the answer and congratulate the player
    if (guess === null) {
        alert(`Sorry to see you quit, the answer is... ${word}`);

    } else if (numberOfGuesses === 0 && remainingLetters > 0) {
        alert(`sorry!! you are out of guesses the answer is ${word}`);
    } else {
        alert(`good job ! the answer ${word} is correct`)
    }
}   */


//GET A SECRET WORD
let words = ["coding", "gorgeous", "handsome", "flowers"];
let word = pickWord();

//CREATE AN EMPTY ANSWER ARRAY
let answerArray = [];
setupAnswerArray();

let remainingLetters = word.length;
let guess;
let chances = word.length * 2;
//MAIN GAME LOOP
while (remainingLetters > 0 && chances > 0) {
  // Game code goes here
  // Show the player their progress
  showPlayerProgress();
  // Take input from the player
  guess = getGuess();
  if (guess === null) {
    alert("You quit the game. Please try next time again.");
    break;
  } else if (guess.length !== 1) {
    alert("Please enter a single letter");
  } else {
    // Update answerArray and remainingLetters for every correct guess
    chances--;
    guess = guess.toLowerCase();
    var correctGuesses = updateGameState();
    remainingLetters -= correctGuesses;
  }
}
showAnswerAndCongratulatePlayer();

function pickWord() {
  // Return a random word
  return words[Math.floor(Math.random() * words.length)];
}
function setupAnswerArray() {
  // Return the answer array
  for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }
}
function showPlayerProgress() {
  // Use alert to show the player their progress
  alert(answerArray.join(" "));
}
function getGuess() {
  // Use prompt to get a guess
  return prompt("Guess a single letter or click cancel to end the game. \nYou have " + chances + " guesses left!");
}
function updateGameState() {
  // Update answerArray and return a number showing how many
  // times the guess appears in the word so remainingLetters
  // can be updated
  let corrGuesses = 0;
  for (let j = 0; j < word.length; j++) {
    if (word[j] === guess) {
      if (answerArray[j] === "_") {
        answerArray[j] = guess;
        corrGuesses++;
      } else {
        alert("You have already guessed the letter  " + guess);
        break;
      }
    }
  }
  return corrGuesses;
}
function showAnswerAndCongratulatePlayer() {
  // Use alert to show the answer and congratulate the player
  if (remainingLetters === 0) {
    alert("Congratulations!");
  } 
  if (chances === 0) {
    alert("You ran out of guesses");
  }
  alert(`The answer was ${word}`);
}