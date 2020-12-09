const util = require('./util');

const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round'); 

class Game {
  constructor(allCardsData) {
    this.allCardsData = allCardsData;
    this.deck;
    this.currentRound;
    this.welcomeMessage;
  };

  printMessage(deck, round) {
    console.log(this.welcomeMessage = `This is round #${round.turnsCount} of FlashCards! You are playing with ${deck.countCards()} cards.-----------------------------------------------------------------------`);
    return this.welcomeMessage;
  };

  printQuestion(round) {
      util.main(round);
  };

  start() {
    this.deck = new Deck(this.makeDeck());
    this.currentRound = new Round(this.deck);
    this.printMessage(this.deck, this.currentRound);
    this.printQuestion(this.currentRound);
  };

  makeDeck() {
    let deck = [];
    this.allCardsData.forEach(card => deck.push(new Card(card.id, card.question, card.answers, card.correctAnswer)));
    return deck;
  };
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