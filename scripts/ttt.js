const buildBoard = () => {

    let container = document.querySelector(".board");
    let boardArray = [];
    return () => {

        for(let i=0; i < 9; i++){

            let $x = document.createElement("div");
            $x.className = "x";
            $x.innerHTML = "x";

            let $o = document.createElement("div");
            $o.className = "o";
            $o.innerHTML = "o";
            
            let $cell = document.createElement("div");
            $cell.className = "cell";
            $cell.id = i;
            $cell.appendChild($x);
            $cell.appendChild($o);
            container.appendChild($cell);
            $cell.addEventListener("click", () => {

                if($x.style.display == "block"){
                    $x.style.display = "none";
                }else{
                    $x.style.display = "block";
                    player1.turn = false;
                    cpu.turn = true;
                    turn++;
                }
            })

            boardArray.push($cell);

        }
        console.log(boardArray);
    };
};

const board = buildBoard();


const winningTiles = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8]

];


const Player = (player, symbol, ai, turn) => {

    return {player, symbol, ai, turn};
};

const player1 = Player("Player", "x", false, true);
const cpu = Player("CPU", "o", true, false);

let winner = null;
let turn = 0;



function cpuTurn(selectedCell){

    if(cpu.turn){

        selectedCell.$o.style.display = "block";
        cpu.turn = false;
        player1.turn = true;
        turn++;
    }
}

function selectedCell(){


    //write AI logic to determine the best cell to choose for each turn and then return the cell to
    //pass through cpuTurn.

    return move;
}


function getWinner(){

    //Check the filled spaces and check if any winningTiles are filled with the same mark then display a message. 


}



window.addEventListener('load', board);







