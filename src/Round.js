const Turn = require('./Turn');
//*** additional rounds ***
const Game = require('./Game');
const data = require('./data');
const prototypeContinue = data.prototypeContinueCard;
//const continueGame = new Game(prototypeContinue);

class Round {
  constructor(deck){
    this.deck = deck;
    this.currentCard;
    this.turnsCount = 0;
    this.roundsNumber = 0;
    this.incorrectGuesses = [];
    this.turn;

    this.playAgain;
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
    let endMessage = `** Round #${this.roundsNumber} over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
    this.turnsCount > 0 ? console.log(endMessage) : console.log(endMessage.replace('NaN', '0'));
    this.playAgain = true;
    return endMessage
  };

  addRound(num) {
    console.log('BEFORE: ');
    console.log("num", num);
    console.log('this.roundNumber: ', this.roundNumber);
    
    num += 1;
    this.roundNumber = num;
    
    console.log('AFTER: ');
    console.log("num", num);
    console.log('this.roundNumber: ', this.roundNumber);
  };

};

module.exports = Round;