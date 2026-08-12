const prompt = require("prompt-sync")();

let soma = 0;

let maior = 0;
let nomeMaior = "";
let menor = Infinity;
let nomeMenor="";

let abaixoMedia="";
let acimaMedia="";

function calculaMedia(){
    for (let i = 1; i<=2; i++){
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
        media = soma/2;

        if(nota> media){
            acimaMedia = nome + nota
        }


        if(nota < media){
            abaixoMedia = nome + " " + nota 
        }
    }
    
    
    console.log("maior " + maior);
    console.log(acimaMedia)
    console.log("Maior aluno: " + nomeMaior);

    console.log("menor " + menor);
    console.log(abaixoMedia)
    console.log("Menor aluno: " + nomeMenor);


    console.log("media " + media);
    
    
}

calculaMedia();
