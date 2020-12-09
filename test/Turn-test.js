const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  const card = new Card(1, "1 + 1?", [1, 2, 3, 4], 2);
  let guess = 2;
  const turn = new Turn(guess, card);

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });
  
  it("should store a user's answer", function() {
    expect(turn.guess).to.equal(2);
  });
  
  describe('returnGuess', function() {

    it('should be a function', function() {
      expect(turn.returnGuess).to.be.a('function');
    });

    it('should return the guess', function() {
      expect(turn.returnGuess()).to.equal(turn.guess);
    });

  });

  describe('returnCard', function() {

    it('should be a function', function() {
      expect(turn.returnCard).to.be.a('function');
    });

    it('should return an object', function() {
      expect(turn.returnCard()).to.be.a("object");
    });

    it('should return the current Card object', function() {
      expect(turn.returnCard()).to.equal(turn.currCard);
    });

  });

  describe('evaluateGuess', function() {

    it('should be a function', function() {
      expect(turn.evaluateGuess).to.be.a('function');
    });

    it('should return a boolean', function() {
      expect(turn.evaluateGuess()).to.be.a('boolean');
    });

    it('should return the current Card object', function() {
      expect(turn.evaluateGuess()).to.equal(true);
    });
  });

  describe('giveFeedback', function() {
    it('should be a function', function() {
      expect(turn.giveFeedback).to.be.a('function');
    });

    it('should return a string', function() {
      expect(turn.giveFeedback()).to.be.a('string');
    });

    it('should return a string indicating if guess is correct or incorrect', function() {

      turn.evaluateGuess();
      
      expect(turn.currCard.correctAnswer).to.equal(turn.guess);
      expect(turn.giveFeedback()).to.equal("correct!");
    });
  });

});