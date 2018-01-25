// trigger first hangman when the player presses any key 

	//when user clicks any key --> first puzzle appears
	//one time event per page load
	//populate how many lines/letters are in the word

// count the number of wins that a play has during the session

	//start at 0 and add one per time that a user completes the puzzle before the 
	//max number of guesses is over
	//refreshes with page load?

// count the number of guesses remaining

	//start at 15 and then decrease by one with each guess
	//decreased regardless of whether or not the guess was correct

// list the letters already guessed

	//list all letters that player types on keyboard
	//include letters guessed correctly

// populate the correctly guessed letters on the hangman game

	//put letters in correct spot locations

// trigger choosing another word when the play wins or loses the game

	//if
		//a. max number of guess = 0 and puzzle is not solved
			//then trigger new word
		//b. puzzle is solved
			//then trigger new word AND add 1 to wins