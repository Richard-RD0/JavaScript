//Dia da semana por número(Switch case)

var prompt = require('prompt-sync')();

let Dia = Number(prompt("Digite um número do dia da semana: "));

switch(Dia){
    case 1:
        console.log("O dia escolhido foi: Domingo");
    break;
    case 2:
        console.log("O dia escolhido foi: Segunda");
    break;
    case 3:
        console.log("O dia escolhido foi: Terça");
    break;
    case 4:
        console.log("O dia escolhido foi: Quarta");
    break;
    case 5:
        console.log("O dia escolhido foi: Quinta");
    break;
    case 6:
        console.log("O dia escolhido foi: Sexta");
    break;
    case 7:
        console.log("O dia escolhido foi: Sábado");
    break;

    default:
        console.log("Dado inválido! 😢");
}
    