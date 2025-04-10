//Verificar o mês pelo número(Switch case)

var prompt = require('prompt-sync')();

let mes = Number(prompt('digite um numero para saber o mes '));

switch(mes){
    case 1:
        console.log("Janeiro");
    break;
    case 2:
        console.log("Fevereiro");
    break;
    case 3:
        console.log("Março");
    break;
    case 4:
        console.log("Abril");  
      break;
     case 5:
            console.log("maio");
        break;
     case 6:
            console.log("junho");
        break;
     case 7:
            console.log("julho");
        break;
        case 8:
            console.log("agosto");
        break;
        case 9:
            console.log("setembro");
        break;
        case 10:
            console.log("outubro");
        break;
        case 11:
            console.log("Novembro");
        break;
        case 12:
            console.log("Dezembro");
        break;
    
    
        default:
            console.log("Dado inválido! 😢");
};