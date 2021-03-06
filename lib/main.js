window.addEventListener("load", function (event) {
    console.log("DOM fully loaded and parsed");
    console.log(new Game());

    const playButton = document.getElementById('play-btn');
    const instructions = document.querySelector('p.instructions');
    const startButton = document.getElementById('start-btn');
    const playerInput = document.querySelector('#word-input');
    const currentWOrd = document.querySelector('#current-word');
    const thorScore = document.querySelector('#thor-score');
    const thanosScore = document.querySelector('#thanos-score');
    const timeDisplay = document.querySelector('#time-left');
    const seconds = document.querySelector('#seconds');


    playButton.addEventListener('click', function(event) {
        console.log(event);
        
        if (instructions.className.includes('hidden')){
            instructions.className = instructions.className.replace('hidden', '');
        } else {
            instructions.className += 'hidden';
        }
    });

    let count = 5;
   
    startButton.addEventListener('click', function(event) {
        var interval = setInterval(function () {
            console.log(--count);
            if(count === 1) {
                clearInterval(interval);

                const showOnStart = document.querySelector('#showOnStart');
                
                if (showOnStart.className.includes('hidden')) {
                    showOnStart.className = showOnStart.className.replace('hidden', '');
                } 
                count = 5;
            }
        }, 400);
    });


    // logo.addEventListener('click', function (event) {
    //     console.log(event);

    //     if (animation.className.includes('hidden')) {
    //         animation.className = animation.className.replace('hidden', '');
    //     } else {
    //         animation.className += 'hidden';
    //     }
    // });

    
});
