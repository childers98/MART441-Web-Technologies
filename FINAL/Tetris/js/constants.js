const cols = 10;
const rows = 20;
const blockSize = 30;

//enum or enumeration is a special type used to define collections of constants
const KEY =
{
  Left: 37,
  Up: 38,
  Right: 39,
  Down: 40
}

object.freeze(KEY); //have to use strict mode for this to work, also only works if we don't have an array or object inside of our object

const COLORS =
  ['cyan',
  'blue',
  'orange',
  'yellow',
  'green',
  'purple',
  'red'];

  const SHAPES =
    [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [2, 0, 0],
      [2, 2, 2],
      [0, 0, 0]
    ],
    //and so on
  ];

  randomizeTetrominoType(noOfTypes)
  {
    return Math.floor(Math.random() * noOfTypes);
  }
