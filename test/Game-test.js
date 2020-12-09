const chai = require('chai');
const expect = chai.expect;

const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
//const util = require('../src/util');
//const Card = require('../src/Card');
const Game = require('../src/Game');
const Deck = require('../src/Deck');
const Round = require('../src/Round');


describe('Game', function() {
  //const deck = new Deck(prototypeQuestions);
  describe('printMessage', function() {
    it('should be a function', function() {
      let game = new Game;
      let deck = new Deck(prototypeQuestions);
      let round = new Round(deck);

      expect(game.printMessage).to.be.a('function');
      expect(game.printMessage(deck, round)).to.equal(undefined);
      expect(game.welcomeMessage).to.equal(`This is round #${round.turnsCount} of FlashCards! You are playing with ${deck.countCards()} cards.-----------------------------------------------------------------------`);    
    });
  });

});



