let newPosition = moves[keyCode](oldPosition);

//rotate pieces
rotate(piece)
{
  //clone with JSON
  let p = JSON.parse(JSON.stringify(piece));
  //transpose matrix, p is the piece
  //linear algebra
  for(let y = 0; y < p.shape.length; ++y)
  {
    for(let x = 0; x < y; ++x)
    {
      [p.shape[x][y], p.shape[y][x]] =
      [p.shape[y][x], p.shape[x][y]];
    }
  }

  //reverse the order of columns
  p.shape.forEach(row => row.reverse());
  return p;

}

//make a class for the pieces
class Piece
{
  constructor(ctx)
  {
    this.ctx = ctx;

    var typeId = this.randomizeTetrominoType
    this.shape = Shapes[typeId];
    this.color = Colors[typeId];
    

    this.color = 'blue';
    this.shape = [
      [2, 0, 0]
      [2, 2, 2]
      [0, 0, 0]
    ];

    //starting position
    this.x = 3;
    this.y = 0;
  }
}

//[this.x + x, this.y + y] lets us know the upper left part of the shapes position and therefore the rest of the shapes position on the Board

  draw()
  {
    this.ctx.fillStyle = this.color;
    this.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value > 0)
        {
          this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
        }
      })
    })
  }
}
}

move(p)
{
  this.x = p.x;
  this.y = p.y;
  this.shape = p.shape;
}
