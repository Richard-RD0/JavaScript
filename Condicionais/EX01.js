//Verificar se um número é positivo, negativo ou zero.

var prompt = require('prompt-sync')();

let Numero = Number(prompt ('Digite um numero Positivo ou Negativo')); 

if (Numero >= 0){

    console.log("o numero informado é Positivo");

}else if(numero < 0 ){

    console.log("o numero informado é Negativo");

}else{
    console.log("informação invalida");
}
