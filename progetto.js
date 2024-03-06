let mossa = ["paper", "rock", "scissor"];

let playerSelection = "";
let computerSelection = "";
let playerPoints = 0;
let computerPoints = 0;
let isFinished = false;
//let string_result;
//computerSelection = getComputerChoice();

const buttonRock = document.getElementById("btn-rock");
const buttonPaper = document.getElementById("btn-paper");
const buttonScissor = document.getElementById("btn-scissor");
const buttonReset = document.getElementById("btn-reset");

//"accediamo" al paragarafo p che verrà modificato (dove sovrascriveremo il risultato con la stringa ottenuta)
let output = document.getElementById("result-string");

let mossaGiocatore = document.getElementById("mossa-giocatore");
let mossaComputer = document.getElementById("mossa-computer");

let stringaPuntiGiocatore = document.getElementById("player-text");
let stringaPuntiComputer = document.getElementById("computer-text");

//output.innerHTML = playRound(playerSelection, computerSelection);

buttonRock.addEventListener("click", ()=>{
    playerSelection = buttonRock.textContent;
    //console.log(playRound(playerSelection, computerSelection));
    reset();
    getButton();
})

buttonPaper.addEventListener("click", ()=>{
    playerSelection = buttonPaper.textContent;
    //console.log(playRound(playerSelection, computerSelection));
    reset();
    getButton();
})

buttonScissor.addEventListener("click", ()=>{
    playerSelection = buttonScissor.textContent;
    //console.log(playRound(playerSelection, computerSelection));
    reset();
    getButton();
})

buttonReset.addEventListener("click", ()=>{
    mossaGiocatore.innerHTML = "";
    mossaComputer.innerHTML = "";
    output.innerHTML = "";
    playerPoints = 0;
    computerPoints = 0;
    points = [0, 0]
    stringaPuntiGiocatore.innerHTML = "Player:" + points[0];
    stringaPuntiComputer.innerHTML = "Computer:" + points[1];
})

function reset(){
    if (playerPoints == 3 || computerPoints == 3){
        mossaGiocatore.innerHTML = "";
        mossaComputer.innerHTML = "";
        output.innerHTML = "";
        playerPoints = 0;
        computerPoints = 0;
        points = [0, 0]
        stringaPuntiGiocatore.innerHTML = "Player:" + points[0];
        stringaPuntiComputer.innerHTML = "Computer:" + points[1];
    }
}
//game();

//funzione che ritorna la mossa (in modo casuale) del computer
function getComputerChoice(){
    var mossa_avversario;
    mossa_avversario = mossa[(Math.floor(Math.random() * mossa.length))];
    return mossa_avversario;
}

//funzione che fa giocare un round del gioco e ritorna se il giocatore ha vinto o perso contro il computer
function playRound(playerSelection, computerSelection){
    var string_result;
    if (computerSelection == playerSelection){
        string_result = "Draw";
        return string_result;
    } else if (playerSelection == "paper"){
        switch(computerSelection){
        case "rock":
            string_result = "You won! Paper beats rock";
            playerPoints++
            break;
        case "scissor":
            string_result = "You lost! Scissor beats paper";
            computerPoints++
            break;
        }
    } else if (playerSelection == "rock"){
        switch(computerSelection){
        case "scissor":
            string_result = "You won! Rock beats scissor";
            playerPoints++
            break;
        case "paper":
            string_result = "You lost! Paper beats rock";
            computerPoints++
            break;
        }
    } else {
        switch(computerSelection){
        case "paper":
            string_result = "You won! Scissor beats paper";
            playerPoints++
            break;
        case "rock":
            string_result = "You lost! Rock beats scissor";
            computerPoints++
            break;
        }
    }
    return string_result;
}

/*
// funzione che gioca una partita (5 round)
function game(){
    var i;
    const NUMERO_ROUND = 5;
    for (i = 0; i <  NUMERO_ROUND; i++){
        var computerSelection = getComputerChoice();
        let stringa_mossa = prompt("Inserisci la mossa");
        let playerSelection = stringa_mossa.toLowerCase();
        console.log(playerSelection, computerSelection)
        console.log(playRound(playerSelection, computerSelection));
    }
}
*/

//verifichiamo se il punteggio del player o del computer è 5, se si: azzeriamo i punteggi (dobbiamo restituire un array per gestire il ritorno di piu valori da parte di una funzione)
function isFive(player_points, computer_points){
    if (player_points == 6 || computer_points == 6){
        isFinished = true;
        /*player_points = 0;
        computer_points = 0;
    }
    return [player_points, computer_points];*/
    }
    return isFinished;
}

function setToZero(bool){
    if (bool == true){
        isFinished = false;
        playerPoints = 0;
        computerPoints = 0;
    }
    return [playerPoints, computerPoints];
}

function getButton(){
    computerSelection = getComputerChoice();
    output.innerHTML = playRound(playerSelection, computerSelection);
    mossaGiocatore.innerHTML = playerSelection;
    mossaComputer.innerHTML = computerSelection;
    isFinished = isFive(playerPoints, computerPoints)
    points = setToZero(isFinished)
    stringaPuntiGiocatore.innerHTML = "Player:" + points[0];
    stringaPuntiComputer.innerHTML = "Computer:" + points[1];
}

