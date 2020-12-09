const Card = require('./Card');

class Deck {
  constructor(cardsData) {
    this.deckCards = this.makeDeck(cardsData);
    this.deckTotal = this.countCards();
  };
    
  makeDeck(cardsData) {
    let deck = [];
    cardsData.forEach(card => deck.push(new Card(card.id, card.question, card.answers, card.correctAnswer)));
    return deck;
  };

  countCards() {
    return this.deckCards.length;
  };
  
}

module.exports = Deck;