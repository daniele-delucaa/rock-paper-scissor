let mossa = ["carta", "sasso", "forbice"];

function getComputerChoice(){
    var mossa_avversario;
    mossa_avversario = mossa[(Math.floor(Math.random() * mossa.length))];
    return mossa_avversario
}
