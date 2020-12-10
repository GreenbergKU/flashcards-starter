const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round')
const Card = require('../src/Card');
const Game = require('../src/Game')

const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Round', function() {
  let game = new Game(prototypeQuestions);
  game.start();

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(game.currentRound).to.be.an.instanceof(Round);
  });

  it('should return a full deck of object instances of Card', function() {
    expect(game.deck).to.equal(game.currentRound.deck);
    expect(game.currentRound.deck.deckCards[0]).to.be.an.instanceof(Card);
  });

  describe('returnCurrentCard', function() {      
    it('should be a function', function() {  
      expect(game.currentRound.returnCurrentCard).to.be.a('function');
    });

    it('should return the first card in the deck', function() {
      expect(game.currentRound.deck.deckCards[game.currentRound.turnsCount]).to.equal(game.currentRound.returnCurrentCard());
    });
  });

  describe('takeTurn', function() {
    it('should be a function', function() {
      expect(game.currentRound.takeTurn).to.be.a('function');
    });

    it('should increase turnsCount property by 1', function() {

      expect(game.currentRound.turnsCount).to.equal(0);

      game.currentRound.takeTurn('array');

      expect(game.currentRound.turnsCount).to.equal(1);
    });

    it('should update incorrectGuesses by adding the currentCard index when guess is incorrect', function() {
      
      game = new Game(prototypeQuestions);
      game.start();
      
      expect(game.currentRound.incorrectGuesses.length).to.equal(0);
      
      game.currentRound.takeTurn('array');
      
      expect(game.currentRound.incorrectGuesses.length).to.equal(1);
      expect(game.currentRound.incorrectGuesses[0]).to.equal(game.currentRound.turn.currCard.id);
    });
  });
  
  describe('calculatePercentCorrect', function() {
    let game = new Game(prototypeQuestions);
    game.start();

    it('should be a function', function() {
      expect(game.currentRound.calculatePercentCorrect).to.be.a('function');
    });

    it('should calculate the percent of correctAnswers', function() {
      game.currentRound.takeTurn('object');
      game.currentRound.takeTurn('array');
      game.currentRound.takeTurn('mutator method');
      game.currentRound.takeTurn('accessor method');
      
      expect(game.currentRound.calculatePercentCorrect()).to.be.a('number');
      expect(game.currentRound.calculatePercentCorrect()).to.equal((game.currentRound.turnsCount - game.currentRound.incorrectGuesses.length) / game.currentRound.turnsCount * 100);
    });
  });

  describe('endRound', function() {
    let game = new Game(prototypeQuestions);
    game.start();

    it('should be a function', function() {
      expect(game.currentRound.endRound).to.be.a('function');
    });

    it('should replace "NaN" with "0" when no turns have been taken', function() {      
      let message = `** Round #${game.currentRound.roundsNumber} over! ** You answered ${game.currentRound.calculatePercentCorrect()}% of the questions correctly!`;

      expect(game.currentRound.endRound()).to.equal(message);
    });

    it("should log 'endMessage' with the correct percentage of correct answers", function() {

      game.currentRound.takeTurn('object'); //correct
      game.currentRound.takeTurn('array'); //correct
      game.currentRound.takeTurn('mutator method'); //correct
      game.currentRound.takeTurn('accessor method'); //correct

      let message = `** Round #${game.currentRound.roundsNumber} over! ** You answered ${game.currentRound.calculatePercentCorrect()}% of the questions correctly!`;

      expect(game.currentRound.endRound()).to.equal(message);
    });
  });

});