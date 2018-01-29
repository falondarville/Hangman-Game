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
				wordArray[i] = currentWord[i];
			}
		}

		document.getElementById("wordAppear").innerHTML = wordArray.join("");
		document.getElementById("lettersGuessed").innerHTML = lettersUsed;
		// document.getElementById("guessesRemaining").innerHTML = // code this
		// document.getElementById("wins").innerHTML = // code this
	}

	//once all letters are guessed correctly, wins counter goes up by one

	//TESTING

updateLetters();
console.log(currentWord);

	// START GAME: trigger first hangman when the player presses any key 

	document.onkeyup = function(event) {
		if (lettersGuess === 15) {
			currentWord = wordBank[Math.floor(Math.random()*wordBank.length)];
			lettersUsed = [];
			guessesRemaining = 15;	
			alert("max guesses");
		} else {
			let letter = String.fromCharCode(event.keyCode).toLowerCase();
			if (lettersUsed.indexOf(letter) == -1) {
				lettersUsed.push(letter);
			}
			lettersGuess = lettersUsed.length;
		}
		updateLetters();
	}

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