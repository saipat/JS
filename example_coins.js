window.onload = function () {

    //create a new Image object and specify the source
    var spriteSheet = new Image();
    spriteSheet.src = "http://i.stack.imgur.com/b0HwN.jpg";


    //define sprite class
    function sprite(options) {

        var that = {},
            frameIndex = 0,
            tickCount = 0,
            moveDown = 0,
            ticksPerFrame = options.ticksPerFrame || 0,
            numberOfFrames = options.numberOfFrames || 1;

        that.context = options.context;
        that.width = options.width;
        that.height = options.height;
        that.image = options.image;
        that.loop = options.loop;

        that.update = function () {

            tickCount += 1;

            if (tickCount > ticksPerFrame) {

                tickCount = 0;

                // If the current frame index is in range
                if (frameIndex < numberOfFrames - 1) {
                    // Go to the next frame
                    frameIndex += 1;
                    moveDown += 2;
                } else {
                    frameIndex = 0;
                }
                if (moveDown === 400) {
                    moveDown = 0;
                }
            }
        };

        that.render = function () {

            // Clear the canvas
            that.context.clearRect(0, 0, that.width, that.height);
            let x = frameIndex * that.width / numberOfFrames;
            let y = 0;

            // Draw the animation
            that.context.drawImage(
                that.image,
                x,
                y,
                that.width / numberOfFrames,
                that.height,
                0,
                moveDown,
                that.width / numberOfFrames,
                that.height
            );

        };

        return that;
    }

    var canvas = document.getElementById("coinAnimation");
    canvas.width = 700;
    canvas.height = 700;

    var coin = new sprite({
        context: canvas.getContext("2d"),
        width: 440,
        height: 700,
        image: spriteSheet,
        numberOfFrames: 10
    });

    function gameLoop() {
        coin.update();
        coin.render();
        window.requestAnimationFrame(gameLoop);
    }

    spriteSheet.addEventListener("load", gameLoop);

};