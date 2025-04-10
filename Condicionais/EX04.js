//Verificar se uma senha digitada está correta

var prompt = require('prompt-sync')();

let senha = Number(prompt("Digite uma senha "));
let confirmarSenha = Number(prompt("digite a senha novamente "));

if (confirmarSenha = senha){
    console.log("a senha esta correta ");
}else{
    console.log("senha invalida");
}