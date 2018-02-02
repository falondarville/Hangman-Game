let wordBank = ["doublethink", "winston", "proles", "oceania", "newspeak", "ingsoc", "speakwrite", "telescreen", "thoughtcrime", "revolution", "julia", "oldspeak", "brotherhood", "facecrime", "joycamp"];
let score = 0;
let wins = 0;
let guessesRemaining = 15;
let currentWord = wordBank[Math.floor(Math.random()*wordBank.length)];
let lettersUsed = [];
let lettersGuess = lettersUsed.length;
let remainingLetters = currentWord.length;

	// 1. Generates blank wordArray based on random word picked by computer
	// 2. Adds guessed letters to blank array spaces
	// 3. Print game statistics to user interface
	// 4. Adds wins

updateLetters = function() {
	let correctLetters = 0;
	let wordArray = [];
	for (var i = 0; i < currentWord.length; i++) {
		wordArray[i] = "  ___  ";
		if (lettersUsed.indexOf(currentWord[i]) > -1) {
			wordArray[i] = currentWord[i];
			correctLetters++;
		}
	if (correctLetters === currentWord.length) {
		currentWord = wordBank[Math.floor(Math.random()*wordBank.length)];
		lettersUsed = [];
		wordArray = [];
		guessesRemaining = 15;
		wins++;
	document.getElementById("wordAppear").innerHTML = wordArray.join("");
	updateLetters();
	}
}
	document.getElementById("wordAppear").innerHTML = wordArray.join("");
	document.getElementById("lettersGuessed").innerHTML = lettersUsed;
	document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
	document.getElementById("wins").innerHTML = wins;
}

updateLetters();
console.log(currentWord);

	// 1. Triggers start of the game when user presses any key
	// 2. Resets lettersUsed and guessesRemaining when player has guessed max letters (15)
	// 3. Calculates guessesRemaining

// SOLVE: game reset is not automatically updating after 15 guesses or win. onkeyup applies. 
// SOLVE: game needs to only accept letters that are letters and not symbols

document.onkeyup = function(event) {
	if (lettersGuess === 15) {
		currentWord = wordBank[Math.floor(Math.random()*wordBank.length)];
		lettersUsed = [];
		guessesRemaining = 15;	
	} else {
		let letter = String.fromCharCode(event.keyCode).toLowerCase();
		if (lettersUsed.indexOf(letter) == -1) {
			lettersUsed.push(letter);
			guessesRemaining--;
		}
		lettersGuess = lettersUsed.length;
	}
	updateLetters();
}

