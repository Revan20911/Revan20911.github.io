
const Player = (player, symbol) => {
    return {player, symbol};
};

const buildBoard = (() => {

let container = document.querySelector(".board");
let board = [];

    for(let i=0; i < 9; i++){

        board.push('');
    }

    board.forEach((item, index) => {

        let $cell = document.createElement("div");
        $cell.className = "cell";
    
        container.appendChild($cell);

        })

        Array.from(container.children).forEach(($cell, index) =>{

            $cell.addEventListener('click', function turn(){

                $cell.classList.add(gameState.currentPlayer.symbol);
                $cell.setAttribute('data', gameState.currentPlayer.symbol);

                board[index] = gameState.currentPlayer.symbol;

                $cell.removeEventListener('click', turn);

                gameState.spaces += 1;

                gameState.switchPlayer();

                gameState.checkWinner();

                

            })
        });
    return { board };
})();


const gameState = (() =>{

    const p1 = Player("human", 'x');
    const p2 = Player("computer", 'o');

    let spaces = 0;

    let currentPlayer = p1;
    let winner = false;


    const winningTiles = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    
    ];


    function switchPlayer(){

        this.currentPlayer === p1 ? this.currentPlayer = p2 : this.currentPlayer = p1;
        
    }

    function checkWinner(){
        winningTiles.forEach((item, index) => {

            if(buildBoard.board[item[0]] === this.currentPlayer.symbol && 
                buildBoard.board[item[1]] === this.currentPlayer.symbol && 
                buildBoard.board[item[2]] === this.currentPlayer.symbol){
                    this.winner = true;
                }

        })
    }


    return{ currentPlayer, winner, spaces, winningTiles, switchPlayer, checkWinner};
})();





















