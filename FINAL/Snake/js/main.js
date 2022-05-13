//make the snake!!
	let snake = [ {x: 200, y: 200}, {x: 190, y: 200}, {x: 180, y: 200}, {x: 170, y: 200}, {x: 160, y: 200}, ]; //y coordinate is always 200, x-coor decrements of 10 represent the different parts of the snake’s body, first is the head

//set up game board
const gameBoard = document.getElementById(“gameCanvas”); //was snakeboard
const gameBoard_ctx = gameCavas.getContext(“2d);
//start game
main();

//also made this function but did not add to the tutorial
function main()
{
	setTimeout(function on Tick()
	{
		clearCanvas();
		advanceSnake();
		drawSnake();
		//call main again
		main();
	}, 100)
}

//also did this without mention
function clearCanvas()
{
	//selecting items
	gameBoard_ctx.fillStyle = board_background;
	gameBoard_ctx.strokestyle = board_border;
	gameBoard_ctx.fillRect(0, 0, gameBoard.width, gameBoard.height);
	//border
	gameBoard_ctx.strokeRect(0, 0, gameBoard.width, gameBoard.height);
}

//display the snake on the canvas
function drawSnakePart(snakePart)
{
	gameBoard_ctx.fillStyle = ‘lightblue’; //can change these to constant variables
	gameBoard_ctx.strokestyle = ‘darkblue’;
	gameBoard_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
	gameBoard_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

//function that prints the parts
function drawSnake()
{
snake.forEach(drawSnakePart):
}

//make the snake move - called move_snake()
function snakeMovement()
{
	const head = {x: snake[0].x + dx, y: snake[0].y + dy}; //new head
	snake.unshift(head); //add head to the beginning
	const hasEatenFood = snake[0].x === foodX && snake[0].y === foodY;
	if (hasEatenFood) //might need to be a completely new variable
	{
	score += 10;
	document.getElementById(‘score’).innerHTML = score;
	generateFood();
	}
	else
	{
	snake.pop(); //remove last part of snake, I remember this from previous coding
	}
	//move the snake head vertically
	//const head = {x: snake[0].x +dx, y: snake[0].y + dy};
}

//I think this is where this goes??
//not even in the example from the tutorial
//automatic movement - need timeout to show the movement in between steps
/*
setTimeout(function onTick() { clearCanvas(); snakeMovement(); drawSnake();}, 100);
setTimeout(function onTick() { clearCanvas(); snakeMovement(); drawSnake();}, 100);
setTimeout(function onTick() { clearCanvas(); snakeMovement(); drawSnake();}, 100);
setTimeout(function onTick() { clearCanvas(); snakeMovement(); drawSnake();}, 100);
setTimeout(function onTick() { clearCanvas(); snakeMovement(); drawSnake();}, 100);
drawSnake();
*/

//keyboard movements
//might go steal my own functions
function changeDirection(event)
{
	const left_key = 37;
	const right_key = 39;
	const up_key = 38;
	const down_key = 40;

	const keyPressed = event.keyCode;
	const goingUp = dy === -10;
	const goingDown = dy === 10;
	const goingRight = dx === 10;
	const goingLeft = dx === -10;

if (keyPressed === left_key && !goingRight)
{
	dx = -10;
	dy = 0;
}
if (keyPressed === up_key && !goingDown0
{
	dx = 0;
	dy = -10;
}

if (keyPressed === right_key && !goingLeft)
{
	dx = 10;
	dy = 0;
}

if (keyPressed === down_key && !goingUp)
{
	dx = 0;
	dy = 10;
}
}

document.addEventListener(“keydown”, changeDirection)

//adding the boundary
//game ends when snake collides with its body or head collides with the canvas boundary
//titled has_game_ended()
function gameOver()
{
	for (let i = 4; i < snake.length; i++)
	{
	const hasCollided = snake[i].x === snake[0].x && snake[i].y === snake[0].y
	if (hasCollided)
	return true
	}
const hitLeftWall = snake[0].x < 0;
const hitRightWall = snake[0].x > gameBoard.width - 10;
const hitTopWall = snake[0].y &lt; 0;
const hitBottomWall = snake[0].y > gameBoard.height - 10;

return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall
}

//incorporate food and score into the game
//food - random_food and gen_food
function randomFood(min, max)
{
	return Math.round((Math.random() * (max-min) + min) / 10 * 10;
}

function generateFood()
{
foodX = randomFood(0, gameBoard.width - 10);
foodY = randomFood(0, gameBoard.height - 10);
snake.forEach(function hasSnakeEaten(part) {
	const hasEaten = part.x == foodX && part.y == foodY;
	if (hasEaten) generateFood();
});
}

//draw food on the canvas
function drawFood()
{
	gameBoard_ctx.fillStyle = ‘lightgreen’;
	gameBoard_ctx.strokestyle = ‘darkgreen’;
	gameBoard_ctx.fillRect(foodX, foodY, 10, 10);
	gameBoard_ctx.strokeRect(foodX, foodY, 10, 10);
}

//making the snake grow and updating the score  - added to snakeMovement
