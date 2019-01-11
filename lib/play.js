const Game = require('./game.js');

class Play extends Game {
    constructor() {
        this.message = '';
        this.points = 0;
        this.countdown = 5;
    }

    displayWords() {
        console.log('Game.pickEasyWords();');
        Game.pickEasyWords();
        let d = new Date();
        start = d.getSeconds();
    }

    //display a random word - call the method in the game. 
    //display a word in every 4 seconds.
    //use getSeconds() or do a countdown.
    
    enterWord() {
        //get a word fr0m the player

        //check the word with the array

        //if the word is right, increment the points by 1

        //if the word is wrong, decrement the word by 1
    }

    

}

module.exports = Words;