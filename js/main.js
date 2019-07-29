/*----- constants -----*/
const MARKERS = {
  '0': '',
  '1': 'O',
  '-1': 'X'
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







/*----- event listeners -----*/ 
document.querySelector('section.board')
  .addEventListener('click', handleClick);

//reset game

document.querySelector('button')
.addEventListener('click', init);






/*----- functions -----*/
init();

function init() {
    board = [0,1,2,3,4,5,6,7,8];
    turn = 1;
    winner = null;  // 1, -1, null (no winner), 'T' (tie)
    board.forEach(function(square) {
      let div = document.getElementById(square);
      div.innerHTML = ''
      });

  };


  

function render () {
  
  for (let i = 0; i<winningArr.length; i++){
    let sum = 0;
    winningArr[i].forEach(function(each){
      sum += board[each]
      console.log('b' + board[each])
      console.log('w '+ winningArr[i]+ sum)
      if (sum  === -3){
        console.log('Player X won!')
      } else if (sum  === 3){
        console.log('Player O won!')
      }
      console.log(sum)
    })
  }



}

function handleClick(evt) {
  //get idx of column's click
  let idx = parseInt(evt.target.id);
  console.log('this is idx: '+idx)


  if (isNaN(idx) || winner) return;
  if (document.getElementById(idx).innerHTML === 'O' || document.getElementById(idx).innerHTML=== 'X') {
    console.log('already used');
    return;
  } 
  document.getElementById(idx).innerHTML = MARKERS[turn]
  board[idx] = turn;
 
  console.log('turn: '+ turn + 'idx' + idx)
  

  turn *= -1;
  render();

}

