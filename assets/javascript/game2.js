let hangman = {
	words: ["doublethink",
			"winston",
			"proles",
			"oceania",
			"newspeak",
			"ingsoc",
			"speakwrite",
			"telescreen",
			"thoughtcrime",
			"revolution",
			"julia",
			"oldspeak",
			"brotherhood",
			"facecrime",
			"joycamp"],
	wins: 0,
	guessesRemaining: 15,
	lettersGuessed: [],
	currentWord: null,

	resetGame: function() {
		this.currentWord = this.words[Math.floor(Math.random()*this.words.length)];
		this.guessesRemaining = 15;
		this.lettersGuessed = [];
	},

	printToHTML: function() {
		document.getElementById("wordAppear") = this.currentWord;
		document.getElementById("guessesRemaining") = this.guessesRemaining;
		document.getElementById("lettersGuessed") = this.lettersGuessed;
	}

	// startGame: function() {
	// 	document.onkeyup
	// }

	// wordAppear: function() {
	// 	Math.floor(Math.random();
	// 	document.getElementById("wordAppear") = this.wordAppear;
	// }

}