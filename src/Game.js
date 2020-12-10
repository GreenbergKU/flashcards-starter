const util = require('./util');

const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');

class Game {
  constructor(allCardsData) {
    this.allCardsData = allCardsData;
    this.deck;
    this.currentRound;
    this.startMessage;
    this.roundNum = 0;
  }

  printMessage(deck, round) {

    this.startMessage = `This is round #${round.roundsNumber} of FlashCards! You are playing with ${deck.countCards()} cards.-----------------------------------------------------------------------`;
    console.log(this.startMessage);
    return this.startMessage;
  }

  printQuestion(round) {
      util.main(round);
  };

  start() {
    this.deck = new Deck(this.makeDeck());
    this.currentRound = new Round(this.deck);
    this.currentRound.addRound(this.roundNum);
    this.printMessage(this.deck, this.currentRound);
    this.printQuestion(this.currentRound);
  };

  makeDeck() {
    let deck = [];
    this.allCardsData.forEach(card => deck.push(new Card(card.id, card.question, card.answers, card.correctAnswer)));
    return deck;
  };

  /*
  newRound() {
    let wrongAnswers = this.currentRound.incorrectGuesses;
    let deckData = [];
    wrongAnswers.forEach(num => deckData.push(this.deck.deckCards.slice((num - 1), 1)));
    this.allCardsData = deckData;
    this.deck = new Deck(this.makeDeck());
    this.currentRound = new Round(this.deck);
    
    console.log('this.deck: ', this.deck);
  }
  */

}

module.exports = Game;

/*
Your Game class should meet these other requirements:

    Should keep track of the currentRound
    Game.start(): method that starts everything
        x Creates Cards
        x Puts Cards in a Deck
        x Creates a new Round using the Deck
        -invokes printMessage to display the message in the CLI
        -invokes printQuestion to kick off our helper functions that allow interaction via the CLI

*/