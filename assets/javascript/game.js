let wordBank = ["doublethink", "winston", "proles", "oceania", "newspeak", "ingsoc", "speakwrite", "telescreen", "thoughtcrime", "revolution", "julia", "oldspeak", "brotherhood", "facecrime", "joycamp"];
let score = 0;
let wins = 0;
let guessesRemaining = 15;
let currentWord = wordBank[Math.floor(Math.random()*wordBank.length)];
let lettersUsed = [];
let lettersGuess = lettersUsed.length;
let remainingLetters = currentWord.length;

	// Keeps track of letters used and manages change of array

	updateLetters = function() {
		let wordArray = [];
			for (var i = 0; i < currentWord.length; i++) {
				wordArray[i] = "  ___  ";
			if (lettersUsed.indexOf(currentWord[i]) > -1) {
				console.log(lettersUsed.join());
			}
		}
		document.getElementById("wordAppear").innerHTML = wordArray.join("");
	}

	//TESTING

updateLetters();
console.log(currentWord);

	// START GAME: trigger first hangman when the player presses any key 

	document.onkeyup = function(event) {
		let letter = String.fromCharCode(event.keyCode).toLowerCase();
		
		lettersUsed.push(letter);
		lettersGuess = lettersUsed.length;
		updateLetters();
	}

//need to account for typing same letter more than one time

// populate the correctly guessed letters on the hangman game
	//put letters in correct spot locations

// count the number of wins that a play has during the session

	//start at 0 and add one per time that a user completes the puzzle before the 
	//max number of guesses is over

// count the number of guesses remaining

	//start at 15 and then decrease by one with each guess
	//decreased regardless of whether or not the guess was correct

// list the letters already guessed

	//list all letters that player types on keyboard
	//include letters guessed correctly

// trigger choosing another word when the play wins or loses the game

	//if
		//a. max number of guess = 0 and puzzle is not solved
			//then trigger new word
		//b. puzzle is solved
			//then trigger new word AND add 1 to wins