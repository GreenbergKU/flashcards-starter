class Turn {
  constructor(guess, currCard) {
    this.guess = guess;
    this.currCard = currCard;
    this.correct = false;
  };
  
  returnGuess() {
    return this.guess;
  };

  returnCard() {
    return this.currCard;
  };

  evaluateGuess() {
    return this.correct = this.currCard.correctAnswer === this.guess;
  };

  giveFeedback() {
    if (this.currCard.id === "cont") {
      return this.correct ? "Go Back Through The Questions You Answered Incorrectly!" : "FLASHCARD SESSION HAS ENDED!"
    } else return this.correct ? "correct!" : "incorrect!";
  };
}

module.exports = Turn;