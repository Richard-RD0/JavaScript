//Verificar se um aluno foi aprovado

var prompt = require('prompt-sync')();

let nota = Number(prompt('qual foi sua ultima nota '));

if (nota <= 4){
    console.log("voce foi reprovado ");
}else if (nota >= 5){
    console.log("voce foi aprovado");
}else{
    console.log("dados invalidos");
}