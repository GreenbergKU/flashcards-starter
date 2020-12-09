const Turn = require('./Turn');

class Round {
  constructor(deck){
    this.deck = deck;
    this.currentCard;
    this.turnsCount = 0;
    this.incorrectGuesses = [];
    this.turn;
  };

  returnCurrentCard() {
    return this.currentCard = this.deck.deckCards[this.turnsCount];
  };

  takeTurn(guess) {
    this.turn = new Turn(guess, this.returnCurrentCard());
    this.turnsCount += 1;
    !this.turn.evaluateGuess() ? this.incorrectGuesses.push(this.turn.currCard.id) : null;
    this.returnCurrentCard();
    return this.turn.giveFeedback();
  };

  calculatePercentCorrect() {
    return ((this.turnsCount - this.incorrectGuesses.length) / this.turnsCount) * 100;
  };

  endRound() {
    let endMessage = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
    return this.turnsCount > 0 ? console.log(endMessage) : console.log(endMessage.replace('NaN', '0'));
  };

};

module.exports = Round;