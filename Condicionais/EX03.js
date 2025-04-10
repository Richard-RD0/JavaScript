//Verificar se um número é par ou ímpar

var prompt = require('prompt-sync')();

let Numero = Number(prompt ('Digite um numero Par ou Impar')); 

if (Numero % 2 == 0 ){

    console.log("numero Par");

}else if(numero % 2 == 1){

    console.log("numero impar");

}else{

    console.log("dados invalido");
}