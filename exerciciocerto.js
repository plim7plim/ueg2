const prompt = require("prompt-sync")();

function lerNotas(notas, quantidadeNotas) {
    for (let posicao = 0; posicao < quantidadeNotas; posicao++) {
        notas[posicao] = Number(prompt("Digite a nota do aluno: "));
    }
}

function calcularMedia(notas) {
    let soma = 0;

    for (const valor of notas) {
        soma += valor;
    }

    return soma / notas.length;
}

function encontrarMaiorNota(notas) {
    let maiorNota = notas[0];

    for (const nota of notas) {
        if (nota > maiorNota) {
            maiorNota = nota;
        }
    }

    return maiorNota;
}


function encontrarMenorNota(notas) {
    let menorNota = notas[0];

    for (const nota of notas) {
        if (nota < menorNota) {
            menorNota= nota;
        }
    }

    return menorNota;
}

function mostrarNotas(notas, media){
    for(const notinha of notas ){
        if(notinha>media){
            console.log("acima da média" + " " +  notinha)
        }else{
            console.log("Menor ou igual a média!" + " " +  notinha)
        }
    }
}






let quantidadeNotas = Number(prompt("Quantas notas serão inseridas: "));
const notas = [];

lerNotas(notas, quantidadeNotas);

console.log(notas);

const media = calcularMedia(notas);
console.log(media);

const maiorNota = encontrarMaiorNota(notas);
console.log(maiorNota);

const menorNota = encontrarMenorNota(notas);
console.log(menorNota);

const alguma = mostrarNotas(notas, media);
console.log(alguma);