var player1_choice = 0;
var computerChoice = 0;

var count = 0;


function clickRock(this){
    var id = document.getElementById("Paper");
    if(this.id == id){
        player1_choice +=1;
        computer_Choice();
        GameResult();
    }


}

function clickPaper(this){
    var id = document.getElementById("Paper");
    if(this.id == id){
        player1_choice +=2;
        compute_Choice();
        GameResult();
        count++;
    }
}

function clickScissors(this){

    var id = document.getElementById("Scissors");
    if(this.id == id){
        player1_choice +=3;
        computer_Choice();
        GameResult();
        count++;
    }

}


function computer_Choice(){

    var numArray = new Array(1,2,3);
}

function GameResult(){

    var winner = 0;

    if(player1_choice == 1){
        if(computerChoice == 1){
            // display "DRAW!"
        }
        else if(computerChoice == 2){
            // display "Player 2 wins the round!"
        }
        else{
            // player 1 wins the round
        }
    }



    if(winner == 1){

        // some kind of win message for player 1
    }

    else{
        // some kind of win message for computer
    }

}

function playAgain(){

    count == 0;
    player1_choice == 0;
    computerChoice == 0;
}