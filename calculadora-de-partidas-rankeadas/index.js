let nomeJogador = "Nathan";
let vitorias = 209;
let derrotas = 5;
let saldo = vitorias - derrotas;

let resultado = resultadoRanking(saldo);
console.log("O Heroi " + nomeJogador + " tem o saldo de " + saldo + " e esta no nivel " + resultado);

function resultadoRanking(saldo) {
    let nivel = ""

    if(saldo <= 10){
        nivel = "Ferro"
    } else if(saldo > 10 && vitorias <= 20){
        nivel = "Bronze"
    } else if(saldo > 20 && vitorias <= 50){
        nivel = "Prata"
    } else if(saldo > 50 && vitorias <= 80){
        nivel = "Ouro"
    } else if(saldo > 80 && vitorias <= 90){
            nivel = "Diamante"
    } else if(saldo > 90 && vitorias <= 100){
        nivel = "Lendario"
    } else if(saldo > 100){
        nivel = "Imortal"
    } else{
        nivel = "indefinido"
    }

    return nivel;
}