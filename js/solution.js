//Constants
const COLORS = {
    '1': 'goldenrod',
    '-1': 'blue',
    'null': 'aliceblue'
};

const WIN_COMBOS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

//State Var
let turn, winner, board

//Cached El
let squares = document.querySelectorAll('td div');


//Event Listeners
document.querySelector('table').addEventListener('click', handleMove);


//Functions
init();

function getWinner() {
    //A big if statement, checking the 8 possibilities 
    // if (Math.abs(board[0] + board[3] + board[6]) === 3) return board[0] //return the owner of the person who marked
    // console.log(winner)


    for (let i = 0; i < WIN_COMBOS.length; i++){
        if (Math.abs(
                board[WIN_COMBOS[i][0]] + 
                board[WIN_COMBOS[i][1]] + 
                board[WIN_COMBOS[i][2]] === 3)){return board[0]
        }
    }

    if (board.includes(null)) return null;
    return 'T'; //return to winner variable and then get winner in the render function
}




function handleMove(e){
    //get idx of square 

    let idx = parseInt(e.target.id.replace('sq',''));

    //check if sq is avail or already filled
    if (board[idx]) return; //truthy not falsey aka null

    //set value to current player then switch
    board[idx] = turn; //1 or -1
    turn *= -1
    winner = getWinner();
    //TO DO: Check for winner
    console.log(board[idx])
    render();
}

function render() {
    //loop over board
        // for each sq, change the bg color to one of the values in COLORS
    board.forEach(function(sqr, idx) {
        squares[idx].style.backgroundColor = COLORS[sqr];
    });
    //TODO: Add win logic later
    if (winner === 'T') {
        alert('Cats Game');
    } else if (winner) {
        alert(`Congratulations ${COLORS[turn]}`)
    }

}

function init() {
    board = [ null, null, null, null, null, null, null, null, null];
    render();
}
