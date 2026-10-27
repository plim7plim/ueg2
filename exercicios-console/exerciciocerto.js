const prompt = require("prompt-sync")();

function lerNotas(notas, quantidadeNotas) {
    for (let posicao = 0; posicao < quantidadeNotas; posicao++) {
        notas[posicao] = Number(prompt("Digite a nota do aluno: "));
    }
}

function calcularMedia(notas) {
    let soma = 0;

    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }

    return soma / notas.length;
}

function encontrarMaiorNota(notas) {
    let maiorNota = notas[0];

    for (let i = 0; i < notas.length; i++) {
        const nota = notas[i];
        if (nota > maiorNota) {
            maiorNota = nota;
        }
    }

    return maiorNota;
}

function encontrarMenorNota(notas) {
    let menorNota = notas[0];

    for (let i = 0; i < notas.length; i++) {
        const nota = notas[i];
        if (nota < menorNota) {
            menorNota= nota;
        }
    }

    return menorNota;
}

function mostrarNotas(notas, media) {
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] > media) {
            console.log("acima da média " + notas[i]);
        } else {
            console.log("Menor ou igual a média! " + notas[i]);
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

// A função já mostra as notas, então basta chamá-la.
mostrarNotas(notas, media);