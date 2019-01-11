document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    console.log(new Game());

    const playButton = document.getElementById('play-btn');
    const instructions = document.querySelector('p.instructions');
    const startButton = document.getElementById('start-btn');


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

    
});
