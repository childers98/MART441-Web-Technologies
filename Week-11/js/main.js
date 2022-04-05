var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
//anywhere between 500 and 500
var x = 75;
var y = 75;
var x2 = 50;
var y2 = 100;
var x3 = 250;
var y3 = 250;
var x4 = 200;
var y4 = 200;

var square1;
var square2;
var square3;
var square4;

createSquares(); //create squares before drawing
drawSquare(); //display squares

setInterval(moveMaroonSquare, 3000); //timeer for when the 2nd square moves
setInterval(moveRedSquare, 2000);

//create instances of squares
function createSquares() {
    square1 = new Square(x, y, 25, 25, "#581845"); //plum
    square2 = new Square(x2, y2, 50, 50, "#900C3F"); //maroon
    //added these two squares
    square3 = new Square(x3, y3, 100, 50, "#FF5733"); //orange
    square4 = new Square(x4, y4, 75, 75, "#C70039"); //red
    //coordinates on canvas, square size, color code/name("violet")
}

//move square(s) around canvas
//marron square
function moveMaroonSquare() {
    square2.setX(Math.floor(Math.random() * canvas.width));
    square2.setY(Math.floor(Math.random() * canvas.height));
    drawSquare();
}
//orange
function moveRedSquare() {
    square3.setX(Math.floor(Math.random() * canvas.width));
    square3.setY(Math.floor(Math.random() * canvas.height));
    drawSquare();
}


// this function just draws the squares to the canvas in their respective locations
function drawSquare() {
    ctx.clearRect(0, 0, 500, 500); //canvas width and height
    //plum
    ctx.fillStyle = square1.theColor;
    ctx.fillRect(square1.theX, square1.theY, square1.theWidth, square1.theHeight);
    //"Maroon" square
    ctx.fillStyle = square2.theColor;
    ctx.fillRect(square2.theX, square2.theY, square2.theWidth, square2.theHeight);
    //added
    ctx.fillStyle = square3.theColor;
    ctx.fillRect(square3.theX, square3.theY, square3.theWidth, square3.theHeight);
    ctx.fillStyle = square4.theColor;
    ctx.fillRect(square4.theX, square4.theY, square4.theWidth, square4.theHeight);
}

//jQuery for buttons to move
$(document).ready(function () {
    $(this).keypress(function (event) {
        getKey(event);
    });
});

// this function checks which key was pressed
function getKey(event) {

    // only checking collision when a key is pressed
    var didCollide = hasCollided(square1, square2, square3, square4); //added colliders for the 3rd and 4th square
    // if a collision happens
    if (didCollide) {
        // change the background color

        canvas.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
        // change the size of the squares
        square1.setWidth(square1.theWidth - .5);
        square1.setHeight(square1.theHeight - .5);
        square2.setWidth(square2.theWidth + 1);
        square2.setHeight(square2.theHeight + 1);

        //added - there sizes change but not when square1 hits them
        square3.setWidth(square3.theWidth - 1);
        square3.setHeight(square3.theHeight + 1);
        square4.setWidth(square4.theWidth + 1);
        square4.setHeight(square4.theHeight - 1);
    }

    // move the first square depending on what key was pressed
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if (actualLetter == "w") {
        moveUp();
    } else if (actualLetter == "s") {
        moveDown();
    } else if (actualLetter == "d") {
        moveRight();
    } else if (actualLetter == "a") {
        moveLeft();
    }
    drawSquare(); //have to draw the squares again
}

function moveUp() {
    square1.setY(square1.theY - 10); //move upwards aka change the y
}
function moveDown() {
    square1.setY(square1.theY + 10); //move down by adding to the y
}
function moveLeft() {
    square1.setX(square1.theX - 10); //move left, subtract from x
}
function moveRight() {
    square1.setX(square1.theX + 10); //move right by adding to the x
}

// this is a basic collision function that checks for corners overlapping
function hasCollided(object1, object2, object3, obejct4) {
    return !(
        //maroon
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))

        // //orange
        // ((object1.y + object1.height) < (object3.y)) ||
        // (object1.y > (object3.y + object3.height)) ||
        // ((object1.x + object1.width) < object3.x) ||
        // (object1.x > (object3.x + object3.width))
        //
        // //red
        // ((object1.y + object1.height) < (object4.y)) ||
        // (object1.y > (object4.y + object4.height)) ||
        // ((object1.x + object1.width) < object4.x) ||
        // (object1.x > (object4.x + object4.width))
    );
}

function borderCollided(object1, object2, object3){
  return !(
    object1 > (canvas.height-15 || canvas.height+15)
      // ((object1.y + object1.height) < (canvas.height-15)) ||
      // (object1.y > (canvas.height-15)) ||
      // ((object1.x + object1.width) < canvas.width-15) ||
      // (object1.x > (canvas.width-15))
    )
  }

  // canvas.width
  // canvas.height
