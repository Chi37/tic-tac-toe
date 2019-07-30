/*----- constants -----*/


const MARKERS = {
  'null': 'white',
  '1': 'blue',
  '-1': 'red',
}

const winningArr = [
  [0, 1, 2],
  [3, 4, 5],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
]

/*----- app's state (variables) -----*/ 
let board, turn, winner;

/*----- cached element references -----*/

let squares = document.querySelectorAll('div');

/*----- event listeners -----*/ 
document.querySelector('section.board')
  .addEventListener('click', handleClick);

//reset game

document.querySelector('button')
.addEventListener('click', init);




/*----- functions -----*/
init();

function init() {
    board = [null,null,null,null,null,null,null,null,null,] //[0,1,2,3,4,5,6,7,8];
    turn = 1;
    winner = null;  // 1, -1, null (no winner), 'T' (tie)
    render();
  };


  

function render () {

  board.forEach(function(sqr, idx) {
  squares[idx].style.backgroundColor = MARKERS[sqr];
  });

  for (let i = 0; i<winningArr.length; i++){
    let sum = 0;
    winningArr[i].forEach(function(each){
      sum += board[each]
    })
    if (sum  === -3){
      alert('Player X won!')
    } else if (sum  === 3){
      alert('Player O won!')
    } 
  }



}

function handleClick(evt) {
  //get idx of column's click
  let idx = parseInt(evt.target.id);
  if (isNaN(idx) || winner) return;
  if (document.getElementById(idx).style.backgroundColor === MARKERS['1'] || document.getElementById(idx).style.backgroundColor === MARKERS['-1']) {
    console.log('already used');
    return;
  } 
  document.getElementById(idx).style.backgroundColor = MARKERS[turn]
  board[idx] = turn;
 
  turn *= -1;
  render(idx);

}

function getWinner() {

}