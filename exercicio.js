const prompt = require("prompt-sync")();

let soma = 0;

let maior = 0;
let nomeMaior = "";
let menor = Infinity;
let nomeMenor="";

function calculaMedia(){
    for (let i = 1; i<=15; i++){
        let nome = prompt("nome : " + i + " : ")
        let nota =  Number(prompt("Digite a nota do aluno: " + nome + " : "));
        
        console.log("Nome: " + nome);

        soma = soma + nota;
    
        if (nota > maior){
            maior = nota //seta maior
            nomeMaior=nome;
        }
        if (nota<menor){
            menor = nota //seta menor
            nomeMenor = nome;
        }
        media = soma/15;
    }
    
    
    console.log("maior " + maior);
    console.log("Maior aluno: " + nomeMaior);

    console.log("menor " + menor);
    console.log("Menor aluno: " + nomeMenor);

    console.log("media " + media);

}

calculaMedia();

console.log();