const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

//const Card = require('./Card');
//const Deck = require('./Deck');
//const Round = require('./Round'); 

class Game {
  constructor() {
    this.welcomeMessage;
  };

  printMessage(deck, round) {
      
    console.log(this.welcomeMessage = `This is round #${round.turnsCount} of FlashCards! You are playing with ${deck.countCards()} cards.-----------------------------------------------------------------------`);
  };

  printQuestion(round) {
      util.main(round);
  };
}

module.exports = Game;