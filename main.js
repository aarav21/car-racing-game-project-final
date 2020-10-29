//main.js
// create main canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// event handlers
window.addEventListener("keydown", key_press);

// x and y coordinates for green car
x1 = 200;
y1 = 500;

x2 = 300
y2 = 600

// car height and width
carHeight = 100;
carWidth = 150;

// initialize green car
var greenCar = new Image();
greenCar.src = "./assets/greenCar.png";
greenCar.onload = function () {
    ctx.drawImage(greenCar, x1, y1, carWidth, carHeight);
}

// initialize blue car
var blueCar = new Image();
blueCar.src = "./assets/blueCar.png";
blueCar.onload = function () {
    ctx.drawImage(blueCar, x2, y2, carWidth, carHeight);
}

// initialize background
var background = new Image();
background.src = "./assets/track.png";
background.onload = function () {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
}

/* functions */
function setCanvasBackground() {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
}

function drawGreenCar() {
    ctx.drawImage(greenCar, x1, y1, carWidth, carHeight);
}

function drawBlueCar() {
    ctx.drawImage(blueCar, x2, y2, carWidth, carHeight);
}

function key_press(e) {
    keypressed = e.keyCode;

    // left arrow key
    if (keypressed == '37') {
        moveLeft(e.keyCode);
    }

    // up arrow key
    if (keypressed == '38') {
        moveUp(e.keyCode);
    }

    // right Arrow key
    if (keypressed == '39') {
        moveRight(e.keyCode);
    }

    // down Arrow key
    if (keypressed == '40') {
        moveDown(e.keyCode);
    }

    // Key = 'D'
    if (keypressed == '68') {
        moveRight(e.keyCode)
    }

    // Key = 'S'
    if (keypressed == '83') {
        moveDown(e.keyCode)
    }

    // Key = 'W'
    if (keypressed == '87') {
        moveUp(e.keyCode)
    }

    // Key = 'A'
    if (keypressed == '65') {
        moveLeft(e.keyCode)
    }
}

function moveLeft(key) {
    switch (key) {
        case 65:
            {
                if (x2 > 0) {
                    x2 = x2 - 10;
                    ctx.save();
                    ctx.rotate(10);
                    ctx.restore();
                    setCanvasBackground()
                    drawBlueCar();
                    drawGreenCar();
                }
            }
            break;
        case 37:
            {
                if (x1 > 0) {
                    console.log(key)
                    x1 = x1 - 10;
                    ctx.save();
                    ctx.rotate(10);
                    ctx.restore();
                    setCanvasBackground();
                    drawBlueCar();
                    drawGreenCar();
                }
            }
    }
}

function moveUp(key) {
    switch (key) {
        case 87: // W Key
            {
                if (y2 > 0) {
                    y2 = y2 - 10;
                    setCanvasBackground();
                    drawBlueCar();
                    drawGreenCar();
                }
            }
            break;
       case 38: // Up Arrow Key 
            {
                if (y1 > 0) {
                    y1 = y1 - 10;
                    setCanvasBackground();
                    drawBlueCar();
                    drawGreenCar();
                }
            }
    }
}

function moveRight(key) {
    switch (key) {
        case 68: // D Key
            {
                if (x2 < 650) {
                    x2 = x2 + 10;
                    setCanvasBackground();
                    drawBlueCar();
                    drawGreenCar();
                }
            }
            break;
        case 39: // Right Arrow Key
            {
                if (x1 < 650) {
                    x1 = x1 + 10;
                    setCanvasBackground();
                    drawBlueCar();
                    drawGreenCar();
                }
            }
    }

}

function moveDown(key) {
    switch (key) {
        case 83: // s Key
        {
            if (y2 < 500) {
                y2 = y2 + 10;
                setCanvasBackground();
                drawBlueCar();
                drawGreenCar();
            }
        }
        break;
        case 40: // Down Arrow Key
        {
            if (y1 < 500) {
                y1 = y1 + 10;
                setCanvasBackground();
                drawBlueCar();
                drawGreenCar();
            }
        }
    }
}