//basically from last week with a few additions aka JSON
var canvas;
var ctx;
var x = 50; //was 50
var y = 50; //was 50
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

    //add collectibles...not appearing...
    //does this need to be placed elsewhere
    collectibles1 = new Collectibles(10,10,20,20,"#FFFF37");//maybe make this color orange
    collectibles2 = new Collectibles(5,450,20,20,"#FFFF37");

//also making the green square not move... maybe change the i to a different letter
//or the drawSquare to drawCollectibles
      //array for collectibles
    $.getJSON("data/collectibles.json", function(data) {
        for(var j = 0; j < data.collectibles.length; j++)
        {
            collectiblesArray.push(new Collectibles(data.collectibles[j].x,data.collectibles[j].y, data.collectibles[j].h, data.collectibles[j].w, data.collectibles[j].color));
        }
        //drawCollectibles();
        drawSquare();
    });
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
            break; //stop movement if running into object
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

//collectibles functions
var test3 = collectibleCollide(square1, collectibles1); //square1 colliding with one of the collectibles
var test4 = false;

for(var i = 0; i < collectiblesArray.length; i++)
{
  {
    test4 = collectibleCollide(square1, collectiblesArray[i]);
    if(test4 == false)
      {
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
  if(test3 || test4)
  {

    {
      collectibles++;//check this name
      setCollectible.SetActive(false); //I don't think this is right
    }
      //console.log(test2);
   }
  }
drawSquare();
}


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
//why does the text go away when added?
    ctx.fillStyle = collectibles1.mainColor;
    ctx.fillRect(collectibles1.x, collectibles1.y, collectibles1.width, collectibles1.height);
    ctx.fillStyle = collectibles2.mainColor;
    ctx.fillRect(collectibles2.x, collectibles2.y, collectibles2.width, collectibles2.height);
    //added - do i need to add the other things
    for(var j = 0; j < collectiblesArray.length; j++) //chaged to i to j
    {
        ctx.fillStyle = collectiblesArray[j].mainColor;
        ctx.fillRect(collectiblesArray[j].x, collectiblesArray[j].y, collectiblesArray[j].width, collectiblesArray[j].height);
    }

//this is no longer showing up???
    ctx.font = "30px Arial"; //font of the lives counter
    ctx.fillText("Lives: " + lives, 10, 35); //last two numbers are the coordinates

    ctx.font = "30px Arial"; //font for collectible counter
    ctx.fillText("Collectibles: " + collectibles, 10, 65); //put it below the lives counter
  }


//works for all of the squares
function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );

//collectibles colliding...collectibles not appearing so I'm not sure if this is working
  function collectibleCollided(collectibles1, collectibles2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}

}
