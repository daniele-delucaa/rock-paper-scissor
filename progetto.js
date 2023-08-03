let mossa = ["carta", "sasso", "forbice"];

//funzione che ritorna la mossa (in modo casuale) del computer
function getComputerChoice(){
    var mossa_avversario;
    mossa_avversario = mossa[(Math.floor(Math.random() * mossa.length))];
    return mossa_avversario
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
const playerSelection = "carta";
const computerSelection = getComputerChoice();
console.log(playerSelection, computerSelection)
console.log(playRound(playerSelection, computerSelection));
*/