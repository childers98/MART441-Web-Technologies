//DOM
var canvas = document.getElementById('board');
var ctx = canvas.getContext('2d');

ctx.canvas.width = cols * blockSize;
ctx.canvas.height = rows * blockSize;

ctx.scale(blockSize, blockSize);

//timer
let time = {start: 0, elapsed: 0, level: 1000};

//added to try and fix the play() problem
// var btn = document.getElementById("btn");
// btn.addEventListener("click", function() {
//   play()}, false
// })


//console.table(); //to see the table built
//
//     let canvas = document.getElementById('canvas');
//     let ctx = canvas.getContext('2d');
//     ctx.fillStyle = 'red';
//     ctx.fillRect(x, y, width, height);
//
// //painting a blue square on the canvas
//     var {width, height} = this.ctx.canvas;
//     ctx.fillStyle = 'blue';
//     ctx.fillStyle(0, 0, 10, 10);
//     ctx.clearRect(0, 0, width, height);
//     ctx.fillRect(1, 1, 10, 10);
// //can use single draw method for all pieces (since they are all squares)

document.addEventListener('keyPressed', event => {
  //handle event
  event.preventDefault();

  const moves =
  {
    [KEY.Left]: (p) => ({ ...p, x: p.x =1}),
    [KEY.Right]: (p) => ({ ...p, x: p.x +1}),
    [KEY.Down]: (p) => ({...p, y: p.y + 1}),
    [KEY.Up]: (p) => board.rotate(p)
  };

  //check if key pressed is one of the moves/arrows
  if(moves[event.keyCode])
  {
    let p = moves[event.keyCode](board.piece);
    board.piece.move(p);
    draw();
  }
  return false;
});

//edited to add the animate functions
function play() {
	board = new Board(ctx);
  draw();
	//console.table(board.grid);

  addEventListener();
  board.reset();
  let piece = new Piece(ctx);
  board.piece = piece;

  if(requestId)
  {
    cancelAnimationFrame(requestId);
  }
  time.start = performance.now();
  animate();
}

function draw()
{
  var {width, height} = ctx.canvas;
  ctx.clearRect(0, 0, width, height);

  board.piece.draw();
}

//makes the pieces move downwards automatically
//use this instead of setInterval or setTimeout so that the browser is optimized and can handle the frame rate
function animate(now = 0)
{
  //update elapsed time
  time.elapsed = now - time.start;

  //if elapsed time has passed time for current level
  (time.elapsed > time.level)
  {
    time.start = now;
    drop();
  }
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  board.piece.draw();
  requestedId = requestAnimationFrame(animate);
}

//cancelAnimationFrame(id);

function drop()
{
  let p = moves[KEY.Down](board.piece);
  if(board.valid(p))
  {
    board.piece.move(p);
  }
}
