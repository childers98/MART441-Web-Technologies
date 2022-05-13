//set up game board
var gameBoard = document.getElementById(“gameCanvas”); //was snakeboard
var gameBoard_ctx = gameCavas.getContext(“2d);

var boardBorder = 'black';
var boardBackground = 'white';
var snakeCol = 'lightblue';
var snakeBorder = 'darkblue';

let snake = [{x: 200, y: 200}, {x: 190, y: 200}, {x: 180, y: 200}, {x: 170, y: 200}, {x: 160, y: 200}]

//canvas element
var gameBoard = document.getElementById("snakeBoard");
//two dimensional drawing context
var gameBoard_ctx = gameBoard.getContext("2d");
//start the game
main();

function main()
{
  clearCanvas();
  drawSnake();
}

//border
function clearCanvas()
{
  gameBoard_ctx.fillStyle = boardBackground;
  gameBoard_ctx.strokestyle = boardBorder;
  gameBoard_ctx.fillRect(0,0, gameBoard.width, gameBoard.height);
  gameBoard_ctx.strokeRect(0,0, gameBoard.width, gameBoard.height);
}

function drawSnake()
{
  snake.forEach(drawSnakePart)
}

//one snake part
function drawSnakePart(snakePart)
{
  gameBoard_ctx.fillStyle = snakeCol;
  gameBoard_ctx.strokestyle = snakeBorder;
  gameBoard_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
  gameBoard_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}
