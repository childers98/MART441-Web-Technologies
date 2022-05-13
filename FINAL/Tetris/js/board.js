class Board
  {
    constructor(ctx)
    this.ctx = ctx;
    this.grid = this.getEmptyBoard();
    this.piece = new Piece(ctx);
  }
}

getEmptyBoard()
  {
  	return Array.from(
  	{length: rows}, () => Array(cols).fill(0));
  }
}

//floors
isInsideWalls(x, y)
{
  return
  (
    x >= 0 && //left wall
    x < cols && //right wall
    y < rows //floor
  )
}

valid(p)
{
  return p.shape.every((row, dy) => {
    return row.every((value, dx) =>
      value === 0 ||
      this.isInsideWalls(p.x + dx, p.y + dy)
    );
  });
}

//dx and dy represent the coordinates of the 4x4 grid
//p.x, p.y is the upper left corner of the grid
//p.x +dx and p.y " " get the x and y coordinates of the board grid

if(board.valid(p))
{
  board.piece.move(p);
}
//represent empty cells with 0 and occupied cells with integers of 1-7
//represent rows and columns with 2d array, matrix

//hard drop
//press space

const KEY =
{
  Space = 32
}

moves = {
  [KEY.Space]: (p) => ({ ...p, y: p.y + 1})
}

function handleKeyPress(event)
{
  event.preventDefault();

  if(moves[event.keyCode])
  {
    //get new state of p
    let p = moves[event.keyCode](board.piece);

    if(event.keyCode === KEY.Space)
    {
      //hard drop
      while(board.valid(p))
      {
        board.piece.move(p))
        p = moves[KEY.Space](board.piece);
      }
    }

    if(board.valid(p))
    {
      board.piece.move(p);
      draw();
    }
    });
  }
}
