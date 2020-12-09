const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Deck', function() {
  const deck = new Deck(prototypeQuestions);
  
  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceof(Deck);
  });

  describe('makeDeck', function() {
    it('should be a function', function() {
      expect(deck.makeDeck).to.be.a('function');
    });

    it('should create an array of card objects', function() {
      expect(deck.deckCards).to.be.a('array');
      expect(deck.deckCards[0]).to.be.a('object');
      expect(deck.deckCards[0]).to.be.an.instanceof(Card);
      expect(deck.deckCards.length).to.equal(prototypeQuestions.length);
    });
  });

  describe('countCards', function() {

    it('should be a function', function() {
      expect(deck.countCards).to.be.a('function');
    });

    it('should return the correct number of cards', function() {
      expect(deck.countCards()).to.equal(deck.deckCards.length);
    });

    it('should assign the return value to the deckTotal property', function() {
      expect(deck.deckCards.length).to.equal(deck.deckTotal);
    }); 
  });

});