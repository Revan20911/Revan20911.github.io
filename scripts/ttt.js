
const Player = (player, symbol) => {
    return {player, symbol};
};

const buildBoard = (() => {
let board = [];

    for(let i=0; i < 9; i++){

        board.push('');
    }

    let container = document.querySelector(".board");

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

                gameState.checkWinner();

                gameState.spaces += 1;

                if(!gameState.winner ){
                    if(gameState.spaces < 9){
                        gameState.switchPlayer();     
                    }else{
                        gameState.draw();
                    }
                                   
                }
            })
        });
    return { board };
})();


const gameState = (() =>{

    const p1 = Player("Player 1", 'x');
    const p2 = Player("Player 2", 'o');

    let spaces = 0;

    let currentPlayer = p1;
    let winner = false;

    let winMessage = document.querySelector(".modal");

    let message = document.createElement("div");
    message.className = "modal-content";
    winMessage.appendChild(message);

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
                    winMessage.style.display = "flex";
                    winMessage.appendChild(message).innerHTML = this.currentPlayer.player + ' Wins';

                    let replay = document.createElement("div");
                    replay.className = "button";
                    replay.innerHTML = "Replay?";
    

                    replay.addEventListener('click', reset);

                    message.appendChild(replay);

                }
        })
    }

    function draw(){


        winMessage.style.display = "flex";
        winMessage.appendChild(message).innerHTML = 'DRAW!';

        let replay = document.createElement("div");
        replay.className = "button";
        replay.innerHTML = "Replay?";


        replay.addEventListener('click', reset);

        message.appendChild(replay);

    }

    function reset(){

        winMessage.style.display = "none";
        location.reload();
    }

    return{ currentPlayer, winner, spaces, switchPlayer, checkWinner, draw};
})();





















