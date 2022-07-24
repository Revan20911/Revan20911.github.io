let player1_choice = null;
let computerChoice = null;

window.onload = function init(){

 const rock = document.getElementById("Rock");
 const paper = document.getElementById("Paper");
 const scissors = document.getElementById("Scissors");
 const close_modal = document.getElementById("close");
 



 rock.addEventListener('click', clickRock);
 paper.addEventListener('click', clickPaper);
 scissors.addEventListener('click', clickScissors);
 close_modal.addEventListener('click', closeModal);

}


function clickRock(){
    player1_choice = 1;
    computer_Choice();
    console.log(player1_choice, computerChoice);

}

function clickPaper(){
    player1_choice = 2;
    computer_Choice();
    console.log(player1_choice, computerChoice);
}

function clickScissors(){
    
    player1_choice = 3;
    computer_Choice();
    console.log(player1_choice);

}

function closeModal(){

    let winnerBox = document.getElementById("win-box");
    winnerBox.style.display = 'none';
    reset();

}

function computer_Choice(){

    var numArray = new Array(1,2,3);
    let rand = Math.floor(Math.random() * 3);
    computerChoice = numArray[rand];
    GameResult();
}

function GameResult(){

    let winnerBox = document.getElementById("win-box");
    let winner = document.querySelector('[class="modal-message"]');

    let draw = "DRAW";
    let p1 = "Player 1 wins";
    let cpu = "Computer Wins";
    

    if(player1_choice == 1){
        if(computerChoice == 1){

            winnerBox.style.display = "flex";
            winner.innerHTML = draw;
            
        }
        if(computerChoice == 2){

            winnerBox.style.display = "flex";
            winner.innerHTML = "Player 1 wins!";
        }else{

            winnerBox.style.display = "flex";
            winner.innerHTML = "Computer Wins!";
        }
    }

    if(player1_choice == 2){
        if(computerChoice == 1){

            winnerBox.style.display = "flex";
            winner.innerHTML = "Player 1 wins!";

        }else if(computerChoice == 2){

            winnerBox.style.display = "flex";
            winner.innerHTML = "DRAW! ";

        }else{

            winnerBox.style.display = "flex";
            winner.innerHTML = "computer wins!";
        }
    }
    if(player1_choice == 3){
        if(computerChoice == 1){

            winnerBox.style.display = "flex";
            winner.innerHTML = "computer wins!";

        }else if(computerChoice == 2){

            
            winnerBox.style.display = "flex";
            winner.innerHTML = "Player 1 wins!";
            

        }else{

            winnerBox.style.display = "flex";
            winner.innerHTML = "DRAW! ";
            
        }
    }
}

function updateScore(){

    document.getElementById("score").innerHTML = count;
}

function reset(){

    player1_choice === 0;
    computerChoice === 0;
}