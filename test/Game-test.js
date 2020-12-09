const chai = require('chai');
const expect = chai.expect;

const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

const Game = require('../src/Game');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Game', function() {
  const game = new Game(prototypeQuestions);

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should except a list of multiple question objects', function() {
    expect(game.allCardsData).to.equal(prototypeQuestions);
  });

  describe('makeDeck', function() {
    it('should be a function', function() {
      expect(game.start).to.be.a('function');
    });

    it('should create instances of card', function() {
      expect(game.deck.deckCards[0]).to.be.an.instanceof(Card);
    });

    it('should return a list of Card objects', function() {
      expect(game.makeDeck().length).to.equal(30);
    });
  });

  describe('start', function() {
    game.start();

    it('should be a function', function() {
      expect(game.start).to.be.a('function');
    });

    it('should create an instance of Deck by creating instances of Card using the Game property: allCardsData', function() {
      expect(game.deck).to.be.an.instanceof(Deck);
    });

    it('should have built-in methods', function() {
      expect(game.deck.countCards()).to.equal(game.deck.deckCards.length);
      expect(game.deck.countCards()).to.equal(game.deck.deckTotal);
    });
      
    it('should create an instance of Round', function() {
      expect(game.currentRound).to.be.an.instanceof(Round);
    });

  });

  describe('printMessage', function() {
    it('should be a function', function() {

      expect(game.printMessage).to.be.a('function');
      expect(game.printMessage(game.deck, game.currentRound)).to.equal(game.welcomeMessage);
      expect(game.welcomeMessage).to.equal(`This is round #${game.currentRound.turnsCount} of FlashCards! You are playing with ${game.deck.countCards()} cards.-----------------------------------------------------------------------`);    
    });
  });

});



