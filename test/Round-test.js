const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round')
const Deck = require('../src/Deck');
const Card = require('../src/Card');

const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Round', function() {
  let deck = new Deck(prototypeQuestions);
  let round = new Round(deck);

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should return a full deck of object instances of Card', function() {
    expect(deck).to.equal(round.deck);
    expect(round.deck.deckCards[0]).to.be.an.instanceof(Card);
  });

  describe('returnCurrentCard', function() {      
    
    it('should be a function', function() {  
      expect(round.returnCurrentCard).to.be.a('function');
    });

    it('should return the first card in the deck', function() {
      expect(round.deck.deckCards[round.turnsCount]).to.equal(round.returnCurrentCard());
    });

  });

  describe('takeTurn', function() {

    it('should be a function', function() {
      expect(round.takeTurn).to.be.a('function');
    });

    it('should increase turnsCount property by 1', function() {

      expect(round.turnsCount).to.equal(0);

      round.takeTurn('array');

      expect(round.turnsCount).to.equal(1);
    });

    it('should update incorrectGuesses by adding the currentCard index when guess is incorrect', function() {
      deck = new Deck(prototypeQuestions);
      round = new Round(deck);
      
      expect(round.incorrectGuesses.length).to.equal(0);
      
      round.takeTurn('array');
      
      expect(round.incorrectGuesses.length).to.equal(1);
      expect(round.incorrectGuesses[0]).to.equal(round.turn.currCard.id);
    });
  });
  
  describe('calculatePercentCorrect', function() {
    deck = new Deck(prototypeQuestions);
    round = new Round(deck);

    it('should be a function', function() {
      expect(round.calculatePercentCorrect).to.be.a('function');
    });

    it('should calculate the percent of correctAnswers', function() {
      round.takeTurn('object');
      round.takeTurn('array');
      round.takeTurn('mutator method');
      round.takeTurn('accessor method');
      round.takeTurn('map()');
      
      expect(round.calculatePercentCorrect()).to.be.a('number');
      expect(round.calculatePercentCorrect()).to.equal(((round.turnsCount - round.incorrectGuesses.length) / round.turnsCount) * 100);
    });
  });

  describe('endRound', function() {
    deck = new Deck(prototypeQuestions);
    round = new Round(deck);

    it('should be a function', function() {
      expect(round.endRound).to.be.a('function');
    });

    it('should replace "NaN" with "0" when no turns have been taken', function() {      
      expect(round.endRound()).to.equal(`** Round over! ** You answered 0% of the questions correctly!`);
    });

    it("should log `** Round over! ** You answered ${round.calculatePercentCorrect()}% of the questions correctly!` with the current percentage of correct answers", function() {

      round.takeTurn('object');
      round.takeTurn('array');
      round.takeTurn('mutator method');
      round.takeTurn('accessor method');
      round.takeTurn('map()');

      expect(round.endRound()).to.equal(`** Round over! ** You answered ${round.calculatePercentCorrect()}% of the questions correctly!`);
    });
  });

});