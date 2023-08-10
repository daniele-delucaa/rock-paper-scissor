let mossa = ["carta", "sasso", "forbice"];

let playerSelection = "";
let computerSelection = "";
//let string_result;
computerSelection = getComputerChoice();

const buttonRock = document.getElementById("btn-rock");
const buttonPaper = document.getElementById("btn-paper");
const buttonScissor = document.getElementById("btn-scissor");

//"accediamo" al paragarafo p che verrà modificato (dove sovrascriveremo il risultato con la stringa ottenuta)
let output = document.getElementById("result-string");

let mossaGiocatore = document.getElementById("mossa-giocatore");
let mossaComputer = document.getElementById("mossa-computer");
//output.innerHTML = playRound(playerSelection, computerSelection);
/*
const risultato = document.createElement("p");
const node = document.createTextNode(string_result);
risultato.appendChild(node);
const element = document.getElementById("string-div");
element.appendChild(risultato);
*/


buttonRock.addEventListener("click", ()=>{
    playerSelection = buttonRock.textContent;
    //console.log(playRound(playerSelection, computerSelection));
    output.innerHTML = playRound(playerSelection, computerSelection);
    mossaGiocatore.innerHTML = playerSelection;
    mossaComputer.innerHTML = computerSelection;
})

buttonPaper.addEventListener("click", ()=>{
    playerSelection = buttonPaper.textContent;
    //console.log(playRound(playerSelection, computerSelection));
    output.innerHTML = playRound(playerSelection, computerSelection);
    mossaGiocatore.innerHTML = playerSelection;
    mossaComputer.innerHTML = computerSelection;
})

buttonScissor.addEventListener("click", ()=>{
    playerSelection = buttonScissor.textContent;
    //console.log(playRound(playerSelection, computerSelection));
    output.innerHTML = playRound(playerSelection, computerSelection);
    mossaGiocatore.innerHTML = playerSelection;
    mossaComputer.innerHTML = computerSelection;
})

//game();

/*
console.log(playerSelection, computerSelection)
console.log(playRound(playerSelection, computerSelection));
*/

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
        string_result = "Pareggio";
        return string_result;
    } else if (playerSelection == "carta"){
        switch(computerSelection){
        case "sasso":
            string_result = "Hai vinto! Carta batte sasso";
            break;
        case "forbice":
            string_result = "Hai Perso! Forbice batte carta";
            break;
        }
    } else if (playerSelection == "sasso"){
        switch(computerSelection){
        case "forbice":
            string_result = "Hai vinto! Sasso batte forbice";
            break;
        case "carta":
            string_result = "Hai Perso! Carta batte sasso";
            break;
        }
    } else {
        switch(computerSelection){
        case "carta":
            string_result = "Hai vinto! Forbice batte carta";
            break;
        case "sasso":
            string_result = "Hai Perso! Sasso batte forbice";
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