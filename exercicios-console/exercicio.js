const prompt = require("prompt-sync")();

const nomes = [];
const notas = [];

let soma = 0;

let maior = 0;
let nomeMaior = "";

let menor = 0;
let nomeMenor = "";

function calculaMedia() {

    for (let i = 1; i <= 15; i++) {

        let nome = prompt("nome : " + i + " : ");
        let nota = Number(prompt("Digite a nota do aluno: " + nome + " : "));

        // Guarda os dados para usar depois, sem perguntar de novo.
        nomes[i - 1] = nome;
        notas[i - 1] = nota;
        soma = soma + nota;

        if (i === 1 || nota > maior) {
            maior = nota;
            nomeMaior = nome;
        }

        if (i === 1 || nota < menor) {
            menor = nota;
            nomeMenor = nome;
        }
    }

    let media = soma / 15;

    console.log("\nRESULTADOS");
    console.log("Média da turma: " + media);

    console.log("\nMaior nota: " + maior);
    console.log("Maior aluno: " + nomeMaior);

    console.log("\nMenor nota: " + menor);
    console.log("Menor aluno: " + nomeMenor);

    console.log("\n===== ALUNOS =====");

    for (let i = 0; i < notas.length; i++) {

        const nome = nomes[i];
        const nota = notas[i];

        if (nota > media) {
            console.log(nome + " acima da média " + nota + " pontos | média " + media);
        }

        if (nota < media) {
            console.log(nome + " abaixo da média " + nota + " pontos | média " + media);
        }

        if (nota == media) {
            console.log(nome + " está na média " + nota + " pontos | média " + media);
        }
    }
}

calculaMedia();
