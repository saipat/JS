
class Play extends Game {
    constructor() {
        this.message = '';
        this.points = 0;
        this.countdown = 5;
    }

    displayWords() {
        console.log('Game.pickEasyWord();');
        Game.pickEasyWord();
        let d = new Date();
        start = d.getSeconds();
    }

    //display a random word - call the method in the game file. 
    //display a word in every 4 seconds.
    //use getSeconds() or do a countdown.
    
    enterWord() {
        //get a word from the player

        //check the word with the array

        //if the word is right, increment the points by 1
        //for evry point animate

        //if the word is wrong, decrement the word by 1
        //for evry point animate
    }

   

    

}

