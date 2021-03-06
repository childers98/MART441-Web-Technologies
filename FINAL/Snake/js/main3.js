var boardBorder = 'black';
var boardBackground = '#FFE6FD';
var snakeCol = 'lightpink';//change
//careful of spelling
var snakeBorder = '#FF21F1';//change

//score
let score = 0;
//true if changing direction
let changeDirection = false;//changing_direction
//food
let foodX;
let foodY;
//velocity
let dx = 10;
let dy = 0;

//pieces of the snake
let snake =
[
  {x: 200, y: 200},
  {x: 190, y: 200},
  {x: 180, y: 200},
  {x: 170, y: 200},
  {x: 160, y: 200}
]

//canvas element
var board = document.getElementById("board");
var board_ctx = board.getContext("2d");
//start game
main();
generateFood();

document.addEventListener("keydown", direction);  //change_direction

//call main function repeatedly to keep the game running
function main()
{
  if(hasGameEnded()) return;
  changingDirection = false;
  setTimeout(function onTick()
  {
    clearCanvas();//clear_board
    drawFood();
    moveSnake();
    drawSnake();
    main();
  }, 100)
}

//draw border and color
function clearCanvas()
{
  board_ctx.fillStyle = boardBackground;
  board_ctx.strokestyle = boardBorder;
  board_ctx.fillRect(0, 0, board.width, board.height);
  board_ctx.strokeRect(0, 0, board.width, board.height);
}

//draw the snake
function drawSnake()
{
  snake.forEach(drawSnakePart)
}

function drawFood()
{
  board_ctx.fillStyle = '#FFCE21';
  board_ctx.strokestyle = '#FFA019';
  board_ctx.fillRect(foodX, foodY, 10, 10);
  board_ctx.strokeRect(foodX, foodY, 10, 10);
}

function drawSnakePart(snakePart)
{
  board_ctx.fillStyle = snakeCol;
  board_ctx.strokestyle = snakeBorder;
  board_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
  board_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function hasGameEnded()
{
  for(let i = 4; i < snake.length; i++)
  {
    var hasCollided = (snake[i].x === snake[0].x && snake[i].y === snake[0].y)
    if(hasCollided) return true
  }
  var hitLeftWall = snake[0].x < 0;
  var hitRightWall = snake[0].x > board.width - 10;
  var hitTopWall = snake[0].y < 0;
  var hitBottomWall = snake[0].y > board.height - 10;
  return hitTopWall || hitRightWall || hitLeftWall || hitBottomWall
}

function randomFood(min, max)
{
  return Math.round((Math.random() * (max-min) + min) / 10) * 10;
}

function generateFood()
{
  foodX = randomFood(0, board.width - 20);
  foodY = randomFood(0, board.height - 20);
  //food is where snake currently is
  snake.forEach(function hasSnakeEatenFood(part)
  {
    var hasEaten = part.x == foodX && part.y == foodY;
    if(hasEaten) generateFood();
  });
}

//change to awsd?
function direction(event)//changing_direction
{
  const leftKey = 37;
  const rightKey = 39;
  const upKey = 38;
  const downKey = 40;

  //prevent snake from reversing
  if(direction) return; //change_direction
  direction = true; //change_direction
  var keyPressed = event.keyCode;
  var goingUp = dy === -10;
  var goingDown = dy === 10;
  var goingRight = dx === 10;
  var goingLeft = dx === -10;

  if(keyPressed === leftKey && !goingRight)
  {
    dx = -10;
    dy = 0;
  }
  if(keyPressed === upKey && !goingDown)
  {
    dx = 0;
    dy = -10;
  }
  if(keyPressed === rightKey && !goingLeft)
  {
    dx = 10;
    dy = 0;
  }
  if(keyPressed === downKey && !goingUp)
  {
    dx = 0;
    dy = 10;
  }
}

function moveSnake()
{
  var head = {x: snake[0].x + dx, y: snake[0].y + dy};
  snake.unshift(head);
  var hasEatenFood = snake[0].x === foodX && snake[0].y === foodY;
  if(hasEatenFood)
  {
    score += 10;
    document.getElementById('score').innerHTML = score;
    generateFood();
  }
  else
  {
    snake.pop();
  }

  // document.addEventListener("DOMContentLoaded", function ()
  //   {
  //     pTag = document.querySelector("div");
  //     newVal = document.createElement("p");
  //     newVal.innerHTML = '';
  //     pTag.appendChild(newVal);
  //   });
}
