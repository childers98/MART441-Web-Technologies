//basically from last week with a few additions aka JSON
var canvas;
var ctx;
var x = 20; //was 50
var y = 20; //was 50
var square1, square2; //blue and lime square
var collectibles1, collectibles2; //adding collectibles
var direction;
var questions;
var squareArray = [];
var collectiblesArray = []; //added
var lives = 5;  //how many Lives
var collectibles = 0; //zero to start and add to
$(document).ready(function(){
    setup();
    $(this).keypress(function(event){
        getKey(event);
    });
});

function setup()
{
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    // create two objects
    square1 = new Square(25,90,30,30,"#7DFF80"); //green
    square2 = new Square(400,400,90,90,"#F2D5FC"); //light purple
    //might want to move around some of the squares in the information.json

//array for squares (obstacles in this case)
    $.getJSON("data/information.json", function(data) {
        for(var i = 0; i < data.squares.length; i++)
        {
            squareArray.push(new Square(data.squares[i].x,data.squares[i].y, data.squares[i].h, data.squares[i].w, data.squares[i].color));
        }
        drawSquare();
    });

//hmm these are not showing up...
//also making the green square not move... maybe change the i to a different letter
//or the drawSquare to drawCollectibles
    //   collectible1 = new collectibles(475,50,20,20,"#FFFF37"); //maybe make this color orange
    //   collectible2 = new collectibles(480,90,20,20,"#FFFF37");
    //   //array for collectibles
    // $.getJSON("data/collectibles.json", function(data) {
    //     for(var i = 0; i < data.collectibles.length; i++)
    //     {
    //         collectiblesArray.push(new Collectibles(data.collectibles[i].x,data.collectibles[i].y, data.collectibles[i].h, data.collectibles[i].w, data.collectibles[i].color));
    //     }
    //     //drawCollectibles();
    //     drawSquare();
    // });
}


//movement for green square
function getKey(event)
{
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if(actualLetter == "w")
    {
        moveUp();
        direction = "up";
    }
    if(actualLetter == "s")
    {
        moveDown();
        direction = "down";
    }
    if(actualLetter == "a")
    {
        moveLeft();
        direction = "left";
    }
    if(actualLetter == "d")
    {
        moveRight();
        direction = "right";
    }


    var test = hasCollided(square1,square2);
    var test2 = false;
    for(var i = 0; i < squareArray.length; i++)
    {
        test2 = hasCollided(square1,squareArray[i]); //checks to see if square1 has run into any other squares
        if(test2 == true)
        {
            break;
        }
        //console.log(test2);
    }
    if(test || test2)
    {
        lives--;
        if(direction == "left")
        {
            moveRight();
        }
        else if(direction == "right")
        {
            moveLeft();
        }
        else if(direction == "up")
        {
            moveDown();
        }
        else if(direction == "down")
        {
            moveUp();
        }
    }
    drawSquare();
}



//need to add collectible collected function
//add to collectibles number
//make collectible disappear



//movement functions
function moveUp()
{
    square1.y-=10;
}
function moveDown()
{
    square1.y+=10;
}
function moveRight()
{
    square1.x+=10;
}
function moveLeft()
{
    square1.x-=10;
}

function drawSquare()
{
    ctx.clearRect(0,0,500,500); //change to 500 by 500 from 800 by 600
    ctx.fillStyle = square1.mainColor;
    ctx.fillRect(square1.x, square1.y, square1.width, square1.height);
    ctx.fillStyle = square2.mainColor;
    ctx.fillRect(square2.x, square2.y, square2.width, square2.height);
    //this adds the other squares onto the canvas
    for(var i = 0; i < squareArray.length; i++)
    {
        ctx.fillStyle = squareArray[i].mainColor;
        ctx.fillRect(squareArray[i].x, squareArray[i].y, squareArray[i].width, squareArray[i].height);
    }

//added but it makes all of the text disappear
    // ctx.fillStyle = collectible1.mainColor;
    // ctx.fillRect(collectible1.x, collectible1.y, collectible1.width, collectible1.height);
    // ctx.fillStyle = collectible2.mainColor;
    // ctx.fillRect(collectible2.x, collectible2.y, collectible2.width, collectible2.height);
    // //added - do i need to add the other things
    // for(var i = 0; i < collectiblesArray.length; i++)
    // {
    //     ctx.fillStyle = collectiblesArray[i].mainColor;
    //     ctx.fillRect(collectiblesArray[i].x, collectiblesArray[i].y, collectiblesArray[i].width, collectiblesArray[i].height);
    // }


    ctx.font = "30px Arial"; //font of the lives counter
    ctx.fillText("Lives: " + lives, 10, 35); //last two numbers are the coordinates

    ctx.font = "30px Arial"; //font for collectible counter
    ctx.fillText("Collectibles: " + collectibles, 10, 65); //put it below the lives counter

}

//added
// function drawCollectibles()
// {
//     ctx.clearRect(0,0,500,500);
//     ctx.fillStyle
//
// }

//works for all of the squares
function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}
