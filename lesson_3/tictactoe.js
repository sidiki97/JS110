
const readline = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

function prompt (message) {
  console.log(`=> ${message}`);
}

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}
function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${emptySquares(board).join(', ')}):`);
    square = readline.question().trim();

    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {

  // added defensive
  let randomIndex = blockHumanWin(board);
  console.log(randomIndex);
  if (randomIndex === null) {
    randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    let square = emptySquares(board)[randomIndex];
    board[square] = COMPUTER_MARKER;
  } else {
    board[randomIndex] = COMPUTER_MARKER;
  }
  // console.log(randomIndex);
  // let square = emptySquares(board)[randomIndex];
  // board[square] = COMPUTER_MARKER;
}



let board = initializeBoard();

function boardFull(board) {
  return emptySquares(board).length === 0;
}


// displayBoard(board);

// playerChoosesSquare(board);
// displayBoard(board);

while (true) {
  let board = initializeBoard();

  while (true) {
    displayBoard(board);

    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    
    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
  }

  displayBoard(board);

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
  } else {
    prompt("It's a tie!");
  }

  prompt('Play again? (y or n)');
  let answer = readline.question().toLowerCase()[0];
  if (answer !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');





function someoneWon(board) {
  return !!detectWinner(board);
}


function blockHumanWin(board){
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [ sq1, sq2, sq3 ] = winningLines[line];

    if (
        board[sq1] === INITIAL_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      return sq1;
    } else if (
        board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === INITIAL_MARKER
    ) {
      return sq3;
    }
  }

  return null;
}
/*

2 squares in a row

  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
  ];

for (let line = 0; line < potentialHumanWin.length; line++) {
  let [sq1, sq2, sq3] = potentialHumanWin[line];

  if (
        (
          board[sq1] === HUMAN_MARKER &&
          board[sq2] === HUMAN_MARKER &&
          board[sq3] === INITIAL_MARKER
        )
        

    ) {
      return sq3;
    } else if (
              
          board[sq1] === INITIAL_MARKER &&
          board[sq2] === HUMAN_MARKER &&
          board[sq3] === HUMAN_MARKER
        
    )
    {
      return sq1;
    }
}

*/

function detectWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [ sq1, sq2, sq3 ] = winningLines[line];

    if (
        board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
        board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}


function joinOr(arr = [], sep, and) {
  if (arr.length > 2) {
    if (sep) {
      let str = arr.join(sep);
      if (and){
        return str.slice(0, str.length - 1) + and + str[str.length - 1];
      }
      return str.slice(0, str.length - 1) + 'or' + str[str.length - 1];
    } else if (arr.length === 2) {
      return arr[0] + ' or ' + arr[1];
    }

    return arr.join()
  }
}

/*

  input: upto 3 arguments
  output: joined list with specific modifications

  first argument: array
  second argument: separator (optional)
  third argument: diff or (optional)

  Explicit rules:
  - at least 2 nums in array, add 'or'
  - 'or' is default placed before last element

  ?'s
  Can two element array have different separator than 'or'?

  Datastructures 
  - input array

  Algo

  Join elements in required format
  Determine size of array
    if >2 {guard clause}
      if second arg exists
        join the elements with separator if defineds
        return slice string (exclude last character) + third arg('or') + last character
      else 
        join elements
        return slice string (exclude last character) + third arg('or') + last character


    else if (===2)
    join elements with 'or'


  return array.join()

  Default: 
  return array.join();



*/



// joinOr([1, 2, 3]);               // => "1, 2, or 3"
// joinOr([1, 2, 3], '; ');         // => "1; 2; or 3"
// joinOr([1, 2, 3], ', ', 'and');  // => "1, 2, and 3"
// joinOr([]);                      // => ""
// joinOr([5]);                     // => "5"
// joinOr([1, 2]);                  // => "1 or 2"