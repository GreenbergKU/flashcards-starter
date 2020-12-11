const http = require('http');
const Game = require('./src/Game');
const data = require('./src/data');
const prototypeQuestions = data.prototypeData;
const game = Game;
let app = http.createServer();

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');   

// Setup game
setupGame();

function setupGame() {
  game = new Game(prototypeQuestions);
 
  // Start game
  game.start();
};

function checkRedo {
  if(game.currentRound.redo) {
    // if(game.currentRound.findPercentCorrect() < 90) {
      // round.redo = true;
    // };

    setupGame();
  };
};


/*
const http = require('http');
let app = http.createServer();

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');   

const Game = require('./src/Game');
const data = require('./src/data');
const prototypeQuestions = data.prototypeData;

// Setup game
const game = new Game(prototypeQuestions);
//const newRound = 
// Start game
game.start();
*/

